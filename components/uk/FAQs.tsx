"use client";

import { useState } from "react";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const faqs = [
  {
    q: "Is the old UK Start-up Visa still available?",
    a: "No. The traditional Start-up Visa was formally closed to new applicants. Anyone looking to establish an innovative business in the UK must now apply under the updated Innovator Founder Visa framework.",
  },
  {
    q: "Can multiple co-founders apply under the same business plan?",
    a: "Yes. Multiple founders can be endorsed for the same qualifying business plan. However, each co-founder must independently apply for endorsement, prove they are an instrumental member of the founding team, and demonstrate their own personal maintenance funds.",
  },
  {
    q: "Do I have to invest exactly £50,000 into the business on day one?",
    a: "No. There is no automatic upfront minimum capital requirement to get the visa. Your Endorsing Body will examine your financial forecasts to ensure you have realistic access to whatever capital your business plan requires to succeed.",
  },
  {
    q: "What happens if my business fails before the 3-year mark?",
    a: "Your visa will not be immediately canceled. Your legal residence remains secure as long as your Endorsing Body maintains your endorsement and you attend your mandatory 12-month and 24-month check-ins. If the business fails completely, you have a buffer period to switch to an alternative visa track or pivot your concepts.",
  },
  {
    q: "Can I work for another company while holding this visa?",
    a: "Yes, but with restrictions. Your primary role must be managing your startup. You are permitted to take a secondary job, provided the work is highly skilled — classified at RQF Level 3 or higher on the UK regulated qualifications framework.",
  },
  {
    q: "Can I switch to the Innovator Founder Visa from inside the UK?",
    a: "Yes, if you are currently on a valid visa such as a Student or Skilled Worker visa. You cannot switch from inside the UK if you hold a standard Visitor visa or a Short-term Student visa.",
  },
  {
    q: "What are the main authorized Endorsing Bodies?",
    a: "The Home Office has centralized the evaluation through a select group of approved organizations, including UK Endorsing Services, Innovator International, and Envestors Limited. Nexa coordinates directly with these entities to align your pitch.",
  },
  {
    q: "How long can I spend outside the UK without losing my settlement track?",
    a: "To successfully apply for ILR at Year 3, you must not have spent more than 180 days outside the UK in any rolling 12-month period.",
  },
  {
    q: "What happens during the 12-month and 24-month checkpoint meetings?",
    a: "Your Endorsing Body reviews whether you are still actively managing the business, making reasonable progress against your original business plan, and whether your funding remains legitimate.",
  },
  {
    q: "How long does the Home Office take to process the visa?",
    a: "From outside the UK, approximately 3 weeks after biometrics submission. From inside the UK, the standard window is 8 weeks — though priority processing options can shorten this to 1 to 5 days for an additional fee.",
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
            <Reveal key={i} variant="up" delay={i * 40}>
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
