import React from "react";
import Image from "next/image";
import Row from "../global/Row";

const services = [
  {
    icon: "/images/Entrepreneurship/analysis.svg",
    title: "Business Model & Financial Feasibility Analysis",
  },
  {
    icon: "/images/Entrepreneurship/Legal.svg",
    title: "Legal Guidance For Immigration Applications",
  },
  {
    icon: "/images/Entrepreneurship/Company.svg",
    title: "Company Registration and Post-Launch Support",
  },
  {
    icon: "/images/Entrepreneurship/performance.svg",
    title: "Ongoing Advisory and Performance Monitoring",
  },
];

const StartupServices: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-20">

      {/* Mobile — 2-column grid */}
      <div className="md:hidden" style={{ padding: "0 20px" }}>
        <h2 style={{ textAlign: "center", fontSize: "20px", fontWeight: 700, marginBottom: "32px" }}>
          Our Services
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "12px" }}>
          {services.map((service, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                backgroundColor: "#F7F6F9",
                borderRadius: "16px",
                padding: "16px",
                boxShadow: "0px 4px 4px 0px #00000040",
              }}
            >
              <div style={{ position: "absolute", left: 0, top: "32px", height: "40px", width: "4px", backgroundColor: "#8F27FF", borderRadius: "0 4px 4px 0" }} />
              <div style={{ width: "40px", height: "40px", backgroundColor: "white", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0px 4px 4px 0px #00000040", marginBottom: "16px" }}>
                <Image src={service.icon} alt={service.title} width={22} height={22} />
              </div>
              <p style={{ fontSize: "11px", fontWeight: 500, lineHeight: "1.5" }}>{service.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop — 4-column grid */}
      <div className="hidden md:block">
        <Row>
          <h2 className="text-center text-4xl font-bold mb-16">Our Services</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "40px" }}>
            {services.map((service, i) => (
              <div
                key={i}
                style={{
                  position: "relative",
                  backgroundColor: "#F7F6F9",
                  borderRadius: "16px",
                  padding: "24px",
                  boxShadow: "0px 4px 4px 0px #00000040",
                }}
              >
                <div style={{ position: "absolute", left: 0, top: "40px", height: "56px", width: "4px", backgroundColor: "#8F27FF", borderRadius: "0 8px 8px 0" }} />
                <div style={{ width: "56px", height: "56px", backgroundColor: "white", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0px 4px 4px 0px #00000040", marginBottom: "24px" }}>
                  <Image src={service.icon} alt={service.title} width={28} height={28} />
                </div>
                <p style={{ fontSize: "14px", fontWeight: 500, lineHeight: "1.6" }}>{service.title}</p>
              </div>
            ))}
          </div>
        </Row>
      </div>

    </section>
  );
};

export default StartupServices;
