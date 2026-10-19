# Mindsheep Marketing Australia: design spec

The site looks and feels like the live mindsheeplabs.com home page: same palette, type, components and page rhythm, with its own content. Source of truth for the look is `labs-site/public/site.css` and `home.html`; this repo ports them into `app/globals.css` with the Labs class names kept. Fidelity to the target matters more than originality.

Stack: Next.js 16 App Router, JavaScript, `app/` directory, global CSS in `app/globals.css`, optional CSS modules per page. No new npm dependencies. Mobile first; correct at 390px and 1280px; WCAG AA. Content is visible without JavaScript: never set `opacity: 0` or transforms on content by default.

## Tokens (app/globals.css :root)

| Token | Value |
| --- | --- |
| `--sc-canvas` / `--sc-surface` | `#FFFFFF` / `#F4F7F2` |
| `--sc-ink` / `--sc-ink-soft` | `#1F2A24` / `#5C6862` |
| `--sc-accent` / `--sc-accent-ink` | `#1E7F53` / `#FFFFFF` |
| `--sc-hairline` / `--sc-hairline-strong` | ink at 14% / 24% via color-mix |
| `.paper` | canvas `#E7F0E7`, surface `#FFFFFF` (the inverted close) |
| `--sc-font-display` / `--sc-font-text` | Outfit 600 / Geist, set by next/font in `app/layout.js` |
| Type ramp | `--sc-t-xs` `sm` `base` `lg` `xl` `2xl` `3xl` `4xl` (fluid clamps) |
| Tracking | `--sc-track-tight` `-0.035em`, `snug` `-0.02em`, `normal` `-0.005em`, `wide` `0.08em` |
| Leading | `--sc-leading-none` 0.94, `tight` 1.06, `body` 1.6 |
| Space | `--sc-1` 0.25rem ... `--sc-11` 12rem (4px base); `--sc-section` clamp(4.5rem, 9vw, 11rem); `--sc-gutter` clamp(1.25rem, 5vw, 5.5rem) |
| Width | `--sc-maxw` 82rem, `--sc-measure` 62ch |
| Radius | `--sc-r-sm` 6px, `md` 12px, `lg` 20px, `pill` 999px |
| Shadow | `--sc-e1` `e2` `e3` (soft, tinted green), `--sc-edge` (1px top light) |
| Motion | `--sc-ease-out`, `--sc-ease-in-out`, `--sc-d-fast` 160ms, `base` 240ms, `slow` 420ms |
| Other | `--topbar-h` 4.25rem, `--sc-z-chrome` 60, `--g` sky warmth |

## Classes, one line each

Base and layout
- `.plate` the page column: max-width 82rem, gutter padding. Every section's inner wrapper.
- `.measure` caps a block at 62ch.
- `.paper` the pale green inverted ground (close, story ends).
- `.sc-display` Outfit 600, tight tracking; sizes `--md` (section h2), `--lg`, `--xl`.
- `.sc-lede`, `.sc-body`, `.sc-label` lede paragraph, soft body paragraph, small uppercase label.
- `a.u` the one link style: ink with a green underline. Use it for every inline link.
- `.btn` pill button; `.btn--accent` green with white text; `.btn--ghost` outlined; `.btn--sm` for the topbar.
- `.sky` fixed drifting green and sand fields behind the canvas. Mounted once in layout.

Topbar
- `.topbar` sticky, light, blurred, one hairline below; `.topbar__in` the flex row.
- `.brand` the lockup link; `.mark` the logo at true ratio (height 30, width 154); `.mark--dark` inverts the white logo to ink; `.brand__word` the "Marketing Australia" wordmark (beside on desktop, under on phones).

Hero
- `.hero` full-height typographic poster; `.hero__grid` two columns from 900px.
- `.hero h1 .l1` the small first line (`--sc-t-2xl`); `.l2` the huge second line.
- `.hero__ticks` the checklist; `.tick`, `.tick__box`, `.tick__mark` the self-ticking green tick (CSS only, staggered by `--i`).
- `.hero__cta` the button and underlined link row. `.hero__sub` optional soft paragraph.
- `.hero__photo` the 4:5 frame on the right, desktop only; `.face .face--1|2|3` cross-fade on an 18 second loop.

Cards (services and case studies share one language)
- `.ways` a card section; `.ways__head` heading plus sub line.
- `.cases` the grid: one column, two from 900px, the last cell spanning both.
- `.case` a card; its `a` is the whole card. `.case__face` 6.5rem rounded square, `.case__kicker` uppercase green, `.case__t` title, `.case__p` body, `.case__r` bold result, `.case__go` the underlined go line.
- `.case--svc` the same anatomy without a face (services block).
- `.case--cta` the green card: `.case__side` holds `.case__you` (white-ringed circle face) and a white `.btn`.

