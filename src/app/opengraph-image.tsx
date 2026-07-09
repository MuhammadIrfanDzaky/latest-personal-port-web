import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Jek — Full-Stack Web Developer, Medan, Indonesia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const clash = await readFile(
    join(process.cwd(), "src/fonts/ClashDisplay-Semibold.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          backgroundColor: "#efe8db",
          color: "#221c15",
          fontFamily: "Clash",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 28,
          }}
        >
          <span>
            jek<span style={{ color: "#a4491f" }}>.</span>
          </span>
          <span style={{ fontSize: 20, letterSpacing: 2 }}>
            PORTFOLIO — MEDAN, ID
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 76, lineHeight: 1.05, letterSpacing: -2 }}>
            Full-stack developer. Schema, API, interface — and the way it feels.
          </div>
          <div style={{ fontSize: 26, color: "#a4491f" }}>
            Muhammad Irfan Dzaky — Next.js · NestJS · PostgreSQL
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Clash", data: clash, weight: 600, style: "normal" }],
    }
  );
}
