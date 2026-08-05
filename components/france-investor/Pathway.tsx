"use client";

import { useState } from "react";
import Image from "next/image";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const items = [
  {
    num: "01",
    label: "Talent Passport",
    labelFa: "پاسپورت استعداد",
    year: "Years 1–4",
    yearFa: "سال‌های ۱ تا ۴",
    title: "Talent Passport (Years 1–4)",
    titleFa: "پاسپورت استعداد (سال‌های ۱ تا ۴)",
    desc: "Operate your enterprise under the 4-year card. Renewals require proof that the €300K investment remains deployed and job-creation trajectory is actively maintained.",
    descFa: "بنگاه خود را با کارت ۴ ساله اداره کنید. تمدیدها نیازمند اثبات این هستند که سرمایه‌گذاری ۳۰۰ هزار یورویی همچنان به‌کار گرفته شده و مسیر ایجاد اشتغال فعالانه حفظ می‌شود.",
    body: "Operate your enterprise under the renewable 4-year Talent Passport card. Renewals require proof the €300K remains deployed and the job-creation trajectory is actively maintained.",
    bodyFa: "بنگاه خود را با کارت پاسپورت استعداد ۴ ساله‌ی قابل‌تمدید اداره کنید. تمدیدها نیازمند اثبات این هستند که ۳۰۰ هزار یورو همچنان به‌کار گرفته شده و مسیر ایجاد اشتغال فعالانه حفظ می‌شود.",
  },
  {
    num: "02",
    label: "Permanent Residency",
    labelFa: "اقامت دائم",
    year: "Year 5",
    yearFa: "سال ۵",
    title: "Permanent Residency (Year 5)",
    titleFa: "اقامت دائم (سال ۵)",
    desc: "Transition to a 10-year Permanent Residence Card (Carte de Résident). At this stage, you are no longer legally required to maintain or run the original investment enterprise.",
    descFa: "به یک کارت اقامت دائم ۱۰ ساله (Carte de Résident) گذار کنید. در این مرحله، دیگر از نظر قانونی ملزم به حفظ یا اداره‌ی بنگاه سرمایه‌گذاری اولیه نیستید.",
    body: "After 5 years of continuous legal residence, transition to a 10-year Permanent Residence Card. You are no longer required to maintain or operate the original investment enterprise.",
    bodyFa: "پس از ۵ سال اقامت قانونی پیوسته، به یک کارت اقامت دائم ۱۰ ساله گذار کنید. دیگر ملزم به حفظ یا اداره‌ی بنگاه سرمایه‌گذاری اولیه نیستید.",
  },
  {
    num: "03",
    label: "French Citizenship",
    labelFa: "تابعیت فرانسه",
    year: "Year 5+",
    yearFa: "سال ۵ به بعد",
    title: "French Citizenship (Year 5+)",
    titleFa: "تابعیت فرانسه (سال ۵ به بعد)",
    desc: "Requires 183 days/year physical presence, B1 French language proficiency, and a civic integration interview on French history, culture, and constitutional values.",
    descFa: "نیازمند ۱۸۳ روز در سال حضور فیزیکی، تسلط به زبان فرانسه در سطح B1 و یک مصاحبه‌ی ادغام مدنی درباره‌ی تاریخ، فرهنگ و ارزش‌های قانون اساسی فرانسه است.",
    body: "Apply for full French citizenship by naturalization. Requires 183 days/year physical presence, B1 oral and written French (language assessment), and a civic integration interview covering French history, culture, and constitutional values.",
    bodyFa: "برای تابعیت کامل فرانسه از طریق تابعیت‌پذیری درخواست دهید. نیازمند ۱۸۳ روز در سال حضور فیزیکی، فرانسه‌ی شفاهی و کتبی در سطح B1 (ارزیابی زبان) و یک مصاحبه‌ی ادغام مدنی شامل تاریخ، فرهنگ و ارزش‌های قانون اساسی فرانسه است.",
  },
];

