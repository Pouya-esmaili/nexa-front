"use client";

import { useState } from "react";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const steps = [
  { num: 1, phase: "Weeks 1–4", title: "Dossier Strategy & Business Modeling", desc: "Nexa structures your business plan, job creation forecast, and source-of-funds validation paperwork to meet DRIEETS standards." },
  { num: 2, phase: "Weeks 5–8", title: "Consular Submission & Biometrics", desc: "Lodge the long-stay 'Talent' visa application via the France-Visas portal. Complete biometrics at the designated French consulate in your country of residence." },
  { num: 3, phase: "Weeks 9–12", title: "Capital Escrow & Corporate Incorporation", desc: "Upon initial consular approval, transfer the €300K to a secured French capital deposit account and activate corporate setup protocols." },
  { num: 4, phase: "Month 4", title: "Visa Issuance & Arrival", desc: "Consulate issues your VLS-TS (Long-Stay Visa equivalent to Residence Permit), valid up to 12 months — granting immediate entry and commercial authorization." },
  { num: 5, phase: "Within 3 Months of Arrival", title: "Digital Validation & Prefecture Filing", desc: "Validate your VLS-TS online via the ANEF digital platform and file for the multi-year 4-year Carte de Séjour at your local French prefecture." },
  { num: 6, phase: "Month 5–6", title: "Biometric Collection & Card Issuance", desc: "Attend your local prefecture appointment to provide biometric data and collect your physical 4-year Talent Passport card." },
];

function StepItem({ step, isLast }: { step: (typeof steps)[0]; isLast: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative"
      style={{ paddingBottom: isLast ? 0 : "28px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="absolute top-0 flex items-center justify-center text-[13px] font-bold rounded-full transition-all duration-300"
        style={{
          left: "-52px",
          width: "42px",
          height: "42px",
          background: hovered ? "#8F27FF" : "white",
          border: "2px solid #8F27FF",
          color: hovered ? "white" : "#8F27FF",
          boxShadow: hovered
            ? "0 0 0 5px #F7F6F9, 0 6px 18px rgba(143,39,255,0.3)"
            : "0 0 0 5px #F7F6F9, 0 4px 12px rgba(143,39,255,0.12)",
          transform: hovered ? "scale(1.1)" : "scale(1)",
          zIndex: 10,
        }}
      >
        {step.num}
      </div>

      <div
        className="rounded-[14px] px-5 py-4 transition-all duration-200"
        style={{
          background: "white",
          border: hovered ? "1px solid rgba(143,39,255,0.18)" : "1px solid #E2E2E2",
          transform: hovered ? "translateX(4px)" : "translateX(0)",
        }}
      >
        <div className="text-[11px] font-bold text-[#8F27FF] uppercase tracking-[0.08em] mb-1.5">{step.phase}</div>
        <h4 className="text-[15px] font-semibold text-black mb-1">{step.title}</h4>
        <p className="text-[13px] text-[#929292] leading-[1.6] m-0">{step.desc}</p>
      </div>
    </div>
  );
}

export default function ProcessSteps() {
  return (
    <section className="py-20 md:py-24" style={{ background: "#F7F6F9" }}>
      <Row>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[70px] items-start">
          <div className="md:sticky md:top-[100px]">
            <Reveal variant="left">
              <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1] mb-5">
                6-Step Transition Protocol
              </h2>
            </Reveal>
            <Reveal variant="left" delay={120}>
              <blockquote
                className="text-[17px] italic font-medium leading-[1.5] text-black py-5 mb-4"
                style={{ paddingLeft: "24px", borderLeft: "3px solid #8F27FF" }}
              >
                &ldquo;Nexa manages the full lifecycle — guaranteeing clean data handoffs between home consulates and French prefectures.&rdquo;
              </blockquote>
            </Reveal>
            <Reveal variant="left" delay={240}>
              <p className="text-[14.5px] text-[#929292] leading-[1.7]">
                From business modeling to physical 4-year card in hand, the full pipeline spans approximately 5–6 months. Steps 1–2 happen in your home country; Steps 4–6 unfold inside France after arrival.
              </p>
            </Reveal>
          </div>

          <div className="relative pl-[52px]">
            <div
              className="absolute w-[2px] rounded-sm"
              style={{
                left: "20px",
                top: "22px",
                bottom: "22px",
                background: "linear-gradient(180deg, #8F27FF 0%, rgba(143,39,255,0.15) 100%)",
              }}
            />
            {steps.map((step, i) => (
              <Reveal key={i} variant="up" delay={i * 80} threshold={0.15}>
                <StepItem step={step} isLast={i === steps.length - 1} />
              </Reveal>
            ))}
          </div>
        </div>
      </Row>
    </section>
  );
}