Plan
- `.plan` the how-it-works section; `.plan__wrap`, `.plan__head` heading plus one soft line.
- `.chart` the list: one column, a 1fr 4rem 1fr spine from 900px, with a hairline spine and connectors drawn in CSS.
- `.step` a white framed step; `.step__n` the numbered green ring; `.step__body` the text; `.is-on` accent frame, added by Plan as a step scrolls into view.
- `.plan__cta` the button cell in the last row, right column.

Close
- `.close` the paper close; `.close__in` the small-type column; `.lead` the display lead; `.rule` the ink line; `.close__brand` and `.close__mark` the logo lockup; `.close__nav` the row of links; `small` the print line.

Story pages
- `.story` the page body; `.story__head`, `.story__kicker`, `h1`, `.story__lead`.
- `.story__body` 7fr 5fr from 900px: bits on the left, the sticky `.aside` on the right.
- `.bit` a section (h2 plus paragraphs); `.bit--real` tinted box with a green `.tag`; `.bit--scene` plain with a muted `.tag`; `blockquote` and `cite` for a client quote.
- `.aside` the sticky column; `.aside .box` a framed box with h2, p and one `.btn`.
- `.story__end` the paper end: `.lead`, a p, one `.btn`.
- `.others` the row of other pages; `.foot` a small print row.
- `.faq` native `details` list, four items max; `.faq__a` the answer.

Dialog
- `.book` the native dialog; `.book--inline` the same box as a plain card on /contact.
- `.book__form`, `.book__done`, `.book__close`, `.book__kicker`, `.book__title`, `.book__lead`, `.book__grid`, `.book__field` (`--wide`), `.book__actions`, `.book__note`, `.book__error`.

Compat, temporary: `.container`, `.section`, `.btn--primary`, `.eyebrow`, `.h1`, `.h2`, `.lede` keep unrebuilt pages readable. Do not use them in new work.

## Components (app/components)

Mounted once in `app/layout.js`, do not add to pages: `<Sky />` and `<BookDialog />`.

- `Topbar({ cta })` logo lockup plus one green button (href /contact, data-book). `<Topbar />`
- `Ticks({ items, className, ariaLabel })` self-ticking list; also exports `Tick`. `<Ticks items={["More leads from the same ad spend."]} />`
- `ServiceCard({ kicker, title, line, href, invite })` a `.case--svc` card, inside `<ol className="cases">`. `<ServiceCard kicker="AI SEO" title="Found on Google, and in the AI answers" line="People now ask ChatGPT who to call. We make sure you are in the answer." href="/services/ai-seo" invite="Want to be found? Click here." />`
- `CaseCard({ href, face: {src, alt}, kicker, title, body, result, go })` a `.case` card with a 6.5rem face. `<CaseCard href="/case-studies#highline-sheds" face={{ src: "/clients/steve.jpg", alt: "Steve, Owner of Highline Sheds." }} kicker="Case study · Highline Sheds" title="Twice the leads, a third less cost" body="..." result="2.09 times the leads at 30.5 percent lower cost, in three months." />`
- `CtaCard({ kicker, title, body, button, face })` the green card, last in a `.cases` grid; opens the dialog. `<CtaCard body="A free 30 minute look at your ads, your site and your content." />`
- `Plan({ heading, sub, steps: [{title, body, note}], cta: {label, note} | null, id })` the static spine with the observer. `<Plan steps={STEPS} sub="Five steps, from a first conversation to marketing that does more with the same money." />`
- `Close({ lead, cta, lines, links, id })` the paper close; defaults are the house copy, so `<Close />` is enough on most pages.
- `StoryHead({ kicker, title, lead })` `<StoryHead kicker="AI-generated websites" title="A website built from what you already have" lead="..." />`
- `Bit({ title, children, variant: "real"|"scene", tag, quote: {text, cite}, id })` `<Bit title="What you get"><p>Your photos go in. <b>No photo shoot to pay for.</b></p></Bit>`
- `Aside({ title, body, cta, children })` the sticky box with one CTA. `<Aside title="Want a new website?" body="A free 30 minute look at what you have." />`
- `StoryEnd({ lead, children, cta })` `<StoryEnd lead="Tell us what you have. We will tell you what it would take."><p>...</p></StoryEnd>`
- `Others({ title, links, current })` the row of the other services; exports `SERVICES`. `<Others current="/services/ai-websites" />`
- `BookForm({ idPrefix, titleId, closeButton, doneAction, kicker, title, lead, button, note })` the form; inline on /contact as `<div className="book book--inline"><BookForm idPrefix="contact" /></div>`. Posts JSON `{name, email, business, budget}` to `/api/contact`; budget values `under5k`, `5k-15k`, `15k-50k`, `50k+`.
- `BookDialog()` the native dialog, in layout only.
- `Faq({ items: [{q, a}], openFirst })` native details list, four items max.

