"use client";

import { useState } from "react";
import Image from "next/image";
import Row from "@/components/global/Row";
import { useLang } from "@/components/global/LanguageProvider";

const MOBILE_INITIAL_COUNT = 6;

const faqs = [
  {
    q: "Do I need a master's degree or minimum capital to qualify?",
    qFa: "آیا برای واجد شرایط شدن به مدرک کارشناسی ارشد یا حداقل سرمایه نیاز دارم؟",
    a: "No. Unlike other French business pathways, the French Tech Visa does not enforce a rigid educational baseline or a set corporate capital injection. The primary focus is the innovative nature of your project and your ability to execute it. Professional experience strengthens your profile, but ecosystem backing is what matters most.",
    aFa: "نه. برخلاف سایر مسیرهای کسب‌وکار فرانسه، ویزای فرنچ‌تک یک پایه‌ی تحصیلی سختگیرانه یا تزریق سرمایه‌ی شرکتی مشخص را الزامی نمی‌کند. تمرکز اصلی بر ماهیت نوآورانه‌ی پروژه و توانایی شما در اجرای آن است. تجربه‌ی حرفه‌ای پروفایل شما را تقویت می‌کند، اما پشتوانه‌ی اکوسیستمی مهم‌ترین عامل است.",
  },
  {
    q: "What qualifies as an \"innovative economic project\"?",
    qFa: "چه چیزی به‌عنوان «پروژه‌ی اقتصادی نوآورانه» واجد شرایط است؟",
    a: "Your business must introduce a novel product, specialized service, proprietary technical process, or unique organizational methodology to the French market. This is verified when an approved French Tech incubator accepts your project, or when two recognized ecosystem stakeholders (venture funds, public labs) provide formal letters of support.",
    aFa: "کسب‌وکار شما باید محصولی نوین، خدمتی تخصصی، فرایند فنی اختصاصی یا روش سازمانی منحصربه‌فردی به بازار فرانسه معرفی کند. این موضوع زمانی تأیید می‌شود که یک شتاب‌دهنده‌ی تأییدشده‌ی فرنچ‌تک پروژه‌ی شما را بپذیرد، یا دو ذی‌نفع شناخته‌شده‌ی اکوسیستم (صندوق‌های سرمایه‌گذاری خطرپذیر، آزمایشگاه‌های دولتی) نامه‌های حمایت رسمی ارائه دهند.",
  },
  {
    q: "Can multiple co-founders apply for the same project?",
    qFa: "آیا چند هم‌بنیان‌گذار می‌توانند برای یک پروژه‌ی واحد درخواست دهند؟",
    a: "Yes. Multiple co-founders can apply under the same startup, but each founder must independently secure a formal endorsement letter and demonstrate the full €21,876.36 financial threshold. Ecosystems generally limit backing to a maximum of 3 co-founders per project.",
    aFa: "بله. چند هم‌بنیان‌گذار می‌توانند تحت یک استارتاپ درخواست دهند، اما هر بنیان‌گذار باید مستقلاً یک نامه‌ی تأییدیه‌ی رسمی بگیرد و کل آستانه‌ی مالی ۲۱٬۸۷۶٫۳۶ یورویی را نشان دهد. اکوسیستم‌ها معمولاً حمایت را به حداکثر ۳ هم‌بنیان‌گذار در هر پروژه محدود می‌کنند.",
  },
  {
    q: "What happens if my startup fails during the 4-year period?",
    qFa: "اگر استارتاپم در دوره‌ی ۴ ساله شکست بخورد چه می‌شود؟",
    a: "Your permit is not immediately revoked. The \"Talent Passport\" framework provides a secure runway for early-stage business realities. Your legal status remains valid until the expiration date on your card. However, to renew at the 4-year mark, you must show continued growth or present a viable new economic project.",
    aFa: "مجوز شما بلافاصله باطل نمی‌شود. چارچوب «پاسپورت استعداد» یک بازه‌ی امن برای واقعیت‌های کسب‌وکار مرحله‌ی اولیه فراهم می‌کند. وضعیت حقوقی شما تا تاریخ انقضای کارت معتبر می‌ماند. با این حال، برای تمدید در نقطه‌ی ۴ سالگی، باید رشد مستمر نشان دهید یا یک پروژه‌ی اقتصادی جدید و قابل‌اجرا ارائه دهید.",
  },
  {
    q: "Can my spouse work freely in France?",
    qFa: "آیا همسرم می‌تواند آزادانه در فرانسه کار کند؟",
    a: "Yes. Your spouse automatically receives a matching \"Talent – Family\" multi-year residence card granting full legal rights to work at any French company, enter the public or private sector, or register their own independent ventures — no separate work permit required.",
    aFa: "بله. همسر شما به‌طور خودکار یک کارت اقامت چندساله‌ی متناظر «استعداد – خانواده» دریافت می‌کند که حقوق کامل قانونی برای کار در هر شرکت فرانسوی، ورود به بخش دولتی یا خصوصی، یا ثبت کسب‌وکارهای مستقل خود را می‌دهد — بدون نیاز به مجوز کار جداگانه.",
  },
  {
    q: "Can I apply if I'm already legally inside France?",
    qFa: "اگر همین حالا به‌طور قانونی داخل فرانسه باشم می‌توانم درخواست دهم؟",
    a: "Yes. If you hold a valid French residency card (student visa, job seeker status, or employment permit), you can submit a Change of Status application directly via the ANEF digital portal — without returning to your home country — provided your current legal stay has not expired.",
    aFa: "بله. اگر کارت اقامت معتبر فرانسه دارید (ویزای دانشجویی، وضعیت جویای کار یا مجوز اشتغال)، می‌توانید درخواست تغییر وضعیت را مستقیماً از طریق پرتال دیجیتال ANEF ثبت کنید — بدون بازگشت به کشور خود — به‌شرط آنکه اقامت قانونی فعلی‌تان منقضی نشده باشد.",
  },
  {
    q: "How long until I can apply for Permanent Residency?",
    qFa: "چه مدت طول می‌کشد تا بتوانم برای اقامت دائم درخواست دهم؟",
    a: "After 5 years of continuous, legal, and tax-compliant residence. The 10-year Permanent Resident Card fully uncouples your legal status from your startup — complete freedom to exit, pivot, or enter any employment. French citizenship via naturalization is also available at 5 years with a B1 French language test and civic interview.",
    aFa: "پس از ۵ سال اقامت پیوسته، قانونی و منطبق بر مقررات مالیاتی. کارت اقامت دائم ۱۰ ساله وضعیت حقوقی شما را به‌طور کامل از استارتاپ مستقل می‌کند — آزادی کامل برای خروج، تغییر مسیر یا ورود به هر شغلی. تابعیت فرانسه از طریق تابعیت‌پذیری نیز پس از ۵ سال با آزمون زبان فرانسه‌ی سطح B1 و مصاحبه‌ی مدنی در دسترس است.",
  },
  {
    q: "What are the government fees?",
    qFa: "هزینه‌های دولتی چقدر است؟",
    a: "€99 for the initial long-stay visa (VLS-TS) at the consulate. €350 for the 4-year physical Talent card (€300 admin fee + €50 stamp duty) via ANEF after arrival. €250 for each subsequent renewal. These fees do not include certified translations, apostilles, incubation costs (~€800/month), or corporate setup fees.",
    aFa: "۹۹ یورو برای ویزای اولیه‌ی اقامت بلندمدت (VLS-TS) در کنسولگری. ۳۵۰ یورو برای کارت فیزیکی استعداد ۴ ساله (۳۰۰ یورو هزینه‌ی اداری + ۵۰ یورو حق تمبر) از طریق ANEF پس از ورود. ۲۵۰ یورو برای هر تمدید بعدی. این هزینه‌ها شامل ترجمه‌های رسمی، آپوستیل، هزینه‌های شتاب‌دهنده (حدود ۸۰۰ یورو در ماه) یا هزینه‌های راه‌اندازی شرکت نمی‌شود.",
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
