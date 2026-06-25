# Flanovax Design System

**Flanovax** is a digital studio (*estudio digital*) that designs and builds websites and creative digital solutions — *"hacemos páginas web y diseños creativos con soluciones digitales."* This design system gives agents everything needed to produce on-brand interfaces, marketing pages, and assets for Flanovax, in production or as throwaway mocks.

> **Provenance & caveat:** No brand assets, codebase, or Figma were provided — this system was **created from scratch** from the one-line company description. The visual direction (cobalt + tangerine on warm ink/paper, Bricolage Grotesque / Hanken Grotesk / Space Mono) is a proposal. The logo *spark* mark is original and placeholder-grade. **Everything here is open to revision** — see the ask at the bottom.

The studio and most product copy operate in **Spanish** (Spain/LatAm neutral).

---

## Brand in one breath

Confident, warm, and unmistakably digital. We pair an electric **cobalt** with a high-energy **tangerine** accent over **warm ink-and-paper** neutrals — so the work feels crafted and human, never cold or corporate-tech. Big expressive headlines, generous whitespace, square-ish cards softened by one signature pill for actions.

---

## CONTENT FUNDAMENTALS

How Flanovax writes.

- **Language:** Spanish. Neutral, professional but warm. (English mirrors the same tone if needed.)
- **Voice:** First-person plural — **"nosotros"**. We address the client as **"tú"** (informal, close), never "usted." Example: *"Cuéntanos tu proyecto."*, *"Te respondemos en 48 horas."*
- **Tone:** Direct, optimistic, low-jargon. Short declarative sentences. Confidence without hype. We say what we do and the result, not buzzwords.
- **Headlines:** Punchy, often two-part with a rhythm or rhyme. Sentence case (capital first word only), period at the end for declaratives. Examples: *"Ideas que se ven. Webs que funcionan."* · *"Trabajo que habla por sí solo."* · *"Cuéntanos tu proyecto."*
- **Casing:** Sentence case everywhere for prose and headlines. **UPPERCASE** only for mono eyebrows/labels (with wide tracking) and Badges.
- **Numbers & proof:** We quantify outcomes (*"+38% conversión"*, *"MVP en 6 semanas"*, *"Premio Awwwards"*). Use real, specific metrics — never vague ("muchos clientes").
- **Eyebrows / metadata:** Set in mono, uppercase, tangerine. Short. *"QUÉ HACEMOS"*, *"PROYECTOS RECIENTES"*, *"ESTUDIO DIGITAL · EST. 2021"*.
- **CTAs:** Verb-first and brief. *"Empezar proyecto"*, *"Ver proyectos"*, *"Hablemos"*, *"Enviar propuesta"*. One primary CTA per view.
- **Emoji:** **Not used.** The energy comes from color, type, and motion — not emoji. Icons (Lucide) carry any glyph needs.
- **Vibe:** A boutique studio that ships. Crafted, fast, accountable. Friendly enough to text, sharp enough to trust with a launch.

---

## VISUAL FOUNDATIONS

