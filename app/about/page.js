import Image from "next/image";
import Topbar from "../components/Topbar";
import StoryHead from "../components/StoryHead";
import Bit from "../components/Bit";
import Aside from "../components/Aside";
import StoryEnd from "../components/StoryEnd";
import Close from "../components/Close";
import styles from "./page.module.css";

export const metadata = {
  title: "About",
  description:
    "Perth based, working with businesses across Australia. In 2024 we rebuilt the agency around AI, so the same budget buys you more leads, more content and more pages. Meet the people doing the work.",
  alternates: { canonical: "/about" },
};

const FOUNDER_PHOTO = "/WhatsApp Image 2025-09-22 at 10.31.29.jpeg";

const MEANS = [
  {
    n: "01",
    title: "You do not have to understand AI.",
    body: "That is our job. Tell us what you want more of: leads, quotes, sales. We talk about your business, not the tools.",
  },
  {
    n: "02",
    title: "The same budget buys more.",
    body: "Hours that went on setup, first drafts and reports now go into the work. More campaigns, more content, more pages. Same price.",
  },
  {
    n: "03",
    title: "You deal with the people doing the work.",
    body: "No account managers passing messages. The person on your call runs your ads or builds your site.",
  },
  {
    n: "04",
    title: "We measure what pays you back.",
    body: "Leads, quotes and sales, not impressions. Every dollar tracked to what it earned. That is the number we report each month.",
  },
];

/* photo: a public path or null. When a photo arrives, set it here and the
   initials give way to it. */
const TEAM = [
  {
    name: "David",
    role: "Founder and Strategist",
    initials: "D",
    photo: FOUNDER_PHOTO,
    alt: "David, founder of Mindsheep Marketing Australia.",
    body: "Sixteen years in Google Ads, SEO and lead generation. Rebuilt the agency around AI in 2024.",
  },
  {
    name: "Theresa",
    role: "Google Ads Lead",
    initials: "T",
    photo: null,
    body: "Runs the Google Ads accounts, search and shopping, for every client.",
  },
  {
    name: "Rio",
    role: "Web and online stores",
    initials: "R",
    photo: null,
    body: "Builds fast sites and stores from your own photos, products and words.",
  },
  {
    name: "Rod",
    role: "AI Engineering",
    initials: "R",
    photo: null,
    body: "Builds the chat, voice and quoting systems, and the monitoring that watches your account every hour.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Topbar />

      <main>
        {/* 0 · The story, in David's words. */}
        <article className="story">
          <div className="plate">
            <StoryHead
              kicker="About"
              title="An agency rebuilt around AI. More for your money."
              lead="Perth based, working with businesses across Australia. Same budget as any agency, more delivered, because AI does the slow parts."
            />
            <div className="story__body">
              <figure className={styles.founder}>
                <Image
                  src={FOUNDER_PHOTO}
                  alt="David, founder of Mindsheep Marketing Australia, in a suit and tie, smiling."
                  width={1184}
                  height={864}
                  sizes="(min-width: 900px) 46vw, 100vw"
                  priority
                />
                <figcaption>
                  <b>David</b>, founder.
                </figcaption>
              </figure>

              <Bit title="Sixteen years of turning budgets into leads">
                <p>
                  Sixteen years running Google Ads, SEO and lead generation for Australian
                  businesses: builders, freight companies, shed makers, retailers. One job: turn a
                  budget into leads.
                </p>
                <p>
                  Then the ground moved. Customers began asking ChatGPT what they used to ask
                  Google. Competitors delivered in weeks what used to take months. Bolting AI tools onto the
                  old way would not cover it.
                </p>
              </Bit>

              <Bit title="So in 2024 we started again">
                <p>
                  We rebuilt the agency around AI, from scratch. Campaign setup, content,
                  reporting: every step redone around what the tools can now do. We wanted
                  something that watched an ad account every hour, so we built MarketMetrica with
                  Mindsheep Labs. A person checks its report before you do.
                </p>
              </Bit>

              <Bit title="What has not changed">
                <p>
                  <b>We treat your money like it is ours.</b> That was true before AI and it is
                  true now. The tools changed completely. The hours they save go into your
                  campaigns, not admin.
                </p>
              </Bit>

              <Aside
                title="Want to see what more looks like?"
                body="A free 30 minute look at your ads, site and content, then a plain-words plan."
              />
            </div>
          </div>
        </article>

        {/* 1 · What that means for you. */}
        <section className="ways" id="for-you">
          <div className="plate">
            <h2 className="sc-display sc-display--md">What that means for you</h2>
            <ol className={styles.means} aria-label="What working with us means for you">
              {MEANS.map((m) => (
                <li className={styles.mean} key={m.n}>
                  <span className={styles.meanN} aria-hidden="true">
                    {m.n}
                  </span>
                  <h3 className={styles.meanT}>{m.title}</h3>
                  <p className={styles.meanP}>{m.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 2 · The team. */}
        <section className="ways" id="team">
          <div className="plate">
            <div className="ways__head">
              <h2 className="sc-display sc-display--md">The team</h2>
              <p>Small on purpose. Whoever is on your account is the person you talk to.</p>
            </div>
            <ul className={styles.team} aria-label="The team">
              {TEAM.map((m) => (
                <li className={styles.member} key={m.name}>
                  {m.photo ? (
                    <Image
                      className={styles.face}
                      src={m.photo}
                      alt={m.alt ?? `${m.name}, ${m.role}.`}
                      width={1184}
                      height={864}
                      sizes="104px"
                    />
                  ) : (
                    <div className={styles.initials} aria-hidden="true">
                      {m.initials}
                    </div>
                  )}
                  <span className={styles.role}>{m.role}</span>
                  <h3 className={styles.name}>{m.name}</h3>
                  <p className={styles.bio}>{m.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 3 · The invitation, on paper. */}
        <StoryEnd lead="Tell us what you want more of. We will tell you what it would take.">
          <p>A free 30 minute assessment, then a plain-words plan. No obligation.</p>
        </StoryEnd>

        {/* 4 · The close. */}
        <Close />
      </main>
    </>
  );
}
