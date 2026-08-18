import { ImageResponse } from "next/og";

// Next's icon convention: this generates favicon.ico/icon at build time from
// this markup, matching the "KG" mark used in the header and footer. No
// external asset, just the same initials.
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0c10",
          borderRadius: 14
        }}
      >
        <span style={{ fontSize: 26, fontWeight: 700, color: "#8ea2ff", letterSpacing: -1 }}>
          KG
        </span>
      </div>
    ),
    { ...size }
  );
}
