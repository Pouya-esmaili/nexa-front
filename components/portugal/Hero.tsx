"use client";

import { useState, useEffect } from "react";
import Row from "@/components/global/Row";
import { useLang } from "@/components/global/LanguageProvider";

export default function Hero() {
  const { t } = useLang();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setMounted(true), 80); return () => clearTimeout(t); }, []);

  const base = "transition-all duration-700";
  const hidden = "opacity-0 translate-y-8";
  const show = "opacity-100 translate-y-0";

  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      <style>{`
        @keyframes floatBadge { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes pulseGreen { 0%,100%{box-shadow:0 0 0 0 rgba(16,185,129,0.4)} 50%{box-shadow:0 0 0 6px rgba(16,185,129,0)} }
        .float-badge { animation: floatBadge 4s ease-in-out infinite; }
        .pulse-green { animation: pulseGreen 2s ease-in-out infinite; }
      `}</style>

      <div className="pointer-events-none absolute -top-52 -right-40 w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(143,39,255,0.05), transparent 70%)" }} />

      <Row>
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-16 items-center">

          {/* Left */}
          <div className="order-2 md:order-1">

            <h1 className={`${base} ${mounted ? show : hidden} text-[38px] md:text-[48px] font-bold leading-[1.06] tracking-[-0.03em] mb-5`}
              style={{ transitionDelay: "80ms" }}>
              {t("Expand to Europe with", "هر کسب‌وکاری، یک فرصت")}{" "}
              <span className="text-[#8F27FF]">{t("any business model.", "برای ورود به اروپا")}</span>
            </h1>

            <p className={`${base} ${mounted ? show : hidden} text-[16px] text-[#474747] leading-[1.65] mb-8 max-w-[520px]`}
              style={{ transitionDelay: "160ms" }}>
              {t("The Portugal D2 Entrepreneur Visa is the EU's most flexible founder pathway — open to any viable commercial enterprise, from tech startups to consulting firms, import-export operations, and service businesses.", "ویزای کارآفرینی D2 پرتغال یکی از منعطف‌ترین مسیرهای اقامت برای کارآفرینان در اروپاست و طیف گسترده‌ای از کسب‌وکارهای قابل‌اجرا را پوشش می‌دهد؛ از استارتاپ‌های فناوری و شرکت‌های مشاوره‌ای گرفته تا فعالیت‌های واردات و صادرات و کسب‌وکارهای خدماتی.")}
            </p>

            {/* Stats */}
            <div className={`${base} ${mounted ? show : hidden} grid grid-cols-3 py-6 mb-8`}
              style={{ borderTop: "1px solid #E2E2E2", borderBottom: "1px solid #E2E2E2", transitionDelay: "240ms" }}>
              {[
                { num: "2 yr", numFa: "۲ سال", label: "Initial Card", labelFa: "کارت اقامت اولیه" },
                { num: "~€10K", numFa: "حدود ۱۰ هزار یورو", label: "Personal Threshold", labelFa: "حداقل منابع مالی شخصی" },
                { num: "5 yr", numFa: "۵ سال", label: "Path to Citizenship", labelFa: "مسیر تا تابعیت" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-[26px] font-bold tracking-[-0.03em] leading-none">{t(s.num, s.numFa)}</div>
                  <div className="text-[11px] text-[#929292] mt-1.5 font-medium uppercase tracking-[0.06em]">{t(s.label, s.labelFa)}</div>
                </div>
              ))}
            </div>

            <div className={`${base} ${mounted ? show : hidden}`} style={{ transitionDelay: "320ms" }}>
              <a href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#8F27FF] text-white font-semibold rounded-full text-[14px] transition-all hover:-translate-y-0.5"
                style={{ boxShadow: "0 10px 24px rgba(143,39,255,0.28)" }}>
                {t("Book an Appointment →", "رزرو وقت مشاوره ←")}
              </a>
            </div>
          </div>

          {/* Right visual */}
          <div className={`${base} ${mounted ? show : hidden} order-1 md:order-2 relative h-[240px] md:h-[520px]`} style={{ transitionDelay: "100ms" }}>
            {/* Main image — Lisbon */}
            <div className="absolute inset-0 overflow-hidden"
              style={{
                borderRadius: "32px 120px 32px 32px",
                background: "#0d1a1f url('/images/photos/1555881400-74d7acaacd8b-w900.webp') center/cover",
                boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
              }}>
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.12))" }} />
            </div>
          </div>
        </div>
      </Row>
    </section>
  );
}
