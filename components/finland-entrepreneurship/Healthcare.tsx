"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const cards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "Universal Healthcare Integration",
    desc: (
      <>
        Once your permit is active and you register your municipality of residence (<em>kotikunta</em>) with the DVV,
        you are legally entitled to{" "}
        <strong className="text-white font-semibold">
          public healthcare on identical terms to Finnish citizens
        </strong>{" "}
        — municipal health centers and hospital districts included.
      </>
    ),
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Family Reunification Rights",
    desc: (
      <>
        Sponsor your <strong className="text-white font-semibold">legal spouse or cohabiting partner</strong> (minimum
        2 years together) and{" "}
        <strong className="text-white font-semibold">dependent children under 18</strong>. Applications submitted
        concurrently via Enter Finland — family moves, lives, studies, and works freely in Finland.
      </>
    ),
  },
];

export default function Healthcare() {
  return (
    <section className="py-20 md:py-24 bg-black relative overflow-hidden">
      <div
        className="absolute -top-24 -right-24 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(143,39,255,0.2), transparent 65%)" }}
      />
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1] text-white text-center mb-14">
            Healthcare, Social Security &amp; Family
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-10">
          {cards.map((c, i) => (
            <Reveal key={i} variant={i === 0 ? "left" : "right"} delay={i * 60}>
              <div
                className="rounded-[20px] p-8 flex flex-col gap-3.5 transition-all duration-200"
                style={{ background: "#0E0E10", border: "1px solid #1f1f24" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "#8F27FF";
                  el.style.background = "rgba(143,39,255,0.08)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "#1f1f24";
                  el.style.background = "#0E0E10";
                }}
              >
                <div
                  className="w-12 h-12 rounded-[12px] flex items-center justify-center"
                  style={{ background: "rgba(143,39,255,0.15)", color: "#8F27FF" }}
                >
                  <div className="w-6 h-6">{c.icon}</div>
                </div>
                <h3 className="text-[17px] font-bold text-white tracking-[-0.015em]">{c.title}</h3>
                <p className="text-[13.5px] leading-[1.65] m-0" style={{ color: "#B5B5BA" }}>
                  {c.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Row>
    </section>
  );
}
