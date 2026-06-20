"use client";

import { useState } from "react";
import Row from "@/components/global/Row";
import Image from "next/image";

const MOBILE_INITIAL_COUNT = 6;

const faqs = [
  { q: "What qualifies a business as a startup under international startup programs?",
    a: "A startup must be an innovative, scalable business with a clear value proposition, strong growth potential, and the ability to compete in global markets. It should be technology-driven or solve a measurable market problem through a replicable model." },
  { q: "Do I need a fully developed product to apply for a startup program?",
    a: "No. Many programs accept founders at the MVP or even concept stage, as long as you can demonstrate innovation potential, a credible plan, and the ability to create value in the destination country. Nexa helps strengthen your application at any stage." },
  { q: "Which countries offer the most startup-friendly immigration programs?",
    a: "Finland, Canada, UK, Netherlands, and France are among the most structured and accessible pathways for international startup founders. Each country offers unique advantages in terms of ecosystem access, processing time, and capital networks." },
  { q: "Can your team help refine my business model before application?",
    a: "Yes. Business model refinement is a core part of our pre-application service. We assess your value proposition, revenue model, market fit, and scalability — then help you present the strongest possible case to immigration authorities." },
  { q: "Is funding mandatory to apply for a startup visa?",
    a: "Requirements vary. Some programs require proof of funding or a commitment from a designated accelerator or investor. Others focus more on the quality of the business idea. Nexa will map out the exact financial requirements for your target country." },
  { q: "How do you support fundraising and capital access?",
    a: "We connect founders to our global network of investors, VCs, and designated organizations. We also help prepare investor-ready materials including pitch decks, financial models, and executive summaries to maximize your fundraising success." },
  { q: "Can I relocate with my family under a startup program?",
    a: "Yes. Most startup visa programs include dependent family members — spouse and children — with full rights to study and, in many cases, work. Nexa advises on family inclusion as part of every application we manage." },
  { q: "What industries are best suited for startup programs?",
    a: "Tech, SaaS, FinTech, HealthTech, CleanTech, EdTech, and AI-driven businesses are generally the strongest fits. However, any innovative, scalable model with a clear market need can qualify — Nexa will assess your specific sector against each country's criteria." },
  { q: "How long does the startup immigration process usually take?",
    a: "Timelines vary by country. Finland typically takes 2–3 months, Canada 12–16 months, UK 3–8 weeks, Netherlands 3–6 months, and France 2–4 months. Nexa provides a full timeline roadmap at the beginning of every engagement." },
  { q: "What happens after the startup is launched?",
    a: "Our support continues post-launch. We offer ongoing advisory, KPI tracking, visa renewal support, investor relations management, and access to our global partner network to help your startup hit its growth milestones and scale sustainably." },
];

export default function StartupFAQ() {
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
