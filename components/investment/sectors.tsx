"use client";

import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const SECTORS = [
  {
    title: "Healthcare & Medical",
    titleFa: "سلامت و پزشکی",
    desc: "Investing in transformative healthcare solutions, medical devices, and health-tech innovations with global scalability.",
    descFa: "سرمایه‌گذاری در راهکارهای نوآورانه حوزه سلامت، تجهیزات پزشکی و فناوری‌های سلامت با ظرفیت رشد و توسعه در بازارهای جهانی.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="26" height="26">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
  {
    title: "Technology & Innovation",
    titleFa: "فناوری و نوآوری",
    desc: "Funding innovation-driven technology ventures that disrupt markets and create long-term competitive advantages.",
    descFa: "حمایت از کسب‌وکارهای نوآور و فناوری‌محور که با خلق راهکارهای جدید، بازارها را متحول کرده و مزیت رقابتی پایدار ایجاد می‌کنند.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="26" height="26">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
  {
    title: "Real Estate",
    titleFa: "املاک و مستغلات",
    desc: "Strategic investments in commercial, residential, and mixed-use properties across high-growth global markets.",
    descFa: "سرمایه‌گذاری راهبردی در پروژه‌های تجاری، مسکونی و چندمنظوره در بازارهای بین‌المللی با ظرفیت رشد بالا.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="26" height="26">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    title: "Energy & Renewables",
    titleFa: "انرژی‌های تجدیدپذیر",
    desc: "Driving the clean energy transition through investments in solar, wind, and sustainable infrastructure projects.",
    descFa: "سرمایه‌گذاری در پروژه‌های انرژی خورشیدی، بادی و زیرساخت‌های پایدار برای تسریع گذار به انرژی پاک.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="26" height="26">
        <circle cx="12" cy="12" r="5"/>
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
      </svg>
    ),
  },
  {
    title: "Information Technology",
    titleFa: "فناوری اطلاعات",
    desc: "Backing software, SaaS, and digital infrastructure companies with proven models and strong growth trajectories.",
    descFa: "سرمایه‌گذاری در شرکت‌های نرم‌افزاری، SaaS و زیرساخت‌های دیجیتال با مدل کسب‌وکار اثبات‌شده و چشم‌انداز رشد بلندمدت.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="26" height="26">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      </svg>
    ),
  },
  {
    title: "Tourism & Hospitality",
    titleFa: "گردشگری و هتلداری",
    desc: "Capturing growth in travel, hospitality, and experiential sectors across key global destinations.",
    descFa: "سرمایه‌گذاری در پروژه‌های گردشگری، هتلداری و خدمات تجربه‌محور در مقاصد بین‌المللی با ظرفیت رشد بالا.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="26" height="26">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
  },
];

export default function InvestmentSectors() {
  const { t } = useLang();
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
              {t("Where We Invest", "حوزه‌های سرمایه‌گذاری")}
            </h2>
          </div>
        </Reveal>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SECTORS.map((sector, i) => (
            <Reveal key={sector.title} delay={i * 80}>
              <SectorCard {...sector} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectorCard({ title, titleFa, desc, descFa, icon }: (typeof SECTORS)[0]) {
  const { t } = useLang();
  return (
    <div
      className="group flex items-start gap-[18px] relative overflow-hidden cursor-pointer"
      style={{
        background: "white",
        border: "1px solid #E2E2E2",
        borderRadius: 20,
        padding: "32px 28px",
        transition: "transform .3s cubic-bezier(.2,.8,.2,1), box-shadow .3s, border-color .3s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(-4px)";
        el.style.boxShadow = "0 16px 40px rgba(143,39,255,0.1)";
        el.style.borderColor = "rgba(143,39,255,0.2)";
        const icon = el.querySelector<HTMLElement>(".sector-icon");
        if (icon) { icon.style.background = "#8F27FF"; icon.style.borderColor = "#8F27FF"; icon.style.color = "white"; }
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
        el.style.borderColor = "#E2E2E2";
        const icon = el.querySelector<HTMLElement>(".sector-icon");
        if (icon) { icon.style.background = "#FAF6FF"; icon.style.borderColor = "rgba(143,39,255,0.15)"; icon.style.color = "#8F27FF"; }
      }}
    >
      {/* Radial bg on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
        style={{ background: "radial-gradient(circle at 100% 0%, rgba(143,39,255,0.06), transparent 60%)" }}
      />

      {/* Icon */}
      <div
        className="sector-icon flex-shrink-0 grid place-items-center relative z-10 transition-all duration-300"
        style={{
          width: 56, height: 56,
          background: "#FAF6FF",
          border: "1px solid rgba(143,39,255,0.15)",
          borderRadius: 16,
          color: "#8F27FF",
        }}
      >
        {icon}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3
          style={{
            fontSize: 17,
            fontWeight: 700,
            color: "#000",
            letterSpacing: "-0.02em",
            marginBottom: 6,
            lineHeight: 1.3,
          }}
        >
          {t(title, titleFa)}
        </h3>
        <p style={{ fontSize: 13.5, color: "#929292", lineHeight: 1.6 }}>{t(desc, descFa)}</p>
      </div>
    </div>
  );
}
