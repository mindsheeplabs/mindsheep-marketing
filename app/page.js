"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import LeadFunnel from "./components/LeadFunnel";

const SERVICES = [
  {
    id: "google-ads",
    title: "AI-Powered Google Ads",
    pitch:
      "Same ad spend, more results. Our AI tunes bids, targeting and creative continuously — so every dollar works harder than it did last month.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    id: "social-ugc",
    title: "AI Social & UGC",
    pitch:
      "Fresh, native-looking creative for Facebook, Instagram and TikTok — generated at the pace the algorithms actually need, without the agency bill of a studio shoot.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="3" /><circle cx="12" cy="12" r="4" /><circle cx="17" cy="7" r="1.2" />
      </svg>
    ),
  },
  {
    id: "content",
    title: "AI Content Creation",
    pitch:
      "Blog articles, email sequences, landing pages, product descriptions — written in your voice, at the volume you actually need, without a 10-person content team.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h12l4 4v12H4z" /><path d="M16 4v4h4" /><path d="M8 13h8M8 17h8M8 9h3" />
      </svg>
    ),
  },
  {
    id: "ai-seo",
    title: "AI SEO (GEO)",
    pitch:
      "People are asking ChatGPT, Perplexity and Google AI Overviews instead of scrolling blue links. We get you cited in the AI answers — not just ranked below them.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /><path d="M8 11h6M11 8v6" />
      </svg>
    ),
  },
  {
    id: "development",
    title: "AI-Powered Development",
    pitch:
      "Our in-house AI build pipeline ships websites, apps and custom tools at a fraction of traditional dev-shop prices — and we deliver more of exactly what you asked for.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
];

const CLIENT_LOGOS = [
  { src: "/clients/aldott-homes.webp", alt: "Aldott Homes", w: 140, h: 42 },
  { src: "/clients/willship-logo.webp", alt: "WillShip International", w: 140, h: 28 },
  { src: "/clients/highline-sheds.webp", alt: "Highline Sheds", w: 140, h: 45 },
  { src: "/clients/westcoast-hifi.svg", alt: "WestCoast HiFi", w: 160, h: 42 },
];

const PERSONAS = [
  {
    photoKey: "owner-office",
    caption: "I run a trades business. I don't want to learn marketing — I just want more jobs on the calendar.",
  },
  {
    photoKey: "owner-coffee",
    caption: "I'm the one answering the phone. Any system you build has to make my life easier, not harder.",
  },
  {
    photoKey: "owner-workshop",
    caption: "I know AI is a big deal. I don't know where to start. I just want someone I can trust to handle it.",
  },
];

