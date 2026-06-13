"use client";
import { useState } from "react";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const faqs = [
  { q: "What qualifies a business as a startup under international startup programs?",
    a: "A startup must be an innovative, scalable business with a clear value proposition, strong growth potential, and the ability to compete in global markets. It should be technology-driven or solve a measurable market problem through a replicable model." },
  { q: "Do I need a fully developed product to apply for a startup program?",
    a: "No. Many programs accept founders at the MVP or even concept stage, as long as you can demonstrate innovation potential, a credible plan, and the ability to create value in the destination country. Nexa helps strengthen your application at any stage." },
  { q: "Which countries offer the most startup-friendly immigration programs?",
    a: "Finland, Canada, UK, Netherlands, and France are among the most structured and accessible pathways for international startup founders. Each country offers unique advantages in terms of ecosystem access, processing time, and capital networks." },
  { q: "Can your team help refine my business model before application?",
    a: "Yes. Business model refinement is a core part of our pre-application service. We assess your value proposition, revenue model, market fit, and scalability — then help you present the strongest possible case to immigration authorities." },
  { q: "Is funding mandatory to apply for a startup visa?",
    a: "Requirements vary. Some programs require proof of funding or a commitment from a designated accelerator or investor. Others focus more on the quality of the business idea. Nexa will map out the exact financial requirements for your target country." },
  { q: "How do you support fundraising and capital access?",
    a: "We connect founders to our global network of investors, VCs, and designated organizations. We also help prepare investor-ready materials including pitch decks, financial models, and executive summaries to maximize your fundraising success." },
  { q: "Can I relocate with my family under a startup program?",
    a: "Yes. Most startup visa programs include dependent family members — spouse and children — with full rights to study and, in many cases, work. Nexa advises on family inclusion as part of every application we manage." },
  { q: "What industries are best suited for startup programs?",
    a: "Tech, SaaS, FinTech, HealthTech, CleanTech, EdTech, and AI-driven businesses are generally the strongest fits. However, any innovative, scalable model with a clear market need can qualify — Nexa will assess your specific sector against each country's criteria." },
  { q: "How long does the startup immigration process usually take?",
    a: "Timelines vary by country. Finland typically takes 2–3 months, Canada 12–16 months, UK 3–8 weeks, Netherlands 3–6 months, and France 2–4 months. Nexa provides a full timeline roadmap at the beginning of every engagement." },
  { q: "What happens after the startup is launched?",
    a: "Our support continues post-launch. We offer ongoing advisory, KPI tracking, visa renewal support, investor relations management, and access to our global partner network to help your startup hit its growth milestones and scale sustainably." },
];

export default function StartupFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-16 md:py-24 bg-[#F7F6F9]">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center mb-12">FAQ</h2>
        </Reveal>
        <Reveal variant="up" delay={80}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-[16px] overflow-hidden border bg-white transition-all duration-200"
                style={{ borderColor: open === i ? "rgba(143,39,255,0.25)" : "#E2E2E2",
                  boxShadow: open === i ? "0 4px 20px rgba(143,39,255,0.08)" : undefined }}>
                <button onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left">
                  <span className="text-[14px] font-semibold text-black leading-[1.35]">{faq.q}</span>
                  <span className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300"
                    style={{ background: open === i ? "#8F27FF" : "#FAF6FF",
                      transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke={open === i ? "#fff" : "#8F27FF"} strokeWidth={2.5} strokeLinecap="round" className="w-3.5 h-3.5">
                      <path d="M12 5v14M5 12h14"/>
                    </svg>
                  </span>
                </button>
                <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: open === i ? "300px" : "0px" }}>
                  <p className="px-6 pb-5 text-[13.5px] text-[#474747] leading-[1.65]">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Row>
    </section>
  );
}
