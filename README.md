# jek. — personal portfolio

Portfolio of **Muhammad Irfan Dzaky (Jek)** — full-stack web developer, Medan, Indonesia.

Built with Next.js (App Router), TypeScript, and Tailwind CSS v4 as a **single-page app**: one route, four sections (Home, Projects, About, Contact) switched client-side with View Transitions. Bilingual (English / Indonesian) with an instant language toggle.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy (Vercel)

Push to a Git repo and import into Vercel — zero config needed. Optionally set:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

so canonical URLs, the sitemap, and Open Graph images resolve against the production domain.

## Where things live

| Path | What |
| --- | --- |
| `src/lib/i18n.ts` | **All copy, in both languages** — edit text here |
| `src/lib/site.ts` | Name, email, social links |
| `src/lib/section-store.ts` | SPA section state (hash-synced: `/#projects` deep links work; old `/projects` URLs redirect) |
| `src/lib/lang-store.ts` | Language state, persisted to localStorage |
| `src/lib/view-transition.ts` | `startViewTransition` + `flushSync` wrapper used by theme, language, and section switches |
| `src/components/sections/` | Hero, Projects, About, Contact |
| `src/components/` | Header, bottom nav (mobile/tablet), toggles, scroll reveal |
| `src/fonts/` | Self-hosted Fontshare fonts via `next/font/local` |

## Design system

- Warm parchment / ink palette with a single rust accent; dark mode is warm brown-black, not neon.
- Type carries the identity: Clash Display (display), Satoshi (body, 17px base), Sentient italic (editorial accents), IBM Plex Mono (micro-labels).
- Hero fits a single screen on 1080p laptops, tablets, and phones; below `lg` it stacks photo-over-text and a bottom navigation bar replaces the header links.
- Theme, language, and section switches animate via the View Transitions API (with `flushSync` committing state inside the snapshot); everything falls back gracefully and respects `prefers-reduced-motion`.
