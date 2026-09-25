import type { Metadata } from "next";

// Shared by every site, so it carries no branding, fonts, or site styles.
export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          fontFamily: "system-ui, sans-serif",
          background: "#fff",
          color: "#222",
        }}
      >
        <main style={{ textAlign: "center", padding: 16 }}>
          <h1 style={{ fontSize: 20, fontWeight: 500, margin: 0 }}>Page not found</h1>
          <p style={{ fontSize: 14, color: "#666", marginTop: 8 }}>
            <a href="/" style={{ color: "inherit" }}>Go to the home page</a>
          </p>
        </main>
      </body>
    </html>
  );
}
