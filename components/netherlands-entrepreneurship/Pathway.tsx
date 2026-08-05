"use client";

import { useState } from "react";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const pathwayItems = [
  {
    num: "01",
    label: "Initial Card",
    labelFa: "کارت اولیه",
    year: "2 Years",
    yearFa: "۲ سال",
    detail: {
      title: "2-Year Initial Card",
      titleFa: "کارت اولیه‌ی ۲ ساله",
      text: "Operate your Dutch entity with full work authorization. Sponsor spouse and minor children under family reunification channels.",
      textFa: "نهاد هلندی خود را با مجوز کامل کار اداره کنید. همسر و فرزندان صغیر را تحت کانال‌های پیوند مجدد خانواده حمایت کنید.",
    },
    body: "Operate your Dutch business with full work authorization. Sponsor your spouse and minor children under family reunification channels — they receive a matching residence card.",
    bodyFa: "کسب‌وکار هلندی خود را با مجوز کامل کار اداره کنید. همسر و فرزندان صغیر خود را تحت کانال‌های پیوند مجدد خانواده حمایت کنید — آن‌ها یک کارت اقامت متناظر دریافت می‌کنند.",
  },
  {
    num: "02",
    label: "Renewals",
    labelFa: "تمدیدها",
    year: "2–5 Year Blocks",
    yearFa: "بازه‌های ۲ تا ۵ ساله",
    detail: {
      title: "Indefinite Renewals",
      titleFa: "تمدیدهای نامحدود",
      text: "Renewable for subsequent 2-to-5-year blocks as long as the business remains financially viable and yields income at Dutch minimum wage standards.",
      textFa: "قابل‌تمدید برای بازه‌های بعدی ۲ تا ۵ ساله تا زمانی که کسب‌وکار از نظر مالی پابرجا بماند و درآمدی در حد استانداردهای حداقل دستمزد هلند ایجاد کند.",
    },
    body: "Renewable for subsequent 2-to-5-year blocks, provided the business remains financially viable and you continue to earn at or above Dutch minimum wage standards.",
    bodyFa: "قابل‌تمدید برای بازه‌های بعدی ۲ تا ۵ ساله، مشروط بر اینکه کسب‌وکار از نظر مالی پابرجا بماند و شما به کسب درآمد در حد یا بالاتر از استانداردهای حداقل دستمزد هلند ادامه دهید.",
  },
  {
    num: "03",
    label: "Permanent Residency",
    labelFa: "اقامت دائم",
    year: "Year 5",
    yearFa: "سال ۵",
    detail: {
      title: "Dutch Permanent Residency",
      titleFa: "اقامت دائم هلند",
      text: "After 5 consecutive years of continuous, legal residency, your right to live and work in the Netherlands permanently uncouples from the business.",
      textFa: "پس از ۵ سال متوالی اقامت قانونی و پیوسته، حق شما برای زندگی و کار در هلند به‌طور دائم از کسب‌وکار مستقل می‌شود.",
    },
    body: "After 5 consecutive years of legal, continuous residency with no unapproved extended absences, your right to live and work in the Netherlands permanently uncouples from your business performance.",
    bodyFa: "پس از ۵ سال متوالی اقامت قانونی و پیوسته بدون غیبت‌های طولانی تأییدنشده، حق شما برای زندگی و کار در هلند به‌طور دائم از عملکرد کسب‌وکارتان مستقل می‌شود.",
  },
  {
    num: "04",
    label: "Dutch Citizenship",
    labelFa: "تابعیت هلند",
    year: "Year 5+",
    yearFa: "سال ۵ به بعد",
    detail: {
      title: "Dutch Citizenship",
      titleFa: "تابعیت هلند",
      text: "Requires passing civic integration exams (Inburgering) at A2 Dutch level. Note: the Netherlands enforces a strict renunciation policy — exceptions apply only in specific circumstances.",
      textFa: "نیازمند قبولی در آزمون‌های ادغام مدنی (Inburgering) در سطح A2 هلندی است. توجه: هلند یک سیاست انصراف سختگیرانه اعمال می‌کند — استثناها فقط در شرایط خاص اعمال می‌شوند.",
    },
    body: "Requires passing the civic integration exams (Inburgering) at A2 Dutch proficiency. The Netherlands enforces a strict renunciation policy — you must legally give up your original nationality, unless you qualify for specific exemptions such as being married to a Dutch citizen.",
    bodyFa: "نیازمند قبولی در آزمون‌های ادغام مدنی (Inburgering) در سطح تسلط A2 هلندی است. هلند یک سیاست انصراف سختگیرانه اعمال می‌کند — باید به‌طور قانونی از تابعیت اصلی خود صرف‌نظر کنید، مگر اینکه واجد شرایط معافیت‌های خاصی مانند ازدواج با یک شهروند هلندی باشید.",
  },
];

