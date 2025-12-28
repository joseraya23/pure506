import Link from "next/link";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date?: string;
  readTime?: string;
  tags?: string[];
};

const posts: Post[] = [
  {
    slug: "hidden-waterfalls-costa-rica",
    title: "Hidden Waterfalls in Costa Rica: 7 Spots Most Travelers Miss",
    excerpt:
      "A practical guide to lesser-known waterfalls in Costa Rica—how to get there, what to expect, and tips to visit responsibly.",
    date: "2025-12-27",
    readTime: "8 min",
    tags: ["Waterfalls", "Nature", "Off the beaten path"],
  },
  {
    slug: "costa-rica-itinerary-7-days",
    title: "Costa Rica Itinerary: 7 Days (Beach + Volcano + Rainforest)",
    excerpt:
      "A balanced 7-day route combining iconic highlights with realistic driving times, plus lodging suggestions and daily plans.",
    date: "2025-12-27",
    readTime: "10 min",
    tags: ["Itinerary", "Planning", "First time"],
  },
];

export const metadata = {
  title: "Blog | Pure 506",
  description:
    "Costa Rica guides, itineraries, and hidden gems to help you plan an unforgettable trip.",
};

export default function BlogIndexPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <header className="mb-8">
        <h1 className="text-4xl font-semibold tracking-tight">
          Pure 506 Blog
        </h1>
        <p className="mt-3 text-base text-neutral-600">
          Authentic Costa Rica guides, itineraries, and hidden gems.
        </p>
      </header>

      <section className="grid gap-5 sm:grid-cols-2">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-neutral-500">
              {post.date && <span>{formatDate(post.date)}</span>}
              {post.readTime && <span>• {post.readTime}</span>}
            </div>

            <h2 className="mt-3 text-xl font-semibold leading-snug">
              <Link href={`/blog/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </h2>

            <p className="mt-3 text-neutral-700">
              {post.excerpt}
            </p>

            {post.tags && (
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-5">
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:underline"
              >
                Read article →
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(y, (m ?? 1) - 1, d ?? 1);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}
