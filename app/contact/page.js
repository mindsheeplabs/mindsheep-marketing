import Topbar from "../components/Topbar";
import StoryHead from "../components/StoryHead";
import BookForm from "../components/BookForm";
import Close from "../components/Close";

export const metadata = {
  title: "Contact",
  description:
    "Book your free AI marketing assessment. Tell us a little about your business and we will come back within one business day. Perth based, working with businesses across Australia.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Topbar />

      <main>
        <article className="story story--contact" id="contact">
          <div className="plate">
            <StoryHead
              kicker="Contact"
              title="Book your free AI marketing assessment."
              lead="Tell us a little about your business. We will come back within one business day."
            />

            <div className="story__body">
              {/* The same form as the dialog, rendered inline. */}
              <div className="book book--inline">
                <BookForm
                  idPrefix="contact"
                  kicker="Free assessment"
                  title="Your details"
                  lead="Four short fields. It takes about a minute."
                  button="Book my assessment"
                  note="A real conversation, not a sales pitch."
                />
              </div>

              <aside className="aside">
                <div className="box">
                  <h2>What happens next</h2>
                  <p>
                    David reads your note and looks at your ads, your website and your content. Then
                    a 30 minute call about where the money goes and what we would change. No
                    obligation, no tech speak.
                  </p>
                </div>
                <div className="box">
                  <h2>Where we are</h2>
                  <p>
                    Perth based. We work with businesses across Australia, by phone and video call.
                  </p>
                </div>
                <div className="box">
                  <h2>Not ready to book?</h2>
                  <p>
                    Read how each service works first:{" "}
                    <a className="u" href="/services">
                      see the five services
                    </a>
                    , or{" "}
                    <a className="u" href="/case-studies">
                      what we have done for businesses like yours
                    </a>
                    .
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </article>

        <Close cta={null} />
      </main>
    </>
  );
}
