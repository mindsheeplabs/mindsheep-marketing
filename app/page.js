import Image from "next/image";
import Topbar from "./components/Topbar";
import Ticks from "./components/Ticks";
import ServiceCard from "./components/ServiceCard";
import CaseCard from "./components/CaseCard";
import CtaCard from "./components/CtaCard";
import Plan from "./components/Plan";
import Close, { DEFAULT_LINES } from "./components/Close";

export const metadata = {
  title: { absolute: "Mindsheep Marketing Australia | We put AI to work in your marketing." },
  description:
    "More leads, less spend. AI-powered Google Ads, AI SEO, AI social and content, AI-generated websites, and AI chat and voice agents, so the same budget buys you more. Perth based, Australia wide.",
  alternates: { canonical: "/" },
};

const TICKS = [
  "More leads from the same ad spend.",
  "Found on Google and in AI search.",
  "AI images and UGC videos from your own photos.",
  "A new website designed and live in weeks, for less.",
  "Every enquiry answered in minutes.",
];

const FACES = [
  {
    src: "/people/owner-exec-woman.webp",
    alt: "A business owner at her desk in a Perth office, smiling.",
  },
  {
    src: "/people/owner-coffee.webp",
    alt: "A business owner behind the counter of her shop, holding a coffee.",
  },
  {
    src: "/people/owner-shop.webp",
    alt: "A shop owner leaning on his front counter, grinning.",
  },
  {
    src: "/people/owner-tradie.webp",
    alt: "A trades business owner at his office desk, smiling.",
  },
];

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

const CASES = [
  {
    href: "/case-studies#willship",
    face: { src: "/clients/nick.png", alt: "Nick Proctor of WillShip International." },
    kicker: "Case study · WillShip International",
    title: "Quoting in seconds, and they control it",
    body:
      "Their customers ask detailed shipping questions all day. We built a chatbot that asks what an estimator would ask and quotes on the spot, then a second one. Behind them, a change-control system so WillShip updates pricing and questions themselves when things change.",
    result: "Two chatbots live. Every enquiry arrives complete and quoted, and stays right as prices move.",
  },
  {
    href: "/case-studies#westcoast-hifi",
    face: { src: "/clients/michael.jpg", alt: "Michael, Director of WestCoast HiFi.", width: 90, height: 90 },
    kicker: "Case study · WestCoast HiFi",
    title: "A faster store, now with AI-built pages",
    body:
      "WestCoast HiFi's online store was slow. We rebuilt it for speed and restructured Google Shopping. Now we are rolling out whole new pages with AI graphic design and AI copy, trained on their brand and their own words.",
    result: "40 percent faster. Sales and return on ad spend up. New pages shipping now.",
  },
  {
    href: "/case-studies#highline-sheds",
    face: { src: "/clients/steve.jpg", alt: "Steve, Owner of Highline Sheds.", width: 90, height: 90 },
    kicker: "Case study · Highline Sheds",
    title: "Twice the leads, 30 percent less cost",
    body:
      "Highline Sheds was paying too much for every enquiry. We restructured their Google Ads, with our own system watching the account every hour. Now an AI SEO campaign is getting them found for more searches every month.",
    result: "2.09 times the leads at 30.5 percent lower cost, in three months.",
  },
  {
    href: "/case-studies#aldott-homes",
    face: { src: "/clients/denes.jpg", alt: "Denes, Director of Aldott Homes.", width: 90, height: 90 },
    kicker: "Case study · Aldott Homes",
    title: "From zero to 385 leads a month",
    body:
      "A new builder with a new website and no marketing. We built their Google Ads from scratch, aimed at people already looking for a builder, and kept tightening it month by month.",
    result: "385 enquiries a month within six months, still growing.",
  },
];

const STEPS = [
  {
    title: "A free 30 minute AI marketing assessment",
    body: "We look at your ads, your website and your content, and where the money goes.",
    note: "No obligation.",
  },
  {
    title: "A plain-words plan",
    body: "What we would change, what it costs, and what it should return. No jargon.",
    note: "Still no obligation.",
  },
  {
    title: "We build it with you",
    body: "Campaigns, content and pages, in weeks, with our own system watching from day one.",
  },
  {
    title: "Your numbers change",
    body: "More enquiries, less wasted spend, fresh content every week.",
  },
  {
    title: "We keep it running well",
    body: "Every month we check, report in plain words, and improve.",
    note: "A fixed monthly fee, no surprises.",
  },
];

export default function Home() {
  return (
    <>
      <Topbar />

      <main>
        {/* 0 · The sentence. */}
        <section className="hero">
          <div className="plate hero__grid">
            <div>
              <h1>
                <span className="l1">We put AI to work in your marketing.</span>
                <span className="l2">More leads, less spend.</span>
              </h1>
              <Ticks items={TICKS} ariaLabel="What you get" />
              <p className="hero__cta">
                <a className="btn btn--accent" href="/contact" data-book>
                  Book your free assessment
                </a>
                <a className="u" href="#done">
                  See what we have done
                </a>
              </p>
            </div>
            <figure className="hero__photo">
              {FACES.map((f, i) => (
                <Image
                  key={f.src}
                  className={`face face--${i + 1}`}
                  src={f.src}
                  alt={f.alt}
                  width={1024}
                  height={1280}
                  sizes="(min-width: 900px) 480px, 16px"
                  priority={i === 0}
                />
              ))}
            </figure>
          </div>
        </section>

        {/* 1 · What we do, all with AI inside. */}
        <section className="ways" id="services">
          <div className="plate">
            <div className="ways__head">
              <h2 className="sc-display sc-display--md">What we do, all with AI inside</h2>
              <p>
                Five services. Each one has AI doing the slow parts, so the same budget buys you
                more. Pick the one you need and read how it works.
              </p>
            </div>
            <ol className="cases">
              {SERVICES.map((s) => (
                <ServiceCard key={s.href} {...s} />
              ))}
            </ol>
          </div>
        </section>

        {/* 2 · What we have done for businesses like yours. */}
        <section className="ways" id="done">
          <div className="plate">
            <h2 className="sc-display sc-display--md">What we have done for businesses like yours</h2>
            <ol className="cases">
              {CASES.map((c) => (
                <CaseCard key={c.href} {...c} />
              ))}
              <CtaCard body="A free 30 minute look at your ads, your site and your content, then real, practical ways to get more from the same budget. No fluff, no tech speak." />
            </ol>
          </div>
        </section>

        {/* 3 · How it works. */}
        <Plan
          heading="How it works"
          sub="Five steps, from a first conversation to marketing that does more with the same money."
          steps={STEPS}
        />

        {/* 4 · The close. */}
        <Close
          lines={[
            DEFAULT_LINES[0],
            <>
              Much of this runs on MarketMetrica, our own system, built with Mindsheep Labs. For pure
              software builds, see{" "}
              <a className="u" href="https://mindsheeplabs.com" rel="noopener">
                Mindsheep Labs
              </a>
              .
            </>,
          ]}
        />
      </main>
    </>
  );
}
