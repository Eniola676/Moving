// Icons for the coaching site. All use currentColor.

/** The small curved arrow used in eyebrows and buttons. */
export function Hook({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.5 4.5c0 4.5 3 7 8.5 7" />
      <path d="M8.5 8.5l3 3-3 3" />
    </svg>
  );
}

/** Large solid icons for the method cards. */
export function BigIcon({ name }: { name: "practice" | "mentor" | "growth" }) {
  const common = { width: 104, height: 104, viewBox: "0 0 64 64", "aria-hidden": true as const };
  if (name === "practice")
    return (
      <svg {...common} fill="currentColor">
        <circle cx="21" cy="20" r="8" />
        <circle cx="43" cy="20" r="8" />
        <path d="M6 48c0-8.3 6.7-15 15-15s15 6.7 15 15v2H6z" />
        <path d="M30 50v-2c0-6-2.6-11.4-6.7-15.1A15 15 0 0 1 58 48v2z" opacity=".75" />
      </svg>
    );
  if (name === "mentor")
    return (
      <svg {...common} fill="currentColor">
        <path d="M8 12h32a6 6 0 0 1 6 6v14a6 6 0 0 1-6 6H22l-10 8v-8H8a6 6 0 0 1-6-6V18a6 6 0 0 1 6-6z" />
        <path d="M50 24h4a6 6 0 0 1 6 6v12a6 6 0 0 1-6 6h-2v7l-9-7H32a6 6 0 0 1-5.6-4H40a10 10 0 0 0 10-10z" opacity=".75" />
      </svg>
    );
  return (
    <svg {...common} fill="currentColor">
      <rect x="6" y="10" width="52" height="34" rx="4" />
      <path d="M30 44h4v8l9 6h-22l9-6z" />
      <rect x="16" y="28" width="6" height="10" rx="1.5" fill="var(--paper)" />
      <rect x="29" y="22" width="6" height="16" rx="1.5" fill="var(--paper)" />
      <rect x="42" y="16" width="6" height="22" rx="1.5" fill="var(--paper)" />
    </svg>
  );
}

export function Check({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 8.5l3.2 3L13 4.5" />
    </svg>
  );
}

export function BadgeMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M10 1l2.4 2.1 3.2-.3.7 3.1 2.8 1.6-1.3 2.9 1.3 2.9-2.8 1.6-.7 3.1-3.2-.3L10 19l-2.4-2.1-3.2.3-.7-3.1-2.8-1.6L2.2 9.6.9 6.7l2.8-1.6.7-3.1 3.2.3z" />
    </svg>
  );
}
