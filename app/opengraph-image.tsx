import { ImageResponse } from "next/og";

export const alt = "Nexa Venture Capital";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  const imageOrigin =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://www.nexavc.com";
  const teamImage = `${imageOrigin}/images/landing/nexa-team-og.png`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "54px 48px",
          color: "#050505",
          background: "#ffffff",
          border: "1px solid #dddddd",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "52%",
            height: "100%",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 54,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: "-0.04em",
            }}
          >
            <span>Your Global Launchpad</span>
            <span>for Investment,</span>
            <span
              style={{
                display: "flex",
                alignSelf: "flex-start",
                marginTop: 7,
                padding: "0 7px 5px",
                background: "#ffe600",
                borderRadius: 3,
              }}
            >
              Startups &amp; Growth.
            </span>
          </div>

          <div
            style={{
              display: "flex",
              maxWidth: 570,
              marginTop: 30,
              fontSize: 20,
              lineHeight: 1.55,
              color: "#929292",
            }}
          >
            We fuel the global expansion of startups into new markets — for
            entrepreneurs ready to scale and investors seeking high-growth
            opportunities.
          </div>

          <div style={{ display: "flex", gap: 14, marginTop: 34 }}>
            <div
              style={{
                display: "flex",
                padding: "14px 25px",
                color: "#ffffff",
                background: "#8f27ff",
                borderRadius: 999,
                fontSize: 17,
                fontWeight: 600,
              }}
            >
              Explore Services →
            </div>
            <div
              style={{
                display: "flex",
                padding: "13px 24px",
                border: "1.5px solid #1a1a1a",
                borderRadius: 999,
                fontSize: 17,
                fontWeight: 600,
              }}
            >
              Book a Call
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: "48%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={teamImage}
            alt="Nexa Team"
            width="555"
            height="309"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    ),
    size,
  );
}
