"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const legs = [
  {
    label: "Leg 1",
    labelFa: "محور اول",
    title: "Personal Background & Entrepreneurial Readiness",
    titleFa: "سوابق فردی و آمادگی کارآفرینانه",
    items: [
      { strong: "Formal Education", strongFa: "تحصیلات رسمی", text: "Master's or Doctorate aligned to your sector.", textFa: "مدرک کارشناسی ارشد یا دکترا در حوزه مرتبط با فعالیت." },
      { strong: "Entrepreneurial History", strongFa: "سابقه کارآفرینی", text: "Experience launching or managing corporate structures.", textFa: "تجربه راه‌اندازی یا مدیریت ساختارهای تجاری." },
      { strong: "Market Familiarity", strongFa: "شناخت بازار", text: "Pre-existing business links with European networks.", textFa: "وجود ارتباطات و سابقه فعالیت تجاری در شبکه‌های اروپایی." },
    ],
  },
  {
    label: "Leg 2",
    labelFa: "محور دوم",
    title: "Structural Integrity of the Business Plan",
    titleFa: "استحکام و انسجام طرح کسب‌وکار",
    items: [
      { strong: "Market Analysis", strongFa: "تحلیل بازار", text: "Data proving verifiable demand in the Dutch market.", textFa: "داده‌های معتبر و قابل استناد که تقاضای واقعی در بازار هلند را نشان دهد." },
      { strong: "Financial Projections", strongFa: "پیش‌بینی‌های مالی", text: "1-to-3-year forecasting with revenue, budgets, and tax.", textFa: "پیش‌بینی ۱ تا ۳ ساله درآمد، بودجه و تعهدات مالیاتی." },
      { strong: "Unique Value Proposition", strongFa: "ارزش پیشنهادی متمایز", text: "Clear differentiation — not overcrowding local sectors.", textFa: "ارائه مزیت رقابتی روشن و ورود به بازاری که ظرفیت پذیرش کسب‌وکار را داشته باشد." },
    ],
  },
  {
    label: "Leg 3",
    labelFa: "محور سوم",
    title: "Verifiable Added Value to the Netherlands",
    titleFa: "ارزش‌آفرینی قابل اثبات برای هلند",
    items: [
      { strong: "Innovation", strongFa: "نوآوری", text: "Pioneering tech, clean-energy, or deep-tech applications.", textFa: "استفاده از فناوری‌های نوین، انرژی پاک یا راهکارهای Deep Tech." },
      { strong: "Job Creation", strongFa: "ایجاد اشتغال", text: "Structured plan to employ Dutch or EU citizens.", textFa: "برنامه مشخص برای استخدام نیروی کار هلندی یا اتحادیه اروپا." },
      { strong: "Supply Chain", strongFa: "زنجیره تأمین", text: "Trade vectors or partnerships with Dutch vendors.", textFa: "ایجاد روابط تجاری یا همکاری با تأمین‌کنندگان و شرکای هلندی." },
    ],
  },
];

