import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Announcement, SiteNav } from "./_components/Parts";
import { Reveal, revealBootScript } from "./_components/Reveal";
import { brand, seo } from "./safe-school-valli/content";
import "./ssv.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: { default: `${brand.name}™ · ${brand.line}`, template: `%s | ${brand.name}™` },
  description: seo.description,
  robots: { index: false, follow: false },
  icons: { icon: "/safe-school-valli/favicon.png" },
};

export default function SafeSchoolLayout({ children }: { children: React.ReactNode }) {
  return (
    // The boot script adds a class to <html> before hydration, so React must not flag it.
    <html lang="en-AU" className={inter.variable} suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: revealBootScript }} />
        <div className="site-top">
          <Announcement />
          <div className="nav-shell">
            <SiteNav />
          </div>
        </div>
        {children}
        <Reveal />
      </body>
    </html>
  );
}
