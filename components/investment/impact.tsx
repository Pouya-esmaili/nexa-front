"use client";

import Reveal from "@/components/global/Reveal";

const ITEMS = [
  {
    pill: "Growth",
    title: "Accelerates Economic Growth",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
  },
  {
    pill: "Jobs",
    title: "Creates Sustainable Employment",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    pill: "Innovation",
    title: "Drives Technological Innovation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    pill: "Wealth",
    title: "Builds Long-Term Wealth & Value",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
];

export default function InvestmentImpact() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#000", padding: "90px 0" }}
    >
      {/* Bottom-right glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: -100, right: -100,
          width: 500, height: 500,
          background: "radial-gradient(circle, rgba(143,39,255,0.28), transparent 65%)",
        }}
      />
      {/* Top-left glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: -60, left: -60,
          width: 300, height: 300,
          background: "radial-gradient(circle, rgba(255,230,0,0.07), transparent 70%)",
        }}
      />

      <div className="px-6 mx-auto w-full relative z-10" style={{ maxWidth: 1240 }}>
        {/* Header */}
        <Reveal>
          <div className="text-center mb-14">
            <h2
              style={{
                fontSize: "clamp(26px, 3vw, 40px)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                color: "white",
              }}
            >
              Why Investment Programs Strengthen Economies
            </h2>
          </div>
        </Reveal>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
          {ITEMS.map((item, i) => (
            <Reveal key={item.pill} delay={i * 80}>
              <ImpactCard {...item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImpactCard({ pill, title, icon }: (typeof ITEMS)[0]) {
  return (
    <div
      className="cursor-pointer"
      style={{
        background: "#0E0E10",
        border: "1px solid #1f1f24",
        borderRadius: 16,
        padding: "28px 24px",
        transition: "border-color .25s, background .25s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "#8F27FF";
        el.style.background = "#120020";

        const iconEl = el.querySelector(".impact-icon") as HTMLElement | null;
        if (iconEl) {
          iconEl.style.background = "#8F27FF";
          iconEl.style.borderColor = "#8F27FF";
          iconEl.style.color = "white";
        }
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "#1f1f24";
        el.style.background = "#0E0E10";

        const iconEl = el.querySelector(".impact-icon") as HTMLElement | null;
        if (iconEl) {
          iconEl.style.background = "rgba(143,39,255,0.12)";
          iconEl.style.borderColor = "rgba(143,39,255,0.2)";
          iconEl.style.color = "#8F27FF";
        }
      }}
    >
      {/* Pill */}
      <div
        className="inline-flex items-center font-bold uppercase mb-3.5"
        style={{
          fontSize: 10,
          letterSpacing: "0.1em",
          padding: "4px 10px",
          background: "rgba(255,230,0,0.08)",
          border: "1px solid rgba(255,230,0,0.2)",
          borderRadius: 999,
          color: "#FFE600",
        }}
      >
        {pill}
      </div>

      {/* Icon — color is currentColor so inherits from parent div color */}
      <div
        className="impact-icon grid place-items-center mb-4 transition-all duration-300"
        style={{
          width: 44,
          height: 44,
          background: "rgba(143,39,255,0.12)",
          border: "1px solid rgba(143,39,255,0.2)",
          borderRadius: 12,
          color: "#8F27FF",
        }}
      >
        {icon}
      </div>

      {/* Title */}
      <h4
        style={{
          fontSize: 14,
          fontWeight: 600,
          color: "white",
          lineHeight: 1.4,
          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </h4>
    </div>
  );
}
