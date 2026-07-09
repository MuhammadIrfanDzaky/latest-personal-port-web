# jek. — personal portfolio

Portfolio of **Muhammad Irfan Dzaky (Jek)** — full-stack web developer, Medan, Indonesia.

Built with Next.js (App Router), TypeScript, and Tailwind CSS v4. Server Components by default; client JavaScript only where interaction earns it (theme toggle, active nav state, scroll reveals, local clock).

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
| `src/app/` | Routes: home, `/projects`, `/about`, `/contact`, plus OG image, sitemap, robots |
| `src/components/` | Header, footer, nav, theme toggle, scroll reveal |
| `src/lib/projects.ts` | **All project copy** — edit write-ups here |
| `src/lib/site.ts` | Name, email, social links |
| `src/fonts/` | Self-hosted Fontshare fonts (Clash Display, Satoshi, Sentient) via `next/font/local` |

## Design system

- Warm parchment / ink palette with a single rust accent; dark mode is warm brown-black, not neon.
- Type carries the identity: Clash Display (display), Satoshi (body), Sentient italic (editorial accents), IBM Plex Mono (micro-labels).
- Light paper-grain overlay, hairline rules, asymmetric 12-column layouts, left-aligned by default.
- `prefers-reduced-motion` respected; reveal animations only apply when scripting is enabled, so no-JS visitors see everything.
