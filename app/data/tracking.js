import site from "../../content/site.json";

/**
 * Tracking ids. Public by nature (they ship in the page). They live in
 * content/site.json so the safe-edit MCP can set them; the validator only
 * accepts a GA4 id, a GTM id and a Search Console token. Leave one empty to
 * switch that tag off.
 */
export const GA_ID = site.tracking?.ga4 || ""; // GA4 measurement id, "G-XXXXXXXXXX"
export const GTM_ID = site.tracking?.gtm || ""; // GTM container id, "GTM-XXXXXXX"
export const GSC_VERIFICATION = site.tracking?.gsc || ""; // Search Console HTML tag content
