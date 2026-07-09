"use client";

import { flushSync } from "react-dom";

type DocumentWithVT = Document & {
  startViewTransition?: (callback: () => void) => unknown;
};

/**
 * Apply a state update inside a View Transition when the browser supports it
 * (and the user hasn't asked for reduced motion), so the whole page
 * cross-fades smoothly. flushSync forces React to commit the DOM change
 * inside the transition's snapshot window.
 */
export function withViewTransition(update: () => void) {
  const doc = document as DocumentWithVT;
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (!doc.startViewTransition || reduceMotion) {
    update();
    return;
  }

  doc.startViewTransition(() => {
    flushSync(update);
  });
}
