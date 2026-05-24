"use client";

import { useState } from "react";
import Row from "@/components/global/Row";

const steps = [
  {
    id: 1,
    num: "01",
    title: "Expression of Interest",
    time: "Immediate · 1–4 mo draw",
    detail: {
      title: "Expression of Interest (EOI)",
      desc: "Most provinces require candidates to submit an Expression of Interest. You're scored on several weighted factors before receiving an invitation.",
      items: [
        "Net worth & investment amount",
        "Business experience & language",
        "Proposed location (urban / regional)",
        "Sector & economic alignment",
      ],
    },
  },
  {
    id: 2,
    num: "02",
    title: "Invitation & Plan",
    time: "4–8 months review",
    detail: {
      title: "Invitation & Business Plan",
      desc: "If your score ranks competitively, you receive an Invitation to Apply (ITA) and submit your full application.",
      items: [
        "Detailed business plan",
        "Net worth verification report",
        "Supporting documentation",
        "Interview (some provinces)",
      ],
    },
  },
  {
    id: 3,
    num: "03",
    title: "Work Permit",
    time: "2–5 months IRCC",
    detail: {
      title: "Performance Agreement & Work Permit",
      desc: "Upon provincial approval, you sign a Business Performance Agreement and apply for a temporary work permit through IRCC.",
      items: [
        "Business Performance Agreement",
        "Letter of Support issued",
        "Federal work permit (2–5 mo)",
        "Move to the province",
      ],
    },
  },
  {
    id: 4,
    num: "04",
    title: "Operate & Nominate",
    time: "12–20 months",
    detail: {
      title: "Business Operation & Nomination",
      desc: "You have 12–20 months to invest committed capital, establish operations, create required jobs, and meet performance milestones.",
      items: [
        "Invest committed capital",
        "Establish operations",
        "Create required jobs",
        "Meet performance milestones",
      ],
    },
  },
  {
    id: 5,
    num: "05",
    title: "Permanent Residence",
    time: "16–18+ months",
    detail: {
      title: "Apply for Permanent Residence",
      desc: "The province nominates you for Permanent Residence. You then apply federally for PR — timing depends on IRCC workload.",
      items: [
        "Provincial nomination certificate",
        "Federal PR application",
        "IRCC processing 16–18+ months",
        "Final PR landing",
      ],
    },
  },
];

export default function ProcessTimeline() {
  const [activeId, setActiveId] = useState(1);
  const current = steps.find((s) => s.id === activeId)!;

  return (
    <section className="py-16 md:py-24 bg-white" id="process">

      {/* ========== MOBILE ========== */}
      <div className="md:hidden px-5">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-8">
          The Standard Provincial Structure
        </h2>
        <div className="flex flex-col gap-3">
          {steps.map((s) => {
            const isActive = activeId === s.id;
            return (
              <div
                key={s.id}
                onClick={() => setActiveId(s.id)}
                className="cursor-pointer p-4 rounded-2xl border transition-all"
                style={{
                  borderColor: isActive ? "#8F27FF" : "#E2E2E2",
                  background: isActive ? "#FAF6FF" : "white",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-bold transition-all"
                    style={{
                      background: isActive ? "#8F27FF" : "white",
                      color: isActive ? "white" : "#8F27FF",
                      border: "2px solid #8F27FF",
                    }}
                  >
                    {s.num}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-black">{s.title}</div>
                    <div className="text-xs text-gray-500">{s.time}</div>
                  </div>
                </div>
                {isActive && (
                  <div className="mt-3 pt-3 border-t border-[#8F27FF]/20">
                    <p className="text-sm text-gray-700 leading-relaxed mb-3">{s.detail.desc}</p>
                    <ul className="flex flex-col gap-1.5">
                      {s.detail.items.map((item) => (
                        <li key={item} className="text-xs text-gray-700 pl-5 relative">
                          <span className="absolute left-0 text-[#8F27FF] font-bold">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ========== DESKTOP ========== */}
      <div className="hidden md:block">
        <Row>
          <h2 className="text-4xl font-bold tracking-tight text-center mb-12">
            The Standard Provincial Structure
          </h2>

          <div
            className="rounded-[28px] p-12 border border-gray-200"
            style={{ background: "#FAF6FF" }}
          >
            {/* Step circles */}
            <div className="relative grid grid-cols-5 gap-2">
              <div
                className="absolute top-10 left-[8%] right-[8%] h-0.5 z-0"
                style={{ background: "#8F27FF", opacity: 0.2 }}
              />
              {steps.map((s) => {
                const isActive = activeId === s.id;
                return (
                  <div
                    key={s.id}
                    onClick={() => setActiveId(s.id)}
                    className="relative z-10 text-center cursor-pointer"
                  >
                    <div
                      className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-[26px] font-bold tracking-tight transition-all"
                      style={{
                        background: isActive ? "#8F27FF" : "white",
                        color: isActive ? "white" : "#8F27FF",
                        border: "2.5px solid #8F27FF",
                        transform: isActive ? "scale(1.08)" : undefined,
                        boxShadow: isActive
                          ? "0 0 0 5px #FAF6FF, 0 8px 24px rgba(143,39,255,0.3)"
                          : "0 0 0 5px #FAF6FF, 0 4px 14px rgba(143,39,255,0.15)",
                      }}
                    >
                      {s.num}
                    </div>
                    <div className="text-[15px] font-semibold text-black mb-1">{s.title}</div>
                    <div className="text-[12px] text-gray-500 font-medium">{s.time}</div>
                  </div>
                );
              })}
            </div>

            {/* Detail panel */}
            <div
              className="mt-9 bg-white rounded-2xl p-7 border border-gray-200 min-h-[140px]"
              style={{ borderLeft: "4px solid #8F27FF" }}
            >
              <h3 className="text-[22px] font-bold text-black mb-2.5 tracking-tight">{current.detail.title}</h3>
              <p className="text-[15px] text-[#474747] leading-[1.65] mb-4">{current.detail.desc}</p>
              <ul className="grid grid-cols-2 gap-2.5">
                {current.detail.items.map((item) => (
                  <li key={item} className="text-[14px] text-[#474747] pl-6 relative">
                    <span className="absolute left-0 text-[#8F27FF] font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </Row>
      </div>

    </section>
  );
}
