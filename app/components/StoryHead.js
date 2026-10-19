/**
 * The head of a story page (a service page, a case study, about).
 * A green kicker, the H1, an optional lead. Server component.
 *
 * Props
 *  - kicker: e.g. "AI-generated websites"
 *  - title: the H1, 9 words max
 *  - lead: 30 words max (optional)
 *
 * <StoryHead kicker="AI-generated websites" title="A website built from what you already have" lead="Your photos go in. Old images get upscaled." />
 */
export default function StoryHead({ kicker, title, lead }) {
  return (
    <header className="story__head">
      {kicker ? <span className="story__kicker">{kicker}</span> : null}
      <h1 className="sc-display">{title}</h1>
      {lead ? <p className="story__lead">{lead}</p> : null}
    </header>
  );
}
