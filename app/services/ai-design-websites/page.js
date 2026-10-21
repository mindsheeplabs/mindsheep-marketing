import Image from "next/image";
import Topbar from "../../components/Topbar";
import StoryHead from "../../components/StoryHead";
import Bit from "../../components/Bit";
import Ticks from "../../components/Ticks";
import Faq from "../../components/Faq";
import Aside from "../../components/Aside";
import People from "../../components/People";
import StoryEnd from "../../components/StoryEnd";
import Others from "../../components/Others";
import Close from "../../components/Close";
import styles from "./page.module.css";

export const metadata = {
  title: "AI design and websites",
  description:
    "A website built from what you already have. Your photos go in and get upscaled, AI makes the imagery you are missing, the words are drafted in your voice, and you approve every page. No photographer, no copywriter, live in weeks.",
  alternates: { canonical: "/services/ai-design-websites" },
};

const NO_LONGER = [
  "No photographer. Your photos, upscaled, and AI images in your style.",
  "No copywriter. We draft the words in your voice. You approve them.",
  "No stock photos. Everything looks like your business.",
  "No months of design rounds. First look in days.",
  "A fixed price that reflects all of that.",
];

const STEPS = [
  ["You send what you have.", "Phone photos, old brochures, your reviews, the way you describe your work. Nothing needs to be good yet."],
  ["We make the pictures.", "Old images get upscaled so they look taken today. Where you have gaps, AI makes images in your style: your colours, your kind of work, your part of Australia."],
  ["We draft the words.", "In your voice, from the way you talk about the business. You read them and say yes or change this."],
  ["We design it.", "Your branding if you have one. A fresh one if you do not. You see the first look in days."],
  ["You approve each page.", "Nothing goes live until you have seen it. Plain yes or no, nothing technical."],
  ["We launch and keep going.", "Forms wired to your inbox, fast on phones, and new pages from a few photos whenever you add something."],
];

const PEOPLE = [
  {
    name: "Priya",
    business: "Homewares boutique, Fremantle",
    src: "/people/personas/priya.webp",
    alt: "Priya, who runs a homewares boutique, in her shop.",
    today:
      "Her website is six years old. The product photos are small and dark, and a photographer quoted her more than the site itself.",
    we: "Take the photos she has and upscale them. Make the extra imagery with AI in her style. Draft the copy in her voice. She approves each page before it goes live.",
    after:
      "A new site in weeks, no photo shoot, no copywriter. When she adds a new range, new pages come from a few phone photos.",
  },
  {
    name: "Tom",
    business: "Cafe, Perth",
    src: "/people/personas/tom.webp",
    alt: "Tom, who runs a cafe, behind his counter.",
    today:
      "He has a Facebook page, a menu as a photo, and no website. He has been meaning to fix it for two years.",
    we: "Build the site from his menu, his reviews and a dozen phone photos. AI fills the gaps: a clean menu page, pictures of the place in the right light, words that sound like him.",
    after:
      "People find the menu, the hours and the booking link on their phone. He stops answering are you open on Messenger.",
  },
];

const LOGOS = [
  { src: "/clients/westcoast-hifi.svg", alt: "WestCoast HiFi", width: 268, height: 70 },
  { src: "/clients/willship-logo.webp", alt: "WillShip International", width: 230, height: 45 },
];

const FAQS = [
  {
    q: "Will AI images look fake?",
    a: "Not the way we do them. They are made from your real photos, your colours and your kind of work, then checked by a person. You would be surprised how good these systems are now. You see every image before it goes live, and anything that does not look right gets redone.",
  },
  {
    q: "How long does it take?",
    a: "Most sites go live within weeks of us having your photos and words. A shop or a quoting tool takes longer, and we tell you before you commit.",
  },
  {
    q: "Do I own the website?",
    a: "Yes. The domain, the design, the content and the code are yours. If you ever move on, you take all of it with you.",
  },
  {
    q: "Can I change it myself?",
    a: "Yes. You get a simple editor for the things that change: prices, photos, team, offers. For anything bigger, message us and we make the change.",
  },
  {
    q: "What does it cost?",
    a: "It depends on the pages you need and what the site has to do. Because there is no photo shoot and no copywriter, it is less than you expect. On the call we work out exactly that and give you a fixed figure.",
  },
];

export default function AiDesignWebsitesPage() {
  return (
    <>
      <Topbar />

      <main>
        <article className="story">
          <div className="plate">
            <StoryHead
              kicker="AI design and websites"
              title="A website built from what you already have."
              lead="Your photos, your words and your reviews, turned into a site that looks like you, in weeks. AI does the slow parts. You approve every page."
            />

            <div className="story__body">
              <Bit title="What you no longer pay for" id="no-longer">
                <p>
                  A website used to mean a photographer, a copywriter, stock photos and months of
                  design rounds. <b>AI now does those parts well, and it shows in the price.</b>
                </p>
                <Ticks items={NO_LONGER} ariaLabel="What you no longer pay for" />
              </Bit>

              <Bit title="How it works" id="how">
                <p>Six steps. You are only needed for the first and the fifth.</p>
                <ol className={styles.steps}>
                  {STEPS.map(([lead, rest]) => (
                    <li key={lead}>
                      <b>{lead}</b> {rest}
                    </li>
                  ))}
                </ol>
              </Bit>

              <Bit title="Design and branding too" id="design">
                <p>
                  Have a brand you like? We match it, down to the colours and the tone. Do not have
                  one, or do not like the one you have? <b>We create a new look, show you a few
                  directions, and build the site around the one you choose.</b>
                </p>
                <p>
                  The same goes for images and short videos for your socials. Once the site exists,
                  new pictures in your style are a few minutes of work, not a new shoot.
                </p>
              </Bit>

              <People people={PEOPLE} />

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

        <Others current="/services/ai-design-websites" />
        <Close />
      </main>
    </>
  );
}
