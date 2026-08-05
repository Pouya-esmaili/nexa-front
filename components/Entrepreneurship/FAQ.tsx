"use client";

import { useState } from "react";
import Image from "next/image";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/LazyReveal";
import { useLang } from "@/components/global/LanguageProvider";

const MOBILE_INITIAL_COUNT = 6;

const faqs = [
  {
    q: "What qualifies a business for an international entrepreneurship program?",
    qFa: "چه چیزی یک کسب‌وکار را واجد شرایط برنامه‌ی کارآفرینی بین‌المللی می‌کند؟",
    a: "A qualifying business must be innovative, scalable, and have a clear value proposition with global market potential. The venture must demonstrate the ability to compete in international markets and create measurable economic value in the destination country.",
    aFa: "یک کسب‌وکار واجد شرایط باید نوآورانه، مقیاس‌پذیر و دارای ارزش پیشنهادی روشن با پتانسیل بازار جهانی باشد. این کسب‌وکار باید توانایی رقابت در بازارهای بین‌المللی و ایجاد ارزش اقتصادی قابل‌اندازه‌گیری در کشور مقصد را نشان دهد.",
  },
  {
    q: "Do I need a fully developed product to apply?",
    qFa: "آیا برای درخواست به یک محصول کاملاً توسعه‌یافته نیاز دارم؟",
    a: "Not necessarily. Many programs accept applicants at the MVP or concept stage, provided you can demonstrate innovation potential and a credible business plan. Nexa helps you structure your application to present the strongest possible case at any stage.",
    aFa: "لزوماً نه. بسیاری از برنامه‌ها متقاضیان را در مرحله‌ی MVP یا ایده می‌پذیرند، به‌شرطی که بتوانید پتانسیل نوآوری و یک طرح کسب‌وکار معتبر را نشان دهید. نکسا به شما کمک می‌کند درخواستتان را چنان ساختار دهید که در هر مرحله قوی‌ترین پرونده‌ی ممکن را ارائه کند.",
  },
  {
    q: "Which countries offer the most startup-friendly programs?",
    qFa: "کدام کشورها استارتاپ‌پسندترین برنامه‌ها را ارائه می‌دهند؟",
    a: "Canada, Spain, Finland, Portugal, and the Netherlands are currently the most accessible and well-structured pathways for international founders. Each has unique advantages — from Canada's PR pathway to Spain's fast 20-day approval window.",
    aFa: "در حال حاضر کانادا، اسپانیا، فنلاند، پرتغال و هلند دسترس‌پذیرترین و ساختارمندترین مسیرها برای بنیان‌گذاران بین‌المللی هستند. هرکدام مزایای منحصربه‌فردی دارند — از مسیر اقامت دائم کانادا تا بازه‌ی تأیید سریع ۲۰ روزه‌ی اسپانیا.",
  },
  {
    q: "Can your team help refine my business model before application?",
    qFa: "آیا تیم شما می‌تواند پیش از درخواست به بهبود مدل کسب‌وکارم کمک کند؟",
    a: "Yes — this is one of our core services. We conduct a full business model review, financial feasibility analysis, and market positioning assessment before your application is submitted to any immigration authority.",
    aFa: "بله — این یکی از خدمات اصلی ماست. پیش از ارسال درخواست شما به هر نهاد مهاجرتی، بازبینی کامل مدل کسب‌وکار، تحلیل امکان‌سنجی مالی و ارزیابی جایگاه بازار را انجام می‌دهیم.",
  },
  {
    q: "Is funding mandatory to apply for an entrepreneurship visa?",
    qFa: "آیا برای درخواست ویزای کارآفرینی، تأمین مالی الزامی است؟",
    a: "Requirements vary by country. Some programs require proof of financial resources or a commitment from a designated organization. Nexa will clarify the exact threshold and help you prepare the necessary documentation for your chosen market.",
    aFa: "الزامات از کشوری به کشور دیگر متفاوت است. برخی برنامه‌ها نیازمند اثبات منابع مالی یا تعهد از سوی یک سازمان تعیین‌شده هستند. نکسا آستانه‌ی دقیق را روشن می‌کند و به شما کمک می‌کند مدارک لازم برای بازار انتخابی‌تان را آماده کنید.",
  },
  {
    q: "Can I relocate with my family under these programs?",
    qFa: "آیا می‌توانم تحت این برنامه‌ها با خانواده‌ام جابه‌جا شوم؟",
    a: "Yes. Most entrepreneurship visa programs include dependent family members from the initial application, with full work and study rights in most cases. We advise on family inclusion as part of every application we manage.",
    aFa: "بله. بیشتر برنامه‌های ویزای کارآفرینی، اعضای خانواده‌ی تحت تکفل را از همان درخواست اولیه دربر می‌گیرند و در بیشتر موارد حقوق کامل کار و تحصیل را نیز شامل می‌شوند. در هر درخواستی که مدیریت می‌کنیم، درباره‌ی شمول خانواده مشاوره می‌دهیم.",
  },
  {
    q: "How long does the entrepreneurship immigration process take?",
    qFa: "فرایند مهاجرت کارآفرینی چقدر طول می‌کشد؟",
    a: "Timelines vary. Spain offers a 20-working-day fast-track. Canada's SUV typically takes 12–16 months. Finland and Portugal range from 3–6 months. Nexa maps out the full timeline at the start of every engagement so you can plan accordingly.",
    aFa: "زمان‌بندی‌ها متفاوت‌اند. اسپانیا مسیر سریع ۲۰ روز کاری ارائه می‌دهد. برنامه‌ی SUV کانادا معمولاً ۱۲ تا ۱۶ ماه زمان می‌برد. فنلاند و پرتغال بین ۳ تا ۶ ماه هستند. نکسا در آغاز هر همکاری کل زمان‌بندی را ترسیم می‌کند تا بتوانید بر اساس آن برنامه‌ریزی کنید.",
  },
  {
    q: "Do you assist with company registration in the destination country?",
    qFa: "آیا در ثبت شرکت در کشور مقصد کمک می‌کنید؟",
    a: "Yes. Company registration in the destination country is part of our end-to-end service. We work with local legal partners to handle entity formation, tax registration, and bank account setup so you can operate legally from day one.",
    aFa: "بله. ثبت شرکت در کشور مقصد بخشی از خدمات سرتاسری ماست. با شرکای حقوقی محلی همکاری می‌کنیم تا تشکیل شخصیت حقوقی، ثبت مالیاتی و افتتاح حساب بانکی را انجام دهیم؛ تا از روز نخست بتوانید به‌طور قانونی فعالیت کنید.",
  },
  {
    q: "What happens after the startup is launched?",
    qFa: "پس از راه‌اندازی استارتاپ چه اتفاقی می‌افتد؟",
    a: "Our relationship doesn't end at launch. We provide ongoing advisory, quarterly KPI reviews, renewal support, and investor relations assistance to ensure your venture continues to meet program milestones and grows sustainably.",
    aFa: "رابطه‌ی ما با راه‌اندازی پایان نمی‌یابد. مشاوره‌ی مستمر، بازبینی فصلی شاخص‌های کلیدی عملکرد، پشتیبانی تمدید و کمک در ارتباط با سرمایه‌گذاران را ارائه می‌دهیم تا کسب‌وکار شما همچنان به نقاط عطف برنامه دست یابد و پایدار رشد کند.",
  },
  {
    q: "Is there a risk of rejection, and how do you minimize it?",
    qFa: "آیا خطر رد شدن وجود دارد و چگونه آن را به حداقل می‌رسانید؟",
    a: "Every application carries some risk, but with a 89% success rate, Nexa significantly reduces it. We pre-screen your profile against official criteria, strengthen any weak points in your application, and use certified legal partners to avoid procedural errors.",
    aFa: "هر درخواستی مقداری ریسک دارد، اما نکسا با نرخ موفقیت ۸۹٪ آن را به‌طور چشمگیری کاهش می‌دهد. پروفایل شما را در برابر معیارهای رسمی پیش‌بررسی می‌کنیم، هر نقطه‌ضعف درخواست را تقویت می‌کنیم و برای پرهیز از خطاهای رویه‌ای از شرکای حقوقی دارای گواهی استفاده می‌کنیم.",
  },
];

export default function FAQ() {
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
