import Topbar from "../../components/Topbar";
import StoryHead from "../../components/StoryHead";
import Bit from "../../components/Bit";
import Ticks from "../../components/Ticks";
import Faq from "../../components/Faq";
import Aside from "../../components/Aside";
import People from "../../components/People";
import { PERSONAS } from "../../data/personas";
import StoryEnd from "../../components/StoryEnd";
import Others from "../../components/Others";
import Close from "../../components/Close";
import { metaFor, faqsFor } from "../../lib/content";
import styles from "./page.module.css";

/*
 * Every fact on this page comes from OpenAI's own help pages (Business Hub,
 * ChatGPT Ads basics, Ads Manager availability, creating campaigns), read
 * 13 to 16 Nov 2026. Keep to OpenAI's wording on what claiming does: it does
 * NOT guarantee visibility. No prices, no result figures, no MarketMetrica
 * claims until David confirms them. Source notes: content-ops/playbooks/
 * chatgpt-business-hub-guide.md.
 */

const DEFAULT_METADATA = {
  title: "ChatGPT for business: your listing and ChatGPT Ads",
  description:
    "Get your business into ChatGPT. We claim and set up your free ChatGPT business listing, make your website easy for ChatGPT to read and quote, and run ChatGPT Ads, now available in Australia.",
  alternates: { canonical: "/services/chatgpt-for-business" },
};

export const metadata = metaFor("/services/chatgpt-for-business", DEFAULT_METADATA);

const WHAT_WE_DO = [
  "Your free ChatGPT business listing, claimed and set up.",
  "What you sell added, with prices, in a form ChatGPT reads.",
  "Your website made easy for ChatGPT to read and quote.",
  "ChatGPT Ads, shown below the answer, from 25 dollars a day.",
  "A plain-words note each month: mentions, clicks and topics.",
];

const STEPS = [
  ["We find your business in ChatGPT.", "If you're not listed and you sell online, we add you."],
  ["You prove it's yours.", "A code to your business phone or email, or a record on your website's domain, which we can add for you."],
  ["You do a quick identity check.", "Your ID and business registration details. This is what earns the blue tick."],
  ["We fill in your profile.", "Your description, category, contact details, logo and cover, written the way your customers talk."],
  ["We add what you sell.", "Products or services, each with a name, a description and a price."],
  ["We check ChatGPT can read your website,", "and fix what stops it."],
  ["We report each month.", "How often ChatGPT mentioned you, how many people clicked through, and what they were asking about."],
];

const byName = (n) => PERSONAS.find((p) => p.name === n);
const PEOPLE = [
  {
    ...byName("Priya"),
    line: "Sells her homewares online as well as in the shop. We claim her ChatGPT listing and add her range with prices, so the facts ChatGPT has about her are hers.",
  },
  {
    ...byName("Jim"),
    line: "Already runs Google Ads. A small ChatGPT Ads test puts his pool business below the answer when people ask ChatGPT about building a pool.",
  },
];

export default function ChatGptForBusinessPage() {
  const faqs = faqsFor("chatgpt-for-business");
  return (
    <>
      <Topbar />

      <main>
        <article className="story">
          <div className="plate">
            <StoryHead
              kicker="ChatGPT for business"
              title="Get your business into ChatGPT."
              lead="People now ask ChatGPT who to buy from. It is already talking about your business. We make sure it has the facts, and put you in front of the people asking."
            />

            <div className="story__body">
              <People people={PEOPLE} />

              <Bit title="What changed" id="changed">
                <p>
                  In November 2026 ChatGPT opened a free business listing, much like your Google
                  business profile. <b>You can now claim your business, describe it in your own words,
                  add what you sell, and see how often ChatGPT mentions you.</b>
                </p>
                <p>
                  ChatGPT also now shows ads, below its answers, and you can run them from Australia.
                  Few businesses have done either yet.
                </p>
              </Bit>

              <Bit title="What we do" id="what">
                <Ticks items={WHAT_WE_DO} ariaLabel="What we do for your business in ChatGPT" />
              </Bit>

              <Bit title="How the listing works" id="how">
                <ol className={styles.steps}>
                  {STEPS.map(([lead, rest]) => (
                    <li key={lead}>
                      <b>{lead}</b> {rest}
                    </li>
                  ))}
                </ol>
                <p>You only need to do steps two and three. We walk you through both.</p>
              </Bit>

              <Bit title="ChatGPT Ads" id="ads">
                <p>
                  <b>Your ad shows below ChatGPT's answer</b>, with your business name, logo, a
                  headline, a short message, an image and a link to your site. It is shown to people on
                  ChatGPT's free plan.
                </p>
                <p>
                  There are no keywords. We describe the conversations your business fits, and ChatGPT
                  uses that to decide where your ad appears. You set the budget, from 25 dollars a day,
                  and pay for views, clicks or results. We start small, see what it brings, and tell you
                  plainly.
                </p>
              </Bit>

              <Bit title="Can I do this from Australia?" id="australia">
                <p>
                  <b>If you sell online, yes.</b> Online stores and online service businesses can claim
                  their listing today. A local business with a shopfront can only claim an existing US
                  listing for now, so for a cafe, clinic or trade business we start with your website and
                  ChatGPT Ads, both of which work here today.
                </p>
              </Bit>

              <Bit title="What it does, and what it doesn't" id="honest">
                <p>
                  Claiming your listing doesn't on its own make ChatGPT recommend you more. OpenAI is
                  clear about that. <b>What earns the mentions is your website</b>: a mention is counted
                  when ChatGPT points to it. So we do both: the listing for the facts, the website for the
                  mentions, and ads where you want to be seen now.
                </p>
              </Bit>

              <Bit title="Questions people ask" id="faq">
                <Faq items={faqs} />
              </Bit>

              <Aside
                title="Want to be in ChatGPT?"
                body="A free 30 minute look at what ChatGPT says about your business today, and what it would take to get you in front of the people asking."
              />
            </div>
          </div>
        </article>

        <StoryEnd lead="ChatGPT is already talking about your business. Make sure it has the facts.">
          <p>A free 30 minute assessment, then a plain-words plan. No obligation.</p>
        </StoryEnd>

        <Others current="/services/chatgpt-for-business" />
        <Close />
      </main>
    </>
  );
}
