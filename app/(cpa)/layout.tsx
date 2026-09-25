import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";
import { Icon, LogoMark } from "./_components/Icons";
import { CtaLink } from "./_components/Parts";
import { business, footer, nav, seo, services, topbar } from "./cpa/content";
import "./cpa.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: `${business.name} · Portland, Oregon`, template: `%s | ${business.name}` },
  description: seo.description,
  robots: { index: false, follow: false },
  icons: { icon: "/cpa/favicon.png" },
};

function Logo() {
  return (
    <Link href="/" className="logo" aria-label={`${business.name} home`}>
      <LogoMark />
      {business.shortName}
      <small>CPA</small>
    </Link>
  );
}

export default function CpaLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body>
        <div className="masthead">
          <div className="topbar">
            <div className="wrap">
              <div className="topbar-left">
                <span>
                  <Icon name="check" size={14} />
                  {topbar.left}
                </span>
                <span>
                  <Icon name="mail" size={14} />
                  {business.email}
                </span>
              </div>
              <span className="topbar-right">
                {business.hours[0].days} {business.hours[0].time} · {business.phone}
              </span>
            </div>
          </div>
          <nav className="nav" aria-label="Main">
            <div className="wrap">
              <Logo />
              <div className="nav-links">
                {nav.map((item) => (
                  <Link key={item.href} href={item.href}>
                    {item.label}
                  </Link>
                ))}
              </div>
              <CtaLink variant="dark" />
            </div>
          </nav>
        </div>

        {children}

        <footer className="footer">
          <div className="wrap">
            <div className="foot-grid">
              <div>
                <Logo />
                <p className="foot-about">{footer.about}</p>
              </div>
              <div className="foot-col">
                <h4>Services</h4>
                {services.slice(0, 5).map((s) => (
                  <Link key={s.id} href={`/services#${s.id}`}>
                    {s.title}
                  </Link>
                ))}
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
                <h4>Visit</h4>
                <span>{business.address.street}</span>
                <span>{business.address.cityLine}</span>
                <a href={business.phoneHref}>{business.phone}</a>
                <a href={`mailto:${business.email}`}>{business.email}</a>
                {business.hours.map((h) => (
                  <span key={h.days}>
                    {h.days}: {h.time}
                  </span>
                ))}
              </div>
            </div>
            <div className="foot-bottom">
              <span>
                © {new Date().getFullYear()} {business.name}
              </span>
              <span>{footer.demoNote}</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
