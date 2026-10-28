/**
 * Content validator. The authority for everything under content/ (the
 * safe-edit MCP checks the same rules up front, CI checks them again).
 * Zero dependencies.
 *
 *   CLI:      node scripts/validate-content.mjs [rootDir]   exits 1 on any problem
 *   Library:  import { validate } from "./validate-content.mjs"
 *             validate({ exists, readText, list, readBytes }) -> string[] of problems
 *
 * The MCP vendors an exact copy of this file (npm run sync-validator there).
 *
 * The rules are the security boundary: content is plain text only. No HTML,
 * no script fields, only https/mailto/relative links, raster uploads only.
 */
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const GA4 = /^G-[A-Z0-9]{8,12}$/;
const GTM = /^GTM-[A-Z0-9]{6,8}$/;
const GSC = /^[A-Za-z0-9_-]{20,100}$/;
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const ROUTE = /^\/(?:[a-z0-9]+(?:-[a-z0-9]+)*(?:\/[a-z0-9]+(?:-[a-z0-9]+)*)*)?$/;
const IMAGE = /^\/uploads\/[A-Za-z0-9._-]+\.(?:png|jpe?g|webp|avif|gif)$/i;
const RESERVED = ["api", "uploads", "admin", "_next"];
const BLOCKS = ["hero", "section", "faq", "cta", "image"];

const isStr = (v) => typeof v === "string";
const noMarkup = (s) => !/[<>]/.test(s) && !/\u0000/.test(s);

