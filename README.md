# Ahmad Elwan: portfolio

Next.js (App Router) + TypeScript portfolio. No CSS framework, almost no client-side JavaScript (small inline scripts only), fonts self-hosted from `public/fonts`.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run check    # type-check, lint and production build
npm run build && npm start
```

## The site

One design: Swiss type and grid in the Coffee & Olive palette (warm cream, dark coffee brown and olive green), softened with rounded cards, pill buttons, a floating nav and soft shadows (the "Soft modern layer" block in `app/site.css`). Sections: hero (availability line, rotating text-ring graphic, CTAs), tech marquee, Services ("What I can do for you"), Selected work (abstract visual cards, no client material), Experience, About, Skills, Posts (appears automatically once `data/posts.ts` has posts) and an olive contact block with the form.

- Components: `components/site/` (`SitePage.tsx`, `HeroArt.tsx`, `covers.tsx` for the project illustrations). Styles: `app/site.css`. Layout/metadata: `app/layout.tsx`.
- The site stays `noindex` (and `robots.txt` disallows everything) until the environment variable `SITE_URL` is set to the real domain. Local runs and Vercel preview deployments are always `noindex`. See "Deploy" below.
- Optional portrait: put a photo in `/public` and set `photo` in `data/profile.ts`; it replaces the AE mark in the hero graphic.

## LinkedIn posts and brand kit

- Add each post to **`data/posts.ts`** (title, date, summary, LinkedIn URL, image). Put the image in `public/posts/`. The latest 3 then appear in the Posts section. Never name the US publishing client in a post.
- **`brand/`** is the LinkedIn kit in the current look: `brand/out/` has two banners (light and dark), the profile picture (photo version and AE monogram version), and four sample post images. Re-render or make new ones with `python3 brand/render.py <template> --data '{...}' --out <file>` (see the header of `brand/render.py`). Templates: `banner`, `banner-dark`, `profile`, `post-statement`, `post-list`, `post-question`, `post-stat`. Every template takes `"theme": "olive|red|blue|green|amber|violet|teal"` (default `olive`); post templates also take `"bg": "paper|ink|accent"`.
- Your photo for the profile picture is `brand/assets/ahmad.jpg` (400px; a higher-resolution original will look sharper).

## Edit your content

Everything lives in **`data/profile.ts`**. Change text, projects, skills and links there; no component edits needed.

Before you deploy:

1. **Contact links:** fill `contact.email`, `contact.linkedin`, `contact.github` (and `contact.cv` after dropping a PDF into `/public`). Empty values are hidden automatically.
2. **Domain:** set `siteUrl` to your real domain. It feeds the canonical URL, sitemap, robots.txt and social cards.
3. **Add numbers** to the project cards if you have them (traffic, performance, leads). None were invented.

## Contact form (sends to your email)

The form in the contact section posts to a form service, which emails you every submission. Setup takes about two minutes:

1. Go to <https://web3forms.com>, enter `ahmadmelwan02@gmail.com`, and they email you a free **access key**.
2. Paste it into `form.web3formsKey` in `data/profile.ts` (already done for ahmadmelwan02@gmail.com), or set the environment variable `WEB3FORMS_KEY` on your host.
3. Redeploy. Done. (In your Web3Forms dashboard you can also restrict the key to your domain.)

Prefer Formspree? Create a form at <https://formspree.io> and set its URL as `FORM_ENDPOINT` (or `form.formEndpoint`) instead.

Until one of these is set, the form falls back to opening the visitor's email app with the message prefilled. The access key is meant to be public (it can only send to your email), and a hidden honeypot field catches most bots.

## Confidentiality

The US publishing client must never be named anywhere in this repo (text, metadata, alt text, filenames, commits). The site refers to them as "a major US media publisher".

## What's included

- Semantic HTML, skip link, keyboard focus styles, reduced-motion support
- SEO: metadata, Open Graph / Twitter cards (`app/opengraph-image.png`, made from `brand/templates/share-card.html`), JSON-LD `Person`, `sitemap.xml`, `robots.txt`, web manifest, favicon and Apple touch icon
- Security headers (CSP, HSTS, frame, referrer and permissions policies) set in `next.config.mjs`
- Custom 404 and error pages, self-hosted fonts with size-matched fallbacks (no layout jump)
- Measured with Lighthouse on a mobile profile: Performance 100, Accessibility 100, Best Practices 100, SEO 100

## Deploy

1. Push the project to a GitHub repository, then import it in Vercel (framework: Next.js, no settings to change). Any host that runs Next.js 16 on Node 20.9+ works.
2. Add the environment variables from `.env.example` in the host's settings:
   - `SITE_URL`: your domain, for example `https://ahmadelwan.dev` (this also switches indexing on; leave it unset on previews).
   - `WEB3FORMS_KEY`: optional; the key is already set in `data/profile.ts`.
3. Add the domain in the host's settings and follow its DNS instructions. HTTPS is automatic on Vercel.
4. After the first deploy: open the homepage, send a test message through the form, and check the link preview by pasting the URL into LinkedIn's Post Inspector (<https://www.linkedin.com/post-inspector/>). Then submit `/sitemap.xml` in Google Search Console.
5. Optional: put a PDF CV at `public/ahmad-elwan-cv.pdf` and set `contact.cv` to `"/ahmad-elwan-cv.pdf"` in `data/profile.ts` (a "Download CV" button appears), and set `photo` to show your portrait in the hero.

Checks before every release: `npm run check`.

## The AE logo and the olive branch
- **Logo:** an "AE" monogram (Fraunces letters drawn as outlines) on a rounded coffee-brown tile with a small olive dot. SVG and PNG files are in `brand/assets/` and `brand/out/` (`ae-logo*`, plus the square `ae-logo-app-icon`). On the site it is the `Logo` component (`components/site/Logo.tsx`; the favicon is `app/icon.svg`), and in the LinkedIn kit it is the `[data-mark]` tile created by `brand/brand.js` (it flips to a cream tile on dark post backgrounds).
- **Olive branch:** a stem with leaves and hanging olives, used as the decorative motif in the post images (top-right corner), the banners, and the website (hero art and contact section). Source files are `olive-branch*.svg` in `brand/assets/`. On the site it is `components/site/Branch.tsx`; in the kit it is injected by `brand/brand.js` into `.deco.b` and `[data-branch]`. Colours come from the CSS variables `--br-s` (stem), `--br-l`/`--br-l2` (leaves), `--br-o` (olives) and `--br-h` (highlights).

## Typography
- **Fraunces** (variable, with italic) for headlines and key text on the site and in every LinkedIn image (the accent words are set in Fraunces italic).
- **Bricolage Grotesque** for the big headline and contact links in the contact section only (`.s-contact` rules at the end of `app/site.css`).
- **Inter** for body text and **JetBrains Mono** for small labels.
The font variables are `--display` and `--display-contact` in `app/site.css` and `--display` in `brand/brand.css`.

## Colours
The palette lives in the `:root` block at the top of `app/site.css` (`--paper`, `--ink`, `--accent`, `--acc-text` for accent-coloured text on paper, `--on` for text on top of the accent, `--acc-rgb` for glows) and in `brand/brand.css` for the LinkedIn kit. To change the whole identity, change those values.
