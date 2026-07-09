import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Jek — full-stack web developer in Medan, Indonesia. Open to full-time roles and interesting builds.",
};

const channels = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    note: "Fastest. Usually answered within a day.",
  },
  {
    label: "GitHub",
    value: "github.com/MuhammadIrfanDzaky",
    href: site.github,
    note: "The code, including the imperfect parts.",
  },
  {
    label: "LinkedIn",
    value: "muhammad-irfan-dzaky",
    href: site.linkedin,
    note: "For the formal version of all this.",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
      <section className="pb-16 pt-14 md:pb-24 md:pt-24">
        <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.16em] text-soft">
          Contact — Medan, ID (GMT+7)
        </p>
        <h1 className="font-display text-[clamp(2.6rem,7vw,5rem)] font-semibold leading-[1.02] tracking-tight">
          Say hello<span className="text-rust">.</span>
        </h1>
        <p className="mt-7 max-w-xl text-lg leading-relaxed text-soft">
          Hiring for a full-stack role, need a hand on a build, or just want a
          second pair of eyes on something? My inbox is open.
        </p>

        <ul className="mt-14 border-t border-line">
          {channels.map((channel) => (
            <li key={channel.label}>
              <a
                href={channel.href}
                target={channel.href.startsWith("mailto") ? undefined : "_blank"}
                rel={channel.href.startsWith("mailto") ? undefined : "noreferrer"}
                className="group grid grid-cols-12 items-baseline gap-x-4 gap-y-1 border-b border-line py-8"
              >
                <span className="col-span-12 font-mono text-[11px] uppercase tracking-[0.16em] text-soft md:col-span-2">
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
                <span className="col-span-12 text-sm text-soft md:col-span-4 md:text-right">
                  {channel.note}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.14em] text-soft">
          No contact form. Forms are where messages go to be ignored.
        </p>
      </section>
    </div>
  );
}
