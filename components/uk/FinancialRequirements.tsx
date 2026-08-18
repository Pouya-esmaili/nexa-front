"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const cards = [
  {
    title: "Main Applicant (Founder)",
    titleFa: "متقاضی اصلی — بنیان‌گذار",
    sub: "Required personal savings threshold",
    subFa: "حداقل تمکن مالی موردنیاز",
    amount: "£1,270",
    amountFa: "۱,۲۷۰ پوند",
  },
  {
    title: "Dependent Partner / Spouse",
    titleFa: "همسر / پارتنر وابسته",
    sub: "Additional maintenance per dependent partner",
    subFa: "تمکن اضافه برای همسر",
    amount: "+£285",
    amountFa: "+۲۸۵ پوند",
  },
  {
    title: "First Dependent Child",
    titleFa: "فرزند اول",
    sub: "Additional maintenance for first child",
    subFa: "تمکن اضافه برای فرزند اول",
    amount: "+£315",
    amountFa: "+۳۱۵ پوند",
  },
  {
    title: "Each Additional Child",
    titleFa: "هر فرزند دیگر",
    sub: "Additional maintenance per subsequent child",
    subFa: "تمکن اضافه برای هر فرزند بعدی",
    amount: "+£200",
    amountFa: "+۲۰۰ پوند",
  },
];

const CHIPS: { en: string; fa: string }[] = [
  { en: "Personal bank account", fa: "حساب بانکی شخصی" },
  { en: "28 continuous days", fa: "حداقل ۲۸ روز متوالی" },
  { en: "Separate from business capital", fa: "جدا از سرمایه کسب‌وکار" },
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
            {t("Personal Financial Maintenance", "تمکن مالی شخصی")}
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
                {t("28-Day Holding Requirement", "الزام نگهداری ۲۸ روزه")}
              </span>
              <div className="text-[72px] font-bold tracking-[-0.04em] leading-[0.9] text-white">
                {t("£1,270", "۱,۲۷۰ پوند")}
              </div>
              <p className="text-[14px] leading-[1.65]" style={{ color: "#B5B5BA" }}>
                {t("Minimum personal savings for the", "حداقل میزان پس‌انداز موردنیاز برای")}{" "}
                <strong className="font-semibold" style={{ color: "#FFE600" }}>{t("main applicant", "متقاضی اصلی")}</strong>
                {t(", held in your personal bank account for", "که باید به مدت")}{" "}
                <strong className="font-semibold" style={{ color: "#FFE600" }}>{t("28 consecutive days", "۲۸ روز متوالی")}</strong>{" "}
                {t("before submission.", "پیش از ارائه درخواست در حساب بانکی شخصی او نگهداری شده باشد.")}
              </p>
              <div
                className="flex flex-wrap gap-2 mt-auto pt-4"
                style={{ borderTop: "1px solid #1f1f24" }}
              >
                {CHIPS.map((chip) => (
                  <span
                    key={chip.en}
                    className="text-[12px] font-medium text-white px-3 py-1.5 rounded-full"
                    style={{ border: "1px solid #2a2a30" }}
                  >
                    {t(chip.en, chip.fa)}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Amount cards */}
          <div className="flex flex-col gap-3">
            {cards.map((c, i) => (
              <Reveal key={c.title} variant="up" delay={i * 80 + 150}>
                <div
                  className="rounded-[14px] px-6 py-5 flex items-center justify-between gap-4 h-full"
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
                  <div>
                    <h4 className="text-[14px] font-semibold text-white mb-1">{t(c.title, c.titleFa)}</h4>
                    <p className="text-[13px] m-0" style={{ color: "#B5B5BA" }}>{t(c.sub, c.subFa)}</p>
                  </div>
                  <div
                    className="text-[28px] font-bold tracking-[-0.03em] whitespace-nowrap flex-shrink-0"
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
