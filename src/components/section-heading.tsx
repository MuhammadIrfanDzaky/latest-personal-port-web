export function SectionHeading({
  index,
  title,
  id,
}: {
  index: string;
  title: string;
  id?: string;
}) {
  return (
    <div id={id} className="flex items-center gap-4 scroll-mt-24">
      <span className="font-mono text-xs text-rust" aria-hidden>
        {index}
      </span>
      <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
        {title}
      </h2>
      <div aria-hidden className="h-px flex-1 bg-line" />
    </div>
  );
}
