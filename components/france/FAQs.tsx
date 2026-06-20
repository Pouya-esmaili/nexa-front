"use client";

import { useState } from "react";
import Image from "next/image";
import Row from "@/components/global/Row";

const MOBILE_INITIAL_COUNT = 6;

const faqs = [
  {
    q: "Do I need a master's degree or minimum capital to qualify?",
    a: "No. Unlike other French business pathways, the French Tech Visa does not enforce a rigid educational baseline or a set corporate capital injection. The primary focus is the innovative nature of your project and your ability to execute it. Professional experience strengthens your profile, but ecosystem backing is what matters most.",
  },
  {
    q: "What qualifies as an \"innovative economic project\"?",
    a: "Your business must introduce a novel product, specialized service, proprietary technical process, or unique organizational methodology to the French market. This is verified when an approved French Tech incubator accepts your project, or when two recognized ecosystem stakeholders (venture funds, public labs) provide formal letters of support.",
  },
  {
    q: "Can multiple co-founders apply for the same project?",
    a: "Yes. Multiple co-founders can apply under the same startup, but each founder must independently secure a formal endorsement letter and demonstrate the full €21,876.36 financial threshold. Ecosystems generally limit backing to a maximum of 3 co-founders per project.",
  },
  {
    q: "What happens if my startup fails during the 4-year period?",
    a: "Your permit is not immediately revoked. The \"Talent Passport\" framework provides a secure runway for early-stage business realities. Your legal status remains valid until the expiration date on your card. However, to renew at the 4-year mark, you must show continued growth or present a viable new economic project.",
  },
  {
    q: "Can my spouse work freely in France?",
    a: "Yes. Your spouse automatically receives a matching \"Talent – Family\" multi-year residence card granting full legal rights to work at any French company, enter the public or private sector, or register their own independent ventures — no separate work permit required.",
  },
  {
    q: "Can I apply if I'm already legally inside France?",
    a: "Yes. If you hold a valid French residency card (student visa, job seeker status, or employment permit), you can submit a Change of Status application directly via the ANEF digital portal — without returning to your home country — provided your current legal stay has not expired.",
  },
  {
    q: "How long until I can apply for Permanent Residency?",
    a: "After 5 years of continuous, legal, and tax-compliant residence. The 10-year Permanent Resident Card fully uncouples your legal status from your startup — complete freedom to exit, pivot, or enter any employment. French citizenship via naturalization is also available at 5 years with a B1 French language test and civic interview.",
  },
  {
    q: "What are the government fees?",
    a: "€99 for the initial long-stay visa (VLS-TS) at the consulate. €350 for the 4-year physical Talent card (€300 admin fee + €50 stamp duty) via ANEF after arrival. €250 for each subsequent renewal. These fees do not include certified translations, apostilles, incubation costs (~€800/month), or corporate setup fees.",
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
