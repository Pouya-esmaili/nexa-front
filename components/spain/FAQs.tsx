"use client";

import { useState } from "react";
import Image from "next/image";
import Row from "@/components/global/Row";

const MOBILE_INITIAL_COUNT = 6;

const faqs = [
  {
    q: "Can I apply while visiting Spain as a tourist?",
    a: "Yes. You can enter Spain on a standard Schengen tourist visa or visa-free passport and file your application directly with the UGE while onshore. Applying from inside Spain bypasses the consulate entirely and grants the full 3-year residence card directly, instead of a 1-year entry visa.",
  },
  {
    q: "What happens if my application faces \"administrative silence\"?",
    a: "The Spain Entrepreneur Visa is governed by a strict positive administrative silence rule (silencio administrativo positivo). If the UGE does not issue an explicit approval or rejection within 20 working days from your submission date, your application is legally deemed approved.",
  },
  {
    q: "Do I need to speak Spanish to get the Entrepreneur Visa?",
    a: "No. Your business plan and technical pitch can be presented to ENISA and the UGE in English or Spanish. There is no initial language requirement. You only need certified language proficiency (DELE A2) later if you choose to pursue Spanish citizenship.",
  },
  {
    q: "Can multiple co-founders apply under the same business plan?",
    a: "Yes. Multiple co-founders can be part of the same corporate project. The business plan must clearly define the executive role of each founder. Each individual must independently prove the required €9,000+ personal financial runway.",
  },
  {
    q: "What happens to my visa status if my startup fails?",
    a: "Your residence permit will not be instantly revoked. Your legal stay remains valid until the expiration date on your physical TIE card. However, to qualify for renewal, you must demonstrate active economic operation or transition to an alternate residency status.",
  },
  {
    q: "Can I take a side job or work for another Spanish company?",
    a: "Your primary legal status is linked to managing your approved startup. However, the Entrepreneur Visa permits secondary employment or consulting work, provided it does not interfere with the growth of your core venture.",
  },
  {
    q: "What are the exact requirements for the private health insurance?",
    a: "The policy must be contracted with a company authorized to operate in Spain, covering hospitalization, emergencies, and general medicine with no copayments and no deductibles. Travel insurance or standard international policies with deductibles will trigger an immediate application rejection.",
  },
  {
    q: "Does Spain allow dual citizenship when I naturalize?",
    a: "Spain generally requires renouncing your original nationality upon naturalization. However, citizens of Ibero-American countries, Portugal, Andorra, the Philippines, and Equatorial Guinea are legally permitted to retain their original nationality — allowing full dual citizenship.",
  },
  {
    q: "What is a Spanish NIE and how do I get it?",
    a: "The NIE (Número de Identidad de Extranjero) is your mandatory tax and legal identification number in Spain. You can secure it through your local Spanish Embassy abroad or via a designated legal representative using a power of attorney directly inside Spain.",
  },
  {
    q: "How long does ENISA take to issue its business evaluation report?",
    a: "The ENISA review takes an average of 30 to 60 days depending on application volume — separate from the UGE's 20-working-day decision window. Nexa structures your full timeline to account for this evaluation window from the start.",
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
