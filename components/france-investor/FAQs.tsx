"use client";

import { useState } from "react";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const faqs = [
  {
    q: "Can I invest in French real estate to qualify for the Talent Passport?",
    a: "No. France does not grant residency for passive residential real estate acquisitions. The €300,000 investment must be deployed into a commercial, industrial, artisanal, or agricultural enterprise via a direct equity injection, reinvested earnings, or inter-corporate loans that support job creation.",
  },
  {
    q: "Do my family members have the right to work when accompanying me?",
    a: "Yes. Your spouse is automatically issued a Talent (Family) residence permit granting full, unrestricted access to the French labor market — corporate employment, independent businesses, or management of your investment entity — without requiring separate work authorizations.",
  },
  {
    q: "What happens if my business fails to create the planned jobs within 4 years?",
    a: "French immigration authorities review operational metrics during your multi-year card renewal. If market realities alter your hiring pipeline, you must demonstrate the €300K capital remains fully deployed and provide a viable updated restructuring plan. Nexa provides ongoing compliance audits to help pivot your corporate structure before renewal windows open.",
  },
  {
    q: "Are there any language requirements during the initial visa application?",
    a: "No. The initial long-stay visa and 4-year temporary residence card do not require a French language proficiency test. Language verification is entirely deferred until the Year 5 milestone, when applying for Permanent Residency or full French Citizenship — requiring a B1 proficiency level.",
  },
  {
    q: "How does Nexa structure the business relocation lifecycle?",
    a: "Nexa's advisory ecosystem bridges complex corporate financial modeling with precise immigration defense. We review your corporate architecture, validate the transfer of cross-border capital, and deliver audit-proof corporate documentation that aligns directly with French ministerial expectations — from DRIEETS business plan vetting through to multi-year renewal compliance.",
  },
];

function FaqItem({ faq }: { faq: (typeof faqs)[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="rounded-[14px] overflow-hidden transition-all duration-200"
      style={{
        background: open ? "#FAF6FF" : "white",
        border: open ? "1px solid rgba(143,39,255,0.18)" : "1px solid #E2E2E2",
      }}
    >
      <button
        className="w-full flex items-center justify-between gap-3.5 p-5 px-6 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="text-[14px] font-semibold text-black leading-[1.35]">{faq.q}</span>
        <span
          className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200"
          style={{
            background: open ? "#8F27FF" : "#F4F4F4",
            color: open ? "white" : "black",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5 text-[13.5px] text-[#474747] leading-[1.65]">
          {faq.a}
        </div>
      )}
    </div>
  );
}

export default function FAQs() {
  return (
    <section className="py-20 md:py-24" style={{ background: "#F7F6F9" }}>
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1] text-center mb-14">
            Frequently Asked Questions
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {faqs.map((faq, i) => (
            <Reveal key={i} variant="up" delay={i * 50}>
              <FaqItem faq={faq} />
            </Reveal>
          ))}
        </div>
      </Row>
    </section>
  );
}
