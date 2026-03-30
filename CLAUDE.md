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
- [Google Fonts](https://fonts.googleapis.com) — Playfair Display (headings)

## Images

All images live in `imgs/`. New project screenshots follow the pattern `projectname1.png`, `projectname2.png`, etc. and are referenced directly in the gallery HTML inside each `.project-slide`.
