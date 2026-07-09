"use client";

import { useLang } from "@/lib/lang-store";
import { site } from "@/lib/site";

export function ContactSection() {
  const { t } = useLang();
  const c = t.contact;

  const channels = [
    {
      label: c.emailLabel,
      value: site.email,
      href: `mailto:${site.email}`,
      note: c.emailNote,
      external: false,
    },
    {
      label: "GitHub",
      value: "github.com/MuhammadIrfanDzaky",
      href: site.github,
      note: c.githubNote,
      external: true,
    },
    {
      label: "LinkedIn",
      value: "muhammad-irfan-dzaky",
      href: site.linkedin,
      note: c.linkedinNote,
      external: true,
    },
  ];

  return (
    <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
      <section className="pb-12 pt-8 md:pb-16 md:pt-12">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-soft">
          {c.eyebrow}
        </p>
        <h2 className="font-display text-[clamp(2.4rem,7vw,4.5rem)] font-semibold leading-[1.02] tracking-tight">
          {c.title.replace(/\.$/, "")}
          <span className="text-rust">.</span>
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-soft">{c.intro}</p>

        <ul className="mt-10 border-t border-line">
          {channels.map((channel) => (
            <li key={channel.label}>
              <a
                href={channel.href}
                target={channel.external ? "_blank" : undefined}
                rel={channel.external ? "noreferrer" : undefined}
                className="group grid grid-cols-12 items-baseline gap-x-4 gap-y-1 border-b border-line py-6 md:py-7"
              >
                <span className="col-span-12 font-mono text-xs uppercase tracking-[0.16em] text-soft md:col-span-2">
                  {channel.label}
                </span>
                <span className="col-span-12 break-all font-display text-xl font-medium tracking-tight transition-colors group-hover:text-rust md:col-span-6 md:text-3xl">
                  {channel.value}
                  <span
                    aria-hidden
                    className="ml-2 inline-block text-rust opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                  >
                    ↗
                  </span>
                </span>
                <span className="col-span-12 text-[0.95rem] text-soft md:col-span-4 md:text-right">
                  {channel.note}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-8 font-mono text-xs uppercase tracking-[0.14em] text-soft">
          {c.footnote}
        </p>
      </section>
    </div>
  );
}
