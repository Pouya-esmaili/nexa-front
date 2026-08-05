"use client";

import { useState } from "react";
import Row from "@/components/global/Row";
import { useLang } from "@/components/global/LanguageProvider";

const MOBILE_INITIAL_COUNT = 6;

const faqs = [
  {
    q: "Can I invest in French real estate to qualify for the Talent Passport?",
    qFa: "آیا می‌توانم برای واجد شرایط شدن برای پاسپورت استعداد در املاک فرانسه سرمایه‌گذاری کنم؟",
    a: "No. France does not grant residency for passive residential real estate acquisitions. The €300,000 investment must be deployed into a commercial, industrial, artisanal, or agricultural enterprise via a direct equity injection, reinvested earnings, or inter-corporate loans that support job creation.",
    aFa: "خیر. فرانسه برای تملک املاک مسکونی منفعل اقامت اعطا نمی‌کند. سرمایه‌گذاری ۳۰۰٬۰۰۰ یورویی باید از طریق تزریق مستقیم سهام، درآمد سرمایه‌گذاری‌مجدد، یا وام‌های بین‌شرکتی که از ایجاد اشتغال حمایت می‌کنند، در یک بنگاه تجاری، صنعتی، صنایع‌دستی یا کشاورزی به‌کار گرفته شود.",
  },
  {
    q: "Do my family members have the right to work when accompanying me?",
    qFa: "آیا اعضای خانواده‌ام هنگام همراهی با من حق کار دارند؟",
    a: "Yes. Your spouse is automatically issued a Talent (Family) residence permit granting full, unrestricted access to the French labor market — corporate employment, independent businesses, or management of your investment entity — without requiring separate work authorizations.",
    aFa: "بله. برای همسر شما به‌طور خودکار یک مجوز اقامت استعداد (خانواده) صادر می‌شود که دسترسی کامل و نامحدود به بازار کار فرانسه — اشتغال شرکتی، کسب‌وکارهای مستقل، یا مدیریت نهاد سرمایه‌گذاری شما — را بدون نیاز به مجوزهای کار جداگانه اعطا می‌کند.",
  },
  {
    q: "What happens if my business fails to create the planned jobs within 4 years?",
    qFa: "اگر کسب‌وکارم نتواند مشاغل برنامه‌ریزی‌شده را ظرف ۴ سال ایجاد کند چه می‌شود؟",
    a: "French immigration authorities review operational metrics during your multi-year card renewal. If market realities alter your hiring pipeline, you must demonstrate the €300K capital remains fully deployed and provide a viable updated restructuring plan. Nexa provides ongoing compliance audits to help pivot your corporate structure before renewal windows open.",
    aFa: "مقامات مهاجرتی فرانسه در طول تمدید کارت چندساله‌ی شما شاخص‌های عملیاتی را بررسی می‌کنند. اگر واقعیت‌های بازار خط لوله‌ی استخدام شما را تغییر دهند، باید نشان دهید که سرمایه‌ی ۳۰۰ هزار یورویی همچنان به‌طور کامل به‌کار گرفته شده و یک طرح بازساختاردهی به‌روزشده‌ی قابل‌اجرا ارائه دهید. نکسا حسابرسی‌های انطباق مستمر ارائه می‌دهد تا به تغییر مسیر ساختار شرکتی شما پیش از باز شدن بازه‌های تمدید کمک کند.",
  },
  {
    q: "Are there any language requirements during the initial visa application?",
    qFa: "آیا در طول درخواست اولیه‌ی ویزا الزامات زبانی وجود دارد؟",
    a: "No. The initial long-stay visa and 4-year temporary residence card do not require a French language proficiency test. Language verification is entirely deferred until the Year 5 milestone, when applying for Permanent Residency or full French Citizenship — requiring a B1 proficiency level.",
    aFa: "خیر. ویزای اولیه‌ی اقامت بلندمدت و کارت اقامت موقت ۴ ساله به آزمون تسلط به زبان فرانسه نیاز ندارند. راستی‌آزمایی زبان به‌طور کامل تا نقطه‌ی سال ۵ به تعویق می‌افتد، هنگام درخواست اقامت دائم یا تابعیت کامل فرانسه — که نیازمند سطح تسلط B1 است.",
  },
  {
    q: "How does Nexa structure the business relocation lifecycle?",
    qFa: "نکسا چرخه‌ی عمر جابه‌جایی کسب‌وکار را چگونه ساختاردهی می‌کند؟",
    a: "Nexa's advisory ecosystem bridges complex corporate financial modeling with precise immigration defense. We review your corporate architecture, validate the transfer of cross-border capital, and deliver audit-proof corporate documentation that aligns directly with French ministerial expectations — from DRIEETS business plan vetting through to multi-year renewal compliance.",
    aFa: "اکوسیستم مشاوره‌ی نکسا مدل‌سازی مالی شرکتی پیچیده را با دفاع مهاجرتی دقیق پیوند می‌دهد. ما معماری شرکتی شما را بررسی می‌کنیم، انتقال سرمایه‌ی فرامرزی را اعتبارسنجی می‌کنیم و مستندات شرکتی مقاوم در برابر حسابرسی ارائه می‌دهیم که مستقیماً با انتظارات وزارتی فرانسه همسو است — از بررسی طرح کسب‌وکار DRIEETS تا انطباق تمدید چندساله.",
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
                  <img
                    src={isActive ? "/images/Entrepreneurship/close.svg" : "/images/Entrepreneurship/open.svg"}
                    alt={isActive ? "Close" : "Open"}
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
                    <img
                      src={isActive ? "/images/Entrepreneurship/close.svg" : "/images/Entrepreneurship/open.svg"}
                      alt={isActive ? "Close" : "Open"}
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
