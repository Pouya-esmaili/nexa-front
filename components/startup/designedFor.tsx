const cards = [
  "Experienced Business Owners Looking To Expand Internationally",
  "Highly Skilled Professionals Ready To Compete Internationally",
  "Investors Actively Looking to Access High-Potential Opportunities",
  "Educated and Ambitious Young Entrepreneurs Seeking Growth",
];

export default function StartupDesignedFor() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        backgroundImage: "url('/images/Entrepreneurship/Designed.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Mobile — 2×2 grid */}
      <div
        className="md:hidden"
        style={{ padding: "56px 20px" }}
      >
        <h2 style={{ color: "white", fontSize: "20px", fontWeight: 600, textAlign: "center", marginBottom: "32px" }}>
          Who Startup Program is Designed For?
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "12px",
          }}
        >
          {cards.map((text, i) => (
            <div
              key={i}
              style={{
                borderRadius: "16px",
                padding: "24px 16px",
                textAlign: "center",
                backgroundColor: "rgba(255,255,255,0.5)",
                backdropFilter: "blur(30px)",
                boxShadow: "0px 10px 15px 0px #00000040",
              }}
            >
              <p style={{ fontSize: "12px", fontWeight: 500, lineHeight: "1.5" }}>{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop — 4-column row */}
      <div
        className="hidden md:block"
        style={{ padding: "80px 72px" }}
      >
        <h2 style={{ color: "white", fontSize: "36px", fontWeight: 600, textAlign: "center", marginBottom: "56px" }}>
          Who Startup Program is Designed For?
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: "24px",
          }}
        >
          {cards.map((text, i) => (
            <div
              key={i}
              style={{
                borderRadius: "16px",
                padding: "32px 24px",
                textAlign: "center",
                backgroundColor: "rgba(255,255,255,0.5)",
                backdropFilter: "blur(30px)",
                boxShadow: "0px 10px 15px 0px #00000040",
              }}
            >
              <p style={{ fontWeight: 500, lineHeight: "1.6" }}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
