/**
 * Visitor attribution, browser side. Two stores:
 *  - localStorage  "ms_first": first touch, written once per browser.
 *      landing URL, the referrer that brought them, UTM and click ids, time.
 *  - sessionStorage "ms_session": this visit. start time, entry page,
 *      referrer, every page seen with a timestamp.
 * record() is called on every page by <Attribution/>. snapshot() is called
 * by the form at submit time and bundles both stores with live device facts.
 * Everything is best effort and wrapped in try/catch: a blocked storage
 * must never stop the form.
 */
const FIRST = "ms_first";
const SESSION = "ms_session";
const CLICK_IDS = ["gclid", "gbraid", "wbraid", "fbclid", "msclkid", "ttclid", "li_fat_id", "dclid"];
const UTM = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "utm_id"];

function read(store, key) {
  try {
    const raw = store.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
function write(store, key, value) {
  try {
    store.setItem(key, JSON.stringify(value));
  } catch {
    /* storage blocked */
  }
}

function params(url) {
  const out = {};
  try {
    const sp = new URL(url).searchParams;
    for (const k of [...UTM, ...CLICK_IDS]) {
      const v = sp.get(k);
      if (v) out[k] = v;
    }
  } catch {
    /* ignore */
  }
  return out;
}

export function record() {
  if (typeof window === "undefined") return;
  const now = new Date().toISOString();
  const href = window.location.href;
  const ref = document.referrer || "";
  const sameSite = ref && ref.startsWith(window.location.origin);

  let first = read(localStorage, FIRST);
  if (!first) {
    first = {
      at: now,
      landing: href,
      referrer: sameSite ? "" : ref,
      ...params(href),
      visits: 1,
    };
    write(localStorage, FIRST, first);
  }

  let session = read(sessionStorage, SESSION);
  if (!session) {
    session = {
      at: now,
      entry: href,
      referrer: sameSite ? "" : ref,
      ...params(href),
      pages: [],
    };
    first = { ...first, visits: (first.visits || 1) + (first.at === now ? 0 : 1) };
    write(localStorage, FIRST, first);
  }
  const path = window.location.pathname + window.location.search + window.location.hash;
  const last = session.pages[session.pages.length - 1];
  if (!last || last.p !== path) {
    session.pages.push({ p: path, t: now });
    if (session.pages.length > 40) session.pages.shift();
  }
  write(sessionStorage, SESSION, session);
}

export function snapshot(extra = {}) {
  if (typeof window === "undefined") return extra;
  const nav = navigator;
  const scr = window.screen || {};
  const uaData = nav.userAgentData
    ? {
        brands: (nav.userAgentData.brands || []).map((b) => `${b.brand} ${b.version}`).join(", "),
        mobile: nav.userAgentData.mobile,
        platform: nav.userAgentData.platform,
      }
    : null;
  const conn = nav.connection || {};
  let perf = {};
  try {
    const n = performance.getEntriesByType("navigation")[0];
    if (n) perf = { navigationType: n.type, loadMs: Math.round(n.duration) };
  } catch {
    /* ignore */
  }
  return {
    page: window.location.href,
    path: window.location.pathname,
    title: document.title,
    referrer: document.referrer || "",
    first: read(localStorage, FIRST),
    session: read(sessionStorage, SESSION),
    timeOnPageMs: Math.round(performance.now()),
    device: {
      userAgent: nav.userAgent,
      uaData,
      language: nav.language,
      languages: (nav.languages || []).join(", "),
      platform: nav.platform,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      tzOffsetMin: new Date().getTimezoneOffset(),
      localTime: new Date().toString(),
      screen: `${scr.width}x${scr.height} @${window.devicePixelRatio || 1}x`,
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      touchPoints: nav.maxTouchPoints,
      cookies: nav.cookieEnabled,
      doNotTrack: nav.doNotTrack,
      hardwareThreads: nav.hardwareConcurrency,
      memoryGb: nav.deviceMemory,
      connection: conn.effectiveType
        ? `${conn.effectiveType}${conn.downlink ? `, ${conn.downlink} Mbps` : ""}${conn.saveData ? ", save-data" : ""}`
        : undefined,
      ...perf,
    },
    ...extra,
  };
}
