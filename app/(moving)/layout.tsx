import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { business, nav, seo, footer } from "./moving/content";
import "./moving.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: business.name, template: `%s | ${business.name}` },
  description: seo.description,
  robots: { index: false, follow: false },
  icons: { icon: "/moving/favicon.png" },
};

export default function MovingLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <nav className="nav" aria-label="Main">
          <div className="nav-left">
            <Link href="/" className="logo">
              <span className="logo-mark">{business.logoMark}</span>
              {business.logoText}
            </Link>
            <div className="nav-links">
              {nav.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="nav-right">
            <a href={business.phoneHref} className="phone">
              {business.phone}
            </a>
            <Link href="/contact" className="btn btn-light">
              Get a quote
            </Link>
          </div>
        </nav>

        {children}

        <footer>
          <div className="wrap">
            <div className="foot-grid">
              <div>
                <Link href="/" className="logo">
                  <span className="logo-mark">{business.logoMark}</span>
                  {business.logoText}
                </Link>
                <p className="foot-about">{footer.about}</p>
              </div>
              <div className="foot-col">
                <h4>Company</h4>
                {nav.map((item) => (
                  <Link key={item.href} href={item.href}>
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="foot-col">
                <h4>Contact</h4>
                <a href={business.phoneHref}>{business.phone}</a>
                <a href={`mailto:${business.email}`}>{business.email}</a>
                <span>
                  {business.address.street}
                  <br />
                  {business.address.cityLine}
                </span>
              </div>
              <div className="foot-col">
                <h4>Licensing</h4>
                {business.licenses.map((l) => (
                  <span key={l}>{l}</span>
                ))}
                <span>Open 7 days a week</span>
              </div>
            </div>
            <div className="foot-bottom">
              <span>
                © {new Date().getFullYear()} {business.name}
              </span>
              <span>{footer.tagline}</span>
              <span className="demo-note">{footer.demoNote}</span>
            </div>
          </div>
        </footer>

        <div className="callbar">
          <a href={business.phoneHref} className="btn btn-ghost-dark">
            Call now
          </a>
          <Link href="/contact" className="btn btn-light">
            Get a quote
          </Link>
        </div>
      </body>
    </html>
  );
}
