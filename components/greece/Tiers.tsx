import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const tiers = [
  {
    badge: "Prime Markets", badgeStyle: "bg-[#F4F4F4] text-[#474747]",
    amount: "€800K", label: "Single Property — Prime Zones",
    featured: false,
    geo: "Geographic Allocation",
    zones: "Entire Region of Attica (Greater Athens & Piraeus), Thessaloniki, Mykonos, Santorini, all islands with population over 3,100 (Crete, Rhodes, Corfu, Paros).",
    rules: ["Single, discrete property — no portfolio bundling", "Minimum living area of 120 m²"],
  },
  {
    badge: "Regional Emerging", badgeStyle: "bg-[#8F27FF] text-white",
    amount: "€400K", label: "Single Property — Regional Zones",
    featured: true,
    geo: "Geographic Allocation",
    zones: "Mainland Greece outside Attica/Thessaloniki. Regional coastal areas and secondary municipal markets. Minor islands with population under 3,100.",
    rules: ["Single, discrete property — no portfolio bundling", "Minimum living area of 120 m²"],
  },
  {
    badge: "Special Category", badgeStyle: "bg-[#FFFBE6] text-[#7A6800] border border-[#F0D800]",
    amount: "€250K", label: "Conversion or Heritage — Nationwide",
    featured: false,
    geo: "Available Anywhere in Greece",
    zones: "Valid in prime central Athens, Piraeus, or elite islands. Two qualifying asset types only.",
    rules: ["Asset Rule A: Commercial-to-residential conversion — completed before filing", "Asset Rule B: Heritage/monument building with full restoration before first renewal"],
  },
];

export default function Tiers() {
  return (
    <section className="py-20 md:py-24 bg-[#F7F6F9]">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center mb-5">
            Investment Architecture & Tier System
          </h2>
          <p className="text-[16px] text-[#474747] leading-[1.65] max-w-[68ch] mx-auto text-center mb-12">
            Following <strong className="text-black">Law 5100/2024</strong>, the program operates under a geographic
            and asset-class tiered framework. Each tier carries strict structural requirements — not just a capital floor.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {tiers.map((t, i) => (
            <Reveal key={t.badge} variant="up" delay={i * 80}>
              <div className={`rounded-[20px] p-9 flex flex-col gap-5 border-[1.5px] transition-all duration-200 hover:-translate-y-1 ${
                t.featured
                  ? "border-[#8F27FF] bg-[#FAF6FF] hover:shadow-[0_20px_48px_rgba(143,39,255,0.12)]"
                  : "border-[#E2E2E2] bg-white hover:border-[#8F27FF] hover:shadow-[0_20px_48px_rgba(143,39,255,0.08)]"
              }`}>
                <span className={`self-start text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${t.badgeStyle}`}>
                  {t.badge}
                </span>
                <div>
                  <div className={`text-[52px] font-extrabold tracking-[-0.05em] leading-none ${t.featured ? "text-[#8F27FF]" : "text-black"}`}>
                    {t.amount}
                  </div>
                  <div className="text-[14px] font-semibold text-black mt-1">{t.label}</div>
                </div>
                <div className="h-px bg-[#E2E2E2]" />
                <div>
                  <div className="text-[11px] font-bold text-[#929292] uppercase tracking-widest mb-2">{t.geo}</div>
                  <p className="text-[13.5px] text-[#474747] leading-[1.6]">{t.zones}</p>
                </div>
                <ul className="flex flex-col gap-2">
                  {t.rules.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-[13px] text-[#929292] leading-[1.5]">
                      <span className="text-[#8F27FF] font-bold flex-shrink-0 mt-0.5">→</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Alternative route */}
        <Reveal variant="up" delay={100}>
          <div className="rounded-[20px] bg-black p-9 flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="w-14 h-14 rounded-[14px] flex items-center justify-center flex-shrink-0 text-[#8F27FF]"
              style={{ background: "rgba(143,39,255,0.2)", border: "1px solid rgba(143,39,255,0.4)" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                <rect x="3" y="6" width="18" height="12" rx="1.5"/><path d="M3 10h18M7 14h3"/>
              </svg>
            </div>
            <div className="flex-1">
              <div className="text-[11px] font-bold text-white/50 uppercase tracking-widest mb-2">Alternative Route — Financial Instruments</div>
              <div className="text-[20px] font-bold text-white tracking-tight mb-1">Fixed-Term Deposit or Greek Government Bonds</div>
              <p className="text-[13.5px] text-white/60 leading-[1.6]">
                For investors preferring an asset class free of property maintenance. Capital must be placed in a
                Greek credit institution for minimum 1 year (auto-renewing), or in Greek government bonds with at
                least 3 years remaining maturity.
              </p>
            </div>
            <div className="text-[36px] font-extrabold text-[#FFE600] tracking-[-0.04em] whitespace-nowrap">€500K</div>
          </div>
        </Reveal>
      </Row>
    </section>
  );
}
