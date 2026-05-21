# AGENTS.md

## Cursor Cloud specific instructions

This is a Next.js 12 blog example with Builder.io CMS integration, Tailwind CSS, and MDX content support.

### Quick reference

| Action       | Command                                                              |
| ------------ | -------------------------------------------------------------------- |
| Install deps | `npm install`                                                        |
| Dev server   | `npm run dev` (runs on port 3000)                                    |
| Lint         | `npm run lint`                                                       |
| Build        | `next build && node ./scripts/generate-sitemap` (or `npm run build`) |

### Non-obvious notes

- **No test suite**: This project has no automated test framework or test files. Validation is done via linting (`npm run lint`) and manual testing of the dev server.
- **Builder.io CMS dependency**: Individual blog post pages (`/blog/[slug]`) render content via Builder.io's external CMS API. Without published content in a Builder.io space, these pages load with only header/footer. The homepage, tags page, and post listings work independently using local MDX files in `data/blog/`.
- **Node version**: The project works with Node.js v22. There is no `.nvmrc` or engines field restricting versions.
- **Husky pre-commit hooks**: Husky is installed during `npm install` (via `prepare` script). The pre-commit hook runs `lint-staged` which applies ESLint + Prettier to staged files.
- **No `.env` required for basic dev**: The Builder.io API key is hardcoded in `pages/blog/[...slug].js`. Newsletter, comments, and analytics integrations require environment variables (see `.env.example`) but the app runs fine without them.
- **Build uses Preact**: Production builds swap React for Preact in `next.config.js`. This does not affect the dev server.
