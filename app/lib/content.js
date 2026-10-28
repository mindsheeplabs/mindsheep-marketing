import fs from "node:fs";
import path from "node:path";

/**
 * Reads content/ at build time. Everything under content/ is plain data
 * (validated by scripts/validate-content.mjs), so this file never evals or
 * renders anything it reads. Server only.
 */
const ROOT = path.join(process.cwd(), "content");

function readJson(rel, fallback) {
  try {
    return JSON.parse(fs.readFileSync(path.join(ROOT, rel), "utf8"));
  } catch {
    return fallback;
  }
}

/** Slugs of the pages made from blocks in content/pages. */
export function contentSlugs() {
  try {
    return fs
      .readdirSync(path.join(ROOT, "pages"))
      .filter((n) => n.endsWith(".json"))
      .map((n) => n.replace(/\.json$/, ""));
  } catch {
    return [];
  }
}

export function contentPage(slug) {
  return readJson(`pages/${slug}.json`, null);
}

/** FAQ items for a page, from content/faqs/<name>.json, else the code default. */
export function faqsFor(name, fallback = []) {
  const list = readJson(`faqs/${name}.json`, null);
  return Array.isArray(list) && list.length ? list : fallback;
}

/**
 * Page metadata: the code default with any title, description and og image
 * from content/meta.json laid over it. A home-style { absolute } title stays
 * absolute.
 */
export function metaFor(route, defaults) {
  const o = readJson("meta.json", {})[route];
  if (!o) return defaults;
  const next = { ...defaults };
  if (o.title) next.title = defaults.title && typeof defaults.title === "object" ? { absolute: o.title } : o.title;
  if (o.description) next.description = o.description;
  if (o.ogImage) next.openGraph = { ...(defaults.openGraph || {}), images: [o.ogImage] };
  return next;
}