export default function RVOPoints() {
  const { t } = useLang();
  return (
    <section className="py-20 md:py-24 relative overflow-hidden" style={{ background: "#000000" }}>
      <style>{`
        @keyframes rvoGlow {
          0%,100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>

      {/* Background glow */}
      <div
        className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(143,39,255,0.25), transparent 70%)" }}
      />

      <Row>
        <Reveal variant="up">
          <div className="text-center mb-4">
            <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1] text-white">
              {t("The RVO Points-Based Assessment", "ارزیابی امتیازی RVO")}
            </h2>
          </div>
        </Reveal>

        <Reveal variant="up" delay={80}>
          <p className="text-center text-[15px] leading-[1.65] max-w-[64ch] mx-auto mb-12 relative z-10"
            style={{ color: "rgba(255,255,255,0.6)" }}>
            {t("A", "RVO درخواست‌ها را بر اساس یک")} <strong className="text-white font-semibold">{t("300-point scoring matrix", "سیستم امتیازدهی ۳۰۰ امتیازی")}</strong> {t("administered by the RVO — three legs, each worth 100 points. You need at least", "ارزیابی می‌کند که از سه محور ۱۰۰ امتیازی تشکیل شده است. برای واجد شرایط بودن، کسب حداقل")} <strong className="text-white font-semibold">{t("90 points total", "۹۰ امتیاز")}</strong>{t(", with a hard minimum of", " در مجموع ضروری است؛ با این شرط که در هر سه محور حداقل")}{" "}
            <strong className="text-white font-semibold">{t("30 points in every single leg.", "۳۰ امتیاز کسب شود.")}</strong>
          </p>
        </Reveal>

        {/* Score bar */}
        <Reveal variant="up" delay={120}>
          <div className="grid grid-cols-3 gap-3 mb-4 relative z-10 max-sm:grid-cols-3">
            {/* Total points */}
            <div className="rounded-[20px] p-6 sm:p-7 text-center border transition-colors duration-300 hover:border-[rgba(255,230,0,0.3)]"
              style={{ background: "#0E0E10", border: "1px solid #1f1f24" }}>
              <div className="text-[32px] sm:text-[52px] font-extrabold tracking-[-0.05em] leading-none tabular-nums"
                style={{ color: "rgba(255,255,255,0.35)" }}>{t("300", "۳۰۰")}</div>
              <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] mt-2"
                style={{ color: "rgba(255,255,255,0.35)" }}>{t("Total Points", "حداکثر امتیاز")}</div>
              <div className="text-[12px] mt-1 hidden sm:block"
                style={{ color: "rgba(255,255,255,0.2)" }}>{t("distributed across 3 legs", "در سه محور ارزیابی")}</div>
            </div>

            {/* Minimum — highlighted */}
            <div className="rounded-[20px] p-6 sm:p-7 text-center border"
              style={{ background: "rgba(255,230,0,0.08)", border: "1px solid rgba(255,230,0,0.3)" }}>
              <div className="text-[32px] sm:text-[52px] font-extrabold tracking-[-0.05em] leading-none tabular-nums"
                style={{ color: "#FFE600" }}>{t("90", "۹۰")}</div>
              <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] mt-2"
                style={{ color: "rgba(255,230,0,0.7)" }}>{t("Minimum to Pass", "حداقل امتیاز قبولی")}</div>
              <div className="text-[12px] mt-1 hidden sm:block"
                style={{ color: "rgba(255,230,0,0.45)" }}>{t("30 per leg minimum", "حداقل ۳۰ امتیاز در هر محور")}</div>
            </div>

            {/* Gov fee */}
            <div className="rounded-[20px] p-6 sm:p-7 text-center border transition-colors duration-300 hover:border-[rgba(255,230,0,0.3)]"
              style={{ background: "#0E0E10", border: "1px solid #1f1f24" }}>
              <div className="text-[32px] sm:text-[52px] font-extrabold tracking-[-0.05em] leading-none tabular-nums"
                style={{ color: "rgba(255,255,255,0.35)" }}>{t("€423", "۴۲۳ یورو")}</div>
              <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] mt-2"
                style={{ color: "rgba(255,255,255,0.35)" }}>{t("Government Fee", "هزینه دولتی")}</div>
              <div className="text-[12px] mt-1 hidden sm:block"
                style={{ color: "rgba(255,255,255,0.2)" }}>{t("non-refundable", "غیرقابل استرداد")}</div>
            </div>
          </div>
        </Reveal>

        {/* Legs */}
        <Reveal variant="up" delay={160}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 relative z-10">
            {legs.map((leg) => (
              <div
                key={leg.label}
                className="rounded-[20px] p-6 sm:p-7 flex flex-col gap-0 border transition-all duration-300 group"
                style={{ background: "#0E0E10", border: "1px solid #1f1f24" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "#8F27FF";
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(143,39,255,0.06)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "#1f1f24";
                  (e.currentTarget as HTMLDivElement).style.background = "#0E0E10";
                }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.1em] px-3 py-1.5 rounded-full border"
                    style={{ color: "#8F27FF", background: "rgba(143,39,255,0.12)", border: "1px solid rgba(143,39,255,0.25)" }}>
                    {t(leg.label, leg.labelFa)}
                  </span>
                  <span className="text-[12px] font-bold" style={{ color: "rgba(255,255,255,0.3)" }}>
                    <span className="text-[14px] font-extrabold" style={{ color: "rgba(255,230,0,0.7)" }}>{t("100", "۱۰۰")}</span> {t("pts max", "امتیاز حداکثر")}
                  </span>
                </div>

                <h3 className="text-[16px] font-bold leading-[1.3] mb-5 tracking-[-0.015em] text-white">
                  {t(leg.title, leg.titleFa)}
                </h3>

                <ul className="flex flex-col gap-0 border-t" style={{ borderColor: "#1f1f24" }}>
                  {leg.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-[13px] leading-[1.55] py-3 border-b"
                      style={{ color: "rgba(255,255,255,0.5)", borderColor: "#1a1a1f" }}
                    >
                      <span
                        className="w-[5px] h-[5px] rounded-full flex-shrink-0 mt-[6px]"
                        style={{ background: "#8F27FF" }}
                      />
                      <div>
                        <strong className="block mb-0.5" style={{ color: "rgba(255,255,255,0.85)", fontWeight: 600 }}>
                          {t(item.strong, item.strongFa)}
                        </strong>
                        {t(item.text, item.textFa)}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Warning */}
        <Reveal variant="up" delay={200}>
          <div
            className="mt-4 flex items-start gap-2.5 rounded-lg p-4 relative z-10"
            style={{ background: "rgba(220,38,38,0.08)", border: "1px solid rgba(220,38,38,0.25)" }}
          >
            <svg className="w-4 h-4 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none"
              stroke="#EF4444" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <span className="text-[13px] leading-[1.6]" style={{ color: "#FCA5A5" }}>
              {t("Scoring 100 in Legs 1 and 2 but falling below 30 in Leg 3 means", "کسب ۱۰۰ امتیاز در محورهای اول و دوم، در صورتی که امتیاز محور سوم به کمتر از ۳۰ برسد، مانع تأیید پرونده خواهد شد.")}{" "}
              <strong className="font-semibold text-white">{t("immediate full rejection", "حداقل ۳۰ امتیاز در هر محور")}</strong> {t("— the 30-point floor per leg has no override.", "یک شرط مستقل و الزامی است.")}
            </span>
          </div>
        </Reveal>
      </Row>
    </section>
  );
}
