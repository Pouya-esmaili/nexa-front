"use client";

import { useState } from "react";
import Image from "next/image";
import Row from "@/components/global/Row";
import { useLang } from "@/components/global/LanguageProvider";

const MOBILE_INITIAL_COUNT = 6;

const faqs = [
  {
    q: "Is there a Dutch language requirement to get the initial Startup Visa?",
    qFa: "آیا برای گرفتن ویزای اولیه‌ی استارتاپ نیاز به زبان هلندی است؟",
    a: "No. The visa application, business plan, pitching sessions, and day-to-day operations can be conducted entirely in English. You only need to learn Dutch later if you choose to settle permanently and apply for citizenship at the 5-year mark.",
    aFa: "خیر. درخواست ویزا، طرح کسب‌وکار، جلسات ارائه و عملیات روزمره می‌توانند به‌طور کامل به زبان انگلیسی انجام شوند. تنها در صورتی باید بعداً هلندی یاد بگیرید که بخواهید به‌طور دائم ساکن شوید و در نقطه‌ی ۵ سالگی برای تابعیت درخواست دهید.",
  },
  {
    q: "Can multiple co-founders apply under the same business plan?",
    qFa: "آیا چند هم‌بنیان‌گذار می‌توانند تحت یک طرح کسب‌وکار واحد درخواست دهند؟",
    a: "Yes, up to 3 co-founders can use the same business plan. However, each must submit an individual application, hold an active management role, and independently prove they have at least €21,000 in personal financial capital.",
    aFa: "بله، تا ۳ هم‌بنیان‌گذار می‌توانند از یک طرح کسب‌وکار واحد استفاده کنند. با این حال، هرکدام باید یک درخواست جداگانه ثبت کنند، نقش مدیریتی فعال داشته باشند و به‌طور مستقل اثبات کنند که حداقل ۲۱٬۰۰۰ یورو سرمایه‌ی مالی شخصی دارند.",
  },
  {
    q: "What happens if my startup fails during the visa year?",
    qFa: "اگر استارتاپ من در طول سال ویزا شکست بخورد چه می‌شود؟",
    a: "Your visa will not be immediately cancelled. It remains legally valid until the expiration date on your residence card, giving you an administrative buffer to wind down operations, pivot, or adjust your legal status.",
    aFa: "ویزای شما بلافاصله لغو نمی‌شود. تا تاریخ انقضای روی کارت اقامت شما به‌طور قانونی معتبر می‌ماند و به شما یک فرصت اداری می‌دهد تا عملیات را جمع کنید، تغییر مسیر دهید یا وضعیت قانونی خود را تنظیم کنید.",
  },
  {
    q: "Can I take a side job while running my startup?",
    qFa: "آیا می‌توانم در حین اداره‌ی استارتاپم یک شغل جانبی داشته باشم؟",
    a: "Yes. You are permitted to take secondary employment or freelance work alongside your startup. However, your innovative venture must remain your primary focus, and any external employer must comply with standard Dutch labor rules.",
    aFa: "بله. مجاز هستید در کنار استارتاپتان اشتغال ثانویه یا کار آزاد داشته باشید. با این حال، کسب‌وکار نوآورانه‌ی شما باید تمرکز اصلی‌تان باقی بماند و هر کارفرمای بیرونی باید از قوانین استاندارد کار هلند پیروی کند.",
  },
  {
    q: "Can my facilitator finance my required personal living costs?",
    qFa: "آیا تسهیل‌گر من می‌تواند هزینه‌های زندگی شخصی موردنیازم را تأمین مالی کند؟",
    a: "Yes. Your facilitator can choose to cover your monthly living expenses directly. This arrangement must be explicitly written into your signed facilitator agreement, specifying that the capital is fully guaranteed for your entire one-year stay — eliminating the need to show personal bank savings of €21,000.",
    aFa: "بله. تسهیل‌گر شما می‌تواند انتخاب کند که مستقیماً هزینه‌های ماهانه‌ی زندگی شما را پوشش دهد. این ترتیب باید صراحتاً در توافق‌نامه‌ی امضاشده‌ی تسهیل‌گر نوشته شود و مشخص کند که سرمایه برای کل اقامت یک‌ساله‌ی شما به‌طور کامل تضمین شده است — که نیاز به نشان دادن پس‌انداز بانکی شخصی ۲۱٬۰۰۰ یورویی را از بین می‌برد.",
  },
  {
    q: "Can my spouse work freely in the Netherlands?",
    qFa: "آیا همسرم می‌تواند آزادانه در هلند کار کند؟",
    a: "Yes. Your spouse or registered partner receives an automatic matching residence permit with complete, unrestricted access to the Dutch labor market. They do not need a corporate sponsor or separate work permit — they can accept any job offer or build their own freelance business immediately.",
    aFa: "بله. همسر یا شریک ثبت‌شده‌ی شما به‌طور خودکار یک مجوز اقامت متناظر با دسترسی کامل و نامحدود به بازار کار هلند دریافت می‌کند. آن‌ها به حامی شرکتی یا مجوز کار جداگانه نیاز ندارند — می‌توانند بلافاصله هر پیشنهاد شغلی را بپذیرند یا کسب‌وکار آزاد خود را بسازند.",
  },
  {
    q: "Can I transition directly from the Startup Visa to Permanent Residency?",
    qFa: "آیا می‌توانم مستقیماً از ویزای استارتاپ به اقامت دائم گذار کنم؟",
    a: "Not immediately. The Startup Visa is a non-extendable 1-year bridge. You must first transition into a Self-Employed Permit at year-end. After completing 5 continuous legal years of residency in total, you become eligible for Permanent Residency or Dutch Citizenship.",
    aFa: "بلافاصله نه. ویزای استارتاپ یک پل یک‌ساله‌ی غیرقابل‌تمدید است. ابتدا باید در پایان سال به یک مجوز خوداشتغالی گذار کنید. پس از تکمیل مجموعاً ۵ سال اقامت قانونی پیوسته، واجد شرایط اقامت دائم یا تابعیت هلند می‌شوید.",
  },
  {
    q: "How long does the entire process take?",
    qFa: "کل فرایند چقدر طول می‌کشد؟",
    a: "On average 4 to 5 months: 4 to 6 weeks to secure a facilitator and prepare your files, followed by the IND's official decision window of up to 90 days.",
    aFa: "به‌طور میانگین ۴ تا ۵ ماه: ۴ تا ۶ هفته برای گرفتن تسهیل‌گر و آماده‌سازی پرونده‌هایتان، و سپس بازه‌ی تصمیم‌گیری رسمی IND تا ۹۰ روز.",
  },
];

export default function FAQs() {
  const { t } = useLang();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const visibleMobileFaqs = showAll ? faqs : faqs.slice(0, MOBILE_INITIAL_COUNT);

  return (
    <div className="py-12 md:py-20">
      {/* Mobile */}
      <div className="md:hidden px-5">
        <h2 className="text-2xl font-bold text-center mb-8">{t("Frequently Asked Questions", "پرسش‌های پرتکرار")}</h2>
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
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">{t("Frequently Asked Questions", "پرسش‌های پرتکرار")}</h2>
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
