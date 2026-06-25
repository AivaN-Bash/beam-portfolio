# Beam — Portfolio

Personal portfolio built with Next.js 16 (App Router), React 19, and Tailwind CSS 4.

## Getting started

Requires Node.js 20.9+ (see `.nvmrc`).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the
production domain. This drives canonical URLs, the sitemap, robots.txt, and
Open Graph/Twitter card images. If unset, it falls back to a placeholder
domain — the build won't fail, but metadata will be wrong in production.

## Structure

- `app/data/portfolio.ts` — single source of truth for all content (projects, principles, experience, focus areas, tools).
- `app/globals.css` — design tokens (color, spacing, motion) and the shared component styles (ghost numerals, HUD frames, scroll-driven reveals).
- `app/components/` — shared UI (`Nav`, `SignalBars`).
- Each top-level route (`/`, `/about`, `/work`, `/work/[slug]`, `/experience`) is self-contained; most are server components with a co-located `*Client.tsx` for the interactive parts.

## Scripts

```bash
npm run dev     # local dev server
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Deployment

Built for Vercel (or any Next.js-compatible host). Set `NEXT_PUBLIC_SITE_URL`
in the hosting environment before deploying.
