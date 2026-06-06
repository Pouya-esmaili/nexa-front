import Link from "next/link";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const points = [
  "Carefully selected investment opportunities",
  "Local industry & market expertise",
  "Operational transparency end-to-end",
  "On-the-ground execution capabilities",
];

export default function Partner() {
  return (
    <section className="py-16 md:py-20 bg-[#faf9f5]">
      <Row>
        <Reveal variant="up" className="mb-10 md:mb-14">
          <h2 className="text-[28px] md:text-[38px] font-bold tracking-tight">
            Our Strategic Real Estate Partner in Türkiye
          </h2>
        </Reveal>

        <div className="flex flex-col lg:flex-row gap-6">

          {/* Partner card */}
          <Reveal variant="left" delay={100} className="flex-1">
            <div
              className="bg-white rounded-2xl p-7 flex flex-col gap-6 h-full"
              style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.04)", border: "1px solid #f0f0f0" }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-bold text-white flex-shrink-0"
                  style={{ background: "#FFE600", color: "#1a1a22" }}
                >
                  Ö
                </div>
                <div>
                  <strong className="text-[17px] block">Önaylar Group</strong>
                  <small className="text-[13px] text-gray-400">Real estate &amp; construction · Izmir, Türkiye</small>
                </div>
              </div>
              <p className="text-[15px] text-[#474747] leading-relaxed">
                Nexa operates in strategic partnership with <strong>Önaylar Group</strong> — a well-established real estate and construction company based in Izmir with significant experience in property development, construction, and real estate operations across Türkiye.
              </p>
              <ul className="flex flex-col gap-3">
                {points.map((p, i) => (
                  <li
                    key={p}
                    className="flex items-center gap-3 text-[14px] text-[#333] transition-all duration-300 hover:translate-x-1"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "#FAF6FF" }}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="#8F27FF" strokeWidth={2} strokeLinecap="round" className="w-3 h-3">
                        <path d="M5 12l4 4 10-10" />
                      </svg>
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Purple CTA card */}
          <Reveal variant="right" delay={150} className="flex-1">
            <div
              className="rounded-2xl p-8 flex flex-col gap-5 h-full justify-between relative overflow-hidden"
              style={{ background: "#8F27FF", color: "#fff" }}
            >
              {/* Radial glow */}
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(255,255,255,0.1), transparent 70%)" }}
              />
              <span
                className="inline-block text-[11px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full w-fit relative z-10"
                style={{ background: "rgba(255,255,255,0.15)" }}
              >
                Integrated Migration Platform
              </span>
              <h3 className="text-[22px] font-bold leading-snug relative z-10">
                Structured consulting paired with on-the-ground real estate execution.
              </h3>
              <p className="text-[15px] text-white/70 leading-relaxed relative z-10">
                By integrating structured consulting with experienced real estate operations in Türkiye, Nexa delivers a more secure, transparent, and professionally managed investment migration experience.
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 h-14 px-7 rounded-full font-semibold text-[15px] text-[#1a1a22] bg-white transition-all hover:-translate-y-0.5 w-fit relative z-10"
                style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}
              >
                Book a strategy call →
              </Link>
            </div>
          </Reveal>

        </div>
      </Row>
    </section>
  );
}
