// CJS package: `module.exports` is the function itself (no named exports at
// runtime), so a default import is required.

import { fileURLToPath } from 'node:url'
import type { NextConfig } from 'next'
import withExportImages from 'next-export-optimize-images'

// Next.js 16 — fully static site (Cloudflare Pages).
//
// - `output: 'export'` → `next build` emits a self-contained static `out/`
//   directory that Cloudflare Pages hosts (no worker, no server).
// - `next-export-optimize-images` keeps full `next/image` quality on the
//   static export: it optimizes images with sharp at build time (webp
//   variants + originals into `out/_next/static/chunks/images/`). Its
//   webpack config hook only runs on a webpack build, so `build` uses
//   `next build --webpack` (Turbopack remains the dev bundler).
// - Turbopack is the default bundler in 16 (always on for `next dev`).
// - React Compiler is stable in 16 and enabled via the top-level
//   `reactCompiler` option. Requires `babel-plugin-react-compiler`.
// - Security headers that used to live in `proxy.ts` are now set at the
//   Cloudflare edge (Pages project → Settings → Custom Headers). See README.

const config: NextConfig = {
  output: 'export',
  reactCompiler: true,
  poweredByHeader: false,
  turbopack: {
    // Anchor the project root (the home dir holds an unrelated bun.lock).
    root: fileURLToPath(new URL('.', import.meta.url)),
  },
}

export default withExportImages(config)