- **Color.** Two brand hues over warm neutrals. **Cobalt** (`--brand` #2E33EC) is the hero — primary CTAs, links, key fills. **Tangerine** (`--accent` #EF4E0C) is the energy spark — eyebrows, one accent CTA per view, highlights; used sparingly (≈5–10% of a layout). Neutrals run **ink → paper**, all slightly warm (never blue-gray): page background is warm bone **Paper** `#F5F1E8`; deepest ink is `#100E0A`. Status colors (green/amber/red/blue) come in solid + subtle pairs. **Avoid** purple/blue gradients, neon, and cool grays.
- **Type.** Display = **Bricolage Grotesque** (700–800, tight `-0.03em` tracking) for expressive headlines. Body/UI = **Hanken Grotesk** (400–600, 1.5 line-height) — warm, highly legible. Mono = **Space Mono** for eyebrows, labels, code, metadata (uppercase, `0.14em` tracking). Headlines use `text-wrap: balance`; prose uses `pretty`.
- **Backgrounds.** Mostly flat warm paper. Signature texture is a **subtle dot grid** (radial-gradient dots, ~26px, faded with a mask) on hero sections — never heavy. Solid **cobalt / tangerine / ink** color blocks stand in for imagery on project cards. No photographic gradients, no glassmorphism overload.
- **Layout.** 1200px max content width, 32px gutters, 4px spacing grid, ~88px vertical section rhythm. Generous whitespace. Sticky translucent header (paper at 82% + 14px blur).
- **Corners & cards.** Cards use **lg (18px)** radius, 1px subtle warm border, soft `--shadow-sm`. Inputs/buttons use **md (12px)**; **actions are pills** (`--radius-pill`) — the one consistently round element. Large feature blocks use **xl (28px)**.
- **Shadows.** Warm-tinted (ink-based rgba), layered, never gray-blue: `sm → xl`. Brand surfaces get a tinted lift (`--shadow-brand`, `--shadow-accent`).
- **Borders.** Hairline `1px` warm borders for separation; `2px` for buttons and emphasis. Tabs use a 2.5px cobalt underline on the active item.
- **Motion.** Quick and purposeful. `--dur-fast 120ms` / `--dur-base 200ms`, eased with `--ease-out`. Toggles use a gentle spring (`--ease-spring`). Card hover = `translateY(-3px)` + shadow grow. No infinite/decorative loops.
- **Hover states.** Buttons darken one step (cobalt→cobalt-600); ghost/icon buttons fill with `--surface-inset`; cards lift. **Press states.** Buttons `scale(0.97)`, icon buttons `scale(0.92)` — a confident squeeze.
- **Focus.** Cobalt ring (`--ring`, 3px translucent cobalt-400) on inputs and keyboard focus.
- **Transparency / blur.** Reserved for the sticky nav (translucent paper + blur) and overlay badges on color cards (`rgba(255,255,255,0.18)`). Not used decoratively elsewhere.
- **Imagery (when added).** Should read **warm**, bright, slightly editorial. Until real photos exist, project cards use solid brand color blocks with white/paper text — a deliberate, ownable placeholder style.

---

## ICONOGRAPHY

- **System: [Lucide](https://lucide.dev)** — clean, consistent **stroke icons** (2px stroke), loaded from CDN (`unpkg.com/lucide`). Chosen because the stroke weight and rounded joins sit naturally beside Hanken Grotesk and the geometric spark mark.
- **Usage:** In React/JSX, render `<i data-lucide="name">` (via the `Icon` helper in `ui_kits/website/Shared.jsx`) then call `lucide.createIcons()`. Default `stroke-width: 2`. Common glyphs: `arrow-right`, `arrow-up-right`, `search`, `mail`, `phone`, `map-pin`, `check`, `send`, `sparkles`, `layout-template`, `shopping-bag`, `trending-up`.
- **Sizing:** 16px inline with text, 18–24px for buttons/list rows, 28–32px for feature tiles.
- **Color:** Inherit `currentColor`. On tinted tiles, cobalt or tangerine on a `*-50` background.
- **No emoji.** No custom icon font. The only bespoke vector is the **brand spark mark** (`assets/mark.svg`), which is a logo element, not an icon.
- **Caveat / substitution:** Lucide is a *chosen* set, not inherited from an existing brand — swap it if you prefer Phosphor/Heroicons/etc.

---

## INDEX — what's in this folder

**Root**
- `styles.css` — global entry point (import this one file). `@import`s everything below.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills-compatible front-matter wrapper.

**`tokens/`** — CSS custom properties
- `colors.css` — cobalt & tangerine ramps, warm neutrals, status, semantic aliases.
- `typography.css` — font families (Google Fonts import), scale, weights, line-heights, tracking.
- `spacing.css` — 4px grid, layout widths.
- `effects.css` — radii, warm shadows, motion, focus ring.
- `base.css` — light element helpers (`.fx-page`, `.fx-display`, `.fx-overline`).

**`assets/`** — `mark.svg` (spark, full color), `mark-paper.svg`, `mark-ink.svg` (single-color), `app-tile.svg` (favicon/app icon).

**`components/core/`** — React primitives (namespace `window.FlanovaxDesignSystem_f21bfd`)
- `Button`, `IconButton`, `Input`, `Checkbox`, `Switch`, `Badge`, `Tag`, `Card`, `Avatar`, `Tabs`
- Each has `.jsx` + `.d.ts` + `.prompt.md`; cards: `buttons.card.html`, `forms.card.html`, `display.card.html`.

**`guidelines/`** — foundation specimen cards (Design System tab): brand/cobalt/tangerine/neutral/status colors, display/body/mono/scale type, spacing/radii/shadows, logo lockups & mark.

**`ui_kits/website/`** — Flanovax marketing site recreation
- `index.html` (interactive: Inicio · Proyectos · Servicios · Contacto), `Nav`, `Footer`, `HomeView`, `WorkView`, `ServicesView`, `ContactView`, `Shared` (Icon/Spark/Wordmark/Eyebrow helpers).

---

## Quick start for agents

1. Link `styles.css`; use semantic tokens (`--brand`, `--text-body`, `--surface-card`) over raw scales.
2. Headlines in Bricolage Grotesque, body in Hanken Grotesk, eyebrows/labels in Space Mono.
3. Compose UIs from the `core` primitives — don't re-implement them.
4. One cobalt primary CTA per view; tangerine for a single accent moment.
5. Spanish copy, "nosotros"/"tú", sentence case, quantified proof, no emoji.
