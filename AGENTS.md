# Agent notes

Standard Next.js 16 App Router project. No non-standard APIs or breaking
changes beyond what's documented at nextjs.org/docs for this version.

- Single source of truth for content: `app/data/portfolio.ts`.
- Design tokens (color, spacing, motion) live in `app/globals.css`.
- `NEXT_PUBLIC_SITE_URL` must be set in the deploy environment — see `.env.example`.
- Minimum Node.js version: 20.9 (see `.nvmrc` / `package.json#engines`).

