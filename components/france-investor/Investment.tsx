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
    titleFa: "سرمایه‌گذاری مستقیم در سهام",
    desc: <>Acquiring a personal stake of at least <strong className="text-white font-semibold">10%</strong> in a French enterprise with a real business presence.</>,
    descFa: <>خرید حداقل <strong className="text-white font-semibold">۱۰٪</strong> از سهام یک شرکت فرانسوی که فعالیت اقتصادی واقعی و حضور عملیاتی در فرانسه داشته باشد.</>,
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 2l4 4-4 4M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 22l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3"/>
      </svg>
    ),
    title: "Reinvested Earnings",
    titleFa: "سرمایه‌گذاری مجدد سود",
    desc: <>Deploying <strong className="text-white font-semibold">undistributed operating income</strong> from an existing French subsidiary into local development.</>,
    descFa: <>اختصاص <strong className="text-white font-semibold">سود عملیاتی توزیع‌نشده</strong> یک شرکت تابعه موجود در فرانسه به توسعه و گسترش فعالیت‌های آن در این کشور.</>,
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="6" width="18" height="12" rx="1.5"/><path d="M3 10h18M7 14h3"/>
      </svg>
    ),
    title: "Inter-Affiliate Group Loans",
    titleFa: "تأمین مالی درون‌گروهی",
    desc: <>Direct loans between a <strong className="text-white font-semibold">foreign parent company</strong> and a French entity in which you hold a lasting interest.</>,
    descFa: <>اعطای وام مستقیم میان <strong className="text-white font-semibold">شرکت مادر خارجی</strong> و یک شرکت فرانسوی که سرمایه‌گذار در آن دارای منافع و مالکیت پایدار است.</>,
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
            {t("Investment Thresholds & Capital Forms", "حداقل سرمایه و روش‌های سرمایه‌گذاری")}
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
                {t("Minimum Capital Deployment", "حداقل سرمایه‌گذاری")}
              </div>
              <div
                className="font-extrabold text-white leading-[0.9] tabular-nums"
                style={{ fontSize: "72px", letterSpacing: "-0.05em" }}
              >
                {t("€300K", "۳۰۰ هزار یورو")}
              </div>
              <p className="text-[14px] leading-[1.65] m-0" style={{ color: "#B5B5BA" }}>
                {t("In tangible or intangible", "این مبلغ باید در")} <strong style={{ color: "#FFE600", fontWeight: 600 }}>{t("fixed assets", "دارایی‌های ثابت مشهود یا نامشهود")}</strong> {t("— plus a commitment to create or maintain permanent jobs within", "یک کسب‌وکار واجد شرایط در فرانسه سرمایه‌گذاری شود و در کنار آن، متقاضی باید متعهد به ایجاد یا حفظ مشاغل دائمی طی")} <strong style={{ color: "#FFE600", fontWeight: 600 }}>{t("4 years", "۴ سال")}</strong>{t(".", " باشد.")}
              </p>
              <div
                className="flex flex-wrap gap-2 mt-auto pt-[18px]"
                style={{ borderTop: "1px solid #1f1f24" }}
              >
                {[
                  { en: "Direct equity ≥10%", fa: "حداقل ۱۰٪ سهام مستقیم" },
                  { en: "Reinvested earnings", fa: "سودهای مجدداً سرمایه‌گذاری‌شده" },
                  { en: "Inter-affiliate loans", fa: "وام بین شرکت‌های یک گروه" },
                  { en: "Job creation required", fa: "تعهد ایجاد شغل" },
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
