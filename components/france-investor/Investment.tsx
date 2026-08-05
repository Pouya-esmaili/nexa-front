"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const forms = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z"/>
      </svg>
    ),
    title: "Direct Equity Investment",
    titleFa: "سرمایه‌گذاری مستقیم سهام",
    desc: <>Acquiring a personal stake of at least <strong className="text-white font-semibold">10%</strong> in a French enterprise with a real business presence.</>,
    descFa: <>کسب سهم شخصی حداقل <strong className="text-white font-semibold">۱۰٪</strong> در یک بنگاه فرانسوی با حضور تجاری واقعی.</>,
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 2l4 4-4 4M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 22l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3"/>
      </svg>
    ),
    title: "Reinvested Earnings",
    titleFa: "درآمد سرمایه‌گذاری‌مجدد",
    desc: <>Deploying <strong className="text-white font-semibold">undistributed operating income</strong> from an existing French subsidiary into local development.</>,
    descFa: <>به‌کارگیری <strong className="text-white font-semibold">درآمد عملیاتی توزیع‌نشده</strong> از یک شرکت تابعه‌ی فرانسوی موجود در توسعه‌ی محلی.</>,
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="6" width="18" height="12" rx="1.5"/><path d="M3 10h18M7 14h3"/>
      </svg>
    ),
    title: "Inter-Affiliate Group Loans",
    titleFa: "وام‌های گروهی بین‌شرکتی",
    desc: <>Direct loans between a <strong className="text-white font-semibold">foreign parent company</strong> and a French entity in which you hold a lasting interest.</>,
    descFa: <>وام‌های مستقیم بین یک <strong className="text-white font-semibold">شرکت مادر خارجی</strong> و یک نهاد فرانسوی که شما در آن منافع پایدار دارید.</>,
  },
];

export default function Investment() {
  const { t, lang } = useLang();
  return (
    <section className="py-20 md:py-24 bg-black relative overflow-hidden">
      <div
        className="absolute -bottom-[100px] -right-[100px] w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(143,39,255,0.3), transparent 65%)" }}
      />
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1] text-white text-center mb-14">
            {t("Investment Thresholds & Capital Forms", "آستانه‌های سرمایه‌گذاری و اشکال سرمایه")}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-5 relative z-10">
          <Reveal variant="left" delay={60}>
            <div
              className="rounded-[20px] p-10 flex flex-col gap-5 h-full"
              style={{ background: "#0E0E10", border: "1px solid #1f1f24" }}
            >
              <div
                className="self-start text-[11px] font-bold uppercase tracking-[0.12em] px-3.5 py-1.5 rounded-full"
                style={{ background: "rgba(255,230,0,0.12)", border: "1px solid rgba(255,230,0,0.3)", color: "#FFE600" }}
              >
                {t("Minimum Capital Deployment", "حداقل به‌کارگیری سرمایه")}
              </div>
              <div
                className="font-extrabold text-white leading-[0.9] tabular-nums"
                style={{ fontSize: "72px", letterSpacing: "-0.05em" }}
              >
                {t("€300K", "۳۰۰ هزار یورو")}
              </div>
              <p className="text-[14px] leading-[1.65] m-0" style={{ color: "#B5B5BA" }}>
                {t("In tangible or intangible", "در")} <strong style={{ color: "#FFE600", fontWeight: 600 }}>{t("fixed assets", "دارایی‌های ثابت")}</strong> {t("— plus a commitment to create or maintain permanent jobs within", "مشهود یا نامشهود — به‌علاوه‌ی تعهد به ایجاد یا حفظ مشاغل دائمی ظرف")} <strong style={{ color: "#FFE600", fontWeight: 600 }}>{t("4 years", "۴ سال")}</strong>{t(".", ".")}
              </p>
              <div
                className="flex flex-wrap gap-2 mt-auto pt-[18px]"
                style={{ borderTop: "1px solid #1f1f24" }}
              >
                {[
                  { en: "Direct equity ≥10%", fa: "سهام مستقیم ≥۱۰٪" },
                  { en: "Reinvested earnings", fa: "درآمد سرمایه‌گذاری‌مجدد" },
                  { en: "Inter-affiliate loans", fa: "وام‌های بین‌شرکتی" },
                  { en: "Job creation required", fa: "ایجاد اشتغال الزامی" },
                ].map((chip, i) => (
                  <span
                    key={i}
                    className="text-[12px] px-3 py-1.5 rounded-full font-medium text-white"
                    style={{ border: "1px solid #2a2a30" }}
                  >
                    {t(chip.en, chip.fa)}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-3">
            {forms.map((f, i) => (
              <Reveal key={i} variant="right" delay={60 + i * 60}>
                <div
                  className="rounded-[14px] p-[22px_24px] flex gap-4 items-start transition-all duration-200"
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
                    className="w-[38px] h-[38px] rounded-[10px] flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(143,39,255,0.15)", color: "#8F27FF" }}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-[14px] font-semibold text-white mb-1">{t(f.title, f.titleFa)}</h4>
                    <p className="text-[13px] leading-[1.6] m-0" style={{ color: "#B5B5BA" }}>{lang === "fa" ? f.descFa : f.desc}</p>
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
