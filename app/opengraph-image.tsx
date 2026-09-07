import { ImageResponse } from "next/og";

export const alt = "Nexa Venture Capital";
export const size = {
  width: 1200,
  height: 630,
};
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
          padding: "72px 80px",
          color: "white",
          background:
            "radial-gradient(circle at 82% 22%, #7657ff 0%, #7657ff 9%, transparent 30%), linear-gradient(135deg, #17162d 0%, #30246e 58%, #10101f 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 42,
            fontWeight: 700,
            letterSpacing: "0.02em",
          }}
        >
          NEXA
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              maxWidth: 900,
              fontSize: 74,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.035em",
            }}
          >
            Build. Fund. Scale.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 30,
              color: "#d8d4f5",
            }}
          >
            Turning ambitious ideas into global businesses.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#bdb7df",
            letterSpacing: "0.04em",
          }}
        >
          www.nexavc.com
        </div>
      </div>
    ),
    size,
  );
}
