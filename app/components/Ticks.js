/**
 * The checklist. Green ticks that tick themselves on load (CSS only, staggered
 * by --i). Under prefers-reduced-motion, and with no JavaScript, they are
 * simply ticked. Server component.
 *
 * Props
 *  - items: string[] (7 words max each on the hero)
 *  - className: default "hero__ticks"
 *  - ariaLabel: optional label for the list
 *
 * <Ticks items={["More leads from the same ad spend.", "Every enquiry answered in minutes."]} />
 */
export function Tick() {
  return (
    <span className="tick" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <rect className="tick__box" x="1.5" y="1.5" width="21" height="21" rx="6" />
        <path className="tick__mark" pathLength="1" d="M6.5,12.5 L10.5,16.5 L17.5,8" />
      </svg>
    </span>
  );
}

export default function Ticks({ items = [], className = "hero__ticks", ariaLabel }) {
  return (
    <ul className={className} aria-label={ariaLabel}>
      {items.map((item, i) => (
        <li key={i} style={{ "--i": i }}>
          <Tick />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
