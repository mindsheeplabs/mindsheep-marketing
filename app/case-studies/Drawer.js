"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

/**
 * Expandable drawer built on native <details>/<summary>, so it opens and closes
 * with JavaScript off. Client state: the summary label swap, and opening the
 * drawer when the page is reached at its own hash (/case-studies#willship),
 * so a "Read the full story" link lands on an open story, not a second click.
 * Pass defaultOpen for the lead story, so one full story reads without
 * JavaScript. Kept in its own file so the page itself stays a server component.
 */
function PlusIcon() {
  return (
    <span className={styles.ic} aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <path d="M12 6v12M6 12h12" />
      </svg>
    </span>
  );
}

export default function Drawer({
  children,
  id,
  defaultOpen = false,
  lead = false,
  openLabel,
  closeLabel = "Close",
}) {
  const [open, setOpen] = useState(defaultOpen);
  const ref = useRef(null);

  // Arrived at this story's own hash: open the drawer in the DOM. The
  // browser fires toggle, and onToggle below brings the label in line.
  useEffect(() => {
    if (id && ref.current && window.location.hash === "#" + id) ref.current.open = true;
  }, [id]);

  return (
    <details
      ref={ref}
      className={`${styles.more}${lead ? ` ${styles.leadMore}` : ""}`}
      open={open}
      onToggle={(e) => setOpen(e.currentTarget.open)}
    >
      <summary className={`${styles.toggle}${lead ? ` ${styles.leadToggle}` : ""}`}>
        <span>{open ? closeLabel : openLabel}</span>
        <PlusIcon />
      </summary>
      <div className={`${styles.body}${lead ? ` ${styles.leadBody}` : ""}`}>{children}</div>
    </details>
  );
}
