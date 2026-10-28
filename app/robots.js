/**
 * /robots.txt. Everything public is crawlable; the API and legal PDFs are not.
 * The AI crawlers are named so the intent is on record. The "*" rule already
 * allows them; Google-Extended only governs Gemini use, not Google Search.
 */
const AI_BOTS = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "PerplexityBot", "Google-Extended"];

export default function robots() {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      { userAgent: AI_BOTS, allow: "/", disallow: ["/api/"] },
    ],
    sitemap: "https://mindsheep.com.au/sitemap.xml",
    host: "https://mindsheep.com.au",
  };
}
