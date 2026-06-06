"use client";

import { useState } from "react";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const faqs = [
  {
    q: "Do I need a master's degree or minimum capital to qualify?",
    a: "No. Unlike other French business pathways, the French Tech Visa does not enforce a rigid educational baseline or a set corporate capital injection. The primary focus is the innovative nature of your project and your ability to execute it. Professional experience strengthens your profile, but ecosystem backing is what matters most.",
  },
  {
    q: "What qualifies as an \"innovative economic project\"?",
    a: "Your business must introduce a novel product, specialized service, proprietary technical process, or unique organizational methodology to the French market. This is verified when an approved French Tech incubator accepts your project, or when two recognized ecosystem stakeholders (venture funds, public labs) provide formal letters of support.",
  },
  {
    q: "Can multiple co-founders apply for the same project?",
    a: "Yes. Multiple co-founders can apply under the same startup, but each founder must independently secure a formal endorsement letter and demonstrate the full €21,876.36 financial threshold. Ecosystems generally limit backing to a maximum of 3 co-founders per project.",
  },
  {
    q: "What happens if my startup fails during the 4-year period?",
    a: "Your permit is not immediately revoked. The \"Talent Passport\" framework provides a secure runway for early-stage business realities. Your legal status remains valid until the expiration date on your card. However, to renew at the 4-year mark, you must show continued growth or present a viable new economic project.",
  },
  {
    q: "Can my spouse work freely in France?",
    a: "Yes. Your spouse automatically receives a matching \"Talent – Family\" multi-year residence card granting full legal rights to work at any French company, enter the public or private sector, or register their own independent ventures — no separate work permit required.",
  },
  {
    q: "Can I apply if I'm already legally inside France?",
    a: "Yes. If you hold a valid French residency card (student visa, job seeker status, or employment permit), you can submit a Change of Status application directly via the ANEF digital portal — without returning to your home country — provided your current legal stay has not expired.",
  },
  {
    q: "How long until I can apply for Permanent Residency?",
    a: "After 5 years of continuous, legal, and tax-compliant residence. The 10-year Permanent Resident Card fully uncouples your legal status from your startup — complete freedom to exit, pivot, or enter any employment. French citizenship via naturalization is also available at 5 years with a B1 French language test and civic interview.",
  },
  {
    q: "What are the government fees?",
    a: "€99 for the initial long-stay visa (VLS-TS) at the consulate. €350 for the 4-year physical Talent card (€300 admin fee + €50 stamp duty) via ANEF after arrival. €250 for each subsequent renewal. These fees do not include certified translations, apostilles, incubation costs (~€800/month), or corporate setup fees.",
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
              key={i}
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
