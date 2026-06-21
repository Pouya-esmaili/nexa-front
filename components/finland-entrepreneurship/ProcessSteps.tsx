"use client";

import { useState } from "react";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const steps = [
  {
    num: 1,
    phase: "Phase 1",
    title: "Legal Incorporation & Business ID",
    desc: "Register your company with the PRH via the YTJ system to generate your unique Business ID (Y-tunnus).",
  },
  {
    num: 2,
    phase: "Phase 2",
    title: "Digital Filing via Enter Finland",
    desc: 'Create an account on Enter Finland. File the "First Residence Permit for an Entrepreneur," upload your business plan, 2-year forecast, and bank statements.',
  },
  {
    num: 3,
    phase: "Phase 3",
    title: "Processing Fee Payment",
    desc: "Pay the mandatory fee via Enter Finland — €750 electronically or €900 for paper applications. Non-refundable.",
  },
  {
    num: 4,
    phase: "Phase 4",
    title: "Biometrics at Finnish Embassy",
    desc: "Book a physical appointment at a Finnish embassy, consulate, or VFS Global point within 3 months of filing. Submit biometrics and original documents.",
  },
  {
    num: 5,
    phase: "Phase 5",
    title: "Dual-Stage Review (ELY → Migri)",
    desc: "ELY Centre evaluates commercial viability first. Upon positive decision, Migri runs background and security clearances before issuing your physical residence card.",
  },
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
      {/* Circle — positioned in the left padding area */}
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
            ? "0 0 0 5px #EEEAFF, 0 6px 18px rgba(143,39,255,0.3)"
            : "0 0 0 5px #EEEAFF, 0 4px 12px rgba(143,39,255,0.12)",
          transform: hovered ? "scale(1.1)" : "scale(1)",
          zIndex: 10,
        }}
      >
        {step.num}
      </div>

      {/* Card */}
      <div
        className="rounded-[14px] px-5 py-4 transition-all duration-200"
        style={{
          background: "white",
          border: hovered ? "1px solid rgba(143,39,255,0.18)" : "1px solid #E2E2E2",
          transform: hovered ? "translateX(4px)" : "translateX(0)",
        }}
      >
        <div className="text-[11px] font-bold text-[#8F27FF] uppercase tracking-[0.08em] mb-1.5">
          {step.phase}
        </div>
        <h4 className="text-[15px] font-semibold text-black mb-1">{step.title}</h4>
        <p className="text-[13px] text-[#929292] leading-[1.6] m-0">{step.desc}</p>
      </div>
    </div>
  );
}

export default function ProcessSteps() {
  return (
    <section className="py-20 md:py-24" style={{ background: "#EEEAFF" }}>
      <Row>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[70px] items-start">
          {/* Left sticky */}
          <div className="md:sticky md:top-[100px]">
            <Reveal variant="left">
              <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1] mb-5">
                Step-by-Step Application Process
              </h2>
            </Reveal>
            <Reveal variant="left" delay={120}>
              <blockquote
                className="text-[17px] italic font-medium leading-[1.5] text-black py-5 mb-4"
                style={{ paddingLeft: "24px", borderLeft: "3px solid #8F27FF" }}
              >
                &ldquo;Missing the order of operations — ELY assessment before Migri review — is the most common cause
                of denial.&rdquo;
              </blockquote>
            </Reveal>
            <Reveal variant="left" delay={240}>
              <p className="text-[14.5px] text-[#929292] leading-[1.7]">
                The two-stage evaluation (ELY Centre → Migri) means your application is reviewed by both a business
                authority and an immigration authority. Average processing time: 3 to 4 months.
              </p>
            </Reveal>
          </div>

          {/* Right — steps with single line + circles in padding */}
          <div className="relative pl-[52px]">
            {/* Single vertical line */}
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
