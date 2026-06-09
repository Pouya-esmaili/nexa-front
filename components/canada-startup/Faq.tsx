"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useState } from "react";

const faqs = [
  {
    q: "Can I submit a brand new application for the SUV right now?",
    a: "No. Due to the active IRCC program pause, new applications are completely closed unless you possess a valid Commitment Certificate issued by a designated organization in 2025. If you hold a 2025 certificate, you have until June 30, 2026 to file your complete permanent residence paperwork.",
  },
  {
    q: "What happens if my startup goes bankrupt after landing?",
    a: "This is a major structural benefit. Because the SUV grants direct Permanent Residency rather than a conditional visa, your legal status in Canada is secure even if your business faces market failure. There are no clawback provisions on your PR status based on corporate performance.",
  },
  {
    q: "What is a \"complete group application\" under the SUV rules?",
    a: "If your business is being launched by a team, IRCC will not begin processing any single file until all members of the group have uploaded and submitted their respective PR files. A delay by a single co-founder risks the integrity of the entire corporate submission.",
  },
  {
    q: "Can I bypass the CLB 5 requirement with an advanced degree?",
    a: "No. IRCC enforces a strict digital data policy. Every applicant must provide a valid language test transcript (IELTS or CELPIP) directly inside the PR portal. Academic degrees or native country backgrounds cannot be used as substitutes for an official language exam. There are zero waivers for this rule.",
  },
  {
    q: "Can I apply for an SUV work permit right now?",
    a: "New applications for the optional SUV temporary work permit are closed under current emergency directives. Work permit options are restricted to founders already inside Canada who need to extend their active SUV work permits while their PR files are being processed.",
  },
  {
    q: "Can we change team composition or add new co-founders in 2026?",
    a: "While existing 2025 Letters of Support can be amended for minor structural errors, you cannot introduce brand new co-founders or substitute critical team members during this wind-down phase. The baseline group composition must exactly mirror the 2025 commitment data held by IRCC.",
  },
  {
    q: "Are there geographic limits on where I can set up my business?",
    a: "The federal Start-Up Visa program allows corporate setup anywhere inside Canada except for the province of Quebec, which administers its own distinct business immigration programs with separate eligibility criteria.",
  },
  {
    q: "What are the main processing priority criteria used by IRCC?",
    a: "IRCC gives maximum processing priority to startup groups where at least one essential founder is physically in Canada actively managing the venture under an authorized SUV work permit, or has an active application for one pending onshore.",
  },
  {
    q: "What happens if I miss the June 30, 2026 deadline?",
    a: "If you hold a valid 2025 Commitment Certificate but fail to submit a complete permanent residence file by June 30, 2026, your certificate will permanently lapse, and you will lose all eligibility under this program stream with no recourse.",
  },
  {
    q: "When will Canada announce the new entrepreneur pilot program?",
    a: "IRCC has confirmed that details and intake frameworks for the next-generation targeted entrepreneur pilot program will be formally communicated during the latter half of 2026. Nexa is actively tracking these developments to position future clients for early-access tracking.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-24 bg-white">
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
                <div key={i}
                  className="rounded-[14px] overflow-hidden transition-all duration-200"
                  style={{
                    background: isOpen ? "#FAF6FF" : "#F7F6F9",
                    border: isOpen ? "1px solid rgba(143,39,255,0.18)" : "1px solid #E2E2E2",
                  }}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full text-left flex items-center justify-between gap-3.5 px-6 py-5">
                    <span className="text-[14px] font-semibold leading-[1.35]">{faq.q}</span>
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200"
                      style={{
                        background: isOpen ? "#8F27FF" : "white",
                        color: isOpen ? "white" : "currentColor",
                        transform: isOpen ? "rotate(45deg)" : "none",
                      }}>
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
