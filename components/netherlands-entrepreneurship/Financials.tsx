"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const cards = [
  {
    title: "Minimum Capital Investment",
    titleFa: "حداقل سرمایه‌گذاری",
    text: (
      <>
        A minimum of <strong className="text-white font-semibold">€4,500</strong> in unencumbered
        personal equity must be injected directly into your Dutch business entity. Cannot be sourced
        from unapproved loans or credit lines.
      </>
    ),
    textFa: (
      <>
        حداقل <strong className="text-white font-semibold">۴٬۵۰۰ یورو</strong> از سرمایه شخصی و بدون
        تعهد باید مستقیماً در کسب‌وکار هلندی شما تزریق شود. این سرمایه نباید از وام‌ها یا خطوط اعتباری
        غیرمجاز تأمین شده باشد.
      </>
    ),
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="3" y="6" width="18" height="12" rx="1.5" />
        <path d="M3 10h18M7 14h3" />
      </svg>
    ),
  },
  {
    title: "Bank Statement Runway",
    titleFa: "پشتوانه مالی از طریق حساب بانکی",
    text: (
      <>
        A <strong className="text-white font-semibold">3 to 6-month bank statement</strong> proving
        continuous personal income at or above the Dutch minimum wage threshold, with clean capital
        origin pathways.
      </>
    ),
    textFa: (
      <>
        ارائه <strong className="text-white font-semibold">گردش حساب ۳ تا ۶ ماهه</strong> برای اثبات
        استمرار درآمد شخصی در سطح حداقل درآمد موردنیاز هلند، همراه با منبع مالی شفاف و قابل ردیابی.
      </>
    ),
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    title: "No Single-Client Operations",
    titleFa: "فعالیت وابسته به یک مشتری کافی نیست",
    text: (
      <>
        Relying on a <strong className="text-white font-semibold">single primary client mirrors employment</strong>{" "}
        and triggers RVO rejection. Your pipeline must prove multiple B2B relationships, independent
        risk, and separate marketing infrastructure.
      </>
    ),
    textFa: (
      <>
        اتکا به یک <strong className="text-white font-semibold">مشتری اصلی می‌تواند فعالیت شما را شبیه رابطه استخدامی نشان دهد</strong>{" "}
        و به رد پرونده توسط RVO منجر شود. بنابراین باید مجموعه‌ای از روابط B2B، استقلال تجاری و
        زیرساخت مستقل بازاریابی و جذب مشتری را نشان دهید.
      </>
    ),
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      </svg>
    ),
  },
];

export default function Financials() {
  const { t, lang } = useLang();
  return (
    <section className="py-20 md:py-24 relative overflow-hidden" style={{ background: "#000000" }}>
      <div
        className="absolute -bottom-28 -right-28 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(143,39,255,0.3), transparent 65%)" }}
      />

      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1] text-center text-white mb-14">
            {t("Financial Self-Sufficiency Requirements", "الزامات مالی")}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-5 relative z-10">
          {/* Hero card */}
          <Reveal variant="left" delay={60}>
            <div
              className="rounded-[20px] p-8 sm:p-10 flex flex-col gap-5 h-full"
              style={{ background: "#0E0E10", border: "1px solid #1f1f24" }}
            >
              <span
                className="self-start text-[11px] font-bold tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-full"
                style={{ background: "rgba(255,230,0,0.12)", border: "1px solid rgba(255,230,0,0.3)", color: "#FFE600" }}
              >
                {t("Monthly Income Baseline", "حداقل درآمد ماهانه")}
              </span>

              <div>
                <span
                  className="text-[64px] sm:text-[72px] font-bold tracking-[-0.04em] leading-[0.9] text-white tabular-nums"
                >
                  {t("€1,734", "۱٬۷۳۴ یورو")}
                </span>
              </div>

              <p className="text-[14px] leading-[1.65]" style={{ color: "#B5B5BA" }}>
                {t("Minimum gross monthly personal income required — equal to the Dutch single-person", "حداقل درآمد ناخالص ماهانه موردنیاز برای متقاضی اصلی؛ معادل استاندارد")}{" "}
                <strong className="font-semibold" style={{ color: "#FFE600" }}>levensonderhoud</strong>{" "}
                {t("standard for 2026, inclusive of the 8% mandatory holiday allowance.", "برای یک فرد مجرد در سال ۲۰۲۶، با احتساب ۸٪ حق مرخصی سالانه.")}
              </p>

              <div
                className="flex flex-wrap gap-2 mt-auto pt-4"
                style={{ borderTop: "1px solid #1f1f24" }}
              >
                {[
                  { en: "Signed B2B contracts", fa: "قراردادهای امضاشده B2B" },
                  { en: "Letters of Intent (LOIs)", fa: "نامه‌های اعلام تمایل به همکاری (LOI)" },
                  { en: "MOUs with Dutch firms", fa: "تفاهم‌نامه با شرکت‌های هلندی" },
                  { en: "Audited balance sheets", fa: "صورت‌های مالی حسابرسی‌شده" },
                ].map((chip) => (
                  <span
                    key={chip.en}
                    className="text-[12px] px-3 py-1.5 rounded-full font-medium text-white"
                    style={{ border: "1px solid #2a2a30" }}
                  >
                    {t(chip.en, chip.fa)}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Card grid */}
          <Reveal variant="right" delay={80}>
            <div className="grid grid-cols-1 gap-3">
              {cards.map((card, i) => (
                <div
                  key={i}
                  className="rounded-[14px] p-5 sm:p-6 flex gap-5 items-start transition-all duration-300 cursor-default"
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
                    className="w-10 h-10 rounded-[10px] flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(143,39,255,0.15)", color: "#8F27FF" }}
                  >
                    <span className="w-5 h-5">{card.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-[14px] font-semibold text-white mb-1">{t(card.title, card.titleFa)}</h4>
                    <p className="text-[13px] leading-[1.6] m-0" style={{ color: "#B5B5BA" }}>
                      {lang === "fa" ? card.textFa : card.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Row>
    </section>
  );
}
