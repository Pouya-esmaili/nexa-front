"use client";

import { useState } from "react";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const stages = [
  {
    num: "01",
    label: "Talent Permit",
    year: "Up to 4 Years",
    detail: {
      title: "Talent – Innovative Project Permit",
      desc: "Build and operate your startup with full work authorization and Schengen travel rights for up to 4 years.",
    },
    active: true,
  },
  {
    num: "02",
    label: "Renewal",
    year: "Before Expiry",
    detail: {
      title: "Seamless Renewal via ANEF",
      desc: "Apply 2–4 months before expiry. Show documented project growth: tax filings, financial statements, and client contracts — plus continued SMIC-level income.",
    },
    active: false,
  },
  {
    num: "03",
    label: "Permanent Residency",
    year: "Year 5",
    detail: {
      title: "10-Year Permanent Resident Card",
      desc: "After 5 years of continuous residence, your legal status uncouples from the startup entirely. Full freedom to exit, pivot, or enter any employment in France.",
    },
    active: false,
  },
  {
    num: "04",
    label: "French Citizenship",
    year: "Year 5+",
    detail: {
      title: "French Naturalization",
      desc: "B1 French language (CEFR), clean tax compliance record (Bordereau P237), and an in-person civic interview on French history, values, and duties.",
    },
    active: false,
  },
];

export default function PathwayToPassport() {
  const [openMobile, setOpenMobile] = useState(0);
  const [selectedDesktop, setSelectedDesktop] = useState(0);

  return (
    <section className="py-16 md:py-20 bg-white">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center mb-10 md:mb-14">
            The Long-Term Horizon
          </h2>
        </Reveal>

        {/* DESKTOP track */}
        <div className="hidden md:block">
          {/* dots row */}
          <div className="grid grid-cols-4 relative mb-10">
            <div
              className="absolute top-7 left-[10%] right-[10%] h-0.5"
              style={{ background: "linear-gradient(90deg, #8F27FF, rgba(143,39,255,0.2))" }}
            />
            {stages.map((s, i) => (
              <Reveal key={s.num} variant="up" delay={i * 80}>
              <div className="flex flex-col items-center text-center relative z-10 px-3">
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center text-[14px] font-bold mb-4 transition-all duration-200 cursor-pointer hover:scale-105 ${
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
                <span
                  className="text-[12px] font-semibold px-2.5 py-0.5 rounded-full"
                  style={{ background: "#FAF6FF", color: "#8F27FF" }}
                >
                  {s.year}
                </span>
              </div>
              </Reveal>
            ))}
          </div>

          {/* detail cards */}
          <div className="grid grid-cols-4 gap-4 items-stretch">
            {stages.map((s, i) => (
              <Reveal key={`d-${s.num}`} variant="up" delay={i * 80 + 200} className="h-full">
              <div
                className="h-full rounded-[14px] p-5 transition-all hover:border-[rgba(143,39,255,0.3)] hover:bg-[#FAF6FF]"
                style={{ background: "#F7F6F9", border: "1px solid #E2E2E2" }}
              >
                <h5 className="text-[14px] font-semibold mb-2">{s.detail.title}</h5>
                <p className="text-[13px] text-[#929292] leading-[1.6] m-0">{s.detail.desc}</p>
              </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* MOBILE accordion */}
        <div className="md:hidden flex flex-col gap-3">
          {stages.map((s, i) => (
            <div
              key={s.num}
              className="rounded-[16px] overflow-hidden border border-[#E2E2E2]"
            >
              <button
                className="w-full flex items-center gap-3.5 px-5 py-4.5 text-left transition-colors"
                style={{ background: openMobile === i ? "#FAF6FF" : "white" }}
                onClick={() => setOpenMobile(i)}
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-bold flex-shrink-0 ${
                    openMobile === i ? "bg-[#8F27FF] text-white" : "bg-white text-[#8F27FF]"
                  }`}
                  style={{
                    border: "2px solid #8F27FF",
                    boxShadow: "0 0 0 4px #FAF6FF",
                  }}
                >
                  {s.num}
                </div>
                <div className="flex-1">
                  <div className="text-[14px] font-semibold">{s.label}</div>
                  <span
                    className="text-[11px] font-semibold px-2 py-0.5 rounded-full inline-block mt-0.5"
                    style={{ background: "#FAF6FF", color: "#8F27FF" }}
                  >
                    {s.year}
                  </span>
                </div>
                <img src="/images/arrow.svg" alt="" className="w-4 h-4 transition-transform" style={{ transform: openMobile === i ? "rotate(180deg)" : undefined }} />
              </button>
              {openMobile === i && (
                <div className="px-5 pb-4 pl-[70px] text-[13.5px] text-[#474747] leading-[1.6]">
                  {s.detail.desc}
                </div>
              )}
            </div>
          ))}
        </div>
      </Row>
    </section>
  );
}
