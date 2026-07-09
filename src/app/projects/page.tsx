import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { projects, alsoBuilt, type Project } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected work by Jek — full-stack products built with Next.js, NestJS, and PostgreSQL, from capstone platforms to freelance SaaS and AI tools.",
};

const [dribble, daycare, pitchcrush, tiketq] = projects;

function MetaList({ project }: { project: Project }) {
  return (
    <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.14em]">
      <dt className="text-soft">Role</dt>
      <dd>{project.role}</dd>
      <dt className="text-soft">Context</dt>
      <dd>{project.context}</dd>
      <dt className="text-soft">Year</dt>
      <dd>{project.year}</dd>
      <dt className="text-soft">Stack</dt>
      <dd>{project.stack.join(" · ")}</dd>
    </dl>
  );
}

function Story({ project }: { project: Project }) {
  return (
    <div className="space-y-5 leading-relaxed text-soft">
      <p>
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-rust">
          The problem —{" "}
        </span>
        {project.problem}
      </p>
      <p>
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-rust">
          The build —{" "}
        </span>
        {project.build}
      </p>
      <p className="text-ink">
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-rust">
          What it taught me —{" "}
        </span>
        {project.outcome}
      </p>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
      <header className="border-b border-line pb-12 pt-14 md:pt-24">
        <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.16em] text-soft">
          Index — {projects.length} builds, {alsoBuilt.length} footnotes
        </p>
        <h1 className="font-display text-[clamp(2.4rem,6vw,4.3rem)] font-semibold tracking-tight">
          Projects
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-soft">
          Each one written up the way I&apos;d explain it in an interview:
          the problem, what I actually built, and what it changed in how I work.
        </p>
      </header>

      {/* 001 — DRIBBLE: full-bleed feature, story left / meta right */}
      <article id={dribble.slug} className="scroll-mt-24 border-b border-line py-16 md:py-20">
        <Reveal>
          <p className="font-mono text-xs text-soft">001</p>
          <h2 className="mt-2 font-display text-5xl font-semibold tracking-tight md:text-7xl">
            {dribble.name}
          </h2>
          <p className="mt-3 font-serif text-xl text-rust md:text-2xl">{dribble.essence}</p>
          <div className="mt-10 grid grid-cols-12 gap-x-6 gap-y-8">
            <div className="col-span-12 max-w-2xl md:col-span-7">
              <Story project={dribble} />
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9">
              <div className="border-t-2 border-ink pt-4">
                <MetaList project={dribble} />
              </div>
            </div>
          </div>
        </Reveal>
      </article>

      {/* 002 — Daycare SaaS: mirrored, content pushed right */}
      <article id={daycare.slug} className="scroll-mt-24 border-b border-line py-16 md:py-20">
        <Reveal>
          <div className="grid grid-cols-12 gap-x-6 gap-y-8">
            <div className="col-span-12 md:col-span-3">
              <p className="font-mono text-xs text-soft">002</p>
              <div className="mt-4 border-t-2 border-ink pt-4">
                <MetaList project={daycare} />
              </div>
            </div>
            <div className="col-span-12 md:col-span-8 md:col-start-5">
              <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
                {daycare.name}
              </h2>
              <p className="mt-3 font-serif text-xl text-rust">{daycare.essence}</p>
              <div className="mt-8 max-w-2xl">
                <Story project={daycare} />
              </div>
            </div>
          </div>
        </Reveal>
      </article>

      {/* 003 — PitchCrush AI: centered-narrow, the one earned centering */}
      <article id={pitchcrush.slug} className="scroll-mt-24 border-b border-line py-16 md:py-20">
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <p className="font-mono text-xs text-soft">003</p>
            <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight md:text-5xl">
              {pitchcrush.name}
            </h2>
            <p className="mt-3 font-serif text-xl text-rust">{pitchcrush.essence}</p>
            <div className="mt-8">
              <Story project={pitchcrush} />
            </div>
            <div className="mt-8 border-l-2 border-rust pl-5">
              <MetaList project={pitchcrush} />
            </div>
          </div>
        </Reveal>
      </article>

      {/* 004 — TiketQ: compact engineering-log style */}
      <article id={tiketq.slug} className="scroll-mt-24 border-b border-line py-16 md:py-20">
        <Reveal>
          <div className="grid grid-cols-12 gap-x-6 gap-y-8">
            <div className="col-span-12 md:col-span-5">
              <p className="font-mono text-xs text-soft">004</p>
              <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight md:text-5xl">
                {tiketq.name}
              </h2>
              <p className="mt-3 font-serif text-xl text-rust">{tiketq.essence}</p>
              <div className="mt-6">
                <MetaList project={tiketq} />
              </div>
            </div>
            <div className="col-span-12 max-w-2xl md:col-span-6 md:col-start-7">
              <Story project={tiketq} />
            </div>
          </div>
        </Reveal>
      </article>

      {/* Footnotes */}
      <section className="py-16 md:py-20">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-soft">
          Also built
        </h2>
        <ul className="mt-6">
          {alsoBuilt.map((item) => (
            <li
              key={item.name}
              className="grid grid-cols-12 gap-x-4 gap-y-1 border-b border-line py-5"
            >
              <span className="col-span-12 font-mono text-xs text-soft md:col-span-1">
                {item.year}
              </span>
              <h3 className="col-span-12 font-display text-lg font-medium tracking-tight md:col-span-4">
                {item.name}
              </h3>
              <p className="col-span-12 text-sm leading-relaxed text-soft md:col-span-7">
                {item.note}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
