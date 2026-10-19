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
  title: "AI-powered Google Ads",
  description:
    "More leads from the same ad spend. Your Google Ads account is watched every hour by our own system and adjusted while it matters, not once a month. Perth based, working with businesses across Australia.",
  alternates: { canonical: "/services/ai-google-ads" },
};

const WHAT_YOU_GET = [
  "An account built around what converts.",
  "Search and Shopping ads, as you need them.",
  "Bids and keywords tuned daily.",
  "New ad wording tested every week.",
  "A plain-English report and your own portal.",
];

const FAQS = [
  {
    q: "Do I own the account?",
    a: "Yes, always. It is in your name, you pay Google directly, and everything stays with you if you ever leave.",
  },
  {
    q: "Is there a minimum spend?",
    a: "No fixed figure. Your budget needs to buy enough clicks to learn what converts. We tell you plainly what that takes.",
  },
  {
    q: "How soon will I see results?",
    a: "Leads usually start within weeks. Most of the gain comes over the first two to three months.",
  },
  {
    q: "What do you need from me?",
    a: "About an hour at the start, access to your account, your photos and offers, then quick replies when we flag a decision.",
  },
];

export default function AiGoogleAdsPage() {
  return (
    <>
      <Topbar />

      <main>
        <article className="story">
          <div className="plate">
            <StoryHead
              kicker="AI-powered Google Ads"
              title="More leads from the same ad spend."
              lead="Your account is watched every hour by our own system and adjusted while it matters, not once a month. You see it in the leads and what each one costs."
            />

            <div className="story__body">
              <Bit title="What you get" id="what">
                <p>Every dollar chases a lead you actually want. Here is what that looks like.</p>
                <Ticks items={WHAT_YOU_GET} ariaLabel="What you get with AI-powered Google Ads" />
              </Bit>

              <Bit title="How it works" id="how">
                <p>
                  <b>We build the account around your real buyers.</b> The jobs you want, where you
                  serve.
                </p>
                <p>
                  <b>Our own system, MarketMetrica, built with Mindsheep Labs, checks your numbers
                  every hour.</b>
                </p>
                <p>
                  <b>It flags the moment spend or cost per lead drifts,</b> and suggests what to do.
                </p>
                <p>
                  <b>A person acts the same day</b> and tells you what changed, in plain English.
                </p>
              </Bit>

              <Bit title="Why it costs the same and you get more" id="why">
                <p>
                  Most agencies spend their hours pulling numbers from three logins and building the
                  monthly report. Our system cut that work by about 70 percent, so those hours go into
                  testing: more campaigns, more ad variations, faster fixes. <b>Same fee, more of it
                  spent on your results.</b>
                </p>
              </Bit>

              <Bit
                variant="real"
                tag="Real jobs"
                title="What it did for businesses like yours"
                id="proof"
                quote={{
                  text: "You are doing too well. We are flat out with inquiries.",
                  cite: "Steve, Owner, Highline Sheds",
                }}
              >
                <p>
                  <b>Aldott Homes:</b> zero to 385 leads a month in six months, with an AI-generated
                  landing page per campaign.
                </p>
                <p>
                  <b>Highline Sheds:</b> 2.09 times the leads at 30.5 percent lower cost, in three
                  months.
                </p>
              </Bit>

              <Bit title="Questions" id="faq">
                <Faq items={FAQS} />
              </Bit>

              <Aside
                title="Free AI marketing assessment"
                body="A free 30 minute look at your account, then a plain-words plan: what we would change and what it should return."
              />
            </div>
          </div>
        </article>

        <StoryEnd lead="Tell us what you spend. We will tell you what it should be getting you.">
          <p>A free 30 minute assessment, then a plain-words plan. No obligation.</p>
        </StoryEnd>

        <Others current="/services/ai-google-ads" />
        <Close />
      </main>
    </>
  );
}
