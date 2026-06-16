"use client";
import Link from "next/link";
import Image from "next/image";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const markets = [
  {
    name: "Canada",
    flagEl: (
      <svg width="44" height="26" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#ca)">
          <rect width="40" height="24" fill="white" />
          <path d="M0 0H11.0721V24H0V0ZM28.9279 0H40V24H28.9279V0ZM23.8986 14.4561L27.8285 12.6877L25.8635 11.8035V10.0351L21.9337 11.8035L23.8986 8.26667H21.9337L19.9688 5.61404L18.0039 8.26667H16.039L18.0039 11.8035L14.0741 10.0351V11.8035L12.1092 12.6877L16.039 14.4561L15.0565 16.2246H18.9864V18.8772H20.9513V16.2246H24.8811L23.8986 14.4561Z" fill="#FF0000" />
        </g>
        <defs><clipPath id="ca"><rect width="40" height="24" fill="white" /></clipPath></defs>
      </svg>
    ),
    desc: "Entrepreneur Visa with permanent residency pathway",
    href: "/canada",
    img: "/images/photos/1517935706615-2717063c2225-w700.jpg",
  },
  {
    name: "Spain",
    flagEl: <span style={{ fontSize: 22, lineHeight: 1, filter: "drop-shadow(0 2px 6px rgba(0,0,0,.4))" }}>🇪🇸</span>,
    desc: "Entrepreneur Visa with 20-day fast-track approval",
    href: "/spain",
    img: "/images/photos/1539037116277-4db20889f2d4-w700.jpg",
  },
  {
    name: "Finland",
    flagEl: <span style={{ fontSize: 22, lineHeight: 1, filter: "drop-shadow(0 2px 6px rgba(0,0,0,.4))" }}>🇫🇮</span>,
    desc: "Entrepreneur Permit for business owners entering EU markets",
    href: "/Entrepreneurship/Subpage-Finland",
    img: "/images/photos/1538332576228-eb5b4c4de6f5-w700.jpg",
  },
  {
    name: "Portugal",
    flagEl: <span style={{ fontSize: 22, lineHeight: 1, filter: "drop-shadow(0 2px 6px rgba(0,0,0,.4))" }}>🇵🇹</span>,
    desc: "D2 Entrepreneur Visa with EU residency path",
    href: "/portugal",
    img: "/images/photos/1555881400-74d7acaacd8b-w700.jpg",
  },
  {
    name: "Netherlands",
    flagEl: <span style={{ fontSize: 22, lineHeight: 1, filter: "drop-shadow(0 2px 6px rgba(0,0,0,.4))" }}>🇳🇱</span>,
    desc: "Entrepreneur Visa in Europe's most connected business hub",
    href: "/Entrepreneurship/Subpage-Netherland",
    img: "/images/photos/1512470876302-972faa2aa9a4-w700.jpg",
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
                  {m.flagEl}
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
