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
import SearchShift from "./SearchShift";

export const metadata = {
  title: "AI search and visibility",
  description:
    "Google now answers first, and people ask ChatGPT who to call. We set your website up so you are in those answers, and still rank on Google. Few businesses have done this yet, so the gains come fast.",
  alternates: { canonical: "/services/ai-search-visibility" },
};

const GET = [
  "A plain report of where you show up today.",
  "A page for each job you want more of, written the way people ask.",
  "Your site set up so Google and ChatGPT can read it.",
  "Reviews and service areas in the right places.",
  "A monthly note in plain words: what moved, what it meant.",
];

const HOW = [
  ["We look.", "Where you appear on Google and what ChatGPT says when someone asks for a business like yours. You get it in plain words."],
  ["We fix the basics.", "Speed, structure, the things Google expects. You will not notice them, which is the point."],
  ["We write the pages.", "One for each job or product you want more of, answering the questions people type. AI drafts, a person checks, you approve."],
  ["We keep going.", "Each month we see what moved, add what is missing, and tell you what it meant in enquiries."],
];

const PEOPLE = [
  {
    name: "Anna",
    business: "Physio clinic, northern suburbs",
    src: "/people/personas/anna.webp",
    alt: "Anna, who runs a physiotherapy clinic, at her reception desk.",
    today:
      "Her clinic shows up for its own name and not much else. When someone asks ChatGPT for a physio near them, she is not in the answer.",
    we: "Fix the basics on her site, add a plain page for each thing she treats, written the way people ask, and set it up so Google and ChatGPT can read it.",
    after:
      "Within a few months she appears for searches like physio for back pain near me, on Google and in the AI answer. New patients say they found her online again.",
  },
  {
    name: "Mick",
    business: "Plumber, Perth",
    src: "/people/personas/mick.webp",
    alt: "Mick, who runs a plumbing business, beside his work van.",
    today:
      "Most of his work is word of mouth. Google now answers emergency plumber before anyone scrolls, and it names three of his competitors.",
    we: "A page for each job he wants more of, hot water, blocked drains, gas, each answering the questions people actually type, with his reviews and service area set up so the AI engines trust the site.",
    after:
      "He becomes one of the names in that answer for his suburbs. The phone rings for the jobs he wants, not only the small ones.",
  },
];

const FAQS = [
  {
    q: "Is this instead of normal SEO?",
    a: "No, it sits on top. AI answers lean on pages that already rank well and answer a question clearly. We do the proper Google work first, then shape your pages so AI can quote them.",
  },
  {
    q: "How long does it take?",
    a: "The look and the fixes happen in the first few weeks. Google usually starts moving in two to three months. Because few businesses have done this yet, the AI side often moves sooner. We tell you what we see each month, not what we hope.",
  },
  {
    q: "Can you guarantee ChatGPT will mention us?",
    a: "No. Nobody can, and anyone who says they can is guessing. What we do: rank you on Google for the right questions, answer them clearly on your site, set the pages up so AI can read them, and measure what the engines say about you every month.",
  },
  {
    q: "Do I need to understand any of this?",
    a: "No. You need to tell us what you do, where you do it, and the questions customers ask you every week. We do the rest and explain it in plain words.",
  },
  {
    q: "What do you need from me?",
    a: "Less than you expect. About an hour at the start, photos of real jobs, and a yes or no on each page before it goes live.",
  },
];

export default function Page() {
  return (
    <>
      <Topbar />
      <main>
        <article className="story">
          <div className="plate">
            <StoryHead
              kicker="AI search and visibility"
              title="Found on Google, and in the AI answers."
              lead="Google now answers first. People ask ChatGPT who to call. We set your website up so you are in those answers, and still rank the old way too."
            />
            <div className="story__body">
              <Bit title="What changed" id="shift">
                <p>
                  Search used to give ten links. Now it often gives one answer at the top, naming two
                  or three businesses. <b>If you are not one of them, that customer never sees you.</b>
                </p>
                <SearchShift />
                <p>
                  The same thing is happening in ChatGPT. People ask it who to call, and it answers
                  with names. Our job is to make your site one the AI engines trust enough to name.
                </p>
              </Bit>

              <Bit title="Why now" id="why">
                <p>
                  Most businesses have not done this yet. <b>That makes it cheap and quick to get
                  ahead.</b> A plain page that answers a real question, on a site set up properly,
                  can be picked up within weeks. In a year, everyone will be doing it and it will be
                  harder.
                </p>
              </Bit>

              <Bit title="What you get" id="what">
                <p>One plan, both results: Google and the AI answers.</p>
                <Ticks items={GET} ariaLabel="What is included" />
                <p>
                  Tracking runs on MarketMetrica, our own system, built with Mindsheep Labs. It watches
                  where you appear and writes the first draft of your monthly note. A person checks it
                  before you see it.
                </p>
              </Bit>

              <Bit title="How it works" id="how">
                {HOW.map(([lead, rest]) => (
                  <p key={lead}>
                    <b>{lead}</b> {rest}
                  </p>
                ))}
              </Bit>

              <People people={PEOPLE} />

              <Bit
                variant="real"
                tag="A real job"
                title="Highline Sheds: top three rankings, twice the leads"
                id="proof"
                quote={{
                  text: "You are doing too well. We are flat out with inquiries.",
                  cite: "Steve, Owner, Highline Sheds",
                }}
              >
                <p>
                  Highline Sheds was paying too much for every enquiry. We restructured their Google
                  Ads and added an AI search campaign on the shed searches people make when ready to
                  buy. Top three Google rankings followed, and Highline is being found for more
                  searches every month.
                </p>
                <p>
                  <b>2.09 times the leads at 30.5 percent lower cost, in three months.</b>{" "}
                  <a className="u" href="/case-studies#highline-sheds">
                    Read the full story
                  </a>
                </p>
              </Bit>

              <Bit title="Questions people ask" id="faq">
                <Faq items={FAQS} />
              </Bit>

              <Aside
                title="Want to be found?"
                body="A free 30 minute look at where you show up on Google and in the AI answers today, and what it would take to be in them."
              />
            </div>
          </div>
        </article>

        <StoryEnd lead="Tell us what you do and where. We will tell you where you show up, and what it would take.">
          <p>A free 30 minute assessment, then a plain-words plan. No obligation.</p>
        </StoryEnd>

        <Others current="/services/ai-search-visibility" />
        <Close />
      </main>
    </>
  );
}
