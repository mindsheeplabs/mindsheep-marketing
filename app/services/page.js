import Link from "next/link";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import RevealObserver from "../components/RevealObserver";

export const metadata = {
  title: "Services",
  description:
    "AI-powered Google Ads, social and UGC, content, AI SEO (GEO) and development. Humans helping humans with AI — every service rebuilt around AI, run by people who talk to you like a person.",
};

const services = [
  {
    id: "google-ads",
    title: "AI-Powered Google Ads",
    tagline: "Same spend. More leads.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
    iconClass: "service-card-icon-primary",
    human:
      "We&apos;ve run Google Ads for a long time. The game has changed. The agencies that still manage campaigns the old way are leaving money on the table — and their clients can feel it.",
    aiAngle:
      "Our AI pipeline continuously watches your account — bids, keywords, audiences, creative, time of day, device, geography — and adjusts in hours, not months. We tune the loop; the machine does the heavy lifting.",
    included: [
      "Full account build or restructure",
      "Search, Shopping and Performance Max campaigns",
      "AI-tuned bid strategies focused on real revenue outcomes",
      "AI-generated ad copy and creative variants, tested at scale",
      "Audience and keyword expansion driven by live performance data",
      "Monthly plain-English reporting (no screenshots of dashboards you don&apos;t read)",
    ],
  },
  {
    id: "social-ugc",
    title: "AI Social & UGC",
    tagline: "Fresh creative, every week.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="3" /><circle cx="12" cy="12" r="4" /><circle cx="17" cy="7" r="1.2" />
      </svg>
    ),
    iconClass: "service-card-icon-secondary",
    human:
      "Facebook, Instagram and TikTok reward fresh creative. Traditional agencies can&apos;t keep up — a shoot costs thousands and takes weeks. By the time it ships, the algorithm has moved on.",
    aiAngle:
      "We generate AI UGC — video, images, voiceover, captions — in the look and feel of real customer content, at a pace that keeps your feed fresh and your ad accounts fed. Human direction, AI production.",
    included: [
      "Native-looking AI video (UGC-style) for Meta and TikTok ads",
      "AI static and image creative, batch-produced per campaign",
      "On-brand captions and hooks, written for the platform",
      "Weekly creative drops to keep ad accounts in learning",
      "Thumbnails, A/B hook variants, retargeting cuts",
      "Human review on every piece — nothing goes live unapproved",
    ],
  },
  {
    id: "content",
    title: "AI Content Creation",
    tagline: "Written in your voice, at your volume.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h12l4 4v12H4z" /><path d="M16 4v4h4" /><path d="M8 13h8M8 17h8M8 9h3" />
      </svg>
    ),
    iconClass: "service-card-icon-accent",
    human:
      "Blog articles, email sequences, product descriptions, landing-page copy, sales scripts — the stuff that used to need a 10-person content team or sit on your to-do list forever.",
    aiAngle:
      "We train the AI on your voice, your products and your actual customers, then produce the volume of content your marketing needs. A human editor sits on top of every piece — nothing ships that doesn&apos;t sound like you.",
    included: [
      "Brand voice calibration (so the AI sounds like you, not like ChatGPT)",
      "SEO-ready blog articles and long-form content",
      "Email sequences — welcome, nurture, re-engagement",
      "Landing page and ad copy variants",
      "Product descriptions, category copy, FAQs",
      "Human editing pass on every output",
    ],
  },
  {
    id: "ai-seo",
    title: "AI SEO (GEO)",
    tagline: "Rank in the AI answers, not just the blue links.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /><path d="M8 11h6M11 8v6" />
      </svg>
    ),
    iconClass: "service-card-icon-primary",
    human:
      "People are already searching differently. They ask ChatGPT &ldquo;who&apos;s the best X in Perth,&rdquo; or hit Google&apos;s AI Overview before they ever see a result. If your business isn&apos;t cited in the AI answer, you&apos;re invisible to a fast-growing slice of your market.",
    aiAngle:
      "GEO (Generative Engine Optimization) is AI SEO — the practice of getting your business referenced in ChatGPT, Perplexity, Gemini and Google AI Overviews. It&apos;s a new discipline. Being early matters, because once an AI is confidently answering with your competitor, it&apos;s hard to unseat.",
    included: [
      "GEO audit — where you currently show up in AI answers (and where you don&apos;t)",
      "Content restructuring for AI retrieval (headings, structured data, citeable facts)",
      "Entity and brand signal building across the open web",
      "Traditional SEO foundations — technical, on-page, Core Web Vitals",
      "Topic clusters and content designed to be quoted, not just ranked",
      "Monthly tracking in both Google and major AI engines",
    ],
  },
  {
    id: "development",
    title: "AI-Powered Development",
    tagline: "Websites, apps and custom tools. Faster. Cheaper. More custom.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    iconClass: "service-card-icon-secondary",
    human:
      "Development used to be the bottleneck. Weeks of discovery, months of build, surprise invoices for &ldquo;scope changes.&rdquo; Expectations have risen — and old-school dev shops are the slowest to adjust.",
    aiAngle:
      "We&apos;ve built an in-house AI development pipeline that lets our team ship real, production software — websites, apps, custom tools, integrations — at a fraction of traditional dev-shop prices. In the same time your previous developer scoped the job, we&apos;ve shipped it.",
    included: [
      "Marketing websites and landing pages (Next.js, built to be fast)",
      "Custom web apps and internal tools",
      "AI chat and quoting flows embedded into your site",
      "Integrations with your CRM, ERP, or booking system",
      "Shopify and e-commerce builds and optimisation",
      "Ongoing iteration — not a one-off project you have to fight to update",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <RevealObserver />
      <div className="bg-glow" />
      <NavBar activePage="services" />

      <main>
        {/* Hero */}
        <section className="container page-hero reveal">
          <p className="text-sm font-semibold uppercase tracking-wide mb-4" style={{ color: "var(--secondary)" }}>
            What we do
          </p>
          <h1>
            Everything a modern agency does — <span className="text-gradient">just rebuilt around AI.</span>
          </h1>
          <p className="page-hero-desc mt-4">
            Five disciplines. One team. All powered by the same AI pipeline, all delivered by humans who talk to you like a person. You don&apos;t need to understand how AI works. We handle that. You just see the results.
          </p>
        </section>

        {/* FEATURED: AI Lead Engine */}
        <section className="container py-12 reveal">
          <div
            className="glass-panel p-10 md:p-16"
            style={{
              background: "linear-gradient(135deg, rgba(79,70,229,0.10) 0%, rgba(6,182,212,0.08) 100%)",
              borderColor: "rgba(79,70,229,0.25)",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-start" }}>
              <span className="industry-tag" style={{ background: "rgba(6,182,212,0.12)", borderColor: "rgba(6,182,212,0.3)" }}>
                Signature capability
              </span>
              <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
                The AI Lead Engine
              </h2>
              <p className="text-gray-300" style={{ fontSize: "1.05rem", lineHeight: "1.8", maxWidth: "720px" }}>
                Our most-asked-for build. We replace the static contact form with an AI that chats, qualifies and even quotes complex jobs on the spot. Then — and this is the part most agencies miss — every outcome is fed back to Google and Facebook so they learn to find more leads like your best ones.
              </p>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
                <Link href="/#lead-engine" className="btn btn-primary">
                  See how it works
                </Link>
                <Link href="/case-studies" className="btn btn-secondary">
                  Read the WillShip case study
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* The five services */}
        <section className="container pt-6 pb-16 reveal">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide mb-3" style={{ color: "var(--secondary)" }}>
              The five services
            </p>
            <h2 className="mb-3">
              AI on the inside. <span className="text-gradient">Humans on the outside.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.id} id={service.id} className="glass-panel p-8 service-page-card">
                <div className={`service-card-icon ${service.iconClass}`}>{service.icon}</div>
                <h3 className="mb-1" style={{ fontSize: "1.3rem" }}>{service.title}</h3>
                <p className="mb-4" style={{ color: "var(--secondary)", fontSize: "0.9rem", fontWeight: 600 }}>
                  {service.tagline}
                </p>
                <p
                  className="text-gray-300 mb-4"
                  style={{ fontSize: "0.95rem", lineHeight: "1.75" }}
                  dangerouslySetInnerHTML={{ __html: service.human }}
                />
                <p
                  className="text-gray-300 mb-4"
                  style={{ fontSize: "0.95rem", lineHeight: "1.75" }}
                  dangerouslySetInnerHTML={{ __html: service.aiAngle }}
                />
                <p className="included-heading">What&apos;s included</p>
                <ul className="included-list">
                  {service.included.map((item, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="container py-16 reveal">
          <div
            className="glass-panel p-10 md:p-16 text-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(79,70,229,0.08) 0%, rgba(6,182,212,0.06) 100%)",
              borderColor: "rgba(79,70,229,0.2)",
            }}
          >
            <h2 className="mb-4">
              Not sure which services <span className="text-gradient">you need?</span>
            </h2>
            <p className="max-w-2xl mx-auto mb-8" style={{ fontSize: "1.05rem", color: "#cbd5e1", lineHeight: "1.8" }}>
              Most clients start with a 30-minute call. We look at where you are today, where you want to go, and point out the one or two moves that would make the biggest difference. No pitch, no jargon, no obligation.
            </p>
            <a href="/#contact" className="btn btn-primary">
              Book a Strategy Call
            </a>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
