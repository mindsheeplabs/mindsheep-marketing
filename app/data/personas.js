/**
 * The six illustrative owners. Not real clients, and every place they
 * appear says so. `home` is the one-line version for the home page tile;
 * `line` is the two-sentence version on the service page.
 */
export const PERSONAS = [
  {
    name: "Sarah",
    business: "Dental practice, Perth",
    src: "/people/personas/sarah.webp",
    alt: "Sarah, who runs a dental practice, at her reception counter.",
    service: "/services/smarter-google-ads",
    home: "Could get more bookings from the same Google Ads budget.",
    line: "Spends $3,000 a month on ads and is not sure what it buys. With the account checked every hour and a page for each treatment, the same spend brings more bookings.",
  },
  {
    name: "Jim",
    business: "Pool builder, Perth",
    src: "/people/personas/jim.webp",
    alt: "Jim, who runs a pool building company, in front of a new pool.",
    service: "/services/smarter-google-ads",
    home: "Could have a new campaign live in days when the season turns.",
    line: "Leads dry up in winter and he overspends in spring. With a campaign and a page live in days, spend follows the season and he gets to try more things.",
  },
  {
    name: "Anna",
    business: "Physio clinic, northern suburbs",
    src: "/people/personas/anna.webp",
    alt: "Anna, who runs a physiotherapy clinic, at her reception desk.",
    service: "/services/ai-search-visibility",
    home: "Could show up when someone asks ChatGPT for a physio nearby.",
    line: "Shows up for her own name and not much else. With a plain page for each thing she treats, she appears for physio near me, on Google and in the AI answer.",
  },
  {
    name: "Mick",
    business: "Plumber, Perth",
    src: "/people/personas/mick.webp",
    alt: "Mick, who runs a plumbing business, beside his work van.",
    service: "/services/ai-search-visibility",
    home: "Could be one of the names Google's AI answer gives for emergency plumber.",
    line: "Google's AI answer names three of his competitors for emergency plumber. With a page for each job and his reviews set up right, he becomes one of the names.",
  },
  {
    name: "Priya",
    business: "Homewares boutique, Fremantle",
    src: "/people/personas/priya.webp",
    alt: "Priya, who runs a homewares boutique, in her shop.",
    service: "/services/ai-design-websites",
    home: "Could get a new website from her own photos, no photographer.",
    line: "A photographer quoted more than the website. With her photos upscaled and AI images in her style, the new site is live in weeks, no shoot.",
  },
  {
    name: "Tom",
    business: "Cafe, Perth",
    src: "/people/personas/tom.webp",
    alt: "Tom, who runs a cafe, behind his counter.",
    service: "/services/ai-design-websites",
    home: "Could finally have a website, built from his menu and a dozen phone photos.",
    line: "A Facebook page, a menu as a photo, no website. From his menu and a dozen phone photos, people find the hours and the booking link on their phone.",
  },
];

export const NOT_REAL =
  "Not real clients. They stand in for the owners we talk to every week, so you can see yourself in the story.";

export function personasFor(service) {
  return PERSONAS.filter((p) => p.service === service);
}
