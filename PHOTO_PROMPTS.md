# Photos — Mindsheep Marketing site

All generated images come from the ChatGPT plan via `chatgpt-image` (Codex → gpt-image-2).
No OpenAI API, no per-image cost. Never use an API-key route for these.

## Persona photos — DONE

Homepage "Humans helping humans with AI" section. Live in `public/people/`:

| File | Who |
|---|---|
| `owner-office.webp` | Owner at his desk, workshop behind |
| `owner-coffee.webp` | Owner in reception with a coffee |
| `owner-workshop.webp` | Older tradie in his workshop |

Prompts, size and style live in `people-jobs.json` (repo root). To regenerate one:
delete its `.webp` and run, from the repo root:

```
chatgpt-image batch people-jobs.json
```

It only fills the gaps. Add `--force` to redo all three.

## Team photos — need REAL headshots

`app/about/page.js` → `team` array. These are real, named people, so they get real
photos, not generated ones.

- **David** — using the existing founder photo (`photo` field set).
- **Theresa, Rio, Rod** — placeholders until a headshot arrives. Drop each into
  `public/people/team-<name>.jpg` (square, 800×800+), then set
  `photo: "/people/team-<name>.jpg"` on their entry. The card handles the rest.
