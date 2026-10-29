"use client";
import { useRef, useState } from "react";
import { snapshot } from "../lib/visitor";

/**
 * The booking form. Used inside BookDialog and inline on /contact
 * (wrap it in <div className="book book--inline">). Client component.
 * POSTs JSON {name, email, business, budget, meta} to /api/contact. Keep that
 * contract. meta is the visitor snapshot (page, referrer, first touch, trail,
 * device), gathered at submit time by app/lib/visitor.js. Budget values: under5k, 5k-15k, 15k-50k, 50k+.
 *
 * Props (all optional)
 *  - idPrefix: for field ids, default "book". Use another when two forms share a page.
 *  - titleId: id for the title, so a dialog can point aria-labelledby at it
 *  - closeButton: render the round close button (inside the dialog only)
 *  - doneAction: a node shown under the done message (e.g. a close button)
 *  - kicker, title, lead, button, note: the copy
 *
 * <div className="book book--inline"><BookForm idPrefix="contact" /></div>
 */
const BUDGETS = [
  ["under5k", "Under $5,000"],
  ["5k-15k", "$5,000 to $15,000"],
  ["15k-50k", "$15,000 to $50,000"],
  ["50k+", "Over $50,000"],
];

export default function BookForm({
  idPrefix = "book",
  titleId,
  closeButton = false,
  doneAction = null,
  kicker = "Free assessment",
  title = "Book your free AI marketing assessment",
  lead = "Tell us a little about your business. We will come back within one business day.",
  button = "Book my assessment",
  note = "A real conversation, not a sales pitch.",
}) {
  const [status, setStatus] = useState("idle"); // idle | sending | done | error
  const startedAt = useRef(null); // first keystroke, for time-to-fill

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    const data = {
      name: form.name.value,
      email: form.email.value,
      business: form.business.value,
      budget: form.budget.value,
      meta: snapshot({
        variant: idPrefix === "contact" ? "inline on /contact" : "pop-up dialog",
        fillMs: startedAt.current ? Date.now() - startedAt.current : undefined,
        honeypot: form.website ? form.website.value : "",
      }),
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("done");
      try {
        const lead = { form: data.meta?.variant, budget: data.budget || "unset" };
        if (typeof window.gtag === "function") {
          // GA4 on its own (no GTM container): gtag is loaded.
          window.gtag("event", "generate_lead", lead);
        } else {
          // GTM mode: gtag is not loaded, so the event goes on the dataLayer
          // for a GTM trigger to pick up and send to GA4.
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({ event: "generate_lead", ...lead });
        }
      } catch {
        /* analytics must never break the form */
      }
    } catch {
      setStatus("error");
    }
  }

  const id = (s) => `${idPrefix}-${s}`;

  if (status === "done") {
    return (
      <div className="book__done" role="status">
        {closeButton ? (
          <button className="book__close" type="button" data-book-close aria-label="Close">
            &times;
          </button>
        ) : null}
        <span className="book__kicker">Booked</span>
        <h2 className="book__title" id={titleId}>
          Thanks. We will be in touch within one business day.
        </h2>
        <p className="book__lead">
          Bring what you spend and what you get back. That is where the assessment starts.
        </p>
        {doneAction ? <p>{doneAction}</p> : null}
      </div>
    );
  }

  return (
    <form
      className="book__form"
      onSubmit={onSubmit}
      onFocusCapture={() => {
        if (!startedAt.current) startedAt.current = Date.now();
      }}
    >
      {/* Honeypot: hidden from people, filled by bots. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
      />
      {closeButton ? (
        <button className="book__close" type="button" data-book-close aria-label="Close">
          &times;
        </button>
      ) : null}
      <span className="book__kicker">{kicker}</span>
      <h2 className="book__title" id={titleId}>
        {title}
      </h2>
      <p className="book__lead">{lead}</p>
      <div className="book__grid">
        <label className="book__field" htmlFor={id("name")}>
          <span>Name</span>
          <input id={id("name")} type="text" name="name" autoComplete="name" required />
        </label>
        <label className="book__field" htmlFor={id("email")}>
          <span>Email</span>
          <input id={id("email")} type="email" name="email" autoComplete="email" required />
        </label>
        <label className="book__field book__field--wide" htmlFor={id("business")}>
          <span>Business: what you do and where you are stuck</span>
          <textarea
            id={id("business")}
            name="business"
            rows={3}
            placeholder="We build sheds in regional WA. The ads bring enquiries but half never turn into quotes."
            required
          />
        </label>
        <label className="book__field book__field--wide" htmlFor={id("budget")}>
          <span>Monthly budget</span>
          <select id={id("budget")} name="budget" defaultValue="">
            <option value="">Select a range</option>
            {BUDGETS.map(([v, l]) => (
              <option value={v} key={v}>
                {l}
              </option>
            ))}
          </select>
        </label>
      </div>
      {status === "error" ? (
        <p className="book__error" role="alert">
          That did not send. Please check your details and try again.
        </p>
      ) : null}
      <div className="book__actions">
        <button className="btn btn--accent" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending" : button}
        </button>
        <span className="book__note">{note}</span>
      </div>
    </form>
  );
}
