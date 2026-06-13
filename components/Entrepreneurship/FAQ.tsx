"use client";
import { useState } from "react";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const faqs = [
  {
    q: "What qualifies a business for an international entrepreneurship program?",
    a: "A qualifying business must be innovative, scalable, and have a clear value proposition with global market potential. The venture must demonstrate the ability to compete in international markets and create measurable economic value in the destination country.",
  },
  {
    q: "Do I need a fully developed product to apply?",
    a: "Not necessarily. Many programs accept applicants at the MVP or concept stage, provided you can demonstrate innovation potential and a credible business plan. Nexa helps you structure your application to present the strongest possible case at any stage.",
  },
  {
    q: "Which countries offer the most startup-friendly programs?",
    a: "Canada, Spain, Finland, Portugal, and the Netherlands are currently the most accessible and well-structured pathways for international founders. Each has unique advantages — from Canada's PR pathway to Spain's fast 20-day approval window.",
  },
  {
    q: "Can your team help refine my business model before application?",
    a: "Yes — this is one of our core services. We conduct a full business model review, financial feasibility analysis, and market positioning assessment before your application is submitted to any immigration authority.",
  },
  {
    q: "Is funding mandatory to apply for an entrepreneurship visa?",
    a: "Requirements vary by country. Some programs require proof of financial resources or a commitment from a designated organization. Nexa will clarify the exact threshold and help you prepare the necessary documentation for your chosen market.",
  },
  {
    q: "Can I relocate with my family under these programs?",
    a: "Yes. Most entrepreneurship visa programs include dependent family members from the initial application, with full work and study rights in most cases. We advise on family inclusion as part of every application we manage.",
  },
  {
    q: "How long does the entrepreneurship immigration process take?",
    a: "Timelines vary. Spain offers a 20-working-day fast-track. Canada's SUV typically takes 12–16 months. Finland and Portugal range from 3–6 months. Nexa maps out the full timeline at the start of every engagement so you can plan accordingly.",
  },
  {
    q: "Do you assist with company registration in the destination country?",
    a: "Yes. Company registration in the destination country is part of our end-to-end service. We work with local legal partners to handle entity formation, tax registration, and bank account setup so you can operate legally from day one.",
  },
  {
    q: "What happens after the startup is launched?",
    a: "Our relationship doesn't end at launch. We provide ongoing advisory, quarterly KPI reviews, renewal support, and investor relations assistance to ensure your venture continues to meet program milestones and grows sustainably.",
  },
  {
    q: "Is there a risk of rejection, and how do you minimize it?",
    a: "Every application carries some risk, but with a 89% success rate, Nexa significantly reduces it. We pre-screen your profile against official criteria, strengthen any weak points in your application, and use certified legal partners to avoid procedural errors.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-[90px] bg-[#F7F6F9]">
      <Row>
        <Reveal variant="up">
          <div className="text-center max-w-[700px] mx-auto mb-14">
            <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1]">FAQ</h2>
          </div>
        </Reveal>

        <Reveal variant="up" delay={80}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-[14px] overflow-hidden border transition-all duration-[200ms]"
                style={{
                  borderColor: open === i ? "rgba(143,39,255,.18)" : "#E2E2E2",
                  background: open === i ? "#FAF6FF" : "white",
                }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-[14px] px-6 py-5 text-left cursor-pointer"
                >
                  <span className="text-[14px] font-semibold text-black leading-[1.35]">{faq.q}</span>
                  <span
                    className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-[200ms]"
                    style={{
                      background: open === i ? "#8F27FF" : "#F4F4F4",
                      transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth={2}
                      strokeLinecap="round"
                      className="w-[14px] h-[14px]"
                      stroke={open === i ? "white" : "#929292"}
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                {open === i && (
                  <p className="px-6 pb-5 text-[13.5px] text-[#474747] leading-[1.65]">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </Row>
    </section>
  );
}
