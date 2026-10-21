import Topbar from "../components/Topbar";
import StoryHead from "../components/StoryHead";
import ServiceCard from "../components/ServiceCard";
import CtaCard from "../components/CtaCard";
import Plan from "../components/Plan";
import Close from "../components/Close";

export const metadata = {
  title: "Services",
  description:
    "Three services, all with AI inside: smarter AI Google Ads, AI search and visibility, and AI design and websites. AI does the slow parts, so the same budget buys you more and the work lands faster.",
  alternates: { canonical: "/services" },
};

const SERVICES = [
  {
    kicker: "Smarter AI Google Ads",
    title: "More leads from the same ad spend",
    line: "Your account checked every hour. New campaigns and pages live in days, not weeks.",
    invite: "Want more from your ads? Click here.",
    href: "/services/smarter-google-ads",
  },
  {
    kicker: "AI search and visibility",
    title: "Found on Google, and in the AI answers",
    line: "Google answers first now, and people ask ChatGPT who to call. We get you into those answers.",
    invite: "Want to be found? Click here.",
    href: "/services/ai-search-visibility",
  },
  {
    kicker: "AI design and websites",
    title: "A website built from what you already have",
    line: "Your photos go in and get upscaled. No photographer, no copywriter. You approve every page.",
    invite: "Want a new website? Click here.",
    href: "/services/ai-design-websites",
  },
];

const STEPS = [
  {
    title: "A free 30 minute AI marketing assessment",
    body: "We look at your ads, your website and your content.",
    note: "No obligation.",
  },
  {
    title: "A plain-words plan",
    body: "What we would change, what it costs, what it should return.",
  },
  {
    title: "We build it with you",
    body: "Campaigns, content and pages, in weeks.",
  },
  {
    title: "Your numbers change",
    body: "More enquiries, less wasted spend, new pages in days.",
  },
  {
    title: "We keep it running well",
    body: "Every month we check, report in plain words, and improve.",
    note: "A fixed monthly fee.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Topbar />

      <main>
        <article className="story">
          <div className="plate">
            <StoryHead
              kicker="What we do"
              title="Three services, all with AI inside."
              lead="AI does the slow parts, so the same budget buys you more. Pick the one you need."
            />

            <ol className="cases">
              {SERVICES.map((s) => (
                <ServiceCard key={s.href} {...s} />
              ))}
            </ol>
          </div>
        </article>

        <Plan heading="How it works" steps={STEPS} cta={null} />

        <section className="ways" aria-label="Book your free assessment">
          <div className="plate">
            <ul className="cases">
              <CtaCard body="A free 30 minute look at what you have." />
            </ul>
          </div>
        </section>

        <Close />
      </main>
    </>
  );
}