export default function Pathway() {
  const { t } = useLang();
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="py-20 md:py-24" style={{ background: "#F7F6F9" }}>
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1] text-center mb-14">
            {t("Long-Term Horizon", "افق بلندمدت")}
          </h2>
        </Reveal>

        {/* Desktop track */}
        <Reveal variant="up" delay={60}>
          <div className="hidden md:block mb-10">
            <div className="relative grid grid-cols-4 gap-0 mb-10">
              {/* Connecting line */}
              <div
                className="absolute top-7 left-[10%] right-[10%] h-0.5 z-0"
                style={{ background: "linear-gradient(90deg, #8F27FF, rgba(143,39,255,0.2))" }}
              />

              {pathwayItems.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center relative z-10 px-3 cursor-pointer group"
                  onClick={() => setOpenIndex(i)}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-[14px] font-bold transition-all duration-300 mb-4"
                    style={{
                      background: openIndex === i ? "#8F27FF" : "white",
                      border: "2.5px solid #8F27FF",
                      color: openIndex === i ? "white" : "#8F27FF",
                      boxShadow:
                        openIndex === i
                          ? "0 0 0 6px #FAF6FF, 0 8px 24px rgba(143,39,255,0.3)"
                          : "0 0 0 6px #FAF6FF",
                      transform: openIndex === i ? "scale(1.08)" : "scale(1)",
                    }}
                  >
                    {item.num}
                  </div>
                  <div className="text-[15px] font-semibold text-black mb-1">{t(item.label, item.labelFa)}</div>
                  <span
                    className="text-[12px] font-semibold px-2.5 py-0.5 rounded-full"
                    style={{ color: "#8F27FF", background: "#FAF6FF" }}
                  >
                    {t(item.year, item.yearFa)}
                  </span>
                </div>
              ))}
            </div>

            {/* Detail cards */}
            <div className="grid grid-cols-4 gap-4">
              {pathwayItems.map((item, i) => (
                <div
                  key={i}
                  className="rounded-[14px] p-5 transition-all duration-200 cursor-pointer"
                  onClick={() => setOpenIndex(i)}
                  style={{
                    background: openIndex === i ? "#FAF6FF" : "white",
                    border: openIndex === i ? "1px solid rgba(143,39,255,0.18)" : "1px solid #E2E2E2",
                  }}
                >
                  <h5 className="text-[14px] font-semibold text-black mb-2">{t(item.detail.title, item.detail.titleFa)}</h5>
                  <p className="text-[13px] text-[#929292] leading-[1.6] m-0">{t(item.detail.text, item.detail.textFa)}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Mobile accordion */}
        <Reveal variant="up" delay={80}>
          <div
            className="md:hidden flex flex-col gap-0 overflow-hidden rounded-[20px]"
            style={{ border: "1px solid #E2E2E2" }}
          >
            {pathwayItems.map((item, i) => (
              <div
                key={i}
                className="border-b last:border-b-0"
                style={{ borderColor: "#E2E2E2" }}
              >
                <button
                  className="w-full flex items-center gap-3.5 px-4 py-4 text-left transition-colors duration-200"
                  style={{ background: openIndex === i ? "#FAF6FF" : "white" }}
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                >
                  <div
                    className="w-[34px] h-[34px] rounded-full flex-shrink-0 flex items-center justify-center text-[12px] font-bold transition-all duration-300"
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
                  <svg
                    className="w-5 h-5 flex-shrink-0 transition-transform duration-300"
                    style={{
                      color: openIndex === i ? "#8F27FF" : "#929292",
                      transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {openIndex === i && (
                  <div
                    className="px-4 pb-4 text-[13px] leading-[1.6] text-[#474747]"
                    style={{ paddingLeft: "62px" }}
                  >
                    {t(item.body, item.bodyFa)}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </Row>
    </section>
  );
}
