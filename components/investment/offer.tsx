"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/global/Reveal";

const COUNTRIES = [
  {
    name: "UAE",
    flag: "/images/investment/AUE.svg",
    desc: "Investment opportunities in the Middle East's leading financial hub",
    href: "/investment/uae",
    img: "/images/investment/uae.svg",
  },
  {
    name: "Turkey",
    flag: "/images/investment/TR.svg",
    desc: "Strategic investment gateway between Europe and Asia",
    href: "/investment/turkiye",
    img: "/images/investment/turkey.svg",
  },
  {
    name: "Greece",
    flag: "/images/investment/GR.svg",
    desc: "Golden Visa program with EU residency and property investment",
    href: "/investment/greece",
    img: "/images/investment/greece.svg",
  },
  {
    name: "Spain",
    flag: "/images/investment/ES.svg",
    desc: "High-yield property and business investment in Southern Europe",
    href: "/investment/spain",
    img: "/images/investment/spain.png",
  },
  {
    name: "France",
    flag: "/images/investment/fr.svg",
    desc: "Tech and innovation investment in Europe's second-largest economy",
    href: "/investment/france",
    img: "/images/investment/france.svg",
  },
];

export default function InvestmentCountries() {
  return (
    <section style={{ padding: "90px 0", background: "#F7F6F9" }}>
      <div className="px-6 mx-auto w-full" style={{ maxWidth: 1240 }}>
        {/* Header */}
        <Reveal>
          <div className="text-center mb-14">
            <h2
              style={{
                fontSize: "clamp(26px, 3vw, 40px)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                color: "#000",
              }}
            >
              Where We Offer
            </h2>
          </div>
        </Reveal>

        {/* Grid */}
        <div className="grid gap-3.5 grid-cols-1 sm:grid-cols-3 lg:grid-cols-5">
          {COUNTRIES.map((country, i) => (
            <Reveal key={country.name} delay={i * 80}>
              <Link
                href={country.href}
                className="
                  block relative overflow-hidden group
                  h-[220px] sm:h-[300px]
                  hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(0,0,0,.35)]
                  transition-all duration-400
                "
                style={{ borderRadius: 20, background: "#000" }}
              >
                {/* Background Image */}
                <Image
                  src={country.img}
                  alt={country.name}
                  fill
                  className="object-cover brightness-[0.72] group-hover:brightness-[0.55] group-hover:scale-[1.06] transition-all duration-700"
                />

                {/* Overlay gradient */}
                <div
                  className="absolute inset-0 transition-all duration-300"
                  style={{
                    background: "linear-gradient(180deg,rgba(0,0,0,.05) 0%,rgba(0,0,0,.72) 100%)",
                  }}
                />

                {/* Flag */}
                <div
                  className="absolute z-10"
                  style={{
                    top: 14, left: 14,
                    filter: "drop-shadow(0 2px 6px rgba(0,0,0,.4))",
                  }}
                >
                  <Image
                    src={country.flag}
                    alt={`${country.name} flag`}
                    width={32}
                    height={22}
                    className="object-contain"
                  />
                </div>

                {/* Body */}
                <div className="absolute z-10 bottom-0 left-0 right-0" style={{ padding: "22px 20px" }}>
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: "white",
                      marginBottom: 4,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {country.name}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "rgba(255,255,255,0.65)",
                      lineHeight: 1.5,
                      marginBottom: 12,
                    }}
                  >
                    {country.desc}
                  </div>

                  {/* CTA Button — Tailwind-only so group-hover can override bg */}
                  <span
                    className="
                      inline-flex items-center gap-1.5 font-semibold text-white
                      text-[13px] px-4 py-2 rounded-full backdrop-blur-sm
                      bg-white/15 border border-white/30
                      transition-all duration-300
                      group-hover:bg-[#8F27FF] group-hover:border-[#8F27FF] group-hover:translate-x-0.5
                    "
                  >
                    Explore Program
                    <svg
                      width="13" height="13"
                      viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="2.5"
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