Compat shims (thin, delete when nothing imports them): `NavBar` renders Topbar; `Footer` renders Close; `ContactSection` renders an inline BookForm; `TickList` renders Ticks; `Steps` renders Plan without a head; `SectionHead` renders `.ways__head`; `PartnerNote` and `ProofNumbers` render `.case--svc` cards. ServiceCard also accepts the old `children` and `linkLabel` props.

## Opening the dialog

Any element with `data-book` opens the booking dialog on click. Give it `href="/contact"` so it still works without JavaScript:

```jsx
<a className="btn btn--accent" href="/contact" data-book>Book your free AI marketing assessment</a>
```

Inside the dialog, `data-book-close` closes it. Escape and a backdrop click close it too.

## Story page skeleton (service pages, case studies, about)

```jsx
import Topbar from "../../components/Topbar";
import StoryHead from "../../components/StoryHead";
import Bit from "../../components/Bit";
import Aside from "../../components/Aside";
import StoryEnd from "../../components/StoryEnd";
import Others from "../../components/Others";
import Close from "../../components/Close";

export const metadata = { title: "AI-generated websites", description: "...", alternates: { canonical: "/services/ai-websites" } };

export default function Page() {
  return (
    <>
      <Topbar />
      <main>
        <article className="story">
          <div className="plate">
            <StoryHead kicker="AI-generated websites" title="A website built from what you already have" lead="..." />
            <div className="story__body">
              <Bit title="...">
                <p>...</p>
              </Bit>
              {/* at most five bits of 60 words each; one may be variant="real" with a quote */}
              <Aside title="Want a new website?" body="..." />
            </div>
          </div>
        </article>
        <StoryEnd lead="...">
          <p>...</p>
        </StoryEnd>
        <Others current="/services/ai-websites" />
        <Close />
      </main>
    </>
  );
}
```

Service page shape: a kicker, an H1 of 9 words max, a lead of 30 words max, then at most five short sections of 60 words each, a sticky aside with one CTA, and a story end. FAQ lists of four items max (`Faq`). Use `next/image` for every raster.

## The five services

| Name (use exactly) | URL |
| --- | --- |
| AI-powered Google Ads | /services/ai-google-ads |
| AI SEO | /services/ai-seo |
| AI social and content | /services/ai-social-content |
| AI-generated websites | /services/ai-websites |
| AI chat and voice agents | /services/ai-chat-and-voice |

The old routes /services/google-ads, /services/seo-ai-search, /services/social-content, /services/websites and /services/ai-automations are retired.

## Images

`next/image` for every raster. Hero faces: `/people/owner-office.webp`, `/people/owner-coffee.webp`, `/people/owner-workshop.webp` (1024 by 1280, 4:5). CTA face: `/people/owner-cta.webp` (1024 square). Case faces, the real clients: `/clients/denes.jpg` (Aldott Homes), `/clients/nick.png` (WillShip), `/clients/steve.jpg` (Highline Sheds), `/clients/michael.jpg` (WestCoast HiFi). Logos in `/clients/*.webp|svg|png`. Logo `/MINDSHEEP LOGO.svg` is 277 by 54: render at true ratio (height 30 means width 154) with `.mark--dark`, never 180 by 50, and set "Marketing Australia" in `.brand__word` beside it. Founder photo: `/WhatsApp Image 2025-09-22 at 10.31.29.jpeg` (1184 by 864).

## Copy register (the house rule)

Short, confident sentences. Say the benefit, then explain it. Plain words over jargon, so a busy owner reads it in one pass. Concrete over abstract: show the real job, the real saving. Reassuring, never hype. The "you would be surprised how good this is now" tone is welcome in one line, not everywhere. No em dashes or dashes as punctuation; use commas, colons and full stops. Australian spelling. No exclamation marks, no emoji. AI is named openly as what we use and why it gets the client more for the same money; always in terms of what they get. Do NOT write "human to human", "Humans helping humans", "authentic", or "AgencyMetrica". MarketMetrica is "our own system, built with Mindsheep Labs" and is described only in client language; one mention on the home close and one on the ads and SEO pages is plenty.

## Copy caps (hard)

Hero first line 8 words max, hero second line 5 words max, each tick 7 words max, each service card 25 words max plus its link, each case card body 35 words max and result line 14 words max, each how-it-works step body 30 words max. Service page: a kicker, an H1 of 9 words max, a lead of 30 words max, then at most five short sections of 60 words each, a sticky aside with one CTA, and a story end. FAQ lists of four items max. If existing copy is longer, cut it.

## Process

Do not commit, push, run a dev server or deploy. Only write the files you own. `npm run build` must pass. The contact API `app/api/contact/route.js` stays and keeps its contract.
