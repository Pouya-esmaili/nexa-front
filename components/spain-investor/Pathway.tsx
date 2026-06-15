"use client";

import { useState } from "react";
import Image from "next/image";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const items = [
  {
    num: "01",
    label: "Initial Residency",
    year: "1 or 3 Years",
    title: "Initial Residency",
    desc: "1-year buffer if applied from abroad, or a 3-year authorization if initiated directly within Spain. No minimum days of physical presence required to maintain.",
    body: "1-year residency buffer if applied from abroad. 3-year authorization if initiated directly within Spain. No minimum days of physical presence required to maintain your investor residency status.",
  },
  {
    num: "02",
    label: "5-Year Renewal",
    year: "Year 1 / 3",
    title: "5-Year Renewal",
    desc: "Renewable for 5-year blocks. Must maintain the foundational investment capital and continue to meet financial sustainability criteria throughout the renewal period.",
    body: "Renewable for 5-year blocks provided you maintain the foundational investment capital in the qualifying asset class and continue to meet the IPREM financial sustainability thresholds.",
  },
  {
    num: "03",
    label: "Permanent Residency",
    year: "Year 5",
    title: "Permanent Residency (EU Long-Term)",
    desc: "After 5 years of continuous residence. Must not exceed 6 consecutive months outside the EU per year, or 10 total months outside Spain in the 5-year window. Capital can be liquidated.",
    body: "After 5 years of continuous, legal residence — not exceeding 6 consecutive months outside the EU in any year, or 10 total months outside Spain. Once permanent status is granted, you may liquidate, transfer, or divest your investment capital without impacting your legal status.",
  },
  {
    num: "04",
    label: "Spanish Citizenship",
    year: "Year 10 (or 2)",
    title: "Spanish Citizenship",
    desc: (
      <>
        Standard: <strong className="text-black font-semibold">10 years</strong>. Ibero-Americans, Filipinos, Equatorial
        Guineans, Andorrans, and Sephardic Jews: <strong className="text-black font-semibold">2 years</strong>. Dual
        citizenship permitted for qualifying nationals.
      </>
    ),
    body: "Standard naturalization: 10 years. Expedited 2-year track: nationals of Latin American countries, the Philippines, Equatorial Guinea, Andorra, and individuals of Sephardic Jewish descent. Dual citizenship permitted for qualifying nationals.",
  },
];

export default function Pathway() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-24 bg-white">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1] text-center mb-14">
            Long-Term Horizons
          </h2>
        </Reveal>

        {/* Desktop track */}
        <Reveal variant="up" delay={60}>
          <div className="hidden md:grid grid-cols-4 gap-0 relative mb-10">
            {/* Connecting line */}
            <div
              className="absolute top-[27px] h-[2px] z-0"
              style={{
                left: "10%",
                right: "10%",
                background: "linear-gradient(90deg, #8F27FF, rgba(143,39,255,0.2))",
              }}
            />
            {items.map((item, i) => (
              <button
                key={i}
                className="flex flex-col items-center text-center relative z-10 px-3 cursor-pointer bg-transparent border-none"
                onClick={() => setActiveIndex(i)}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-[14px] font-bold mb-4 transition-all duration-300"
                  style={{
                    background: activeIndex === i ? "#8F27FF" : "white",
                    border: "2.5px solid #8F27FF",
                    color: activeIndex === i ? "white" : "#8F27FF",
                    boxShadow:
                      activeIndex === i
                        ? "0 0 0 6px #FAF6FF, 0 8px 24px rgba(143,39,255,0.3)"
                        : "0 0 0 6px #FAF6FF",
                    transform: activeIndex === i ? "scale(1.08)" : "scale(1)",
                  }}
                >
                  {item.num}
                </div>
                <div className="text-[15px] font-semibold text-black mb-1">{item.label}</div>
                <div
                  className="text-[12px] font-semibold px-2.5 py-0.5 rounded-full"
                  style={{ color: "#8F27FF", background: "#FAF6FF" }}
                >
                  {item.year}
                </div>
              </button>
            ))}
          </div>
        </Reveal>

        {/* Desktop detail cards */}
        <Reveal variant="up" delay={100}>
          <div className="hidden md:grid grid-cols-4 gap-4">
            {items.map((card, i) => (
              <div
                key={i}
                className="rounded-[14px] p-5 transition-all duration-200 cursor-pointer"
                style={{
                  background: activeIndex === i ? "#FAF6FF" : "#F7F6F9",
                  border: activeIndex === i ? "1px solid rgba(143,39,255,0.25)" : "1px solid #E2E2E2",
                }}
                onClick={() => setActiveIndex(i)}
              >
                <h5 className="text-[14px] font-semibold text-black mb-2">{card.title}</h5>
                <p className="text-[13px] text-[#929292] leading-[1.6] m-0">{card.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Mobile accordion */}
        <div className="md:hidden rounded-[20px] overflow-hidden" style={{ border: "1px solid #E2E2E2" }}>
          {items.map((item, i) => (
            <div
              key={i}
              style={{ borderBottom: i < items.length - 1 ? "1px solid #E2E2E2" : "none" }}
            >
              <button
                className="w-full flex items-center gap-3.5 p-4 px-[18px] text-left transition-colors duration-200"
                style={{ background: openIndex === i ? "#FAF6FF" : "white" }}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div
                  className="w-[34px] h-[34px] rounded-full flex items-center justify-center text-[12px] font-bold flex-shrink-0 transition-all duration-200"
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
                <Image
                  src="/images/arrow.svg"
                  alt="toggle"
                  width={18}
                  height={18}
                  className="flex-shrink-0 transition-transform duration-200"
                  style={{
                    transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                    filter: openIndex === i ? "invert(27%) sepia(99%) saturate(1600%) hue-rotate(260deg) brightness(90%)" : "invert(60%)",
                  }}
                />
              </button>
              {openIndex === i && (
                <div
                  className="text-[13px] text-[#474747] leading-[1.6] pb-4"
                  style={{ paddingLeft: "62px", paddingRight: "18px" }}
                >
                  {item.body}
                </div>
              )}
            </div>
          ))}
        </div>
      </Row>
    </section>
  );
}
