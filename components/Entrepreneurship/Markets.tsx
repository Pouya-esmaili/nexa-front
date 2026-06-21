"use client";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const markets = [
  {
    name: "Canada",
    flag: "/images/Entrepreneurship/canada.svg",
    desc: "Entrepreneur Visa with permanent residency pathway",
    href: "/Entrepreneurship/canada",
    img: "/images/Entrepreneurship/canada.png",
  },
  {
    name: "Spain",
    flag: "/images/Entrepreneurship/ES.svg",
    desc: "Entrepreneur Visa with 20-day fast-track approval",
    href: "/Entrepreneurship/spain",
    img: "/images/Entrepreneurship/spain.png",
  },
  {
    name: "Finland",
    flag: "/images/Entrepreneurship/FI.svg",
    desc: "Entrepreneur Permit for business owners entering EU markets",
    href: "/Entrepreneurship/finland",
    img: "/images/Entrepreneurship/finland.png",
  },
  {
    name: "Portugal",
    flag: "/images/Entrepreneurship/PT.svg",
    desc: "D2 Entrepreneur Visa with EU residency path",
    href: "/Entrepreneurship/portugal",
    img: "/images/Entrepreneurship/portugal.png",
  },
  {
    name: "Netherlands",
    flag: "/images/Entrepreneurship/NT (1).svg",
    desc: "Entrepreneur Visa in Europe's most connected business hub",
    href: "/Entrepreneurship/netherlands",
    img: "/images/Entrepreneurship/netherland.png",
  },
];

export default function Markets() {
  return (
    <section className="py-[90px] bg-[#F7F6F9]">
      <Row>
        <Reveal variant="up">
          <div className="text-center max-w-[700px] mx-auto mb-14 ">
            <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1]">
              Choose Your Market
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-[14px]">
          {markets.map((m, i) => (
            <Reveal key={m.name} variant="up" delay={i * 70}>
              <Link
                href={m.href}
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
                  className="absolute inset-0 group-hover:scale-[1.06] transition-transform duration-[600ms] "
                  style={{ filter: "brightness(.72)" }}
                >
                  <Image
                    src={m.img}
                    alt={m.name}
                    fill
                    className="object-cover"
                    quality={75}
                    sizes="(min-width:1024px) 20vw, (min-width:640px) 33vw, 100vw"
                    priority={i < 3}
                  />
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
                  <Image src={m.flag} alt={m.name} width={40} height={26} className="object-contain" />
                </div>

                {/* Content bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4 px-[20px] py-[22px] z-[2]">
                  <div className="text-white font-bold text-[16px] mb-1 tracking-[-0.01em]">{m.name}</div>
                  <p className="text-white/65 text-[12px] leading-[1.5] mb-3">{m.desc}</p>
                  <span
                    className="inline-flex items-center gap-[7px] text-[13px] font-semibold text-white px-4 py-2 rounded-full backdrop-blur-[8px] border border-white/30 bg-white/15 transition-all duration-[250ms] group-hover:bg-[#8F27FF] group-hover:border-[#8F27FF] group-hover:translate-x-[3px]"
                  >
                    Explore Program
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      className="w-[13px] h-[13px] transition-transform duration-[250ms] group-hover:translate-x-[3px]"
                    >
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
