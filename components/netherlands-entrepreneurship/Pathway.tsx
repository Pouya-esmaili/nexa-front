"use client";

import { useState } from "react";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const pathwayItems = [
  {
    num: "01",
    label: "Initial Card",
    year: "2 Years",
    detail: {
      title: "2-Year Initial Card",
      text: "Operate your Dutch entity with full work authorization. Sponsor spouse and minor children under family reunification channels.",
    },
    body: "Operate your Dutch business with full work authorization. Sponsor your spouse and minor children under family reunification channels — they receive a matching residence card.",
  },
  {
    num: "02",
    label: "Renewals",
    year: "2–5 Year Blocks",
    detail: {
      title: "Indefinite Renewals",
      text: "Renewable for subsequent 2-to-5-year blocks as long as the business remains financially viable and yields income at Dutch minimum wage standards.",
    },
    body: "Renewable for subsequent 2-to-5-year blocks, provided the business remains financially viable and you continue to earn at or above Dutch minimum wage standards.",
  },
  {
    num: "03",
    label: "Permanent Residency",
    year: "Year 5",
    detail: {
      title: "Dutch Permanent Residency",
      text: "After 5 consecutive years of continuous, legal residency, your right to live and work in the Netherlands permanently uncouples from the business.",
    },
    body: "After 5 consecutive years of legal, continuous residency with no unapproved extended absences, your right to live and work in the Netherlands permanently uncouples from your business performance.",
  },
  {
    num: "04",
    label: "Dutch Citizenship",
    year: "Year 5+",
    detail: {
      title: "Dutch Citizenship",
      text: "Requires passing civic integration exams (Inburgering) at A2 Dutch level. Note: the Netherlands enforces a strict renunciation policy — exceptions apply only in specific circumstances.",
    },
    body: "Requires passing the civic integration exams (Inburgering) at A2 Dutch proficiency. The Netherlands enforces a strict renunciation policy — you must legally give up your original nationality, unless you qualify for specific exemptions such as being married to a Dutch citizen.",
  },
];

export default function Pathway() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="py-20 md:py-24" style={{ background: "#F7F6F9" }}>
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1] text-center mb-14">
            Long-Term Horizon
          </h2>
        </Reveal>

        {/* Desktop track */}
        <Reveal variant="up" delay={60}>
          <div className="hidden md:block mb-10">
            <div className="relative grid grid-cols-4 gap-0 mb-10">
              {/* Connecting line */}
              <div
                className="absolute top-7 left-[10%] right-[10%] h-0.5 z-0"
                style={{ background: "linear-gradient(90deg, #8F27FF, rgba(143,39,255,0.2))" }}
              />

              {pathwayItems.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center relative z-10 px-3 cursor-pointer group"
                  onClick={() => setOpenIndex(i)}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-[14px] font-bold transition-all duration-300 mb-4"
                    style={{
                      background: openIndex === i ? "#8F27FF" : "white",
                      border: "2.5px solid #8F27FF",
                      color: openIndex === i ? "white" : "#8F27FF",
                      boxShadow:
                        openIndex === i
                          ? "0 0 0 6px #FAF6FF, 0 8px 24px rgba(143,39,255,0.3)"
                          : "0 0 0 6px #FAF6FF",
                      transform: openIndex === i ? "scale(1.08)" : "scale(1)",
                    }}
                  >
                    {item.num}
                  </div>
                  <div className="text-[15px] font-semibold text-black mb-1">{item.label}</div>
                  <span
                    className="text-[12px] font-semibold px-2.5 py-0.5 rounded-full"
                    style={{ color: "#8F27FF", background: "#FAF6FF" }}
                  >
                    {item.year}
                  </span>
                </div>
              ))}
            </div>

            {/* Detail cards */}
            <div className="grid grid-cols-4 gap-4">
              {pathwayItems.map((item, i) => (
                <div
                  key={i}
                  className="rounded-[14px] p-5 transition-all duration-200 cursor-pointer"
                  onClick={() => setOpenIndex(i)}
                  style={{
                    background: openIndex === i ? "#FAF6FF" : "white",
                    border: openIndex === i ? "1px solid rgba(143,39,255,0.18)" : "1px solid #E2E2E2",
                  }}
                >
                  <h5 className="text-[14px] font-semibold text-black mb-2">{item.detail.title}</h5>
                  <p className="text-[13px] text-[#929292] leading-[1.6] m-0">{item.detail.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Mobile accordion */}
        <Reveal variant="up" delay={80}>
          <div
            className="md:hidden flex flex-col gap-0 overflow-hidden rounded-[20px]"
            style={{ border: "1px solid #E2E2E2" }}
          >
            {pathwayItems.map((item, i) => (
              <div
                key={i}
                className="border-b last:border-b-0"
                style={{ borderColor: "#E2E2E2" }}
              >
                <button
                  className="w-full flex items-center gap-3.5 px-4 py-4 text-left transition-colors duration-200"
                  style={{ background: openIndex === i ? "#FAF6FF" : "white" }}
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                >
                  <div
                    className="w-[34px] h-[34px] rounded-full flex-shrink-0 flex items-center justify-center text-[12px] font-bold transition-all duration-300"
                    style={{
                      background: openIndex === i ? "#8F27FF" : "white",
                      border: "2px solid #8F27FF",
                      color: openIndex === i ? "white" : "#8F27FF",
                      boxShadow: "0 0 0 4px #FAF6FF",
                    }}
                  >
                    {item.num}
                  </div>
                  <div className="flex-1">
                    <div className="text-[14px] font-semibold text-black mb-0.5">{item.label}</div>
                    <span
                      className="text-[11px] font-semibold px-2 py-0.5 rounded-full inline-block"
                      style={{ color: "#8F27FF", background: "#FAF6FF" }}
                    >
                      {item.year}
                    </span>
                  </div>
                  <svg
                    className="w-5 h-5 flex-shrink-0 transition-transform duration-300"
                    style={{
                      color: openIndex === i ? "#8F27FF" : "#929292",
                      transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {openIndex === i && (
                  <div
                    className="px-4 pb-4 text-[13px] leading-[1.6] text-[#474747]"
                    style={{ paddingLeft: "62px" }}
                  >
                    {item.body}
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
