"use client";

import { useState } from "react";
import Row from "@/components/global/Row";
import Image from "next/image";
import { useLang } from "@/components/global/LanguageProvider";

const MOBILE_INITIAL_COUNT = 6;

const faqs = [
  { q: "What is the minimum investment required for Turkish citizenship?", qFa: "حداقل سرمایه‌گذاری لازم برای تابعیت ترکیه چقدر است؟", a: "Foreign investors may qualify for Turkish citizenship through qualifying real estate with a minimum value of USD 600,000 — established by the Turkish government. The property must be held for at least 3 years.", aFa: "سرمایه‌گذاران خارجی می‌توانند از طریق ملک واجد شرایط با حداقل ارزش ۶۰۰٬۰۰۰ دلار آمریکا — که توسط دولت ترکیه تعیین شده — واجد شرایط تابعیت ترکیه شوند. ملک باید حداقل ۳ سال نگهداری شود." },
  { q: "How long does the citizenship process take?", qFa: "فرایند تابعیت چقدر طول می‌کشد؟", a: "In most cases the process completes within approximately 6 to 12 months, depending on document preparation, government processing times and the structure of the investment.", aFa: "در بیشتر موارد این فرایند ظرف تقریباً ۶ تا ۱۲ ماه تکمیل می‌شود، بسته به آماده‌سازی اسناد، زمان‌های پردازش دولتی و ساختار سرمایه‌گذاری." },
  { q: "Can my family be included in the application?", qFa: "آیا خانواده‌ام می‌توانند در درخواست گنجانده شوند؟", a: "Yes. Applicants may generally include qualifying family members — typically a spouse and dependent children — allowing families to secure international mobility together.", aFa: "بله. متقاضیان معمولاً می‌توانند اعضای واجد شرایط خانواده — معمولاً همسر و فرزندان تحت تکفل — را شامل کنند و به خانواده‌ها اجازه دهند تحرک بین‌المللی را با هم تأمین کنند." },
  { q: "What types of properties qualify for the CBI program?", qFa: "چه نوع املاکی واجد شرایط برنامه‌ی CBI هستند؟", a: "Residential apartments, commercial units, villas, government-approved development projects, and multiple qualifying properties combined under one application structure.", aFa: "آپارتمان‌های مسکونی، واحدهای تجاری، ویلاها، پروژه‌های توسعه‌ی مورد تأیید دولت، و چند ملک واجد شرایط ترکیب‌شده تحت یک ساختار درخواست واحد." },
  { q: "Can I get residency without applying for citizenship?", qFa: "آیا می‌توانم بدون درخواست تابعیت اقامت بگیرم؟", a: "Yes. Qualifying property ownership may provide eligibility for renewable Turkish residence permits, which is suitable for entrepreneurs, families, and remote business owners who do not require a passport.", aFa: "بله. مالکیت ملک واجد شرایط ممکن است واجد شرایط بودن برای مجوزهای اقامت قابل‌تمدید ترکیه را فراهم کند که برای کارآفرینان، خانواده‌ها و صاحبان کسب‌وکار از راه دور که به پاسپورت نیاز ندارند مناسب است." },
  { q: "Do I need to live in Türkiye to keep my citizenship?", qFa: "آیا برای حفظ تابعیت خود باید در ترکیه زندگی کنم؟", a: "No physical residency requirement applies under the CBI program. Citizenship is retained provided the investment requirements and government compliance rules are met.", aFa: "هیچ الزام اقامت فیزیکی تحت برنامه‌ی CBI اعمال نمی‌شود. تابعیت مشروط بر برآورده شدن الزامات سرمایه‌گذاری و قواعد انطباق دولتی حفظ می‌شود." },
  { q: "Can the property generate rental income during the holding period?", qFa: "آیا ملک می‌تواند در طول دوره‌ی نگهداری درآمد اجاره ایجاد کند؟", a: "Yes. The property may be rented out during the 3-year holding period — Türkiye's tourism economy and major cities offer strong rental demand.", aFa: "بله. ملک می‌تواند در طول دوره‌ی نگهداری ۳ ساله اجاره داده شود — اقتصاد گردشگری و شهرهای بزرگ ترکیه تقاضای اجاره‌ی قوی ارائه می‌دهند." },
  { q: "Who is the local real estate partner Nexa works with?", qFa: "شریک محلی املاکی که نکسا با آن همکاری می‌کند کیست؟", a: "Nexa operates in strategic partnership with Önaylar Group — an established real estate and construction company based in Izmir with operations across Türkiye.", aFa: "نکسا در مشارکت راهبردی با Önaylar Group فعالیت می‌کند — یک شرکت املاک و ساخت‌وساز تثبیت‌شده مستقر در ازمیر با عملیات در سراسر ترکیه." },
];

