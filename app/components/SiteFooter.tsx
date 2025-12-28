import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-neutral-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-3">
        <div>
          <div className="font-semibold text-neutral-900">Pure 506</div>
          <p className="mt-3 text-sm text-neutral-600">
            Costa Rica travel guides, itineraries, and hidden gems — practical, honest,
            and easy to follow.
          </p>
        </div>

        <div className="text-sm">
          <div className="font-medium text-neutral-900">Explore</div>
          <div className="mt-3 grid gap-2 text-neutral-700">
            <Link className="hover:text-neutral-900" href="/blog">Blog</Link>
            <Link className="hover:text-neutral-900" href="/guides">Guides</Link>
            <Link className="hover:text-neutral-900" href="/about">About</Link>
          </div>
        </div>

        <div className="text-sm">
          <div className="font-medium text-neutral-900">Legal</div>
          <div className="mt-3 grid gap-2 text-neutral-700">
            <Link className="hover:text-neutral-900" href="/privacy">Privacy</Link>
            <Link className="hover:text-neutral-900" href="/terms">Terms</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-neutral-500">
          © {new Date().getFullYear()} Pure 506. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
