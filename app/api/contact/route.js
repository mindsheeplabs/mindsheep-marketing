import { Resend } from "resend";

// Instantiated per request, not at module scope, so the build does not need secrets.
function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

const BRAND = "Mindsheep Marketing";
const TO = ["david@mindsheep.com.au"];

const BUDGETS = {
  under5k: "Under $5,000",
  "5k-15k": "$5,000 to $15,000",
  "15k-50k": "$15,000 to $50,000",
  "50k+": "$50,000+",
};

function esc(v = "") {
  return String(v).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/* ------------------------------------------------------------ request facts */

function clientIp(headers) {
  const cands = [
    headers.get("cf-connecting-ip"),
    headers.get("x-real-ip"),
    (headers.get("x-forwarded-for") || "").split(",")[0],
    headers.get("true-client-ip"),
    headers.get("x-client-ip"),
  ]
    .map((s) => (s || "").trim())
    .filter(Boolean);
  return cands[0] || "";
}

function parseUa(ua = "") {
  const browser =
    /Edg\/([\d.]+)/.exec(ua)?.[0].replace("Edg/", "Edge ") ||
    /OPR\/([\d.]+)/.exec(ua)?.[0].replace("OPR/", "Opera ") ||
    /SamsungBrowser\/([\d.]+)/.exec(ua)?.[0].replace("SamsungBrowser/", "Samsung Internet ") ||
    /Chrome\/([\d.]+)/.exec(ua)?.[0].replace("Chrome/", "Chrome ") ||
    /Firefox\/([\d.]+)/.exec(ua)?.[0].replace("Firefox/", "Firefox ") ||
    (/Safari\//.test(ua) && /Version\/([\d.]+)/.exec(ua)?.[0].replace("Version/", "Safari ")) ||
    "Unknown browser";
  const os =
    (/iPhone|iPad|iPod/.test(ua) && `iOS ${/OS ([\d_]+)/.exec(ua)?.[1]?.replace(/_/g, ".") || ""}`) ||
    (/Android ([\d.]+)/.exec(ua) && `Android ${/Android ([\d.]+)/.exec(ua)[1]}`) ||
    (/Windows NT ([\d.]+)/.exec(ua) && `Windows ${{ "10.0": "10/11", "6.3": "8.1", "6.1": "7" }[/Windows NT ([\d.]+)/.exec(ua)[1]] || ""}`) ||
    (/Mac OS X ([\d_]+)/.exec(ua) && `macOS ${/Mac OS X ([\d_]+)/.exec(ua)[1].replace(/_/g, ".")}`) ||
    (/CrOS/.test(ua) && "ChromeOS") ||
    (/Linux/.test(ua) && "Linux") ||
    "Unknown OS";
  const device = /iPad|Tablet/.test(ua)
    ? "Tablet"
    : /Mobi|iPhone|Android/.test(ua)
      ? "Phone"
      : "Desktop";
  const bot = /bot|crawl|spider|slurp|headless|python|curl|wget/i.test(ua);
  return { browser: browser.trim(), os: os.trim(), device, bot };
}

async function geo(ip) {
  if (!ip || /^(127\.|10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.|::1|fc|fd)/.test(ip)) {
    return { note: "private or local address, no lookup" };
  }
  const ctl = new AbortController();
  const t = setTimeout(() => ctl.abort(), 3000);
  try {
    const r = await fetch(`https://ipwho.is/${encodeURIComponent(ip)}`, { signal: ctl.signal });
    const j = await r.json();
    if (j && j.success !== false) {
      return {
        country: j.country,
        region: j.region,
        city: j.city,
        postcode: j.postal,
        latlon: j.latitude && j.longitude ? `${j.latitude}, ${j.longitude}` : undefined,
        timezone: j.timezone?.id,
        isp: j.connection?.isp,
        org: j.connection?.org,
        asn: j.connection?.asn ? `AS${j.connection.asn}` : undefined,
        type: j.type,
        source: "ipwho.is",
      };
    }
    return { note: j?.message || "lookup failed" };
  } catch (e) {
    return { note: `lookup failed: ${e?.name || "error"}` };
  } finally {
    clearTimeout(t);
  }
}

function when() {
  const d = new Date();
  const perth = new Intl.DateTimeFormat("en-AU", {
    timeZone: "Australia/Perth",
    dateStyle: "full",
    timeStyle: "long",
  }).format(d);
  return { iso: d.toISOString(), perth };
}

/* ----------------------------------------------------------------- email */

function rowHtml(k, html) {
  return `<tr><td style="padding:4px 10px 4px 0;color:#5C6862;vertical-align:top;white-space:nowrap">${esc(k)}</td><td style="padding:4px 0;vertical-align:top;word-break:break-word">${html}</td></tr>`;
}
function row(k, v) {
  if (v === undefined || v === null || v === "" || (Array.isArray(v) && !v.length)) return "";
  const val = typeof v === "object" ? `<pre style="margin:0;white-space:pre-wrap">${esc(JSON.stringify(v, null, 1))}</pre>` : esc(String(v));
  return rowHtml(k, val);
}
function section(title, rows) {
  const body = rows.filter(Boolean).join("");
  if (!body) return "";
  return `<h3 style="margin:22px 0 6px;font-size:14px;letter-spacing:.06em;text-transform:uppercase;color:#1E7F53">${esc(title)}</h3><table style="border-collapse:collapse;font-size:14px">${body}</table>`;
}
function fmtMs(ms) {
  if (!ms && ms !== 0) return undefined;
  const s = Math.round(ms / 1000);
  return s < 90 ? `${s}s` : `${Math.floor(s / 60)}m ${s % 60}s`;
}
function fmtTime(iso) {
  if (!iso) return undefined;
  try {
    return new Intl.DateTimeFormat("en-AU", { timeZone: "Australia/Perth", dateStyle: "medium", timeStyle: "medium" }).format(new Date(iso));
  } catch {
    return iso;
  }
}

function sourceLabel(meta) {
  const f = meta?.first || {};
  const s = meta?.session || {};
  const utm = f.utm_source || s.utm_source;
  const medium = f.utm_medium || s.utm_medium;
  if (utm) return `${utm}${medium ? ` / ${medium}` : ""}`;
  if (f.gclid || s.gclid || f.gbraid || f.wbraid) return "google / cpc";
  if (f.fbclid || s.fbclid) return "facebook";
  if (f.msclkid || s.msclkid) return "bing / cpc";
  const ref = f.referrer || s.referrer || meta?.referrer;
  if (ref) {
    try {
      return new URL(ref).hostname.replace(/^www\./, "") + " / referral";
    } catch {
      return "referral";
    }
  }
  return "direct";
}

function buildEmail({ name, email, business, budget, meta, server }) {
  const f = meta?.first || {};
  const s = meta?.session || {};
  const d = meta?.device || {};
  const source = sourceLabel(meta);
  const trail = (s.pages || []).map((p) => `${fmtTime(p.t)}  ${p.p}`).join("\n");

  const html = `
  <div style="font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif;color:#1F2A24;max-width:720px">
    <h2 style="margin:0 0 4px">New enquiry from mindsheep.com.au</h2>
    <p style="margin:0 0 14px;color:#5C6862">${esc(server.when.perth)} · source: <b>${esc(source)}</b> · ${esc(server.ua.device)}, ${esc(server.ua.browser)}, ${esc(server.ua.os)}${server.geo.city ? ` · ${esc(server.geo.city)}, ${esc(server.geo.region || "")} ${esc(server.geo.country || "")}` : ""}</p>

    ${section("Lead", [
      row("Name", name),
      rowHtml("Email", `<a href="mailto:${esc(email)}">${esc(email)}</a>`),
      row("Monthly budget", BUDGETS[budget] || "Not specified"),
      rowHtml("Business", esc(business).replace(/\n/g, "<br/>")),
    ])}

    ${section("Where they came from", [
      row("Source", source),
      row("Submitted from", meta?.page),
      row("Page title", meta?.title),
      row("Form", meta?.variant),
      row("Time on that page", fmtMs(meta?.timeOnPageMs)),
      row("Time to fill the form", fmtMs(meta?.fillMs)),
      row("Referrer (this page)", meta?.referrer),
      row("Server referer header", server.headers.referer),
    ])}

    ${section("First visit (this browser)", [
      row("First seen", fmtTime(f.at)),
      row("Landing page", f.landing),
      row("Came from", f.referrer || "direct or unknown"),
      row("utm_source", f.utm_source),
      row("utm_medium", f.utm_medium),
      row("utm_campaign", f.utm_campaign),
      row("utm_term", f.utm_term),
      row("utm_content", f.utm_content),
      row("gclid", f.gclid),
      row("gbraid / wbraid", f.gbraid || f.wbraid),
      row("fbclid", f.fbclid),
      row("msclkid", f.msclkid),
      row("ttclid", f.ttclid),
      row("Visits since", f.visits),
    ])}

    ${section("This visit", [
      row("Started", fmtTime(s.at)),
      row("Entry page", s.entry),
      row("Came from", s.referrer || "direct or unknown"),
      row("utm_source", s.utm_source),
      row("utm_medium", s.utm_medium),
      row("utm_campaign", s.utm_campaign),
      row("gclid", s.gclid),
      row("fbclid", s.fbclid),
      row("Pages viewed", (s.pages || []).length || undefined),
      trail ? rowHtml("Trail (Perth time)", `<pre style="margin:0;white-space:pre-wrap;font-size:12px">${esc(trail)}</pre>`) : "",
    ])}

    ${section("Location and network", [
      row("IP address", server.ip),
      row("City", server.geo.city),
      row("Region", server.geo.region),
      row("Country", server.geo.country),
      row("Postcode", server.geo.postcode),
      row("Lat, lon", server.geo.latlon),
      row("IP timezone", server.geo.timezone),
      row("ISP", server.geo.isp),
      row("Organisation", server.geo.org),
      row("ASN", server.geo.asn),
      row("IP type", server.geo.type),
      row("Lookup", server.geo.source || server.geo.note),
    ])}

    ${section("Device", [
      row("Type", server.ua.device),
      row("Browser", server.ua.browser),
      row("Operating system", server.ua.os),
      row("Looks like a bot", server.ua.bot ? "yes" : "no"),
      row("Browser brands", d.uaData?.brands),
      row("Platform", d.uaData?.platform || d.platform),
      row("Mobile (client hint)", d.uaData?.mobile),
      row("Screen", d.screen),
      row("Viewport", d.viewport),
      row("Touch points", d.touchPoints),
      row("Language", d.language),
      row("Languages", d.languages),
      row("Accept-Language header", server.headers["accept-language"]),
      row("Browser timezone", d.timezone),
      row("Browser local time", d.localTime),
      row("Connection", d.connection),
      row("Page load", d.loadMs ? `${d.loadMs} ms (${d.navigationType})` : undefined),
      row("CPU threads", d.hardwareThreads),
      row("Memory (GB)", d.memoryGb),
      row("Cookies enabled", d.cookies),
      row("Do Not Track", d.doNotTrack),
      row("User agent", d.userAgent || server.headers["user-agent"]),
    ])}

    ${section("Request", [
      row("Received (UTC)", server.when.iso),
      row("Received (Perth)", server.when.perth),
      row("Host", server.headers.host),
      row("Origin", server.headers.origin),
      row("Forwarded for", server.headers["x-forwarded-for"]),
      row("Forwarded proto", server.headers["x-forwarded-proto"]),
      row("Sec-Fetch-Site", server.headers["sec-fetch-site"]),
      row("Sec-CH-UA", server.headers["sec-ch-ua"]),
      row("Sec-CH-UA-Platform", server.headers["sec-ch-ua-platform"]),
      row("Sec-CH-UA-Mobile", server.headers["sec-ch-ua-mobile"]),
      row("Honeypot", meta?.honeypot ? "FILLED (likely spam)" : "empty"),
    ])}

    ${section("All request headers", [row("Headers", server.headers)])}

    <h3 style="margin:22px 0 6px;font-size:14px;letter-spacing:.06em;text-transform:uppercase;color:#1E7F53">Raw payload</h3>
    <pre style="font-size:11px;white-space:pre-wrap;background:#F4F7F2;padding:10px;border-radius:6px">${esc(JSON.stringify({ name, email, budget, meta, server: { ip: server.ip, geo: server.geo, ua: server.ua, when: server.when } }, null, 2))}</pre>
  </div>`;

  const subject = `New lead: ${name} (${source}${server.geo.city ? `, ${server.geo.city}` : ""})${server.ua.bot || meta?.honeypot ? " [check: bot?]" : ""}`;
  return { html, subject };
}

/* ----------------------------------------------------------------- handler */

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, business, budget, meta = {} } = body;

    if (!name || !email || !business) {
      return Response.json({ error: "Name, email, and business description are required." }, { status: 400 });
    }

    // Everything the server can see, independent of the browser's honesty.
    const headers = {};
    for (const [k, v] of req.headers) {
      if (/^(cookie|authorization)$/i.test(k)) continue;
      headers[k] = v;
    }
    const ip = clientIp(req.headers);
    const [geoInfo] = await Promise.all([geo(ip)]);
    const server = {
      ip,
      geo: geoInfo,
      ua: parseUa(headers["user-agent"] || meta?.device?.userAgent || ""),
      when: when(),
      headers,
    };

    const { html, subject } = buildEmail({ name, email, business, budget, meta, server });

    // A copy in the runtime log, so a lead survives even if email fails.
    console.log("contact-lead", JSON.stringify({ name, email, budget, source: sourceLabel(meta), ip, geo: geoInfo, page: meta?.page, at: server.when.iso }));

    const resend = getResend();
    if (!resend) {
      if (process.env.CONTACT_PREVIEW === "1") {
        // Local preview (CONTACT_PREVIEW=1, no Resend key): hand the composed email back so it can be checked.
        return new Response(html, { status: 200, headers: { "content-type": "text/html; charset=utf-8", "x-subject": subject } });
      }
      console.error("RESEND_API_KEY is not configured.");
      return Response.json({ error: "Email is not configured." }, { status: 500 });
    }

    const { data, error } = await resend.emails.send({
      from: `${BRAND} <david@mindsheep.com.au>`,
      to: TO,
      subject,
      replyTo: email,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Contact form error:", err);
    return Response.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
