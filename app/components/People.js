import Image from "next/image";
import Link from "next/link";
import { NOT_REAL } from "../data/personas";

/**
 * "People like you": simple tiles, a face, a name, the business and one or
 * two sentences. Not real clients, and the block says so.
 *
 *  - <PeopleGrid people={[...]} field="home" cols={3} />  the tiles only;
 *    a tile with `href` is one link. Used on the home page.
 *  - <People people={[...]} />  the tiles wrapped as a story-page bit,
 *    placed at the top of a service page's story__body.
 *
 * people: [{ name, business, src, alt, line, home, service }]
 * field: which sentence to show, "line" (default) or "home"
 * Server components.
 */
export function PeopleGrid({ people = [], field = "line", cols = 1, linked = false }) {
  const cls = ["people__grid", cols > 1 ? `people__grid--${cols}` : ""].filter(Boolean).join(" ");
  return (
    <ul className={cls}>
      {people.map((p) => {
        const inner = (
          <>
            <Image
              className="person__face"
              src={p.src}
              alt={p.alt ?? `${p.name}, who runs a ${p.business.toLowerCase()}.`}
              width={1024}
              height={1024}
              sizes="88px"
            />
            <div className="person__body">
              <span className="person__who">
                <b>{p.name}</b> · {p.business}
              </span>
              <p className="person__line">{p[field] ?? p.line}</p>
              {linked ? <span className="person__go">See how</span> : null}
            </div>
          </>
        );
        return (
          <li className="person" key={p.name}>
            {linked && p.service ? (
              <Link href={p.service} className="person__link">
                {inner}
              </Link>
            ) : (
              <div className="person__link">{inner}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default function People({
  title = "People like you",
  note = NOT_REAL,
  people = [],
  id = "people",
}) {
  return (
    <section className="bit people" id={id}>
      <h2>{title}</h2>
      <p className="people__note">{note}</p>
      <PeopleGrid people={people} />
    </section>
  );
}
