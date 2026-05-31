"use client";

import { useState } from "react";
import Row from "@/components/global/Row";

const faqs = [
  { q: "What is the minimum investment required for Turkish citizenship?", a: "Foreign investors may qualify for Turkish citizenship through qualifying real estate with a minimum value of USD 600,000 — established by the Turkish government. The property must be held for at least 3 years." },
  { q: "How long does the citizenship process take?", a: "In most cases the process completes within approximately 6 to 12 months, depending on document preparation, government processing times and the structure of the investment." },
  { q: "Can my family be included in the application?", a: "Yes. Applicants may generally include qualifying family members — typically a spouse and dependent children — allowing families to secure international mobility together." },
  { q: "What types of properties qualify for the CBI program?", a: "Residential apartments, commercial units, villas, government-approved development projects, and multiple qualifying properties combined under one application structure." },
  { q: "Can I get residency without applying for citizenship?", a: "Yes. Qualifying property ownership may provide eligibility for renewable Turkish residence permits, which is suitable for entrepreneurs, families, and remote business owners who do not require a passport." },
  { q: "Do I need to live in Türkiye to keep my citizenship?", a: "No physical residency requirement applies under the CBI program. Citizenship is retained provided the investment requirements and government compliance rules are met." },
  { q: "Can the property generate rental income during the holding period?", a: "Yes. The property may be rented out during the 3-year holding period — Türkiye's tourism economy and major cities offer strong rental demand." },
  { q: "Who is the local real estate partner Nexa works with?", a: "Nexa operates in strategic partnership with Önaylar Group — an established real estate and construction company based in Izmir with operations across Türkiye." },
];

export default function FAQs() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-20 bg-white">
      <Row>
        <h2 className="text-[28px] md:text-[38px] font-bold tracking-tight mb-10 md:mb-14">
          FAQs
        </h2>
        <div className="flex flex-col gap-3 max-w-3xl">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden"
              style={{ border: open === i ? "1.5px solid #8F27FF" : "1px solid #EFEFEF", background: open === i ? "#FAF6FF" : "#fff" }}
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-[15px] text-[#1a1a22]">{f.q}</span>
                <span
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-transform"
                  style={open === i ? { background: "#8F27FF", color: "#fff" } : { background: "#F5F5F5", color: "#555" }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="w-4 h-4"
                    style={{ transform: open === i ? "rotate(45deg)" : "none", transition: "transform 0.2s" }}>
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-[14px] text-gray-600 leading-relaxed border-t border-[#8F27FF]/15">
                  <div className="pt-4">{f.a}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Row>
    </section>
  );
}
