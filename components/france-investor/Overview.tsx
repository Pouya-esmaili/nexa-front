"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const cards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M9 20V9"/>
      </svg>
    ),
    label: "Initial Visa Validity",
    value: <>Up to <em className="text-[#8F27FF] not-italic font-bold">4 years</em> — renewable multi-year residence card</>,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
      </svg>
    ),
    label: "Work Authorization",
    value: "Complete professional freedom to manage and execute your investment",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    label: "Family Inclusion",
    value: <>Spouse and minor children auto-qualify with <em className="text-[#8F27FF] not-italic font-bold">full work rights</em></>,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/>
      </svg>
    ),
    label: "Physical Presence",
    value: <>No minimum for temporary residency — <em className="text-[#8F27FF] not-italic font-bold">183 days/year</em> for PR &amp; Citizenship</>,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z"/>
      </svg>
    ),
    label: "Path to Citizenship",
    value: <>Eligible for Permanent Resident card or French Citizenship after <em className="text-[#8F27FF] not-italic font-bold">5 years</em></>,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9"/><path d="M9 8.5h5a2 2 0 0 1 0 4h-4a2 2 0 0 0 0 4h5"/>
      </svg>
    ),
    label: "Investment Type",
    value: "Active capital — no passive real estate, no stock portfolios",
  },
];

export default function Overview() {
  return (
    <section className="py-20 md:py-24" style={{ background: "#FAF6FF" }}>
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1] text-center mb-14">
            Program Core Values &amp; Parameters
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {cards.map((c, i) => (
            <Reveal key={i} variant="up" delay={i * 50}>
              <div
                className="bg-white rounded-[14px] p-[28px_28px] grid gap-4 items-start transition-all duration-200"
                style={{
                  gridTemplateColumns: "auto 1fr",
                  border: "1px solid rgba(143,39,255,0.18)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "#8F27FF";
                  el.style.transform = "translateY(-2px)";
                  el.style.boxShadow = "0 8px 24px rgba(143,39,255,0.1)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "rgba(143,39,255,0.18)";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                <div
                  className="w-10 h-10 rounded-[10px] flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "#FAF6FF",
                    border: "1px solid rgba(143,39,255,0.18)",
                    color: "#8F27FF",
                  }}
                >
                  <div className="w-5 h-5">{c.icon}</div>
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#929292] uppercase tracking-[0.08em] mb-1.5">{c.label}</div>
                  <div className="text-[15px] font-semibold text-black leading-[1.4]">{c.value}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Row>
    </section>
  );
}
