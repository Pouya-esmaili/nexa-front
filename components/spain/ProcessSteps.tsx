"use client";
import { useState } from "react";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const steps = [
  {
    num: "1",
    meta: "Step 1 · Weeks 1–6",
    title: "Business Plan Architecture & Digital Certificate Setup",
    desc: "Draft an ENISA-compliant business plan with market research, financial projections, and job creation estimates. Concurrently, secure a Spanish NIE number and a digital signature certificate (Clave/Certificado Digital).",
  },
  {
    num: "2",
    meta: "Step 2 · Weeks 7–9",
    title: "ENISA Platform Submission",
    desc: "Upload your comprehensive business plan and professional profiles to the official Ministry industry portal. ENISA analyzes the project's innovation metrics and issues a formal economic report (30–60 days).",
  },
  {
    num: "3",
    meta: "Step 3 · Weeks 10–14",
    title: "UGE Residency Application Filing",
    desc: "Submit your residency file to the UGE. Include apostilled criminal background checks (translated into Spanish), €9,000+ bank proof, private insurance contract (no copayments, no deductibles), and the positive ENISA report. UGE rules within 20 working days.",
  },
  {
    num: "4",
    meta: "Step 4 · Month 4",
    title: "Biometric Fingerprinting & TIE Collection",
    desc: "Upon receiving the Resolución Favorable, schedule a biometrics appointment at your local National Police station in Spain. Pay the minor stamp duty and collect your physical TIE residence card within 30 days.",
  },
];

export default function ProcessSteps() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-24 bg-[#F7F6F9]">
      <Row>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Lead */}
          <Reveal variant="left" className="md:sticky md:top-24">
            <div>
              <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] mb-5">
                Step-by-Step Application Timeline
              </h2>
              <blockquote className="text-[18px] font-medium italic leading-[1.5] pl-6 mb-4"
                style={{ borderLeft: "3px solid #8F27FF" }}>
                "Nexa coordinates your application flow into a clear, linear progression to eliminate processing friction."
              </blockquote>
              <p className="text-[14.5px] text-[#929292] leading-[1.7]">
                From your first business plan draft to collecting your physical TIE card, the full process takes approximately 4 months. The unique advantage of this program: you can file from inside Spain on a tourist entry — receiving a 3-year card directly.
              </p>
            </div>
          </Reveal>

          {/* Steps */}
          <div className="relative pl-14">
            <div className="absolute top-5 bottom-5 left-5 w-[2px] rounded-full"
              style={{ background: "linear-gradient(180deg, #8F27FF 0%, rgba(143,39,255,0.15) 100%)" }} />

            {steps.map((s, i) => (
              <Reveal key={s.num} variant="up" delay={i * 100 + 100}>
                <div
                  className="relative mb-5 last:mb-0 transition-transform duration-250 hover:translate-x-1 cursor-pointer"
                  onClick={() => setActive(active === i ? null : i)}
                >
                  {/* Circle */}
                  <div
                    className="absolute -left-14 top-0 w-[42px] h-[42px] rounded-full flex items-center justify-center text-[13px] font-bold z-10 transition-all duration-300 hover:scale-110"
                    style={{
                      border: "2px solid #8F27FF",
                      boxShadow: "0 0 0 5px #FAF6FF, 0 4px 12px rgba(143,39,255,0.12)",
                      background: active === i ? "#8F27FF" : "white",
                      color: active === i ? "white" : "#8F27FF",
                    }}
                  >
                    {s.num}
                  </div>

                  {/* Card */}
                  <div
                    className="bg-white rounded-[14px] px-5 py-4 transition-colors duration-200"
                    style={{ border: active === i ? "1px solid rgba(143,39,255,0.4)" : "1px solid #E2E2E2" }}
                  >
                    <div className="text-[11px] font-bold text-[#8F27FF] uppercase tracking-[0.08em] mb-1.5">{s.meta}</div>
                    <h4 className="text-[16px] font-semibold tracking-[-0.015em] mb-1">{s.title}</h4>
                    <p className="text-[13.5px] text-[#929292] leading-[1.6] m-0">{s.desc}</p>
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
