import Image from "next/image";
import Reveal from "@/components/global/Reveal";

const TAGS = [
  "Startup Investment Advisory",
  "Project Capital Structuring",
  "Mergers & Acquisitions",
  "Business Development",
  "Risk Management International",
];

export default function InvestmentWhatIs() {
  return (
    <section className="investment-whatis-section" style={{ padding: "90px 0", background: "#F7F6F9" }}>
      <div className="px-6 mx-auto w-full" style={{ maxWidth: 1240 }}>
        <div
          className="investment-whatis-grid grid items-center gap-10 lg:gap-[70px]"
          style={{ gridTemplateColumns: "1fr 1fr" }}
        >
          {/* ── Image ── */}
          <Reveal variant="left">
            <div className="relative overflow-hidden" style={{ borderRadius: 24 }}>
              <Image
                src="/images/investment/IMG_1328 1.webp"
                alt="Investment strategy"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />

              {/* Badge overlay */}
              <div
                className="absolute flex items-center gap-3.5"
                style={{
                  bottom: 24,
                  left: 24,
                  background: "white",
                  borderRadius: 14,
                  padding: "16px 20px",
                  boxShadow: "0 16px 48px rgba(0,0,0,0.09)",
                }}
              >
                <div
                  className="grid place-items-center text-xl flex-shrink-0"
                  style={{
                    width: 42,
                    height: 42,
                    background: "#8F27FF",
                    borderRadius: 12,
                    color: "white",
                  }}
                >
                  📈
                </div>
                <div>
                  <strong style={{ display: "block", fontSize: 14, fontWeight: 700, color: "#000" }}>
                    Global Investor Network
                  </strong>
                  <span style={{ fontSize: 12, color: "#929292" }}>Capital + Strategy + Execution</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ── Text ── */}
          <Reveal variant="right">
            <h2
              style={{
                fontSize: "clamp(22px, 3vw, 40px)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                marginBottom: 20,
                color: "#000",
              }}
            >
              Capital, Strategy &amp;{" "}
              <mark
                style={{
                  display: "inline",
                  background: "#FFE600",
                  borderRadius: 3,
                  padding: "0 5px 3px",
                }}
              >
                Global Networks
              </mark>
            </h2>

            <p style={{ fontSize: 16, color: "#929292", lineHeight: 1.72, marginBottom: 16 }}>
              Nexa is a global investor and business partner, providing specialized investment
              and advisory services across a wide range of industries and growth-stage ventures.
            </p>
            <p style={{ fontSize: 16, color: "#929292", lineHeight: 1.72, marginBottom: 22 }}>
              We empower entrepreneurs and innovators by combining capital, strategic guidance,
              and global networks — enabling businesses to scale, innovate, and succeed across
              markets worldwide.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  className="px-[14px] py-[6px] rounded-full text-[14px] font-medium border border-[#E2E2E2] bg-[#F7F6F9] text-[#474747] hover:bg-[#FAF6FF] hover:border-[#8F27FF] hover:text-[#8F27FF] transition-all duration-200 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .investment-whatis-section {
            padding: 48px 0 !important;
          }
          .investment-whatis-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
        }
      `}</style>
    </section>
  );
}
