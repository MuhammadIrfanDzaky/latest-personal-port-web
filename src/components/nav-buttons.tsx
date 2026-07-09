"use client";

import clsx from "clsx";
import { useLang } from "@/lib/lang-store";
import {
  switchSection,
  useSection,
  type SectionId,
} from "@/lib/section-store";

const items: Exclude<SectionId, "home">[] = ["projects", "about", "contact"];

export function NavButtons() {
  const active = useSection();
  const { t } = useLang();

  return (
    <nav
      aria-label={t.a11y.primaryNav}
      className="hidden items-center gap-7 font-mono text-xs uppercase tracking-[0.14em] lg:flex"
    >
      {items.map((id) => (
        <button
          key={id}
          type="button"
          onClick={() => switchSection(id)}
          aria-current={active === id ? "true" : undefined}
          className={clsx(
            "transition-colors hover:text-rust",
            active === id ? "text-rust" : "text-soft"
          )}
        >
          {t.nav[id]}
        </button>
      ))}
    </nav>
  );
}
