import { ImageResponse } from "next/og";
import { SITE } from "@/data/site";

export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(ellipse 60% 50% at 30% 40%, rgba(201,169,97,0.18) 0%, transparent 60%), #050505",
          color: "#f5f3ee",
          fontFamily: "serif",
        }}
      >
        {/* Top — eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "1px",
              background: "#c9a961",
            }}
          />
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "16px",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "#c9a961",
            }}
          >
            Studio · {SITE.city} · {SITE.foundedYear}
          </span>
        </div>

        {/* Middle — slogan */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "82px",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          <span style={{ fontStyle: "italic", color: "#f5f3ee" }}>
            Capturer l&apos;instant,
          </span>
          <span style={{ color: "#f5f3ee" }}>diffuser l&apos;expertise,</span>
          <span style={{ color: "#a8a39a" }}>réveiller la mémoire.</span>
        </div>

        {/* Bottom — wordmark */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontSize: "120px",
              fontFamily: "serif",
              letterSpacing: "0.06em",
              color: "#f5f3ee",
              lineHeight: 1,
            }}
          >
            MZN
          </span>
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "14px",
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "#6b665e",
              paddingBottom: "16px",
            }}
          >
            {SITE.url.replace(/^https?:\/\//, "")}
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
