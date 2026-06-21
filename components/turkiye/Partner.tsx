import { Link } from "@/i18n/navigation";

const points = [
  "Carefully selected investment opportunities",
  "Local industry & market expertise",
  "Operational transparency end-to-end",
  "On-the-ground execution capabilities",
];

const Check = () => (
  <span className="check">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
      <path d="M5 12l4 4 10-10" />
    </svg>
  </span>
);

export default function Partner() {
  return (
    <section className="partner">
      <h2 className="section-title">Our Strategic Real Estate Partner in Türkiye</h2>
      <div className="partner-grid">
        <div className="partner-left">
          <div className="partner-card">
            <div className="partner-card-head">
              <span className="partner-logo">Ö</span>
              <div>
                <strong>Önaylar Group</strong>
                <small>Real estate &amp; construction · Izmir, Türkiye</small>
              </div>
            </div>
            <p>
              Nexa operates in strategic partnership with <strong>Önaylar Group</strong> — a well-established real estate and construction company based in Izmir with significant experience in property development, construction, and real estate operations across Türkiye.
            </p>
            <ul className="partner-points">
              {points.map((p) => (
                <li key={p}>
                  <Check /> {p}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="partner-right">
          <div className="partner-purple">
            <div className="pp-pill">Integrated Migration Platform</div>
            <h3>Structured consulting paired with on-the-ground real estate execution.</h3>
            <p>
              By integrating structured consulting with experienced real estate operations in Türkiye, Nexa delivers a more secure, transparent, and professionally managed investment migration experience.
            </p>
            <Link className="btn-light" href="#contact">
              Book a strategy call
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
