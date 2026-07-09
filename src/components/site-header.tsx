"use client";

import { NavButtons } from "./nav-buttons";
import { LanguageToggle } from "./language-toggle";
import { ThemeToggle } from "./theme-toggle";
import { switchSection } from "@/lib/section-store";
import { useLang } from "@/lib/lang-store";

export function SiteHeader() {
  const { t } = useLang();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-sm">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-5 md:px-8">
        <button
          type="button"
          onClick={() => switchSection("home")}
          className="font-display text-lg font-semibold tracking-tight"
          aria-label={t.nav.home}
        >
          jek<span className="text-rust">.</span>
        </button>
        <div className="flex items-center gap-3 lg:gap-6">
          <NavButtons />
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
