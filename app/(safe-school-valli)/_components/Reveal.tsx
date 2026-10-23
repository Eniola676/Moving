"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Scroll reveal: elements marked data-reveal fade and rise in as they enter the viewport.
 * The inline script in the layout adds `rv` to <html> before first paint so nothing flashes;
 * this component adds `rv-live` once it's running. If it never runs, CSS shows everything anyway.
 */
export function Reveal() {
  const pathname = usePathname();
  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)"));
    if (reduced || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-in"));
      root.classList.add("rv-live");
      return;
    }
    root.classList.add("rv-live");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
  return null;
}

/** Runs before paint: hides reveal targets only when JS is available. */
export const revealBootScript = "document.documentElement.classList.add('rv')";
