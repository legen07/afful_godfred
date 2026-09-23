import { LogoMark } from './ui/logo'
import { useTranslations } from '@/lib/language-context'

/** Slim wayfinding footer (Apple: where am I / how do I get out). */
export function Footer() {
  const t = useTranslations()
  const f = t.footer

  return (
    <footer className="footer">
      <span className="footer-left">
        <LogoMark size={15} />© {new Date().getFullYear()} {f.copyright.replace('{year}', new Date().getFullYear().toString())}
      </span>
      <span className="footer-right">
        {f.location}
        <span aria-hidden>·</span>
        {f.stack}
      </span>
    </footer>
  )
}