"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const items = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.14em] md:gap-7"
    >
      {items.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={clsx(
              "transition-colors hover:text-rust",
              active ? "text-rust" : "text-soft"
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
