"use client";

import { useEffect } from "react";

const KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid"];
export const UTM_STORAGE_KEY = "halden-utm";

/**
 * Meta ads land visitors with utm_* and fbclid in the URL. Those disappear once they
 * click through to /quiz, so keep them for the session and send them with the quiz lead.
 */
export function UtmCapture() {
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const found: Record<string, string> = {};
      for (const k of KEYS) {
        const v = params.get(k);
        if (v) found[k] = v;
      }
      if (Object.keys(found).length) sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(found));
    } catch {
      // Storage blocked (private mode etc.): attribution is optional.
    }
  }, []);
  return null;
}

export function readUtm(): Record<string, string> {
  try {
    const params = new URLSearchParams(window.location.search);
    const stored = JSON.parse(sessionStorage.getItem(UTM_STORAGE_KEY) ?? "{}") as Record<string, string>;
    for (const k of KEYS) {
      const v = params.get(k);
      if (v) stored[k] = v;
    }
    return stored;
  } catch {
    return {};
  }
}
