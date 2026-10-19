import Image from "next/image";
import Link from "next/link";

/**
 * Sticky light top bar. The same on every page: the brand lockup on the
 * left, one green button on the right. Server component.
 *
 * Props
 *  - cta: button label, default "Free AI marketing assessment"
 *  - ctaShort: the label under 480px, default "Free assessment", so the
 *    button stays a one-line pill beside the lockup on a phone
 *
 * The button links to /contact and carries data-book, so BookDialog opens
 * it in place when JavaScript is on, and it still works when it is off.
 *
 * <Topbar />
 */
export default function Topbar({ cta = "Free AI marketing assessment", ctaShort = "Free assessment" }) {
  return (
    <header className="topbar">
      <div className="plate topbar__in">
        <Link href="/" className="brand" aria-label="Mindsheep Marketing Australia home">
          <Image
            className="mark mark--dark"
            src="/MINDSHEEP%20LOGO.svg"
            width={154}
            height={30}
            alt="Mindsheep"
            priority
            unoptimized
          />
          <span className="brand__word">Marketing Australia</span>
        </Link>
        <a className="btn btn--accent btn--sm" href="/contact" data-book>
          <span className="cta-long">{cta}</span>
          <span className="cta-short">{ctaShort}</span>
        </a>
      </div>
    </header>
  );
}
