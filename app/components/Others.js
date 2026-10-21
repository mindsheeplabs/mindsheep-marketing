import Link from "next/link";

/**
 * The row of other pages at the foot of a story page. Server component.
 *
 * Props
 *  - title: default "The other services"
 *  - links: [{ href, label }]; default is the three services
 *  - current: href to leave out (the page you are on)
 *
 * <Others current="/services/ai-websites" />
 */
export const SERVICES = [
  { href: "/services/smarter-google-ads", label: "Smarter AI Google Ads" },
  { href: "/services/ai-search-visibility", label: "AI search and visibility" },
  { href: "/services/ai-design-websites", label: "AI design and websites" },
];

export default function Others({ title = "The other services", links = SERVICES, current }) {
  const list = current ? links.filter((l) => l.href !== current) : links;
  return (
    <section className="others">
      <div className="plate">
        <h2>{title}</h2>
        <ul>
          {list.map((l) => (
            <li key={l.href}>
              <Link href={l.href}>{l.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
