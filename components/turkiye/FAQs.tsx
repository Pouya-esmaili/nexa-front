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
  return (
    <section className="faqs">
      <h2 className="section-title">FAQs</h2>
      <div className="faq-grid">
        {faqs.map((f, i) => (
          <details key={f.q} className="faq" open={i === 0}>
            <summary>
              <span className="faq-q">{f.q}</span>
              <span className="faq-chev" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </summary>
            <div className="faq-a">{f.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
