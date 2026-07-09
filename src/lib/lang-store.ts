"use client";

import { useSyncExternalStore } from "react";
import { dictionaries, type Dict, type Lang } from "./i18n";
import { withViewTransition } from "./view-transition";

const STORAGE_KEY = "jek-lang";
const listeners = new Set<() => void>();
let cached: Lang | null = null;

function read(): Lang {
  try {
    return localStorage.getItem(STORAGE_KEY) === "id" ? "id" : "en";
  } catch {
    return "en";
  }
}

function getSnapshot(): Lang {
  if (cached === null) cached = read();
  return cached;
}

const getServerSnapshot = (): Lang => "en";

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

export function setLang(next: Lang) {
  if (next === getSnapshot()) return;
  withViewTransition(() => {
    cached = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // storage unavailable (private mode) — the in-memory value still works
    }
    document.documentElement.lang = next;
    listeners.forEach((listener) => listener());
  });
}

export function useLang(): { lang: Lang; t: Dict } {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return { lang, t: dictionaries[lang] };
}
