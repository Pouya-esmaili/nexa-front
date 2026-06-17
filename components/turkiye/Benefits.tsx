const benefits = [
  {
    num: "01",
    title: "Global mobility",
    desc: "Visa-free or visa-on-arrival access to 110+ international destinations — strengthened by Türkiye's growing diplomatic relationships.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12l18-8-4 18-5-7-9-3z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Family inclusion",
    desc: "Include your spouse and dependent children — securing mobility for the whole family.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.4" />
        <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M14 20c0-2.6 1.8-4.5 4-4.5s4 1.9 4 4.5" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Business expansion",
    desc: "Operate at the crossroads of Europe, Central Asia, the Gulf and Africa.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 17l6-6 4 4 8-9" /><path d="M14 6h7v7" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Property appreciation",
    desc: "Major cities undergoing urban transformation — capital growth and rental income potential.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Lifestyle advantages",
    desc: "Modern cities, coastal destinations and globally connected international healthcare.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.5 4.5l2 2M17.5 17.5l2 2M4.5 19.5l2-2M17.5 6.5l2-2" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Fast processing",
    desc: "Typical timeline of 6–12 months — one of the fastest CBI pathways available.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
      </svg>
    ),
  },
];

export default function Benefits() {
  return (
    <section className="benefits">
      <h2 className="section-title">Key Benefits of Turkish Citizenship</h2>
      <div className="benefits-grid">
        {benefits.map((b) => (
          <article key={b.num} className="benefit">
            <div className="benefit-ico">{b.icon}</div>
            <span className="benefit-num">{b.num}</span>
            <h3>{b.title}</h3>
            <p>{b.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
