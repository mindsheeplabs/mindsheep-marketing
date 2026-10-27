/** /robots.txt. Everything public is crawlable; the API and legal PDFs are not. */
export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: "https://mindsheep.com.au/sitemap.xml",
    host: "https://mindsheep.com.au",
  };
}
