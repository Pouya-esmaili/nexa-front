"use client";

import { useState } from "react";
import Image from "next/image";
import Row from "@/components/global/Row";

const MOBILE_INITIAL_COUNT = 6;

const faqs = [
  {
    q: "What province best fits my business and settlement goals?",
    a: "It depends on sector, capital, and lifestyle. Ontario and BC suit technology and scalable ventures; Saskatchewan, Manitoba, and Atlantic provinces favor lower-investment regional businesses. Investment thresholds typically range from CAD 100,000–600,000.",
  },
  {
    q: "Does Nexa participate in mergers and acquisitions (M&A)?",
    a: "Yes, Nexa actively supports M&A activity — from target identification and due diligence to deal structuring and post-merger integration planning for businesses entering Canadian markets.",
  },
  {
    q: "How much investment am I expected to commit?",
    a: "Minimum investment varies by province and city tier — generally ranging from CAD 100,000 in select regional programs to CAD 600,000+ in major metropolitan streams.",
  },
  {
    q: "How does Nexa evaluate potential investments?",
    a: "Nexa evaluates businesses based on scalability, sector alignment with provincial priorities, management experience, financial viability, and long-term growth potential in the Canadian market.",
  },
  {
    q: "Do I need existing revenue, or can early-stage startups qualify?",
    a: "Most entrepreneur PNP streams do not require existing revenue. Your plan must demonstrate financial viability, market demand, and realistic projections.",
  },
  {
    q: "Do we work with founders who are raising their first round?",
    a: "Yes. Nexa works with first-time founders raising capital, helping structure investment readiness, pitch materials, and introductions to the Canadian venture ecosystem.",
  },
  {
    q: "What jobs must I create and by when?",
    a: "Most programs require at least 1 full-time job for a Canadian citizen or PR. Major urban streams may require 2+. Creation is typically expected within 12–20 months.",
  },
  {
    q: "How long does the investment evaluation process take?",
    a: "Initial evaluation typically takes 2–4 weeks. Full due diligence and decision may extend to 6–10 weeks depending on complexity and documentation readiness.",
  },
  {
    q: "How do I align my plan with provincial economic priorities?",
    a: "Each province publishes sector priorities — tech, agriculture, manufacturing, tourism, clean energy. Your venture must show local economic impact and long-term sustainability.",
  },
  {
    q: "Can we help with international market expansion?",
    a: "Yes. Nexa's international network spans multiple markets, offering market research, local partner introductions, and cross-border growth strategy support.",
  },
  {
    q: "How long does it take to obtain Permanent Residence?",
    a: "From initial application to PR approval, timelines typically range between 24 and 36 months — including the 12–20 month business establishment period plus federal processing after nomination.",
  },
  {
    q: "How can I submit my startup or project to Nexa?",
    a: "Use the contact form below to share details about your venture. Our team reviews all submissions and responds within 48 business hours with next steps.",
  },
];

export default function FAQSection() {
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
        <h2 className="text-2xl font-bold text-center mb-8">FAQs</h2>
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
                  <Image
                    src={isActive ? "/images/Entrepreneurship/close.svg" : "/images/Entrepreneurship/open.svg"}
                    alt={isActive ? "Close" : "Open"}
                    width={20}
                    height={20}
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
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">FAQs</h2>
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
                    <Image
                      src={isActive ? "/images/Entrepreneurship/close.svg" : "/images/Entrepreneurship/open.svg"}
                      alt={isActive ? "Close" : "Open"}
                      width={24}
                      height={24}
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
