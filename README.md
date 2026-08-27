# EarthInsider Tools

Static multi-tool site, built with [Eleventy](https://www.11ty.dev/). Output is
plain HTML/CSS/JS — host it on GitHub Pages, or move it anywhere (Netlify,
Cloudflare Pages, any static host) by just copying the `_site` folder.

## Local setup

```
npm install
npm run serve     # local dev server with live reload
npm run build      # outputs to _site/
```

## Adding a new tool or page

Add one entry to `src/_data/tools.json` — that's it. The header, footer,
homepage grid, search index, sitemap.xml and feed.xml all update automatically
on the next build because they're all generated from this one file. Leave
`"icon"` as `null` to use the automatic first-letter fallback.

To build the actual tool page, copy `src/tools/html-encoder.njk` as a
starting point.

## The 9 global components — where each one lives

| # | Component | File |
|---|---|---|
| 1 | Header | `src/_includes/partials/header.njk` |
| 2 | Footer | `src/_includes/partials/footer.njk` |
| 3 | Meta Tag | `src/_includes/partials/head-meta.njk` |
| 4 | Ad Code | `src/_data/site.json` → `adCode` |
| 5 | Advertisements-Inner-codes | per-page front-matter `advertisementsInnerCodes`, or sitewide default in `src/_data/site.json` → `defaultAdvertisementsInnerCodes` |
| 6 | Desktop Ad Slot | `src/_data/site.json` → `desktopAdSlot` |
| 7 | Mobile Ad Slot | `src/_data/site.json` → `mobileAdSlot` |
| 8 | Always Load | `src/_data/site.json` → `alwaysLoad` |
| 9 | Cookies | `src/_includes/partials/cookies.njk` + `src/_data/site.json` → `cookieText` |

To turn any ad on, paste the `<script>...</script>` (or ad snippet) as a
string into the matching key in `src/_data/site.json`. Leave it as `""` to
keep it off — every page picks it up automatically either way.

## Deploying

`.github/workflows/deploy.yml` builds and deploys to GitHub Pages
automatically on every push to `main`. In the repo settings, set
**Settings → Pages → Source → GitHub Actions** once, and it takes over from
there.

## Note from the build

This was scaffolded without internet access, so `npm install` / the actual
Eleventy build has **not** been run or verified end-to-end. The structure
follows standard Eleventy conventions — run `npm install && npm run build`
locally (or just push and let the GitHub Action run it) and fix anything
that surfaces.
