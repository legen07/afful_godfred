# Godfred.dev — Afful Godfred portfolio

A single-page portfolio for **Afful Godfred** — software engineer for web
development & automations. Built on **Next.js 16 (Turbopack) + React 19**,
styled with the Vesper.ai liquid-glass template (`assets/mydesign.md`) edited
with Apple's fluid-interface principles, and deployed to **Cloudflare Pages**
as a fully static export (images optimized at build time).

No animation libraries, no Tailwind, no UI frameworks. Motion is pure
**Web Animations API** (WAAPI); styling is **modular CSS** with a token
system.

---

## Content sources

All copy comes from the `assets/` directory (not committed, gitignored):

| Source | Used for |
| --- | --- |
| `assets/mydesign.md` | Design template: tokens, keyframes, layout, breakpoints |
| `assets/about.md` | Bio, education, languages, skill percentages, contact details |
| `assets/Afful-Godfred.jpg` | Portrait (640×640), served at `/afful-godfred.jpg` |
| `assets/websites/*.html` | The four work projects (file name = site URL) |

Work project data (name, URL, description) is captured in
`repository/site.repository.ts` — edit that file, not the components, to
change content.

## Architecture (9-layer, adapted to a static site)

The `nextjs-16-edge` skill defines a 9-layer stack. This site is fully
static, so the data layers collapse:

