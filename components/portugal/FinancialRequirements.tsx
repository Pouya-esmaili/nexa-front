"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const cards = [
  {
    title: "Main Applicant (100% Minimum Wage)",
    titleFa: "متقاضی اصلی — ۱۰۰٪ حداقل دستمزد",
    sub: "Personal liquid funds baseline",
    subFa: "حداقل منابع مالی شخصی و نقدشونده",
    amount: "~€10,000",
    amountFa: "حدود ۱۰٬۰۰۰ یورو",
  },
  {
    title: "Spouse / Adult Dependent (+50%)",
    titleFa: "همسر / فرد بزرگسال تحت تکفل — ۵۰٪ اضافه",
    sub: "Additional per adult family member",
    subFa: "منابع مالی اضافی برای هر عضو بزرگسال خانواده",
    amount: "+~€5,000",
    amountFa: "حدود ۵٬۰۰۰ یورو",
  },
  {
    title: "Each Dependent Child (+30%)",
    titleFa: "هر فرزند تحت تکفل — ۳۰٪ اضافه",
    sub: "Additional per minor child",
    subFa: "منابع مالی اضافی برای هر فرزند زیر سن قانونی",
    amount: "+~€3,000",
    amountFa: "۳۰٪ از حداقل دستمزد ملی",
  },
];

export default function FinancialRequirements() {
  const { t } = useLang();

  return (
    <section className="py-20 md:py-24 bg-black relative overflow-hidden">
      {/* radial glow */}
      <div
        className="pointer-events-none absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(143,39,255,0.3), transparent 65%)",
        }}
      />

      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-white text-center mb-12 relative z-10">
            {t("Financial Requirements", "الزامات مالی")}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-5 relative z-10">
          {/* Hero card */}
          <Reveal variant="left" delay={100}>
            <div
              className="rounded-[20px] p-6 sm:p-8 md:p-10 flex flex-col gap-5 h-full min-w-0"
              style={{
                background: "#0E0E10",
                border: "1px solid #1f1f24",
              }}
            >
              <div
                className="self-start max-w-full text-[11px] font-bold tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-full break-words"
                style={{
                  background: "rgba(255,230,0,0.12)",
                  border: "1px solid rgba(255,230,0,0.3)",
                  color: "#FFE600",
                }}
              >
                {t(
                  "Salário Mínimo Nacional Baseline",
                  "حداقل منابع مالی بر مبنای حداقل دستمزد ملی پرتغال"
                )}
              </div>

              <div className="text-[52px] sm:text-[64px] md:text-[72px] font-bold tracking-[-0.04em] leading-[0.9] text-white break-words">
                {t("~€10K", "حدود ۱۰ هزار یورو")}
              </div>

              <p
                className="text-[14px] leading-[1.65] break-words"
                style={{ color: "#B5B5BA" }}
              >
                {t(
                  "Annual personal maintenance threshold for a",
                  "حداقل منابع مالی شخصی موردنیاز برای تأمین هزینه‌های سالانه"
                )}{" "}
                <strong style={{ color: "#FFE600", fontWeight: 600 }}>
                  {t("solo founder", "کارآفرین اصلی")}
                </strong>{" "}
                {t(
                  "— pegged to Portugal's national minimum wage.",
                  "، بر مبنای حداقل دستمزد ملی پرتغال."
                )}
              </p>

              <div
                className="flex flex-wrap gap-2 mt-auto pt-4"
                style={{ borderTop: "1px solid #1f1f24" }}
              >
                {[
                  {
                    en: "Portuguese bank account",
                    fa: "حساب بانکی در پرتغال",
                  },
                  {
                    en: "Share capital deposits",
                    fa: "سپرده سرمایه شرکت",
                  },
                  {
                    en: "Dividend contracts",
                    fa: "قراردادهای دریافت سود سهام",
                  },
                  {
                    en: "Executive salary records",
                    fa: "مدارک مربوط به حقوق و دستمزد مدیریتی",
                  },
                ].map((chip) => (
                  <span
                    key={chip.en}
                    className="text-[12px] px-3 py-1.5 rounded-full font-medium text-white max-w-full break-words"
                    style={{ border: "1px solid #2a2a30" }}
                  >
                    {t(chip.en, chip.fa)}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Info cards */}
          <div className="flex flex-col gap-3 min-w-0">
            {cards.map((c, i) => (
              <Reveal
                key={c.title}
                variant="up"
                delay={i * 80 + 100}
              >
                <div
                  className="
                    rounded-[14px]
                    px-5 py-5
                    sm:px-6
                    flex flex-col
                    md:flex-row
                    md:justify-between
                    md:items-center
                    gap-3
                    md:gap-4
                    min-w-0
                    transition-all duration-250
                  "
                  style={{
                    background: "#0E0E10",
                    border: "1px solid #1f1f24",
                  }}
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
                  <div className="min-w-0 flex-1">
                    <h4 className="text-[14px] font-semibold text-white mb-1 break-words">
                      {t(c.title, c.titleFa)}
                    </h4>

                    <p
                      className="text-[13px] m-0 leading-[1.6] break-words"
                      style={{ color: "#B5B5BA" }}
                    >
                      {t(c.sub, c.subFa)}
                    </p>
                  </div>

                  <div
                    className="
                      text-[24px]
                      sm:text-[28px]
                      font-bold
                      tracking-[-0.03em]
                      whitespace-normal
                      md:whitespace-nowrap
                      shrink-0
                      max-w-full
                      break-words
                    "
                    style={{ color: "#FFE600" }}
                  >
                    {t(c.amount, c.amountFa)}
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