export default function FAQs() {
  const { t } = useLang();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const toggle = (i: number) => setActiveIndex(activeIndex === i ? null : i);
  const visibleMobileFaqs = showAll ? faqs : faqs.slice(0, MOBILE_INITIAL_COUNT);

  return (
    <div className="py-12 md:py-20">
      {/* Mobile */}
      <div className="md:hidden px-5">
        <h2 className="text-2xl font-bold text-center mb-8">{t("FAQs", "پرسش‌های پرتکرار")}</h2>
        <div className="flex flex-col gap-3 rounded-2xl p-5" style={{ background: "#F6F6F6" }}>
          {visibleMobileFaqs.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                onClick={() => toggle(index)}
                className="cursor-pointer bg-white rounded-xl p-4 transition-all duration-300"
                style={{
                  boxShadow: isActive ? "0px 4px 8px 0px #8F27FF40" : "0px 4px 4px 0px #0000001A",
                  borderStyle: "solid",
                  borderWidth: "1px 1px 1px 5px",
                  borderColor: isActive ? "#8F27FF" : "#D2D2D2",
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xs font-medium text-black leading-snug">{t(item.q, item.qFa)}</h3>
                  <Image
                    src={isActive ? "/images/Entrepreneurship/close.svg" : "/images/Entrepreneurship/open.svg"}
                    alt={isActive ? "Close" : "Open"}
                    width={20}
                    height={20}
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                  />
                </div>
                {isActive && <p className="mt-3 text-xs text-gray-600 leading-relaxed">{t(item.a, item.aFa)}</p>}
              </div>
            );
          })}

          {!showAll && faqs.length > MOBILE_INITIAL_COUNT && (
            <button
              onClick={() => setShowAll(true)}
              className="mt-2 flex items-center justify-center gap-2 text-sm font-semibold text-[#8F27FF]"
            >
              {t("Show More", "نمایش بیشتر")}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8F27FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          )}

          {showAll && (
            <button
              onClick={() => setShowAll(false)}
              className="mt-2 flex items-center justify-center gap-2 text-sm font-semibold text-[#8F27FF]"
            >
              {t("Show Less", "نمایش کمتر")}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8F27FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <Row>
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">{t("FAQs", "پرسش‌های پرتکرار")}</h2>
          <div
            className="mx-auto mt-10 grid grid-cols-2 gap-6 items-start"
            style={{ background: "#F6F6F6", borderRadius: "20px", padding: "48px", width: "100%" }}
          >
            {faqs.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={index}
                  onClick={() => toggle(index)}
                  className="cursor-pointer bg-white rounded-xl p-6 transition-all duration-300"
                  style={{
                    boxShadow: isActive ? "0px 4px 8px 0px #8F27FF40" : "0px 4px 4px 0px #0000001A",
                    borderStyle: "solid",
                    borderWidth: "1px 1px 1px 6px",
                    borderColor: isActive ? "#8F27FF" : "#D2D2D2",
                  }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-sm font-medium text-black leading-snug">{t(item.q, item.qFa)}</h3>
                    <Image
                      src={isActive ? "/images/Entrepreneurship/close.svg" : "/images/Entrepreneurship/open.svg"}
                      alt={isActive ? "Close" : "Open"}
                      width={24}
                      height={24}
                      className="w-6 h-6 flex-shrink-0"
                    />
                  </div>
                  {isActive && (
                    <p className="mt-3 text-sm text-gray-600 leading-relaxed">{t(item.a, item.aFa)}</p>
                  )}
                </div>
              );
            })}
          </div>
        </Row>
      </div>
    </div>
  );
}
