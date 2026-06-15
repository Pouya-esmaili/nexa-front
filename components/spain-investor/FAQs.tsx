"use client";

import { useState } from "react";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const faqs = [
  {
    q: "Can I still get a Spanish Golden Visa by purchasing a €500,000 property?",
    a: "No. Following the implementation of Organic Law 1/2025, Spain completely abolished the real estate investment route for new applicants. Property purchases no longer grant an automated pathway to residency. You must now use financial instruments (bonds, company shares, bank deposits) or establish an approved innovative business project.",
  },
  {
    q: "Am I required to live in Spain for a minimum number of days?",
    a: "No. The investor framework does not impose a strict physical presence rule to maintain or renew your temporary residency. You only need to visit Spain at least once during each permit period. However, if your long-term goal is Permanent Residency (year 5) or Citizenship (year 10), you must physically reside for at least 183 days per year to satisfy residency continuity rules.",
  },
  {
    q: "Can I include my family in the same application?",
    a: "Yes. The primary investor can include their spouse or registered civil partner, dependent children of any age (provided adult children are unmarried and financially reliant), and dependent elderly parents. Each family member requires an additional 100% of the IPREM (€7,200/year) in liquid savings or passive income streams.",
  },
  {
    q: "What happens if I decide to liquidate my investment before year 5?",
    a: "Your investment capital must remain fully deployed in the qualifying asset class for the entire duration of your temporary residency. If you liquidate prior to reaching year 5, your residency authorization will be revoked upon review. Once you transition to Permanent Residency, you are free to liquidate, transfer, or divest completely without any impact on your legal status.",
  },
  {
    q: "What is the primary path for business relocation now that real estate is closed?",
    a: "The focus has shifted toward financial instruments and the Enterprise and Business Innovation pathway. For business-based residency, Spain evaluates active business development — job creation, socioeconomic impact, and innovation alignment — rather than passive capital placement into property.",
  },
  {
    q: "Does the Investor Visa automatically grant work rights in Spain?",
    a: "Yes. Unlike the Non-Lucrative Visa, the Spain Investor Visa automatically grants the primary applicant and their adult dependents the right to live and work in Spain. This includes both self-employment as an entrepreneur or business owner and standard employment for a Spanish company.",
  },
];

function FaqItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <div
      className="rounded-[14px] overflow-hidden"
      style={{
        background: open ? "#FAF6FF" : "white",
        border: open ? "1px solid rgba(143,39,255,0.18)" : "1px solid #E2E2E2",
      }}
    >
      <button className="w-full flex items-center justify-between gap-3.5 px-6 py-5 text-left" onClick={() => setOpen(!open)}>
        <span className="text-[14px] font-semibold leading-[1.35] text-black">{faq.q}</span>
        <span
          className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200"
          style={{ background: open ? "#8F27FF" : "#F4F4F4", transform: open ? "rotate(45deg)" : "none" }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={open ? "white" : "currentColor"} strokeWidth="2" strokeLinecap="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      {open && <div className="px-6 pb-5 text-[13.5px] text-[#474747] leading-[1.65]">{faq.a}</div>}
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
            <Reveal key={i} variant="up" delay={i * 40}>
              <FaqItem faq={faq} index={i} />
            </Reveal>
          ))}
        </div>
      </Row>
    </section>
  );
}
