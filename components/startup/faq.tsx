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

const cardBase: React.CSSProperties = {
  backgroundColor: "white",
  borderRadius: "12px",
  padding: "20px",
  cursor: "pointer",
  transition: "box-shadow 0.2s",
};

const activeCard: React.CSSProperties = {
  ...cardBase,
  boxShadow: "0px 4px 8px 0px #8F27FF40",
  borderStyle: "solid",
  borderWidth: "1px 1px 1px 6px",
  borderColor: "#8F27FF",
};

const inactiveCard: React.CSSProperties = {
  ...cardBase,
  boxShadow: "0px 4px 4px 0px #0000001A",
  borderStyle: "solid",
  borderWidth: "1px 1px 1px 6px",
  borderColor: "#D2D2D2",
};

export default function StartupFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const visibleMobile = showAll ? faqData : faqData.slice(0, MOBILE_INITIAL);

  return (
    <div>

      {/* Mobile */}
      <div className="md:hidden" style={{ padding: "48px 20px" }}>
        <h2 style={{ textAlign: "center", fontSize: "24px", fontWeight: 700, marginBottom: "32px" }}>
          FAQs
        </h2>
        <div style={{ backgroundColor: "#F6F6F6", borderRadius: "20px", padding: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
          {visibleMobile.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <div key={index} onClick={() => toggle(index)} style={isActive ? activeCard : inactiveCard}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                  <h3 style={{ fontSize: "12px", fontWeight: 500, lineHeight: "1.5", margin: 0 }}>{item.title}</h3>
                  <img
                    src={isActive ? "/images/Entrepreneurship/close.svg" : "/images/Entrepreneurship/open.svg"}
                    alt={isActive ? "Close" : "Open"}
                    style={{ width: "20px", height: "20px", flexShrink: 0 }}
                  />
                </div>
                {isActive && (
                  <p style={{ marginTop: "12px", fontSize: "12px", color: "#666", lineHeight: "1.6" }}>
                    {item.content}
                  </p>
                )}
              </div>
            );
          })}

          {!showAll && (
            <button
              onClick={() => setShowAll(true)}
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginTop: "8px", fontSize: "14px", fontWeight: 600, color: "#8F27FF", background: "none", border: "none", cursor: "pointer" }}
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
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginTop: "8px", fontSize: "14px", fontWeight: 600, color: "#8F27FF", background: "none", border: "none", cursor: "pointer" }}
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
      <div className="hidden md:block" style={{ padding: "80px 0" }}>
        <Row>
          <h2 style={{ textAlign: "center", fontSize: "36px", fontWeight: 700, marginBottom: "48px" }}>FAQs</h2>
          <div
            style={{
              backgroundColor: "#F6F6F6",
              borderRadius: "20px",
              padding: "48px",
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "24px",
            }}
          >
            {faqData.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <div key={index} onClick={() => toggle(index)} style={isActive ? activeCard : inactiveCard}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
                    <h3 style={{ fontSize: "14px", fontWeight: 500, lineHeight: "1.5", margin: 0 }}>{item.title}</h3>
                    <img
                      src={isActive ? "/images/Entrepreneurship/close.svg" : "/images/Entrepreneurship/open.svg"}
                      alt={isActive ? "Close" : "Open"}
                      style={{ width: "24px", height: "24px", flexShrink: 0 }}
                    />
                  </div>
                  {isActive && (
                    <p style={{ marginTop: "12px", fontSize: "14px", color: "#666", lineHeight: "1.6" }}>
                      {item.content}
                    </p>
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
