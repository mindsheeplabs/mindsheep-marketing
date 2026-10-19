"use client";
import { useEffect, useRef } from "react";
import BookForm from "./BookForm";

/**
 * The booking pop-up. One native <dialog> for the whole site, mounted once
 * in app/layout.js. Do not add it to pages.
 *
 * Any element with data-book opens it (a click is intercepted; the element's
 * href is the no-JavaScript fallback, so use href="/contact"). Any element
 * with data-book-close closes it. Escape and a click on the backdrop close it
 * too; the browser handles focus. States: sending, done, error.
 *
 * <a className="btn btn--accent" href="/contact" data-book>Book your free assessment</a>
 */
export default function BookDialog() {
  const ref = useRef(null);

  useEffect(() => {
    const dlg = ref.current;
    if (!dlg || typeof dlg.showModal !== "function") return;

    function open() {
      if (dlg.open) return;
      dlg.showModal();
      const first = dlg.querySelector("input");
      if (first) setTimeout(() => first.focus(), 30);
    }

    function onClick(e) {
      const t = e.target;
      if (!(t instanceof Element)) return;
      if (t.closest("[data-book]")) {
        e.preventDefault();
        open();
        return;
      }
      if (t.closest("[data-book-close]")) {
        dlg.close();
        return;
      }
      if (t === dlg) dlg.close();
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <dialog className="book" id="book" ref={ref} aria-labelledby="book-title">
      <BookForm
        idPrefix="book"
        titleId="book-title"
        closeButton
        doneAction={
          <button type="button" className="btn btn--accent" data-book-close>
            Back to the site
          </button>
        }
      />
    </dialog>
  );
}
