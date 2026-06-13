"use client";
import { useState } from "react";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const steps = [
  {
    num: "1",
    meta: "Stage 1 · Weeks 1–6",
    title: "Ecosystem Vetting & Incubation Selection",
    desc: "Submit your business model, market research, and technology roadmap to a recognized French Tech incubator or ecosystem stakeholder. Secure their official endorsement letter.",
  },
  {
    num: "2",
    meta: "Stage 2 · Weeks 7–10",
    title: "DRIEETS Innovation Review",
    desc: "Upload your business framework, financials, and endorsement letters to the Ministry of Economy platform. DRIEETS issues your 12-month Innovation Certificate upon approval.",
  },
  {
    num: "3",
    meta: "Stage 3 · Weeks 11–14",
    title: "Consular Visa Application (VLS-TS)",
    desc: "File via the France-Visas portal. Attend your biometric appointment at the French Consulate with your Innovation Certificate, proof of accommodation, passport, and bank statements.",
  },
  {
    num: "4",
    meta: "Stage 4 · Within 3 Months of Entry",
    title: "Arrival, Company Registration & ANEF Filing",
    desc: 'Land in France. Validate VLS-TS and incorporate your business (K-bis). Submit your "Talent" residence card via the ANEF digital portal to receive your electronic protection certificate.',
  },
];

export default function ProcessSteps() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-20 bg-[#F7F6F9]" id="process">
      <Row>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <Reveal variant="left" delay={0} className="md:sticky md:top-24">
            <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] mb-5">
              The 4-Stage Application Roadmap
            </h2>
            <blockquote className="text-[18px] italic font-medium leading-[1.5] py-5 pl-6 mb-4"
              style={{ borderLeft: "3px solid #8F27FF" }}>
              &ldquo;Missing a step or mixing up the order can lead to long delays or immediate refusal.&rdquo;
            </blockquote>
            <p className="text-[14.5px] text-[#929292] leading-[1.7]">
              Nexa structures this process into a clear, four-stage lifecycle. From your first ecosystem submission to landing in France and registering your company, the full journey takes approximately 3–4 months when properly prepared.
            </p>
          </Reveal>

          <div className="relative pl-[52px]">
            <div className="absolute top-[22px] bottom-[22px] left-5 w-0.5 rounded-full"
              style={{ background: "linear-gradient(180deg, #8F27FF 0%, rgba(143,39,255,0.15) 100%)" }} />

            {steps.map((s, i) => (
              <Reveal key={s.num} variant="up" delay={i * 100 + 100}>
                <div
                  className="relative mb-5 last:mb-0 transition-transform hover:translate-x-1 cursor-pointer"
                  onClick={() => setActive(active === i ? null : i)}
                >
                  <div
                    className="absolute -left-[52px] top-0 w-[42px] h-[42px] rounded-full flex items-center justify-center text-[13px] font-bold z-10 transition-all duration-300 hover:scale-110"
                    style={{
                      border: "2px solid #8F27FF",
                      boxShadow: "0 0 0 5px #FAF6FF, 0 4px 12px rgba(143,39,255,0.12)",
                      background: active === i ? "#8F27FF" : "white",
                      color: active === i ? "white" : "#8F27FF",
                    }}
                  >
                    {s.num}
                  </div>
                  <div
                    className="bg-white rounded-[14px] p-[18px_22px] transition-colors duration-200"
                    style={{ border: active === i ? "1px solid rgba(143,39,255,0.4)" : "1px solid #E2E2E2" }}
                  >
                    <div className="text-[11px] font-bold text-[#8F27FF] uppercase tracking-[.08em] mb-1.5">{s.meta}</div>
                    <h4 className="text-[16px] font-semibold mb-1.5">{s.title}</h4>
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
