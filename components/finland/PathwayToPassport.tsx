"use client";

import { useState } from "react";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const stages = [
  {
    num: "01",
    label: "Initial Permit",
    year: "Years 1–2",
    detail: "Initial Startup Permit",
    desc: "Live in Finland and actively develop your company under your initial 2-year residence permit. Travel across Schengen freely.",
  },
  {
    num: "02",
    label: "Extended Permit",
    year: "Up to Year 4",
    detail: "Extended Permit",
    desc: "Before expiry, apply for extension. Immigration verifies your company is in the Finnish Trade Register and actively operating.",
  },
  {
    num: "03",
    label: "Permanent Residency",
    year: "Year 4",
    detail: "Permanent Residency",
    desc: "After 4 consecutive years on continuous permits, your right to live and work in Europe is permanently yours — startup or not.",
  },
  {
    num: "04",
    label: "Finnish Passport",
    year: "Year 6",
    detail: "Finnish Citizenship",
    desc: "After ~6 years of continuous residence plus a basic Finnish or Swedish language test — full EU voting rights and a top-tier passport.",
  },
];

export default function PathwayToPassport() {
  const [openMobile, setOpenMobile] = useState<number>(0);

  return (
    <section className="py-16 md:py-20 bg-white">
      <Row>
        <Reveal variant="up" className="text-center mb-10 md:mb-14">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em]">
            Path to Permanent Residency &amp; Passport
          </h2>
        </Reveal>

        {/* Desktop track */}
        <div className="hidden md:block">
          <Reveal variant="up" delay={100}>
            <div className="relative grid grid-cols-4 mb-10">
              {/* connecting line */}
              <div
                className="absolute top-7 left-[10%] right-[10%] h-0.5"
                style={{ background: "linear-gradient(90deg, #8F27FF, rgba(143,39,255,0.2))" }}
              />
              {stages.map((s, i) => (
                <div key={s.num} className="flex flex-col items-center text-center relative z-10 group px-3">
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center text-[14px] font-bold mb-4 transition-all duration-300 group-hover:scale-[1.08] group-hover:bg-[#8F27FF] group-hover:text-white group-hover:shadow-lg
                      ${i === 0
                        ? "bg-[#8F27FF] text-white"
                        : "bg-white border-[2.5px] border-[#8F27FF] text-[#8F27FF]"
                      }`}
                    style={i === 0
                      ? { boxShadow: "0 0 0 6px #FAF6FF, 0 8px 24px rgba(143,39,255,0.25)" }
                      : { boxShadow: "0 0 0 6px #FAF6FF" }
                    }
                  >
                    {s.num}
                  </div>
                  <div className="font-semibold text-[15px] mb-1 tracking-[-0.015em]">{s.label}</div>
                  <span
                    className="text-[12px] font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: "#FAF6FF", color: "#8F27FF" }}
                  >
                    {s.year}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid grid-cols-4 gap-4">
            {stages.map((s, i) => (
              <Reveal key={s.num} variant="up" delay={i * 80 + 150}>
                <div className="bg-[#F7F6F9] border border-gray-200 rounded-[14px] p-5 h-full transition-all duration-300 hover:border-[rgba(143,39,255,0.3)] hover:bg-[#FAF6FF]">
                  <h5 className="font-semibold text-[14px] mb-2 tracking-[-0.01em]">{s.detail}</h5>
                  <p className="text-[13px] text-gray-500 leading-relaxed m-0">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile accordion */}
        <Reveal variant="up" delay={100} className="md:hidden">
          <div className="border border-gray-200 rounded-[20px] overflow-hidden">
            {stages.map((s, i) => (
              <div key={s.num} className={`${i < stages.length - 1 ? "border-b border-gray-200" : ""}`}>
                <button
                  className={`w-full flex items-center gap-3.5 px-5 py-[18px] text-left transition-colors duration-200 ${openMobile === i ? "bg-[#FAF6FF]" : "bg-white hover:bg-gray-50"}`}
                  onClick={() => setOpenMobile(openMobile === i ? -1 : i)}
                >
                  <div
                    className={`w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center text-[12px] font-bold transition-all duration-300
                      ${openMobile === i ? "bg-[#8F27FF] text-white" : "bg-white border-2 border-[#8F27FF] text-[#8F27FF]"}`}
                    style={{ boxShadow: "0 0 0 4px #FAF6FF" }}
                  >
                    {s.num}
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-semibold text-[14px]">{s.label}</div>
                    <span
                      className="inline-block text-[11px] font-semibold px-2 py-0.5 rounded-full mt-0.5"
                      style={{ background: "#FAF6FF", color: "#8F27FF" }}
                    >
                      {s.year}
                    </span>
                  </div>
                  <span className={`text-gray-400 transition-transform duration-300 text-lg ${openMobile === i ? "rotate-180 text-[#8F27FF]" : ""}`}>▾</span>
                </button>
                {openMobile === i && (
                  <div className="px-5 pb-4 pt-1 text-[13.5px] text-[#474747] leading-relaxed pl-[70px]">
                    {s.desc}
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