| Layer | Role in this project |
| --- | --- |
| L1 UI components | `app/components/*` (header, hero, work, automations, skills, about, contact, footer, reveal, ui/*) |
| L2 app routes | `app/(marketing)/page.tsx`, `app/layout.tsx`, `app/not-found.tsx`, `app/error.tsx` |
| L3 repository | `repository/site.repository.ts` — typed content (work, automations, skills, person, contact) incl. imported image assets |
| L4 services | `services/site.service.ts` — Zod 4 validation of the repository, exports the `site` model |
| L5 edge security | Cloudflare **Custom Headers** on the Pages project (the old `proxy.ts` edge proxy was removed with the worker) |
| L6–L9 API / DB / cache / infra | N/A — fully static. The only "database" is the repository; caching is the Pages CDN |

Request flow on Cloudflare Pages:

```
any request → static file from the `out/` export (CDN-cached)
  → pre-rendered HTML (index.html, _not-found.html)
  → _next/static (JS/CSS/fonts), optimized images, /afful-godfred.jpg
security headers → Pages Custom Headers (edge, every response)
```

## Apple-design edits on the template

- **Pointer-down feedback**: every button/pill responds to `:active`
  (`scale(0.97)` + shine), not only hover — iOS-style.
- **Apple easing**: all WAAPI reveals use `cubic-bezier(0.16, 1, 0.3, 1)`
  (`APPLE_EASE` in `lib/animations.ts`).
- **Interruptible reveals**: `revealElement()` cancels in-flight animations
  and re-targets from the live presentation values
  (`getComputedStyle` + `DOMMatrixReadOnly`), so re-entry never snaps.
- **Scroll edges, not dividers**: sections fade via gradient backgrounds;
  the sticky header gains a `scroll` material (blur 18px + gradient) after
  `60%` of the first viewport (rAF-throttled).
- **Optical tracking**: size-specific letter-spacing (`-0.045em` on the H1,
  `-0.03em` on the logo, etc.).
- **Accessibility media queries**: `prefers-reduced-motion`,
  `prefers-reduced-transparency`, `prefers-contrast` all honored.
- **Black-force**: `background: #000 !important` on `html/body` so the page
  can never flash white; `overflow-x: clip` (not `hidden`) so `position:
  sticky` still works.

## Skill → Next.js 16.3 deviations

Next 16.3.5 ships several changes vs. the skill's documented API:

- `middleware.ts` → **`proxy.ts`** (default export) — middleware is
  deprecated in 16.3. (The proxy file itself is gone now: with a static
  export there is no edge runtime, so the security headers live in the
  Cloudflare dashboard — see Deployment.)
- No `experimental.turbopack` / `cacheComponents` flags — **Turbopack and
  Cache Components are the only/default** in 16.
- `reactCompiler: true` (top-level) + `babel-plugin-react-compiler`
  devDependency for the React Compiler.
- `turbopack.root` set in `next.config.ts` so Turbopack uses the project
  root (not the home directory).
- Biome 2.5 config: linter uses `"rules": { "preset": "recommended" }`
  (the old `recommended: true` is deprecated).

### Static export + image optimization

- `output: 'export'` in `next.config.ts` → the production build is a plain
  static `out/` directory (no worker, no server, no `/_next/image` route).
- **`next-export-optimize-images`** keeps full `next/image` quality on the
  export: its webpack hook records every `<Image>`/`<Picture>` src at build
  time, then its CLI runs sharp over all `deviceSizes + imageSizes` and
  writes webp + resized originals into
  `out/_next/static/chunks/images/`. Two consequences:
  - `build` runs **`next build --webpack`** (the plugin only hooks the
    webpack pipeline; `next dev` stays on Turbopack).
  - images must be **imported as modules** (from `images/`, not `/public`
    URL strings — public files never pass through the loader). The
    repository imports them and exports `StaticImageData`; components use
    the plugin's `Picture` wrapper (renders `<picture>` with webp
    `<source>`s). `export-images.config.cjs` holds the plugin settings.
  - `public/afful-godfred.jpg` is kept as a plain copy for the OG/social
    `metadata.images` URL (that URL must be a stable public path).

## Build quirk: CSS minifier + `backdrop-filter`

The old Turbopack minifier **dropped the standard `backdrop-filter` when a
`-webkit-backdrop-filter` twin was present**. The production build now runs
webpack, whose minifier keeps the standard property (verified in the built
CSS). Rule of thumb stands regardless: **write only the standard
`backdrop-filter`** — do not add `-webkit-backdrop-filter` by hand.

## Development

> **Network note (this machine):** only `registry.yarnpkg.com` is reachable
> for npm packages. A project `.npmrc` pins that registry — keep it.

```bash
bun install          # deps (uses .npmrc registry)
bun run dev          # Turbopack dev server → http://localhost:3000
bun run build        # static export: next build --webpack + image optimization → out/
bun run preview      # build, then serve out/ locally (wrangler pages dev)
bun run lint         # Biome (check)
bun run typecheck    # tsc --noEmit
bun run format       # Biome (write)
```

`NEXT_PUBLIC_APP_URL` (used for `metadataBase`) is inlined at build time.
Locally it falls back to `http://localhost:3000`; in CI it is a Pages build
variable (see below) set to the production origin.

## Deployment (Cloudflare Pages)

```bash
bun run pages-deploy   # build + wrangler pages deploy out  (local CLI deploy)
```

The site is a **Pages** project (fully static — no worker). The build is
driven by the Pages git build:

| Setting (Settings → Build) | Value |
| --- | --- |
| Build command | `bun install && bun run build` |
| Build output directory | `out` |
| Node.js version | **22** (or newer) — Next 16 requires ≥ 20.9; the Pages default image is Node 18 |
| Build variable | `NEXT_PUBLIC_APP_URL = https://godfred.dev` |

Notes:

- The Pages build image ships **bun** preinstalled (the build command uses
  it directly). `bun.lock` is committed, so installs are reproducible.
- `wrangler.jsonc` carries `pages_build_output_dir: "out"` (Pages CI BETA
  reads it) and the project `name` used by the local `wrangler pages` CLI.
- `next build --webpack` is required by the image-optimization plugin (see
  Static export section) — keep the `--webpack` flag.

### Security headers (formerly `proxy.ts`)

Set on the Pages project → **Settings → Custom Headers** (apply to `/*`):

| Header | Value |
| --- | --- |
| `X-Content-Type-Options` | `nosniff` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `X-Frame-Options` | `DENY` |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` |

## Verification performed

- `bun run build` (static export): 0 errors. Routes: `/` (static),
  `/_not-found` (static), `/icon.svg` (static).
- Image pipeline: 9 `<picture>` blocks (1 portrait + 8 work shots), 150 webp
  variants + resized originals in `out/_next/static/chunks/images/`;
  webp ≈ 50% smaller than png at the same width (1080w: 126 KB → 63 KB);
  all 221 local URLs in the exported HTML resolve to real files.
- `backdrop-filter` confirmed present in the minified production CSS
  (webpack minifier).
- Served `out/` locally: `/` 200 (portrait + 4 work cards render from the
  optimized sources), `/404.html` 200, `/afful-godfred.jpg` 200 (OG image),
  webp 200 `image/webp`.
- `biome check`: clean. `tsc --noEmit`: clean (validated by the build).
