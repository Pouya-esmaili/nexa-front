"use client";

import { useState } from "react";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const steps = [
  {
    num: "1",
    meta: "Phase 1 · Weeks 1–3",
    title: "Capital Allocation & Asset Certification",
    desc: "Execute the asset purchase or capital deposit. Titles cleared through DLD, or fund letters generated via accredited institutions.",
  },
  {
    num: "2",
    meta: "Phase 2 · Days 3–7",
    title: "Entry Permit Issuance",
    desc: "A 6-month multiple-entry visa processed via the ICP portal to facilitate physical arrival and asset finalization inside the UAE.",
  },
  {
    num: "3",
    meta: "Phase 3 · Days 1–3 (In-Country)",
    title: "Medical Fitness & Security Vetting",
    desc: "Mandatory blood tests and chest X-ray at an authorized government facility. Global background checks finalized simultaneously.",
  },
  {
    num: "4",
    meta: "Phase 4 · Days 2–5",
    title: "Biometric Enrollment & Emirates ID",
    desc: "Attend an ICP center for fingerprinting and biometric logging, initiating production of your 10-year Emirates ID.",
  },
  {
    num: "5",
    meta: "Phase 5 · Days 5–10",
    title: "Residency Activation & Family Deployment",
    desc: "Electronic residency permit issued — no physical passport sticker required. Dependent sponsorship then unlocked for spouse, children, and staff.",
  },
];

export default function ProcessSteps() {
  return (
    <section id="process" className="py-20 md:py-24" style={{ background: "#F7F6F9" }}>
      <Row>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-[70px] items-start">

          {/* Left — sticky */}
          <div className="md:sticky md:top-[100px]">
            <Reveal variant="left">
              <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1] mb-5">
                5-Phase Application Pipeline
              </h2>
            </Reveal>
            <Reveal variant="left" delay={120}>
              <blockquote
                className="text-[18px] italic font-medium leading-[1.5] text-black py-5 mb-4"
                style={{ borderLeft: "3px solid #8F27FF", paddingLeft: "24px" }}
              >
                &ldquo;We treat the application timeline as a synchronous critical path — data
                validation occurs well before capital deployment.&rdquo;
              </blockquote>
            </Reveal>
            <Reveal variant="left" delay={240}>
              <p className="text-[14.5px] text-[#929292] leading-[1.7]">
                From asset certification to physical Emirates ID activation, the complete pipeline
                spans 2 to 6 weeks once capital is deployed. Nexa manages the entire architecture —
                asset diligence, ICP filing, medical coordination, and family sponsorship deployment.
              </p>
            </Reveal>
          </div>

          {/* Right — each step scrolls in individually */}
          <div className="relative pl-[52px]">
            <div
              className="absolute top-[22px] bottom-[22px] left-[20px] w-[2px] rounded-[2px]"
              style={{
                background:
                  "linear-gradient(180deg, #8F27FF 0%, rgba(143,39,255,0.15) 100%)",
              }}
            />
            <div className="flex flex-col gap-0">
              {steps.map((step, i) => (
                <Reveal key={i} variant="up" delay={i * 80} threshold={0.12}>
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
      {/* Circle */}
      <div
        className="absolute -left-[52px] top-0 w-[42px] h-[42px] rounded-full flex items-center justify-center text-[13px] font-bold border-2 transition-all duration-300"
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
        className="rounded-[14px] p-[18px_22px] bg-white transition-all duration-200"
        style={{
          border: hovered ? "1px solid rgba(143,39,255,0.18)" : "1px solid #E2E2E2",
          transform: hovered ? "translateX(4px)" : "translateX(0)",
        }}
      >
        <div className="text-[11px] font-bold text-[#8F27FF] uppercase tracking-[0.08em] mb-1.5">
          {step.meta}
        </div>
        <h4 className="text-[16px] font-semibold text-black mb-1.5">{step.title}</h4>
        <p className="text-[13.5px] text-[#929292] leading-[1.6] m-0">{step.desc}</p>
      </div>
    </div>
  );
}
