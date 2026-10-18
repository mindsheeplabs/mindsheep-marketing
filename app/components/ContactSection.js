"use client";
import { useState } from "react";

export default function ContactSection() {
  const [formStatus, setFormStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setFormStatus("sending");
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      business: form.business.value,
      budget: form.budget.value,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setFormStatus("sent");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  }

  return (
    <section id="contact" className="section-alt py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4">
            Let&apos;s talk — <span className="text-gradient">human to human.</span>
          </h2>
          <p className="max-w-xl mx-auto" style={{ fontSize: "1.05rem" }}>
            Tell us what you sell and where you&apos;re stuck. We&apos;ll come back with a clear view of what AI could do for your business — no pitch, no jargon.
          </p>
        </div>
        <div className="glass-panel p-10 md:p-16 max-w-2xl mx-auto contact-panel">
          {formStatus === "sent" ? (
            <div className="text-center" style={{ padding: "2rem 0" }}>
              <h3 className="mb-4 text-primary">Message sent.</h3>
              <p className="text-gray-300">
                Thanks for reaching out — we&apos;ll be in touch within one business day.
              </p>
              <button onClick={() => setFormStatus("idle")} className="btn btn-secondary mt-6">
                Send another message
              </button>
            </div>
          ) : (
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-semibold text-gray-300">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" className="form-input" required />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-gray-300">Email</label>
                <input type="email" id="email" name="email" placeholder="you@company.com" className="form-input" required />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="business" className="text-sm font-semibold text-gray-300">
                  What do you do, and where are you stuck?
                </label>
                <textarea
                  id="business"
                  name="business"
                  rows={4}
                  placeholder="A few sentences on your business and what you'd like to be different."
                  className="form-input"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="budget" className="text-sm font-semibold text-gray-300">
                  Monthly budget (approximate)
                </label>
                <select id="budget" name="budget" className="form-input">
                  <option value="">Select a range</option>
                  <option value="under5k">Under $5,000</option>
                  <option value="5k-15k">$5,000 – $15,000</option>
                  <option value="15k-50k">$15,000 – $50,000</option>
                  <option value="50k+">$50,000+</option>
                </select>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: "100%", textAlign: "center", padding: "1rem" }}
                disabled={formStatus === "sending"}
              >
                {formStatus === "sending" ? "Sending…" : "Book a Strategy Call"}
              </button>
              {formStatus === "error" && (
                <p className="text-center text-sm" style={{ color: "#fb7185" }}>
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
