import Link from "next/link";

export const metadata = {
  title: "Pure 506 | Authentic Costa Rica Travel Guides",
  description:
    "Pure 506 shares authentic Costa Rica travel guides, hidden gems, and local-style itineraries for curious travelers.",
};

export default function HomePage() {
  return (
    <main style={{ padding: "32px", fontFamily: "system-ui", maxWidth: "900px", margin: "0 auto" }}>
      <header style={{ marginBottom: "24px" }}>
        <p style={{ margin: 0, fontWeight: 700, letterSpacing: "0.5px" }}>PURE 506</p>
        <h1 style={{ fontSize: "38px", margin: "10px 0 8px" }}>
          Authentic Costa Rica travel guides, made simple.
        </h1>
        <p style={{ fontSize: "18px", margin: 0, lineHeight: 1.6 }}>
          Explore hidden gems, practical tips, and local-style itineraries for travelers who want the real Costa Rica.
        </p>
      </header>

      <section style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "28px" }}>
        <Link
          href="/blog"
          style={{
            display: "inline-block",
            padding: "12px 16px",
            borderRadius: "12px",
            border: "1px solid #ddd",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          Go to Blog
        </Link>

        <Link
          href="/blog/hidden-waterfalls-costa-rica"
          style={{
            display: "inline-block",
            padding: "12px 16px",
            borderRadius: "12px",
            border: "1px solid #ddd",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          Read: Hidden Waterfalls
        </Link>
      </section>

      <section>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>Start here</h2>
        <ul style={{ paddingLeft: "18px", margin: 0, lineHeight: 1.8 }}>
          <li>
            <Link href="/blog/hidden-waterfalls-costa-rica">7 Hidden Waterfalls in Costa Rica Most Tourists Never See</Link>
          </li>
          <li>
            More guides coming soon.
          </li>
        </ul>
      </section>

      <footer style={{ marginTop: "40px", fontSize: "14px", opacity: 0.75 }}>
        © {new Date().getFullYear()} Pure 506
      </footer>
    </main>
  );
}