export default function Pathway() {
  const { t } = useLang();
  const [activeIndex, setActiveIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-24 bg-white">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1] text-center mb-14">
            {t("Long-Term Horizon", "افق بلندمدت")}
          </h2>
        </Reveal>

        {/* Desktop track */}
        <Reveal variant="up" delay={60}>
          <div className="hidden md:grid grid-cols-3 gap-0 relative mb-10">
            <div
              className="absolute top-[27px] h-[2px] z-0"
              style={{
                left: "16%",
                right: "16%",
                background: "linear-gradient(90deg, #8F27FF, rgba(143,39,255,0.2))",
              }}
            />
            {items.map((item, i) => (
              <button
                key={i}
                className="flex flex-col items-center text-center relative z-10 px-3 cursor-pointer bg-transparent border-none"
                onClick={() => setActiveIndex(i)}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-[14px] font-bold mb-4 transition-all duration-300"
                  style={{
                    background: activeIndex === i ? "#8F27FF" : "white",
                    border: "2.5px solid #8F27FF",
                    color: activeIndex === i ? "white" : "#8F27FF",
                    boxShadow: activeIndex === i
                      ? "0 0 0 6px #FAF6FF, 0 8px 24px rgba(143,39,255,0.3)"
                      : "0 0 0 6px #FAF6FF",
                    transform: activeIndex === i ? "scale(1.08)" : "scale(1)",
                  }}
                >
                  {item.num}
                </div>
                <div className="text-[15px] font-semibold text-black mb-1">{t(item.label, item.labelFa)}</div>
                <div
                  className="text-[12px] font-semibold px-2.5 py-0.5 rounded-full"
                  style={{ color: "#8F27FF", background: "#FAF6FF" }}
                >
                  {t(item.year, item.yearFa)}
                </div>
              </button>
            ))}
          </div>
        </Reveal>

        {/* Desktop detail cards */}
        <Reveal variant="up" delay={100}>
          <div className="hidden md:grid grid-cols-3 gap-4">
            {items.map((card, i) => (
              <div
                key={i}
                className="rounded-[14px] p-5 transition-all duration-200 cursor-pointer"
                style={{
                  background: activeIndex === i ? "#FAF6FF" : "#F7F6F9",
                  border: activeIndex === i ? "1px solid rgba(143,39,255,0.25)" : "1px solid #E2E2E2",
                }}
                onClick={() => setActiveIndex(i)}
              >
                <h5 className="text-[14px] font-semibold text-black mb-2">{t(card.title, card.titleFa)}</h5>
                <p className="text-[13px] text-[#929292] leading-[1.6] m-0">{t(card.desc, card.descFa)}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Mobile accordion */}
        <div className="md:hidden rounded-[20px] overflow-hidden" style={{ border: "1px solid #E2E2E2" }}>
          {items.map((item, i) => (
            <div key={i} style={{ borderBottom: i < items.length - 1 ? "1px solid #E2E2E2" : "none" }}>
              <button
                className="w-full flex items-center gap-3.5 p-4 px-[18px] text-left transition-colors duration-200"
                style={{ background: openIndex === i ? "#FAF6FF" : "white" }}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div
                  className="w-[34px] h-[34px] rounded-full flex items-center justify-center text-[12px] font-bold flex-shrink-0 transition-all duration-200"
                  style={{
                    background: openIndex === i ? "#8F27FF" : "white",
                    border: "2px solid #8F27FF",
                    color: openIndex === i ? "white" : "#8F27FF",
                    boxShadow: "0 0 0 4px #FAF6FF",
                  }}
                >
                  {item.num}
                </div>
                <div className="flex-1">
                  <div className="text-[14px] font-semibold text-black mb-0.5">{t(item.label, item.labelFa)}</div>
                  <span
                    className="text-[11px] font-semibold px-2 py-0.5 rounded-full inline-block"
                    style={{ color: "#8F27FF", background: "#FAF6FF" }}
                  >
                    {t(item.year, item.yearFa)}
                  </span>
                </div>
                <Image
                  src="/images/arrow.svg"
                  alt="toggle"
                  width={18}
                  height={18}
                  className="flex-shrink-0 transition-transform duration-200"
                  style={{
                    transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                    filter: openIndex === i
                      ? "invert(27%) sepia(99%) saturate(1600%) hue-rotate(260deg) brightness(90%)"
                      : "invert(60%)",
                  }}
                />
              </button>
              {openIndex === i && (
                <div
                  className="text-[13px] text-[#474747] leading-[1.6] pb-4"
                  style={{ paddingLeft: "62px", paddingRight: "18px" }}
                >
                  {t(item.body, item.bodyFa)}
                </div>
              )}
            </div>
          ))}
        </div>
      </Row>
    </section>
  );
}
