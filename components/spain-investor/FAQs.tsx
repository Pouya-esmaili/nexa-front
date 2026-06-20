"use client";

import { useState } from "react";
import Row from "@/components/global/Row";

const MOBILE_INITIAL_COUNT = 6;

const faqs = [
  {
    q: "Can I still get a Spanish Golden Visa by purchasing a €500,000 property?",
    a: "No. Following the implementation of Organic Law 1/2025, Spain completely abolished the real estate investment route for new applicants. Property purchases no longer grant an automated pathway to residency. You must now use financial instruments (bonds, company shares, bank deposits) or establish an approved innovative business project.",
  },
  {
    q: "Am I required to live in Spain for a minimum number of days?",
    a: "No. The investor framework does not impose a strict physical presence rule to maintain or renew your temporary residency. You only need to visit Spain at least once during each permit period. However, if your long-term goal is Permanent Residency (year 5) or Citizenship (year 10), you must physically reside for at least 183 days per year to satisfy residency continuity rules.",
  },
  {
    q: "Can I include my family in the same application?",
    a: "Yes. The primary investor can include their spouse or registered civil partner, dependent children of any age (provided adult children are unmarried and financially reliant), and dependent elderly parents. Each family member requires an additional 100% of the IPREM (€7,200/year) in liquid savings or passive income streams.",
  },
  {
    q: "What happens if I decide to liquidate my investment before year 5?",
    a: "Your investment capital must remain fully deployed in the qualifying asset class for the entire duration of your temporary residency. If you liquidate prior to reaching year 5, your residency authorization will be revoked upon review. Once you transition to Permanent Residency, you are free to liquidate, transfer, or divest completely without any impact on your legal status.",
  },
  {
    q: "What is the primary path for business relocation now that real estate is closed?",
    a: "The focus has shifted toward financial instruments and the Enterprise and Business Innovation pathway. For business-based residency, Spain evaluates active business development — job creation, socioeconomic impact, and innovation alignment — rather than passive capital placement into property.",
  },
  {
    q: "Does the Investor Visa automatically grant work rights in Spain?",
    a: "Yes. Unlike the Non-Lucrative Visa, the Spain Investor Visa automatically grants the primary applicant and their adult dependents the right to live and work in Spain. This includes both self-employment as an entrepreneur or business owner and standard employment for a Spanish company.",
  },
];

export default function FAQs() {
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
        <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
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
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">Frequently Asked Questions</h2>
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
