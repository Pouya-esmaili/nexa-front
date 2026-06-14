"use client";

import { useState } from "react";
import Row from "@/components/global/Row";

const MOBILE_INITIAL_COUNT = 6;

const faqs = [
  {
    q: "Is the old UK Start-up Visa still available?",
    a: "No. The traditional Start-up Visa was formally closed to new applicants. Anyone looking to establish an innovative business in the UK must now apply under the updated Innovator Founder Visa framework.",
  },
  {
    q: "Can multiple co-founders apply under the same business plan?",
    a: "Yes. Multiple founders can be endorsed for the same qualifying business plan. However, each co-founder must independently apply for endorsement, prove they are an instrumental member of the founding team, and demonstrate their own personal maintenance funds.",
  },
  {
    q: "Do I have to invest exactly £50,000 into the business on day one?",
    a: "No. There is no automatic upfront minimum capital requirement to get the visa. Your Endorsing Body will examine your financial forecasts to ensure you have realistic access to whatever capital your business plan requires to succeed.",
  },
  {
    q: "What happens if my business fails before the 3-year mark?",
    a: "Your visa will not be immediately canceled. Your legal residence remains secure as long as your Endorsing Body maintains your endorsement and you attend your mandatory 12-month and 24-month check-ins. If the business fails completely, you have a buffer period to switch to an alternative visa track or pivot your concepts.",
  },
  {
    q: "Can I work for another company while holding this visa?",
    a: "Yes, but with restrictions. Your primary role must be managing your startup. You are permitted to take a secondary job, provided the work is highly skilled — classified at RQF Level 3 or higher on the UK regulated qualifications framework.",
  },
  {
    q: "Can I switch to the Innovator Founder Visa from inside the UK?",
    a: "Yes, if you are currently on a valid visa such as a Student or Skilled Worker visa. You cannot switch from inside the UK if you hold a standard Visitor visa or a Short-term Student visa.",
  },
  {
    q: "What are the main authorized Endorsing Bodies?",
    a: "The Home Office has centralized the evaluation through a select group of approved organizations, including UK Endorsing Services, Innovator International, and Envestors Limited. Nexa coordinates directly with these entities to align your pitch.",
  },
  {
    q: "How long can I spend outside the UK without losing my settlement track?",
    a: "To successfully apply for ILR at Year 3, you must not have spent more than 180 days outside the UK in any rolling 12-month period.",
  },
  {
    q: "What happens during the 12-month and 24-month checkpoint meetings?",
    a: "Your Endorsing Body reviews whether you are still actively managing the business, making reasonable progress against your original business plan, and whether your funding remains legitimate.",
  },
  {
    q: "How long does the Home Office take to process the visa?",
    a: "From outside the UK, approximately 3 weeks after biometrics submission. From inside the UK, the standard window is 8 weeks — though priority processing options can shorten this to 1 to 5 days for an additional fee.",
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
