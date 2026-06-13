"use client";

import { useState } from "react";
import Reveal from "@/components/global/Reveal";

const FAQ_DATA = [
  {
    q: "What type of fields does Nexa invest in?",
    a: "Nexa invests in high-potential startups and growth-stage companies across real estate, energy & renewables, information technology, innovation-driven technology, and healthcare & medical sectors. We focus on scalable, impact-driven, and globally expandable businesses.",
  },
  {
    q: "At what stage does Nexa typically invest?",
    a: "We support ventures from growth-stage startups to expansion-phase companies. Our approach depends on scalability, market readiness, leadership strength, and long-term growth potential.",
  },
  {
    q: "Does Nexa only provide capital?",
    a: "No. Beyond capital investment, we provide strategic advisory, capital structuring, international business development, risk management, and access to global networks to accelerate sustainable growth.",
  },
  {
    q: "What makes Nexa different from traditional investment firms?",
    a: "Nexa operates as both an investor and a strategic partner. We combine financial investment with operational expertise, global market access, and long-term business development support — going far beyond a traditional capital provider.",
  },
  {
    q: "Does Nexa invest internationally?",
    a: "Yes. Nexa is a global investor. We support cross-border expansion and international market entry strategies for businesses seeking global growth across all our focus geographies.",
  },
  {
    q: "Does Nexa participate in mergers and acquisitions?",
    a: "Yes. We provide M&A advisory and participate in strategic acquisitions, mergers, and consolidation opportunities that enhance long-term enterprise value.",
  },
  {
    q: "How does Nexa evaluate potential investments?",
    a: "We begin with in-depth market research to understand demand dynamics, growth potential, and competitive landscape. Our evaluation extends to the business model, scalability, management team, financial structure, risk profile, and long-term value creation potential.",
  },
  {
    q: "Do you work with founders raising their first round?",
    a: "Yes. We support visionary founders from growth-stages, particularly those with strong innovation, clear market demand, and scalable models — even if it is their first institutional raise.",
  },
  {
    q: "How long does the investment evaluation process take?",
    a: "In most cases, the evaluation process takes a maximum of 40 days, depending on project complexity and due diligence requirements. Our goal is to maintain an efficient and transparent review process.",
  },
  {
    q: "What level of involvement does Nexa have after investing?",
    a: "Nexa maintains an active strategic partnership approach after investing, offering ongoing guidance in growth strategy, risk management, capital optimization, and market positioning throughout the investment lifecycle.",
  },
  {
    q: "Can Nexa help with international market expansion?",
    a: "Absolutely. Through our global network and international business development expertise, we help companies enter new markets, establish strategic partnerships, and scale globally across all focus sectors.",
  },
  {
    q: "How can I submit my project to Nexa?",
    a: "Entrepreneurs and project owners can submit a business proposal or executive summary through our Apply for Funding form. Our team will review and respond after an initial assessment — typically within 5 business days.",
  },
];

export default function InvestmentFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIdx(openIdx === i ? null : i);

  return (
    <section style={{ padding: "90px 0", background: "#F7F6F9" }}>
      <div className="px-6 mx-auto w-full" style={{ maxWidth: 1240 }}>
        {/* Header */}
        <Reveal>
          <div className="text-center mb-14">
            <h2
              style={{
                fontSize: "clamp(26px, 3vw, 40px)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                color: "#000",
              }}
            >
              FAQ
            </h2>
          </div>
        </Reveal>

        {/* 2-col grid */}
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {FAQ_DATA.map((item, i) => {
              const isOpen = openIdx === i;
              return (
                <div
                  key={i}
                  className="overflow-hidden transition-all duration-200"
                  style={{
                    background: isOpen ? "#FAF6FF" : "white",
                    border: isOpen
                      ? "1px solid rgba(143,39,255,0.18)"
                      : "1px solid #E2E2E2",
                    borderRadius: 14,
                  }}
                >
                  {/* Question row */}
                  <button
                    className="flex items-center justify-between gap-3.5 w-full text-left"
                    style={{ padding: "20px 24px", cursor: "pointer" }}
                    onClick={() => toggle(i)}
                  >
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        lineHeight: 1.35,
                        color: "#000",
                      }}
                    >
                      {item.q}
                    </span>
                    {/* Chevron / plus */}
                    <span
                      className="grid place-items-center flex-shrink-0 transition-all duration-200"
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        background: isOpen ? "#8F27FF" : "#F4F4F4",
                        transform: isOpen ? "rotate(45deg)" : "none",
                      }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={isOpen ? "white" : "#929292"}
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
                        <path d="M12 5v14M5 12h14"/>
                      </svg>
                    </span>
                  </button>

                  {/* Answer */}
                  {isOpen && (
                    <div
                      style={{
                        padding: "0 24px 20px",
                        fontSize: 13.5,
                        color: "#474747",
                        lineHeight: 1.65,
                      }}
                    >
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
