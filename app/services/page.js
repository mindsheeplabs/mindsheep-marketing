import Topbar from "../components/Topbar";
import StoryHead from "../components/StoryHead";
import ServiceCard from "../components/ServiceCard";
import CtaCard from "../components/CtaCard";
import Plan from "../components/Plan";
import Close from "../components/Close";

export const metadata = {
  title: "Services",
  description:
    "Five services, all with AI inside: AI-powered Google Ads, AI SEO, AI social and content, AI-generated websites, and AI chat and voice agents. AI does the slow parts, so the same budget buys you more.",
  alternates: { canonical: "/services" },
};

const SERVICES = [
  {
    kicker: "AI-powered Google Ads",
    title: "More leads from the same ad spend",
    line: "Our own system watches your account every hour and adjusts while it matters.",
    invite: "Want more from your ads? Click here.",
    href: "/services/ai-google-ads",
  },
  {
    kicker: "AI SEO",
    title: "Found on Google, and in the AI answers",
    line: "People now ask ChatGPT who to call. We help you show up in the answer.",
    invite: "Want to be found? Click here.",
    href: "/services/ai-seo",
  },
  {
    kicker: "AI social and content",
    title: "Fresh content every week",
    line: "Video, posts and creative made from your real photos and products, not stock.",
    invite: "Want content every week? Click here.",
    href: "/services/ai-social-content",
  },
  {
    kicker: "AI-generated websites",
    title: "A website built from what you already have",
    line: "Your photos go in. Old images get upscaled. No photo shoot needed. Weeks, not months.",
    invite: "Want a new website? Click here.",
    href: "/services/ai-websites",
  },
  {
    kicker: "AI chat and voice agents",
    title: "Every enquiry answered in minutes",
    line: "It answers, asks the right questions, quotes on the spot and hands you the lead.",
    invite: "Want your enquiries handled? Click here.",
    href: "/services/ai-chat-and-voice",
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
    body: "More enquiries, less wasted spend, fresh content every week.",
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
              title="Five services, all with AI inside."
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