export default function Home() {
  const [formStatus, setFormStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setFormStatus("sending");
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      business: form.business.value,
      budget: form.budget.value,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setFormStatus("sent");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  }

  useEffect(() => {
    const nav = document.querySelector(".glass-nav");
    const topBranding = document.querySelector(".top-branding");
    if (!nav) return;

    const handleScroll = () => {
      if (window.scrollY > 80) {
        nav.classList.add("nav-visible");
        if (topBranding) topBranding.classList.add("branding-hidden");
      } else {
        nav.classList.remove("nav-visible");
        if (topBranding) topBranding.classList.remove("branding-hidden");
      }
    };

    const revealEls = Array.from(document.querySelectorAll(".reveal"));
    const reveal = (el) => {
      el.classList.remove("reveal-pending");
      el.classList.add("revealed");
    };
    let observer;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      revealEls.forEach(reveal);
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              reveal(entry.target);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0, rootMargin: "0px 0px -8% 0px" }
      );
      const vh = window.innerHeight;
      revealEls.forEach((el) => {
        if (el.getBoundingClientRect().top < vh) reveal(el);
        else {
          el.classList.add("reveal-pending");
          observer.observe(el);
        }
      });
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="bg-glow"></div>

      {/* Top branding — fades on scroll */}
      <div className="top-branding">
        <span className="top-branding-text">mindsheep</span>
      </div>

      {/* Glass nav — slides in on scroll */}
      <nav className="glass-nav">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2" style={{ height: "60px" }}>
            <span className="nav-brand-text">mindsheep</span>
          </div>
          <div className="flex items-center gap-8">
            <Link href="/services" className="nav-link text-sm font-semibold tracking-wide">Services</Link>
            <Link href="/case-studies" className="nav-link text-sm font-semibold tracking-wide">Case studies</Link>
            <Link href="/about" className="nav-link text-sm font-semibold tracking-wide">About</Link>
            <a href="#contact" className="btn btn-primary">Book a Strategy Call</a>
          </div>
        </div>
      </nav>

      <main>
        {/* ==================== 1. HERO ==================== */}
        <section className="container pt-4 pb-10 flex flex-col items-center justify-center text-center animate-fade-in relative">
          <h1 className="mb-4">
            AI runs on the inside.<br />
            <span className="text-gradient">Humans talk to you on the outside.</span>
          </h1>

          <p className="mb-8 max-w-3xl mx-auto" style={{ fontSize: "1.15rem", lineHeight: "1.7" }}>
            We&apos;re a marketing and development team powered by AI — ads, content, SEO,
            websites, lead systems — all delivered faster, better and for less than a traditional
            agency. You don&apos;t have to understand how any of it works. That&apos;s our job.
          </p>

          <div className="flex gap-4 justify-center delay-100 animate-fade-in" style={{ flexWrap: "wrap" }}>
            <a href="#contact" className="btn btn-primary">Book a Strategy Call</a>
            <a href="#services" className="btn btn-secondary">See what we do</a>
          </div>

          <p className="mt-8 text-sm text-gray-500" style={{ letterSpacing: "0.04em" }}>
            Humans helping humans with AI.
          </p>
        </section>

        {/* ==================== 2. HUMANS HELPING HUMANS ==================== */}
        <section className="container py-16 reveal" id="humans">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide mb-4" style={{ color: "var(--secondary)" }}>
              You don&apos;t have to understand AI
            </p>
            <h2 className="mb-4">
              You just have to <span className="text-gradient">benefit from it.</span>
            </h2>
            <p className="max-w-2xl mx-auto" style={{ fontSize: "1.05rem", lineHeight: "1.7" }}>
              Our clients aren&apos;t tech people. They build houses, ship cars, sell audio gear,
              fit out sheds. They want more customers, less admin and a straight answer when they
              ring us. The AI is the engine. The relationship is the pitch.
            </p>
          </div>

          <div className="persona-grid">
            {PERSONAS.map((p) => (
              <div key={p.photoKey} className="persona-card">
                <div className="persona-photo" data-photo={p.photoKey}>
                  <span className="persona-photo-label">Photo placeholder</span>
                </div>
                <p className="persona-caption">&ldquo;{p.caption}&rdquo;</p>
              </div>
            ))}
          </div>
        </section>

        {/* ==================== 3. CLIENT LOGO STRIP ==================== */}
        <section className="section-alt py-12 reveal">
          <div className="container">
            <p className="text-center text-xs font-semibold uppercase tracking-wide mb-8 text-gray-500">
              Trusted by growing businesses across Australia
            </p>
            <div className="client-logo-strip">
              {CLIENT_LOGOS.map((c) => (
                <Image key={c.src} src={c.src} alt={c.alt} width={c.w} height={c.h} className="client-logo" />
              ))}
            </div>
          </div>
        </section>

        {/* ==================== 4. WHAT WE DO (5 services) ==================== */}
        <section className="container py-20 reveal" id="services">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide mb-4" style={{ color: "var(--secondary)" }}>
              What we do
            </p>
            <h2 className="mb-4">
              Everything a modern agency does —<br />
              <span className="text-gradient">just rebuilt around AI.</span>
            </h2>
            <p className="max-w-2xl mx-auto" style={{ fontSize: "1.05rem", lineHeight: "1.7" }}>
              Five disciplines, one team. All powered by the same AI pipeline — so you get the
              speed and output of a 50-person shop without the bill.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div key={s.id} className="glass-panel p-7 service-tile">
                <div className="service-tile-icon">{s.icon}</div>
                <h3 className="mb-2" style={{ fontSize: "1.1rem" }}>{s.title}</h3>
                <p className="text-gray-300" style={{ fontSize: "0.92rem", lineHeight: "1.65" }}>
                  {s.pitch}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center mt-10">
            <Link href="/services" className="text-sm font-semibold" style={{ color: "var(--secondary)" }}>
              See all five services in detail →
            </Link>
          </p>
        </section>

        {/* ==================== 5. EXPECTATIONS HAVE RISEN ==================== */}
        <section className="section-alt py-20 reveal" id="expectations">
          <div className="container">
            <div className="glass-panel p-10 md:p-16 max-w-4xl mx-auto">
              <p className="text-sm font-semibold uppercase tracking-wide mb-4 text-center" style={{ color: "var(--secondary)" }}>
                Why this matters now
              </p>
              <h2 className="mb-6 text-center">
                Expectations have risen.<br />
                <span className="text-gradient">So have we.</span>
              </h2>
              <p className="text-gray-300 mb-5 text-lg" style={{ lineHeight: "1.8" }}>
                Your customers already use AI. They ask ChatGPT for recommendations. They expect
                instant quotes, instant answers, instant follow-up. Businesses still running on last
                decade&apos;s stack feel slow — and losing feels bad.
              </p>
              <p className="text-gray-300 mb-5 text-lg" style={{ lineHeight: "1.8" }}>
                We rebuilt everything we do around AI so our clients can meet that new bar without
                hiring a tech department. The agencies that don&apos;t make this move will fall
                behind. The ones that do will quietly take their customers.
              </p>
              <p className="text-gray-300 mb-0 text-lg" style={{ lineHeight: "1.8" }}>
                We&apos;d rather you were on our side of that line.
              </p>
            </div>
          </div>
        </section>

        {/* ==================== 6. SIGNATURE CAPABILITY — AI LEAD ENGINE ==================== */}
        <section className="container py-20 reveal" id="lead-engine">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide mb-4" style={{ color: "var(--secondary)" }}>
              Our signature capability
            </p>
            <h2 className="mb-4">
              The AI Lead Engine —<br />
              <span className="text-gradient">ads that teach themselves to find better leads.</span>
            </h2>
            <p className="max-w-2xl mx-auto" style={{ fontSize: "1.05rem", lineHeight: "1.7" }}>
              Our most-asked-for build. Replace the static contact form with an AI that chats,
              qualifies, and even quotes complex jobs on the spot — then feeds every outcome back to
              Google and Facebook so they learn to find more leads like your best ones.
            </p>
          </div>
          <LeadFunnel />
          <p className="text-center mt-8">
            <a href="#case-study" className="text-sm font-semibold" style={{ color: "var(--secondary)" }}>
              See it on a real business →
            </a>
          </p>
        </section>

        {/* ==================== 7. CASE STUDY — WILLSHIP ==================== */}
        <section className="section-alt py-20 reveal" id="case-study">
          <div className="container">
            <div className="mb-12 text-center">
              <p className="text-sm font-semibold uppercase tracking-wide mb-4" style={{ color: "var(--secondary)" }}>
                Case study
              </p>
              <h2 className="mb-4">
                How WillShip turned instant quoting into a{" "}
                <span className="text-gradient">lead engine.</span>
              </h2>
            </div>

            <div className="glass-panel p-10 md:p-16 max-w-3xl mx-auto">
              <div className="flex items-center gap-4 mb-8" style={{ flexWrap: "wrap" }}>
                <Image
                  src="/clients/willship-logo.webp"
                  alt="WillShip International"
                  width={150}
                  height={30}
                  className="client-logo"
                />
                <span className="text-sm text-gray-500">
                  Freight, logistics and vehicle shipping
                </span>
              </div>

              <h3 className="mb-3" style={{ fontSize: "1.1rem" }}>The challenge</h3>
              <p className="text-gray-300 mb-8" style={{ lineHeight: "1.8" }}>
                Quoting international freight and vehicle shipping is the kind of pricing that
                normally needs an expert and a long list of questions. That slowed lead response and
                tied up specialist time on every enquiry, qualified or not.
              </p>

              <h3 className="mb-3" style={{ fontSize: "1.1rem" }}>What we built</h3>
              <div className="case-timeline">
                <div className="case-step">
                  <div className="case-step-label">System one</div>
                  <h4>&ldquo;Alex&rdquo;</h4>
                  <p>
                    We productionised Nick&apos;s own prototype into a commercial AI chatbot that
                    captures and qualifies freight leads and pushes deals into WillShip&apos;s CRM.
                    Live mid-July 2026.
                  </p>
                </div>
                <div className="case-step">
                  <div className="case-step-label">System two</div>
                  <h4>&ldquo;Sam&rdquo; + quote wizard</h4>
                  <p>
                    It worked well enough that Nick commissioned the automotive chatbot plus a
                    rebuilt instant-quote wizard for vehicle shipping.
                  </p>
                </div>
                <div className="case-step">
                  <div className="case-step-label">Now</div>
                  <h4>Website redesign</h4>
                  <p>
                    With both systems delivering, WillShip has moved on to a redesign to modernise
                    the site and showcase the AI.
                  </p>
                </div>
              </div>

              <h3 className="mb-3 mt-8" style={{ fontSize: "1.1rem" }}>How it works for them</h3>
              <p className="text-gray-300 mb-0" style={{ lineHeight: "1.8" }}>
                Prospects get an instant online quote, which generates and qualifies the lead at the
                same time. Every enquiry arrives complete and quoted before the sales team sees it,
                so specialist time goes to the jobs worth winning.
              </p>

              <div className="case-quotes">
                <blockquote className="case-quote">
                  &ldquo;Great work on the whole project mate, you&apos;ve done an amazing job.
                  I&apos;ve just flicked it live.&rdquo;
                  <span className="case-quote-attr">Nick Proctor, WillShip International</span>
                </blockquote>
                <blockquote className="case-quote">
                  &ldquo;Wow, incredible work Rod! Love it mate, this is amazing.&rdquo;
                  <span className="case-quote-attr">Nick Proctor, WillShip International</span>
                </blockquote>
              </div>

              <div className="text-center mt-8">
                <Link href="/case-studies" className="btn btn-secondary mr-3">
                  See all case studies
                </Link>
                <a href="#contact" className="btn btn-primary">
                  Want this for your business?
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== 8. FINAL CTA ==================== */}
        <section id="contact" className="container py-20 reveal">
          <div className="mb-12 text-center">
            <h2 className="mb-4">
              Let&apos;s talk — <span className="text-gradient">human to human.</span>
            </h2>
            <p className="max-w-xl mx-auto" style={{ fontSize: "1.05rem" }}>
              Tell us what you sell and where you&apos;re stuck. We&apos;ll come back with a clear
              view of what AI could do for your business — no sales pitch, no jargon.
            </p>
          </div>
          <div className="glass-panel p-10 md:p-16 max-w-2xl mx-auto contact-panel">
            {formStatus === "sent" ? (
              <div className="text-center" style={{ padding: "2rem 0" }}>
                <h3 className="mb-4 text-primary">Message sent.</h3>
                <p className="text-gray-300">
                  Thanks for reaching out — we&apos;ll be in touch within one business day.
                </p>
                <button onClick={() => setFormStatus("idle")} className="btn btn-secondary mt-6">
                  Send another message
                </button>
              </div>
            ) : (
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-300">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your name" className="form-input" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-300">Email</label>
                  <input type="email" id="email" name="email" placeholder="you@company.com" className="form-input" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="business" className="text-sm font-semibold text-gray-300">
                    What do you do, and where are you stuck?
                  </label>
                  <textarea
                    id="business"
                    name="business"
                    rows={4}
                    placeholder="A few sentences on your business and what you'd like to be different."
                    className="form-input"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="budget" className="text-sm font-semibold text-gray-300">
                    Monthly budget (approximate)
                  </label>
                  <select id="budget" name="budget" className="form-input">
                    <option value="">Select a range</option>
                    <option value="under5k">Under $5,000</option>
                    <option value="5k-15k">$5,000 – $15,000</option>
                    <option value="15k-50k">$15,000 – $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "100%", textAlign: "center", padding: "1rem" }}
                  disabled={formStatus === "sending"}
                >
                  {formStatus === "sending" ? "Sending…" : "Book a Strategy Call"}
                </button>
                {formStatus === "error" && (
                  <p className="text-center text-sm" style={{ color: "#fb7185" }}>
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <Image
                src="/MINDSHEEP LOGO.svg"
                alt="Mindsheep Marketing"
                width={140}
                height={40}
                className="footer-logo"
              />
              <p className="footer-tagline">
                Humans helping humans with AI. Marketing, development and everything in between.
              </p>
            </div>
            <div className="footer-links">
              <div className="footer-link-group">
                <h4 className="footer-link-heading">Navigate</h4>
                <Link href="/services">Services</Link>
                <Link href="/case-studies">Case studies</Link>
                <Link href="/about">About</Link>
              </div>
              <div className="footer-link-group">
                <h4 className="footer-link-heading">Get Started</h4>
                <a href="#contact">Book a Strategy Call</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Mindsheep Marketing. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
