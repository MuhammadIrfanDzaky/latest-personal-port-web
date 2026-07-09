import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-start px-5 py-24 md:px-8 md:py-36">
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-soft">
        404 — Not found
      </p>
      <h1 className="mt-4 font-display text-[clamp(2.4rem,6vw,4rem)] font-semibold tracking-tight">
        Nothing here<span className="text-rust">.</span> Which is odd, because I
        usually document everything.
      </h1>
      <Link
        href="/"
        className="wipe-link mt-8 font-mono text-xs uppercase tracking-[0.14em]"
      >
        ← Back to the home page
      </Link>
    </div>
  );
}
