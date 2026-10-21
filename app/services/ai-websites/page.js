import Image from "next/image";
import Topbar from "../../components/Topbar";
import StoryHead from "../../components/StoryHead";
import Bit from "../../components/Bit";
import Ticks from "../../components/Ticks";
import Faq from "../../components/Faq";
import Aside from "../../components/Aside";
import StoryEnd from "../../components/StoryEnd";
import Others from "../../components/Others";
import Close from "../../components/Close";
import styles from "./page.module.css";

export const metadata = {
  title: "AI-generated websites",
  description:
    "A website built from what you already have. Your photos go straight in, old images are upscaled, and AI makes the imagery where you have none. Live in weeks, not months, for better value.",
  alternates: { canonical: "/services/ai-websites" },
};

const TICKS = [
  "Your photos go straight in.",
  "Old images upscaled to look made today.",
  "AI-made imagery, so no photo shoot.",
  "Fast, and built for phones first.",
  "Forms and quotes wired to your inbox.",
];

const STEPS = [
  "We gather what you have: photos, reviews, prices, the way you describe your work.",
  "AI drafts the pages, the copy and any missing imagery in days.",
  "We design and edit until it reads and looks like you.",
  "We launch it, wire up the forms and keep improving it.",
];

const LOGOS = [
  { src: "/clients/westcoast-hifi.svg", alt: "WestCoast HiFi", width: 268, height: 70 },
  { src: "/clients/willship-logo.webp", alt: "WillShip International", width: 230, height: 45 },
];

const FAQS = [
  {
    q: "How long does it take?",
    a: "Most sites go live within weeks of us having your photos and words. A shop or a quoting tool takes longer, and we tell you before you commit.",
  },
  {
    q: "Do I own the website?",
    a: "Yes. The domain, the design, the content and the code are yours. If you ever move on, you take all of it with you.",
  },
  {
    q: "Can I edit it myself?",
    a: "Yes. You get a simple editor for the things that change: prices, photos, team, offers. For anything bigger, message us and we make the change.",
  },
  {
    q: "What does it cost?",
    a: "It depends on the pages you need and what the site has to do. On the call we work out exactly that and give you a fixed figure. No surprises after.",
  },
];

export default function AiWebsitesPage() {
  return (
    <>
      <Topbar />

      <main>
        <article className="story">
          <div className="plate">
            <StoryHead
              kicker="AI-generated websites"
              title="A website built from what you already have."
              lead="Your photos, your words and your reviews, turned into a fast site in weeks. AI does the drafting. We do the judgement."
            />

            <div className="story__body">
              <Bit title="What you get">
                <p>
                  Everything on the site comes from your business. <b>AI does the slow parts.</b>
                </p>
                <Ticks items={TICKS} ariaLabel="What you get with an AI-generated website" />
              </Bit>

              <Bit title="Why it costs less">
                <p>
                  The photo shoot, the copy drafts and the first layouts are the slow, costly parts
                  of a website. AI now does all three well, so you would be surprised how good the
                  first cut is.{" "}
                  <b>You pay for our design and judgement, not for weeks of drafting.</b> Same site,
                  fewer hours, better value.
                </p>
              </Bit>

              <Bit title="How it works">
                <p>Four steps. You are only needed for the first and third.</p>
                <ol className={styles.steps}>
                  {STEPS.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </Bit>

              <Bit
                variant="real"
                tag="Real jobs"
                title="What it has done for businesses like yours"
                quote={{
                  text: "Reliability and Trust is what David and the team provide for us. We know we are in safe hands.",
                  cite: "Michael, Director, WestCoast HiFi",
                }}
              >
                <p>
                  <b>WestCoast HiFi:</b> online store rebuilt 40 percent faster. Sales up. Now rolling
                  out whole new pages with AI design and copy, in their own brand.
                </p>
                <p>
                  <b>Progressive Car Sound:</b> $3,500 in sales in six weeks from a new site and
                  ads.
                </p>
                <p>
                  <b>WillShip International:</b> a full rebuild with self-serve editing, so the team
                  changes pages themselves.
                </p>
                <ul className={styles.logos} aria-label="Clients">
                  {LOGOS.map((logo) => (
                    <li key={logo.src}>
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                        unoptimized={logo.src.endsWith(".svg")}
                      />
                    </li>
                  ))}
                </ul>
              </Bit>

              <Bit title="Questions people ask">
                <Faq items={FAQS} />
              </Bit>

              <Aside
                title="Want a new website?"
                body="A free 30 minute look at your current site and what you already have, then a fixed figure for the new one."
              >
                <div className="box">
                  <h2>Building software, not a website?</h2>
                  <p>
                    Pure software products go to our sister brand,{" "}
                    <a className="u" href="https://mindsheeplabs.com" rel="noopener">
                      Mindsheep Labs
                    </a>
                    . We build the sites that bring you customers.
                  </p>
                </div>
              </Aside>
            </div>
          </div>
        </article>

        <StoryEnd lead="Tell us what you have. We will tell you what it would take.">
          <p>
            A free 30 minute look at your site and your photos, then a plain-words plan with a fixed
            figure. No obligation.
          </p>
        </StoryEnd>

        <Others current="/services/ai-websites" />
        <Close />
      </main>
    </>
  );
}
