import Link from "next/link";
import { NavLinks } from "./nav-links";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-sm">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-5 md:px-8">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight"
          aria-label="Jek — home"
        >
          jek<span className="text-rust">.</span>
        </Link>
        <div className="flex items-center gap-4 md:gap-7">
          <NavLinks />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
