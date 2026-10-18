import Image from "next/image";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import RevealObserver from "../components/RevealObserver";

export const metadata = {
  title: "About",
  description:
    "A small, specialist team using AI to deliver more marketing and development, for less — and to talk to our clients like humans while we do it.",
};

const differentiators = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    ),
    iconClass: "diff-icon",
    title: "You don&apos;t have to understand AI",
    desc:
      "That&apos;s our job. You tell us what you want more of — leads, bookings, sales — and we work out which AI tools get you there. In the meetings, we talk about your business, not the tech.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    iconClass: "diff-icon diff-icon-secondary",
    title: "You deal with real people",
    desc:
      "No account managers passing messages. No junior learning on your budget. The person doing your work is the person on your call. That hasn&apos;t changed, and it won&apos;t.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    iconClass: "diff-icon diff-icon-accent",
    title: "We ship fast, so you get more",
    desc:
      "Our AI pipeline collapses work that used to take weeks into days. That means more campaigns tested, more content produced, more features shipped — all inside the same monthly budget.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20V10M18 20V4M6 20v-6" />
      </svg>
    ),
    iconClass: "diff-icon",
    title: "We measure what pays you back",
    desc:
      "Impressions and &ldquo;engagement&rdquo; don&apos;t pay the bills. We track every engagement to the dollar it earns, and we only count the ones that actually matter — leads, quotes, sales.",
  },
];

const team = [
  {
    name: "David",
    role: "Founder & Strategist",
    desc:
      "16+ years in tech, marketing and lead generation. The person you&apos;ll speak to on your first call — and most of the ones after. Rebuilt the agency around AI in 2024 when it became obvious the game had changed.",
    photoKey: "team-david",
  },
  {
    name: "Theresa",
    role: "Google Ads Lead",
    desc:
      "Runs search, Shopping and PMax campaigns across the client portfolio. Spent years inside Google&apos;s own ecosystem before joining — now spends her days squeezing more performance out of every dollar.",
    photoKey: "team-theresa",
  },
  {
    name: "Rio",
    role: "Web & Shopify",
    desc:
      "Builds and tunes websites and Shopify stores — fast, well-measured, built to convert. Obsessed with Core Web Vitals and the kind of UX details most teams don&apos;t notice.",
    photoKey: "team-rio",
  },
  {
    name: "Rod",
    role: "AI Engineering",
    desc:
      "Builds the AI pipelines, chat and quoting systems, automations and integrations that sit under the hood of our work — the stuff clients don&apos;t need to see, but benefit from every day.",
    photoKey: "team-rod",
  },
];

