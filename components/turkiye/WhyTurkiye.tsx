const cards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
      </svg>
    ),
    title: "Tri-continental access",
    desc: "Direct corridor between Europe, the Gulf, Central Asia and North Africa.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 21V8l8-4 8 4v13" /><path d="M4 21h16M9 21v-6h6v6M10 11h4M10 14h4" />
      </svg>
    ),
    title: "Real estate upside",
    desc: "Competitive acquisition costs powered by a dynamic tourism economy.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="2" /><circle cx="18" cy="18" r="2" /><circle cx="18" cy="6" r="2" /><circle cx="6" cy="18" r="2" />
        <path d="M8 6h8M8 18h8M6 8v8M18 8v8" />
      </svg>
    ),
    title: "World-class infrastructure",
    desc: "Modern airports, deep-water ports and high-speed rail across major cities.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z" /><path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Tier-1 passport",
    desc: "Internationally recognized CBI framework — from residency to passport.",
  },
];

export default function WhyTurkiye() {
  return (
    <section id="why" className="why">
      <h2 className="section-title">Why Türkiye?</h2>
      <div className="why-grid">
        {cards.map((c) => (
          <article key={c.title} className="why-card">
            <div className="why-ico">{c.icon}</div>
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
