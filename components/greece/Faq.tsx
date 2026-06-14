"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/LazyReveal";
import { useState } from "react";

const faqs = [
  {
    q: "Can I split my investment across two or more properties?",
    a: "No. For the €400,000 and €800,000 tiers, the entire capital floor must be invested in a single, individual property unit. Splitting the requirement across a portfolio of multiple apartments is strictly prohibited under Law 5100/2024.",
  },
  {
    q: "Is the €250,000 conversion option available in Athens?",
    a: "Yes. The commercial-to-residential conversion framework is completely exempt from geographic zoning restrictions. You can identify a qualifying commercial warehouse, office, or industrial space in the absolute center of prime Athens or Piraeus, legally convert it to residential, and secure the Golden Visa at the €250,000 entry point.",
  },
  {
    q: "What happens to my family's residency if I sell the property?",
    a: "The Golden Visa is completely tied to the underlying asset. If you sell before reaching citizenship, your permanent residence permit — and all family members' permits — will be immediately and legally revoked. You are permitted to sell the asset to a new foreign investor who wishes to use it for their own Golden Visa application.",
  },
  {
    q: "Am I allowed to work or take a job in Greece on a Golden Visa?",
    a: "The Golden Visa does not grant access to the Greek labor market — you cannot be hired as an employee by a Greek company. However, you are fully authorized to live in Greece, establish your own Greek company, act as a shareholder or board director, and collect corporate dividends.",
  },
  {
    q: "Can a minor act as the main applicant?",
    a: "Yes. Greek administrative regulations permit a minor child to be designated as the main investor and property owner. Parents act as legal guardians to execute the transaction, and the minor acts as the primary applicant — allowing the extended family to secure residency under a unified file.",
  },
  {
    q: "What happens to children's visas when they turn 21?",
    a: "Children receive a permanent residence card valid until their 21st birthday. Upon turning 21, they can secure an independent, automatic 3-year extension valid until they turn 24, with clean records. To secure residency beyond age 24, the property title can be strategically transferred into their name.",
  },
  {
    q: "Are there annual property taxes in Greece?",
    a: "Yes. All property owners are subject to an annual tax called ENFIA, calculated based on the precise square footage, age, and objective zone valuation of the asset. For a standard residential unit, ENFIA typically ranges between €3.00 and €7.00 per square meter annually.",
  },
  {
    q: "Can I invest via a corporate entity instead of personally?",
    a: "Yes, provided the legal entity is registered within Greece or another EU member state, and the main applicant owns 100% of the corporate shares with total, unencumbered voting rights.",
  },
  {
    q: "What if my heritage building is not restored within 5 years?",
    a: "Under the €250,000 heritage restoration track, full restoration according to official architectural guidelines is a statutory prerequisite. If the restoration is incomplete at the 5-year mark, your application for residency renewal will be denied.",
  },
  {
    q: "Do my family or I ever need to speak Greek to keep the Golden Visa?",
    a: "Absolutely not. You, your spouse, your children, and your parents can obtain and fully renew your permanent residence cards every 5 years without ever needing to speak, read, or test in Greek. Language requirements only arise if you voluntarily choose to live in Greece full-time for 7 years and apply to naturalize as a Greek citizen.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-24 bg-[#F7F6F9]">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center mb-14">
            Frequently Asked Questions
          </h2>
        </Reveal>

        <Reveal variant="up" delay={60}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  className="rounded-[14px] overflow-hidden transition-all duration-200"
                  style={{
                    background: isOpen ? "#FAF6FF" : "white",
                    border: isOpen ? "1px solid rgba(143,39,255,0.18)" : "1px solid #E2E2E2",
                  }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full text-left flex items-center justify-between gap-3.5 px-6 py-5"
                  >
                    <span className="text-[14px] font-semibold leading-[1.35]">{faq.q}</span>
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200"
                      style={{
                        background: isOpen ? "#8F27FF" : "#F4F4F4",
                        color: isOpen ? "white" : "currentColor",
                        transform: isOpen ? "rotate(45deg)" : "none",
                      }}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="w-3.5 h-3.5">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-[13.5px] text-[#474747] leading-[1.65]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>
      </Row>
    </section>
  );
}
