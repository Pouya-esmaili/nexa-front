"use client";

import { useState } from "react";
import Row from "../global/Row";

const faqData = [
  {
    title: "What qualifies a business as a startup under international startup programs?",
    content: "A startup must be an innovative, scalable business with a clear value proposition, growth potential, and the ability to compete in global markets.",
  },
  {
    title: "Do I need a fully developed product to apply for a startup program?",
    content: "No, many programs accept businesses at various stages, from early-stage ideas to growth-phase companies, as long as you can demonstrate market viability.",
  },
  {
    title: "Which countries offer the most startup-friendly immigration programs?",
    content: "Countries like Canada, Finland, the Netherlands, UK, and France are known for their robust startup visa programs with streamlined pathways for entrepreneurs.",
  },
  {
    title: "Can your team help refine my business model before application?",
    content: "Yes, our advisors work closely with you to strengthen your business plan, financials, and overall pitch to maximize your chances of approval.",
  },
  {
    title: "Is funding mandatory to apply for a startup visa?",
    content: "Requirements vary by country, but most programs require proof of sufficient funds or secured investment to support your business operations.",
  },
  {
    title: "How do you support fundraising and capital access?",
    content: "We connect startups with our global network of investors, assist with pitch preparation, and guide you through funding rounds and grant opportunities.",
  },
  {
    title: "Can I relocate with my family under a startup program?",
    content: "Most startup visa programs allow dependants — spouses and children — to accompany the primary applicant, often with work and study rights.",
  },
  {
    title: "What industries are best suited for startup programs?",
    content: "Technology, fintech, cleantech, health-tech, and AI-driven businesses tend to qualify most easily, though many countries accept a wide range of innovative sectors.",
  },
  {
    title: "How long does the startup immigration process usually take?",
    content: "Processing times vary from 2 to 12 months depending on the country and program. Our team helps expedite documentation to minimize delays.",
  },
  {
    title: "Do you assist with company registration in the destination country?",
    content: "Yes, we provide end-to-end support including company registration, legal setup, and compliance requirements in the target country.",
  },
  {
    title: "What makes your startup advisory services different?",
    content: "We combine immigration expertise with deep business development experience, offering integrated support from visa application through to market launch.",
  },
  {
    title: "Can experienced business owners apply for startup programs?",
    content: "Absolutely. Experienced entrepreneurs with a track record are often considered stronger candidates and may qualify for expedited pathways.",
  },
  {
    title: "What happens after the startup is launched?",
    content: "We provide ongoing advisory, performance monitoring, and access to our partner network to ensure your business grows successfully in its new market.",
  },
  {
    title: "Is there a risk of rejection, and how do you minimize it?",
    content: "Rejection risk exists in every application, but our thorough preparation process — business plan review, document verification, and mock evaluations — significantly reduces it.",
  },
  {
    title: "How do I know if my startup idea is suitable for a global market?",
    content: "Our team conducts a detailed market assessment to evaluate scalability, demand, and competitive positioning of your idea in the target market.",
  },
];

const MOBILE_INITIAL = 6;

export default function StartupFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const visibleMobile = showAll ? faqData : faqData.slice(0, MOBILE_INITIAL);

  const cardClass = (isActive: boolean) =>
    `bg-white rounded-xl p-4 md:p-5 cursor-pointer transition-all duration-200 ${
      isActive
        ? "shadow-[0px_4px_8px_0px_#8F27FF40] border border-l-[6px] border-[#8F27FF]"
        : "shadow-[0px_4px_4px_0px_#0000001A] border border-l-[6px] border-[#D2D2D2]"
    }`;

  return (
    <div>

      {/* Mobile */}
      <div className="md:hidden px-5 py-12">
        <h2 className="text-2xl font-bold text-center mb-8">FAQs</h2>
        <div className="bg-[#F6F6F6] rounded-[20px] p-6 flex flex-col gap-3">
          {visibleMobile.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <div key={index} onClick={() => toggle(index)} className={cardClass(isActive)}>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xs font-medium text-black leading-snug">{item.title}</h3>
                  <img
                    src={isActive ? "/images/Entrepreneurship/close.svg" : "/images/Entrepreneurship/open.svg"}
                    alt={isActive ? "Close" : "Open"}
                    className="w-5 h-5 flex-shrink-0"
                  />
                </div>
                {isActive && (
                  <p className="mt-3 text-xs text-gray-600 leading-relaxed">{item.content}</p>
                )}
              </div>
            );
          })}

          {!showAll && (
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
      <div className="hidden md:block py-16 lg:py-20">
        <Row>
          <h2 className="text-center text-3xl lg:text-4xl font-bold mb-12">FAQs</h2>
          <div className="bg-[#F6F6F6] rounded-[20px] p-6 md:p-10 lg:p-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqData.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <div key={index} onClick={() => toggle(index)} className={cardClass(isActive)}>
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-sm font-medium text-black leading-snug">{item.title}</h3>
                    <img
                      src={isActive ? "/images/Entrepreneurship/close.svg" : "/images/Entrepreneurship/open.svg"}
                      alt={isActive ? "Close" : "Open"}
                      className="w-6 h-6 flex-shrink-0"
                    />
                  </div>
                  {isActive && (
                    <p className="mt-3 text-sm text-gray-600 leading-relaxed">{item.content}</p>
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
