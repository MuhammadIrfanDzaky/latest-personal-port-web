"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { useLang } from "@/lib/lang-store";
import { withViewTransition } from "@/lib/view-transition";

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const { t } = useLang();
  // true on the client after hydration, false during SSR — without a
  // setState-in-effect cascade
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const dark = resolvedTheme === "dark";

  const toggle = () => {
    const next = dark ? "light" : "dark";
    // withViewTransition wraps the update in flushSync so the theme class is
    // committed inside the transition snapshot; the manual class/color-scheme
    // writes guarantee the DOM is final even before next-themes' own effect.
    withViewTransition(() => {
      setTheme(next);
      document.documentElement.classList.toggle("dark", next === "dark");
      document.documentElement.style.colorScheme = next;
    });
  };

  return (
    <button
      type="button"
      aria-label={
        !mounted ? t.a11y.toggleTheme : dark ? t.a11y.toLight : t.a11y.toDark
      }
      onClick={toggle}
      className="flex size-8 items-center justify-center border border-line text-soft transition-colors hover:border-rust hover:text-rust"
    >
      {!mounted ? (
        <span className="size-2 bg-line" aria-hidden />
      ) : dark ? (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1" />
        </svg>
      ) : (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      )}
    </button>
  );
}
