/**
 * /sitemap.xml. Every public route, newest first. Add a line when a page
 * is added. Redirected routes are left out on purpose.
 */
const BASE = "https://mindsheep.com.au";

const ROUTES = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/smarter-google-ads", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/ai-search-visibility", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/ai-design-websites", priority: 0.9, changeFrequency: "monthly" },
  { path: "/case-studies", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
];

export default function sitemap() {
  const lastModified = new Date();
  return ROUTES.map((r) => ({ url: `${BASE}${r.path}`, lastModified, ...r, path: undefined }));
}
