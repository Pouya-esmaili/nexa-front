"use client";

import { useState } from "react";
import Image from "next/image";
import Row from "@/components/global/Row";
import { useLang } from "@/components/global/LanguageProvider";

const MOBILE_INITIAL_COUNT = 6;

const faqs = [
  {
    q: "Can I apply as a solo founder?",
    qFa: "آیا می‌توانم به‌عنوان بنیان‌گذار منفرد درخواست دهم؟",
    a: "No. The Finnish Startup Permit requires a founding team of at least two co-founders with complementary skills, both planning to move to Finland. Solo entrepreneurs may consider the general \"Entrepreneur Residence Permit,\" which has different criteria.",
    aFa: "نه. مجوز استارتاپ فنلاند نیازمند تیمی مؤسس متشکل از حداقل دو هم‌بنیان‌گذار با مهارت‌های مکمل است که هر دو قصد مهاجرت به فنلاند دارند. کارآفرینان منفرد می‌توانند «مجوز اقامت کارآفرینی» عمومی را که معیارهای متفاوتی دارد در نظر بگیرند.",
  },
  {
    q: "What does \"innovative business idea\" mean exactly?",
    qFa: "«ایده‌ی کسب‌وکار نوآورانه» دقیقاً یعنی چه؟",
    a: "Business Finland defines it as a clear competitive advantage in international markets — not a replica of a local service. It must demonstrate potential for rapid global growth, typically aiming for millions of euros in international revenue within a few years.",
    aFa: "Business Finland آن را به‌عنوان مزیت رقابتی روشن در بازارهای بین‌المللی تعریف می‌کند — نه کپی یک خدمت محلی. باید پتانسیل رشد جهانی سریع را نشان دهد و معمولاً ظرف چند سال میلیون‌ها یورو درآمد بین‌المللی را هدف بگیرد.",
  },
  {
    q: "Do I need a registered company before applying?",
    qFa: "آیا پیش از درخواست به یک شرکت ثبت‌شده نیاز دارم؟",
    a: "No. You don't need a Finnish company to apply for the Eligibility Statement from Business Finland. Many founders incorporate their Limited Liability Company (Oy) after arriving in Finland. However, your business plan must be concrete and ready.",
    aFa: "نه. برای درخواست بیانیه‌ی واجد بودن از Business Finland به شرکت فنلاندی نیاز ندارید. بسیاری از بنیان‌گذاران شرکت با مسئولیت محدود (Oy) خود را پس از ورود به فنلاند ثبت می‌کنند. با این حال، طرح کسب‌وکار شما باید مشخص و آماده باشد.",
  },
  {
    q: "How long does the full approval process take?",
    qFa: "کل فرایند تأیید چقدر طول می‌کشد؟",
    a: "Step 1 (Business Finland Eligibility Statement) takes 30–60 days. Step 2 onward (the 14-day Fast Track) processes your permit in just two weeks. Total: plan for a 2-to-3-month journey from first submission to moving.",
    aFa: "گام ۱ (بیانیه‌ی واجد بودن Business Finland) ۳۰ تا ۶۰ روز طول می‌کشد. از گام ۲ به بعد (مسیر سریع ۱۴ روزه) مجوز شما را تنها در دو هفته پردازش می‌کند. در مجموع: برای مسیری ۲ تا ۳ ماهه از نخستین ثبت تا جابه‌جایی برنامه‌ریزی کنید.",
  },
  {
    q: "Can I work for another company while running my startup?",
    qFa: "آیا می‌توانم هنگام اداره‌ی استارتاپم برای شرکت دیگری کار کنم؟",
    a: "Yes. While your main activity must be your startup, the permit legally allows you to take other employment in Finland to support yourself financially. This is one of the unique flexibilities of the Finnish Startup Permit.",
    aFa: "بله. در حالی که فعالیت اصلی شما باید استارتاپتان باشد، این مجوز به‌طور قانونی به شما اجازه می‌دهد برای تأمین مالی خود در فنلاند شغل دیگری بگیرید. این یکی از انعطاف‌پذیری‌های منحصربه‌فرد مجوز استارتاپ فنلاند است.",
  },
  {
    q: "What happens if my startup fails after I move?",
    qFa: "اگر پس از جابه‌جایی، استارتاپم شکست بخورد چه می‌شود؟",
    a: "Finland understands startups are high-risk. Your current permit remains valid until expiration. For an Extended Permit, you'll need to show you're pivoting to a new startup or have another legal ground for residence (employment or a different business).",
    aFa: "فنلاند می‌داند استارتاپ‌ها پرریسک‌اند. مجوز فعلی شما تا انقضا معتبر می‌ماند. برای مجوز تمدیدشده باید نشان دهید که به یک استارتاپ جدید تغییر مسیر می‌دهید یا مبنای قانونی دیگری برای اقامت دارید (اشتغال یا کسب‌وکاری متفاوت).",
  },
  {
    q: "Does my family get the same rights?",
    qFa: "آیا خانواده‌ام همان حقوق را دریافت می‌کند؟",
    a: "Yes. Spouse and children receive permits for the same duration. Your spouse receives full, unrestricted access to the Finnish labor market — work for any company, in any field, or even start their own separate business.",
    aFa: "بله. همسر و فرزندان مجوزهایی با همان مدت دریافت می‌کنند. همسر شما دسترسی کامل و نامحدود به بازار کار فنلاند دارد — کار در هر شرکت، در هر زمینه، یا حتی راه‌اندازی کسب‌وکار مستقل خود.",
  },
  {
    q: "When can I get a Finnish Passport?",
    qFa: "چه زمانی می‌توانم پاسپورت فنلاند بگیرم؟",
    a: "Typically eligible after 5–6 years of continuous legal residence in Finland, plus passing a basic language test in Finnish or Swedish. A Finnish passport grants full EU rights — live and work in any of the 27 EU member states.",
    aFa: "معمولاً پس از ۵ تا ۶ سال اقامت قانونی پیوسته در فنلاند و قبولی در یک آزمون پایه‌ی زبان فنلاندی یا سوئدی واجد شرایط می‌شوید. پاسپورت فنلاند حقوق کامل اتحادیه اروپا را می‌دهد — زندگی و کار در هر یک از ۲۷ کشور عضو اتحادیه اروپا.",
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
        <h2 className="text-2xl font-bold text-center mb-8">{t("Frequently Asked Questions", "سؤالات متداول")}</h2>
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
                    alt={isActive ? t("Close", "بستن") : t("Open", "باز کردن")}
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
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">{t("Frequently Asked Questions", "سؤالات متداول")}</h2>
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
                      alt={isActive ? t("Close", "بستن") : t("Open", "باز کردن")}
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
