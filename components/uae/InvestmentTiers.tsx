"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const subChannels = [
  {
    tag: "Sub-Channel A",
    amount: "AED 2M",
    label: "Investment Fund Channel",
    desc: "Official, unconditioned letter from a UAE-accredited investment fund confirming a capital deposit of no less than AED 2,000,000.",
  },
  {
    tag: "Sub-Channel B",
    amount: "AED 2M",
    label: "Corporate Capital Channel",
    desc: "Establishment or equity acquisition within a domestic corporate entity demonstrating individual paid-up share capital of at least AED 2,000,000.",
  },
  {
    tag: "Sub-Channel C",
    amount: "AED 250K",
    label: "Fiscal Contribution Channel",
    desc: "FTA certification confirming the investor's corporate entity contributes a minimum of AED 250,000 annually in federal taxes — the lowest capital entry point in the program.",
  },
];

export default function InvestmentTiers() {
  return (
    <section className="py-20 md:py-24" style={{ background: "#F7F6F9" }}>
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1] text-center mb-6">
            Investment Architecture &amp; Entry Vectors
          </h2>
        </Reveal>

        <Reveal variant="up" delay={60}>
          <p className="text-[16px] text-[#474747] leading-[1.65] max-w-[72ch] mx-auto text-center mb-12">
            The regulatory framework establishes{" "}
            <strong className="text-black font-semibold">two primary entry vectors</strong> for the
            10-year Golden Residency — real estate capital deployment and public market instruments —
            with strict asset classification rules governing each.
          </p>
        </Reveal>

        {/* Main tier cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Featured — Real Estate */}
          <Reveal variant="left" delay={80}>
            <div
              className="rounded-[20px] p-8 sm:p-9 flex flex-col gap-5 h-full border transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "#FAF6FF",
                border: "1.5px solid #8F27FF",
                boxShadow: "0 0 0 0 rgba(143,39,255,0)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 20px 48px rgba(143,39,255,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 0 0 0 rgba(143,39,255,0)";
              }}
            >
              <span
                className="self-start text-[11px] font-bold uppercase tracking-[0.1em] px-3 py-1.5 rounded-full"
                style={{ background: "#FAF6FF", color: "#8F27FF", border: "1px solid rgba(143,39,255,0.18)" }}
              >
                Real Estate Vector
              </span>
              <div>
                <div className="text-[56px] font-extrabold tracking-[-0.05em] leading-[0.9] tabular-nums text-[#8F27FF]">
                  AED 2M
                </div>
                <div className="text-[13px] font-semibold text-[#929292] uppercase tracking-[0.06em] mt-1">
                  Total Property Asset Valuation
                </div>
              </div>
              <div className="h-px" style={{ background: "rgba(143,39,255,0.18)" }} />
              <div>
                <div className="text-[15px] font-semibold text-black mb-3">
                  Property Investor Visa UAE — 10-Year Renewable
                </div>
                <ul className="flex flex-col gap-2.5">
                  {[
                    { strong: "Portfolio Aggregation:", text: "Combine multiple freehold properties registered under the DLD to meet the AED 2M threshold." },
                    { strong: "Mortgaged Properties Eligible:", text: "Eligibility based on official DLD valuation — not purchase price. Bank NOC required." },
                    { strong: "2-Year Holding Lock-in", text: "post visa issuance." },
                  ].map((r, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[13px] text-[#929292] leading-[1.55]">
                      <span className="text-[#8F27FF] font-bold flex-shrink-0 text-[12px] mt-0.5">→</span>
                      <span><strong className="text-black font-semibold">{r.strong}</strong> {r.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Public Investments */}
          <Reveal variant="right" delay={80}>
            <div
              className="rounded-[20px] p-8 sm:p-9 flex flex-col gap-5 h-full bg-white transition-all duration-300 hover:-translate-y-1"
              style={{ border: "1.5px solid #E2E2E2" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "#8F27FF";
                el.style.boxShadow = "0 20px 48px rgba(143,39,255,0.1)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "#E2E2E2";
                el.style.boxShadow = "none";
              }}
            >
              <span
                className="self-start text-[11px] font-bold uppercase tracking-[0.1em] px-3 py-1.5 rounded-full"
                style={{ background: "#FFFBE6", color: "#7A6800", border: "1px solid #F0D800" }}
              >
                Public Investments Vector
              </span>
              <div>
                <div className="text-[56px] font-extrabold tracking-[-0.05em] leading-[0.9] tabular-nums text-black">
                  AED 2M
                </div>
                <div className="text-[13px] font-semibold text-[#929292] uppercase tracking-[0.06em] mt-1">
                  Capital Deposit or Paid-up Share Capital
                </div>
              </div>
              <div className="h-px bg-[#E2E2E2]" />
              <div>
                <div className="text-[15px] font-semibold text-black mb-3">
                  Three Distinct Sub-Channels — 10-Year Renewable
                </div>
                <ul className="flex flex-col gap-2.5">
                  {[
                    "For investors seeking deployment outside physical property portfolios.",
                    "Capital must be wholly owned — not structured via secondary debt or unapproved loans.",
                  ].map((r, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[13px] text-[#929292] leading-[1.55]">
                      <span className="text-[#8F27FF] font-bold flex-shrink-0 text-[12px] mt-0.5">→</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Sub-channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {subChannels.map((sc, i) => (
            <Reveal key={i} variant="up" delay={i * 70}>
              <div
                className="bg-white rounded-[14px] p-6 flex flex-col gap-2.5 transition-all duration-200 hover:border-[rgba(143,39,255,0.18)] hover:bg-[#FAF6FF]"
                style={{ border: "1px solid #E2E2E2" }}
              >
                <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#929292]">
                  {sc.tag}
                </span>
                <div className="text-[28px] font-extrabold text-black tracking-[-0.03em] tabular-nums leading-none">
                  {sc.amount}
                </div>
                <div className="text-[13px] font-semibold text-black">{sc.label}</div>
                <p className="text-[12.5px] text-[#929292] leading-[1.55] m-0">{sc.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Row>
    </section>
  );
}
