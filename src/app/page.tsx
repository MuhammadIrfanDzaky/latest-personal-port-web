import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

const [dribble, ...restProjects] = projects;

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
      {/* ————— Hero ————— */}
      <section className="grid grid-cols-12 items-end gap-x-6 gap-y-10 pb-16 pt-14 md:pb-24 md:pt-24">
        <div className="col-span-12 md:col-span-7">
          <p className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-soft">
            <span className="inline-block size-1.5 rounded-full bg-rust" aria-hidden />
            Full-stack developer — Medan, Indonesia
          </p>
          <h1 className="font-display text-[clamp(2.4rem,6vw,4.3rem)] font-semibold leading-[1.04] tracking-tight">
            I build web software end to end — the schema, the API, and{" "}
            <em className="font-serif font-normal text-rust">
              the way it feels.
            </em>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-soft">
            I&apos;m Jek. I ship products with Next.js, NestJS, and PostgreSQL —
            and spend my part-time hours leading ten junior developers through
            their first real codebases at RevoU.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-7">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 border border-ink px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] transition-colors hover:border-rust hover:bg-rust hover:text-bg"
            >
              Selected work
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link href="/contact" className="wipe-link font-mono text-xs uppercase tracking-[0.14em]">
              Get in touch
            </Link>
          </div>
        </div>

        <div className="col-span-9 col-start-2 md:col-span-4 md:col-start-9">
          <figure>
            <div className="relative">
              <div
                aria-hidden
                className="absolute -bottom-3 -right-3 h-full w-full border border-rust"
              />
              <div className="relative aspect-[4/5] overflow-hidden border border-line">
                <Image
                  src="/jek.jpg"
                  alt="Jek standing on warm asphalt, arms crossed, photographed from above"
                  fill
                  priority
                  sizes="(min-width: 768px) 340px, 70vw"
                  className="object-cover"
                />
              </div>
            </div>
            <figcaption className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-soft">
              Medan, North Sumatra — 3.59°N / 98.67°E
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ————— Currently strip ————— */}
      <div className="grid grid-cols-1 border-y border-line font-mono text-[11px] uppercase tracking-[0.14em] text-soft sm:grid-cols-3">
        <p className="border-b border-line px-1 py-4 sm:border-b-0 sm:border-r sm:pr-6">
          <span className="text-rust">Now</span> — Team lead (part-time), RevoU
        </p>
        <p className="border-b border-line px-1 py-4 sm:border-b-0 sm:border-r sm:px-6">
          <span className="text-rust">Building</span>{" — Products in Next.js & NestJS"}
        </p>
        <p className="px-1 py-4 sm:pl-6">
          <span className="text-rust">Status</span> — Open to full-time roles
        </p>
      </div>

      {/* ————— 01 Selected work ————— */}
      <section className="pb-8 pt-20 md:pt-28">
        <SectionHeading index="01" title="Selected work" />

        {/* Featured project — bigger on purpose */}
        <Reveal>
          <Link
            href={`/projects#${dribble.slug}`}
            className="group mt-12 grid grid-cols-12 gap-x-6 gap-y-6 border-b border-line pb-12"
          >
            <div className="col-span-12 md:col-span-7">
              <p className="font-mono text-xs text-soft">001 / {dribble.year} — {dribble.context}</p>
              <h3 className="mt-3 font-display text-4xl font-semibold tracking-tight transition-colors group-hover:text-rust md:text-6xl">
                {dribble.name}
              </h3>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-soft">
                {dribble.essence} Authentication, live schedules, and role-based
                dashboards for players, admins, and court owners — built end to
                end.
              </p>
            </div>
            <div className="col-span-12 flex flex-col justify-end gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-soft md:col-span-4 md:col-start-9 md:items-end md:text-right">
              <p>{dribble.role}</p>
              <p>{dribble.stack.join(" · ")}</p>
              <p className="mt-3 text-rust">
                Read the case{" "}
                <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </p>
            </div>
          </Link>
        </Reveal>

        {/* Index rows */}
        <ul>
          {restProjects.map((project, i) => (
            <li key={project.slug}>
              <Reveal delay={i * 60}>
                <Link
                  href={`/projects#${project.slug}`}
                  className="group grid grid-cols-12 items-baseline gap-x-4 border-b border-line py-7"
                >
                  <span className="col-span-2 font-mono text-xs text-soft md:col-span-1">
                    {String(i + 2).padStart(3, "0")}
                  </span>
                  <h3 className="col-span-10 font-display text-2xl font-medium tracking-tight transition-colors group-hover:text-rust md:col-span-5 md:text-3xl">
                    {project.name}
                  </h3>
                  <p className="col-span-10 col-start-3 mt-1 text-sm text-soft md:col-span-4 md:col-start-7 md:mt-0">
                    {project.essence}
                  </p>
                  <span className="col-span-10 col-start-3 mt-1 font-mono text-xs text-soft md:col-span-2 md:col-start-11 md:mt-0 md:text-right">
                    {project.year}
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="flex justify-end pt-6">
          <Link href="/projects" className="wipe-link font-mono text-xs uppercase tracking-[0.14em]">
            All projects, with the details →
          </Link>
        </div>
      </section>

      {/* ————— 02 About teaser ————— */}
      <section className="pb-8 pt-20 md:pt-28">
        <SectionHeading index="02" title="About" />
        <div className="mt-12 grid grid-cols-12 gap-x-6 gap-y-8">
          <Reveal className="col-span-12 md:col-span-5">
            <p className="font-serif text-3xl leading-snug text-ink md:-ml-2 md:text-4xl">
              &ldquo;Readable beats clever — in code, and in interfaces.&rdquo;
            </p>
          </Reveal>
          <Reveal delay={80} className="col-span-12 md:col-span-6 md:col-start-7">
            <p className="text-lg leading-relaxed text-soft">
              Most of my taste comes from reading code with beginners twice a
              week: if they can&apos;t follow it, I rewrite it. The same rule
              applies to every screen I ship. I care about the whole arc of a
              product — the data model that doesn&apos;t fight you later, the
              API that reads like documentation, the interface that respects
              people&apos;s time.
            </p>
            <Link
              href="/about"
              className="wipe-link mt-6 inline-block font-mono text-xs uppercase tracking-[0.14em]"
            >
              More about me →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ————— 03 Contact ————— */}
      <section className="pb-24 pt-20 md:pt-28">
        <SectionHeading index="03" title="Contact" />
        <Reveal>
          <div className="mt-12">
            <h3 className="font-display text-[clamp(2rem,5vw,3.6rem)] font-semibold leading-tight tracking-tight">
              Got something worth building?
            </h3>
            <a
              href={`mailto:${site.email}`}
              className="wipe-link mt-6 inline-block font-display text-[clamp(1.2rem,3vw,2rem)] font-medium tracking-tight text-rust"
            >
              {site.email}
            </a>
            <div className="mt-10 flex flex-wrap gap-8 font-mono text-[11px] uppercase tracking-[0.14em] text-soft">
              <a href={site.github} className="wipe-link" target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a href={site.linkedin} className="wipe-link" target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
