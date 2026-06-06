"use client";

import { useState } from "react";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const steps = [
  {
    num: "01",
    title: "Expression of Interest",
    time: "Immediate · 1-4 mo draw",
    detail: {
      heading: "Expression of Interest (EOI)",
      body: "Most provinces require candidates to submit an Expression of Interest. You're scored on several weighted factors before receiving an invitation.",
      bullets: ["Net worth & investment amount", "Business experience & language", "Proposed location (urban / regional)", "Sector & economic alignment"],
    },
  },
  {
    num: "02",
    title: "Invitation & Plan",
    time: "4-8 months review",
    detail: {
      heading: "Invitation & Business Plan",
      body: "Once invited, you'll submit a detailed business plan that aligns with the province's economic development objectives and your personal background.",
      bullets: ["Business plan submission", "Province reviews application", "Interview or assessment", "Performance agreement negotiation"],
    },
  },
  {
    num: "03",
    title: "Work Permit",
    time: "2-5 months IRCC",
    detail: {
      heading: "Work Permit Issuance",
      body: "After the province signs the performance agreement, IRCC issues a temporary work permit enabling you to legally establish and operate the business.",
      bullets: ["Province-backed support letter", "IRCC processing (2-5 months)", "Entry and business establishment", "Compliance period begins"],
    },
  },
  {
    num: "04",
    title: "Operate & Nominate",
    time: "12-20 months",
    detail: {
      heading: "Operate & Achieve Milestones",
      body: "You must actively manage the business and demonstrate progress against all investment, hiring, and operational commitments within the performance agreement.",
      bullets: ["Capital deployment verified", "Job creation requirements", "Revenue or operations milestones", "Province submits nomination"],
    },
  },
  {
    num: "05",
    title: "Permanent Residence",
    time: "16-18+ months",
    detail: {
      heading: "Permanent Residence Application",
      body: "Upon provincial nomination, you apply to IRCC for permanent residence through the federal Express Entry or provincial paper-based stream.",
      bullets: ["Federal PR application submitted", "IRCC processing 16-18 months", "Biometrics & medical clearance", "PR confirmation and landing"],
    },
  },
];

export default function ProcessTimeline() {
  const [active, setActive] = useState(0);
  const d = steps[active].detail;

  return (
    <section className="py-20 md:py-24 bg-white">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center mb-12">
            The Standard Provincial Structure
          </h2>
        </Reveal>

        <Reveal variant="up" delay={100}>
          <div className="rounded-[28px] p-8 md:p-12 border border-[#E2E2E2]" style={{ background: "#FAF6FF" }}>
            {/* Steps row */}
            <div className="relative grid grid-cols-5 gap-2 mb-9">
              {/* connector line */}
              <div className="absolute top-10 left-[8%] right-[8%] h-[2px] bg-[#8F27FF] opacity-20 rounded-full hidden md:block" />
              {steps.map((s, i) => (
                <button
                  key={s.num}
                  onClick={() => setActive(i)}
                  className="relative z-10 text-center flex flex-col items-center gap-4"
                >
                  <div
                    className="w-[80px] h-[80px] rounded-full flex items-center justify-center text-[26px] font-bold bg-white transition-all duration-300"
                    style={{
                      border: "2.5px solid #8F27FF",
                      boxShadow: active === i
                        ? "0 0 0 5px #FAF6FF, 0 8px 24px rgba(143,39,255,0.3)"
                        : "0 0 0 5px #FAF6FF, 0 4px 14px rgba(143,39,255,0.15)",
                      background: active === i ? "#8F27FF" : "white",
                      color: active === i ? "white" : "#8F27FF",
                      transform: active === i ? "scale(1.08)" : "scale(1)",
                    }}
                  >
                    {s.num}
                  </div>
                  <div>
                    <div className="text-[15px] font-semibold tracking-[-0.015em]">{s.title}</div>
                    <div className="text-[12px] text-[#929292] font-medium mt-1">{s.time}</div>
                  </div>
                </button>
              ))}
            </div>

            {/* Detail panel */}
            <div className="bg-white rounded-[14px] p-7 border border-[#E2E2E2]" style={{ borderLeft: "4px solid #8F27FF" }}>
              <h3 className="text-[22px] font-bold tracking-[-0.02em] mb-2">{d.heading}</h3>
              <p className="text-[15px] text-[#474747] leading-[1.65] mb-4">{d.body}</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {d.bullets.map((b) => (
                  <li key={b} className="pl-5 relative text-[14px] text-[#474747]">
                    <span className="absolute left-0 text-[#8F27FF] font-bold">→</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Row>
    </section>
  );
}