export function validate(io) {
  const errors = [];
  const err = (file, msg) => errors.push(`${file}: ${msg}`);

  function checkText(file, where, v, max) {
    if (!isStr(v) || !v.trim()) return err(file, `${where} must be non-empty text`);
    if (v.length > max) err(file, `${where} is longer than ${max} characters`);
    if (!noMarkup(v)) err(file, `${where} contains < or >; plain text only`);
    // Inline links are [label](url); the url must be https, mailto or a /path.
    for (const m of v.matchAll(/\]\(([^)]*)\)/g)) {
      if (!/^(https:\/\/[^\s]+|mailto:[^\s]+|\/[^\s]*)$/.test(m[1])) err(file, `${where} has a link that is not https, mailto or a /path: ${m[1]}`);
    }
  }

  function readJson(file) {
    try {
      return JSON.parse(io.readText(file));
    } catch (e) {
      err(file, `not valid JSON (${e.message})`);
      return null;
    }
  }

  /* site.json */
  const siteFile = "content/site.json";
  if (io.exists(siteFile)) {
    const s = readJson(siteFile);
    const t = s?.tracking;
    if (!t || typeof t !== "object") err("content/site.json", "needs a tracking object");
    else {
      for (const k of Object.keys(t)) if (!["ga4", "gtm", "gsc"].includes(k)) err("content/site.json", `tracking.${k} is not an allowed tag type`);
      if (t.ga4 && !GA4.test(t.ga4)) err("content/site.json", "tracking.ga4 is not a G-XXXXXXXXXX id");
      if (t.gtm && !GTM.test(t.gtm)) err("content/site.json", "tracking.gtm is not a GTM-XXXXXXX id");
      if (t.gsc && !GSC.test(t.gsc)) err("content/site.json", "tracking.gsc is not a verification token");
    }
    if (s) for (const k of Object.keys(s)) if (k !== "tracking") err("content/site.json", `unknown key ${k}`);
  }

  /* meta.json: { "/route": { title, description, ogImage? } } */
  const metaFile = "content/meta.json";
  if (io.exists(metaFile)) {
    const m = readJson(metaFile) || {};
    for (const [route, v] of Object.entries(m)) {
      if (!ROUTE.test(route)) err("content/meta.json", `bad route key ${route}`);
      for (const k of Object.keys(v)) if (!["title", "description", "ogImage"].includes(k)) err("content/meta.json", `${route}.${k} is not allowed`);
      if (v.title !== undefined) checkText("content/meta.json", `${route}.title`, v.title, 70);
      if (v.description !== undefined) checkText("content/meta.json", `${route}.description`, v.description, 200);
      if (v.ogImage !== undefined && !IMAGE.test(v.ogImage)) err("content/meta.json", `${route}.ogImage must be an /uploads/ raster image`);
    }
  }

  /* faqs/<slug>.json: [{ q, a }] */
  const faqDir = "content/faqs";
  if (io.exists(faqDir)) {
    for (const f of io.list(faqDir).filter((n) => n.endsWith(".json"))) {
      const rel = `content/faqs/${f}`;
      const list = readJson(`${faqDir}/${f}`);
      if (!Array.isArray(list) || !list.length) { err(rel, "must be a non-empty array"); continue; }
      if (list.length > 20) err(rel, "more than 20 questions");
      list.forEach((it, i) => {
        checkText(rel, `[${i}].q`, it?.q, 200);
        checkText(rel, `[${i}].a`, it?.a, 1500);
      });
    }
  }

  /* pages/<slug>.json: new pages made of blocks */
  const pagesDir = "content/pages";
  if (io.exists(pagesDir)) {
    for (const f of io.list(pagesDir).filter((n) => n.endsWith(".json"))) {
      const rel = `content/pages/${f}`;
      const slug = f.replace(/\.json$/, "");
      const p = readJson(`${pagesDir}/${f}`);
      if (!p) continue;
      if (!SLUG.test(slug) || RESERVED.includes(slug)) err(rel, "file name must be a lowercase-hyphen slug that is not reserved");
      for (const k of Object.keys(p)) if (!["meta", "blocks"].includes(k)) err(rel, `unknown key ${k}`);
      checkText(rel, "meta.title", p.meta?.title, 70);
      checkText(rel, "meta.description", p.meta?.description, 200);
      if (p.meta?.ogImage !== undefined && !IMAGE.test(p.meta.ogImage)) err(rel, "meta.ogImage must be an /uploads/ raster image");
      if (!Array.isArray(p.blocks) || !p.blocks.length) { err(rel, "blocks must be a non-empty array"); continue; }
      if (p.blocks.length > 40) err(rel, "more than 40 blocks");
      p.blocks.forEach((b, i) => {
        const w = `blocks[${i}]`;
        if (!BLOCKS.includes(b?.type)) return err(rel, `${w}.type must be one of ${BLOCKS.join(", ")}`);
        const allowed = {
          hero: ["type", "kicker", "title", "lead"],
          section: ["type", "id", "title", "paragraphs", "ticks", "variant", "tag"],
          faq: ["type", "title", "items"],
          cta: ["type", "lead", "body", "button"],
          image: ["type", "src", "alt", "width", "height"],
        }[b.type];
        for (const k of Object.keys(b)) if (!allowed.includes(k)) err(rel, `${w}.${k} is not allowed on a ${b.type} block`);
        if (b.type === "hero") {
          checkText(rel, `${w}.title`, b.title, 100);
          if (b.kicker !== undefined) checkText(rel, `${w}.kicker`, b.kicker, 60);
          if (b.lead !== undefined) checkText(rel, `${w}.lead`, b.lead, 300);
        }
        if (b.type === "section") {
          checkText(rel, `${w}.title`, b.title, 100);
          if (b.id !== undefined && !SLUG.test(b.id)) err(rel, `${w}.id must be a slug`);
          if (b.variant !== undefined && !["real", "scene"].includes(b.variant)) err(rel, `${w}.variant must be real or scene`);
          if (b.tag !== undefined) checkText(rel, `${w}.tag`, b.tag, 40);
          for (const [k, max] of [["paragraphs", 1500], ["ticks", 200]]) {
            if (b[k] === undefined) continue;
            if (!Array.isArray(b[k]) || b[k].length > 20) err(rel, `${w}.${k} must be an array of up to 20`);
            else b[k].forEach((t, j) => checkText(rel, `${w}.${k}[${j}]`, t, max));
          }
        }
        if (b.type === "faq") {
          if (b.title !== undefined) checkText(rel, `${w}.title`, b.title, 100);
          if (!Array.isArray(b.items) || !b.items.length || b.items.length > 20) err(rel, `${w}.items must be 1 to 20 questions`);
          else b.items.forEach((it, j) => { checkText(rel, `${w}.items[${j}].q`, it?.q, 200); checkText(rel, `${w}.items[${j}].a`, it?.a, 1500); });
        }
        if (b.type === "cta") {
          checkText(rel, `${w}.lead`, b.lead, 200);
          if (b.body !== undefined) checkText(rel, `${w}.body`, b.body, 400);
          if (b.button !== undefined) checkText(rel, `${w}.button`, b.button, 60);
        }
        if (b.type === "image") {
          if (!IMAGE.test(b.src || "")) err(rel, `${w}.src must be an /uploads/ png, jpg, webp, avif or gif`);
          checkText(rel, `${w}.alt`, b.alt, 200);
          for (const k of ["width", "height"]) if (!Number.isInteger(b[k]) || b[k] < 1 || b[k] > 6000) err(rel, `${w}.${k} must be an integer 1 to 6000`);
        }
      });
    }
  }

  /* uploads: raster only, size capped, content sniffed */
  const upDir = "public/uploads";
  const MAGIC = [
    [/\.png$/i, Buffer.from([0x89, 0x50, 0x4e, 0x47])],
    [/\.jpe?g$/i, Buffer.from([0xff, 0xd8, 0xff])],
    [/\.gif$/i, Buffer.from("GIF8")],
  ];
  if (io.exists(upDir)) {
    for (const f of io.list(upDir)) {
      if (f === ".gitkeep") continue;
      const rel = `public/uploads/${f}`;
      if (!/\.(png|jpe?g|webp|avif|gif)$/i.test(f)) { err(rel, "only png, jpg, webp, avif or gif uploads are allowed"); continue; }
      const buf = io.readBytes(`${upDir}/${f}`);
      if (!buf) continue; // not fetched: an unchanged file already passed when it was added
      if (buf.length > 5 * 1024 * 1024) err(rel, "larger than 5 MB");
      const rule = MAGIC.find(([re]) => re.test(f));
      if (rule && !buf.subarray(0, rule[1].length).equals(rule[1])) err(rel, "file contents do not match its extension");
      if (/\.webp$/i.test(f) && buf.subarray(8, 12).toString() !== "WEBP") err(rel, "file contents do not match its extension");
    }
  }

  return errors;
}

/* CLI */
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const ROOT = path.resolve(process.argv[2] || ".");
  const abs = (p) => path.join(ROOT, p);
  const errors = validate({
    exists: (p) => fs.existsSync(abs(p)),
    readText: (p) => fs.readFileSync(abs(p), "utf8"),
    list: (d) => fs.readdirSync(abs(d)),
    readBytes: (p) => fs.readFileSync(abs(p)),
  });
  if (errors.length) {
    console.error(`Content check failed (${errors.length}):\n- ` + errors.join("\n- "));
    process.exit(1);
  }
  console.log("Content check passed.");
}
