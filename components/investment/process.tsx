"use client";
import Reveal from "@/components/global/Reveal";

const STEPS = [
  {
    num: 1,
    title: "Opportunity Review",
    desc: "Initial assessment of the proposal and market fit",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#8F27FF" strokeWidth="1.5" width="28" height="28">
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4.35-4.35" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: 2,
    title: "Due Diligence",
    desc: "In-depth analysis of financials, team, and scalability",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#8F27FF" strokeWidth="1.5" width="28" height="28">
        <path d="M9 11l3 3L22 4"/>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
  },
  {
    num: 3,
    title: "Structuring & Legal",
    desc: "Deal structuring, term sheets, and legal documentation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#8F27FF" strokeWidth="1.5" width="28" height="28">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
  },
  {
    num: 4,
    title: "Capital Deployment",
    desc: "Funds deployed and business operations activated",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#8F27FF" strokeWidth="1.5" width="28" height="28">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
  {
    num: 5,
    title: "Ongoing Support",
    desc: "Strategic guidance, KPI monitoring, and growth advisory",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#8F27FF" strokeWidth="1.5" width="28" height="28">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
];

export default function InvestmentProcess() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#000", padding: "90px 0" }}
    >
      {/* Radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: 800, height: 400,
          background: "radial-gradient(ellipse, rgba(143,39,255,0.18) 0%, transparent 65%)",
        }}
      />

      <div className="px-6 mx-auto w-full relative z-10" style={{ maxWidth: 1240 }}>
        {/* Header */}
        <Reveal>
          <div className="text-center mb-0">
            <h2
              style={{
                fontSize: "clamp(26px, 3vw, 40px)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                color: "white",
              }}
            >
              Investment Process
            </h2>
          </div>
        </Reveal>

        {/* Track */}
        <div className="relative mt-14">
          {/* Connecting line (desktop only) */}
          <div
            className="hidden lg:block absolute z-0"
            style={{
              top: 36,
              left: "10%",
              right: "10%",
              height: 2,
              background: "linear-gradient(90deg, #8F27FF, rgba(143,39,255,0.2))",
            }}
          />

          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-5 gap-8">
            {STEPS.map((step, i) => (
              <Reveal key={step.num} delay={i * 100}>
                <ProcessStep step={step} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessStep({ step }: { step: (typeof STEPS)[0] }) {
  return (
    <div
      className="flex flex-col items-center text-center"
      style={{ padding: "0 12px" }}
      onMouseEnter={e => {
        const dot = e.currentTarget.querySelector<HTMLElement>(".step-dot");
        if (dot) {
          dot.style.borderColor = "#8F27FF";
          dot.style.background = "rgba(143,39,255,0.22)";
          dot.style.boxShadow = "0 0 0 8px rgba(143,39,255,0.1)";
        }
      }}
      onMouseLeave={e => {
        const dot = e.currentTarget.querySelector<HTMLElement>(".step-dot");
        if (dot) {
          dot.style.borderColor = "rgba(143,39,255,0.3)";
          dot.style.background = "#0E0E10";
          dot.style.boxShadow = "none";
        }
      }}
    >
      {/* Dot */}
      <div
        className="step-dot relative flex items-center justify-center mb-5 flex-shrink-0 rounded-full transition-all duration-300"
        style={{ width: 72, height: 72, border: "2px solid rgba(143,39,255,0.3)", background: "#0E0E10" }}
      >
        {step.icon}
        {/* Number badge */}
        <div
          className="absolute flex items-center justify-center"
          style={{
            top: -8, right: -8,
            width: 22, height: 22,
            borderRadius: "50%",
            background: "#8F27FF",
            color: "white",
            fontSize: 10,
            fontWeight: 800,
          }}
        >
          {step.num}
        </div>
      </div>

      <div
        style={{
          fontSize: 14,
          fontWeight: 700,
          color: "white",
          letterSpacing: "-0.01em",
          lineHeight: 1.35,
          marginBottom: 8,
        }}
      >
        {step.title}
      </div>
      <div
        style={{
          fontSize: 12,
          color: "rgba(255,255,255,0.4)",
          lineHeight: 1.55,
        }}
      >
        {step.desc}
      </div>
    </div>
  );
}
