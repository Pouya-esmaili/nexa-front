"use client";

import { useState } from "react";
import Row from "@/components/global/Row";

const MOBILE_INITIAL_COUNT = 6;

const faqs = [
  {
    q: "What qualifies a business for an international entrepreneurship program?",
    a: "A qualifying business must be innovative, scalable, and have a clear value proposition with global market potential. The venture must demonstrate the ability to compete in international markets and create measurable economic value in the destination country.",
  },
  {
    q: "Do I need a fully developed product to apply?",
    a: "Not necessarily. Many programs accept applicants at the MVP or concept stage, provided you can demonstrate innovation potential and a credible business plan. Nexa helps you structure your application to present the strongest possible case at any stage.",
  },
  {
    q: "Which countries offer the most startup-friendly programs?",
    a: "Canada, Spain, Finland, Portugal, and the Netherlands are currently the most accessible and well-structured pathways for international founders. Each has unique advantages — from Canada's PR pathway to Spain's fast 20-day approval window.",
  },
  {
    q: "Can your team help refine my business model before application?",
    a: "Yes — this is one of our core services. We conduct a full business model review, financial feasibility analysis, and market positioning assessment before your application is submitted to any immigration authority.",
  },
  {
    q: "Is funding mandatory to apply for an entrepreneurship visa?",
    a: "Requirements vary by country. Some programs require proof of financial resources or a commitment from a designated organization. Nexa will clarify the exact threshold and help you prepare the necessary documentation for your chosen market.",
  },
  {
    q: "Can I relocate with my family under these programs?",
    a: "Yes. Most entrepreneurship visa programs include dependent family members from the initial application, with full work and study rights in most cases. We advise on family inclusion as part of every application we manage.",
  },
  {
    q: "How long does the entrepreneurship immigration process take?",
    a: "Timelines vary. Spain offers a 20-working-day fast-track. Canada's SUV typically takes 12–16 months. Finland and Portugal range from 3–6 months. Nexa maps out the full timeline at the start of every engagement so you can plan accordingly.",
  },
  {
    q: "Do you assist with company registration in the destination country?",
    a: "Yes. Company registration in the destination country is part of our end-to-end service. We work with local legal partners to handle entity formation, tax registration, and bank account setup so you can operate legally from day one.",
  },
  {
    q: "What happens after the startup is launched?",
    a: "Our relationship doesn't end at launch. We provide ongoing advisory, quarterly KPI reviews, renewal support, and investor relations assistance to ensure your venture continues to meet program milestones and grows sustainably.",
  },
  {
    q: "Is there a risk of rejection, and how do you minimize it?",
    a: "Every application carries some risk, but with a 89% success rate, Nexa significantly reduces it. We pre-screen your profile against official criteria, strengthen any weak points in your application, and use certified legal partners to avoid procedural errors.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const visibleMobileFaqs = showAll ? faqs : faqs.slice(0, MOBILE_INITIAL_COUNT);

  return (
    <div className="py-12 md:py-20">
      {/* Mobile */}
      <div className="md:hidden px-5">
        <h2 className="text-2xl font-bold text-center mb-8">FAQ</h2>
        <div className="flex flex-col gap-3 rounded-2xl p-5" style={{ background: "#F6F6F6" }}>
          {visibleMobileFaqs.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                onClick={() => toggle(index)}
                className="cursor-pointer bg-white rounded-xl p-4 transition-all duration-300"
                style={{
                  boxShadow: isActive ? "0px 4px 8px 0px #8F27FF40" : "0px 4px 4px 0px #0000001A",
                  borderStyle: "solid",
                  borderWidth: "1px 1px 1px 5px",
                  borderColor: isActive ? "#8F27FF" : "#D2D2D2",
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xs font-medium text-black leading-snug">{item.q}</h3>
                  <img
                    src={isActive ? "/images/Entrepreneurship/close.svg" : "/images/Entrepreneurship/open.svg"}
                    alt={isActive ? "Close" : "Open"}
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                  />
                </div>
                {isActive && <p className="mt-3 text-xs text-gray-600 leading-relaxed">{item.a}</p>}
              </div>
            );
          })}

          {!showAll && faqs.length > MOBILE_INITIAL_COUNT && (
            <button
              onClick={() => setShowAll(true)}
              className="mt-2 flex items-center justify-center gap-2 text-sm font-semibold text-[#8F27FF]"
            >
              Show More
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8F27FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          )}

          {showAll && (
            <button
              onClick={() => setShowAll(false)}
              className="mt-2 flex items-center justify-center gap-2 text-sm font-semibold text-[#8F27FF]"
            >
              Show Less
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8F27FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <Row>
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">FAQ</h2>
          <div
            className="mx-auto mt-10 grid grid-cols-2 gap-6 items-start"
            style={{ background: "#F6F6F6", borderRadius: "20px", padding: "48px", width: "100%" }}
          >
            {faqs.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={index}
                  onClick={() => toggle(index)}
                  className="cursor-pointer bg-white rounded-xl p-6 transition-all duration-300"
                  style={{
                    boxShadow: isActive ? "0px 4px 8px 0px #8F27FF40" : "0px 4px 4px 0px #0000001A",
                    borderStyle: "solid",
                    borderWidth: "1px 1px 1px 6px",
                    borderColor: isActive ? "#8F27FF" : "#D2D2D2",
                  }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-sm font-medium text-black leading-snug">{item.q}</h3>
                    <img
                      src={isActive ? "/images/Entrepreneurship/close.svg" : "/images/Entrepreneurship/open.svg"}
                      alt={isActive ? "Close" : "Open"}
                      className="w-6 h-6 flex-shrink-0"
                    />
                  </div>
                  {isActive && (
                    <p className="mt-3 text-sm text-gray-600 leading-relaxed">{item.a}</p>
                  )}
                </div>
              );
            })}
          </div>
        </Row>
      </div>
    </div>
  );
}
