# Above All Gutters — website

The one-page website for Above All Gutters (seamless gutters, Quadra Island & Campbell River).
Built with [Astro](https://astro.build) as a plain static site: HTML, one CSS file and a small script. No database, no server.

## Run it on your computer

You need [Node.js](https://nodejs.org) (version 20 or newer, LTS recommended).

```bash
npm install      # first time only: downloads the tools
npm run dev      # starts a local preview at http://localhost:4321 (updates as you edit)
npm run build    # makes the finished site in the dist/ folder
npm run preview  # previews the finished build
```

## Where things live

| What | File |
| --- | --- |
| All page text (services, areas, hours, form options) | `src/data/content.ts` |
| Phone number, business name, page title & description, **form endpoint** | `src/data/site.ts` |
| Page layout (sections, in order) | `src/pages/index.astro` |
| Colours, fonts, spacing, mobile layout | `src/styles/global.css` (colours are at the top) |
| Logo | `src/assets/logo.png` (converted to WebP automatically) |
| Favicon & social share image | `public/favicon.png`, `public/apple-touch-icon.png`, `public/og-image.png` |
| Original design handoff notes | `docs/HANDOFF.md` |

## Connect the estimate form

1. Create a free form at [formspree.io](https://formspree.io) using the client's email address.
2. Copy its endpoint (looks like `https://formspree.io/f/abcdwxyz`).
3. Paste it into `FORM_ENDPOINT` in `src/data/site.ts`, then rebuild/redeploy.

Until this is set, the form just shows the thank-you message and sends nothing (demo mode).
The form sends: `name`, `phone`, `email`, `area`, `services` (the "I need" buttons picked) and `message`.

## Deploy on Vercel

1. Push this repo to GitHub.
2. In [Vercel](https://vercel.com), click **Add New → Project** and import the repo.
3. Framework preset: **Astro** (detected automatically). No other settings needed. Click **Deploy**.

Every push to `main` will redeploy the site.

Once the real domain is connected, set `site` in `astro.config.mjs` (e.g. `site: 'https://www.example.com'`) so the social share image and Google data use full URLs.

## Confirm with client

(From the design handoff.)

- **Photos:** there are none. The site works on type and colour alone, but job photos would help a lot.
- **Email address:** none is listed yet.

Also still to do:

- Formspree endpoint (see above).
- Real domain name (see above).
