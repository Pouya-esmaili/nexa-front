"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const CHIPS: { en: string; fa: string }[] = [
  { en: "Personal savings", fa: "پس‌انداز شخصی" },
  { en: "Founder salary", fa: "حقوق بنیان‌گذار" },
  { en: "VC term sheets", fa: "Term Sheet سرمایه‌گذاری" },
  { en: "+€12K per dependent", fa: "+€۱۲,۰۰۰ برای هر فرد وابسته" },
];

const cards = [
  {
    title: "Single Founder Threshold",
    titleFa: "بنیان‌گذار مجرد",
    desc: "Minimum <strong>€21,876.36</strong> in unencumbered liquid savings — equal to the gross annual French SMIC as currently indexed.",
    descFa: "حداقل <strong>€۲۱,۸۷۶.۳۶</strong> منابع مالی نقدشونده و بدون تعهد که در اختیار شخص متقاضی باشد.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="9" />
        <path d="M9 8.5h5a2 2 0 0 1 0 4h-4a2 2 0 0 0 0 4h5M12 6v2M12 16v2" />
      </svg>
    ),
  },
  {
    title: "Family Adjustment",
    titleFa: "متقاضی همراه با خانواده",
    desc: "Add approximately <strong>€12,000 per dependent</strong> for smooth consular processing and financial sufficiency demonstration.",
    descFa: "برای هر فرد وابسته، حدود <strong>€۱۲,۰۰۰</strong> به میزان تمکن موردنیاز اضافه می‌شود تا توانایی مالی خانواده برای دوره اقامت به‌طور کامل اثبات شود.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" className="w-5 h-5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      </svg>
    ),
  },
  {
    title: "Acceptable Proof of Funds",
    titleFa: "مدارک قابل قبول برای اثبات منابع مالی",
    desc: "Certified bank statements, corporate salary certificates, or <strong>VC funding term sheets</strong> explicitly earmarked for your personal subsistence.",
    descFa: "صورت‌حساب بانکی معتبر، گواهی حقوق بنیان‌گذار یا <strong>VC Term Sheet</strong> با ذکر اختصاص منابع برای تأمین هزینه‌های زندگی.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" className="w-5 h-5">
        <rect x="3" y="6" width="18" height="12" rx="1.5" />
        <path d="M3 10h18M7 14h3" />
      </svg>
    ),
  },
];

export default function FinancialRequirements() {
  const { t } = useLang();
  return (
    <section className="py-16 md:py-20 relative overflow-hidden" style={{ background: "#000" }}>
      {/* Glow */}
      <div
        className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(143,39,255,0.3), transparent 65%)" }}
      />

      <Row>
        <Reveal variant="up" className="relative z-10 mb-10 md:mb-14">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center text-white">
            {t("Financial Requirements", "الزامات مالی")}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-5 items-stretch relative z-10">
          {/* Hero card */}
          <Reveal variant="left" delay={100}>
            <div
              className="rounded-[20px] p-10 flex flex-col gap-5 h-full"
              style={{ background: "#0E0E10", border: "1px solid #1f1f24" }}
            >
              <span
                className="self-start text-[11px] font-bold uppercase tracking-[.12em] px-3.5 py-1.5 rounded-full"
                style={{ background: "rgba(255,230,0,0.12)", border: "1px solid rgba(255,230,0,0.3)", color: "#FFE600" }}
              >
                {t("Annual SMIC Threshold", "حداقل تمکن بر مبنای SMIC سالانه")}
              </span>
              <div className="text-[72px] font-bold tracking-[-0.04em] leading-[0.9] text-white">
                {t("€21.9K", "€۲۱.۹K")}
              </div>
              <p className="text-[14px] leading-[1.65]" style={{ color: "#B5B5BA" }}>
                {t("Gross annual French minimum wage (SMIC) — the baseline personal liquid funds required for a", "حداقل منابع مالی شخصی برای یک")}{" "}
                <strong className="font-semibold" style={{ color: "#FFE600" }}>{t("single founder", "بنیان‌گذار مجرد")}</strong>{" "}
                {t("to qualify at the consulate.", "؛ معادل حداقل دستمزد ناخالص سالانه فرانسه (SMIC).")}
              </p>
              <div
                className="flex flex-wrap gap-2 mt-auto pt-4"
                style={{ borderTop: "1px solid #1f1f24" }}
              >
                {CHIPS.map((chip) => (
                  <span
                    key={chip.en}
                    className="text-[12px] font-medium text-white px-3 py-1.5 rounded-full transition-all duration-200 hover:border-white/30"
                    style={{ border: "1px solid #2a2a30" }}
                  >
                    {t(chip.en, chip.fa)}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Cards — hover: border purple + bg #150026 طبق HTML اصلی */}
          <div className="flex flex-col gap-3">
            {cards.map((c, i) => (
              <Reveal key={c.title} variant="up" delay={i * 80 + 150}>
                <div
                  className="rounded-[14px] p-6 flex gap-5 items-start h-full"
                  style={{
                    background: "#0E0E10",
                    border: "1px solid #1f1f24",
                    transition: "border-color 0.25s, background 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "#8F27FF";
                    (e.currentTarget as HTMLDivElement).style.background = "#150026";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "#1f1f24";
                    (e.currentTarget as HTMLDivElement).style.background = "#0E0E10";
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-[10px] flex items-center justify-center flex-shrink-0 text-[#8F27FF]"
                    style={{ background: "rgba(143,39,255,0.15)" }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <h4 className="text-[15px] font-semibold text-white mb-1.5">{t(c.title, c.titleFa)}</h4>
                    <p
                      className="text-[13px] leading-[1.6] m-0 [&_strong]:text-white [&_strong]:font-semibold"
                      style={{ color: "#B5B5BA" }}
                      dangerouslySetInnerHTML={{ __html: t(c.desc, c.descFa) }}
                    />
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
