"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Reveal on entry, as on mindsheeplabs.com (scrollcraft's flow reveal).
 * Mounted once in app/layout.js. Renders nothing.
 *
 * - [data-reveal]: fades up once when it enters the screen.
 * - [data-reveal][data-stagger="90"]: its children fade up in turn, 90 ms apart.
 * - every tick list (.hero__ticks): its ticks tick once it is on screen, not on load.
 *
 * Everything is visible without JavaScript: the hidden start state only
 * applies under html.js, which the inline script in layout.js sets.
 * With reduced motion it all shows at once.
 */
const SELECTOR = "[data-reveal], .hero__ticks";

export default function Reveal() {
  const pathname = usePathname();
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(SELECTOR)).filter((el) => !el.classList.contains("is-in"));
    const show = (el) => {
      el.classList.add("is-in");
      const stagger = parseFloat(el.getAttribute("data-stagger"));
      if (!Number.isNaN(stagger)) {
        Array.from(el.children).forEach((kid, i) => {
          kid.style.transitionDelay = `${i * stagger}ms`;
          kid.classList.add("is-in");
        });
      }
    };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      els.forEach(show);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          show(e.target);
          io.unobserve(e.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.01 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
  return null;
}
