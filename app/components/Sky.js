"use client";
import { useEffect } from "react";

/**
 * The sky: soft fields of green and sand that drift slowly behind the page.
 * Mounted once in app/layout.js. Do not add it to pages.
 *
 * As on Labs, the sand field warms as you scroll: --g runs 0 at the top to 1
 * as the paper close arrives. Set on <html> from a passive, rAF-throttled
 * scroll listener. Skipped under prefers-reduced-motion, where globals.css
 * already rests --g at 1. Without JavaScript the :root default applies.
 */
export default function Sky() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const set = () => {
      raf = 0;
      const range = Math.max(1, document.body.scrollHeight - window.innerHeight * 2);
      const g = Math.min(1, window.scrollY / range).toFixed(3);
      document.documentElement.style.setProperty("--g", g);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(set);
    };
    set();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
      document.documentElement.style.removeProperty("--g");
    };
  }, []);

  return <div className="sky" aria-hidden="true" />;
}
