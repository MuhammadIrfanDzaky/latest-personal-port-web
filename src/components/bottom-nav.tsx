"use client";

import clsx from "clsx";
import { useLang } from "@/lib/lang-store";
import {
  sectionIds,
  switchSection,
  useSection,
  type SectionId,
} from "@/lib/section-store";

const icons: Record<SectionId, React.ReactNode> = {
  home: (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
    </svg>
  ),
  projects: (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3" y="3" width="7.5" height="7.5" />
      <rect x="13.5" y="3" width="7.5" height="7.5" />
      <rect x="3" y="13.5" width="7.5" height="7.5" />
      <rect x="13.5" y="13.5" width="7.5" height="7.5" />
    </svg>
  ),
  about: (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5" />
    </svg>
  ),
  contact: (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3" y="5" width="18" height="14" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
};

export function BottomNav() {
  const active = useSection();
  const { t } = useLang();

  return (
    <nav
      aria-label={t.a11y.sectionNav}
      className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-bg/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-sm lg:hidden"
    >
      <div className="grid h-16 grid-cols-4">
        {sectionIds.map((id) => (
          <button
            key={id}
            type="button"
            onClick={() => switchSection(id)}
            aria-current={active === id ? "true" : undefined}
            className={clsx(
              "flex flex-col items-center justify-center gap-1 font-mono text-[10px] uppercase tracking-[0.1em] transition-colors",
              active === id ? "text-rust" : "text-soft"
            )}
          >
            {icons[id]}
            {t.nav[id]}
          </button>
        ))}
      </div>
    </nav>
  );
}
