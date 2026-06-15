"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const tiers = [
  {
    badge: "Spanish Government Bonds",
    badgeStyle: { background: "#E8F5E9", color: "#2E7D32", border: "1px solid #A5D6A7" },
    amount: "€2M",
    sub: "Minimum Investment",
    desc: "Spanish public debt instruments maintained for a minimum of 5 years. Highest capital threshold — lowest operational complexity.",
    featured: false,
  },
  {
    badge: "Investment Funds / VC",
    badgeStyle: { background: "#FAF6FF", color: "#8F27FF", border: "1px solid rgba(143,39,255,0.18)" },
    amount: "€1M",
    sub: "Minimum Investment",
    desc: (
      <>
        Shares of <strong className="text-black font-semibold">closed-end investment funds or venture capital funds</strong>{" "}
        (<em>Fondos de Capital Riesgo</em>) set up and actively registered in Spain.
      </>
    ),
    featured: true,
  },
  {
    badge: "Corporate Equity",
    badgeStyle: { background: "#E3F2FD", color: "#1565C0", border: "1px solid #90CAF9" },
    amount: "€1M",
    sub: "Minimum Investment",
    desc: (
      <>
        Stocks or shares of <strong className="text-black font-semibold">active Spanish companies</strong> with a verifiable,
        real business presence and operational activity inside Spain.
      </>
    ),
    featured: false,
  },
  {
    badge: "Bank Deposits",
    badgeStyle: { background: "#FFF3E0", color: "#E65100", border: "1px solid #FFCC80" },
    amount: "€1M",
    sub: "Minimum Investment",
    desc: (
      <>
        Stable bank deposits within <strong className="text-black font-semibold">authorized Spanish financial institutions</strong>.
        Most liquid and straightforward capital deployment option.
      </>
    ),
    featured: false,
  },
];

export default function InvestmentTiers() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1] text-center mb-6">
            Qualifying Financial Pathways &amp; Thresholds
          </h2>
        </Reveal>

        <Reveal variant="up" delay={60}>
          <p className="text-[16px] text-[#474747] leading-[1.65] max-w-[68ch] mx-auto text-center mb-12">
            Real estate is <strong className="text-black font-semibold">no longer an eligible asset class</strong> for new
            residency applications. The current framework welcomes capital into Spain&apos;s financial and corporate
            ecosystems across four qualifying channels.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tiers.map((tier, i) => (
            <Reveal key={i} variant="up" delay={i * 60}>
              <div
                className="rounded-[20px] p-8 flex flex-col gap-4 h-full transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: tier.featured ? "#FAF6FF" : "#F7F6F9",
                  border: tier.featured ? "1.5px solid #8F27FF" : "1.5px solid #E2E2E2",
                }}
                onMouseEnter={(e) => {
                  if (!tier.featured) {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = "#8F27FF";
                    el.style.boxShadow = "0 16px 40px rgba(143,39,255,0.08)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!tier.featured) {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = "#E2E2E2";
                    el.style.boxShadow = "none";
                  }
                }}
              >
                <span
                  className="self-start text-[11px] font-bold uppercase tracking-[0.1em] px-3 py-1.5 rounded-full"
                  style={tier.badgeStyle}
                >
                  {tier.badge}
                </span>
                <div>
                  <div
                    className="font-extrabold leading-none tabular-nums"
                    style={{
                      fontSize: "52px",
                      letterSpacing: "-0.05em",
                      color: tier.featured ? "#8F27FF" : "#000",
                    }}
                  >
                    {tier.amount}
                  </div>
                  <div className="text-[12px] font-semibold text-[#929292] uppercase tracking-[0.06em] mt-1">
                    {tier.sub}
                  </div>
                </div>
                <div
                  className="h-px"
                  style={{ background: tier.featured ? "rgba(143,39,255,0.18)" : "#E2E2E2" }}
                />
                <p className="text-[13.5px] text-[#474747] leading-[1.6] m-0">{tier.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Row>
    </section>
  );
}
