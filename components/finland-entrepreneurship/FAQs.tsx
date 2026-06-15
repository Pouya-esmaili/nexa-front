"use client";

import { useState } from "react";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const faqs = [
  {
    q: "What is the Finland Self-Employed Visa, and who is it for?",
    a: "Technically called the Residence Permit for an Entrepreneur, this visa is designed for non-EU/EEA citizens who want to move to Finland to run a business. It covers private entrepreneurs, partners in a general partnership, general partners in a limited partnership, and working shareholders in a limited liability company (Oy).",
  },
  {
    q: "Can I get this permit just by investing or owning shares?",
    a: "No. Passive investment or sole ownership of shares does not qualify. You must actively work in the company within Finland, and your physical presence must be essential to the daily operations and growth of the business.",
  },
  {
    q: "What is the difference between the Entrepreneur Permit and the Startup Visa?",
    a: "The Entrepreneur Permit is for traditional small businesses, freelancers, consultants, and local service providers — assessed by the ELY Centre on local profitability. The Startup Entrepreneur Permit is for high-growth, innovative tech teams aiming for rapid international scaling — assessed by Business Finland, not the ELY Centre.",
  },
  {
    q: "Do I need to register my company before applying?",
    a: "Not necessarily, but your business foundation must be completely ready. You can apply before registering the company if you provide a solid business plan and proof that the necessary capital is ready to deploy. However, if the business is already registered with the PRH, submitting those documents strengthens your application.",
  },
  {
    q: "What are the minimum income requirements?",
    a: "The required net income threshold generally ranges between €1,030 and €1,210 per month for a single adult — varying by municipality. You must demonstrate access to enough funds to sustain this minimum for at least one full year, totaling €12,360 to €14,520 in personal cash reserves.",
  },
  {
    q: "Can I bring my family with me to Finland?",
    a: "Yes. Your spouse or registered partner and dependent children under 18 can apply for residence permits based on family ties. Applications can be submitted simultaneously via Enter Finland. Note: bringing family members increases the monthly income threshold you need to demonstrate to Migri.",
  },
  {
    q: "What is the typical processing time?",
    a: "On average, standard processing takes 3 to 4 months. The dual-stage review (ELY Centre followed by Migri) means your application passes through two separate authorities. Ensuring all financial projections are complete and clear is the best way to prevent delays or requests for additional information.",
  },
  {
    q: "How long is the initial permit valid, and how do I extend it?",
    a: "The first residence permit is typically granted for 1 to 2 years depending on your business projections and financial reserves. Before it expires, you can apply for an extended permit from within Finland. Extended permits can be granted for up to 4 years, provided the business is operating successfully, tax-compliant, and generating enough profit.",
  },
  {
    q: "Does this visa lead to permanent residency and citizenship?",
    a: "Yes. After 4 years of continuous residence on an A-permit, you become eligible for Permanent Residency. After 5 years, provided you pass the YKI language test (Finnish or Swedish at B1 level) and meet the integrity requirements, you can apply for Finnish Citizenship.",
  },
  {
    q: "What is the ELY Centre and why does it matter?",
    a: "The ELY Centre (Centre for Economic Development, Transport and the Environment) is a Finnish government agency that assesses the commercial viability of your business plan before Migri reviews your immigration file. A negative ELY assessment means your application stops — Migri will not review it. This makes the business plan and financial forecast the most critical elements of your file.",
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
      <button
        className="w-full flex items-center justify-between gap-3.5 px-6 py-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="text-[14px] font-semibold leading-[1.35] text-black">{faq.q}</span>
        <span
          className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200"
          style={{
            background: open ? "#8F27FF" : "#F4F4F4",
            transform: open ? "rotate(45deg)" : "none",
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke={open ? "white" : "currentColor"}
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5 text-[13.5px] text-[#474747] leading-[1.65]">{faq.a}</div>
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
            <Reveal key={i} variant="up" delay={i * 40}>
              <FaqItem faq={faq} index={i} />
            </Reveal>
          ))}
        </div>
      </Row>
    </section>
  );
}
