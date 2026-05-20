import Image from "next/image";
import Row from "../global/Row";

const features = [
  { title: "Enhancing Competitiveness", icon: "/images/Entrepreneurship/economic.svg" },
  { title: "Fostering Innovation", icon: "/images/Entrepreneurship/dynamic.svg" },
  { title: "Job Creation", icon: "/images/Entrepreneurship/job.svg" },
  { title: "Wealth Creation", icon: "/images/Entrepreneurship/investment.svg" },
  { title: "Environmental Sustainability", icon: "/images/Entrepreneurship/Diversifies.svg" },
  { title: "Increasing Productivity", icon: "/images/Entrepreneurship/performance.svg" },
];

export default function WhyImportant() {
  return (
    <section className="py-12 md:py-16">

      {/* Mobile — 2-column grid */}
      <div className="md:hidden" style={{ padding: "0 20px" }}>
        <h2 style={{ textAlign: "center", fontSize: "20px", fontWeight: 700, marginBottom: "32px", color: "#111" }}>
          Why Startup Programs are important for Countries?
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "12px" }}>
          {features.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "16px",
                backgroundColor: "white",
                borderRadius: "16px",
                boxShadow: "0px 4px 12px 0px #0000001A",
              }}
            >
              <Image src={item.icon} alt={item.title} width={36} height={36} className="object-contain flex-shrink-0" />
              <p style={{ fontSize: "11px", fontWeight: 500, color: "#333", lineHeight: "1.4" }}>{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop — 3-column grid */}
      <div className="hidden md:block">
        <Row>
          <h2 style={{ textAlign: "center", fontSize: "28px", fontWeight: 700, marginBottom: "48px", color: "#111" }}>
            Why Startup Programs are important for Countries?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "24px" }}>
            {features.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "24px",
                  padding: "32px",
                  backgroundColor: "white",
                  borderRadius: "16px",
                  boxShadow: "0px 8px 24px 0px #0000001A",
                }}
              >
                <Image src={item.icon} alt={item.title} width={48} height={48} className="object-contain flex-shrink-0" />
                <h3 style={{ fontSize: "15px", fontWeight: 500, color: "#333" }}>{item.title}</h3>
              </div>
            ))}
          </div>
        </Row>
      </div>

    </section>
  );
}
