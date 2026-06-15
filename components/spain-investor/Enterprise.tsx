"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const criteria = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      </svg>
    ),
    title: "Job Creation",
    desc: "A clear, structured plan for generating direct, sustainable employment positions inside Spain.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
      </svg>
    ),
    title: "Socioeconomic Impact",
    desc: "A demonstrable positive contribution to the geographical area where the venture will operate.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" />
      </svg>
    ),
    title: "Innovation Alignment",
    desc: "Strong alignment with scientific, technological, or industrial innovation that advances Spain's economic interests.",
  },
];

export default function Enterprise() {
  return (
    <section className="py-20 md:py-24 bg-black relative overflow-hidden">
      <div
        className="absolute -top-20 -left-20 w-[360px] h-[360px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(143,39,255,0.25), transparent 70%)" }}
      />
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1] text-white text-center mb-14">
            The Enterprise Pathway
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          {/* Intro card */}
          <Reveal variant="left" delay={60}>
            <div
              className="rounded-[20px] p-10 flex flex-col gap-5 h-full"
              style={{ background: "#0E0E10", border: "1px solid #1f1f24" }}
            >
              <div
                className="self-start text-[11px] font-bold uppercase tracking-[0.12em] px-3.5 py-1.5 rounded-full"
                style={{ background: "rgba(143,39,255,0.15)", border: "1px solid rgba(143,39,255,0.3)", color: "#8F27FF" }}
              >
                No Statutory Capital Floor
              </div>
              <p className="text-[15px] leading-[1.7] m-0" style={{ color: "#B5B5BA" }}>
                For founders expanding their corporate footprint, Spain allows residency via a{" "}
                <strong className="text-white font-semibold">significant business project</strong>. There is no fixed
                minimum investment threshold. Instead, the project is evaluated by the relevant{" "}
                <strong className="text-white font-semibold">Economic and Commercial Office</strong> of the consular
                district on qualitative economic metrics.
              </p>
              <p className="text-[15px] leading-[1.7] m-0" style={{ color: "#B5B5BA" }}>
                Unlike the Entrepreneur Visa (which requires an ENISA certificate), the Enterprise Pathway is assessed
                directly by the consular authority — making it a distinct, separate route for high-impact corporate
                expansions.
              </p>
            </div>
          </Reveal>

          {/* Criteria */}
          <div className="flex flex-col gap-3">
            {criteria.map((c, i) => (
              <Reveal key={i} variant="right" delay={60 + i * 60} className="flex-1 flex">
                <div
                  className="flex-1 rounded-[14px] p-[28px_24px] flex gap-4 items-center transition-all duration-200"
                  style={{ background: "#0E0E10", border: "1px solid #1f1f24" }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = "#8F27FF";
                    el.style.background = "#150026";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = "#1f1f24";
                    el.style.background = "#0E0E10";
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-[10px] flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(143,39,255,0.15)", color: "#8F27FF" }}
                  >
                    <div className="w-5 h-5">{c.icon}</div>
                  </div>
                  <div>
                    <h4 className="text-[15px] font-semibold text-white mb-1">{c.title}</h4>
                    <p className="text-[13px] leading-[1.6] m-0" style={{ color: "#B5B5BA" }}>{c.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Row>
    </section>
  );
}
