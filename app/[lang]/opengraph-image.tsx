import { ImageResponse } from "next/og";
import { getContent, LANGS, toLang } from "@/content";

export const alt = "Kenneth Granados";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const lang = toLang((await params).lang);
  const content = getContent(lang);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#0b0c10",
          color: "#f2f3f7",
          fontFamily: "sans-serif"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 14,
              border: "2px solid #8ea2ff"
            }}
          >
            <span style={{ fontSize: 22, fontWeight: 600, color: "#8ea2ff" }}>KG</span>
          </div>
          <span style={{ fontSize: 22, letterSpacing: 2, color: "#7b8195", textTransform: "uppercase" }}>
            kennethgm.com
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <span style={{ fontSize: 26, color: "#8ea2ff", letterSpacing: 2, textTransform: "uppercase" }}>
            {content.meta.ogTagline}
          </span>
          <span style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2, lineHeight: 1.02 }}>
            Kenneth Granados
          </span>
          <span style={{ fontSize: 28, color: "#a8adbd", maxWidth: 900 }}>
            {content.meta.description}
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
