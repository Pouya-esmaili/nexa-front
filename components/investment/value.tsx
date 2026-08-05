"use client";

import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const SERVICES = [
  { badge: "Advisory", badgeFa: "مشاوره", title: "Strategic Advisory & Expert Guidance", titleFa: "راهبرد سرمایه‌گذاری و مشاوره تخصصی", name: "Strategic Advisory", nameFa: "مشاوره راهبردی" },
  { badge: "Access",   badgeFa: "دسترسی به بازار", title: "Market Access & Business Opportunities", titleFa: "دسترسی به بازارهای بین‌المللی و فرصت‌های سرمایه‌گذاری", name: "Market Access", nameFa: "دسترسی به بازار" },
  { badge: "Growth",   badgeFa: "رشد و توسعه", title: "Scaling & International Expansion Strategies", titleFa: "استراتژی‌های رشد و توسعه بین‌المللی", name: "Expansion", nameFa: "توسعه بین‌المللی" },
  { badge: "Risk",     badgeFa: "ریسک", title: "Governance & Risk Management Solutions", titleFa: "استراتژی‌های حاکمیت و مدیریت ریسک", name: "Risk Management", nameFa: "مدیریت ریسک" },
];

export default function InvestmentServices() {
  const { t } = useLang();
  return (
    <section style={{ padding: "90px 0", background: "#fff" }}>
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
              {t("Our Services", "خدمات تخصصی ما")}
            </h2>
          </div>
        </Reveal>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[22px]">
          {SERVICES.map((svc, i) => (
            <Reveal key={svc.name} delay={i * 80}>
              <ServiceCard {...svc} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ badge, badgeFa, title, titleFa, name, nameFa }: (typeof SERVICES)[0]) {
  const { t } = useLang();
  return (
    <div
      className="group flex flex-col relative overflow-hidden cursor-pointer"
      style={{
        border: "1px solid #E2E2E2",
        borderRadius: 28,
        padding: "36px 30px 28px",
        background: "white",
        minHeight: 240,
        transition: "transform .5s cubic-bezier(.2,.8,.2,1), box-shadow .5s, border-color .3s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(-10px)";
        el.style.boxShadow = "0 30px 60px -20px rgba(143,39,255,0.25), 0 12px 24px -12px rgba(0,0,0,0.08)";
        el.style.borderColor = "rgba(143,39,255,0.25)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
        el.style.borderColor = "#E2E2E2";
      }}
    >
      {/* Hover radial glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
        style={{
          borderRadius: "inherit",
          background: "radial-gradient(120% 80% at 100% 0%, rgba(143,39,255,0.07) 0%, transparent 55%)",
        }}
      />

      {/* Badge */}
      <span
        className="inline-flex items-center gap-2 relative z-10"
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#8F27FF",
          marginBottom: 18,
        }}
      >
        <span style={{ width: 24, height: 1.5, background: "#8F27FF", borderRadius: 1, display: "block" }} />
        {t(badge, badgeFa)}
      </span>

      {/* Title */}
      <h3
        className="relative z-10 flex-1"
        style={{
          fontSize: 16,
          fontWeight: 700,
          letterSpacing: "-0.02em",
          color: "#000",
          lineHeight: 1.3,
        }}
      >
        {t(title, titleFa)}
      </h3>

      {/* Footer — name only, no arrow icon */}
      <div
        className="mt-auto relative z-10 border-t border-[#E2E2E2] group-hover:border-[rgba(143,39,255,0.25)] transition-colors duration-300"
        style={{ paddingTop: 20 }}
      >
        <span
          className="text-[#474747] group-hover:text-[#8F27FF] transition-colors duration-300"
          style={{ fontSize: 14, fontWeight: 600, letterSpacing: "-0.01em" }}
        >
          {t(name, nameFa)}
        </span>
      </div>
    </div>
  );
}
