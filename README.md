# Ahmad Elwan

Personal portfolio: [ahmadelwan.github.io](https://ahmadelwan.github.io)

A static Next.js site (App Router, TypeScript) with no CSS framework and self-hosted fonts. It is exported to plain files and deployed to GitHub Pages on every push to `main`.

## Getting started

```bash
npm install
npm run dev
```

Requires Node.js 20.9 or newer. The dev server runs at http://localhost:3000.

## Scripts

| Command                | Purpose                                       |
| ---------------------- | --------------------------------------------- |
| `npm run dev`          | Start the development server                  |
| `npm run build`        | Export the static site to `out/`              |
| `npm run typecheck`    | Type-check with TypeScript                    |
| `npm run lint`         | Lint with ESLint                              |
| `npm run format`       | Format the code with Prettier                 |
| `npm run format:check` | Verify formatting                             |
| `npm run check`        | Type-check, lint, verify formatting and build |

## Project structure

```
app/            routes, layout, metadata, icons, global styles
components/     page sections, SVG artwork and client components
data/           all site content (profile.ts) and LinkedIn posts (posts.ts)
lib/            environment-driven configuration
public/         self-hosted fonts and post images
brand/          LinkedIn banners, profile pictures and post templates
```

All text, links, projects and skills live in `data/profile.ts`. Posts added to `data/posts.ts` appear automatically in a Posts section.

## Configuration

Environment variables (see `.env.example`):

| Variable        | Purpose                                                              |
| --------------- | -------------------------------------------------------------------- |
| `SITE_URL`      | Public address of the site. Setting it also enables search indexing. |
| `WEB3FORMS_KEY` | Public access key for the contact form (overrides `data/profile.ts`) |
| `FORM_ENDPOINT` | Alternative form endpoint, such as a Formspree URL                   |

Without `SITE_URL` the site is served with `noindex`. Without a form key or endpoint, the contact form opens the visitor's email client with the message prefilled.

## Deployment

`.github/workflows/deploy.yml` builds the site with `SITE_URL=https://ahmadelwan.github.io` and publishes `out/` to GitHub Pages. Update that value if the site moves to a custom domain.

## Brand kit

`brand/` renders the LinkedIn assets from HTML templates with Playwright:

```bash
python3 brand/render.py <template> --data '<json>' --out <file.png>
```

Templates: `banner`, `banner-dark`, `profile`, `post-statement`, `post-list`, `post-question`, `post-stat`, `share-card`. Data keys: `theme`, `bg` (`paper`, `ink`, `accent`), `size` (`l`, `m`, `s`), `kicker`, `title`, `sub`, `big`, `items`, `footer`, `pill`, `photo`. Wrap a word in `*asterisks*` to render it as an accent.
