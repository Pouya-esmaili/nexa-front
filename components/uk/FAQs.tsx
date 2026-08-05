"use client";

import { useState } from "react";
import Image from "next/image";
import Row from "@/components/global/Row";
import { useLang } from "@/components/global/LanguageProvider";

const MOBILE_INITIAL_COUNT = 6;

const faqs = [
  {
    q: "Is the old UK Start-up Visa still available?",
    qFa: "آیا ویزای استارتاپ قدیمی انگلستان هنوز در دسترس است؟",
    a: "No. The traditional Start-up Visa was formally closed to new applicants. Anyone looking to establish an innovative business in the UK must now apply under the updated Innovator Founder Visa framework.",
    aFa: "نه. ویزای استارتاپ سنتی رسماً برای متقاضیان جدید بسته شد. هر کسی که بخواهد کسب‌وکاری نوآورانه در انگلستان راه‌اندازی کند، اکنون باید تحت چارچوب به‌روزشده‌ی ویزای بنیان‌گذار نوآور درخواست دهد.",
  },
  {
    q: "Can multiple co-founders apply under the same business plan?",
    qFa: "آیا چند هم‌بنیان‌گذار می‌توانند تحت یک طرح کسب‌وکار واحد درخواست دهند؟",
    a: "Yes. Multiple founders can be endorsed for the same qualifying business plan. However, each co-founder must independently apply for endorsement, prove they are an instrumental member of the founding team, and demonstrate their own personal maintenance funds.",
    aFa: "بله. چند بنیان‌گذار می‌توانند برای یک طرح کسب‌وکار واجد شرایط تأیید شوند. با این حال، هر هم‌بنیان‌گذار باید مستقلاً برای تأییدیه درخواست دهد، ثابت کند که عضو کلیدی تیم مؤسس است و منابع مالی شخصی خود را نشان دهد.",
  },
  {
    q: "Do I have to invest exactly £50,000 into the business on day one?",
    qFa: "آیا باید دقیقاً ۵۰٬۰۰۰ پوند از روز نخست در کسب‌وکار سرمایه‌گذاری کنم؟",
    a: "No. There is no automatic upfront minimum capital requirement to get the visa. Your Endorsing Body will examine your financial forecasts to ensure you have realistic access to whatever capital your business plan requires to succeed.",
    aFa: "نه. هیچ الزام حداقلی سرمایه‌ی پیش‌پرداختِ خودکاری برای دریافت ویزا وجود ندارد. نهاد تأییدکننده‌ی شما پیش‌بینی‌های مالی‌تان را بررسی می‌کند تا مطمئن شود به هر میزان سرمایه‌ای که طرح کسب‌وکارتان برای موفقیت نیاز دارد، دسترسی واقع‌بینانه دارید.",
  },
  {
    q: "What happens if my business fails before the 3-year mark?",
    qFa: "اگر کسب‌وکارم پیش از نقطه‌ی ۳ سالگی شکست بخورد چه می‌شود؟",
    a: "Your visa will not be immediately canceled. Your legal residence remains secure as long as your Endorsing Body maintains your endorsement and you attend your mandatory 12-month and 24-month check-ins. If the business fails completely, you have a buffer period to switch to an alternative visa track or pivot your concepts.",
    aFa: "ویزای شما بلافاصله لغو نمی‌شود. تا زمانی که نهاد تأییدکننده تأییدیه‌ی شما را حفظ کند و در بازبینی‌های اجباری ۱۲ و ۲۴ ماهه حاضر شوید، اقامت قانونی‌تان امن می‌ماند. اگر کسب‌وکار به‌طور کامل شکست بخورد، یک دوره‌ی مهلت دارید تا به مسیر ویزای جایگزین سوئیچ کنید یا ایده‌هایتان را تغییر دهید.",
  },
  {
    q: "Can I work for another company while holding this visa?",
    qFa: "آیا می‌توانم هنگام داشتن این ویزا برای شرکت دیگری کار کنم؟",
    a: "Yes, but with restrictions. Your primary role must be managing your startup. You are permitted to take a secondary job, provided the work is highly skilled — classified at RQF Level 3 or higher on the UK regulated qualifications framework.",
    aFa: "بله، اما با محدودیت. نقش اصلی شما باید مدیریت استارتاپتان باشد. مجاز به داشتن شغل ثانویه هستید، به‌شرط آنکه کار بسیار تخصصی باشد — که در چارچوب مدارک تنظیم‌شده‌ی انگلستان در سطح RQF سطح ۳ یا بالاتر طبقه‌بندی شود.",
  },
  {
    q: "Can I switch to the Innovator Founder Visa from inside the UK?",
    qFa: "آیا می‌توانم از داخل انگلستان به ویزای بنیان‌گذار نوآور سوئیچ کنم؟",
    a: "Yes, if you are currently on a valid visa such as a Student or Skilled Worker visa. You cannot switch from inside the UK if you hold a standard Visitor visa or a Short-term Student visa.",
    aFa: "بله، اگر در حال حاضر ویزای معتبری مانند ویزای دانشجویی یا کارگر ماهر دارید. اگر ویزای بازدیدکننده‌ی استاندارد یا ویزای دانشجویی کوتاه‌مدت دارید، نمی‌توانید از داخل انگلستان سوئیچ کنید.",
  },
  {
    q: "What are the main authorized Endorsing Bodies?",
    qFa: "نهادهای تأییدکننده‌ی مجاز اصلی کدام‌اند؟",
    a: "The Home Office has centralized the evaluation through a select group of approved organizations, including UK Endorsing Services, Innovator International, and Envestors Limited. Nexa coordinates directly with these entities to align your pitch.",
    aFa: "وزارت کشور ارزیابی را از طریق گروهی منتخب از سازمان‌های تأییدشده، از جمله UK Endorsing Services، Innovator International و Envestors Limited، متمرکز کرده است. نکسا مستقیماً با این نهادها هماهنگ می‌کند تا ارائه‌ی شما را همسو کند.",
  },
  {
    q: "How long can I spend outside the UK without losing my settlement track?",
    qFa: "چه مدت می‌توانم بدون از دست دادن مسیر اقامتم خارج از انگلستان بمانم؟",
    a: "To successfully apply for ILR at Year 3, you must not have spent more than 180 days outside the UK in any rolling 12-month period.",
    aFa: "برای درخواست موفق اقامت دائم در سال سوم، نباید در هیچ بازه‌ی ۱۲ ماهه‌ی متحرکی بیش از ۱۸۰ روز خارج از انگلستان بوده باشید.",
  },
  {
    q: "What happens during the 12-month and 24-month checkpoint meetings?",
    qFa: "در جلسات بازبینی ۱۲ و ۲۴ ماهه چه اتفاقی می‌افتد؟",
    a: "Your Endorsing Body reviews whether you are still actively managing the business, making reasonable progress against your original business plan, and whether your funding remains legitimate.",
    aFa: "نهاد تأییدکننده‌ی شما بررسی می‌کند که آیا هنوز فعالانه کسب‌وکار را مدیریت می‌کنید، مطابق طرح کسب‌وکار اولیه‌تان پیشرفت معقول دارید و آیا تأمین مالی‌تان همچنان مشروع است.",
  },
  {
    q: "How long does the Home Office take to process the visa?",
    qFa: "وزارت کشور چقدر طول می‌کشد تا ویزا را پردازش کند؟",
    a: "From outside the UK, approximately 3 weeks after biometrics submission. From inside the UK, the standard window is 8 weeks — though priority processing options can shorten this to 1 to 5 days for an additional fee.",
    aFa: "از خارج از انگلستان، حدود ۳ هفته پس از ثبت بیومتریک. از داخل انگلستان، بازه‌ی استاندارد ۸ هفته است — هرچند گزینه‌های پردازش اولویت‌دار می‌توانند این مدت را با هزینه‌ی اضافی به ۱ تا ۵ روز کاهش دهند.",
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
