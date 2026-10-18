# Photo prompts — Mindsheep Marketing site

Paste these into ChatGPT (with image generation) or any DALL-E / Midjourney tool.
Target output: 1024×1280 portrait (persona cards) and 1024×1024 square (team cards).

Save finished images into `public/people/` using the filenames shown, then update
the page components to swap the placeholder divs for `<Image>` tags pointing at those paths.

---

## 1. Persona photos — homepage "Humans helping humans with AI" section
`app/page.js` → `PERSONAS` array

### `owner-office.jpg` (1024×1280 portrait)
> Candid, documentary-style portrait of an Australian business owner in his
> 40s–50s sitting at a modest office desk. He's in a plain button-down shirt,
> looking slightly off-camera with a relaxed, thoughtful expression — not posed,
> not smiling for the camera. Natural window light from the left, warm colour
> tone. Shallow depth of field, soft blurred background showing a workshop or
> small office. No corporate stock-photo polish — feels like a real small
> business owner, not a model. 4:5 portrait aspect ratio.

### `owner-coffee.jpg` (1024×1280 portrait)
> Candid portrait of an Australian woman in her 30s–40s standing in a small
> business reception area, holding a coffee mug. Casual professional dress
> (sweater or simple top). Warm, approachable expression — a half-smile mid
> conversation, not posed. Natural light, soft background with hints of a
> workspace. Documentary photography feel, slightly imperfect — real
> small-business owner, not a stock-model shoot. 4:5 portrait.

### `owner-workshop.jpg` (1024×1280 portrait)
> Candid portrait of an older Australian tradesman (60s), weathered hands,
> standing in a workshop or garage environment. Work shirt, maybe a tape measure
> on belt. Looking directly but softly at the camera with a trusting, slightly
> curious expression. Natural overhead light, warm earth tones in the
> environment (timber, tools out of focus behind him). Documentary style, no
> stock-photo gloss. 4:5 portrait.

---

## 2. Team photos — about page
`app/about/page.js` → `team` array

Shoot style across all four: consistent lighting and background. Soft, slightly
blurred warm background (studio or office setting). Natural expression,
half-smile, looking at or just past the camera. 1:1 square aspect ratio.

### `team-david.jpg` (1024×1024 square)
> Portrait of David — Australian man in his 40s, founder of a small
> technology/marketing agency. Smart-casual shirt (open collar), approachable
> and confident expression. Soft warm studio lighting, blurred neutral
> background. 1:1 square.

### `team-theresa.jpg` (1024×1024 square)
> Portrait of Theresa — Filipina woman in her 30s, works as a Google Ads
> specialist. Professional-casual outfit, warm friendly smile, looking at camera
> with intelligent, engaged expression. Soft warm lighting, blurred neutral
> background. 1:1 square. Same lighting setup as the other three team
> portraits.

### `team-rio.jpg` (1024×1024 square)
> Portrait of Rio — Filipino man in his late 20s / early 30s, web developer.
> Casual tech-worker vibe (plain tee or simple polo), warm half-smile, relaxed
> and smart expression. Soft warm lighting, blurred neutral background. 1:1
> square. Same lighting setup as the other three team portraits.

### `team-rod.jpg` (1024×1024 square)
> Portrait of Rod — Filipino man in his 30s, AI engineer / full-stack developer.
> Casual button-down or hoodie-and-tee combo. Thoughtful, slightly curious
> expression, looking just past camera. Soft warm lighting, blurred neutral
> background. 1:1 square. Same lighting setup as the other three team
> portraits.

---

## Once images are in `/public/people/`

Swap each placeholder like this:

```jsx
// before (persona card)
<div className="persona-photo" data-photo="owner-office">
  <span className="persona-photo-label">Photo placeholder</span>
</div>

// after
<div className="persona-photo">
  <Image
    src="/people/owner-office.jpg"
    alt=""
    width={800}
    height={1000}
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  />
</div>
```

Say the word and I'll do the swap once the images exist.
