# AGENTS.md

## Cursor Cloud specific instructions

### Overview

This is a **Builder.io Blog Example** — a Next.js 12 blog with Tailwind CSS, integrated with Builder.io as a headless CMS. Forked from [tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog).

### Node.js version

This project requires **Node.js 18** (Next.js 12.1.4 is incompatible with Node 22+). The nvm default is set to 18. Always run `source ~/.nvm/nvm.sh && nvm use 18` before executing commands if the shell doesn't have nvm loaded.

### Key commands

| Action       | Command                           |
| ------------ | --------------------------------- |
| Install deps | `npm install`                     |
| Dev server   | `npm run dev` (runs on port 3000) |
| Lint         | `npm run lint`                    |
| Build        | `npm run build`                   |
| Serve prod   | `npm run serve`                   |

### Architecture notes

- **Homepage** (`pages/index.js`): Lists blog posts from local MDX files in `data/blog/`.
- **Blog post detail** (`pages/blog/[...slug].js`): Fetches content from **Builder.io CMS** using a hardcoded public API key (`ccda6c7abf4c4b8195aa67d47de420dd`). Individual post pages will appear empty unless Builder.io has matching content for that slug.
- **Tags/About/Projects**: Rendered from local data and MDX files.
- No database or Docker required.
- Pre-commit hook runs `lint-staged` (ESLint + Prettier) via Husky.

### Gotchas

- The `sharp` package (image optimization) may produce warnings on install but is not blocking for dev mode.
- Blog post detail pages (`/blog/*`) require Builder.io CMS content to render. The homepage listing and tags/about pages work without any external service.
- The project uses Preact as a React alias in production client builds only (not in dev mode).
