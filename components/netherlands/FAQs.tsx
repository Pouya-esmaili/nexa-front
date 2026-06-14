"use client";

import { useState } from "react";
import Row from "@/components/global/Row";

const MOBILE_INITIAL_COUNT = 6;

const faqs = [
  {
    q: "Is there a Dutch language requirement to get the initial Startup Visa?",
    a: "No. The visa application, business plan, pitching sessions, and day-to-day operations can be conducted entirely in English. You only need to learn Dutch later if you choose to settle permanently and apply for citizenship at the 5-year mark.",
  },
  {
    q: "Can multiple co-founders apply under the same business plan?",
    a: "Yes, up to 3 co-founders can use the same business plan. However, each must submit an individual application, hold an active management role, and independently prove they have at least €21,000 in personal financial capital.",
  },
  {
    q: "What happens if my startup fails during the visa year?",
    a: "Your visa will not be immediately cancelled. It remains legally valid until the expiration date on your residence card, giving you an administrative buffer to wind down operations, pivot, or adjust your legal status.",
  },
  {
    q: "Can I take a side job while running my startup?",
    a: "Yes. You are permitted to take secondary employment or freelance work alongside your startup. However, your innovative venture must remain your primary focus, and any external employer must comply with standard Dutch labor rules.",
  },
  {
    q: "Can my facilitator finance my required personal living costs?",
    a: "Yes. Your facilitator can choose to cover your monthly living expenses directly. This arrangement must be explicitly written into your signed facilitator agreement, specifying that the capital is fully guaranteed for your entire one-year stay — eliminating the need to show personal bank savings of €21,000.",
  },
  {
    q: "Can my spouse work freely in the Netherlands?",
    a: "Yes. Your spouse or registered partner receives an automatic matching residence permit with complete, unrestricted access to the Dutch labor market. They do not need a corporate sponsor or separate work permit — they can accept any job offer or build their own freelance business immediately.",
  },
  {
    q: "Can I transition directly from the Startup Visa to Permanent Residency?",
    a: "Not immediately. The Startup Visa is a non-extendable 1-year bridge. You must first transition into a Self-Employed Permit at year-end. After completing 5 continuous legal years of residency in total, you become eligible for Permanent Residency or Dutch Citizenship.",
  },
  {
    q: "How long does the entire process take?",
    a: "On average 4 to 5 months: 4 to 6 weeks to secure a facilitator and prepare your files, followed by the IND's official decision window of up to 90 days.",
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
