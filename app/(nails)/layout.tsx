import type { Metadata } from "next";
import { Gloock, Inter_Tight } from "next/font/google";
import Link from "next/link";
import { business, nav, bookCta, seo, footer } from "./nails/content";
import "./nails.css";

const gloock = Gloock({ subsets: ["latin"], weight: "400", variable: "--font-gloock", display: "swap" });
const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: `${business.name} · Los Angeles`, template: `%s | ${business.name}` },
  description: seo.description,
  robots: { index: false, follow: false },
  icons: { icon: "/nails/favicon.png" },
};

function Logo() {
  return (
    <Link href="/" className="logo" aria-label={`${business.name} home`}>
      {business.wordmark}
      <span className="dot">·</span>
    </Link>
  );
}

export default function NailsLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${gloock.variable} ${interTight.variable}`}>
      <body>
        <div className="shell">
          <header className="panel nav-panel">
            <nav className="nav" aria-label="Main">
              <Logo />
              <div className="nav-links">
                {nav.map((item) => (
                  <Link key={item.href} href={item.href}>
                    {item.label}
                  </Link>
                ))}
              </div>
              <Link href={bookCta.href} className="btn btn-sm">
                {bookCta.label}
              </Link>
            </nav>
          </header>

          {children}

          <footer className="panel footer">
            <div className="foot-grid">
              <div>
                <Logo />
                <p className="foot-about">{footer.about}</p>
              </div>
              <div className="foot-col">
                <h4>Visit</h4>
                <span>{business.address.street}</span>
                <span>{business.address.cityLine}</span>
                {business.hours.map((h) => (
                  <span key={h.days}>
                    {h.days}, {h.time}
                  </span>
                ))}
              </div>
              <div className="foot-col">
                <h4>Contact</h4>
                <a href={business.phoneHref}>{business.phone}</a>
                <a href={`mailto:${business.email}`}>{business.email}</a>
              </div>
              <div className="foot-col">
                <h4>Pages</h4>
                <Link href="/">Home</Link>
                <Link href="/services">Services</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>
            <div className="foot-bottom">
              <span>
                © {new Date().getFullYear()} {business.name}
              </span>
              <span>{footer.demoNote}</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
