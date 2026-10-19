/**
 * FAQ as native <details>/<summary>. Works without JavaScript.
 *
 * Props
 *  - items: [{ q: string, a: string | ReactNode }]
 *    If `a` is a string it is wrapped in a <p>. Pass nodes for multi-paragraph answers.
 *  - openFirst: boolean, default false. Opens the first item by default.
 *
 * <Faq items={[{ q: "Do I need to understand AI?", a: "No. We set it up and run it. You see the result." }]} />
 */
export default function Faq({ items = [], openFirst = false }) {
  return (
    <div className="faq">
      {items.map((item, i) => (
        <details key={i} open={openFirst && i === 0 ? true : undefined}>
          <summary>{item.q}</summary>
          <div className="faq__a">{typeof item.a === "string" ? <p>{item.a}</p> : item.a}</div>
        </details>
      ))}
    </div>
  );
}
