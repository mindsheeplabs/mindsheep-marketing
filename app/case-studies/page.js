import Image from "next/image";
import Topbar from "../components/Topbar";
import StoryHead from "../components/StoryHead";
import CtaCard from "../components/CtaCard";
import Faq from "../components/Faq";
import Others from "../components/Others";
import Close from "../components/Close";
import Drawer from "./Drawer";
import styles from "./page.module.css";

export const metadata = {
  title: "Case studies",
  description:
    "Real results for Australian businesses. WillShip, Highline Sheds, WestCoast HiFi, Aldott Homes and Progressive Car Sound: more leads, less wasted spend and every enquiry handled, on the same budget.",
  alternates: { canonical: "/case-studies" },
};

/* ------------------------------------------------------------------ data */

const CASES = [
  {
    id: "willship",
    lead: true,
    client: "WillShip International",
    face: { src: "/clients/nick.png", alt: "Nick Proctor of WillShip International.", w: 150, h: 150 },
    kicker: "WillShip International · Freight and vehicle shipping",
    title: "A website they run themselves, and every enquiry quoted",
    body:
      "Every change to the site needed a developer, and every quote started with a form and a phone call. We rebuilt the site on an AI admin system the team controls, and put two chat assistants and an instant-quote wizard inside it.",
    result: "The team ships their own changes. Every enquiry arrives complete and quoted.",
    challenge:
      "Freight and vehicle quotes depend on what, where from, where to, how big and how soon. Nick had built a prototype chatbot himself and could see what it could become. The website sat on an old framework, every change needed a developer and waited in a queue, and leads came in half finished, so the sales team spent its day chasing details before it could quote.",
    built: [
      {
        name: "An AI website admin system.",
        text: "The team changes a page, tests it, rolls it out and rolls it back, with no developer in the loop. The whole site moved onto it.",
      },
      {
        name: "Alex, the freight chatbot.",
        text: "We took Nick’s prototype and made it a commercial system. It qualifies every freight lead in the chat and lands it in the sales system.",
      },
      {
        name: "Sam, the automotive chatbot.",
        text: "An instant-quote wizard behind it prices the 23 variables that set vehicle shipping and returns a real quote during the chat.",
      },
      {
        name: "Bot-to-deal tracking.",
        text: "Every chat lead is followed through to the deal it became, so WillShip can see which conversations turn into revenue.",
      },
      {
        name: "A Get Started funnel.",
        text: "Inside Alex: who you are, what you need, an instant quote, then chat, a written enquiry, a callback or a director call.",
      },
    ],
    results: [
      { value: "5", label: "systems built, all live and in use" },
      { value: "23", label: "pricing variables handled in the chat, so no phone call to quote" },
    ],
    outcomes: [
      "A website the team changes, tests and rolls out themselves",
      "Every enquiry arrives complete and quoted before the sales team sees it",
    ],
    quote: "Great work on the whole project mate, you have done an amazing job. I have just flicked it live.",
    cite: "Nick Proctor, WillShip International",
  },
  {
    id: "highline-sheds",
    client: "Highline Sheds",
    face: { src: "/clients/steve.jpg", alt: "Steve, Owner of Highline Sheds.", w: 90, h: 90 },
    kicker: "Highline Sheds · Sheds and construction",
    title: "Twice the leads, 30 percent less cost",
    body:
      "Highline was paying too much for every enquiry. We restructured their Google Ads so the spend lands on the right searches, and added an AI SEO campaign underneath. It is already working: Highline is being found for more searches every month.",
    result: "2.09 times the leads at 30.5 percent lower cost, in 3 months.",
    challenge:
      "Highline had strong word of mouth and wanted to grow past it. Google Ads was running but underperforming: high spend, low conversion, and nothing on the organic side in a market where people search before they buy.",
    built:
      "We rebuilt Google Ads from the ground up so each ad only shows for the searches it fits, and cut the spend going to the wrong ones. Our own system watches the account every hour and flags drift before it costs money. Alongside it, an AI SEO campaign on the shed searches people make when ready to buy. It is already delivering: Highline shows up for more searches each month, in the paid and the organic results.",
    results: [
      { value: "2.09x", label: "the leads" },
      { value: "30.5%", label: "lower cost per lead" },
      { value: "3", label: "months to get there" },
      { value: "Top 3", label: "organic rankings gained" },
    ],
    outcomes: ["Found for more searches every month, and still climbing"],
    quote: "You are doing too well. We are flat out with inquiries.",
    cite: "Steve, Owner, Highline Sheds",
  },
  {
    id: "westcoast-hifi",
    client: "WestCoast HiFi",
    face: { src: "/clients/michael.jpg", alt: "Michael, Director of WestCoast HiFi.", w: 90, h: 90 },
    kicker: "WestCoast HiFi · Consumer electronics",
    title: "A faster store, now with AI-built pages",
    body:
      "A retailer going hard at online sales, with a slow Shopify store. We rebuilt it for speed and restructured Google Shopping. Now we are rolling out whole new pages with AI graphic design and AI copy, trained on their brand.",
    result: "40 percent faster, with sales and return on ad spend up. New pages shipping now.",
    challenge:
      "An established retailer moving hard into online sales. The Shopify store was slow and heavy, which hurt conversion and Google Shopping performance, and the campaigns did not have the structure to compete with the big retailers.",
    built:
      "We rebuilt the Shopify store for speed, a 40 percent gain on page load. Then we restructured Google Shopping so the budget flows to the products that make money instead of spreading thinly across the whole range. Now we are rolling out whole new pages with AI graphic design and AI copy, trained on WestCoast’s branding and the way they write, so every page looks and sounds like them.",
    results: [{ value: "40%", label: "faster pages" }],
    outcomes: ["Online sales up", "Return on ad spend up", "New pages built with AI design and copy, in their own brand"],
    quote: "Reliability and Trust is what David and the team provide for us. We know we are in safe hands.",
    cite: "Michael, Director, WestCoast HiFi",
  },
  {
    id: "aldott-homes",
    client: "Aldott Homes",
    face: { src: "/clients/denes.jpg", alt: "Denes, Director of Aldott Homes.", w: 90, h: 90 },
    kicker: "Aldott Homes · Home building",
    title: "From zero to 385 leads a month",
    body:
      "A new builder with a new website and no marketing. We built their Google Ads from scratch, aimed at people already looking for a builder, and kept tightening it month by month.",
    result: "385 leads a month within 6 months, from zero.",
    challenge:
      "Aldott Homes had a new website and no digital marketing. Every job came from word of mouth, in a competitive home building market. They needed a steady flow of enquiries, and they needed it quickly.",
    built:
      "A Google Ads account built from scratch, aimed at people actively looking for a builder. A landing page for each campaign, made from Aldott’s own homes and words and matched to its ad. Then month by month: cut what did not convert, put more behind what did.",
    results: [
      { value: "385", label: "leads a month" },
      { value: "0", label: "leads a month when we started" },
      { value: "6", label: "months to get there" },
    ],
    quote: "We are now constantly growing. Be prepared, it will take off quicker than you think.",
    cite: "Denes, Director, Aldott Homes",
  },
  {
    id: "progressive-car-sound",
    client: "Progressive Car Sound",
    logo: { src: "/clients/progressive-audio.png", alt: "Progressive Car Sound", w: 368, h: 92 },
    kicker: "Progressive Car Sound · Car audio retail",
    title: "$3,500 in the first 6 weeks",
    body:
      "A new website and a Google Ads campaign launched together, with every sale tracked back to the click that started it. The question was whether online would pay for itself. The answer was a number.",
    result: "3,500 dollars of revenue in the first 6 weeks, from a standing start.",
    challenge:
      "Progressive Car Sound needed a website and a way to bring customers to it. The question was a fair one: would online pay for itself, and how fast?",
    built:
      "A new website built from their own products and photos, and a Google Ads campaign launched alongside it. Every sale is tracked back to the click that started it, so the answer to the question is a number, not a guess.",
    results: [{ value: "$3,500", label: "revenue in the first 6 weeks" }],
  },
];

