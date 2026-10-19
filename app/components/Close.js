import Image from "next/image";
import Link from "next/link";

/**
 * The close on pale green paper. Smallest type on the site: a lead line,
 * one green button, the lines, the logo mark, a row of links, a small
 * print line. Place it last in <main> on every page. Server component.
 *
 * Props (all optional; the defaults are the house copy)
 *  - lead: the lead line
 *  - cta: button label, or null for no button
 *  - lines: array of strings or nodes, one <p> each
 *  - links: [{ href, label }]
 *  - id: section id, default "about"
 *
 * <Close />
 */
export const DEFAULT_LINES = [
  "Perth based. We work with businesses across Australia.",
  <>
    For pure software builds, see{" "}
    <a className="u" href="https://mindsheeplabs.com" rel="noopener">
      Mindsheep Labs
    </a>
    .
  </>,
];

export const DEFAULT_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Close({
  lead = "Mindsheep Marketing Australia. We use AI across everything we do, so the same budget buys you more. You do not need to know how it works. You see it in the numbers.",
  cta = "Book your free AI marketing assessment",
  lines = DEFAULT_LINES,
  links = DEFAULT_LINKS,
  id = "about",
}) {
  return (
    <section className={`close paper`} id={id}>
      <div className="plate">
        <div className="close__in">
          <p className="lead">{lead}</p>
          {cta ? (
            <p>
              <a className="btn btn--accent" href="/contact" data-book>
                {cta}
              </a>
            </p>
          ) : null}
          {lines.map((line, i) => (
            <p className={i === 0 ? "rule" : undefined} key={i}>
              {line}
            </p>
          ))}
          <Link href="/" className="close__brand" aria-label="Mindsheep Marketing Australia home">
            <Image className="mark mark--dark" src="/mindsheep-mark.svg" width={30} height={30} alt="" unoptimized />
            <span className="brand__text"><span className="brand__name">Mindsheep</span><span className="brand__word">Marketing Australia</span></span>
          </Link>
          <nav className="close__nav" aria-label="Site">
            {links.map((l) => (
              <Link href={l.href} key={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>
          <small>
            Part of the Mindsheep group. &copy; {new Date().getFullYear()} Mindsheep Marketing
            Australia.
          </small>
        </div>
      </div>
    </section>
  );
}
