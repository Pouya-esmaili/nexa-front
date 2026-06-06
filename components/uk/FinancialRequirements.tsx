"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const cards = [
  {
    title: "Main Applicant (Founder)",
    sub: "Required personal savings threshold",
    amount: "£1,270",
  },
  {
    title: "Dependent Partner / Spouse",
    sub: "Additional maintenance per dependent partner",
    amount: "+£285",
  },
  {
    title: "First Dependent Child",
    sub: "Additional maintenance for first child",
    amount: "+£315",
  },
  {
    title: "Each Additional Child",
    sub: "Additional maintenance per subsequent child",
    amount: "+£200",
  },
];

export default function FinancialRequirements() {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden" style={{ background: "#000" }}>
      {/* Glow */}
      <div
        className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(143,39,255,0.3), transparent 65%)" }}
      />

      <Row>
        <Reveal variant="up" className="relative z-10 mb-10 md:mb-14">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center text-white">
            Personal Financial Maintenance
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-5 items-stretch relative z-10">
          {/* Hero card */}
          <Reveal variant="left" delay={100}>
            <div
              className="rounded-[20px] p-10 flex flex-col gap-5 h-full"
              style={{ background: "#0E0E10", border: "1px solid #1f1f24" }}
            >
              <span
                className="self-start text-[11px] font-bold uppercase tracking-[.12em] px-3.5 py-1.5 rounded-full"
                style={{ background: "rgba(255,230,0,0.12)", border: "1px solid rgba(255,230,0,0.3)", color: "#FFE600" }}
              >
                28-Day Holding Requirement
              </span>
              <div className="text-[72px] font-bold tracking-[-0.04em] leading-[0.9] text-white">
                £1,270
              </div>
              <p className="text-[14px] leading-[1.65]" style={{ color: "#B5B5BA" }}>
                Minimum personal savings for the{" "}
                <strong className="font-semibold" style={{ color: "#FFE600" }}>main applicant</strong>,
                held in your personal bank account for{" "}
                <strong className="font-semibold" style={{ color: "#FFE600" }}>28 consecutive days</strong>{" "}
                before submission.
              </p>
              <div
                className="flex flex-wrap gap-2 mt-auto pt-4"
                style={{ borderTop: "1px solid #1f1f24" }}
              >
                {["Personal bank account", "28 continuous days", "Separate from business capital"].map((chip) => (
                  <span
                    key={chip}
                    className="text-[12px] font-medium text-white px-3 py-1.5 rounded-full"
                    style={{ border: "1px solid #2a2a30" }}
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Amount cards */}
          <div className="flex flex-col gap-3">
            {cards.map((c, i) => (
              <Reveal key={c.title} variant="up" delay={i * 80 + 150}>
                <div
                  className="rounded-[14px] px-6 py-5 flex items-center justify-between gap-4 h-full"
                  style={{
                    background: "#0E0E10",
                    border: "1px solid #1f1f24",
                    transition: "border-color 0.25s, background 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "#8F27FF";
                    (e.currentTarget as HTMLDivElement).style.background = "#150026";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "#1f1f24";
                    (e.currentTarget as HTMLDivElement).style.background = "#0E0E10";
                  }}
                >
                  <div>
                    <h4 className="text-[14px] font-semibold text-white mb-1">{c.title}</h4>
                    <p className="text-[13px] m-0" style={{ color: "#B5B5BA" }}>{c.sub}</p>
                  </div>
                  <div
                    className="text-[28px] font-bold tracking-[-0.03em] whitespace-nowrap flex-shrink-0"
                    style={{ color: "#FFE600" }}
                  >
                    {c.amount}
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
