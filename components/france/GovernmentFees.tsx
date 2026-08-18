"use client";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const fees = [
  {
    stage: "Stage 1 · Consular Entry",
    stageFa: "مرحله ۱ — دریافت ویزای بلندمدت",
    amount: "€99",
    amountFa: "۹۹ یورو",
    label: "Long-Stay Visa (VLS-TS)",
    labelFa: "ویزای بلندمدت VLS-TS",
    desc: "Initial long-stay visa fee paid at the French Consulate or visa application center in your country of residence.",
    descFa: "هزینه ویزای بلندمدت VLS-TS که هنگام درخواست در کنسولگری فرانسه یا مرکز درخواست ویزا پرداخت می‌شود.",
  },
  {
    stage: "Stage 2 · Prefecture Onshore",
    stageFa: "مرحله ۲ — دریافت کارت اقامت در فرانسه",
    amount: "€350",
    amountFa: "۳۵۰ یورو",
    label: "Physical 4-Year Talent Card",
    labelFa: "کارت فیزیکی استعداد ۴ ساله",
    desc: "€300 administrative fee + €50 stamp duty. Paid via ANEF portal after arrival in France to issue your physical residence card.",
    descFa: "شامل €300 هزینه اداری و €50 هزینه تمبر که پس از ورود و از طریق پورتال ANEF پرداخت می‌شود.",
  },
  {
    stage: "Stage 3 · Renewal",
    stageFa: "مرحله ۳ — تمدید اقامت",
    amount: "€250",
    amountFa: "۲۵۰ یورو",
    label: "Card Extension",
    labelFa: "تمدید کارت",
    desc: "Standard fee for subsequent permit renewals via ANEF. Does not include certified translations, apostilles, or corporate setup costs.",
    descFa: "هزینه استاندارد تمدید کارت اقامت از طریق ANEF.",
  },
];

export default function GovernmentFees() {
  const { t } = useLang();
  return (
    <section className="py-16 md:py-20 bg-white">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center mb-10 md:mb-14">
            {t("Government Fee Structure", "ساختار هزینه‌های دولتی")}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
          {fees.map((f, i) => (
            <Reveal key={f.label} variant="up" delay={i * 100 + 100}>
            <div
              key={f.label}
              className="relative rounded-[14px] p-7 flex flex-col gap-3 overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-xl"
              style={{ background: "white", border: "1px solid #E2E2E2" }}
            >
              {/* Yellow top bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#FFE600]" />

              <span
                className="self-start text-[11px] font-bold uppercase tracking-[.1em] px-2.5 py-1 rounded-full"
                style={{ background: "#FFFBE6", border: "1px solid #F0D800", color: "#7A6800" }}
              >
                {t(f.stage, f.stageFa)}
              </span>
              <div className="text-[52px] font-bold tracking-[-0.04em] leading-none">{t(f.amount, f.amountFa)}</div>
              <div className="text-[14px] font-semibold">{t(f.label, f.labelFa)}</div>
              <p className="text-[13px] text-[#929292] leading-[1.6] m-0">{t(f.desc, f.descFa)}</p>
            </div>
            </Reveal>
          ))}
        </div>

        <Reveal variant="up" delay={400}>
        <div
          className="rounded-[8px] px-4 py-3.5 text-[13px] leading-[1.6]"
          style={{ background: "#FFFBE6", border: "1px solid #F0D800", color: "#7A6800" }}
        >
          {t("Note: These are standard government fees only. Additional costs include certified document translations, apostilles, incubation fees (~€800/month), and corporate setup fees.", "هزینه‌های فوق صرفاً هزینه‌های دولتی هستند. هزینه ترجمه رسمی، آپوستیل، خدمات انکوباتور (حدود €۸۰۰ در ماه) و راه‌اندازی شرکت جداگانه محاسبه می‌شوند.")}
        </div>
        </Reveal>
      </Row>
    </section>
  );
}
