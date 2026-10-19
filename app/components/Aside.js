/**
 * The sticky aside on a story page: one box with a title, a short body and
 * one CTA. Extra boxes can follow as children. Place inside
 * <div className="story__body"> after the bits. Server component.
 *
 * Props
 *  - title: e.g. "Want a new website?"
 *  - body: one or two short sentences
 *  - cta: button label, default "Book your free AI marketing assessment"
 *  - children: optional extra <div className="box"> elements
 *
 * <Aside title="Want a new website?" body="A free 30 minute look at what you have and what it would take." />
 */
export default function Aside({ title, body, cta = "Book your free AI marketing assessment", children }) {
  return (
    <aside className="aside">
      <div className="box">
        {title ? <h2>{title}</h2> : null}
        {body ? <p>{body}</p> : null}
        <a className="btn btn--accent" href="/contact" data-book>
          {cta}
        </a>
      </div>
      {children}
    </aside>
  );
}
