"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/LazyReveal";
import { useState } from "react";
import { useLang } from "@/components/global/LanguageProvider";

const items = [
  {
    dot: "01",
    label: "Permanent Residency",
    labelFa: "اقامت دائم",
    year: "Day One",
    yearFa: "روز نخست",
    desc: "PR status is granted from landing — completely decoupled from startup performance. If your venture fails, your PR standing is not revoked.",
    descFa: "وضعیت اقامت دائم از هنگام ورود اعطا می‌شود — کاملاً مستقل از عملکرد استارتاپ. اگر کسب‌وکار شما شکست بخورد، جایگاه اقامت دائم شما لغو نمی‌شود.",
    body: "PR status is granted from landing. Completely decoupled from startup performance — if your venture fails after landing, there are no clawback provisions on your PR status based on corporate performance.",
    bodyFa: "وضعیت اقامت دائم از هنگام ورود اعطا می‌شود. کاملاً مستقل از عملکرد استارتاپ — اگر کسب‌وکار شما پس از ورود شکست بخورد، هیچ مقرره‌ی بازپس‌گیری بر اساس عملکرد شرکتی روی وضعیت اقامت دائم شما وجود ندارد.",
  },
  {
    dot: "02",
    label: "730-Day Obligation",
    labelFa: "تعهد ۷۳۰ روزه",
    year: "Per 5 Years",
    yearFa: "در هر ۵ سال",
    desc: "To maintain PR status, spend a minimum of 730 days physically inside Canada within any rolling 5-year period. No further business evaluations required.",
    descFa: "برای حفظ وضعیت اقامت دائم، حداقل ۷۳۰ روز را به‌طور فیزیکی در داخل کانادا در هر بازه‌ی ۵ ساله‌ی متحرک بگذرانید. هیچ ارزیابی کسب‌وکار بیشتری لازم نیست.",
    body: "To maintain your PR standing, you must spend a minimum of 730 days physically inside Canada within any rolling 5-year period. No business performance evaluations or revenue requirements apply after landing.",
    bodyFa: "برای حفظ جایگاه اقامت دائم خود، باید حداقل ۷۳۰ روز را به‌طور فیزیکی در داخل کانادا در هر بازه‌ی ۵ ساله‌ی متحرک بگذرانید. هیچ ارزیابی عملکرد کسب‌وکار یا الزام درآمدی پس از ورود اعمال نمی‌شود.",
  },
  {
    dot: "03",
    label: "Citizenship Eligible",
    labelFa: "واجد شرایط تابعیت",
    year: "Year 3",
    yearFa: "سال ۳",
    desc: "After 1,095 days (3 years) of physical presence within the 5 years before your application, plus 3 years of Canadian tax filing and passing the citizenship exam.",
    descFa: "پس از ۱٬۰۹۵ روز (۳ سال) حضور فیزیکی در ۵ سال پیش از درخواست، به‌علاوه‌ی ۳ سال ثبت مالیات کانادا و قبولی در آزمون تابعیت.",
    body: "After 1,095 days (3 full years) of physical presence in Canada within the 5 years preceding your citizenship application, plus filing Canadian income tax returns for at least 3 tax years and passing the written citizenship exam.",
    bodyFa: "پس از ۱٬۰۹۵ روز (۳ سال کامل) حضور فیزیکی در کانادا در ۵ سال پیش از درخواست تابعیت شما، به‌علاوه‌ی ثبت اظهارنامه‌های مالیات بر درآمد کانادا برای حداقل ۳ سال مالیاتی و قبولی در آزمون کتبی تابعیت.",
  },
  {
    dot: "04",
    label: "Canadian Passport",
    labelFa: "پاسپورت کانادا",
    year: "185+ Countries",
    yearFa: "بیش از ۱۸۵ کشور",
    desc: "Visa-free access to over 185 countries. Canada fully recognizes dual citizenship — your original nationality is retained. Language: CLB 4.",
    descFa: "دسترسی بدون ویزا به بیش از ۱۸۵ کشور. کانادا تابعیت دوگانه را به‌طور کامل به رسمیت می‌شناسد — تابعیت اصلی شما حفظ می‌شود. زبان: CLB 4.",
    body: "One of the world's premium passports with visa-free access to over 185 countries. Canada fully recognizes dual citizenship — you retain your original nationality. The language requirement (CLB 4) is automatically satisfied by your initial SUV language entry transcripts.",
    bodyFa: "یکی از پاسپورت‌های ممتاز جهان با دسترسی بدون ویزا به بیش از ۱۸۵ کشور. کانادا تابعیت دوگانه را به‌طور کامل به رسمیت می‌شناسد — شما تابعیت اصلی خود را حفظ می‌کنید. الزام زبانی (CLB 4) به‌طور خودکار با ریزنمرات زبان ورودی اولیه‌ی SUV شما برآورده می‌شود.",
  },
];

