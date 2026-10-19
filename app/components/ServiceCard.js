import Link from "next/link";

/**
 * A service card: the .case anatomy without a face. Render inside
 * <ol className="cases">. The whole card is one link.
 *
 * Props
 *  - kicker: the service name, e.g. "AI-generated websites"
 *  - title: the benefit, e.g. "A website built from what you already have"
 *  - line: one plain sentence of what it means for them
 *  - href: the service page, e.g. "/services/ai-websites"
 *  - invite: the link text, e.g. "Want a new website? Click here."
 *
 * Kicker, title and line together: 25 words max.
 *
 * <ServiceCard
 *   kicker="AI-generated websites"
 *   title="A website built from what you already have"
 *   line="Your photos go in. Old images get upscaled. No photo shoot needed."
 *   href="/services/ai-websites"
 *   invite="Want a new website? Click here."
 * />
 */
export default function ServiceCard({ kicker, title, line, href, invite = "Read how it works" }) {
  const body = line;
  const go = invite;
  return (
    <li className="case case--svc">
      <Link href={href}>
        <div className="case__body">
          {kicker ? <span className="case__kicker">{kicker}</span> : null}
          <h3 className="case__t">{title}</h3>
          {body ? <p className="case__p">{body}</p> : null}
          <span className="case__go">{go}</span>
        </div>
      </Link>
    </li>
  );
}
