/**
 * The end of a story page, on paper: a lead line, a short body, one CTA.
 * Place after the story, before Others and Close. Server component.
 *
 * Props
 *  - lead: one line, set in display type
 *  - children: optional <p> body
 *  - cta: button label, or null
 *
 * <StoryEnd lead="Tell us what you have. We will tell you what it would take.">
 *   <p>A free 30 minute look at your site, then a plain-words plan.</p>
 * </StoryEnd>
 */
export default function StoryEnd({ lead, children, cta = "Book your free AI marketing assessment" }) {
  return (
    <section className="story__end paper">
      <div className="plate">
        {lead ? <p className="lead">{lead}</p> : null}
        {children}
        {cta ? (
          <a className="btn btn--accent" href="/contact" data-book>
            {cta}
          </a>
        ) : null}
      </div>
    </section>
  );
}
