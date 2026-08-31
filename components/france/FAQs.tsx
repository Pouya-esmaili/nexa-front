"use client";

import { useState } from "react";
import Image from "next/image";
import Row from "@/components/global/Row";
import { useLang } from "@/components/global/LanguageProvider";

const MOBILE_INITIAL_COUNT = 6;

const faqs = [
  {
    q: "Do I need a master's degree or minimum capital to qualify?",
    qFa: "آیا برای واجد شرایط بودن به‌عنوان بنیان‌گذار، مدرک کارشناسی ارشد یا سرمایه مشخصی نیاز دارم؟",
    a: "No. Unlike other French business pathways, the French Tech Visa does not enforce a rigid educational baseline or a set corporate capital injection. The primary focus is the innovative nature of your project and your ability to execute it. Professional experience strengthens your profile, but ecosystem backing is what matters most.",
    aFa: "برخلاف برخی مسیرهای متداول راه‌اندازی کسب‌وکار در فرانسه، French Tech Visa for Founders شرطی مانند مدرک کارشناسی ارشد یا حداقل سرمایه مشخص شرکتی، مثلاً ۳۰٬۰۰۰ یورو، تعیین نکرده است.\n\nتمرکز اصلی مقامات فرانسوی بر نوآورانه بودن پروژه و توانایی شخص شما برای اجرای آن است. داشتن سابقه حرفه‌ای مرتبط یا مدارک و سوابق تحصیلی مناسب می‌تواند پرونده را تقویت کند، اما در نهایت اعتبار پروژه و حمایت اکوسیستم نوآوری از آن نقش تعیین‌کننده‌ای دارد.",
  },
  {
    q: "What qualifies as an \"innovative economic project\"?",
    qFa: "چه پروژه‌ای دقیقاً «پروژه اقتصادی نوآورانه» محسوب می‌شود؟",
    a: "Your business must introduce a novel product, specialized service, proprietary technical process, or unique organizational methodology to the French market. This is verified when an approved French Tech incubator accepts your project, or when two recognized ecosystem stakeholders (venture funds, public labs) provide formal letters of support.",
    aFa: "برای اینکه یک کسب‌وکار از نظر قانونی نوآورانه شناخته شود، صرفاً داشتن یک مدل کسب‌وکار معمولی یا کپی‌کردن یک فعالیت موجود در بازار فرانسه کافی نیست.\n\nپروژه باید محصولی جدید، خدماتی تخصصی، یک فرآیند فنی اختصاصی یا یک روش سازمانی منحصربه‌فرد را وارد بازار فرانسه کند.\n\nنوآوری پروژه نیز باید به‌صورت رسمی تأیید شود؛ برای مثال، یک انکوباتور یا شتاب‌دهنده مورد تأیید French Tech پروژه شما را بپذیرد، یا دو نهاد معتبر از اکوسیستم نوآوری، مانند صندوق‌های سرمایه‌گذاری یا مراکز تحقیقاتی دولتی، از پروژه حمایت کنند.",
  },
  {
    q: "How much money do I need to prove my financial means?",
    qFa: "برای اثبات توانایی مالی دقیقاً چه مقدار پول باید در حساب بانکی داشته باشم؟",
    a: "You must demonstrate that your personal and readily available financial resources are at least equivalent to the annual gross French minimum wage (SMIC). Based on the latest financial benchmark, the minimum required amount is €21,876.36. If you plan to move to France with your family, it is recommended to consider approximately €12,000 in additional financial resources for each dependent.",
    aFa: "باید نشان دهید که منابع مالی شخصی و نقدشونده شما حداقل معادل حداقل دستمزد ناخالص سالانه فرانسه (SMIC) است.\n\nبر اساس آخرین به‌روزرسانی شاخص مالی، حداقل مبلغ مورد نیاز ۲۱٬۸۷۶٫۳۶ یورو است.\n\nاگر قصد دارید همراه خانواده به فرانسه مهاجرت کنید، توصیه می‌شود برای هر یک از افراد تحت تکفل، حدود ۱۲٬۰۰۰ یورو منابع مالی اضافی نیز در نظر بگیرید تا توانایی مالی خانواده برای اقامت به‌طور کامل اثبات شود.",
  },
  {
    q: "Can multiple co-founders apply for the same project?",
    qFa: "آیا چند هم‌بنیان‌گذار می‌توانند برای یک استارتاپ اقدام کنند؟",
    a: "Yes. Multiple co-founders can apply under the same startup, but each founder must independently secure a formal endorsement letter and demonstrate the full €21,876.36 financial threshold. Ecosystems generally limit backing to a maximum of 3 co-founders per project.",
    aFa: "بله، اما ارزیابی برای هر متقاضی به‌صورت مستقل انجام می‌شود.\n\nچند هم‌بنیان‌گذار می‌توانند ذیل یک پروژه استارتاپی مشترک اقدام کنند، مشروط بر اینکه هر یک از بنیان‌گذاران به‌طور جداگانه نامه رسمی حمایت از انکوباتور شریک را دریافت کرده و حداقل منابع مالی شخصی مورد نیاز، یعنی ۲۱٬۸۷۶٫۳۶ یورو، را اثبات کنند.\n\nبه‌طور معمول، اکوسیستم‌های حمایتی برای حفظ امکان مدیریت و ارزیابی پرونده‌ها، از یک پروژه حداکثر تا ۳ هم‌بنیان‌گذار را پشتیبانی می‌کنند.",
  },
  {
    q: "What happens if my startup fails during the 4-year period?",
    qFa: "اگر استارتاپم در طول دوره ۴ ساله شکست بخورد، آیا اقامتم لغو می‌شود؟",
    a: "Your permit is not immediately revoked. The \"Talent Passport\" framework provides a secure runway for early-stage business realities. Your legal status remains valid until the expiration date on your card. However, to renew at the 4-year mark, you must show continued growth or present a viable new economic project.",
    aFa: "خیر، صرفاً تعطیل‌شدن یا تغییر مسیر استارتاپ به این معنا نیست که اقامت شما بلافاصله لغو می‌شود.\n\nچارچوب Talent Passport برای ایجاد فرصت کافی جهت توسعه کسب‌وکارهای نوپا طراحی شده و ریسک‌های طبیعی این مرحله را نیز در نظر می‌گیرد. بنابراین وضعیت اقامتی شما تا تاریخ انقضای درج‌شده روی کارت اقامت معتبر خواهد بود.\n\nبااین‌حال، هنگام درخواست تمدید پس از پایان دوره ۴ ساله، باید بتوانید ادامه فعالیت و رشد کسب‌وکار یا وجود یک پروژه اقتصادی جدید و قابل‌اجرا را اثبات کنید.",
  },
  {
    q: "Can my spouse work freely in France?",
    qFa: "آیا همسرم می‌تواند آزادانه در فرانسه کار کند یا به مجوز کار جداگانه نیاز دارد؟",
    a: "Yes. Your spouse automatically receives a matching \"Talent – Family\" multi-year residence card granting full legal rights to work at any French company, enter the public or private sector, or register their own independent ventures — no separate work permit required.",
    aFa: "همسر شما نیازی به دریافت اسپانسر شغلی یا مجوز کار جداگانه ندارد.\n\nدر چارچوب French Tech Visa، همسر به‌صورت خودکار واجد شرایط دریافت کارت اقامت چندساله «Talent – Famille» می‌شود.\n\nاین کارت به او اجازه می‌دهد بدون محدودیت برای شرکت‌های فرانسوی کار کند، در بخش خصوصی یا دولتی مشغول شود یا حتی کسب‌وکار مستقل خود را راه‌اندازی کند.",
  },
  {
    q: "What are the government fees?",
    qFa: "مجموع هزینه‌های دولتی برای یک متقاضی چقدر است؟",
    a: "€99 for the initial long-stay visa (VLS-TS) at the consulate. €350 for the 4-year physical Talent card (€300 admin fee + €50 stamp duty) via ANEF after arrival. €250 for each subsequent renewal. These fees do not include certified translations, apostilles, incubation costs, or corporate setup fees.",
    aFa: "هزینه‌های اداری اصلی که مستقیماً به مراجع دولتی پرداخت می‌شوند، در چند مرحله دریافت می‌شوند:\n\nمرحله دریافت ویزا: ۹۹ یورو برای ویزای بلندمدت اولیه (VLS-TS)\nمرحله صدور کارت اقامت در فرانسه: مجموعاً ۳۵۰ یورو، شامل ۳۰۰ یورو هزینه اداری و ۵۰ یورو حق تمبر\nتمدید اقامت: ۲۵۰ یورو برای تمدیدهای بعدی کارت\n\nتوجه: این مبالغ صرفاً هزینه‌های دولتی هستند و هزینه‌هایی مانند ترجمه رسمی مدارک، آپوستیل و هزینه‌های ثبت و راه‌اندازی شرکت را شامل نمی‌شوند.",
  },
  {
    q: "Can I apply if I'm already legally inside France?",
    qFa: "اگر در حال حاضر به‌صورت قانونی در فرانسه حضور داشته باشم، باز هم می‌توانم برای French Tech Visa اقدام کنم؟",
    a: "Yes. If you hold a valid French residency card (student visa, job seeker status, or employment permit), you can submit a Change of Status application directly via the ANEF digital portal — without returning to your home country — provided your current legal stay has not expired.",
    aFa: "بله. اگر در حال حاضر دارای یک مجوز اقامت معتبر فرانسه، مانند ویزای دانشجویی (Étudiant)، وضعیت جویای کار (RECE) یا مجوز اقامت کاری دیگری هستید، می‌توانید از داخل فرانسه برای تغییر وضعیت اقامت (Change of Status) اقدام کنید.",
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
