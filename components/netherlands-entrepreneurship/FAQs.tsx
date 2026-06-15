"use client";

import { useState } from "react";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const faqs = [
  {
    q: "What is the minimum monthly income required?",
    a: "The IND requires your business to provide a stable gross monthly income of at least €1,734.57 — equal to the 2026 Dutch single-person levensonderhoud standard, inclusive of the mandatory 8% holiday allowance. This threshold is subject to biannual indexation by the Dutch government.",
  },
  {
    q: "How much capital must I inject into my Dutch business?",
    a: "The RVO enforces a minimum of €4,500 in unencumbered personal equity injected directly into your Dutch business (registered Dutch BV or one-person business). This capital cannot come from unapproved personal loans or credit lines.",
  },
  {
    q: "How does the 300-point RVO scoring system work?",
    a: "The RVO uses a rigid 300-point matrix divided into three legs: Personal Experience, Business Plan, and Economic Added Value — 100 points each. You must score a minimum of 30 points in each individual leg, with a total minimum of 90 points. Failing the 30-point floor in any single leg triggers automatic full rejection regardless of your total score.",
  },
  {
    q: "Can I do paid freelance work while my visa is being processed?",
    a: "No. Under current Dutch immigration law, third-country nationals are strictly prohibited from performing paid work or executing service contracts in the Netherlands while their initial application is being processed. Your KvK can be structured and registered, but trading cannot commence until the physical residence card is activated.",
  },
  {
    q: "What evidence proves my financial projections to the RVO?",
    a: "The RVO penalizes unbacked forecasting. You must provide signed Letters of Intent (LOIs) from prospective B2B clients, active service contracts, or Memoranda of Understanding (MOUs) with Dutch companies. Generic market reports without localized business connections will result in a lower point allocation.",
  },
  {
    q: "Can I use this visa if I work for just one client?",
    a: "No. The RVO and Belastingdienst actively monitor for 'false self-employment' (schijnzelfstandigheid). Your business plan must prove multiple target clients, clear corporate risk, and independent marketing infrastructure. Relying on a single primary client mirrors an employment relationship and triggers rejection.",
  },
  {
    q: "What is the TB test requirement upon arrival?",
    a: "Unless your nationality is on the IND exemption list, you must undergo a mandatory tuberculosis screening (chest X-ray) within 3 months of arriving in the Netherlands. This is performed at a local public health service (GGD). Failing to complete this screening can lead to immediate cancellation of your residence permit.",
  },
  {
    q: "Can I sponsor my family under this visa?",
    a: "Yes. Once approved, you act as legal sponsor for your spouse or registered partner and minor children through family reunification channels. They receive a residence card matching your visa validity period, with specific labor market markers regarding their independent work rights.",
  },
  {
    q: "Can I keep my original passport when naturalizing?",
    a: "The Netherlands enforces a strict renunciation policy — by default you must legally surrender your original nationality to become a Dutch citizen. Exceptions apply in specific circumstances, such as being legally married to a Dutch national or if renunciation would cause statelessness.",
  },
];

const MOBILE_INITIAL = 5;

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);

  const toggle = (i: number) => setActiveIndex(activeIndex === i ? null : i);
  const visibleMobile = showAll ? faqs : faqs.slice(0, MOBILE_INITIAL);

  return (
    <section className="py-20 md:py-24" style={{ background: "#F7F6F9" }}>
      {/* Mobile */}
      <div className="md:hidden px-4">
        <h2 className="text-[26px] font-bold text-center mb-8 tracking-[-0.02em]">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col gap-3 rounded-[20px] p-4" style={{ background: "#EDEDF0" }}>
          {visibleMobile.map((item, i) => {
            const isActive = activeIndex === i;
            return (
              <div
                key={i}
                onClick={() => toggle(i)}
                className="cursor-pointer bg-white rounded-xl p-4 transition-all duration-200"
                style={{
                  boxShadow: isActive ? "0px 4px 8px 0px rgba(143,39,255,0.25)" : "0px 2px 4px 0px rgba(0,0,0,0.1)",
                  borderStyle: "solid",
                  borderWidth: "1px 1px 1px 5px",
                  borderColor: isActive ? "#8F27FF" : "#D2D2D2",
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-[13px] font-medium text-black leading-snug">{item.q}</h3>
                  <svg
                    className="w-5 h-5 flex-shrink-0 mt-0.5 transition-transform duration-200"
                    style={{ color: "#8F27FF", transform: isActive ? "rotate(45deg)" : "rotate(0deg)" }}
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </div>
                {isActive && (
                  <p className="mt-3 text-[13px] text-[#474747] leading-relaxed">{item.a}</p>
                )}
              </div>
            );
          })}

          {!showAll && faqs.length > MOBILE_INITIAL && (
            <button
              onClick={() => setShowAll(true)}
              className="flex items-center justify-center gap-2 text-sm font-semibold py-2"
              style={{ color: "#8F27FF" }}
            >
              Show More
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#8F27FF" strokeWidth="2.5" strokeLinecap="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          )}
          {showAll && (
            <button
              onClick={() => setShowAll(false)}
              className="flex items-center justify-center gap-2 text-sm font-semibold py-2"
              style={{ color: "#8F27FF" }}
            >
              Show Less
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#8F27FF" strokeWidth="2.5" strokeLinecap="round">
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <Row>
          <Reveal variant="up">
            <h2 className="text-[40px] font-bold text-center mb-12 tracking-[-0.03em]">
              Frequently Asked Questions
            </h2>
          </Reveal>

          <Reveal variant="up" delay={80}>
            <div
              className="grid grid-cols-2 gap-4 p-10 lg:p-12 rounded-[20px]"
              style={{ background: "#EDEDF0" }}
            >
              {faqs.map((item, i) => {
                const isActive = activeIndex === i;
                return (
                  <div
                    key={i}
                    onClick={() => toggle(i)}
                    className="cursor-pointer bg-white rounded-xl p-6 transition-all duration-200"
                    style={{
                      boxShadow: isActive ? "0px 4px 8px 0px rgba(143,39,255,0.25)" : "0px 2px 4px 0px rgba(0,0,0,0.1)",
                      borderStyle: "solid",
                      borderWidth: "1px 1px 1px 6px",
                      borderColor: isActive ? "#8F27FF" : "#D2D2D2",
                    }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-[14px] font-semibold text-black leading-snug">{item.q}</h3>
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200"
                        style={{
                          background: isActive ? "#8F27FF" : "#F4F4F4",
                          transform: isActive ? "rotate(45deg)" : "rotate(0deg)",
                        }}
                      >
                        <svg
                          className="w-3.5 h-3.5"
                          style={{ color: isActive ? "white" : "#000" }}
                          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        >
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </div>
                    </div>
                    {isActive && (
                      <p className="mt-3 text-[13.5px] text-[#474747] leading-relaxed">{item.a}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </Reveal>
        </Row>
      </div>
    </section>
  );
}
