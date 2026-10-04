import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Host (without "www.") → site slug. The slug is the folder inside the site's
// route group, e.g. "moving" → app/(moving)/moving/.
const DOMAINS: Record<string, string> = {
  // Moving — Swift Haul Movers
  "swift-haul-movers.vercel.app": "moving",
  "moving.localhost:3000": "moving",

  // Nail salon — Lune Nail Bar
  "lune-nail-bar.vercel.app": "nails",
  "nails.localhost:3000": "nails",

  // CPA — Basalt & Pine CPA
  "basalt-pine-cpa.vercel.app": "cpa",
  "cpa.localhost:3000": "cpa",

  // Executive coaching landing page — Halden Institute
  "halden-coaching.vercel.app": "coaching",
  "coaching.localhost:3000": "coaching",
};

const SLUGS = new Set(Object.values(DOMAINS));

export function proxy(request: NextRequest) {
  const host = (request.headers.get("host") ?? "").toLowerCase().replace(/^www\./, "");
  const site = DOMAINS[host];
  const { pathname } = request.nextUrl;

  const url = request.nextUrl.clone();

  // Unknown host, or a site's folder requested directly (e.g. /moving on any
  // domain): send to a path no route matches, which renders app/global-not-found.tsx with a 404.
  const firstSegment = pathname.split("/")[1];
  if (!site || SLUGS.has(firstSegment)) {
    url.pathname = "/__not-found";
    return NextResponse.rewrite(url);
  }

  url.pathname = `/${site}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip Next internals, API routes, and any path with a file extension (public assets).
  matcher: ["/((?!_next/|api/|.*\\..*).*)"],
};
