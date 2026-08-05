"use client";

import Link from "next/link";
import Row from "@/components/global/Row";
import { useEffect, useState } from "react";
import { useLang } from "@/components/global/LanguageProvider";

const stats = [
  { num: "3 yr", numFa: "۳ سال", label: "Path to ILR", labelFa: "مسیر اقامت دائم" },
  { num: "£1,270", numFa: "۱٬۲۷۰£", label: "Maintenance Floor", labelFa: "کف تأمین مالی" },
  { num: "3 wk", numFa: "۳ هفته", label: "Decision Time", labelFa: "زمان تصمیم" },
];

export default function Hero() {
  const { t } = useLang();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const base = "transition-all ease-out";
  const show      = "opacity-100 translate-y-0 translate-x-0";
  const hideUp    = "opacity-0 translate-y-6";
  const hideLeft  = "opacity-0 -translate-x-8";
  const hideRight = "opacity-0 translate-x-8";

  return (
    <section className="py-14 md:py-20 overflow-hidden bg-white relative">
      <div
        className="absolute top-[-200px] right-[-150px] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(143,39,255,0.05), transparent 70%)" }}
      />

      {/* MOBILE */}
      <div className="md:hidden px-5 relative z-10">
        <div
          className={`h-56 rounded-[32px_80px_32px_32px] mb-6 overflow-hidden ${base} duration-700 delay-75 ${mounted ? show : hideUp}`}
          style={{ background: "#0f1520 url('/images/photos/1513635269975-59663e0ac1ad-w900.webp') center/cover" }}
        />
        <h1 className={`text-3xl font-bold leading-tight tracking-tight mb-4 ${base} duration-600 delay-150 ${mounted ? show : hideUp}`}>
          {t("Build global scale from inside the", "در مقیاس جهانی رشد کنید، از دلِ")} <span className="text-[#8F27FF]">{t("United Kingdom.", "انگلستان.")}</span>
        </h1>
        <p className={`text-sm text-gray-600 leading-relaxed mb-6 ${base} duration-600 delay-200 ${mounted ? show : hideUp}`}>
          {t("The UK Innovator Founder Visa replaces the old Start-up Visa — no £50,000 capital floor, accelerated settlement after just 3 years, and full family unity from day one.", "ویزای بنیان‌گذار نوآور انگلستان جایگزین ویزای استارتاپ قدیمی شده است — بدون کف سرمایه‌ی ۵۰٬۰۰۰ پوندی، اقامت دائم سریع پس از تنها ۳ سال، و همراهی کامل خانواده از روز نخست.")}
        </p>
        <div className={`grid grid-cols-3 gap-4 py-6 border-t border-b border-gray-200 mb-6 ${base} duration-600 delay-300 ${mounted ? show : hideUp}`}>
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-xl font-extrabold tracking-tight">{t(s.num, s.numFa)}</div>
              <div className="text-[11px] text-gray-500 font-medium mt-1 uppercase tracking-wide">{t(s.label, s.labelFa)}</div>
            </div>
          ))}
        </div>
        <Link
          href="#contact"
          className={`inline-flex items-center gap-2 px-6 py-3 bg-[#8F27FF] text-white font-semibold rounded-full text-sm ${base} duration-500 delay-[400ms] ${mounted ? show : hideUp}`}
        >
          {t("Book an Appointment →", "رزرو وقت ملاقات →")}
        </Link>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:block relative z-10">
        <Row>
          <div className="grid grid-cols-[1.1fr_0.9fr] gap-16 items-center">
            <div>

              <h1 className={`text-[48px] font-bold leading-[1.06] tracking-[-0.03em] mb-6 ${base} duration-700 delay-100 ${mounted ? show : hideLeft}`}>
                {t("Build global scale from inside the", "در مقیاس جهانی رشد کنید، از دلِ")}{" "}
                <span className="text-[#8F27FF]">{t("United Kingdom.", "انگلستان.")}</span>
              </h1>
              <p className={`text-[16px] text-[#474747] leading-[1.65] mb-8 max-w-[520px] ${base} duration-700 delay-200 ${mounted ? show : hideLeft}`}>
                {t("The UK Innovator Founder Visa replaces the old Start-up Visa with a single, premium route — no £50,000 capital floor, accelerated settlement after just 3 years, and full family unity from day one.", "ویزای بنیان‌گذار نوآور انگلستان با یک مسیر یکپارچه و ممتاز جایگزین ویزای استارتاپ قدیمی شده است — بدون کف سرمایه‌ی ۵۰٬۰۰۰ پوندی، اقامت دائم سریع پس از تنها ۳ سال، و همراهی کامل خانواده از روز نخست.")}
              </p>
              <div className={`grid grid-cols-3 py-6 border-t border-b border-gray-200 mb-9 ${base} duration-700 delay-300 ${mounted ? show : hideLeft}`}>
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-[26px] font-bold tracking-[-0.03em] leading-none">{t(s.num, s.numFa)}</div>
                    <div className="text-[11px] text-gray-500 font-medium mt-2 uppercase tracking-widest">{t(s.label, s.labelFa)}</div>
                  </div>
                ))}
              </div>
              <Link
                href="#contact"
                className={`inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#8F27FF] text-white font-semibold rounded-full text-[14px] transition-all hover:-translate-y-0.5 ${base} duration-500 delay-[400ms] ${mounted ? show : hideLeft}`}
                style={{ boxShadow: "0 12px 28px rgba(143,39,255,0.28)" }}
              >
                {t("Book an Appointment →", "رزرو وقت ملاقات →")}
              </Link>
            </div>

            <div className={`relative h-[520px] ${base} duration-800 delay-200 ${mounted ? show : hideRight}`}>
              <div
                className="absolute inset-0"
                style={{
                  borderRadius: "32px 120px 32px 32px",
                  background: "#0f1520 url('/images/photos/1513635269975-59663e0ac1ad-w900.webp') center/cover",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
                }}
              />

            </div>
          </div>
        </Row>
      </div>

      <style>{`
        @keyframes floatBadge { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes pulseGreen { 0%,100%{box-shadow:0 0 0 4px rgba(16,185,129,0.2)} 50%{box-shadow:0 0 0 7px rgba(16,185,129,0.1)} }
      `}</style>
    </section>
  );
}
