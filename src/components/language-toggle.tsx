"use client";

import { useEffect } from "react";
import clsx from "clsx";
import { setLang, useLang } from "@/lib/lang-store";
import type { Lang } from "@/lib/i18n";

const options: Lang[] = ["en", "id"];

export function LanguageToggle() {
  const { lang, t } = useLang();

  // Keep the document language attribute honest for screen readers / SEO.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div
      role="group"
      aria-label={t.a11y.langSwitch}
      className="flex h-8 items-stretch border border-line font-mono text-[11px] uppercase tracking-[0.1em]"
    >
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLang(option)}
          aria-pressed={lang === option}
          className={clsx(
            "px-2.5 transition-colors",
            lang === option
              ? "bg-rust text-bg"
              : "text-soft hover:text-rust"
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
