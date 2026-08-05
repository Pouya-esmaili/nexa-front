"use client";

import { useEffect, useState } from "react";
import Row from "@/components/global/Row";
import { useLang } from "@/components/global/LanguageProvider";

const stats = [
  { num: "2 yr", numFa: "۲ سال", label: "Initial Permit", labelFa: "مجوز اولیه" },
  { num: "€1,030+", numFa: "۱٬۰۳۰+ یورو", label: "Monthly Income Min", labelFa: "حداقل درآمد ماهانه" },
  { num: "4 yr", numFa: "۴ سال", label: "Path to PR", labelFa: "مسیر اقامت دائم" },
];

export default function Hero() {
  const { t } = useLang();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const base = "transition-all ease-out";
  const show = "opacity-100 translate-y-0 translate-x-0";
  const hideUp = "opacity-0 translate-y-6";
  const hideLeft = "opacity-0 -translate-x-8";
  const hideRight = "opacity-0 translate-x-8";

  return (
    <section className="py-14 md:py-20 overflow-hidden bg-white relative">
      <div
        className="absolute -top-52 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(143,39,255,0.05), transparent 70%)" }}
      />

      {/* MOBILE */}
      <div className="md:hidden px-5 relative z-10">
        <div
          className={`h-[240px] rounded-[32px_80px_32px_32px] mb-6 overflow-hidden ${base} duration-700 delay-75 ${mounted ? show : hideUp}`}
          style={{
            background:
              "#0d1a1f url('/images/Entrepreneurship/Entrepreneurship finland.jpg') center/cover",
          }}
        />
        <h1
          className={`text-3xl font-bold leading-tight tracking-tight mb-4 ${base} duration-700 delay-150 ${mounted ? show : hideUp}`}
        >
          {t("Run your business from inside the", "کسب‌وکار خود را از داخل")}{" "}
          <span className="text-[#8F27FF]">{t("Nordic EU gateway.", "دروازه‌ی نوردیک اتحادیه اروپا اداره کنید.")}</span>
        </h1>
        <p
          className={`text-sm text-[#474747] leading-relaxed mb-6 ${base} duration-700 delay-200 ${mounted ? show : hideUp}`}
        >
          {t("Finland's Residence Permit for Entrepreneurs is the Nordics' most structured self-employment pathway — evaluated on commercial viability, not innovation mandates. Open to consultants, traders, freelancers, and operational shareholders.", "مجوز اقامت کارآفرینان فنلاند ساختارمندترین مسیر خوداشتغالی نوردیک است — که بر اساس امکان‌پذیری تجاری ارزیابی می‌شود، نه الزامات نوآوری. باز برای مشاوران، بازرگانان، فریلنسرها و سهام‌داران عملیاتی.")}
        </p>
        <div
          className={`grid grid-cols-3 py-5 border-t border-b border-[#E2E2E2] mb-6 ${base} duration-700 delay-300 ${mounted ? show : hideUp}`}
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-xl font-extrabold tracking-tight">{t(s.num, s.numFa)}</div>
              <div className="text-[10px] text-[#929292] font-medium mt-1 uppercase tracking-wide">
                {t(s.label, s.labelFa)}
              </div>
            </div>
          ))}
        </div>
        <a
          href="#contact"
          className={`inline-flex items-center gap-2 px-6 py-3 bg-[#8F27FF] text-white font-semibold rounded-full text-sm ${base} duration-500 delay-[400ms] ${mounted ? show : hideUp}`}
          style={{ boxShadow: "0 12px 28px rgba(143,39,255,0.28)" }}
        >
          {t("Book an Appointment →", "رزرو وقت ملاقات →")}
        </a>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:block relative z-10">
        <Row>
          <div className="grid grid-cols-[1.1fr_0.9fr] gap-16 items-center">
            <div>
              <h1
                className={`text-[48px] font-bold leading-[1.06] tracking-[-0.03em] mb-6 ${base} duration-700 delay-100 ${mounted ? show : hideLeft}`}
              >
                {t("Run your business from inside the", "کسب‌وکار خود را از داخل")}{" "}
                <em className="text-[#8F27FF] not-italic">{t("Nordic EU gateway.", "دروازه‌ی نوردیک اتحادیه اروپا اداره کنید.")}</em>
              </h1>
              <p
                className={`text-[16px] text-[#474747] leading-[1.65] mb-8 max-w-[520px] ${base} duration-700 delay-200 ${mounted ? show : hideLeft}`}
              >
                {t("Finland's Residence Permit for Entrepreneurs is the Nordics' most structured self-employment pathway — evaluated on commercial viability, not innovation mandates. Open to consultants, traders, freelancers, and operational shareholders.", "مجوز اقامت کارآفرینان فنلاند ساختارمندترین مسیر خوداشتغالی نوردیک است — که بر اساس امکان‌پذیری تجاری ارزیابی می‌شود، نه الزامات نوآوری. باز برای مشاوران، بازرگانان، فریلنسرها و سهام‌داران عملیاتی.")}
              </p>

              <div
                className={`grid grid-cols-3 py-6 mb-9 ${base} duration-700 delay-300 ${mounted ? show : hideLeft}`}
                style={{ borderTop: "1px solid #E2E2E2", borderBottom: "1px solid #E2E2E2" }}
              >
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-[26px] font-bold tracking-[-0.03em] leading-none">{t(s.num, s.numFa)}</div>
                    <div className="text-[11px] text-[#929292] font-medium mt-2 uppercase tracking-[0.06em]">
                      {t(s.label, s.labelFa)}
                    </div>
                  </div>
                ))}
              </div>

              <div className={`${base} duration-500 delay-[400ms] ${mounted ? show : hideLeft}`}>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#8F27FF] text-white font-semibold rounded-full text-[14px] transition-all hover:-translate-y-0.5"
                  style={{ boxShadow: "0 12px 28px rgba(143,39,255,0.28)" }}
                >
                  {t("Book an Appointment →", "رزرو وقت ملاقات →")}
                </a>
              </div>
            </div>

            <div
              className={`relative h-[520px] ${base} duration-700 delay-200 ${mounted ? show : hideRight}`}
            >
              <div
                className="absolute inset-0 overflow-hidden"
                style={{
                  borderRadius: "32px 120px 32px 32px",
                  background:
                    "#0d1a1f url('/images/Entrepreneurship/Entrepreneurship finland.jpg') center/cover",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.12))" }}
                />
              </div>
            </div>
          </div>
        </Row>
      </div>
    </section>
  );
}
