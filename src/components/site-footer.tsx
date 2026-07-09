import { LocalTime } from "./local-time";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 py-8 font-mono text-[11px] uppercase tracking-[0.14em] text-soft md:flex-row md:items-center md:justify-between md:px-8">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <p className="flex items-center gap-2">
          <span className="inline-block size-1.5 rounded-full bg-rust" aria-hidden />
          Medan, ID — <LocalTime />
        </p>
        <p>Built with Next.js. No template.</p>
      </div>
    </footer>
  );
}
