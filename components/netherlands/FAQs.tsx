"use client";

import { useState } from "react";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const faqs = [
  {
    q: "Is there a Dutch language requirement to get the initial Startup Visa?",
    a: "No. The visa application, business plan, pitching sessions, and day-to-day operations can be conducted entirely in English. You only need to learn Dutch later if you choose to settle permanently and apply for citizenship at the 5-year mark.",
  },
  {
    q: "Can multiple co-founders apply under the same business plan?",
    a: "Yes, up to 3 co-founders can use the same business plan. However, each must submit an individual application, hold an active management role, and independently prove they have at least €21,000 in personal financial capital.",
  },
  {
    q: "What happens if my startup fails during the visa year?",
    a: "Your visa will not be immediately cancelled. It remains legally valid until the expiration date on your residence card, giving you an administrative buffer to wind down operations, pivot, or adjust your legal status.",
  },
  {
    q: "Can I take a side job while running my startup?",
    a: "Yes. You are permitted to take secondary employment or freelance work alongside your startup. However, your innovative venture must remain your primary focus, and any external employer must comply with standard Dutch labor rules.",
  },
  {
    q: "Can my facilitator finance my required personal living costs?",
    a: "Yes. Your facilitator can choose to cover your monthly living expenses directly. This arrangement must be explicitly written into your signed facilitator agreement, specifying that the capital is fully guaranteed for your entire one-year stay — eliminating the need to show personal bank savings of €21,000.",
  },
  {
    q: "Can my spouse work freely in the Netherlands?",
    a: "Yes. Your spouse or registered partner receives an automatic matching residence permit with complete, unrestricted access to the Dutch labor market. They do not need a corporate sponsor or separate work permit — they can accept any job offer or build their own freelance business immediately.",
  },
  {
    q: "Can I transition directly from the Startup Visa to Permanent Residency?",
    a: "Not immediately. The Startup Visa is a non-extendable 1-year bridge. You must first transition into a Self-Employed Permit at year-end. After completing 5 continuous legal years of residency in total, you become eligible for Permanent Residency or Dutch Citizenship.",
  },
  {
    q: "How long does the entire process take?",
    a: "On average 4 to 5 months: 4 to 6 weeks to secure a facilitator and prepare your files, followed by the IND's official decision window of up to 90 days.",
  },
];

export default function FAQs() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-20 bg-[#F7F6F9]">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center mb-10 md:mb-14">
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
