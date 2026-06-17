import Link from "next/link";

const stats = [
  { num: "USD 600K", label: "Min. investment" },
  { num: "6–12 mo", label: "Processing" },
  { num: "3 yrs", label: "Hold period" },
];

const HERO_IMG =
  "/images/investment/Türkiye.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <h1 className="display">
            Where <span className="grad-word">three continents</span> meet — your next passport begins here.
          </h1>
          <p className="lede">
            Through structured real estate investment, foreign nationals secure long-term residency and qualify for Turkish Citizenship by Investment — at the crossroads of Europe, Asia and the Middle East.
          </p>
          <ul className="hero-stats">
            {stats.map((s) => (
              <li key={s.label}>
                <strong>{s.num}</strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
          <div className="hero-ctas">
            <Link className="btn-primary purple" href="#contact">
              Start your application
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={HERO_IMG} alt="Istanbul skyline" loading="eager" />
          </div>
        </div>
      </div>
    </section>
  );
}
