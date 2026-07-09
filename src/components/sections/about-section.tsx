"use client";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { useLang } from "@/lib/lang-store";

export function AboutSection() {
  const { t } = useLang();
  const a = t.about;

  return (
    <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
      {/* ————— Bio ————— */}
      <section className="grid grid-cols-12 gap-x-6 pb-10 pt-8 md:pb-14 md:pt-12">
        <div className="col-span-12 md:col-span-9">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-soft">
            {a.eyebrow}
          </p>
          <h2 className="font-display text-[clamp(2.2rem,6vw,3.8rem)] font-semibold leading-[1.05] tracking-tight">
            {a.h1Before}
            <em className="font-serif font-normal text-rust">{a.h1Em}</em>
            {a.h1After}
          </h2>
        </div>
        <div className="col-span-12 mt-8 max-w-2xl space-y-6 text-lg leading-relaxed text-soft md:col-span-8 md:col-start-4">
          {a.bio.map((paragraph, i) => (
            <p key={i} className={i === a.bio.length - 1 ? "text-ink" : undefined}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* ————— Working style ————— */}
      <section className="pb-6 pt-2">
        <SectionHeading index="01" title={a.principlesTitle} />
        <ol className="mt-8">
          {a.principles.map((principle, i) => (
            <li key={principle.title}>
              <Reveal delay={i * 50}>
                <div className="grid grid-cols-12 gap-x-4 gap-y-2 border-b border-line py-6">
                  <span className="col-span-12 font-mono text-xs text-rust md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="col-span-12 font-display text-2xl font-medium tracking-tight md:col-span-4">
                    {principle.title}
                  </h3>
                  <p className="col-span-12 max-w-xl leading-relaxed text-soft md:col-span-6 md:col-start-7">
                    {principle.body}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {/* ————— Journey ————— */}
      <section className="pb-6 pt-10 md:pt-14">
        <SectionHeading index="02" title={a.journeyTitle} />
        <ol className="mt-8">
          {a.journey.map((entry, i) => (
            <li key={entry.period}>
              <Reveal delay={i * 50}>
                <div className="grid grid-cols-12 gap-x-4 gap-y-2 border-b border-line py-6">
                  <span className="col-span-12 font-mono text-xs uppercase tracking-[0.14em] text-soft md:col-span-2">
                    {entry.period}
                  </span>
                  <div className="col-span-12 md:col-span-9 md:col-start-4">
                    <h3 className="font-display text-2xl font-medium tracking-tight">
                      {entry.title}
                    </h3>
                    <p className="mt-3 max-w-2xl leading-relaxed text-soft">
                      {entry.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {/* ————— Interests ————— */}
      <section className="pb-12 pt-10 md:pb-16 md:pt-14">
        <SectionHeading index="03" title={a.interestsTitle} />
        <div className="mt-8 grid grid-cols-12 gap-5">
          {a.interests.map((interest) => (
            <Reveal
              key={interest.title}
              className={
                interest.wide
                  ? "col-span-12 md:col-span-7"
                  : "col-span-12 md:col-span-5"
              }
            >
              <div className="h-full border border-line bg-surface/60 p-7">
                <h3 className="font-display text-xl font-medium tracking-tight">
                  {interest.title}
                </h3>
                <p className="mt-3 leading-relaxed text-soft">{interest.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
