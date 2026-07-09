"use client";

import { Reveal } from "@/components/reveal";
import { useLang } from "@/lib/lang-store";
import type { Dict } from "@/lib/i18n";

type ProjectItem = Dict["projects"]["items"][number];
type Labels = Dict["projects"]["labels"];

function MetaList({ item, labels }: { item: ProjectItem; labels: Labels }) {
  return (
    <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-[0.14em]">
      <dt className="text-soft">{labels.role}</dt>
      <dd>{item.role}</dd>
      <dt className="text-soft">{labels.context}</dt>
      <dd>{item.context}</dd>
      <dt className="text-soft">{labels.year}</dt>
      <dd>{item.year}</dd>
      <dt className="text-soft">{labels.stack}</dt>
      <dd>{item.stack}</dd>
    </dl>
  );
}

function Story({ item, labels }: { item: ProjectItem; labels: Labels }) {
  return (
    <div className="space-y-5 leading-relaxed text-soft">
      <p>
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-rust">
          {labels.problem}
        </span>
        {item.problem}
      </p>
      <p>
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-rust">
          {labels.build}
        </span>
        {item.build}
      </p>
      <p className="text-ink">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-rust">
          {labels.taught}
        </span>
        {item.outcome}
      </p>
    </div>
  );
}

export function ProjectsSection() {
  const { t } = useLang();
  const p = t.projects;
  const [dribble, daycare, pitchcrush, tiketq] = p.items;
  const labels = p.labels;

  return (
    <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
      <header className="border-b border-line pb-8 pt-8 md:pt-12">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-soft">
          {p.eyebrow}
        </p>
        <h2 className="font-display text-[clamp(2.2rem,6vw,3.8rem)] font-semibold tracking-tight">
          {p.title}
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-soft">{p.intro}</p>
      </header>

      {/* 001 — DRIBBLE: full-bleed feature, story left / meta right */}
      <article id={dribble.slug} className="scroll-mt-24 border-b border-line py-10 md:py-14">
        <Reveal>
          <p className="font-mono text-xs text-soft">001</p>
          <h3 className="mt-2 font-display text-4xl font-semibold tracking-tight md:text-6xl">
            {dribble.name}
          </h3>
          <p className="mt-3 font-serif text-xl text-rust md:text-2xl">{dribble.essence}</p>
          <div className="mt-8 grid grid-cols-12 gap-x-6 gap-y-8">
            <div className="col-span-12 max-w-2xl md:col-span-7">
              <Story item={dribble} labels={labels} />
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9">
              <div className="border-t-2 border-ink pt-4">
                <MetaList item={dribble} labels={labels} />
              </div>
            </div>
          </div>
        </Reveal>
      </article>

      {/* 002 — Daycare SaaS: mirrored, content pushed right */}
      <article id={daycare.slug} className="scroll-mt-24 border-b border-line py-10 md:py-14">
        <Reveal>
          <div className="grid grid-cols-12 gap-x-6 gap-y-8">
            <div className="col-span-12 md:col-span-3">
              <p className="font-mono text-xs text-soft">002</p>
              <div className="mt-4 border-t-2 border-ink pt-4">
                <MetaList item={daycare} labels={labels} />
              </div>
            </div>
            <div className="col-span-12 md:col-span-8 md:col-start-5">
              <h3 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
                {daycare.name}
              </h3>
              <p className="mt-3 font-serif text-xl text-rust">{daycare.essence}</p>
              <div className="mt-6 max-w-2xl">
                <Story item={daycare} labels={labels} />
              </div>
            </div>
          </div>
        </Reveal>
      </article>

      {/* 003 — PitchCrush AI: centered-narrow, the one earned centering */}
      <article id={pitchcrush.slug} className="scroll-mt-24 border-b border-line py-10 md:py-14">
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <p className="font-mono text-xs text-soft">003</p>
            <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-5xl">
              {pitchcrush.name}
            </h3>
            <p className="mt-3 font-serif text-xl text-rust">{pitchcrush.essence}</p>
            <div className="mt-6">
              <Story item={pitchcrush} labels={labels} />
            </div>
            <div className="mt-6 border-l-2 border-rust pl-5">
              <MetaList item={pitchcrush} labels={labels} />
            </div>
          </div>
        </Reveal>
      </article>

      {/* 004 — TiketQ: compact engineering-log style */}
      <article id={tiketq.slug} className="scroll-mt-24 border-b border-line py-10 md:py-14">
        <Reveal>
          <div className="grid grid-cols-12 gap-x-6 gap-y-8">
            <div className="col-span-12 md:col-span-5">
              <p className="font-mono text-xs text-soft">004</p>
              <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-5xl">
                {tiketq.name}
              </h3>
              <p className="mt-3 font-serif text-xl text-rust">{tiketq.essence}</p>
              <div className="mt-6">
                <MetaList item={tiketq} labels={labels} />
              </div>
            </div>
            <div className="col-span-12 max-w-2xl md:col-span-6 md:col-start-7">
              <Story item={tiketq} labels={labels} />
            </div>
          </div>
        </Reveal>
      </article>

      {/* Footnotes */}
      <section className="py-10 md:py-14">
        <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-soft">
          {labels.also}
        </h3>
        <ul className="mt-5">
          {p.alsoBuilt.map((item) => (
            <li
              key={item.name}
              className="grid grid-cols-12 gap-x-4 gap-y-1 border-b border-line py-5"
            >
              <span className="col-span-12 font-mono text-xs text-soft md:col-span-1">
                {item.year}
              </span>
              <h4 className="col-span-12 font-display text-lg font-medium tracking-tight md:col-span-4">
                {item.name}
              </h4>
              <p className="col-span-12 text-[0.95rem] leading-relaxed text-soft md:col-span-7">
                {item.note}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
