/**
 * Plain text with two inline marks, and nothing else: **bold** and
 * [label](url). Builds React nodes, never HTML, so content can not inject
 * markup. Links are re-checked here (https, mailto or a /path) as well as
 * in the validator. Server component.
 */
const SAFE = /^(https:\/\/\S+|mailto:\S+|\/\S*)$/;

export default function RichText({ text = "" }) {
  const out = [];
  const re = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1] !== undefined) out.push(<b key={i++}>{m[1]}</b>);
    else if (SAFE.test(m[3])) {
      const external = m[3].startsWith("https://");
      out.push(
        <a key={i++} className="u" href={m[3]} {...(external ? { rel: "noopener" } : {})}>
          {m[2]}
        </a>
      );
    } else out.push(m[0]);
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return <>{out}</>;
}
