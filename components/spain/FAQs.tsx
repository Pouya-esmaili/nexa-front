"use client";

import { useState } from "react";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const faqs = [
  {
    q: "Can I apply while visiting Spain as a tourist?",
    a: "Yes. You can enter Spain on a standard Schengen tourist visa or visa-free passport and file your application directly with the UGE while onshore. Applying from inside Spain bypasses the consulate entirely and grants the full 3-year residence card directly, instead of a 1-year entry visa.",
  },
  {
    q: "What happens if my application faces \"administrative silence\"?",
    a: "The Spain Entrepreneur Visa is governed by a strict positive administrative silence rule (silencio administrativo positivo). If the UGE does not issue an explicit approval or rejection within 20 working days from your submission date, your application is legally deemed approved.",
  },
  {
    q: "Do I need to speak Spanish to get the Entrepreneur Visa?",
    a: "No. Your business plan and technical pitch can be presented to ENISA and the UGE in English or Spanish. There is no initial language requirement. You only need certified language proficiency (DELE A2) later if you choose to pursue Spanish citizenship.",
  },
  {
    q: "Can multiple co-founders apply under the same business plan?",
    a: "Yes. Multiple co-founders can be part of the same corporate project. The business plan must clearly define the executive role of each founder. Each individual must independently prove the required €9,000+ personal financial runway.",
  },
  {
    q: "What happens to my visa status if my startup fails?",
    a: "Your residence permit will not be instantly revoked. Your legal stay remains valid until the expiration date on your physical TIE card. However, to qualify for renewal, you must demonstrate active economic operation or transition to an alternate residency status.",
  },
  {
    q: "Can I take a side job or work for another Spanish company?",
    a: "Your primary legal status is linked to managing your approved startup. However, the Entrepreneur Visa permits secondary employment or consulting work, provided it does not interfere with the growth of your core venture.",
  },
  {
    q: "What are the exact requirements for the private health insurance?",
    a: "The policy must be contracted with a company authorized to operate in Spain, covering hospitalization, emergencies, and general medicine with no copayments and no deductibles. Travel insurance or standard international policies with deductibles will trigger an immediate application rejection.",
  },
  {
    q: "Does Spain allow dual citizenship when I naturalize?",
    a: "Spain generally requires renouncing your original nationality upon naturalization. However, citizens of Ibero-American countries, Portugal, Andorra, the Philippines, and Equatorial Guinea are legally permitted to retain their original nationality — allowing full dual citizenship.",
  },
  {
    q: "What is a Spanish NIE and how do I get it?",
    a: "The NIE (Número de Identidad de Extranjero) is your mandatory tax and legal identification number in Spain. You can secure it through your local Spanish Embassy abroad or via a designated legal representative using a power of attorney directly inside Spain.",
  },
  {
    q: "How long does ENISA take to issue its business evaluation report?",
    a: "The ENISA review takes an average of 30 to 60 days depending on application volume — separate from the UGE's 20-working-day decision window. Nexa structures your full timeline to account for this evaluation window from the start.",
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
