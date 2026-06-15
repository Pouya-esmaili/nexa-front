"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const cards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M9 8.5h5a2 2 0 0 1 0 4h-4a2 2 0 0 0 0 4h5M12 6v2M12 16v2" />
      </svg>
    ),
    title: "Minimum Net Income",
    desc: (
      <>
        <strong className="text-white font-semibold">€1,030–€1,210/month</strong> — fluctuates by municipality. Your
        business must comfortably cover operational costs and personal living expenses.
      </>
    ),
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: "ELY Centre Business Assessment",
    desc: (
      <>
        Before Migri reviews your file, the{" "}
        <strong className="text-white font-semibold">ELY Centre</strong> conducts an independent assessment of
        commercial viability and profitability — the first critical gate.
      </>
    ),
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="3" y="6" width="18" height="12" rx="1.5" />
        <path d="M3 10h18M7 14h3" />
      </svg>
    ),
    title: "Processing Fee",
    desc: (
      <>
        Electronic application via Enter Finland:{" "}
        <strong className="text-white font-semibold">€750</strong>. Paper applications:{" "}
        <strong className="text-white font-semibold">€900</strong>. Fee is non-refundable regardless of decision outcome.
      </>
    ),
  },
];

export default function Financials() {
  return (
    <section className="py-20 md:py-24 bg-black relative overflow-hidden">
      <div
        className="absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(143,39,255,0.3), transparent 65%)" }}
      />
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1] text-white text-center mb-14">
            Financial Requirements
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-5 relative z-10">
          {/* Hero card */}
          <Reveal variant="left" delay={60}>
            <div
              className="rounded-[20px] p-10 flex flex-col gap-5 h-full"
              style={{ background: "#0E0E10", border: "1px solid #1f1f24" }}
            >
              <div
                className="self-start text-[11px] font-bold uppercase tracking-[0.12em] px-3.5 py-1.5 rounded-full"
                style={{
                  background: "rgba(255,230,0,0.12)",
                  border: "1px solid rgba(255,230,0,0.3)",
                  color: "#FFE600",
                }}
              >
                12-Month Runway Required
              </div>
              <div>
                <div
                  className="font-bold leading-[0.9] tabular-nums text-white"
                  style={{ fontSize: "64px", letterSpacing: "-0.04em" }}
                >
                  €12<span style={{ fontSize: "32px" }}>–14K</span>
                </div>
              </div>
              <p className="text-[14px] leading-[1.65]" style={{ color: "#B5B5BA" }}>
                Minimum personal cash reserve upfront — covering{" "}
                <strong style={{ color: "#FFE600", fontWeight: 600 }}>12 months</strong> at the €1,030–1,210/month
                threshold. Exact amount varies by municipality.
              </p>
              <div
                className="flex flex-wrap gap-2 mt-auto pt-[18px]"
                style={{ borderTop: "1px solid #1f1f24" }}
              >
                {["Bank statements (3 months)", "B2B contracts / LOIs", "Capital commitments", "Interim balance sheets"].map(
                  (chip) => (
                    <span
                      key={chip}
                      className="text-[12px] px-3 py-1.5 rounded-full text-white font-medium"
                      style={{ border: "1px solid #2a2a30" }}
                    >
                      {chip}
                    </span>
                  )
                )}
              </div>
            </div>
          </Reveal>

          {/* Cards */}
          <div className="flex flex-col gap-3">
            {cards.map((c, i) => (
              <Reveal key={i} variant="right" delay={60 + i * 60}>
                <div
                  className="rounded-[14px] p-5 px-6 flex gap-4 items-start transition-all duration-200"
                  style={{ background: "#0E0E10", border: "1px solid #1f1f24" }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = "#8F27FF";
                    el.style.background = "#150026";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = "#1f1f24";
                    el.style.background = "#0E0E10";
                  }}
                >
                  <div
                    className="w-[38px] h-[38px] rounded-[10px] flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(143,39,255,0.15)", color: "#8F27FF" }}
                  >
                    <div className="w-[18px] h-[18px]">{c.icon}</div>
                  </div>
                  <div>
                    <h4 className="text-[14px] font-semibold text-white mb-1">{c.title}</h4>
                    <p className="text-[13px] leading-[1.6] m-0" style={{ color: "#B5B5BA" }}>
                      {c.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Row>
    </section>
  );
}
