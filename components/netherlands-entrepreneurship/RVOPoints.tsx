"use client";

"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const legs = [
  {
    label: "Leg 1",
    title: "Personal Background & Entrepreneurial Readiness",
    items: [
      { strong: "Formal Education", text: "Master's or Doctorate aligned to your sector." },
      { strong: "Entrepreneurial History", text: "Experience launching or managing corporate structures." },
      { strong: "Market Familiarity", text: "Pre-existing business links with European networks." },
    ],
  },
  {
    label: "Leg 2",
    title: "Structural Integrity of the Business Plan",
    items: [
      { strong: "Market Analysis", text: "Data proving verifiable demand in the Dutch market." },
      { strong: "Financial Projections", text: "1-to-3-year forecasting with revenue, budgets, and tax." },
      { strong: "Unique Value Proposition", text: "Clear differentiation — not overcrowding local sectors." },
    ],
  },
  {
    label: "Leg 3",
    title: "Verifiable Added Value to the Netherlands",
    items: [
      { strong: "Innovation", text: "Pioneering tech, clean-energy, or deep-tech applications." },
      { strong: "Job Creation", text: "Structured plan to employ Dutch or EU citizens." },
      { strong: "Supply Chain", text: "Trade vectors or partnerships with Dutch vendors." },
    ],
  },
];

export default function RVOPoints() {
  return (
    <section className="py-20 md:py-24 relative overflow-hidden" style={{ background: "#000000" }}>
      <style>{`
        @keyframes rvoGlow {
          0%,100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>

      {/* Background glow */}
      <div
        className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(143,39,255,0.25), transparent 70%)" }}
      />

      <Row>
        <Reveal variant="up">
          <div className="text-center mb-4">
            <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1] text-white">
              The RVO Points-Based Assessment
            </h2>
          </div>
        </Reveal>

        <Reveal variant="up" delay={80}>
          <p className="text-center text-[15px] leading-[1.65] max-w-[64ch] mx-auto mb-12 relative z-10"
            style={{ color: "rgba(255,255,255,0.6)" }}>
            A <strong className="text-white font-semibold">300-point scoring matrix</strong> administered by the RVO — three legs, each worth 100 points.
            You need at least <strong className="text-white font-semibold">90 points total</strong>, with a hard minimum of{" "}
            <strong className="text-white font-semibold">30 points in every single leg.</strong>
          </p>
        </Reveal>

        {/* Score bar */}
        <Reveal variant="up" delay={120}>
          <div className="grid grid-cols-3 gap-3 mb-4 relative z-10 max-sm:grid-cols-3">
            {/* Total points */}
            <div className="rounded-[20px] p-6 sm:p-7 text-center border transition-colors duration-300 hover:border-[rgba(255,230,0,0.3)]"
              style={{ background: "#0E0E10", border: "1px solid #1f1f24" }}>
              <div className="text-[32px] sm:text-[52px] font-extrabold tracking-[-0.05em] leading-none tabular-nums"
                style={{ color: "rgba(255,255,255,0.35)" }}>300</div>
              <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] mt-2"
                style={{ color: "rgba(255,255,255,0.35)" }}>Total Points</div>
              <div className="text-[12px] mt-1 hidden sm:block"
                style={{ color: "rgba(255,255,255,0.2)" }}>distributed across 3 legs</div>
            </div>

            {/* Minimum — highlighted */}
            <div className="rounded-[20px] p-6 sm:p-7 text-center border"
              style={{ background: "rgba(255,230,0,0.08)", border: "1px solid rgba(255,230,0,0.3)" }}>
              <div className="text-[32px] sm:text-[52px] font-extrabold tracking-[-0.05em] leading-none tabular-nums"
                style={{ color: "#FFE600" }}>90</div>
              <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] mt-2"
                style={{ color: "rgba(255,230,0,0.7)" }}>Minimum to Pass</div>
              <div className="text-[12px] mt-1 hidden sm:block"
                style={{ color: "rgba(255,230,0,0.45)" }}>30 per leg minimum</div>
            </div>

            {/* Gov fee */}
            <div className="rounded-[20px] p-6 sm:p-7 text-center border transition-colors duration-300 hover:border-[rgba(255,230,0,0.3)]"
              style={{ background: "#0E0E10", border: "1px solid #1f1f24" }}>
              <div className="text-[32px] sm:text-[52px] font-extrabold tracking-[-0.05em] leading-none tabular-nums"
                style={{ color: "rgba(255,255,255,0.35)" }}>€423</div>
              <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] mt-2"
                style={{ color: "rgba(255,255,255,0.35)" }}>Government Fee</div>
              <div className="text-[12px] mt-1 hidden sm:block"
                style={{ color: "rgba(255,255,255,0.2)" }}>non-refundable</div>
            </div>
          </div>
        </Reveal>

        {/* Legs */}
        <Reveal variant="up" delay={160}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 relative z-10">
            {legs.map((leg) => (
              <div
                key={leg.label}
                className="rounded-[20px] p-6 sm:p-7 flex flex-col gap-0 border transition-all duration-300 group"
                style={{ background: "#0E0E10", border: "1px solid #1f1f24" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "#8F27FF";
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(143,39,255,0.06)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "#1f1f24";
                  (e.currentTarget as HTMLDivElement).style.background = "#0E0E10";
                }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.1em] px-3 py-1.5 rounded-full border"
                    style={{ color: "#8F27FF", background: "rgba(143,39,255,0.12)", border: "1px solid rgba(143,39,255,0.25)" }}>
                    {leg.label}
                  </span>
                  <span className="text-[12px] font-bold" style={{ color: "rgba(255,255,255,0.3)" }}>
                    <span className="text-[14px] font-extrabold" style={{ color: "rgba(255,230,0,0.7)" }}>100</span> pts max
                  </span>
                </div>

                <h3 className="text-[16px] font-bold leading-[1.3] mb-5 tracking-[-0.015em] text-white">
                  {leg.title}
                </h3>

                <ul className="flex flex-col gap-0 border-t" style={{ borderColor: "#1f1f24" }}>
                  {leg.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-[13px] leading-[1.55] py-3 border-b"
                      style={{ color: "rgba(255,255,255,0.5)", borderColor: "#1a1a1f" }}
                    >
                      <span
                        className="w-[5px] h-[5px] rounded-full flex-shrink-0 mt-[6px]"
                        style={{ background: "#8F27FF" }}
                      />
                      <div>
                        <strong className="block mb-0.5" style={{ color: "rgba(255,255,255,0.85)", fontWeight: 600 }}>
                          {item.strong}
                        </strong>
                        {item.text}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Warning */}
        <Reveal variant="up" delay={200}>
          <div
            className="mt-4 flex items-start gap-2.5 rounded-lg p-4 relative z-10"
            style={{ background: "rgba(220,38,38,0.08)", border: "1px solid rgba(220,38,38,0.25)" }}
          >
            <svg className="w-4 h-4 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none"
              stroke="#EF4444" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <span className="text-[13px] leading-[1.6]" style={{ color: "#FCA5A5" }}>
              Scoring 100 in Legs 1 and 2 but falling below 30 in Leg 3 means{" "}
              <strong className="font-semibold text-white">immediate full rejection</strong> — the
              30-point floor per leg has no override.
            </span>
          </div>
        </Reveal>
      </Row>
    </section>
  );
}
