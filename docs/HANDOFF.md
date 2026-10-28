# Handoff: Above All Gutters website

## Overview
One-page site for a seamless gutter company based on Quadra Island. The goal is calls and estimate requests. The palette is charcoal #22272C and logo blue #2AA6E6. Headings use Barlow Semi Condensed 800, body text uses Barlow.

## About the design files
These are **design references built in HTML**, not production code. Rebuild them in a real stack. If there's no existing codebase, use **Astro or Next.js (static export) + Tailwind**, deployed on Vercel.
- `*.dc.html`: the source prototype. All copy and data arrays are in the script at the bottom.
- `preview.html`: a clickable preview. Unzip the folder first, because some images load from the asset folder next to it.
- The asset folder holds the logo and photos.
- `support.js`: prototype runtime only. **Do not ship it.**

## Fidelity
**High fidelity.** Colours, type, spacing, copy and interactions are final. Exact values are inline in the prototype. Copy comes from the client's current site. **Don't add services, reviews, prices or claims.**

## Shared conventions
- **Easing:** `cubic-bezier(.16,.84,.3,1)` throughout.
- **Hero load animation:** text rises in, staggered about 100ms between elements; the hero image eases from a slight zoom.
- **Scroll reveal:** `[data-reveal]` elements fade up 28–36px as they enter the viewport, staggered about 80ms between siblings.
- **Reduced motion:** respect `prefers-reduced-motion`.
- **Shape:** square corners. Max width 1440px. Side padding clamp(18px, 4vw, 48px).
- **Mobile (below 1000px):** nav hides, and a sticky bottom bar (Call + Quote) appears. Pad the footer so the bar doesn't cover it.
- **Footer:** includes "Powered by Backpack Digital Media" (https://backpackdigitalmedia.com).

## To finish at build time
- Connect the form to email (e.g. Formspree or Resend).
- Add a page title and description, Open Graph image, favicon, and LocalBusiness JSON-LD.
- Convert images to WebP or AVIF and lazy-load them below the fold.

## Sections
1. **Hero:** "Seamless gutters, built for island weather." A subtle animated rain layer sits over the hero. Keep it light, and turn it off when reduced motion is on.
2. **What we do:** their services.
3. **DIY kits band:** "DIY kits now available."
4. **Weather band:** "Leaves, needles, rain and snow…"
5. **Service areas:** "Based on Quadra Island." with all the areas.
6. **Estimate form.**

## Tokens
- **Charcoal:** #22272C / #1A1E22 / #3A424A
- **Blue:** #2AA6E6 / #1B8FD0; light #7CCBF2
- **Light background:** #F3F5F6
- **Lines:** #DCE1E5 / #CDD4DA
- **Muted text:** #4E5862 / #9BA6B0

## Contact
778-348-8553

## Confirm with client
- **Photos:** there are none. The site works on type and colour alone, but job photos would help a lot.
- **Email address:** none is listed yet.
