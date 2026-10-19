import Image from "next/image";

/**
 * The green CTA card: the last cell of a .cases grid, spanning both columns
 * on desktop. A laughing face in a white-ringed circle and a white button.
 * The whole card is one link to /contact with data-book, so it opens the
 * booking dialog. Server component.
 *
 * Props
 *  - kicker: default "Your business"
 *  - title: default "Do you want to be a success story with AI too?"
 *  - body: one or two plain sentences
 *  - button: default "Book your free assessment"
 *  - face: { src, alt }  square photo, default /people/owner-cta.webp
 *
 * <CtaCard body="A free 30 minute look at your ads, your site and your content." />
 */
export default function CtaCard({
  kicker = "Your business",
  title = "Do you want to be a success story with AI too?",
  body,
  button = "Book your free assessment",
  face = { src: "/people/owner-cta.webp", alt: "A business owner laughing, phone in hand." },
}) {
  return (
    <li className="case case--cta">
      <a href="/contact" data-book>
        <div className="case__body">
          <span className="case__kicker">{kicker}</span>
          <h3 className="case__t">{title}</h3>
          {body ? <p className="case__p">{body}</p> : null}
        </div>
        <div className="case__side">
          <Image
            className="case__you"
            src={face.src}
            alt={face.alt || ""}
            width={480}
            height={480}
            sizes="(min-width: 900px) 224px, 176px"
          />
          <span className="btn btn--accent">{button}</span>
        </div>
      </a>
    </li>
  );
}
