import styles from "./page.module.css";

/**
 * Before and now: what a Google search looked like, and what it looks like
 * with an AI Overview on top. Pure HTML and CSS, no screenshot, so it reads
 * on every screen and never goes out of date. Server component.
 */
const QUERY = "plumber near me";

const OLD_RESULTS = [
  ["Smith Plumbing Perth", "Licensed plumbers. Hot water, blocked drains, gas. Call now."],
  ["Northside Plumbing and Gas", "Family owned since 1998. Same day service across Perth."],
  ["Reliable Plumbers WA", "24 hour emergency plumbing. Fixed price quotes."],
];

export default function SearchShift() {
  return (
    <figure className={styles.shift}>
      <div className={styles.panel}>
        <figcaption className={styles.label}>Before</figcaption>
        <div className={styles.screen} aria-label={`A Google search for ${QUERY}, as it used to look`}>
          <div className={styles.bar}>{QUERY}</div>
          <ol className={styles.results}>
            {OLD_RESULTS.map(([t, d]) => (
              <li key={t}>
                <span className={styles.link}>{t}</span>
                <span className={styles.desc}>{d}</span>
              </li>
            ))}
          </ol>
        </div>
        <p className={styles.sub}>Ten links. Yours could be one of them.</p>
      </div>

      <div className={styles.panel}>
        <figcaption className={styles.label}>Now</figcaption>
        <div className={styles.screen} aria-label={`A Google search for ${QUERY}, as it looks now`}>
          <div className={styles.bar}>{QUERY}</div>
          <div className={styles.overview}>
            <span className={styles.overviewTag}>
              <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12 2l1.8 5.6L19.5 9l-5.7 1.4L12 16l-1.8-5.6L4.5 9l5.7-1.4L12 2zm7 11l.9 2.6 2.6.9-2.6.9L19 20l-.9-2.6-2.6-.9 2.6-.9L19 13zM5 14l.7 2 2 .7-2 .7L5 19.5l-.7-2-2-.7 2-.7L5 14z"
                />
              </svg>
              AI Overview
            </span>
            <p>
              For a plumber in Perth, people often choose <b>Northside Plumbing and Gas</b>,{" "}
              <b>Smith Plumbing Perth</b> or <b>Reliable Plumbers WA</b>. All three offer same day
              service and fixed price quotes.
            </p>
          </div>
          <ol className={`${styles.results} ${styles.resultsFaded}`}>
            {OLD_RESULTS.slice(0, 2).map(([t, d]) => (
              <li key={t}>
                <span className={styles.link}>{t}</span>
                <span className={styles.desc}>{d}</span>
              </li>
            ))}
          </ol>
        </div>
        <p className={styles.sub}>One answer, naming two or three businesses. Most people stop there.</p>
      </div>
    </figure>
  );
}