export default function AboutPage() {
  return (
    <>
      <RevealObserver />
      <div className="bg-glow" />
      <NavBar activePage="about" />

      <main>
        {/* Hero */}
        <section className="container page-hero reveal">
          <p className="text-sm font-semibold uppercase tracking-wide mb-4" style={{ color: "var(--secondary)" }}>
            Who we are
          </p>
          <h1>
            Humans helping humans — <span className="text-gradient">with AI.</span>
          </h1>
          <p className="page-hero-desc mt-4">
            We&apos;re a small team of marketers, developers and AI specialists. Our clients run real businesses — building houses, shipping cars, fitting out sheds, selling audio gear. They want results they can measure and conversations they can follow. That&apos;s what we do.
          </p>
        </section>

        {/* Our Story */}
        <section className="container py-16 reveal">
          <div className="glass-panel p-10 md:p-16 about-story-panel">
            <div style={{ display: "flex", gap: "3rem", alignItems: "flex-start", flexWrap: "wrap" }}>
              <div style={{ flexShrink: 0 }}>
                <Image
                  src="/WhatsApp Image 2025-09-22 at 10.31.29.jpeg"
                  alt="David — Founder of Mindsheep Marketing"
                  width={140}
                  height={140}
                  className="about-founder-img"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ flex: 1, minWidth: "280px" }}>
                <p className="text-sm font-semibold uppercase tracking-wide mb-4" style={{ color: "var(--secondary)" }}>
                  Our story
                </p>
                <h2 className="mb-6" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
                  Built in the trenches.<br />
                  <span className="text-gradient">Rebuilt around AI.</span>
                </h2>
                <p className="text-gray-300 mb-4" style={{ lineHeight: "1.8" }}>
                  I spent 16 years running Google Ads, SEO and lead-generation for Australian businesses. Good years. The craft was teachable, the levers were well understood, and if you worked hard you got results.
                </p>
                <p className="text-gray-300 mb-4" style={{ lineHeight: "1.8" }}>
                  Then AI changed the levers. I watched clients start asking ChatGPT questions they used to Google. I watched competitors ship things in weeks that used to take months. I watched the whole shape of the job change.
                </p>
                <p className="text-gray-300 mb-4" style={{ lineHeight: "1.8" }}>
                  So in 2024 we rebuilt the agency around AI — not by bolting it onto what we already did, but by starting from the question &ldquo;what would this look like if we did it today, from scratch?&rdquo; The answer is Mindsheep Marketing as it exists now.
                </p>
                <p className="text-gray-300 mb-0" style={{ lineHeight: "1.8" }}>
                  The pitch hasn&apos;t changed: we treat your money like it&apos;s ours. The tools underneath have changed completely.
                </p>
                <p className="text-sm text-gray-500 mt-4" style={{ fontStyle: "italic" }}>
                  — David, Founder
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What makes us different */}
        <section className="section-alt py-20 reveal">
          <div className="container">
            <div className="mb-12 text-center">
              <p className="text-sm font-semibold uppercase tracking-wide mb-4" style={{ color: "var(--secondary)" }}>
                Why Mindsheep
              </p>
              <h2 className="mb-4">
                A lot of agencies say they use AI.<br />
                <span className="text-gradient">Here&apos;s what we actually mean by it.</span>
              </h2>
            </div>
            <div className="differentiators-grid max-w-4xl mx-auto">
              {differentiators.map((d, i) => (
                <div className="diff-card" key={i}>
                  <div className={d.iconClass}>{d.icon}</div>
                  <div>
                    <p className="diff-title" dangerouslySetInnerHTML={{ __html: d.title }} />
                    <p className="diff-desc" dangerouslySetInnerHTML={{ __html: d.desc }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Team */}
        <section className="container py-20 reveal">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide mb-4" style={{ color: "var(--secondary)" }}>
              The people
            </p>
            <h2 className="mb-4">
              Small by design. <span className="text-gradient">Specialist by choice.</span>
            </h2>
            <p className="max-w-2xl mx-auto" style={{ fontSize: "1.05rem", color: "#cbd5e1", lineHeight: "1.7" }}>
              Every person on the team is a specialist in what they do, and you work with them directly. No pass-offs, no gatekeepers, no &ldquo;let me check with the team and get back to you.&rdquo;
            </p>
          </div>
          <div className="team-grid-photo max-w-4xl mx-auto">
            {team.map((member) => (
              <div className="team-card-photo glass-panel" key={member.name}>
                <div className="team-photo-placeholder" data-photo={member.photoKey}>
                  <span className="persona-photo-label">Photo</span>
                </div>
                <p className="team-name" style={{ marginTop: "1rem" }}>{member.name}</p>
                <p className="team-role">{member.role}</p>
                <p
                  className="team-desc"
                  dangerouslySetInnerHTML={{ __html: member.desc }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Stats strip */}
        <section className="section-alt py-16 reveal">
          <div className="container">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="stat-block">
                <div className="stat-number">16+</div>
                <div className="stat-label">Years of hands-on marketing experience</div>
              </div>
              <div className="stat-block">
                <div className="stat-number">385</div>
                <div className="stat-label">Leads/month for a single client, from zero</div>
              </div>
              <div className="stat-block">
                <div className="stat-number">40%</div>
                <div className="stat-label">Average cost reduction across client campaigns</div>
              </div>
              <div className="stat-block">
                <div className="stat-number">2024</div>
                <div className="stat-label">The year we rebuilt the whole agency around AI</div>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
