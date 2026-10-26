# Martleys Transport

React and Vite transport website for Martleys Transport / Portlaoise Logistics.

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

The site uses React Router for its eight routes. Production hosting must return `index.html` for deep links such as `/services` and `/contact`.

## Responsive checks

With the production preview running on `http://127.0.0.1:4173`, run:

```sh
npm run qa:mobile
```

This checks every route from 320 through 1440 CSS pixels in local Edge Chromium, measures document overflow, and exercises navigation and the enquiry form. It does not replace testing on a physical iPhone or Safari.

## Content and assets

- Site copy is adapted from `Portlaoise Logistics Website Content Draft.docx` supplied for this project. Its draft placeholders for fleet counts, testimonials and environmental figures have been omitted.
- Freight and team photography was supplied within that draft document.
- `public/assets/hero-drone.mp4` is a 28-second, 720p, muted H.264 encode of the supplied `Martleys International_Video 2026 HP.mp4` drone footage. The 160 MB source is represented by a roughly 5 MB web video and a WebP poster. Playback waits until the hero enters view and is skipped for reduced motion or data saving.
- Fonts are bundled locally through Fontsource.
- The contact form composes a `mailto:` message in the visitor's email app; it does not submit to a backend.
