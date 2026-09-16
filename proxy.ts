// Layer 5 — Edge proxy (Next.js 16 convention; `middleware.ts` is deprecated
// in 16.3). Defense-in-depth security headers for every request. Runs on the
// Cloudflare Edge (V8 isolates).
//
// Crash-safe by design: header injection is defense-in-depth, never a
// dependency. If anything throws, the request still proceeds (the same
// headers are also set at the Cloudflare edge via wrangler.toml [headers]).
import { NextResponse } from 'next/server'

const SECURITY_HEADERS = [
  ['X-Content-Type-Options', 'nosniff'],
  ['Referrer-Policy', 'strict-origin-when-cross-origin'],
  ['X-Frame-Options', 'DENY'],
  ['Permissions-Policy', 'camera=(), microphone=(), geolocation=()'],
] as const

export default function proxy() {
  const response = NextResponse.next()
  try {
    for (const [name, value] of SECURITY_HEADERS) {
      response.headers.set(name, value)
    }
  } catch {
    // Never block a request over header decoration.
  }
  return response
}

export const config = {
  // Skip Next's own static assets; cover pages, the API, and fonts.
  matcher: ['/((?!_next/static|_next/image|favicon.ico|icon.svg|work/|afful-godfred.jpg).*)'],
}
