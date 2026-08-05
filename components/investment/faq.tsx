"use client";

import { useState } from "react";
import Image from "next/image";
import Row from "@/components/global/Row";
import { useLang } from "@/components/global/LanguageProvider";

const MOBILE_INITIAL_COUNT = 6;

const faqs = [
  {
    q: "What type of fields does Nexa invest in?",
    qFa: "نکسا در چه حوزه‌هایی سرمایه‌گذاری می‌کند؟",
    a: "Nexa invests in high-potential startups and growth-stage companies across real estate, energy & renewables, information technology, innovation-driven technology, and healthcare & medical sectors. We focus on scalable, impact-driven, and globally expandable businesses.",
    aFa: "نکسا در استارتاپ‌های پرپتانسیل و شرکت‌های مرحله‌ی رشد در بخش‌های املاک، انرژی و تجدیدپذیرها، فناوری اطلاعات، فناوری نوآوری‌محور و سلامت و پزشکی سرمایه‌گذاری می‌کند. تمرکز ما بر کسب‌وکارهای مقیاس‌پذیر، اثرگذار و قابل‌گسترش در سطح جهانی است.",
  },
  {
    q: "At what stage does Nexa typically invest?",
    qFa: "نکسا معمولاً در چه مرحله‌ای سرمایه‌گذاری می‌کند؟",
    a: "We support ventures from growth-stage startups to expansion-phase companies. Our approach depends on scalability, market readiness, leadership strength, and long-term growth potential.",
    aFa: "ما از استارتاپ‌های مرحله‌ی رشد تا شرکت‌های در فاز گسترش را پشتیبانی می‌کنیم. رویکرد ما به مقیاس‌پذیری، آمادگی بازار، قدرت رهبری و پتانسیل رشد بلندمدت بستگی دارد.",
  },
  {
    q: "Does Nexa only provide capital?",
    qFa: "آیا نکسا فقط سرمایه تأمین می‌کند؟",
    a: "No. Beyond capital investment, we provide strategic advisory, capital structuring, international business development, risk management, and access to global networks to accelerate sustainable growth.",
    aFa: "نه. فراتر از سرمایه‌گذاری، ما مشاوره‌ی استراتژیک، ساختاردهی سرمایه، توسعه‌ی کسب‌وکار بین‌المللی، مدیریت ریسک و دسترسی به شبکه‌های جهانی را برای شتاب‌بخشی به رشد پایدار ارائه می‌دهیم.",
  },
  {
    q: "What makes Nexa different from traditional investment firms?",
    qFa: "چه چیزی نکسا را از شرکت‌های سرمایه‌گذاری سنتی متمایز می‌کند؟",
    a: "Nexa operates as both an investor and a strategic partner. We combine financial investment with operational expertise, global market access, and long-term business development support — going far beyond a traditional capital provider.",
    aFa: "نکسا هم به‌عنوان سرمایه‌گذار و هم شریک استراتژیک عمل می‌کند. ما سرمایه‌گذاری مالی را با تخصص عملیاتی، دسترسی به بازار جهانی و پشتیبانی بلندمدت توسعه‌ی کسب‌وکار ترکیب می‌کنیم — بسیار فراتر از یک تأمین‌کننده‌ی سرمایه‌ی سنتی.",
  },
  {
    q: "Does Nexa invest internationally?",
    qFa: "آیا نکسا به‌صورت بین‌المللی سرمایه‌گذاری می‌کند؟",
    a: "Yes. Nexa is a global investor. We support cross-border expansion and international market entry strategies for businesses seeking global growth across all our focus geographies.",
    aFa: "بله. نکسا یک سرمایه‌گذار جهانی است. ما از گسترش فرامرزی و استراتژی‌های ورود به بازار بین‌المللی برای کسب‌وکارهایی که در تمام حوزه‌های جغرافیایی موردتمرکز ما به دنبال رشد جهانی هستند پشتیبانی می‌کنیم.",
  },
  {
    q: "Does Nexa participate in mergers and acquisitions?",
    qFa: "آیا نکسا در ادغام‌ها و تملیک‌ها مشارکت می‌کند؟",
    a: "Yes. We provide M&A advisory and participate in strategic acquisitions, mergers, and consolidation opportunities that enhance long-term enterprise value.",
    aFa: "بله. ما مشاوره‌ی ادغام و تملیک ارائه می‌دهیم و در تملیک‌ها، ادغام‌ها و فرصت‌های تجمیع استراتژیک که ارزش بلندمدت بنگاه را افزایش می‌دهند مشارکت می‌کنیم.",
  },
  {
    q: "How does Nexa evaluate potential investments?",
    qFa: "نکسا سرمایه‌گذاری‌های بالقوه را چگونه ارزیابی می‌کند؟",
    a: "We begin with in-depth market research to understand demand dynamics, growth potential, and competitive landscape. Our evaluation extends to the business model, scalability, management team, financial structure, risk profile, and long-term value creation potential.",
    aFa: "ما با پژوهش عمیق بازار آغاز می‌کنیم تا پویایی تقاضا، پتانسیل رشد و چشم‌انداز رقابتی را درک کنیم. ارزیابی ما به مدل کسب‌وکار، مقیاس‌پذیری، تیم مدیریت، ساختار مالی، پروفایل ریسک و پتانسیل ارزش‌آفرینی بلندمدت گسترش می‌یابد.",
  },
  {
    q: "Do you work with founders raising their first round?",
    qFa: "آیا با بنیان‌گذارانی که نخستین دور جذب سرمایه‌شان را انجام می‌دهند کار می‌کنید؟",
    a: "Yes. We support visionary founders from growth-stages, particularly those with strong innovation, clear market demand, and scalable models — even if it is their first institutional raise.",
    aFa: "بله. ما از بنیان‌گذاران آینده‌نگر در مراحل رشد پشتیبانی می‌کنیم، به‌ویژه آن‌هایی که نوآوری قوی، تقاضای روشن بازار و مدل‌های مقیاس‌پذیر دارند — حتی اگر این نخستین جذب سرمایه‌ی نهادی آن‌ها باشد.",
  },
  {
    q: "How long does the investment evaluation process take?",
    qFa: "فرایند ارزیابی سرمایه‌گذاری چقدر طول می‌کشد؟",
    a: "In most cases, the evaluation process takes a maximum of 40 days, depending on project complexity and due diligence requirements. Our goal is to maintain an efficient and transparent review process.",
    aFa: "در بیشتر موارد، فرایند ارزیابی بسته به پیچیدگی پروژه و الزامات بررسی موشکافانه، حداکثر ۴۰ روز طول می‌کشد. هدف ما حفظ فرایند بازبینی کارآمد و شفاف است.",
  },
  {
    q: "What level of involvement does Nexa have after investing?",
    qFa: "نکسا پس از سرمایه‌گذاری چه میزان مشارکت دارد؟",
    a: "Nexa maintains an active strategic partnership approach after investing, offering ongoing guidance in growth strategy, risk management, capital optimization, and market positioning throughout the investment lifecycle.",
    aFa: "نکسا پس از سرمایه‌گذاری رویکرد مشارکت استراتژیک فعال را حفظ می‌کند و در سراسر چرخه‌ی عمر سرمایه‌گذاری، راهنمایی مستمر در استراتژی رشد، مدیریت ریسک، بهینه‌سازی سرمایه و جایگاه‌یابی بازار ارائه می‌دهد.",
  },
  {
    q: "Can Nexa help with international market expansion?",
    qFa: "آیا نکسا می‌تواند در گسترش به بازارهای بین‌المللی کمک کند؟",
    a: "Absolutely. Through our global network and international business development expertise, we help companies enter new markets, establish strategic partnerships, and scale globally across all focus sectors.",
    aFa: "قطعاً. از طریق شبکه‌ی جهانی و تخصص توسعه‌ی کسب‌وکار بین‌المللی خود، به شرکت‌ها کمک می‌کنیم وارد بازارهای جدید شوند، مشارکت‌های استراتژیک برقرار کنند و در تمام بخش‌های موردتمرکز، در سطح جهانی مقیاس بگیرند.",
  },
  {
    q: "How can I submit my project to Nexa?",
    qFa: "چگونه می‌توانم پروژه‌ام را به نکسا ارائه دهم؟",
    a: "Entrepreneurs and project owners can submit a business proposal or executive summary through our Apply for Funding form. Our team will review and respond after an initial assessment — typically within 5 business days.",
    aFa: "کارآفرینان و صاحبان پروژه می‌توانند طرح کسب‌وکار یا خلاصه‌ی اجرایی خود را از طریق فرم «درخواست سرمایه» ما ارسال کنند. تیم ما پس از ارزیابی اولیه بررسی و پاسخ خواهد داد — معمولاً ظرف ۵ روز کاری.",
  },
];

export default function InvestmentFAQ() {
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
        <h2 className="text-2xl font-bold text-center mb-8">{t("FAQ", "سؤالات متداول")}</h2>
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
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">{t("FAQ", "سؤالات متداول")}</h2>
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
