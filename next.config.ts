import { fileURLToPath } from 'node:url'
import type { NextConfig } from 'next'

// Next.js 16 — production-grade, static-first, Cloudflare Edge.
//
// Notes on the nextjs-16-edge skill's config, adapted to real Next.js 16.3:
// - Turbopack is the only bundler in 16 and is always on for `next dev` and
//   `next build` — the old `experimental.turbopack` flag no longer exists.
// - React Compiler is stable in 16 and enabled via the top-level
//   `reactCompiler` option (it lived in `experimental` in 15.x). Requires
//   `babel-plugin-react-compiler` in node_modules.
// - Cache Components (`'use cache'` + `cacheLife`/`cacheTag`) is stable and on
//   by default in 16 — no flag required.
// - Edge runtime: `proxy.ts` (the 16.3 rename of `middleware.ts`) always runs
//   on the Edge. For route handlers, 16.3 deprecates `runtime = 'edge'`; the
//   default (nodejs) runtime is what OpenNext Cloudflare ships to the Edge
//   under `nodejs_compat`, so `/api/site` uses the default runtime.

const config: NextConfig = {
  reactCompiler: true,
  poweredByHeader: false,
  turbopack: {
    // Anchor the project root (the home dir holds an unrelated bun.lock).
    root: fileURLToPath(new URL('.', import.meta.url)),
  },
}

export default config
