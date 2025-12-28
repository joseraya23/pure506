import Image from "next/image";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          {/* Mobile: icon only */}
          <Image
            src="/logo/pure506-mark.png"
            alt="Pure 506"
            width={34}
            height={34}
            priority
            className="block sm:hidden"
          />

          {/* Desktop: full logo */}
          <Image
            src="/logo/pure506-logo-full.png"
            alt="Pure 506 — Discover Costa Rica"
            width={190}
            height={52}
            priority
            className="hidden sm:block h-10 w-auto"
          />

          <span className="sr-only">Pure 506</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-neutral-700 sm:flex">
          <Link className="hover:text-neutral-900" href="/blog">
            Blog
          </Link>
          <Link className="hover:text-neutral-900" href="/guides">
            Guides
          </Link>
          <Link className="hover:text-neutral-900" href="/about">
            About
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/blog"
            className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
          >
            Start here
          </Link>
        </div>
      </div>
    </header>
  );
}
