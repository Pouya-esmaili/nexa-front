"use client";

import { useState } from "react";
import Image from "next/image";
import Row from "@/components/global/Row";

const MOBILE_INITIAL_COUNT = 6;

const faqs = [
  {
    q: "What is the minimum investment for the UAE Golden Visa in 2026?",
    a: "The baseline capital threshold is AED 2,000,000 (approximately USD 545,000). This capital must be deployed into qualified asset classes — UAE real estate (ready or approved off-plan freehold properties), accredited public investment funds, or domestic corporate setups with verified paid-up share capital.",
  },
  {
    q: "Can I get a UAE Golden Visa with a mortgaged property?",
    a: "Yes. The strict 50% cash down-payment rule has been lifted. Eligibility is now determined solely by the official Dubai Land Department (DLD) valuation. If the total asset value reaches or exceeds AED 2,000,000, you qualify. A current No Objection Certificate (NOC) from your financing bank confirming the mortgage is in good standing is required.",
  },
  {
    q: "Can I combine multiple properties to reach the AED 2 million threshold?",
    a: "Yes. The regulatory framework explicitly permits portfolio aggregation. You can combine multiple independent freehold properties (residential, commercial, or mixed) to satisfy the AED 2,000,000 baseline. Each asset must be registered under your name, located in designated freehold zones, and backed by an individual DLD valuation certificate free of unresolved liens.",
  },
  {
    q: "Does the purchase price or current market valuation determine eligibility?",
    a: "Eligibility is governed strictly by the official government valuation, not the historic purchase price on your title deed. If you bought an asset for less than AED 2,000,000 but a current DLD valuation shows appreciation past the threshold, your file is fully eligible. Conversely, if market softening pushes the current valuation below the threshold, the file will be flagged for restructuring.",
  },
  {
    q: "What are the bank statement requirements?",
    a: "Depending on your investment vector, you must present a 3 to 6-month localized bank statement from an accredited institution (e.g., Emirates NBD, ADCB). The statements must prove clean capital origin pathways, show a continuous disposable income buffer, and verify the invested capital is wholly owned by you and not leveraged via unapproved secondary loans.",
  },
  {
    q: "Can a husband and wife jointly apply using a single property?",
    a: "Yes. Married couples can combine their separately owned shares or purchase jointly to meet the AED 2,000,000 threshold. You must provide a legally translated and fully attested marriage certificate verified by the Ministry of Foreign Affairs (MOFA). Once approved, the primary applicant secures the 10-year residency and immediately acts as legal sponsor for the spouse.",
  },
  {
    q: "How long can a Golden Visa holder stay outside the UAE?",
    a: "Indefinitely. The Golden Visa explicitly waives the 6-month travel restriction that applies to standard UAE residency visas. Golden Residency holders enjoy complete global mobility and can remain outside the UAE without any risk of cancellation of their legal status, Emirates ID, or asset linkages.",
  },
  {
    q: "Who can I sponsor under the UAE Golden Visa?",
    a: "The primary investor can sponsor their spouse, unmarried daughters of any age, sons with no historical age caps, and an unlimited number of domestic workers and executive household staff. If the primary investor passes away within the 10-year term, sponsored dependents maintain their residency until the natural expiration of the permit.",
  },
  {
    q: "Does the UAE Golden Visa provide a path to UAE citizenship?",
    a: "No. The UAE Golden Visa is structurally a long-term, self-sponsored residency program designed for wealth preservation and asset security. It does not offer an automated, direct, or time-based path to UAE citizenship or permanent residency. Emirati nationality is granted almost exclusively via royal decrees, exceptional state recommendations, or specialized federal talent quotas.",
  },
  {
    q: "What is the estimated processing time?",
    a: "With the government's centralized one-portal application system, the end-to-end pipeline spans 2 to 6 weeks once asset certification is complete. This includes entry permit issuance, mandatory in-country medical screening (blood tests and chest X-rays), biometric logging at an ICP center, and final Emirates ID activation.",
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
