import Link from "next/link";

/**
 * The row of other pages at the foot of a story page. Server component.
 *
 * Props
 *  - title: default "The other services"
 *  - links: [{ href, label }]; default is the five services
 *  - current: href to leave out (the page you are on)
 *
 * <Others current="/services/ai-websites" />
 */
export const SERVICES = [
  { href: "/services/ai-google-ads", label: "AI-powered Google Ads" },
  { href: "/services/ai-seo", label: "AI SEO" },
  { href: "/services/ai-social-content", label: "AI social and content" },
  { href: "/services/ai-websites", label: "AI-generated websites" },
  { href: "/services/ai-chat-and-voice", label: "AI chat and voice agents" },
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
