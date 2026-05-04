import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(ellipse at 30% 30%, #1a1108 0%, #050505 80%)",
          color: "#c9a961",
          fontFamily: "serif",
          fontSize: 120,
          letterSpacing: "-0.06em",
          fontWeight: 400,
        }}
      >
        M
      </div>
    ),
    { ...size },
  );
}
