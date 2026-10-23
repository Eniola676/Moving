import Link from "next/link";
import type { CSSProperties } from "react";
import { announcement, brand, cta, finalCta, footer, nav } from "../safe-school-valli/content";

/** Props that mark an element for the scroll reveal, with an optional stagger delay in ms. */
export const reveal = (delay = 0) => ({ "data-reveal": "", style: { "--d": `${delay}ms` } as CSSProperties });

/** Simple roofline mark: a house, nothing else. */
export function LogoMark() {
  return (
    <span className="logo-mark" aria-hidden="true">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round">
        <path d="M2.5 7.5L8 3l5.5 4.5V13h-11z" />
        <path d="M6.5 13V9.5h3V13" />
      </svg>
    </span>
  );
}

export function Logo() {
  return (
    <Link href="/" className="logo" aria-label={`${brand.name} home`}>
      <LogoMark />
      <span>
        {brand.name}
        <sup>{brand.mark}</sup>
      </span>
    </Link>
  );
}

export function Check({ size = 14 }: { size?: number }) {
  return (
    <span className="check" aria-hidden="true">
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3.5 8.5l3 3L12.5 5" />
      </svg>
    </span>
  );
}

export function CtaButton({ label = cta.label, variant = "teal" }: { label?: string; variant?: "teal" | "slate" | "mint" | "outline" | "outline-light" }) {
  return (
    <Link href={cta.href} className={`btn btn-${variant}`}>
      {label} <span className="arr" aria-hidden="true">→</span>
    </Link>
  );
}

export function Announcement() {
  return (
    <div className="announce" role="region" aria-label="2026 availability">
      <div className="wrap">
        <span>{announcement.text}</span>
        <Link href={cta.href}>{cta.short}</Link>
      </div>
    </div>
  );
}

export function SiteNav() {
  return (
    <nav className="nav" aria-label="Main">
      <Logo />
      <div className="nav-links">
        {nav.map((n) => (
          <Link key={n.href} href={n.href}>
            {n.label}
          </Link>
        ))}
      </div>
      <CtaButton label={cta.nav} variant="mint" />
    </nav>
  );
}

export function Footer({ withCta = true }: { withCta?: boolean }) {
  return (
    <footer className="final">
      <div className="wrap">
        {withCta && (
          <div className="final-grid" {...reveal()}>
            <h2>{finalCta.title}</h2>
            <div>
              {finalCta.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <CtaButton />
              <p className="note">{finalCta.note}</p>
            </div>
          </div>
        )}
        <div className="foot">
          <Logo />
          <nav aria-label="Footer">
            {nav.map((n) => (
              <Link key={n.href} href={n.href}>
                {n.label}
              </Link>
            ))}
            <Link href={cta.href}>Book a consultation</Link>
          </nav>
          <span>
            © {new Date().getFullYear()} {brand.name}
            {brand.mark} · {footer.line}
          </span>
        </div>
      </div>
    </footer>
  );
}
