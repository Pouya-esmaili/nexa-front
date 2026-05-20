"use client";

import Image from "next/image";
import Row from "../global/Row";

const countries = [
  {
    name: "Finland",
    image: "/images/Entrepreneurship/finland.png",
    flag: "/images/Entrepreneurship/FI.svg",
  },
  {
    name: "Netherland",
    image: "/images/Entrepreneurship/netherland.png",
    flag: "/images/Entrepreneurship/NT (1).svg",
  },
  {
    name: "Canada",
    image: "/images/Entrepreneurship/canada.png",
    flag: "/images/Entrepreneurship/cn.svg",
  },
  {
    name: "UK",
    image: "/images/Entrepreneurship/spain.png",
    flag: "/images/landing/british.svg",
  },
  {
    name: "France",
    image: "/images/Entrepreneurship/portugal.png",
    flag: "/images/Entrepreneurship/ES.svg",
  },
];

export default function StartupCountries() {
  return (
    <section className="w-full py-10 md:py-16">

      {/* Mobile — horizontal scroll */}
      <div className="md:hidden px-5">
        <h2 className="text-xl font-bold text-center mb-6">
          Which Countries Offer Startup Programs?
        </h2>
        <div
          className="scrollbar-hide"
          style={{ display: "flex", gap: "16px", overflowX: "auto", paddingBottom: "12px" }}
        >
          {countries.map((country, i) => (
            <div
              key={i}
              style={{ position: "relative", flexShrink: 0, width: "160px", height: "200px", borderRadius: "16px", overflow: "hidden" }}
            >
              <Image src={country.image} alt={country.name} fill className="object-cover" />
              <div style={{ position: "absolute", top: "12px", left: "12px" }}>
                <Image src={country.flag} alt={`${country.name} flag`} width={28} height={18} className="object-contain" />
              </div>
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, display: "flex", flexDirection: "column", alignItems: "center", paddingBottom: "16px" }}>
                <span style={{ color: "white", fontWeight: 700, fontSize: "16px", marginBottom: "4px" }}>{country.name}</span>
                <div style={{ width: "80px", height: "1px", backgroundColor: "white", marginBottom: "4px" }} />
                <span style={{ color: "white", fontSize: "12px" }}>Read More →</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop — 5-column grid */}
      <div className="hidden md:block">
        <Row>
          <h2 className="text-4xl font-bold text-center mb-12">
            Which Countries Offer Startup Programs?
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
              gap: "24px",
            }}
          >
            {countries.map((country, i) => (
              <div
                key={i}
                style={{ position: "relative", height: "260px", borderRadius: "16px", overflow: "hidden", cursor: "pointer" }}
                className="group"
              >
                <Image src={country.image} alt={country.name} fill className="object-cover" />
                <div style={{ position: "absolute", top: "16px", left: "16px" }}>
                  <Image src={country.flag} alt={`${country.name} flag`} width={32} height={20} className="object-contain" />
                </div>
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, display: "flex", flexDirection: "column", alignItems: "center", paddingBottom: "24px" }}>
                  <span style={{ color: "white", fontWeight: 700, fontSize: "22px", marginBottom: "8px" }}>{country.name}</span>
                  <div style={{ width: "128px", height: "1px", backgroundColor: "white", marginBottom: "8px" }} />
                  <span style={{ color: "white", fontSize: "14px" }}>Read More →</span>
                </div>
              </div>
            ))}
          </div>
        </Row>
      </div>

    </section>
  );
}
