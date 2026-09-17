// next-export-optimize-images — build-time image optimization for the
// static export (https://next-export-optimize-images.vercel.app).
//
// Loaded automatically by `withExportImages()` in next.config.ts whenever a
// webpack build runs (`bun run build` → `next build --webpack`).
module.exports = {
  // 'export' mode: optimized images are written into the export dir.
  mode: 'export',
  // Where `next build` emits the static site.
  outDir: 'out',
  // Generate WebP variants alongside the originals (served via <picture>).
  generateFormats: ['webp'],
  // Portfolio screenshots are photographic; keep quality high.
  quality: 82,
}
