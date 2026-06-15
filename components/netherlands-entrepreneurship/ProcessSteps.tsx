"use client";

import { useState } from "react";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const steps = [
  {
    num: "1",
    meta: "Weeks 1–4",
    title: "Document Synthesis & KvK Setup",
    desc: "Nexa audits your educational transcripts, attests corporate filings, and drafts the RVO-compliant business plan backed by signed client LOIs. KvK registration is prepared.",
  },
  {
    num: "2",
    meta: "Day 1 of Submission",
    title: "TEV Application & Fee Execution",
    desc: "Full document architecture submitted to the IND. The mandatory government processing fee of €423 is executed via bank transfer or online payment portal.",
  },
  {
    num: "3",
    meta: "Weeks 2–12 (Up to 90 Days)",
    title: "RVO Advisory & Points Evaluation",
    desc: "IND routes the file to the RVO for the 300-point scoring assessment. The RVO analyzes the business model, economic utility, and founder profile against all three legs.",
  },
  {
    num: "4",
    meta: "Weeks 12–14",
    title: "MVV Issuance & Dutch Entry",
    desc: "Upon positive adjudication, the Provisional Residence Permit (MVV) sticker is collected from your local Dutch Embassy, enabling legal entry into the Schengen Zone.",
  },
  {
    num: "5",
    meta: "Weeks 14–16",
    title: "Biometrics, BSN & Residence Card",
    desc: "IND biometric appointment, municipality (Gemeente) address registration for your BSN (Citizen Service Number), and physical 2-year renewable residence card collection.",
  },
];

export default function ProcessSteps() {
  return (
    <section id="process" className="py-20 md:py-24 bg-white">
      <Row>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-start">

          {/* Left — sticky lead */}
          <Reveal variant="left">
            <div className="md:sticky md:top-28">
              <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1] mb-5">
                Step-by-Step Application Timeline
              </h2>
              <blockquote
                className="text-[18px] italic font-medium leading-[1.5] py-5 mb-4"
                style={{ borderLeft: "3px solid #8F27FF", paddingLeft: "24px" }}
              >
                &ldquo;Nexa maps the immigration pipeline as a synchronous critical path — each phase
                must be sequenced precisely.&rdquo;
              </blockquote>
              <p className="text-[14.5px] text-[#929292] leading-[1.7]">
                From document synthesis to physical residence card activation, the full process spans
                approximately 14 to 16 weeks. The RVO evaluation alone can take up to 90 days.
              </p>
            </div>
          </Reveal>

          {/* Right — steps, each reveals individually */}
          <div className="relative pl-14">
            {/* Vertical line */}
            <div
              className="absolute top-6 bottom-6 left-5 w-0.5 rounded-sm"
              style={{
                background:
                  "linear-gradient(180deg, #8F27FF 0%, rgba(143,39,255,0.15) 100%)",
              }}
            />

            <div className="flex flex-col gap-0">
              {steps.map((step, i) => (
                <Reveal key={i} variant="up" delay={i * 80} threshold={0.15}>
                  <StepItem step={step} isLast={i === steps.length - 1} />
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </Row>
    </section>
  );
}

function StepItem({
  step,
  isLast,
}: {
  step: (typeof steps)[0];
  isLast: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative ${isLast ? "" : "pb-8"}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Circle number */}
      <div
        className="absolute -left-14 top-0 w-[42px] h-[42px] rounded-full flex items-center justify-center text-[13px] font-bold border-2 transition-all duration-300"
        style={{
          borderColor: "#8F27FF",
          background: hovered ? "#8F27FF" : "white",
          color: hovered ? "white" : "#8F27FF",
          boxShadow: hovered
            ? "0 0 0 5px #FAF6FF, 0 6px 18px rgba(143,39,255,0.3)"
            : "0 0 0 5px #FAF6FF, 0 4px 12px rgba(143,39,255,0.12)",
          transform: hovered ? "scale(1.1)" : "scale(1)",
        }}
      >
        {step.num}
      </div>

      {/* Card */}
      <div
        className="rounded-[14px] p-4 sm:p-5 transition-all duration-200"
        style={{
          background: "#F7F6F9",
          border: hovered ? "1px solid rgba(143,39,255,0.25)" : "1px solid #E2E2E2",
          transform: hovered ? "translateX(4px)" : "translateX(0)",
        }}
      >
        <div
          className="text-[11px] font-bold uppercase tracking-[0.08em] mb-1.5"
          style={{ color: "#8F27FF" }}
        >
          {step.meta}
        </div>
        <h4 className="text-[16px] font-semibold text-black mb-1.5">{step.title}</h4>
        <p className="text-[13.5px] text-[#929292] leading-[1.6] m-0">{step.desc}</p>
      </div>
    </div>
  );
}
