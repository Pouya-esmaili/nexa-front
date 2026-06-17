const cards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" /><path d="M9 8.5h5a2 2 0 0 1 0 4h-4a2 2 0 0 0 0 4h5M12 6v2M12 16v2" />
      </svg>
    ),
    title: "Minimum threshold",
    desc: (<>Purchase qualifying real estate with a minimum value of <strong>USD 600,000</strong>.</>),
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
      </svg>
    ),
    title: "3-year holding",
    desc: (<>Maintain ownership for at least <strong>3 years</strong> from the date of acquisition.</>),
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="6" width="18" height="12" rx="1.5" /><path d="M3 10h18M7 14h3" />
      </svg>
    ),
    title: "Compliant banking",
    desc: "Complete the transaction through official banking channels and Turkish financial regulations.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z" /><path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Authorized approvals",
    desc: "Obtain official valuation and eligibility approvals from government-authorized authorities.",
  },
];

const chips = ["Residential apartments", "Commercial units", "Villas", "Approved developments", "Combined structures"];

export default function InvestmentRequirements() {
  return (
    <section className="reqs">
      <h2 className="section-title light">Investment Requirements, Costs &amp; Financial Structure</h2>
      <div className="reqs-layout">
        <aside className="reqs-hero">
          <div className="reqs-hero-pill">Minimum threshold</div>
          <div className="reqs-hero-stat">
            <span className="prefix">USD</span>
            <span className="figure">600K</span>
          </div>
          <p className="reqs-hero-meta">
            Qualifying real estate value established by the Turkish government — held for a minimum of <strong>3 years</strong>.
          </p>
          <div className="reqs-hero-chips">
            {chips.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
        </aside>
        <div className="reqs-grid">
          {cards.map((c) => (
            <article key={c.title} className="req-card">
              <div className="req-ico">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
