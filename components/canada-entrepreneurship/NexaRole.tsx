"use client";

import Link from "next/link";
import Row from "@/components/global/Row";
import { useLang } from "@/components/global/LanguageProvider";

const services = [
  {
    title: "Strategic Business Modeling",
    titleFa: "طراحی استراتژیک کسب‌وکار",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path d="M3 3h18v18H3z" /><path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
      </svg>
    ),
  },
  {
    title: "Financial Architecture",
    titleFa: "طراحی و ساختاردهی مالی",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "Market Entry Strategy",
    titleFa: "استراتژی ورود به بازار",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: "Provincial Alignment",
    titleFa: "انطباق با اولویت‌های استانی",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "Investor Readiness",
    titleFa: "آماده‌سازی برای جذب سرمایه",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    title: "Long-term Scaling",
    titleFa: "برنامه‌ریزی برای رشد و مقیاس‌پذیری",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      </svg>
    ),
  },
  {
    title: "Landing Services",
    titleFa: "خدمات استقرار و راه‌اندازی",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Immigration Services",
    titleFa: "خدمات مهاجرتی",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
];

export default function NexaRole() {
  const { t } = useLang();
  return (
    <section className="py-16 md:py-24 bg-white">

      {/* ========== MOBILE ========== */}
      <div className="md:hidden px-5">
        <h2 className="text-3xl font-bold tracking-tight mb-3">{t("Nexa's Role", "نقش نکسا")}</h2>
        <p className="text-sm text-gray-500 leading-relaxed mb-6">
          {t("We work alongside high-potential entrepreneurs to architect ventures structurally aligned with Canada's provincial economic priorities — from strategic modeling to long-term scaling roadmaps.", "ما در کنار کارآفرینان توانمند، کسب‌وکارهایی را طراحی و توسعه می‌دهیم که از ابتدا با ساختار اقتصادی و اولویت‌های استانی کانادا هم‌راستا باشند؛ از مدل‌سازی استراتژیک و طراحی ساختار مالی تا ورود به بازار و ترسیم مسیر رشد بلندمدت.")}
        </p>
        <div className="grid grid-cols-2 gap-2.5 mb-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="flex items-center gap-3 p-3.5 bg-[#F7F6F9] rounded-xl border border-gray-200"
            >
              <div className="w-8 h-8 flex-shrink-0 rounded-lg flex items-center justify-center text-[#8F27FF] bg-white border border-gray-100">
                {s.icon}
              </div>
              <span className="text-xs font-semibold text-black leading-tight">{t(s.title, s.titleFa)}</span>
            </div>
          ))}
        </div>
        <Link href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#8F27FF] text-white font-semibold rounded-full text-sm">
          {t("Start with a Strategy Call →", "شروع با یک جلسه مشاوره ←")}
        </Link>
      </div>

      {/* ========== DESKTOP ========== */}
      <div className="hidden md:block">
        <Row>
          <div className="grid gap-12" style={{ gridTemplateColumns: "0.85fr 1.15fr" }}>

            {/* Intro */}
            <div className="sticky top-20">
              <h2 className="text-[40px] font-bold tracking-tight mb-4">{t("Nexa's Role", "نقش نکسا")}</h2>
              <p className="text-[15px] text-gray-500 leading-[1.65] mb-8">
                {t("We work alongside high-potential entrepreneurs to architect ventures structurally aligned with Canada's provincial economic priorities — from strategic modeling to long-term scaling roadmaps.", "ما در کنار کارآفرینان توانمند، کسب‌وکارهایی را طراحی و توسعه می‌دهیم که از ابتدا با ساختار اقتصادی و اولویت‌های استانی کانادا هم‌راستا باشند؛ از مدل‌سازی استراتژیک و طراحی ساختار مالی تا ورود به بازار و ترسیم مسیر رشد بلندمدت.")}
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#8F27FF] text-white font-semibold rounded-full text-[15px] transition-all hover:-translate-y-0.5"
                style={{ boxShadow: "0 12px 28px rgba(143,39,255,0.28)" }}
              >
                {t("Start with a Strategy Call →", "شروع با یک جلسه مشاوره ←")}
              </Link>
            </div>

            {/* Services grid */}
            <div className="grid grid-cols-2 gap-2.5">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="flex items-center gap-3.5 p-[18px_20px] bg-white border border-gray-200 rounded-lg transition-all hover:border-[#8F27FF] hover:bg-[#FAF6FF] hover:translate-x-0.5 group"
                >
                  <div className="w-[38px] h-[38px] flex-shrink-0 rounded-[9px] flex items-center justify-center text-[#8F27FF] bg-[#F7F6F9] border border-gray-100 group-hover:bg-[#8F27FF] group-hover:text-white group-hover:border-[#8F27FF] transition-all">
                    {s.icon}
                  </div>
                  <h4 className="text-[14px] font-semibold text-black">{t(s.title, s.titleFa)}</h4>
                </div>
              ))}
            </div>

          </div>
        </Row>
      </div>

    </section>
  );
}
