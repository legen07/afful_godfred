import { fileURLToPath } from 'node:url'
import type { NextConfig } from 'next'

// Next.js 16 — fully static site (Cloudflare Pages / GitHub Pages).
//
// - `output: 'export'` → `next build` emits a self-contained static `out/`
//   directory that Pages hosts (no worker, no server).
// - `next-image-export-optimizer` keeps full `next/image` quality on the
//   static export: after `next build`, its CLI scans `public/images` and
//   re-encodes every image with sharp at all configured sizes (webp by
//   default + 10px blur placeholders) next to the public copy. The
//   `ExportedImage` component (used instead of `next/image`) points at
//   those files. No webpack requirement — builds run on Turbopack.
// - `images.loader: 'custom'` + the size lists below feed the optimizer's
//   srcset generation (the component supplies its own loader function).
// - `transpilePackages` is required by the optimizer (CJS package).
// - Turbopack is the default bundler in 16 (always on for `next dev`).
// - React Compiler is stable in 16 and enabled via the top-level
//   `reactCompiler` option. Requires `babel-plugin-react-compiler`.
// - Security headers that used to live in `proxy.ts` are now set at the
//   edge (Pages project → Settings → Custom Headers). See README.

const config: NextConfig = {
  output: 'export',
  reactCompiler: true,
  poweredByHeader: false,
  turbopack: {
    // Anchor the project root (the home dir holds an unrelated bun.lock).
    root: fileURLToPath(new URL('.', import.meta.url)),
  },
  images: {
    loader: 'custom',
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  transpilePackages: ['next-image-export-optimizer'],
  env: {
    nextImageExportOptimizer_imageFolderPath: 'public/images',
    nextImageExportOptimizer_exportFolderPath: 'out',
    nextImageExportOptimizer_quality: '82',
    nextImageExportOptimizer_storePicturesInWEBP: 'true',
    nextImageExportOptimizer_generateAndUseBlurImages: 'true',
  },
}

export default config
