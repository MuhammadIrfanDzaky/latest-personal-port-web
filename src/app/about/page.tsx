import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Who Jek is, how he works, and the journey from internship to leading junior developers at RevoU.",
};

const principles = [
  {
    title: "Server-first, client where it's earned.",
    body: "Most UI doesn't need JavaScript to exist — it needs it to react. I default to server rendering and spend the client budget only where interaction genuinely pays for it.",
  },
  {
    title: "Readable beats clever.",
    body: "Code gets read by juniors, reviewers, and a future me with no memory of writing it. If a beginner can't follow the logic, that's usually the logic's fault, not the beginner's.",
  },
  {
    title: "Write it down.",
    body: "An undocumented decision is a scheduled argument. I write READMEs, runbooks, and decision notes nobody asked for — and people keep ending up using them.",
  },
  {
    title: "Sweat the last four pixels.",
    body: "The gap between “works” and “feels right” lives in spacing, focus states, empty states, and error copy. That gap is where users decide whether they trust the thing.",
  },
];

const timeline = [
  {
    period: "2026 — now",
    title: "Team Lead (part-time) — RevoU",
    body: "I guide a cohort of ten beginner full-stack developers through their first real codebases: twice-weekly group sessions, code review, and the slow, satisfying work of turning “it runs” into “I understand why it runs.” Teaching is the best code review training there is.",
  },
  {
    period: "2025",
    title: "From training intensively to shipping constantly",
    body: "A year of compounding: an intensive full-stack program at RevoU with DRIBBLE as the capstone, freelance work shipped for real clients alongside it, then team builds — backend engineer on a booking microservice, project manager on a PRD-driven product. Different seats, same lesson: software is a team sport played in writing.",
  },
  {
    period: "2023",
    title: "Intern — Medan City Dept. of Communication & Informatics",
    body: "Built a web-based information system that centralized internship reports for mentors, sat in the agile ceremonies, and ran a post-design evaluation with actual users. First contact with the truth that shipping is a conversation, not a handoff.",
  },
];

const interests = [
  {
    title: "AI-assisted building",
    body: "Vibe coding with the safety on. AI is a permanent part of my workflow — for speed, not for judgment.",
    wide: true,
  },
  {
    title: "Technical writing",
    body: "READMEs, runbooks, decision docs. Writing is how I find out whether I actually understand something.",
    wide: false,
  },
  {
    title: "Tax & accounting systems",
    body: "The unglamorous software that saves real people entire days. Rules, edge cases, and consequences — my favorite kind of problem space.",
    wide: false,
  },
  {
    title: "Games, studied closely",
    body: "Mostly story-heavy ones. The best games teach complex mechanics without a manual — it's the sharpest onboarding design anywhere, and I steal from it.",
    wide: true,
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
      {/* ————— Bio ————— */}
      <section className="grid grid-cols-12 gap-x-6 pb-16 pt-14 md:pb-24 md:pt-24">
        <div className="col-span-12 md:col-span-9">
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.16em] text-soft">
            About
          </p>
          <h1 className="font-display text-[clamp(2.4rem,6vw,4.3rem)] font-semibold leading-[1.05] tracking-tight">
            Goes by Jek. Builds the{" "}
            <em className="font-serif font-normal text-rust">whole</em> thing.
          </h1>
        </div>
        <div className="col-span-12 mt-10 max-w-2xl space-y-6 text-lg leading-relaxed text-soft md:col-span-8 md:col-start-4">
          <p>
            I&apos;m a full-stack developer based in Medan, Indonesia. The part
            of the job I love most is the hand-off between layers — the moment a
            data model, an API, and an interface stop being three separate
            things and start feeling like one product. I&apos;d rather own that
            whole arc than any single slice of it.
          </p>
          <p>
            Twice a week I trade my editor for a whiteboard and lead ten junior
            developers at RevoU through their first real projects. Explaining
            code to beginners is merciless feedback on your own habits: every
            shortcut you can&apos;t justify out loud is a shortcut you probably
            shouldn&apos;t have taken.
          </p>
          <p className="text-ink">
            And yes — I build with AI in the loop. I treat it like an extremely
            fast junior developer: it types quicker than I ever will, but
            nothing ships until I&apos;ve read every line. The taste, the
            architecture, and the blame stay fully human.
          </p>
        </div>
      </section>

      {/* ————— Working style ————— */}
      <section className="pb-8 pt-4 md:pt-8">
        <SectionHeading index="01" title="How I work" />
        <ol className="mt-10">
          {principles.map((principle, i) => (
            <li key={principle.title}>
              <Reveal delay={i * 50}>
                <div className="grid grid-cols-12 gap-x-4 gap-y-2 border-b border-line py-8">
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
      <section className="pb-8 pt-20 md:pt-28">
        <SectionHeading index="02" title="The journey so far" />
        <ol className="mt-10">
          {timeline.map((entry, i) => (
            <li key={entry.period}>
              <Reveal delay={i * 50}>
                <div className="grid grid-cols-12 gap-x-4 gap-y-2 border-b border-line py-8">
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
      <section className="pb-24 pt-20 md:pt-28">
        <SectionHeading index="03" title="Off the clock, still on the craft" />
        <div className="mt-10 grid grid-cols-12 gap-5">
          {interests.map((interest) => (
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
