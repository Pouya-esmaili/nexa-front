"use client";

import { useState } from "react";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const stages = [
  {
    num: "01",
    label: "Entrepreneur Visa",
    year: "Years 1–3",
    detail: {
      title: "Entrepreneur Visa (3 Years)",
      body: "Build and scale your venture with full TIE residency. Secondary employment and consulting permitted. Family included with unrestricted work rights.",
    },
  },
  {
    num: "02",
    label: "2-Year Renewal",
    year: "Year 3",
    detail: {
      title: "2-Year Renewal via UGE",
      body: "Apply online before expiry. Must prove active operation, corporate taxes paid, employment forecasts met, continued IPREM funds, valid health insurance, and clean criminal record in Spain.",
    },
  },
  {
    num: "03",
    label: "Permanent Residency",
    year: "Year 5",
    detail: {
      title: "Permanent Residency (Larga Duración)",
      body: "After 5 continuous legal years, obtain a Long-Term Residence Card. Legal status fully uncouples from your startup — complete professional freedom with no further business evaluations.",
    },
  },
  {
    num: "04",
    label: "Spanish Citizenship",
    year: "Year 10 (or Year 2)",
    detail: {
      title: "Spanish Citizenship",
      body: "Standard: 10 years. Ibero-Americans fast-track: 2 years. Requires passing the DELE (Spanish A2) and CCSE (civic knowledge) exams. Dual citizenship permitted for qualifying nationals.",
    },
  },
];

export default function PathwayToPassport() {
  const [openMobile, setOpenMobile] = useState<number | null>(0);
  const [selectedDesktop, setSelectedDesktop] = useState(0);

  return (
    <section className="py-20 md:py-24 bg-white">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center mb-12">
            Long-Term Horizons
          </h2>
        </Reveal>

        {/* Desktop track */}
        <div className="hidden md:block">
          <Reveal variant="up" delay={80}>
            {/* Track dots */}
            <div className="relative grid grid-cols-4 mb-10">
              {/* connector */}
              <div className="absolute top-7 left-[10%] right-[10%] h-[2px] rounded-full"
                style={{ background: "linear-gradient(90deg, #8F27FF, rgba(143,39,255,0.2))" }} />
              {stages.map((s, i) => (
                <div key={s.num} className="flex flex-col items-center text-center px-3 relative z-10">
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center text-[14px] font-bold mb-4 transition-all duration-200 cursor-pointer hover:scale-[1.08] ${
                      selectedDesktop === i
                        ? "bg-[#8F27FF] text-white"
                        : "bg-white text-[#8F27FF] hover:bg-[#FAF6FF]"
                    }`}
                    style={{
                      border: "2.5px solid #8F27FF",
                      boxShadow: selectedDesktop === i
                        ? "0 0 0 6px #FAF6FF, 0 8px 24px rgba(143,39,255,0.25)"
                        : "0 0 0 6px #FAF6FF",
                    }}
                    onClick={() => setSelectedDesktop(i)}
                  >
                    {s.num}
                  </div>
                  <div className="text-[15px] font-semibold mb-1">{s.label}</div>
                  <div className="text-[12px] font-semibold px-2.5 py-[3px] rounded-full" style={{ color: "#8F27FF", background: "#FAF6FF" }}>{s.year}</div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Detail cards */}
          <div className="grid grid-cols-4 gap-4 items-stretch">
            {stages.map((s, i) => (
              <Reveal key={s.num} variant="up" delay={i * 80 + 200} className="h-full">
                <div className="h-full bg-[#F7F6F9] border border-[#E2E2E2] rounded-[14px] p-5 transition-all duration-200 hover:border-[rgba(143,39,255,0.18)] hover:bg-[#FAF6FF]">
                  <h5 className="text-[14px] font-semibold mb-2">{s.detail.title}</h5>
                  <p className="text-[13px] text-[#929292] leading-[1.6] m-0">{s.detail.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile accordion */}
        <Reveal variant="up" delay={80}>
          <div className="md:hidden flex flex-col gap-3">
            {stages.map((s, i) => (
              <div key={s.num} className="rounded-[16px] overflow-hidden border border-[#E2E2E2]">
                <button
                  className="w-full flex items-center gap-3.5 px-5 py-4 text-left transition-colors"
                  style={{ background: openMobile === i ? "#FAF6FF" : "white" }}
                  onClick={() => setOpenMobile(openMobile === i ? null : i)}
                >
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-bold flex-shrink-0 transition-all"
                    style={{
                      background: openMobile === i ? "#8F27FF" : "white",
                      color: openMobile === i ? "white" : "#8F27FF",
                      border: "2px solid #8F27FF",
                      boxShadow: "0 0 0 4px #FAF6FF",
                    }}>
                    {s.num}
                  </div>
                  <div className="flex-1">
                    <div className="text-[14px] font-semibold">{s.label}</div>
                    <div className="text-[11px] font-semibold text-[#8F27FF]">{s.year}</div>
                  </div>
                  <img src="/images/arrow.svg" alt="" className="w-4 h-4 transition-transform" style={{ transform: openMobile === i ? "rotate(180deg)" : undefined }} />
                </button>
                {openMobile === i && (
                  <div className="px-5 pb-4 pl-[70px] text-[13.5px] text-[#474747] leading-[1.6]">
                    {s.detail.body}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </Row>
    </section>
  );
}
