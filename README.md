# Martley International

React and Vite transport website for Martley International / Portlaoise Logistics.

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
- `public/assets/hero.mp4` is a compressed excerpt of the supplied `Martleys Website Home Page Video.mp4`. It shows the coach business and is a temporary hero until a freight-specific video is available.
- Fonts are bundled locally through Fontsource.
- The contact form composes a `mailto:` message in the visitor's email app; it does not submit to a backend.
