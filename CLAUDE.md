# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static personal portfolio website for Cecília Zica, deployed via GitHub Pages. It was built for UFSC's Web Programming course (INE5646) and serves as a professional portfolio.

**No build step, no package manager, no framework.** Everything runs directly in the browser.

## How to Preview

Open `index.html` directly in a browser, or use any static file server:

```bash
# Python
python -m http.server 8000

# Node.js (if npx available)
npx serve .
```

## Architecture

The entire site lives in two files:
- `index.html` — all HTML structure **and** all JavaScript (inline `<script>` at the bottom)
- `style.css` — all styling, including responsive breakpoints and dark/light theme variables

### Page Layout

CSS Grid on `body` with four areas: `header`, `aside` (sidebar), `main`, `footer`.

The `aside` is a fixed sidebar with name/photo/role. On mobile it collapses above `main`.

### Sections (in order)
`#section-home` → `#section-about` → `#section-education` → `#section-experience` → `#section-timeline` → `#section-skills` → `#section-data` → `#section-projects` → `#section-awards` → `#section-contact`

### JavaScript Features (all inline in index.html)
- **Theme toggle** (`#theme-toggle`): switches between dark/light via `body.dark-mode` class; reads/writes `localStorage`
- **Language toggle** (`#language-toggle`): switches between EN/PT-BR by swapping `data-en`/`data-pt` attributes on elements
- **Interactive charts** (`#portfolio-chart`, `#timeline-chart`): powered by Chart.js (CDN), re-rendered on select changes; `portfolioChart` instance is tracked globally to call `.destroy()` before re-render
- **Projects carousel** (`#projects-track`): shows one `.project-slide.active` at a time
- **Gallery per project** (`.project-gallery`): inner image carousel with dot indicators
- **Custom cursor**: `#cursor-dot` + `#cursor-ring` follow mouse via `mousemove`
- **Hamburger nav** (`#nav-toggle`): shown on mobile, toggles `nav.open`

### CSS Theme System

CSS variables in `:root` define the dark theme palette. Light mode overrides them under `body.light-mode`. Key variables: `--primary-color`, `--card-bg`, `--text-color`, `--accent-color`.

### External Dependencies (CDN only)
- [Chart.js](https://cdn.jsdelivr.net/npm/chart.js) — data charts
- [Bootstrap Icons](https://cdn.jsdelivr.net/npm/bootstrap-icons) — icon font
- [Google Fonts](https://fonts.googleapis.com) — **Playfair Display** (display headings), **Hanken Grotesk** (body), **IBM Plex Mono** (technical/data accents: eyebrows, KPI numbers, section labels)

## Images

All images live in `imgs/`. New project screenshots follow the pattern `projectname1.png`, `projectname2.png`, etc. and are referenced directly in the gallery HTML inside each `.project-slide`.

## Frontend Aesthetics (design guidance)

Apply this guidance to every visual change in this repo. The design identity is a **burgundy + gold editorial/data aesthetic** — keep it cohesive; do not drift toward generic defaults.

<frontend_aesthetics>
You tend to converge toward generic, "on distribution" outputs. In frontend design, this creates what users call
the "AI slop" aesthetic. Avoid this: make creative, distinctive frontends that surprise and delight. Focus on:

Typography: Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial and Inter; opt
instead for distinctive choices that elevate the frontend's aesthetics.

Color & Theme: Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp
accents outperform timid, evenly-distributed palettes. Draw from IDE themes and cultural aesthetics for
inspiration.

Motion: Use animations for effects and micro-interactions. Prioritize CSS-only solutions for HTML. Use Motion
library for React when available. Focus on high-impact moments: one well-orchestrated page load with staggered
reveals (animation-delay) creates more delight than scattered micro-interactions.

Backgrounds: Create atmosphere and depth rather than defaulting to solid colors. Layer CSS gradients, use geometric
patterns, or add contextual effects that match the overall aesthetic.

Avoid generic AI-generated aesthetics:
- Overused font families (Inter, Roboto, Arial, system fonts)
- Clichéd color schemes (particularly purple gradients on white backgrounds)
- Predictable layouts and component patterns
- Cookie-cutter design that lacks context-specific character

Interpret creatively and make unexpected choices that feel genuinely designed for the context. Vary between light
and dark themes, different fonts, different aesthetics. You still tend to converge on common choices (Space
Grotesk, for example) across generations. Avoid this: it is critical that you think outside the box!
</frontend_aesthetics>
