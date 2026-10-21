"use client";
import { useEffect, useRef } from "react";

/**
 * How it works: numbered steps on a two-column spine. Static, nothing hidden.
 * A small IntersectionObserver marks the step in view .is-on and the steps
 * before it .is-done, as on Labs (skipped under prefers-reduced-motion). Client component only for
 * that observer; the content renders on the server.
 *
 * Props
 *  - heading: default "How it works". Pass "" to omit the head.
 *  - sub: one line under the heading (desktop)
 *  - steps: [{ title, body, note? }]  body 30 words max; note is set bold after it
 *  - cta: { label, note } or null. Default: the assessment button, "That is step one".
 *  - id: section id, default "how"
 *
 * <Plan steps={[{ title: "A free 30 minute AI marketing assessment", body: "We look at your ads, your website and your content." }]} />
 */
export default function Plan({
  heading = "How it works",
  sub,
  steps = [],
  cta = { label: "Book your free AI marketing assessment", note: "That is step one" },
  id = "how",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const items = root.querySelectorAll(".step");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          items.forEach((s) => {
            if (s !== e.target) s.classList.remove("is-on");
          });
          e.target.classList.add("is-on");
          for (const s of items) {
            if (s === e.target) break;
            s.classList.add("is-done");
          }
        });
      },
      { threshold: 0.6 }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="plan" id={id || undefined}>
      <div className="plate plan__wrap">
        {heading ? (
          <div className="plan__head">
            <h2 className="sc-display sc-display--md">{heading}</h2>
            {sub ? <p>{sub}</p> : null}
          </div>
        ) : null}
        <ol className="chart" ref={ref}>
          {steps.map((s, i) => (
            <li className="step" key={i}>
              <span className="step__n">{i + 1}</span>
              <div>
                <h3>{s.title}</h3>
                <div className="step__body">
                  <p>
                    {s.body}
                    {s.note ? (
                      <>
                        {" "}
                        <b>{s.note}</b>
                      </>
                    ) : null}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
        {cta ? (
          <div className="plan__cta">
            <a className="btn btn--accent" href="/contact" data-book>
              {cta.label}
            </a>
            {cta.note ? <span className="sc-label">{cta.note}</span> : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
