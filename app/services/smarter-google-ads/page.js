import Topbar from "../../components/Topbar";
import StoryHead from "../../components/StoryHead";
import Bit from "../../components/Bit";
import Ticks from "../../components/Ticks";
import Faq from "../../components/Faq";
import Aside from "../../components/Aside";
import People from "../../components/People";
import { personasFor } from "../../data/personas";
import StoryEnd from "../../components/StoryEnd";
import Others from "../../components/Others";
import Close from "../../components/Close";

export const metadata = {
  title: "Smarter AI Google Ads",
  description:
    "More leads from the same ad spend. Your account is checked every hour by our own system, new campaigns and landing pages go live in days, and a person tells you what changed in plain words.",
  alternates: { canonical: "/services/smarter-google-ads" },
};

const WHAT_YOU_GET = [
  "An account built around the jobs you want.",
  "Ads and images made from your real work, not stock.",
  "A landing page for each service, live in days.",
  "Your account checked every hour, not once a month.",
  "A plain-words note each month and your own portal.",
];

const HOW = [
  ["We talk.", "What you do, where, and which jobs you want more of. About an hour."],
  ["We build.", "AI drafts the ads, the images and a page for each service. We shape them until they sound like you. You say yes."],
  ["We watch.", "MarketMetrica checks the account every hour. It knows when a lead lands on your site and flags the moment cost drifts."],
  ["We act.", "A person makes the change the same day and tells you what happened, in plain words."],
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
    q: "What does the AI actually do?",
    a: "It drafts the ad wording, makes the images from your photos, builds the landing pages, pulls the numbers every hour and writes the first draft of your report. A person checks all of it and makes the decisions.",
  },
  {
    q: "What do you need from me?",
    a: "About an hour at the start, access to your account, your photos and offers, then quick replies when we flag a decision.",
  },
];

export default function SmarterGoogleAdsPage() {
  return (
    <>
      <Topbar />

      <main>
        <article className="story">
          <div className="plate">
            <StoryHead
              kicker="Smarter AI Google Ads"
              title="More leads from the same ad spend."
              lead="Your account is checked every hour, new campaigns and pages go live in days, and a person tells you what changed in plain words."
            />

            <div className="story__body">
              <People people={personasFor("/services/smarter-google-ads")} />

              <Bit title="What you get" id="what">
                <p>Every dollar chases a lead you actually want. Here is what that looks like.</p>
                <Ticks items={WHAT_YOU_GET} ariaLabel="What you get with smarter AI Google Ads" />
              </Bit>

              <Bit title="How it works" id="how">
                {HOW.map(([lead, rest]) => (
                  <p key={lead}>
                    <b>{lead}</b> {rest}
                  </p>
                ))}
              </Bit>

              <Bit title="Why faster matters" id="faster">
                <p>
                  Want to push a new service or product? <b>We can have a campaign and a proper
                  landing page live in days, not weeks.</b> That means more things get tried, the
                  ones that work get more budget, and the ones that do not get switched off before
                  they cost you.
                </p>
                <p>
                  The same speed works the other way. When the season changes, a competitor moves, or
                  a page breaks, our system sees it within the hour and we respond that day.
                </p>
              </Bit>

              <Bit title="The system behind it" id="system">
                <p>
                  Much of this runs on MarketMetrica, our own system, built with Mindsheep Labs. It
                  pulls your numbers every hour, links to your website so it knows when a lead
                  arrives, and shows us each account as green, blue, yellow or red.{" "}
                  <b>We handle the reds today, plan for the yellows, and let the greens run.</b>
                </p>
                <p>
                  Alongside it we use our own checks and a mix of AI tools, so nothing rests on one
                  system. You see the result in leads and what each one costs, in your own portal, any
                  time.
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
                  <b>Aldott Homes:</b> zero to 385 leads a month in six months, from an account built
                  from scratch.
                </p>
                <p>
                  <b>Highline Sheds:</b> 2.09 times the leads at 30.5 percent lower cost, in three
                  months.
                </p>
                <p>
                  <a className="u" href="/case-studies">
                    Read the full stories
                  </a>
                </p>
              </Bit>

              <Bit title="Questions" id="faq">
                <Faq items={FAQS} />
              </Bit>

              <Aside
                title="Want more from your ads?"
                body="A free 30 minute look at your account, then a plain-words plan: what we would change and what it should return."
              />
            </div>
          </div>
        </article>

        <StoryEnd lead="Tell us what you spend. We will tell you what it should be getting you.">
          <p>A free 30 minute assessment, then a plain-words plan. No obligation.</p>
        </StoryEnd>

        <Others current="/services/smarter-google-ads" />
        <Close />
      </main>
    </>
  );
}
