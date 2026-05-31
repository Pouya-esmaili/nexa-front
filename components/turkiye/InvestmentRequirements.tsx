import Row from "@/components/global/Row";

const cards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="9" /><path d="M9 8.5h5a2 2 0 0 1 0 4h-4a2 2 0 0 0 0 4h5M12 6v2M12 16v2" />
      </svg>
    ),
    title: "Minimum threshold",
    desc: "Purchase qualifying real estate with a minimum value of USD 600,000.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
      </svg>
    ),
    title: "3-year holding",
    desc: "Maintain ownership for at least 3 years from the date of acquisition.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="3" y="6" width="18" height="12" rx="1.5" /><path d="M3 10h18M7 14h3" />
      </svg>
    ),
    title: "Compliant banking",
    desc: "Complete the transaction through official banking channels and Turkish financial regulations.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z" /><path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Authorized approvals",
    desc: "Obtain official valuation and eligibility approvals from government-authorized authorities.",
  },
];

const propertyTypes = ["Residential apartments", "Commercial units", "Villas", "Approved developments", "Combined structures"];

export default function InvestmentRequirements() {
  return (
    <section className="py-16 md:py-20" style={{ background: "#1a1a22" }}>
      <Row>
        <h2 className="text-[28px] md:text-[38px] font-bold tracking-tight mb-10 md:mb-14 text-white">
          Investment Requirements, Costs & Financial Structure
        </h2>
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Hero stat aside */}
          <aside
            className="lg:w-72 flex-shrink-0 rounded-2xl p-7 flex flex-col gap-5 self-start"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <span
              className="inline-block text-[11px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full w-fit"
              style={{ background: "rgba(143,39,255,0.2)", color: "#c084fc" }}
            >
              Minimum threshold
            </span>
            <div className="flex items-end gap-1">
              <span className="text-[22px] font-bold text-white/60 mb-2">USD</span>
              <span className="text-[56px] font-extrabold leading-none text-white">600K</span>
            </div>
            <p className="text-[14px] text-white/50 leading-relaxed">
              Qualifying real estate value established by the Turkish government — held for a minimum of <strong className="text-white/70">3 years</strong>.
            </p>
            <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
              {propertyTypes.map((t) => (
                <span
                  key={t}
                  className="text-[12px] px-3 py-1 rounded-full"
                  style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  {t}
                </span>
              ))}
            </div>
          </aside>

          {/* Cards grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cards.map((c) => (
              <article
                key={c.title}
                className="p-6 rounded-2xl flex flex-col gap-4"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-[#c084fc]"
                  style={{ background: "rgba(143,39,255,0.15)" }}
                >
                  {c.icon}
                </div>
                <h3 className="font-semibold text-[16px] text-white">{c.title}</h3>
                <p className="text-[13px] text-white/50 leading-relaxed">{c.desc}</p>
              </article>
            ))}
          </div>

        </div>
      </Row>
    </section>
  );
}
