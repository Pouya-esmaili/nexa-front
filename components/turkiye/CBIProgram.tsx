const steps = [
  { num: "01", title: "Eligibility & structuring", desc: "Confirm investor profile, family inclusion, source-of-funds documentation and qualifying investment strategy.", highlight: false },
  { num: "02", title: "Property acquisition", desc: "Acquire qualifying real estate — residential, commercial, villa or government-approved development — above USD 600,000.", highlight: false },
  { num: "03", title: "Official valuation", desc: "Obtain government-authorized property valuation and complete transfer through compliant banking channels.", highlight: true },
  { num: "04", title: "Residence & CBI filing", desc: "File the citizenship application for the principal applicant and eligible family members through structured government channels.", highlight: false },
  { num: "05", title: "Passport issuance", desc: "Turkish citizenship and passports issued upon final approval — property is held for a minimum of 3 years.", highlight: false },
];

const Tick = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round">
    <path d="M5 12l4 4 10-10" />
  </svg>
);

export default function CBIProgram() {
  return (
    <section className="cbi">
      <h2 className="section-title">Turkish Citizenship by Investment Program</h2>
      <div className="cbi-wrap">
        <aside className="cbi-side">
          <div className="cbi-side-pill">Process duration</div>
          <div className="cbi-side-stat">
            <span className="big">6–12</span>
            <span className="unit">months</span>
          </div>
          <p className="cbi-side-note">
            One of the world&apos;s most established Citizenship by Investment programs. Applications proceed through structured government channels.
          </p>
          <div className="cbi-side-tags">
            <span><Tick /> Government recognized</span>
            <span><Tick /> Family inclusion</span>
          </div>
        </aside>
        <ol className="vtimeline">
          {steps.map((s) => (
            <li key={s.num} className={`vt-step${s.highlight ? " is-highlight" : ""}`}>
              <div className="vt-num">{s.num}</div>
              <div className="vt-card">
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
