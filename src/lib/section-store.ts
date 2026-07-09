"use client";

import { useSyncExternalStore } from "react";
import { withViewTransition } from "./view-transition";

export const sectionIds = ["home", "projects", "about", "contact"] as const;
export type SectionId = (typeof sectionIds)[number];

const listeners = new Set<() => void>();
let current: SectionId | null = null;

function parseHash(): SectionId {
  const hash = window.location.hash.replace("#", "");
  return (sectionIds as readonly string[]).includes(hash)
    ? (hash as SectionId)
    : "home";
}

function getSnapshot(): SectionId {
  if (current === null) current = parseHash();
  return current;
}

const getServerSnapshot = (): SectionId => "home";

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

export function switchSection(next: SectionId) {
  if (next === getSnapshot()) return;
  withViewTransition(() => {
    current = next;
    listeners.forEach((listener) => listener());
  });
  window.history.replaceState(
    null,
    "",
    next === "home" ? window.location.pathname : `#${next}`
  );
  window.scrollTo({ top: 0, behavior: "instant" });
}

/** Re-sync from the URL hash (deep links, manual hash edits). */
export function syncSectionFromHash() {
  const parsed = parseHash();
  if (parsed !== current) {
    current = parsed;
    listeners.forEach((listener) => listener());
  }
}

export function useSection(): SectionId {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
