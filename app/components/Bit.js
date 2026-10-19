/**
 * One section of a story page: an H2 and up to 60 words. Place inside
 * <div className="story__body">. Server component.
 *
 * Props
 *  - title: the H2
 *  - children: one or more <p>; <b> for the phrase that matters
 *  - variant: undefined | "real" | "scene"
 *      "real"  a tinted box with a green tag (a real job, a real number)
 *      "scene" a plain section with a muted tag
 *  - tag: the small uppercase label used by the variants, e.g. "A real job"
 *  - quote: { text, cite } optional, a client quote under the body
 *  - id: optional anchor
 *
 * <Bit title="What you get">
 *   <p>Your photos go in. <b>No photo shoot to pay for.</b></p>
 * </Bit>
 * <Bit variant="real" tag="A real job" title="Aldott Homes" quote={{ text: "We are now constantly growing.", cite: "Denes, Director" }}>
 *   <p>From zero to 385 leads a month in six months.</p>
 * </Bit>
 */
export default function Bit({ title, children, variant, tag, quote, id }) {
  const cls = ["bit", variant ? `bit--${variant}` : ""].filter(Boolean).join(" ");
  return (
    <section className={cls} id={id}>
      {tag ? <span className="tag">{tag}</span> : null}
      {title ? <h2>{title}</h2> : null}
      {children}
      {quote ? (
        <blockquote>
          {quote.text}
          {quote.cite ? <cite>{quote.cite}</cite> : null}
        </blockquote>
      ) : null}
    </section>
  );
}
