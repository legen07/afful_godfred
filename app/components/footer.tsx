import { LogoMark } from './ui/logo'

/** Slim wayfinding footer (Apple: where am I / how do I get out). */
export function Footer() {
  return (
    <footer className="footer">
      <span className="footer-left">
        <LogoMark size={15} />© {new Date().getFullYear()} Afful Godfred
      </span>
      <span className="footer-right">
        Nsawam, Ghana
        <span aria-hidden>·</span>
        Next.js 16 on Cloudflare Edge
      </span>
    </footer>
  )
}
