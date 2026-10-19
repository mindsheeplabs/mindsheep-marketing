import Image from "next/image";
import Link from "next/link";
import Topbar from "../../components/Topbar";
import StoryHead from "../../components/StoryHead";
import Bit from "../../components/Bit";
import Aside from "../../components/Aside";
import StoryEnd from "../../components/StoryEnd";
import Others from "../../components/Others";
import Faq from "../../components/Faq";
import Close from "../../components/Close";
import styles from "./page.module.css";

export const metadata = {
  title: "AI chat and voice agents",
  description:
    "Every enquiry answered in minutes. An AI assistant on your website that answers, asks the right questions and quotes on the spot, plus a voice agent for calls. Perth based, Australia wide.",
  alternates: { canonical: "/services/ai-chat-and-voice" },
};

const BUILDS = [
  {
    title: "Website chat assistant",
    line: "Answers enquiries the moment they land, in your words, day or night.",
  },
  {
    title: "Instant quotes",
    line: "Asks what your best person would ask, then prices the job on the spot.",
  },
  {
    title: "Voice agent",
    line: "Answers your calls, takes the details and texts the caller back within minutes.",
  },
  {
    title: "SMS follow-up",
    line: "Texts every enquiry back within minutes, so nothing goes cold.",
  },
];

const WILLSHIP = [
  "Alex, their freight chatbot, now live and answering shipping questions.",
  "Sam, a second assistant for vehicle shipping.",
  "A quote wizard that prices 23 variables during the chat.",
  "Every enquiry now arrives complete and quoted.",
];

const HOW = [
  "We learn your business: your services, prices, hours and the questions you get asked.",
  "We build the assistant in your words and test it with your team.",
  "It goes live on your website and phone, with every lead sent to you complete.",
  "We watch the conversations and tune it every month.",
];

const FAQ = [
  {
    q: "Will customers know it is AI?",
    a: "Yes. We say so, up front. They still prefer the fast answer to waiting a day for a call back.",
  },
  {
    q: "Does it replace my staff?",
    a: "No. It removes the admin: the first reply, the questions, the quote. Your people pick up a lead that is ready to close.",
  },
  {
    q: "What about compliance?",
    a: "Consent, disclosure and calling hours are handled for your region, so the agent follows the rules wherever your customers are.",
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
              kicker="AI chat and voice agents"
              title="Every enquiry answered in minutes."
              lead="A website assistant that answers, asks the right questions and quotes on the spot. A voice agent that answers calls and follows up by SMS. Every lead arrives complete."
            />

            <div className="story__body">
              <Bit title="What we build">
                <ul className={styles.grid}>
                  {BUILDS.map((b) => (
                    <li className={styles.card} key={b.title}>
                      <h3>{b.title}</h3>
                      <p>{b.line}</p>
                    </li>
                  ))}
                </ul>
              </Bit>

              <Bit
                variant="real"
                tag="A real job"
                title="WillShip International"
                quote={{
                  text: "Great work on the whole project mate, you have done an amazing job. I have just flicked it live.",
                  cite: "Nick Proctor, WillShip International",
                }}
              >
                <div className={styles.who}>
                  <Image
                    className={styles.face}
                    src="/clients/nick.png"
                    alt="Nick Proctor of WillShip International."
                    width={150}
                    height={150}
                    sizes="56px"
                  />
                  <span>Freight and vehicle shipping</span>
                </div>
                <ul>
                  {WILLSHIP.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <p>
                  <Link className="u" href="/case-studies#willship">
                    Read the full story
                  </Link>
                </p>
              </Bit>

              <Bit title="How it works">
                <ol className={styles.steps}>
                  {HOW.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ol>
              </Bit>

              <Bit title="Questions people ask">
                <Faq items={FAQ} />
              </Bit>

              <Aside
                title="Want your enquiries handled?"
                body="A free 30 minute look at how enquiries reach you now, and what an assistant would answer for you."
              />
            </div>
          </div>
        </article>

        <StoryEnd lead="Tell us how enquiries reach you. We will show you what an assistant would answer.">
          <p>
            A free 30 minute assessment, then a plain-words plan: what to build, what it costs and
            what it should return.
          </p>
        </StoryEnd>

        <Others current="/services/ai-chat-and-voice" />
        <Close />
      </main>
    </>
  );
}
