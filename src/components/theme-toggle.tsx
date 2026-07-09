"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  // true on the client after hydration, false during SSR — without a
  // setState-in-effect cascade
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const dark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={
        !mounted
          ? "Toggle theme"
          : dark
            ? "Switch to light theme"
            : "Switch to dark theme"
      }
      onClick={() => setTheme(dark ? "light" : "dark")}
      className="flex size-8 items-center justify-center border border-line text-soft transition-colors hover:border-rust hover:text-rust"
    >
      {!mounted ? (
        <span className="size-2 bg-line" aria-hidden />
      ) : dark ? (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1" />
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      )}
    </button>
  );
}
