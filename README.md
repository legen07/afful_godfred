# Godfred.dev — Afful Godfred portfolio

A single-page portfolio for **Afful Godfred** — software engineer for web
development & automations. Built on **Next.js 16 (Turbopack) + React 19**,
styled with the Vesper.ai liquid-glass template (`assets/mydesign.md`) edited
with Apple's fluid-interface principles, and deployed to the **Cloudflare
Edge** via OpenNext.

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
| L2 app routes | `app/(marketing)/page.tsx`, `app/layout.tsx`, `app/not-found.tsx`, `app/error.tsx`, `app/api/site/route.ts` |
| L3 repository | `repository/site.repository.ts` — typed content (work, automations, skills, person, contact) |
| L4 services | `services/site.service.ts` — Zod 4 validation of the repository, exports the `site` model |
| L5 proxy | `proxy.ts` — edge security headers (crash-safe; Next 16 renames middleware → proxy) |
| L6 API routes | `app/api/site/route.ts` — `GET` returns the validated site model as JSON |
| L7–L9 DB / cache / infra | N/A — fully static. The only "database" is the repository; caching is edge CDN + `dummy` OpenNext cache |

Request flow on Cloudflare:

```
page/API request → worker (.open-next/worker.js)
  → proxy.ts (security headers, crash-safe)
  → pre-rendered HTML or /api/site
static assets (_next/static, images, work/) → Workers Assets fast path
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
  deprecated in 16.3.
- `export const runtime = 'edge'` on route handlers is **deprecated** — the
  default runtime is used; edge behavior comes from the OpenNext
  `nodejs_compat` worker.
- No `experimental.turbopack` / `cacheComponents` flags — **Turbopack and
  Cache Components are the only/default** in 16.
- `reactCompiler: true` (top-level) + `babel-plugin-react-compiler`
  devDependency for the React Compiler.
- `turbopack.root` set in `next.config.ts` so Turbopack uses the project
  root (not the home directory).
- Biome 2.5 config: linter uses `"rules": { "preset": "recommended" }`
  (the old `recommended: true` is deprecated).

## Build quirk: Turbopack minifier + `backdrop-filter`

Turbopack's CSS minifier **drops the standard `backdrop-filter` when a
`-webkit-backdrop-filter` twin is present** (it keeps only the prefixed
form, which current Chromium ignores). Rule of thumb: **write only the
standard `backdrop-filter`** — the minifier then emits both forms. Do not
add `-webkit-backdrop-filter` by hand.

## Development

> **Network note (this machine):** only `registry.yarnpkg.com` is reachable
> for npm packages. A project `.npmrc` pins that registry — keep it.

```bash
bun install          # deps (uses .npmrc registry)
bun run dev          # Turbopack dev server → http://localhost:3000
bun run build        # production build
bun run start        # serve the production build
bun run lint         # Biome (check)
bun run typecheck    # tsc --noEmit
bun run format       # Biome (write)
```

Secrets for dev live in `.dev.vars` (gitignored); `bun run sync-secrets`
prints the matching `wrangler secret put` commands for deployment.

## Cloudflare Edge deployment

```bash
bun run edge-build          # next build + OpenNext Cloudflare bundle → .open-next/
bun run wrangler-dev        # local preview of the production bundle (workerd)
bun run deploy              # opennextjs-cloudflare deploy (requires CLOUDFLARE_API_TOKEN)
```

Deployment facts:

- Worker name: `godfred-dev` (`wrangler.toml`).
- Compatibility: `nodejs_compat` + `global_fetch_strictly_public`.
- **No R2 bucket needed** — OpenNext cache overrides are `dummy`
  (`open-next.config.ts`) because the site is fully static and `/api/site`
  is uncached.
- `IMAGES` binding backs Next's `/_next/image` optimization on the edge.
- Security headers are applied by `proxy.ts` **and** verified in the
  production workerd bundle; the proxy is crash-safe (headers are
  defense-in-depth, never a request dependency).
- One caveat to know: OpenNext runs Next middleware as *Node.js middleware*
  on Cloudflare, which it labels "experimental". It is exercised and
  verified working for this headers-only proxy in `wrangler dev`
  (workerd), but if a future OpenNext version changes that path, the
  security headers are the first thing to re-check.

## Verification performed

- `next build`: 0 warnings. Routes: `/` (static), `/_not-found` (static),
  `/api/site` (dynamic), `/icon.svg` (static), proxy.
- `biome check`: clean (0 errors, 0 warnings) after fixes.
- Live browser checks (prod build on `next start`): black body, sticky
  header + scrolled material (blur 18px), exact first-viewport hero frame,
  Instrument Serif italic `em`, 4 work cards, 6 automation cards, 21 skill
  fills animating to their exact percentages, all section reveals, mobile
  burger menu (backdrop blur 24px, bar morph, body scroll lock), 9 images
  0 broken, `/api/site` JSON + 4 security headers, font + image
  optimization.
- Production bundle on **workerd** (`wrangler dev`): page 200 with all 4
  security headers, `/api/site` 200 JSON, assets fast path 200,
  `/_next/image` 200 (optimized).
