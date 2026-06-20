"use client";

import Reveal from "@/components/global/LazyReveal";
import { useState } from "react";
import Row from "@/components/global/Row";
import Image from "next/image";

const MOBILE_INITIAL_COUNT = 6;

const faqs = [
  {
    q: "Can I split my investment across two or more properties?",
    a: "No. For the €400,000 and €800,000 tiers, the entire capital floor must be invested in a single, individual property unit. Splitting the requirement across a portfolio of multiple apartments is strictly prohibited under Law 5100/2024.",
  },
  {
    q: "Is the €250,000 conversion option available in Athens?",
    a: "Yes. The commercial-to-residential conversion framework is completely exempt from geographic zoning restrictions. You can identify a qualifying commercial warehouse, office, or industrial space in the absolute center of prime Athens or Piraeus, legally convert it to residential, and secure the Golden Visa at the €250,000 entry point.",
  },
  {
    q: "What happens to my family's residency if I sell the property?",
    a: "The Golden Visa is completely tied to the underlying asset. If you sell before reaching citizenship, your permanent residence permit — and all family members' permits — will be immediately and legally revoked. You are permitted to sell the asset to a new foreign investor who wishes to use it for their own Golden Visa application.",
  },
  {
    q: "Am I allowed to work or take a job in Greece on a Golden Visa?",
    a: "The Golden Visa does not grant access to the Greek labor market — you cannot be hired as an employee by a Greek company. However, you are fully authorized to live in Greece, establish your own Greek company, act as a shareholder or board director, and collect corporate dividends.",
  },
  {
    q: "Can a minor act as the main applicant?",
    a: "Yes. Greek administrative regulations permit a minor child to be designated as the main investor and property owner. Parents act as legal guardians to execute the transaction, and the minor acts as the primary applicant — allowing the extended family to secure residency under a unified file.",
  },
  {
    q: "What happens to children's visas when they turn 21?",
    a: "Children receive a permanent residence card valid until their 21st birthday. Upon turning 21, they can secure an independent, automatic 3-year extension valid until they turn 24, with clean records. To secure residency beyond age 24, the property title can be strategically transferred into their name.",
  },
  {
    q: "Are there annual property taxes in Greece?",
    a: "Yes. All property owners are subject to an annual tax called ENFIA, calculated based on the precise square footage, age, and objective zone valuation of the asset. For a standard residential unit, ENFIA typically ranges between €3.00 and €7.00 per square meter annually.",
  },
  {
    q: "Can I invest via a corporate entity instead of personally?",
    a: "Yes, provided the legal entity is registered within Greece or another EU member state, and the main applicant owns 100% of the corporate shares with total, unencumbered voting rights.",
  },
  {
    q: "What if my heritage building is not restored within 5 years?",
    a: "Under the €250,000 heritage restoration track, full restoration according to official architectural guidelines is a statutory prerequisite. If the restoration is incomplete at the 5-year mark, your application for residency renewal will be denied.",
  },
  {
    q: "Do my family or I ever need to speak Greek to keep the Golden Visa?",
    a: "Absolutely not. You, your spouse, your children, and your parents can obtain and fully renew your permanent residence cards every 5 years without ever needing to speak, read, or test in Greek. Language requirements only arise if you voluntarily choose to live in Greece full-time for 7 years and apply to naturalize as a Greek citizen.",
  },
];

export default function Faq() {
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