export default function Pathway() {
  const { t } = useLang();
  const [open, setOpen] = useState<number>(0);
  const [activeCircle, setActiveCircle] = useState<number>(0);

  return (
    <section className="py-20 md:py-24 bg-[#F7F6F9]">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center mb-14">
            {t("Long-Term Horizons", "افق‌های بلندمدت")}
          </h2>
        </Reveal>

        {/* Desktop track */}
        <Reveal variant="up" delay={60}>
          <div className="hidden md:grid grid-cols-4 relative mb-10">
            {/* Connecting line */}
            <div className="absolute top-7 left-[10%] right-[10%] h-[2px]"
              style={{ background: "linear-gradient(90deg, #8F27FF, rgba(143,39,255,0.2))" }} />

            {items.map((item, i) => (
              <div key={item.dot} className="flex flex-col items-center text-center relative z-10 px-3">
                <div
                  onClick={() => setActiveCircle(i)}
                  className="w-14 h-14 rounded-full flex items-center justify-center text-[14px] font-bold mb-4 transition-all duration-300 hover:scale-[1.08] cursor-pointer"
                  style={{
                    border: "2.5px solid #8F27FF",
                    boxShadow: "0 0 0 6px #FAF6FF",
                    background: activeCircle === i ? "#8F27FF" : "#fff",
                    color: activeCircle === i ? "#fff" : "#8F27FF",
                  }}>
                  {item.dot}
                </div>
                <div className="text-[15px] font-semibold text-black mb-1">{t(item.label, item.labelFa)}</div>
                <div className="text-[12px] font-semibold text-[#8F27FF] bg-[#FAF6FF] px-[10px] py-[3px] rounded-full">{t(item.year, item.yearFa)}</div>
              </div>
            ))}
          </div>

          {/* Desktop detail cards */}
          <div className="hidden md:grid grid-cols-4 gap-4">
            {items.map((item) => (
              <div key={item.dot} className="bg-white border border-[#E2E2E2] rounded-[14px] p-[20px_22px] transition-all duration-200 hover:border-[rgba(143,39,255,0.18)] hover:bg-[#FAF6FF]">
                <h5 className="text-[14px] font-semibold text-black mb-2">{t(item.label, item.labelFa)}</h5>
                <p className="text-[13px] text-[#929292] leading-[1.6] m-0">{t(item.desc, item.descFa)}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Mobile accordion */}
        <Reveal variant="up" delay={60}>
          <div className="md:hidden flex flex-col border border-[#E2E2E2] rounded-[20px] overflow-hidden">
            {items.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.dot} className={`${i < items.length - 1 ? "border-b border-[#E2E2E2]" : ""}`}>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className={`w-full flex items-center gap-3.5 px-5 py-[18px] text-left transition-colors duration-200 ${isOpen ? "bg-[#FAF6FF]" : "bg-white"}`}
                  >
                    <div className={`w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center text-[12px] font-bold transition-all ${isOpen ? "bg-[#8F27FF] text-white" : "bg-white text-[#8F27FF]"}`}
                      style={{ border: "2px solid #8F27FF", boxShadow: "0 0 0 4px #FAF6FF" }}>
                      {item.dot}
                    </div>
                    <div className="flex-1">
                      <div className="text-[14px] font-semibold text-black mb-0.5">{t(item.label, item.labelFa)}</div>
                      <span className="text-[11px] font-semibold text-[#8F27FF] bg-[#FAF6FF] px-2 py-0.5 rounded-full">{t(item.year, item.yearFa)}</span>
                    </div>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={isOpen ? "#8F27FF" : "#929292"}
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="flex-shrink-0 transition-transform duration-200"
                      style={{ width: 18, height: 18, transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-[18px] pl-[70px] text-[13.5px] text-[#474747] leading-[1.6]">
                      {t(item.body, item.bodyFa)}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>
      </Row>
    </section>
  );
}