const FAQS = [
  {
    q: "Are these numbers real?",
    a: "Yes. Every figure is from a client account we run or a system we built. Where a client has not given us a number to publish, we say up or down and leave it there. We do not project, round up or borrow from industry averages.",
  },
  {
    q: "Will this work in my industry?",
    a: "The businesses on this page build homes, ship freight, sell sheds and sell hi-fi. The method is the same: start from your numbers, build from your own photos and words, test more than one version, watch the account every hour. If we do not think it will work for you, we will say so.",
  },
  {
    q: "How long before I see something?",
    a: "Google Ads usually moves in the first month. Highline took 3 months and Aldott took 6. SEO is slower. Websites and chat agents are measured in weeks. You get the timeline before you spend anything.",
  },
  {
    q: "Do I need to understand the AI side?",
    a: "No. We set it up and run it. You see the result in leads, sales and hours back. If you want to know how something works, we will explain it in plain words, but you never have to.",
  },
];

/* --------------------------------------------------------------- pieces */

function Results({ items, outcomes = [] }) {
  return (
    <>
      <ul className={styles.results}>
        {items.map((r) => (
          <li key={r.label} className={styles.result}>
            <div className={styles.rv}>{r.value}</div>
            <div className={styles.rl}>{r.label}</div>
          </li>
        ))}
      </ul>
      {outcomes.length ? (
        <ul className={styles.outcomes}>
          {outcomes.map((o) => (
            <li key={o}>{o}</li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

function Built({ built }) {
  if (Array.isArray(built)) {
    return (
      <ul className={styles.list}>
        {built.map((b) => (
          <li key={b.name}>
            <b>{b.name}</b> {b.text}
          </li>
        ))}
      </ul>
    );
  }
  return <p>{built}</p>;
}

function StudyCard({ c }) {
  const cls = [styles.cs, c.lead ? styles.lead : ""].filter(Boolean).join(" ");
  return (
    <li className={cls} id={c.id}>
      <article aria-labelledby={`${c.id}-title`}>
        <div className={styles.head}>
          {c.face ? (
            <Image
              className={styles.face}
              src={c.face.src}
              alt={c.face.alt}
              width={c.face.w}
              height={c.face.h}
              sizes="104px"
            />
          ) : (
            <span className={styles.logoTile}>
              <Image src={c.logo.src} alt={c.logo.alt} width={c.logo.w} height={c.logo.h} sizes="104px" />
            </span>
          )}
          <div className={styles.text}>
            <span className={styles.kicker}>{c.kicker}</span>
            <h2 className={styles.t} id={`${c.id}-title`}>
              {c.title}
            </h2>
            <p className={styles.p}>{c.body}</p>
            <p className={styles.r}>{c.result}</p>
          </div>
        </div>

        <Drawer id={c.id} defaultOpen={Boolean(c.lead)} openLabel="Read the full story" closeLabel="Close the story">
          <div className={styles.block}>
            <h3 className={styles.k}>The challenge</h3>
            <p>{c.challenge}</p>
          </div>
          <div className={styles.block}>
            <h3 className={styles.k}>What we built</h3>
            <Built built={c.built} />
          </div>
          <div className={styles.block}>
            <h3 className={styles.k}>Results</h3>
            <Results items={c.results} outcomes={c.outcomes} />
          </div>
          {c.quote ? (
            <blockquote className={styles.quote}>
              <p>{c.quote}</p>
              <cite>{c.cite}</cite>
            </blockquote>
          ) : null}
        </Drawer>
      </article>
    </li>
  );
}

/* ---------------------------------------------------------------- page */

export default function CaseStudiesPage() {
  return (
    <>
      <Topbar />

      <main>
        <article className="story">
          <div className="plate">
            <StoryHead
              kicker="Case studies"
              title="Real businesses. Real numbers."
              lead="Every figure here is from a client account we run or a system we built. No projections, no averages. Builders, freight, sheds and retail, across Australia."
            />
            <ol className="cases">
              {CASES.map((c) => (
                <StudyCard key={c.id} c={c} />
              ))}
              <CtaCard body="A free 30 minute look at your ads, your site and your content, then real, practical ways to get more from the same budget." />
            </ol>
          </div>
        </article>

        <section className={`ways ${styles.faqSection}`} id="faq">
          <div className="plate">
            <div className="ways__head">
              <h2 className="sc-display sc-display--md">Fair questions</h2>
              <p>Short answers. The longer ones happen on the call, with your numbers on the table.</p>
            </div>
            <Faq items={FAQS} openFirst />
          </div>
        </section>

        <Others title="The services behind these results" />
        <Close />
      </main>
    </>
  );
}
