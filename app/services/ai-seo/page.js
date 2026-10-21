import Topbar from "../../components/Topbar";
import StoryHead from "../../components/StoryHead";
import Bit from "../../components/Bit";
import Ticks from "../../components/Ticks";
import Faq from "../../components/Faq";
import Aside from "../../components/Aside";
import StoryEnd from "../../components/StoryEnd";
import Others from "../../components/Others";
import Close from "../../components/Close";

export const metadata = {
  title: "AI SEO",
  description:
    "People now ask ChatGPT, Perplexity and Google AI Overviews who to call. We get you into the running for that answer, and still rank on Google. Tracked every month, reported in plain English.",
  alternates: { canonical: "/services/ai-seo" },
};

const GET = [
  "An audit of where you appear today.",
  "Content written so AI can cite you.",
  "The Google basics done properly.",
  "Tracking in Google and the AI engines.",
];

const HOW = [
  ["We check where you stand.", "Your rankings, and what the AI engines say today."],
  ["We fix the foundations.", "Technical, on-page and speed, done properly."],
  ["We write content built to be quoted.", "AI drafts, a person checks every page."],
  ["We track both and keep going.", "You see what moved, and what it meant in leads."],
];

const FAQS = [
  {
    q: "Is this instead of normal SEO?",
    a: "No, it sits on top. AI answers lean on pages that already rank well and answer a question clearly. We do the proper Google work first, then shape your content so AI can quote it.",
  },
  {
    q: "How long does it take?",
    a: "The audit and fixes happen in the first few weeks. Google rankings usually start moving in two to three months. Highline Sheds reached the top three. We tell you what we see each month, not what we hope.",
  },
  {
    q: "Can you guarantee ChatGPT will mention us?",
    a: "No. Nobody can, and anyone who says they can is guessing. What we do instead: rank you on Google for the right questions, answer them clearly on your site, set the pages up so AI can read them, and measure what the engines say about you every month.",
  },
  {
    q: "What do you need from me?",
    a: "Less than you expect. The questions customers ask you every week, photos of real jobs, and about an hour at the start so we get your words right. You approve every page before it goes live.",
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
              kicker="AI SEO"
              title="Found on Google, and in the AI answers."
              lead="People now ask ChatGPT, Perplexity and Google AI Overviews who to call. We build your site so you show up in that answer, and still rank on Google."
            />
            <div className="story__body">
              <Bit title="The shift" id="shift">
                <p>
                  Search used to give ten links. Now it often gives one answer, naming two or three
                  businesses. <b>If you are not one of them, that customer never sees you.</b>
                </p>
                <p>Our job is to make your site the one the AI engines trust enough to quote.</p>
              </Bit>

              <Bit title="What you get" id="what">
                <p>One plan, both results.</p>
                <Ticks items={GET} ariaLabel="What is included" />
                <p>
                  Tracking runs on MarketMetrica, our own system, built with Mindsheep Labs: a
                  plain-English report a person has checked, and a portal for your numbers any time.
                </p>
              </Bit>

              <Bit title="How it works" id="how">
                {HOW.map(([lead, rest]) => (
                  <p key={lead}>
                    <b>{lead}</b> {rest}
                  </p>
                ))}
              </Bit>

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
                  Ads and added an AI SEO campaign on the shed searches people make when ready to buy.
                  Top three Google rankings followed, and Highline is being found for more searches
                  every month.
                </p>
                <p>
                  <b>2.09 times the leads at 30.5 percent lower cost, in three months.</b>{" "}
                  <a className="u" href="/case-studies#highline-sheds">
                    Read the full story
                  </a>
                </p>
              </Bit>

              <Bit title="Questions we get asked" id="faq">
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

        <Others current="/services/ai-seo" />
        <Close />
      </main>
    </>
  );
}
