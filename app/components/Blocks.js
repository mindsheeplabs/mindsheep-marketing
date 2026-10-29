import StoryHead from "./StoryHead";
import Bit from "./Bit";
import Ticks from "./Ticks";
import Faq from "./Faq";
import StoryEnd from "./StoryEnd";
import RichText from "./RichText";

/**
 * Renders a content/pages/<slug>.json page body from its blocks, using the
 * same components the hand-built pages use. Block types: hero, section,
 * faq, cta, image. The head (hero) goes in the story head; the rest go in
 * story__body; a cta closes the page on paper. Server component.
 */
export default function Blocks({ blocks = [] }) {
  const hero = blocks.find((b) => b.type === "hero");
  const cta = blocks.find((b) => b.type === "cta");
  const body = blocks.filter((b) => b !== hero && b !== cta);

  return (
    <>
      <article className="story">
        <div className="plate">
          {hero ? <StoryHead kicker={hero.kicker} title={hero.title} lead={hero.lead} /> : null}
          <div className="story__body">
            {body.map((b, i) => {
              if (b.type === "section")
                return (
                  <Bit key={i} title={b.title} id={b.id} variant={b.variant} tag={b.tag}>
                    {(b.paragraphs || []).map((p, j) => (
                      <p key={j}>
                        <RichText text={p} />
                      </p>
                    ))}
                    {b.ticks?.length ? <Ticks items={b.ticks} /> : null}
                  </Bit>
                );
              if (b.type === "faq")
                return (
                  <Bit key={i} title={b.title || "Questions people ask"}>
                    <Faq items={b.items} />
                  </Bit>
                );
              if (b.type === "image")
                return (
                  <figure key={i} className="bit">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={b.src} alt={b.alt} width={b.width} height={b.height} loading="lazy" style={{ maxWidth: "100%", height: "auto" }} />
                  </figure>
                );
              return null;
            })}
          </div>
        </div>
      </article>
      {cta ? (
        <StoryEnd lead={cta.lead} cta={cta.button}>
          {cta.body ? <p>{cta.body}</p> : null}
        </StoryEnd>
      ) : null}
    </>
  );
}
