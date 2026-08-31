"use client";

import { useState } from "react";
import Image from "next/image";
import Row from "@/components/global/Row";
import { useLang } from "@/components/global/LanguageProvider";

const MOBILE_INITIAL_COUNT = 6;

const faqs = [
  {
    q: "Is the old UK Start-up Visa still available?",
    qFa: "آیا ویزای قدیمی Start-up انگلستان هنوز قابل دریافت است؟",
    a: "No. The traditional Start-up Visa was formally closed to new applicants. Anyone looking to establish an innovative business in the UK must now apply under the updated Innovator Founder Visa framework.",
    aFa: "خیر. ویزای سنتی Start-up دیگر برای متقاضیان جدید باز نیست. افرادی که قصد راه‌اندازی یک کسب‌وکار نوآورانه در انگلستان را دارند، اکنون باید از مسیر Innovator Founder Visa اقدام کنند.",
  },
  {
    q: "Can multiple co-founders apply under the same business plan?",
    qFa: "آیا چند هم‌بنیان‌گذار می‌توانند بر اساس یک بیزنس‌پلن مشترک اقدام کنند؟",
    a: "Yes. Multiple founders can be endorsed for the same qualifying business plan. However, each co-founder must independently apply for endorsement, prove they are an instrumental member of the founding team, and demonstrate their own personal maintenance funds.",
    aFa: "بله. چند بنیان‌گذار می‌توانند برای یک بیزنس‌پلن واجد شرایط، تأییدیه دریافت کنند. بااین‌حال، هر هم‌بنیان‌گذار باید به‌صورت مستقل برای دریافت endorsement اقدام کند، نقش مؤثر و اساسی خود را در تیم مؤسس نشان دهد و توانایی مالی شخصی مورد نیاز را نیز اثبات کند.",
  },
  {
    q: "Do I have to invest exactly £50,000 into the business on day one?",
    qFa: "آیا باید دقیقاً ۵۰٬۰۰۰ پوند را از روز اول در کسب‌وکار سرمایه‌گذاری کنم؟",
    a: "No. There is no automatic upfront minimum capital requirement to get the visa. Your Endorsing Body will examine your financial forecasts to ensure you have realistic access to whatever capital your business plan requires to succeed.",
    aFa: "خیر. برای دریافت این ویزا حداقل سرمایه‌گذاری اجباری و ثابت ۵۰٬۰۰۰ پوندی وجود ندارد.\n\nبااین‌حال، نهاد تأییدکننده (Endorsing Body) پیش‌بینی‌های مالی شما را بررسی می‌کند تا مطمئن شود به سرمایه‌ای که برای اجرای موفق بیزنس‌پلن نیاز دارید، دسترسی واقع‌بینانه خواهید داشت.",
  },
  {
    q: "What happens if my business fails before the 3-year mark?",
    qFa: "اگر کسب‌وکارم قبل از پایان سال سوم شکست بخورد، چه اتفاقی می‌افتد؟",
    a: "Your visa will not be immediately canceled. Your legal residence remains secure as long as your Endorsing Body maintains your endorsement and you attend your mandatory 12-month and 24-month check-ins. If the business fails completely, you have a buffer period to switch to an alternative visa track or pivot your concepts.",
    aFa: "اقامت شما صرفاً به دلیل شکست کسب‌وکار، بلافاصله لغو نمی‌شود.\n\nوضعیت اقامتی شما تا زمانی که Endorsing Body تأییدیه شما را حفظ کند و در جلسات ارزیابی اجباری ماه‌های ۱۲ و ۲۴ شرکت کنید، معتبر خواهد بود.\n\nاگر کسب‌وکار کاملاً متوقف شود، ممکن است فرصت داشته باشید به یک مسیر اقامتی دیگر منتقل شوید یا مدل کسب‌وکار خود را تغییر دهید.",
  },
  {
    q: "Can I work for another company while holding this visa?",
    qFa: "آیا با داشتن این ویزا می‌توانم برای شرکت دیگری هم کار کنم؟",
    a: "Yes, but with restrictions. Your primary role must be managing your startup. You are permitted to take a secondary job, provided the work is highly skilled — classified at RQF Level 3 or higher on the UK regulated qualifications framework.",
    aFa: "بله، اما با محدودیت.\n\nفعالیت اصلی شما باید مدیریت و توسعه استارتاپ خودتان باشد. در کنار آن، می‌توانید شغل دیگری داشته باشید، مشروط بر اینکه آن شغل در سطح مهارتی RQF Level 3 یا بالاتر در چارچوب صلاحیت‌های شغلی انگلستان قرار داشته باشد.",
  },
  {
    q: "Can I switch to the Innovator Founder Visa from inside the UK?",
    qFa: "آیا می‌توانم از داخل انگلستان به Innovator Founder Visa تغییر وضعیت بدهم؟",
    a: "Yes, if you are currently on a valid visa such as a Student or Skilled Worker visa. You cannot switch from inside the UK if you hold a standard Visitor visa or a Short-term Student visa.",
    aFa: "بله، در صورتی که در حال حاضر با یک ویزای معتبر، مانند Student Visa یا Skilled Worker Visa، در انگلستان حضور داشته باشید، می‌توانید برای تغییر وضعیت اقدام کنید.\n\nبااین‌حال، اگر با Visitor Visa معمولی یا Short-term Student Visa در انگلستان باشید، امکان تغییر وضعیت از داخل کشور وجود ندارد.",
  },
  {
    q: "What are the main authorized Endorsing Bodies?",
    qFa: "نهادهای اصلی مورد تأیید برای صدور endorsement کدام‌اند؟",
    a: "The Home Office has centralized the evaluation through a select group of approved organizations, including UK Endorsing Services, Innovator International, and Envestors Limited. Nexa coordinates directly with these entities to align your pitch.",
    aFa: "ارزیابی پرونده‌ها توسط گروه محدودی از سازمان‌های مورد تأیید Home Office انجام می‌شود که از جمله آن‌ها می‌توان به UK Endorsing Services، Innovator International و Envestors Limited اشاره کرد.\n\nNexa نیز با این نهادها هماهنگ می‌کند تا ساختار بیزنس‌پلن و ارائه شما با الزامات endorsement هم‌راستا باشد.",
  },
  {
    q: "How long can I spend outside the UK without losing my settlement track?",
    qFa: "برای حفظ مسیر اقامت دائم، چه مدت می‌توانم خارج از انگلستان باشم؟",
    a: "To successfully apply for ILR at Year 3, you must not have spent more than 180 days outside the UK in any rolling 12-month period.",
    aFa: "برای اینکه در سال سوم واجد شرایط درخواست اقامت دائم (ILR) شوید، نباید در هیچ دوره ۱۲ماهه بیش از ۱۸۰ روز خارج از انگلستان بوده باشید.",
  },
  {
    q: "What happens during the 12-month and 24-month checkpoint meetings?",
    qFa: "در جلسات ارزیابی ماه‌های ۱۲ و ۲۴ چه مواردی بررسی می‌شود؟",
    a: "Your Endorsing Body reviews whether you are still actively managing the business, making reasonable progress against your original business plan, and whether your funding remains legitimate.",
    aFa: "Endorsing Body میزان پیشرفت واقعی کسب‌وکار شما را ارزیابی می‌کند؛ از جمله:\n\nآیا همچنان به‌صورت فعال کسب‌وکار را مدیریت می‌کنید؟\nآیا در مسیر بیزنس‌پلن اولیه پیشرفت منطقی داشته‌اید؟\nآیا منابع مالی و سرمایه مورد استفاده کسب‌وکار مشروع و قابل‌اثبات هستند؟\n\nهدف این جلسات، بررسی پیشرفت واقعی و ادامه فعالیت شما به‌عنوان بنیان‌گذار است.",
  },
  {
    q: "How long does the Home Office take to process the visa?",
    qFa: "پس از ثبت درخواست، Home Office چقدر برای بررسی ویزا زمان نیاز دارد؟",
    a: "From outside the UK, approximately 3 weeks after biometrics submission. From inside the UK, the standard window is 8 weeks — though priority processing options can shorten this to 1 to 5 days for an additional fee.",
    aFa: "به‌طور معمول، برای درخواست‌هایی که خارج از انگلستان ثبت می‌شوند، پس از انجام بیومتریک، زمان بررسی حدود ۳ هفته است.",
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
