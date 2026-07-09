"use client";

import Image from "next/image";
import { useLang } from "@/lib/lang-store";
import { switchSection } from "@/lib/section-store";

export function Hero() {
  const { t } = useLang();
  const h = t.hero;

  return (
    <section
      className="mx-auto flex min-h-[calc(100dvh-122px-env(safe-area-inset-bottom))] w-full max-w-6xl flex-col px-5 md:px-8 lg:min-h-[calc(100dvh-57px)]"
      aria-label={t.nav.home}
    >
      <div className="my-auto grid grid-cols-1 gap-4 py-4 lg:grid-cols-12 lg:items-center lg:gap-x-6 lg:py-8">
        {/* Photo — first in DOM so it sits on top on mobile */}
        <figure className="lg:col-span-4 lg:col-start-9 lg:row-start-1">
          <div className="relative lg:ml-auto lg:max-w-[340px]">
            <div
              aria-hidden
              className="absolute -bottom-3 -right-3 hidden h-full w-full border border-rust lg:block"
            />
            <div className="relative h-[min(24dvh,300px)] w-full overflow-hidden border border-line lg:aspect-[4/5] lg:h-auto">
              <Image
                src="/jek.jpg"
                alt={h.photoAlt}
                fill
                priority
                sizes="(min-width: 1024px) 340px, 100vw"
                className="object-cover object-[50%_22%] lg:object-center"
              />
            </div>
          </div>
          <figcaption className="mt-3 hidden font-mono text-[11px] uppercase tracking-[0.16em] text-soft lg:block lg:text-right">
            {h.photoCaption}
          </figcaption>
        </figure>

        {/* Text */}
        <div className="lg:col-span-7 lg:row-start-1">
          <p className="mb-2 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-soft lg:mb-5 lg:text-xs">
            <span className="inline-block size-1.5 rounded-full bg-rust" aria-hidden />
            {h.eyebrow}
          </p>
          <h1 className="font-display text-[clamp(1.75rem,7.5vw,2.7rem)] font-semibold leading-[1.04] tracking-tight lg:text-[clamp(2.6rem,4.4vw,4rem)]">
            {h.name}
            <span className="text-rust">.</span>
          </h1>
          <p className="mt-2 font-display text-[clamp(1rem,4vw,1.3rem)] font-medium leading-snug tracking-tight lg:mt-4 lg:text-2xl">
            {h.taglinePlain}
            <em className="font-serif font-normal text-rust">{h.taglineEm}</em>
          </p>
          <p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-soft lg:mt-5 lg:text-lg">
            {h.sub}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-5 lg:mt-8 lg:gap-7">
            <button
              type="button"
              onClick={() => switchSection("projects")}
              className="group inline-flex items-center gap-2 border border-ink px-4 py-2.5 font-mono text-xs uppercase tracking-[0.14em] transition-colors hover:border-rust hover:bg-rust hover:text-bg lg:px-5 lg:py-3"
            >
              {h.ctaProjects}
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
            <button
              type="button"
              onClick={() => switchSection("contact")}
              className="wipe-link font-mono text-xs uppercase tracking-[0.14em]"
            >
              {h.ctaContact}
            </button>
          </div>
        </div>
      </div>

      {/* Currently strip — pinned to the bottom of the hero screen, desktop only */}
      <div className="hidden grid-cols-3 border-t border-line pb-2 font-mono text-xs uppercase tracking-[0.14em] text-soft lg:grid">
        <p className="border-r border-line py-4 pr-6">
          <span className="text-rust">{h.strip.nowLabel}</span>
          {" — "}
          {h.strip.now}
        </p>
        <p className="border-r border-line px-6 py-4">
          <span className="text-rust">{h.strip.buildingLabel}</span>
          {" — "}
          {h.strip.building}
        </p>
        <p className="py-4 pl-6">
          <span className="text-rust">{h.strip.statusLabel}</span>
          {" — "}
          {h.strip.status}
        </p>
      </div>
    </section>
  );
}
