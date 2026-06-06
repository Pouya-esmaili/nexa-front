"use client";

import { useState } from "react";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const faqs = [
  {
    q: "What province best fits my business and settlement goals?",
    a: "It depends on sector, capital, and lifestyle. Ontario and BC suit technology and scalable ventures; Saskatchewan, Manitoba, and Atlantic provinces favor lower-investment regional businesses. Investment thresholds typically range from CAD 100,000–600,000.",
  },
  {
    q: "Does Nexa participate in mergers and acquisitions (M&A)?",
    a: "Yes, Nexa actively supports M&A activity — from target identification and due diligence to deal structuring and post-merger integration planning for businesses entering Canadian markets.",
  },
  {
    q: "How much investment am I expected to commit?",
    a: "Minimum investment varies by province and city tier — generally ranging from CAD 100,000 in select regional programs to CAD 600,000+ in major metropolitan streams.",
  },
  {
    q: "How does Nexa evaluate potential investments?",
    a: "Nexa evaluates businesses based on scalability, sector alignment with provincial priorities, management experience, financial viability, and long-term growth potential in the Canadian market.",
  },
  {
    q: "Do I need existing revenue, or can early-stage startups qualify?",
    a: "Most entrepreneur PNP streams do not require existing revenue. Your plan must demonstrate financial viability, market demand, and realistic projections.",
  },
  {
    q: "Do we work with founders who are raising their first round?",
    a: "Yes. Nexa works with first-time founders raising capital, helping structure investment readiness, pitch materials, and introductions to the Canadian venture ecosystem.",
  },
  {
    q: "What jobs must I create and by when?",
    a: "Most programs require at least 1 full-time job for a Canadian citizen or PR. Major urban streams may require 2+. Creation is typically expected within 12–20 months.",
  },
  {
    q: "How long does the investment evaluation process take?",
    a: "Initial evaluation typically takes 2–4 weeks. Full due diligence and decision may extend to 6–10 weeks depending on complexity and documentation readiness.",
  },
  {
    q: "How do I align my plan with provincial economic priorities?",
    a: "Each province publishes sector priorities — tech, agriculture, manufacturing, tourism, clean energy. Your venture must show local economic impact and long-term sustainability.",
  },
  {
    q: "Can we help with international market expansion?",
    a: "Yes. Nexa's international network spans multiple markets, offering market research, local partner introductions, and cross-border growth strategy support.",
  },
  {
    q: "How long does it take to obtain Permanent Residence?",
    a: "From initial application to PR approval, timelines typically range between 24 and 36 months — including the 12–20 month business establishment period plus federal processing after nomination.",
  },
  {
    q: "How can I submit my startup or project to Nexa?",
    a: "Use the contact form below to share details about your venture. Our team reviews all submissions and responds within 48 business hours with next steps.",
  },
];

export default function FAQs() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-24 bg-[#F4F4F4]">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center mb-10">
            FAQs
          </h2>
        </Reveal>

        <Reveal variant="up" delay={80}>
          <div className="bg-[#F4F4F4] rounded-[28px] p-7 max-w-[1100px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {faqs.map((f, i) => (
                <div
                  key={i}
                  className="bg-white rounded-[14px] overflow-hidden transition-all duration-200"
                  style={{
                    border: open === i ? "1.5px solid #8F27FF" : "1.5px solid #E2E2E2",
                    boxShadow: open === i ? "0 0 0 1px #8F27FF" : undefined,
                  }}
                >
                  <button
                    className="w-full flex items-start justify-between gap-3.5 px-5 py-4.5 py-[18px] text-left"
                    onClick={() => setOpen(open === i ? null : i)}
                  >
                    <span className="text-[14px] font-semibold tracking-[-0.01em] leading-[1.45]">{f.q}</span>
                    <span
                      className="flex-shrink-0 w-[22px] h-[22px] rounded-full grid place-items-center mt-[1px] transition-all duration-350"
                      style={{
                        background: open === i ? "#8F27FF" : "#F4F4F4",
                        color: open === i ? "white" : "#929292",
                        transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" className="w-3 h-3">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </button>
                  {open === i && (
                    <div className="px-5 pb-4 text-[13.5px] text-[#929292] leading-[1.7]">
                      {f.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Row>
    </section>
  );
}
