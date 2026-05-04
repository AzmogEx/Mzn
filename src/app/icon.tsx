import { ImageResponse } from "next/og";

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
          background: "#050505",
          color: "#c9a961",
          fontFamily: "serif",
          fontSize: 44,
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
