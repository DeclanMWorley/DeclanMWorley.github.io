# declanmworley.github.io

Personal portfolio and lab write-up blog. Built with [Astro](https://astro.build) — fully static, deployed via GitHub Pages.

## Quick start

```sh
npm install
npm run dev        # local dev server at http://localhost:4321
npm run build      # static build to ./dist
npm run preview    # preview the production build
```

## Editing your content

Everything personal lives in **`src/consts.ts`**:

- `SITE` — name, tagline, email, GitHub/LinkedIn URLs, avatar path
- `SKILLS` — skill cards with levels (out of 99) and tooltip details
- `CERTS` — certification list with `completed` / `in-progress` / `planned` status
- `EXPERIENCE` — the work-history timeline
- `PROJECTS` — the project cards (GitHub labs)
- `EDUCATION` — the degree card

## Publishing a write-up (from Obsidian)

1. Write your post in Obsidian as normal markdown.
2. Copy the `.md` file into `src/content/writeups/`.
3. Add frontmatter at the top:

```yaml
---
title: "Building a DMVPN Phase 3 Lab"
description: "One-line summary shown in the write-ups list."
pubDate: 2026-07-10
category: "Lab Walkthrough"        # optional, defaults to "Lab"
difficulty: "Advanced"             # Beginner | Intermediate | Advanced | Expert
tags: ["DMVPN", "Cisco"]           # optional
draft: false                       # true = hidden from the site
---
```

4. Commit and push — the site rebuilds and deploys automatically.

**Images:** put them next to the `.md` file (e.g. `src/content/writeups/my-lab/`) and reference them relatively, or drop them in `public/` and use absolute paths. Note that Obsidian **wikilinks** (`[[like this]]` / `![[image.png]]`) don't render — use standard markdown links/images (in Obsidian: Settings → Files & Links → turn off "Use [[Wikilinks]]" to author in standard format).

## Deploying to GitHub Pages

1. Create a GitHub repo and push this project to it.
2. In `astro.config.mjs`, set `site` (and `base` if it's a project repo — see comments in the file).
3. On GitHub: **Settings → Pages → Source → GitHub Actions**.
4. Push to `main` — `.github/workflows/deploy.yml` builds and deploys automatically.

Moving to self-hosting later: `npm run build` and serve the `dist/` folder with any web server (nginx, Caddy, a container — it's just static files).

## Structure

```
src/
├── consts.ts              ← your info, skills, certs (edit me!)
├── content/writeups/      ← markdown write-ups (drop Obsidian files here)
├── content.config.ts      ← frontmatter schema
├── layouts/Base.astro     ← shell: nav, footer, fonts
├── components/            ← skill icons etc.
├── pages/index.astro      ← homepage
├── pages/writeups/        ← write-ups index + article pages
└── styles/global.css      ← site theme (colors, panels, buttons)
```
