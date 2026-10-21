import Image from "next/image";

/**
 * "People like you": two or three illustrative owners, each with a photo,
 * what their week looks like today, what we would do, and what changes.
 * They are not real clients and the block says so. Place inside
 * <div className="story__body"> like a Bit. Server component.
 *
 * Props
 *  - title: the H2, default "What this looks like for someone like you"
 *  - note: the honesty line under the H2
 *  - people: [{ name, business, src, alt, today, we, after }]
 *  - id: optional anchor
 *
 * <People people={[{ name: "Anna", business: "Physio clinic, Perth", src: "/people/personas/anna.webp",
 *   today: "...", we: "...", after: "..." }]} />
 */
export default function People({
  title = "What this looks like for someone like you",
  note,
  people = [],
  id = "people",
}) {
  const names = people.map((p) => p.name);
  const list =
    names.length > 1 ? `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}` : names[0];
  const honesty =
    note ??
    `${list} are not real clients. They stand in for the owners we talk to every week, so you can see yourself in the story. The results are what we would expect, not a promise.`;

  return (
    <section className="bit people" id={id}>
      <span className="tag">People like you</span>
      <h2>{title}</h2>
      <p className="people__note">{honesty}</p>
      <ul className="people__list">
        {people.map((p) => (
          <li className="person" key={p.name}>
            <Image
              className="person__face"
              src={p.src}
              alt={p.alt ?? `${p.name}, who runs a ${p.business.toLowerCase()}.`}
              width={1024}
              height={1024}
              sizes="104px"
            />
            <div className="person__body">
              <h3 className="person__name">
                {p.name} <span className="person__biz">{p.business}</span>
              </h3>
              <p>
                <b>Today.</b> {p.today}
              </p>
              <p>
                <b>What we would do.</b> {p.we}
              </p>
              <p>
                <b>What changes.</b> {p.after}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
