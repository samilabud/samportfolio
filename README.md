# Sam Portfolio

Personal portfolio site for **Samil Abud** — Full-Stack Web Developer. A single-page site showcasing SaaS products, mobile apps, and web projects.

**Live site:** [samilabud.com](https://samilabud.com)

## Features

- One-page layout with sticky navigation (About, Skills, Projects, Contact)
- Scroll-reveal animations and tilt effects on project screenshots
- Skills & technologies section for quick scanning
- SEO: meta tags, Open Graph, Twitter Cards, and JSON-LD structured data
- Accessible markup: skip link, landmarks, ARIA labels, reduced-motion support
- Fully responsive (Bootstrap grid + custom SCSS)
- Built and optimized with [Parcel](https://parceljs.org/)

## Tech Stack

| Layer | Tools |
|-------|-------|
| Markup | HTML5 |
| Styles | SCSS, Bootstrap 5 |
| Scripts | Vanilla JS (ES modules) |
| Animations | ScrollReveal, Vanilla Tilt |
| Bundler | Parcel 2 |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ (LTS recommended)
- npm

### Install

```bash
git clone https://github.com/samilabud/samportfolio.git
cd samportfolio
npm install
```

### Run locally

Start the Parcel dev server with hot reload:

```bash
npm start
```

Open the URL shown in the terminal (usually [http://localhost:1234](http://localhost:1234)).

### Production build

```bash
npm run build
```

Output is written to `dist/`. Preview the production build locally:

```bash
npx serve dist
```

## Project Structure

```
src/
├── index.html          # Main page
├── index.js            # App entry (nav, scroll reveal, tilt)
├── styles.scss         # SCSS entry point
├── assets/             # Images, resume PDF, favicon
├── data/               # ScrollReveal configuration
├── scripts/            # nav.js, scrollReveal.js, tiltAnimation.js
└── sass/               # Partials (layout, sections, components)
```

## Deployment

The site is deployed to Netlify. A typical setup:

- **Build command:** `npm run build`
- **Publish directory:** `dist`

For GitHub Pages, use:

```bash
npm run gh-pages-build
```

Then deploy the contents of `dist/`.

> If `gh-pages-build` fails with `Could not find entry: ...`, your `package.json`
> is on an older version of this script that omitted the entry files — update
> it to `parcel build src/index.html src/google85fd8c9ec2bbd804.html --public-url .`
> (matching `build` and `start`, plus `--public-url .`).

## Updating Content

| What to change | Where |
|----------------|-------|
| Hero, about, projects, contact | `src/index.html` |
| Resume PDF | Replace `src/assets/Samil_Abud_Resume_2026.pdf` and update links in `index.html` |
| Skills tags | `#skills` section in `index.html` |
| Colors & typography | `src/sass/abstracts/_variables.scss` |
| Section layout & styling | `src/sass/sections/` |
| Scroll animations | `src/data/scrollRevealConfig.js` |

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Dev server with hot reload |
| `npm run build` | Production build to `dist/` |
| `npm run gh-pages-build` | Build with relative public URL for GitHub Pages |

## Troubleshooting

- **`npm start` or a build exits with `zsh: segmentation fault`** — this is
  Parcel's native worker crashing, almost always from a stale/corrupted local
  cache rather than a code issue. Clear it and retry:

  ```bash
  rm -rf .parcel-cache dist
  npm start
  ```

  If it still crashes, also remove `node_modules` and reinstall
  (`rm -rf node_modules && npm install`), and confirm your Node version is a
  supported LTS (see Prerequisites) — a much newer major Node version than
  Parcel 2 was built against can also trigger native-module crashes.

- **`gh-pages-build` fails with `Could not find entry: ...`** — see the note
  in [Deployment](#deployment); the script needs explicit entry files.

## Credits

Originally based on [simplefolio](https://github.com/cobidev/simplefolio) by Jacobo Martínez (Zero To Mastery).

## License

MIT — see [LICENSE.md](LICENSE.md).
