import Image from "next/image";
import Link from "next/link";

/**
 * A case study card: one link with a small face, an uppercase green kicker,
 * a title, a body, a bold result line and "Read the full story".
 * Render inside <ol className="cases">. Server component.
 *
 * Props
 *  - href: the full story, e.g. "/case-studies#aldott-homes"
 *  - face: { src, alt, width?, height? }  a real client photo, square
 *  - kicker: e.g. "Case study · Aldott Homes"
 *  - title: e.g. "From zero to 385 leads a month"
 *  - body: 35 words max
 *  - result: 14 words max, set bold
 *  - go: link text, default "Read the full story"
 *
 * <CaseCard
 *   href="/case-studies#aldott-homes"
 *   face={{ src: "/clients/denes.jpg", alt: "Denes, Director of Aldott Homes" }}
 *   kicker="Case study · Aldott Homes"
 *   title="From zero to 385 leads a month"
 *   body="Google Ads built from scratch, with an AI landing page for every campaign."
 *   result="385 enquiries a month within six months, still growing."
 * />
 */
export default function CaseCard({ href, face, kicker, title, body, result, go = "Read the full story" }) {
  return (
    <li className="case">
      <Link href={href}>
        {face ? (
          <Image
            className="case__face"
            src={face.src}
            alt={face.alt || ""}
            width={face.width || 150}
            height={face.height || 150}
            sizes="104px"
          />
        ) : null}
        <div className="case__body">
          <span className="case__kicker">{kicker}</span>
          <h3 className="case__t">{title}</h3>
          <p className="case__p">{body}</p>
          {result ? <p className="case__r">{result}</p> : null}
          <span className="case__go">{go}</span>
        </div>
      </Link>
    </li>
  );
}
