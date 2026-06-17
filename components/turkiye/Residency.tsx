const steps = [
  { num: "01", title: "Acquire qualifying property", desc: "Residential or commercial real estate eligible under residency criteria." },
  { num: "02", title: "Submit residency application", desc: "Verified ownership documentation reviewed through structured channels." },
  { num: "03", title: "Receive renewable permit", desc: "Issued for the principal applicant and eligible family members." },
  { num: "04", title: "Pathway to CBI unlocked", desc: "Upgrade to Turkish citizenship when investment thresholds are met." },
];

const suitedFor = [
  "Entrepreneurs seeking regional expansion",
  "Families planning international relocation",
  "Investors diversifying assets internationally",
  "Individuals seeking a secondary residence",
  "Remote business owners & digital entrepreneurs",
];

const Check = () => (
  <span className="res-check">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
      <path d="M5 12l4 4 10-10" />
    </svg>
  </span>
);

export default function Residency() {
  return (
    <section className="residency">
      <h2 className="section-title">Turkish Residency Through Property Investment</h2>
      <div className="residency-grid">
        <div className="res-main">
          <p className="res-lede">
            Foreign nationals can obtain residency in Türkiye through qualifying property ownership. Residential or commercial property may provide eligibility for renewable residence permits — opening access to local services, education, healthcare and banking.
          </p>
          <ol className="res-steps">
            {steps.map((s) => (
              <li key={s.num}>
                <span className="res-step-num">{s.num}</span>
                <div>
                  <h5>{s.title}</h5>
                  <p>{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <aside className="res-aside">
          <div className="res-aside-tag">Suited for</div>
          <ul className="res-aside-list">
            {suitedFor.map((item) => (
              <li key={item}>
                <Check />
                {item}
              </li>
            ))}
          </ul>
          <div className="res-aside-foot">
            Property ownership also creates a direct pathway toward Turkish citizenship under the CBI Program when investment thresholds are met.
          </div>
        </aside>
      </div>
    </section>
  );
}
