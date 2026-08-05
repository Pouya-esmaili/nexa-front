"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/LazyReveal";
import { useLang } from "@/components/global/LanguageProvider";

const orgs = [
  {
    type: "Venture Capital Fund",
    typeFa: "صندوق سرمایه‌ی خطرپذیر",
    typeColor: "text-[#8F27FF]",
    topBar: "bg-[#8F27FF]",
    amount: "$200K",
    amountFa: "۲۰۰ هزار دلار",
    amountColor: "text-black",
    floor: "CAD Minimum Investment",
    floorFa: "حداقل سرمایه‌گذاری (دلار کانادا)",
    title: "Designated VC Fund",
    titleFa: "صندوق VC تعیین‌شده",
    desc: <>Must secure a legally binding, full <strong>equity investment commitment</strong> from one or more approved Canadian VC funds listed on the official IRCC designated organization registry.</>,
    descFa: <>باید یک <strong>تعهد سرمایه‌گذاری سهام</strong> کامل و از نظر قانونی الزام‌آور را از یک یا چند صندوق VC کانادایی تأییدشده که در دفتر ثبت رسمی سازمان‌های تعیین‌شده‌ی IRCC فهرست شده‌اند، تأمین کند.</>,
  },
  {
    type: "Angel Investor Group",
    typeFa: "گروه سرمایه‌گذار فرشته",
    typeColor: "text-[#10B981]",
    topBar: "bg-[#10B981]",
    amount: "$75K",
    amountFa: "۷۵ هزار دلار",
    amountColor: "text-black",
    floor: "CAD Minimum Investment",
    floorFa: "حداقل سرمایه‌گذاری (دلار کانادا)",
    title: "Designated Angel Network",
    titleFa: "شبکه‌ی فرشته‌ی تعیین‌شده",
    desc: "Must secure a minimum capital allocation vetted and committed by an approved Canadian angel investor group or network through their formal evaluation process.",
    descFa: "باید یک تخصیص سرمایه‌ی حداقلی را که توسط یک گروه یا شبکه‌ی سرمایه‌گذار فرشته‌ی کانادایی تأییدشده از طریق فرایند ارزیابی رسمی‌شان بررسی و تعهد شده، تأمین کند.",
  },
  {
    type: "Business Incubator",
    typeFa: "مرکز رشد کسب‌وکار",
    typeColor: "text-[#7A6800]",
    topBar: "bg-[#FFE600]",
    amount: "$0",
    amountFa: "۰ دلار",
    amountColor: "text-[#7A6800]",
    floor: "No Financial Floor Required",
    floorFa: "بدون نیاز به کف مالی",
    title: "Designated Incubator Program",
    titleFa: "برنامه‌ی مرکز رشد تعیین‌شده",
    desc: <>No direct cash injection required. Instead, the founder must be <strong>formally accepted into an elite, structured Canadian incubator</strong> acceleration curriculum — the acceptance itself is the qualifying credential.</>,
    descFa: <>هیچ تزریق نقدی مستقیمی لازم نیست. در عوض، بنیان‌گذار باید <strong>به‌طور رسمی در یک برنامه‌ی شتاب‌دهی مرکز رشد کانادایی نخبه و ساختارمند پذیرفته شود</strong> — خود این پذیرش، اعتبارنامه‌ی واجد شرایط بودن است.</>,
  },
];

export default function Orgs() {
  const { t, lang } = useLang();
  return (
    <section className="py-20 md:py-24 bg-[#F7F6F9]">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center mb-14">
            {t("Designated Organization Types & Capital Floors", "انواع سازمان‌های تعیین‌شده و کف‌های سرمایه")}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {orgs.map((o, i) => (
            <Reveal key={o.type} variant="up" delay={i * 80}>
              <div className="bg-white border border-[#E2E2E2] rounded-[20px] flex flex-col gap-4 overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.07)]">
                <div className={`h-[3px] ${o.topBar}`} />
                <div className="px-8 pb-8 flex flex-col gap-4">
                  <div className={`text-[11px] font-bold uppercase tracking-[0.1em] ${o.typeColor}`}>{t(o.type, o.typeFa)}</div>
                  <div className={`text-[44px] font-extrabold tracking-[-0.04em] leading-none ${o.amountColor}`}>{t(o.amount, o.amountFa)}</div>
                  <div className="text-[12px] font-semibold text-[#929292] uppercase tracking-[0.06em]">{t(o.floor, o.floorFa)}</div>
                  <h4 className="text-[15px] font-semibold text-black mt-1">{t(o.title, o.titleFa)}</h4>
                  <p className="text-[13px] text-[#929292] leading-[1.6] m-0 [&_strong]:text-black [&_strong]:font-semibold">{lang === "fa" ? o.descFa : o.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal variant="up" delay={80}>
          <div className="rounded-[14px] px-6 py-[18px] text-[13.5px] text-[#8F27FF] font-medium"
            style={{ background: "#FAF6FF", border: "1px solid rgba(143,39,255,0.18)" }}>
            {t("Each organization type issues an official", "هر نوع سازمان یک")} <strong className="font-bold">{t("Letter of Support", "نامه‌ی پشتیبانی")}</strong> {t("to the founder group and transmits a matching", "رسمی به گروه بنیان‌گذار صادر می‌کند و یک")} <strong className="font-bold">{t("Commitment Certificate directly to IRCC", "گواهی تعهد متناظر را مستقیماً به IRCC")}</strong>{t(". Both documents are mandatory for filing.", " ارسال می‌کند. هر دو سند برای ثبت الزامی هستند.")}
          </div>
        </Reveal>
      </Row>
    </section>
  );
}
