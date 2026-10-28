# Martley International

React and Vite transport website for Martley International.

## Development

Install dependencies, then start Vite:

```sh
npm install
npm run dev
```

Build and preview the production site:

```sh
npm run build
npm run preview
```

The site uses React Router for its seven routes. Production hosting must return `index.html` for deep links such as `/services` and `/contact`.

## Responsive checks

With the production preview running on `http://127.0.0.1:4173`, run:

```sh
npm run qa:mobile
```

This checks every route from 320 through 1440 CSS pixels in local Edge Chromium, measures document overflow, and exercises navigation and the enquiry form. It does not replace testing on a physical iPhone or Safari.

## Content and assets

- Site copy is adapted from `Portlaoise Logistics Website Content Draft.docx` supplied for this project. Its draft placeholders for fleet counts, testimonials and environmental figures have been omitted.
- Freight and team photography was supplied within that draft document.
- The hero uses a 39-second excerpt of the supplied V2 footage, including the new truck close-ups and wash sequence. Desktop gets a silent 1080p H.264 encode (`hero-drone-hq.mp4`, about 22 MB); narrower screens get a silent 720p, 30 fps encode (`hero-drone.mp4`, about 12 MB). Only the matching source is requested. A WebP poster from the opening shot appears first. Playback waits until the hero enters view and is skipped for reduced motion or data saving.
- Fonts are bundled locally through Fontsource.
- The contact form composes a `mailto:` message in the visitor's email app; it does not submit to a backend.
