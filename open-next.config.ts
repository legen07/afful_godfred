import { defineCloudflareConfig } from '@opennextjs/cloudflare'

// OpenNext Cloudflare — packages this Next.js build as a Cloudflare Worker
// (edge network, nodejs_compat).
//
// Cache overrides are "dummy" on purpose: the site is fully static (every
// page is pre-rendered) and /api/site is an uncached read. No incremental /
// tag cache or R2 bucket is required for deployment.
export default defineCloudflareConfig({
  incrementalCache: 'dummy',
  tagCache: 'dummy',
  queue: 'dummy',
})
