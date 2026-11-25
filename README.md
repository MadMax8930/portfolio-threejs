# Max Surnin — Personal Portfolio

A responsive portfolio for Max Surnin, a Bangkok-based full-stack software engineer and independent AI builder. The site presents professional experience, selected projects, testimonials and contact details in a cinematic interface with interactive 3D scenes.

## Live website and deployment

- **Production:** [https://maxsurnin.com](https://maxsurnin.com)
- **Additional Vercel domain:** [https://maxsurnin.vercel.app](https://maxsurnin.vercel.app)
- **Hosting:** Vercel
- **Production branch:** `max`

Vercel creates Preview deployments for other Git branches. Pull requests can be reviewed at their Preview URL. Merging an approved pull request into `max` triggers a Production deployment, served on the production domains above.

## Technology stack

- React 18 and React DOM
- Vite 4 for development and production builds
- Three.js with React Three Fiber and Drei for 3D scenes
- Tailwind CSS 3 for styling
- Framer Motion for interface transitions
- React Router for client-side navigation
- EmailJS Browser SDK for contact form submissions
- Node.js **26.x** is declared in `package.json` under `engines.node`

Dependency version ranges are defined in `package.json`; `package-lock.json` records the resolved dependency tree. Use `npm ci` to install the locked versions.

## Main features

- Responsive portfolio sections for About, Experience, Technology, Projects, Testimonials and Contact
- Interactive hero computer scene on viewports at least 640px wide, plus an Earth illustration and animated star field near Contact
- Contact form submission through EmailJS
- High-priority preload for the optimized hero background and an optimized header logo
- Deferred Canvas loading to keep offscreen 3D scenes and their dependencies out of the earliest page load where possible
- Keyboard skip link and reduced-motion behavior for supported animations and 3D motion
- Search and social sharing metadata, structured data, `robots.txt` and `sitemap.xml`

## Architecture and project structure

This is a client-rendered React single-page application. `src/main.jsx` mounts the app; `src/App.jsx` composes the page inside `BrowserRouter`.

```text
.
├── index.html                 # Entry document, metadata, JSON-LD and hero preload
├── public/
│   ├── desktop_pc/             # Computer GLTF scene and textures
│   ├── planet/                 # Earth GLTF scene and textures
│   ├── hero-background.webp
│   ├── opengraph-image.png
│   ├── robots.txt
│   ├── sitemap.xml
│   └── logo.jpeg               # Favicon
├── src/
│   ├── App.jsx                 # Page composition and deferred Stars Canvas
│   ├── main.jsx                # React application entry point
│   ├── components/             # Navbar, Hero, About, Experience, Projects, Contact, etc.
│   │   └── canvas/             # Earth, Computers, Stars and Ball React Three Fiber scenes
│   ├── constants/              # Portfolio content and card data
│   ├── assets/                 # Imported images and icons
│   ├── hoc/                    # Section layout and reveal wrapper
│   ├── utils/                  # Motion variants
│   ├── index.css               # Global styles and accessibility rules
│   └── styles.js               # Shared Tailwind class strings
├── tailwind.config.cjs         # Theme, breakpoints and hero background
├── postcss.config.cjs
├── vite.config.js
├── package.json
├── package-lock.json
└── .env.example                # Placeholder names for local EmailJS configuration
```

The app's top-level components are exported from `src/components/index.js`. Canvas components are imported directly where needed so they can be split into asynchronous chunks:

- `Hero.jsx` loads `Computers.jsx` at 640px and above and responds to viewport widening. The scene has its own small-screen behavior.
- `Contact.jsx` observes the illustration wrapper with a 1,000px root margin, then loads `Earth.jsx` once it approaches. It preserves the reserved responsive height and the form independently of the scene load.
- `App.jsx` mounts `Stars.jsx` when Contact approaches. Once loaded, the scene remains mounted as the visitor scrolls.
- `Earth.jsx`, `Computers.jsx` and `Stars.jsx` use React Three Fiber `Canvas`; their models and textures are served from `public/`.

The project has no application server or API routes. The contact form sends from the browser through EmailJS. `VITE_` variables are included in client-side code, so configure only the EmailJS values intended for browser use; never place private server credentials in them.

## Requirements and local development

- Node.js 26.x (declared by the project)
- npm
- Git

Clone the existing repository and install its locked dependencies:

```bash
git clone https://github.com/MadMax8930/portfolio-threejs.git
cd portfolio-threejs
npm ci
```

Create a local `.env` or `.env.local` file for EmailJS configuration as described below. Then start the Vite development server:

```bash
npm run dev
```

Vite prints the local development URL, normally `http://localhost:5173`.

## Environment variables and EmailJS

`src/components/Contact.jsx` reads these exact variables from `import.meta.env`:

| Variable | Purpose |
| --- | --- |
| `VITE_APP_EMAILJS_SERVICE_ID` | EmailJS service identifier |
| `VITE_APP_EMAILJS_TEMPLATE_ID` | EmailJS template identifier |
| `VITE_APP_EMAILJS_PUBLIC_KEY` | EmailJS browser public key |

Use `.env.example` as the placeholder template and keep actual local values in `.env` or `.env.local`. Those files are ignored by Git. The `VITE_` prefix makes values available in browser bundles; the public key is designed for client use, but private credentials must never be stored in these variables. Configure the corresponding values in Vercel for the environments that need them.

## Available npm scripts

These are the scripts defined in `package.json`:

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build the production site into `dist/` |
| `npm run preview` | Serve the existing production build locally |

There are no `test` or `lint` scripts currently defined in `package.json`.

## Production build and local preview

Create the production build, then serve that build locally:

```bash
npm run build
npm run preview
```

Vite's default build output is `dist/`; `vite.config.js` does not override `build.outDir`. The preview server serves the generated files (normally at `http://localhost:4173`). Re-run the build after source changes before using preview.

## SEO, metadata and accessibility

The root `index.html` contains the page title and description, canonical URL, robots directives, Open Graph and Twitter Card metadata, favicon reference, and JSON-LD `Person`, `WebSite` and `ProfilePage` entities. `public/robots.txt` permits crawling and points to `https://maxsurnin.com/sitemap.xml`; the sitemap lists the canonical homepage. The Open Graph image is `public/opengraph-image.png`.

The interface includes semantic header and main landmarks, a keyboard-visible skip link, labeled navigation controls and form status feedback. Reduced-motion preferences are handled in the motion components and CSS, including the 3D animation loops and card tilt effects. Continue to check keyboard focus, contrast and alternative text when adding content or interactive controls.

## Performance implementation

- `public/hero-background.webp` is referenced by the Tailwind `hero-pattern` background and preloaded once from `index.html` with high fetch priority.
- `src/assets/index.js` exports the resized WebP header logo instead of the larger original PNG.
- React `lazy()` and `Suspense` split the Earth, Stars and Computers Canvas components into deferred chunks. The Earth and Stars scenes wait until Contact approaches; the computer scene waits for the desktop breakpoint.
- The Contact illustration wrapper reserves its responsive height before the scene loads, and a loading indicator is provided for deferred Canvas chunks.
- Reduced-motion preferences disable supported looping movement and tilt effects without removing scene content or form functionality.

Avoid eagerly importing Canvas modules through barrels when changing component imports; doing so can pull Three.js dependencies back into the initial module graph.

## Git and GitHub workflow

1. Create a focused branch from the current production branch (`max`).
2. Make and review the change, then push that branch to GitHub.
3. Open a pull request targeting `max`.
4. Review the Vercel Preview URL and the pull request checks before approval.
5. Merge only after review; merging into `max` starts the Production deployment.

Example branch setup:

```bash
git switch max
git pull origin max
git switch -c feature/short-description
```

Follow repository policy for review and merge permissions. Do not push directly to `max` unless that workflow is explicitly intended.

## Vercel deployment workflow

The Vercel project is connected to this GitHub repository. Its Production Branch is `max`; pushes to other branches and pull requests receive Preview deployments, while a merge into `max` triggers a Production deployment. Review the Preview before approval. Production is served at [maxsurnin.com](https://maxsurnin.com), with [maxsurnin.vercel.app](https://maxsurnin.vercel.app) as an additional domain.

The build command is `npm run build` (`vite build`) and the static output directory is `dist/`. The Vite configuration uses the default output directory and does not define a `vercel.json` override. Keep the Vercel Node.js build version aligned with the `26.x` project engine requirement.

## Node.js compatibility note

`package.json` currently declares `"node": "26.x"`; no `.nvmrc`, `.node-version`, `.tool-versions`, Volta pin or npm package-manager version pin is present. Node.js 24.x is available on Vercel and satisfies Vite 4's documented minimum, but it does **not** satisfy this repository's declared `26.x` engine range. Node 24 has not been validated against this project here. Use the declared Node 26.x version unless the engine requirement is deliberately revised and the project is tested.

References: [Vercel Node.js versions](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions), [Vite 4 requirements](https://v4.vite.dev/guide/), [Node.js release schedule](https://nodejs.org/en/about/previous-releases).

## Troubleshooting and maintenance

- **`npm ci` reports a Node engine mismatch:** check `node --version`; this repository declares Node 26.x. Check the Vercel Node.js setting if the same mismatch occurs in deployment logs.
- **Contact form reports missing configuration:** verify that all three EmailJS variables are present for the relevant environment. Never paste their values into issues, logs or documentation.
- **`npm run preview` shows an old site:** run `npm run build` first; preview serves the existing `dist/` output.
- **A 3D scene appears after scrolling:** that is expected for the deferred Contact scenes. Check the browser console and network panel if it fails to load after Contact approaches.
- **Initial page loading regresses:** check that Canvas modules remain dynamically imported and that the hero preload URL exactly matches the CSS background URL.
- **Dependency changes:** update `package.json` and `package-lock.json` together, review the resulting diff, and run the production build before opening a pull request.
- **Deployment issue:** inspect the Vercel Preview build logs and project environment configuration before changing deployment settings.
