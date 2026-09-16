// Syncs .dev.vars to Cloudflare Secrets (nextjs-16-edge skill, §4).
//
// This static portfolio currently has no runtime secrets, but the flow is
// kept for parity:
//   1. add secrets to .dev.vars
//   2. bun run sync-secrets.js   (prints the exact `wrangler secret put` commands)
//   3. run the printed commands (or pipe them), then `bun run deploy`
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const dir = join(fileURLToPath(import.meta.url), '..')
const content = readFileSync(join(dir, '.dev.vars'), 'utf-8')

const vars = new Map()
for (const line of content.split('\n')) {
  const match = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/)
  if (!match || line.trim().startsWith('#')) continue
  const [, key, raw] = match
  vars.set(key, raw.replace(/^["']|["']$/g, ''))
}

console.log('Current .dev.vars:')
const commands = []
for (const [key, value] of vars.entries()) {
  const isPublic = key.startsWith('NEXT_PUBLIC_')
  console.log(`  ${key} = ${value}   [${isPublic ? 'public, inlined at build' : 'SECRET'}]`)
  if (!isPublic) commands.push(`echo "${value}" | bun run wrangler secret put ${key}`)
}
if (commands.length) {
  console.log('\nTo sync to Cloudflare Secrets, run:')
  for (const cmd of commands) console.log(`  ${cmd}`)
} else {
  console.log('\nNo secrets to sync (only public build-time variables).')
}
