"use client";
import Link from "next/link";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/LazyReveal";
import Image from "next/image";

const countries = [
  {
    name: "Finland",
    flag: "/images/Entrepreneurship/FI.svg",
    desc: "Startup Permit in Europe's leading innovation ecosystem",
    href: "/startup/finland",
    img: "/images/Entrepreneurship/finland.png",
  },
  {
    name: "Canada",
    flag: "/images/Entrepreneurship/cn.svg",
    desc: "Startup Visa with access to world-class accelerator networks",
    href: "/startup/canada",
    img: "/images/Entrepreneurship/canada.png",
  },
  {
    name: "UK",
    flag: "/images/startup/england.svg",
    desc: "Innovator Founder Visa for high-growth ventures",
    href: "/startup/uk",
    img: "/images/startup/uk.webp",
  },
  {
    name: "Netherlands",
    flag: "/images/Entrepreneurship/netherlands.svg",
    desc: "Startup Visa in Europe's most connected tech hub",
    href: "/startup/netherlands",
    img: "/images/Entrepreneurship/netherland.png",
  },
  {
    name: "France",
    flag: "/images/investment/fr.svg",
    desc: "French Tech Visa for founders backed by a recognized program",
    href: "/startup/france",
    img: "/images/investment/france.webp",
  },
];

export default function StartupCountries() {
  return (
    <section className="py-[90px] bg-[#F7F6F9]">
      <Row>
        <Reveal variant="up">
          <div className="text-center max-w-[700px] mx-auto mb-14">
            <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1]">
              Where We Offer
            </h2>
            <p className="text-[15px] text-[#929292] mt-3 max-w-[480px] mx-auto">
              Five government-backed startup programs. One trusted partner.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-[14px]">
          {countries.map((c, i) => (
            <Reveal key={c.name} variant="up" delay={i * 70}>
              <Link
                href={c.href}
                className="group relative block overflow-hidden text-inherit no-underline"
                style={{
                  borderRadius: 20,
                  height: 300,
                  background: "#000",
                  transition: "transform 0.4s cubic-bezier(.2,.8,.2,1), box-shadow 0.4s",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-6px)";
                  el.style.boxShadow = "0 24px 48px rgba(0,0,0,.35)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "";
                  el.style.boxShadow = "";
                }}
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 group-hover:scale-[1.06] transition-transform duration-[600ms]"
                  style={{ filter: "brightness(.72)" }}
                >
                  <Image src={c.img} alt={c.name} fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />
                </div>

                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(180deg,rgba(0,0,0,.05) 0%,rgba(0,0,0,.72) 100%)" }}
                />

                {/* Flag top-left */}
                <div
                  className="absolute top-[14px] left-[14px] z-[3] rounded-[5px] overflow-hidden leading-none"
                  style={{ boxShadow: "0 2px 8px rgba(0,0,0,.35)" }}
                >
                  <Image src={c.flag} alt={c.name} width={40} height={26} className="object-contain" />
                </div>

                {/* Content bottom */}
                <div className="absolute bottom-0 left-0 right-0 px-[20px] py-[22px] z-[2]">
                  <div className="text-white font-bold text-[16px] mb-1 tracking-[-0.01em]">{c.name}</div>
                  <p className="text-white/65 text-[12px] leading-[1.5] mb-3">{c.desc}</p>
                  <span className="inline-flex items-center gap-[7px] text-[13px] font-semibold text-white px-4 py-2 rounded-full backdrop-blur-[8px] border border-white/30 bg-white/15 transition-all duration-[250ms] group-hover:bg-[#8F27FF] group-hover:border-[#8F27FF] group-hover:translate-x-[3px]">
                    Explore Program
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-[13px] h-[13px] transition-transform duration-[250ms] group-hover:translate-x-[3px]">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Row>
    </section>
  );
}
