// The template's mark, exact geometry: two rounded bars rotated -30°, with
// node dots at top-left and bottom-right. When `size` is omitted the SVG is
// sized by CSS (the header logo uses var(--logo-mark)).
export function LogoMark({ size }: { size?: number }) {
  return (
    <svg
      {...(size ? { width: size, height: size } : {})}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <g transform="rotate(-30 12 12)">
        <circle cx="7.3" cy="3.2" r="1.45" />
        <rect x="5.5" y="4.7" width="3.6" height="14.6" rx="1.8" />
        <rect x="14.9" y="4.7" width="3.6" height="14.6" rx="1.8" />
        <circle cx="16.7" cy="20.8" r="1.45" />
      </g>
    </svg>
  )
}

/** Wordmark: `Godfred` (600) + `.dev` (400), per the template's logo language. */
export function LogoWordmark() {
  return (
    <>
      Godfred<span className="logo-suffix">.dev</span>
    </>
  )
}
