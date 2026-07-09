import type { Metadata, Viewport } from "next";
import { clash, satoshi, sentient, plexMono } from "@/lib/fonts";
import { Providers } from "@/components/providers";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Jek — Full-Stack Web Developer",
    template: "%s — Jek",
  },
  description:
    "Muhammad Irfan Dzaky (Jek) is a full-stack web developer in Medan, Indonesia — building products end to end with Next.js, NestJS, and PostgreSQL.",
  keywords: [
    "full-stack developer",
    "Next.js",
    "NestJS",
    "TypeScript",
    "Medan",
    "Indonesia",
    "web developer portfolio",
  ],
  authors: [{ name: site.name, url: site.github }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Jek — Portfolio",
    title: "Jek — Full-Stack Web Developer",
    description:
      "Full-stack web developer in Medan, Indonesia. Schema, API, interface — and the way it feels.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jek — Full-Stack Web Developer",
    description:
      "Full-stack web developer in Medan, Indonesia. Schema, API, interface — and the way it feels.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#efe8db" },
    { media: "(prefers-color-scheme: dark)", color: "#161210" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${clash.variable} ${satoshi.variable} ${sentient.variable} ${plexMono.variable}`}
    >
      <body>
        <Providers>
          <a
            href="#main"
            className="sr-only z-[100] bg-rust px-4 py-2 font-mono text-xs uppercase tracking-widest text-bg focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
          >
            Skip to content
          </a>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
