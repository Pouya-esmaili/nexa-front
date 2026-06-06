"use client";

import { useState } from "react";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const faqs = [
  {
    q: "Can I apply as a solo founder?",
    a: "No. The Finnish Startup Permit requires a founding team of at least two co-founders with complementary skills, both planning to move to Finland. Solo entrepreneurs may consider the general \"Entrepreneur Residence Permit,\" which has different criteria.",
  },
  {
    q: "What does \"innovative business idea\" mean exactly?",
    a: "Business Finland defines it as a clear competitive advantage in international markets — not a replica of a local service. It must demonstrate potential for rapid global growth, typically aiming for millions of euros in international revenue within a few years.",
  },
  {
    q: "Do I need a registered company before applying?",
    a: "No. You don't need a Finnish company to apply for the Eligibility Statement from Business Finland. Many founders incorporate their Limited Liability Company (Oy) after arriving in Finland. However, your business plan must be concrete and ready.",
  },
  {
    q: "How long does the full approval process take?",
    a: "Step 1 (Business Finland Eligibility Statement) takes 30–60 days. Step 2 onward (the 14-day Fast Track) processes your permit in just two weeks. Total: plan for a 2-to-3-month journey from first submission to moving.",
  },
  {
    q: "Can I work for another company while running my startup?",
    a: "Yes. While your main activity must be your startup, the permit legally allows you to take other employment in Finland to support yourself financially. This is one of the unique flexibilities of the Finnish Startup Permit.",
  },
  {
    q: "What happens if my startup fails after I move?",
    a: "Finland understands startups are high-risk. Your current permit remains valid until expiration. For an Extended Permit, you'll need to show you're pivoting to a new startup or have another legal ground for residence (employment or a different business).",
  },
  {
    q: "Does my family get the same rights?",
    a: "Yes. Spouse and children receive permits for the same duration. Your spouse receives full, unrestricted access to the Finnish labor market — work for any company, in any field, or even start their own separate business.",
  },
  {
    q: "When can I get a Finnish Passport?",
    a: "Typically eligible after 5–6 years of continuous legal residence in Finland, plus passing a basic language test in Finnish or Swedish. A Finnish passport grants full EU rights — live and work in any of the 27 EU member states.",
  },
];

export default function FAQs() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-20 bg-[#F7F6F9]">
      <Row>
        <Reveal variant="up" className="text-center mb-10 md:mb-14">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em]">
            Frequently Asked Questions
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {faqs.map((f, i) => (
            <Reveal key={i} variant="up" delay={i * 50}>
            <div
              className="rounded-[14px] overflow-hidden transition-colors"
              style={{
                background: open === i ? "#FAF6FF" : "#fff",
                border: open === i ? "1px solid rgba(143,39,255,0.3)" : "1px solid #E2E2E2",
              }}
            >
              <button
                className="w-full flex items-center justify-between gap-3.5 px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-[14px] leading-snug tracking-[-0.01em]">{f.q}</span>
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all"
                  style={
                    open === i
                      ? { background: "#8F27FF", color: "#fff", transform: "rotate(45deg)" }
                      : { background: "#F4F4F4", color: "#000" }
                  }
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="w-3.5 h-3.5">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-[13.5px] text-[#474747] leading-[1.65]">
                  {f.a}
                </div>
              )}
            </div>
            </Reveal>
          ))}
        </div>
      </Row>
    </section>
  );
}
