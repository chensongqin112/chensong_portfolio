# chensong_portfolio

Personal portfolio for [chensongqin112](https://github.com/chensongqin112). Static [Astro](https://astro.build) site, published by Cloudflare Pages from the `dist` directory.

## Run locally

```bash
npm install
npm run dev
```

The dev server is at http://localhost:4321.

```bash
npm run build
npm run preview
```

`npm run build` writes the site to `dist/`.

## Add a project

Edit `src/data/projects.ts`. Each entry needs a title, a short summary, a repository URL, and a list of stack labels.

## Cloudflare Pages build settings

These values are set in the Cloudflare dashboard, not in this repo:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Project name | `chensong-portfolio` |

The project name cannot contain underscores. With that name, the site is served at `https://chensong-portfolio.pages.dev`. If you choose a different project name, update `site` in `astro.config.mjs`.

Node 22 is requested in `.node-version` because this Astro version requires it.
