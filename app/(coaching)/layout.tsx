import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { UtmCapture } from "./_components/UtmCapture";
import { business, seo } from "./coaching/content";
import "./coaching.css";

const geist = Geist({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-geist", display: "swap" });

export const metadata: Metadata = {
  title: { default: `Path to ICF Certification · ${business.name}`, template: `%s | ${business.name}` },
  description: seo.description,
  robots: { index: false, follow: false },
  icons: { icon: "/coaching/favicon.png" },
};

// Nav and footer live in the pages, not here, so the quiz can run full-screen without them.
export default function CoachingLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body>
        <UtmCapture />
        {children}
      </body>
    </html>
  );
}
