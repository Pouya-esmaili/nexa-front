"use client";

import { useState } from "react";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const faqs = [
  {
    q: "Is the D2 Visa limited only to tech startups?",
    a: "No. Unlike the parallel Startup Visa track (strictly managed by IAPMEI for high-tech concepts), the D2 Entrepreneur Visa welcomes all traditional, commercial, and industrial business lines — restaurants, real estate management, import-export firms, tech firms, and freelance consulting businesses are all fully eligible.",
  },
  {
    q: "Do I need to inject a large amount of capital to get approved?",
    a: "There is no legally mandated minimum investment amount. Your corporate account must hold enough capital to realistically execute your stated business plan. For service-based or consulting firms with minimal overhead, a share capital deposit of €5,000 to €10,000 is widely considered a safe baseline for approval.",
  },
  {
    q: "Do I need to speak Portuguese to apply?",
    a: "No. There is no language requirement for the initial visa or residence card. Your business plan and initial communications can be handled in English. You are only required to pass a basic A2-level Portuguese test if you choose to apply for citizenship at the 5-year mark.",
  },
  {
    q: "Can I apply for the D2 Visa directly from inside Portugal?",
    a: "Yes. An alternative pathway known as an Expression of Interest (EOI) allows entrepreneurs who entered Portugal as tourists to register a business and apply for residency onshore. However, onshore processing lines take significantly longer than the consular route. Nexa advises the consular pathway for maximum predictability.",
  },
  {
    q: "What happens to my visa if my business fails?",
    a: "Your residence card is not instantly canceled. Your residency remains legally valid until the expiration date on your physical card, giving you an administrative buffer to restructure, pivot your business model, or transition to a different immigration status.",
  },
  {
    q: "Can I work for another Portuguese company while holding a D2 Visa?",
    a: "Yes. The D2 residence card grants full authorization to manage your own enterprise and also allows secondary employment or independent freelance contracts within Portugal, provided you continue to fulfill your legal and tax duties for your primary company.",
  },
  {
    q: "What are the physical stay requirements?",
    a: "To maintain residency and qualify for renewals, avoid being absent from Portugal for more than 6 consecutive months or 8 alternate months during your visa period, unless absences are tied to justified professional travel for your international business operations.",
  },
  {
    q: "Can multiple co-founders apply under the same company?",
    a: "Yes. Multiple partners can apply under the same corporate entity, provided the business plan clearly shows large scale, high capital, and an operational need for multiple directors. Each co-founder must independently demonstrate their own personal maintenance funds of ~€10,000.",
  },
  {
    q: "What is a NIF and why do I need it first?",
    a: "The NIF (Número de Identificação Fiscal) is your mandatory Portuguese tax identification number. Required for any legal transaction — opening a bank account, renting property, or incorporating a business. Nexa secures this for you via an authorized fiscal representative before you arrive.",
  },
  {
    q: "How long does the entire D2 process take?",
    a: "On average, the consular route takes 3 to 5 months — 4 weeks for business planning and company formation, followed by a 60-to-90-day processing window at the Portuguese Consulate to evaluate your file and issue your entry visa.",
  },
];

export default function FAQs() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-24 bg-[#F7F6F9]">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center mb-12">
            Frequently Asked Questions
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {faqs.map((f, i) => (
            <Reveal key={i} variant="up" delay={i * 40}>
              <div
                className="rounded-[14px] overflow-hidden transition-colors"
                style={{
                  background: open === i ? "#FAF6FF" : "white",
                  border: open === i ? "1px solid rgba(143,39,255,0.3)" : "1px solid #E2E2E2",
                }}
              >
                <button
                  className="w-full flex items-center justify-between gap-3.5 px-6 py-5 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="text-[14px] font-semibold leading-[1.35] tracking-[-0.01em]">{f.q}</span>
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all"
                    style={open === i ? { background: "#8F27FF", color: "#fff", transform: "rotate(45deg)" } : { background: "#F4F4F4", color: "#000" }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="w-3.5 h-3.5">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                {open === i && (
                  <div className="px-6 pb-5 text-[13.5px] text-[#474747] leading-[1.65]">{f.a}</div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Row>
    </section>
  );
}
