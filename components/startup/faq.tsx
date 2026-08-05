"use client";

import { useState } from "react";
import Row from "@/components/global/Row";
import Image from "next/image";
import { useLang } from "@/components/global/LanguageProvider";

const MOBILE_INITIAL_COUNT = 6;

const faqs = [
  { q: "What qualifies a business as a startup under international startup programs?",
    qFa: "چه چیزی یک کسب‌وکار را تحت برنامه‌های استارتاپی بین‌المللی به‌عنوان استارتاپ واجد شرایط می‌کند؟",
    a: "A startup must be an innovative, scalable business with a clear value proposition, strong growth potential, and the ability to compete in global markets. It should be technology-driven or solve a measurable market problem through a replicable model.",
    aFa: "یک استارتاپ باید کسب‌وکاری نوآورانه و مقیاس‌پذیر با ارزش پیشنهادی روشن، پتانسیل رشد بالا و توانایی رقابت در بازارهای جهانی باشد. باید فناوری‌محور باشد یا از طریق مدلی قابل‌تکرار یک مشکل قابل‌اندازه‌گیری بازار را حل کند." },
  { q: "Do I need a fully developed product to apply for a startup program?",
    qFa: "آیا برای درخواست برنامه‌ی استارتاپی به یک محصول کاملاً توسعه‌یافته نیاز دارم؟",
    a: "No. Many programs accept founders at the MVP or even concept stage, as long as you can demonstrate innovation potential, a credible plan, and the ability to create value in the destination country. Nexa helps strengthen your application at any stage.",
    aFa: "نه. بسیاری از برنامه‌ها بنیان‌گذاران را در مرحله‌ی MVP یا حتی ایده می‌پذیرند، به‌شرطی که بتوانید پتانسیل نوآوری، یک طرح معتبر و توانایی ایجاد ارزش در کشور مقصد را نشان دهید. نکسا در هر مرحله به تقویت درخواست شما کمک می‌کند." },
  { q: "Which countries offer the most startup-friendly immigration programs?",
    qFa: "کدام کشورها استارتاپ‌پسندترین برنامه‌های مهاجرتی را ارائه می‌دهند؟",
    a: "Finland, Canada, UK, Netherlands, and France are among the most structured and accessible pathways for international startup founders. Each country offers unique advantages in terms of ecosystem access, processing time, and capital networks.",
    aFa: "فنلاند، کانادا، انگلستان، هلند و فرانسه از ساختارمندترین و دسترس‌پذیرترین مسیرها برای بنیان‌گذاران استارتاپ بین‌المللی هستند. هر کشور مزایای منحصربه‌فردی از نظر دسترسی به اکوسیستم، زمان پردازش و شبکه‌های سرمایه ارائه می‌دهد." },
  { q: "Can your team help refine my business model before application?",
    qFa: "آیا تیم شما می‌تواند پیش از درخواست به بهبود مدل کسب‌وکارم کمک کند؟",
    a: "Yes. Business model refinement is a core part of our pre-application service. We assess your value proposition, revenue model, market fit, and scalability — then help you present the strongest possible case to immigration authorities.",
    aFa: "بله. بهبود مدل کسب‌وکار بخش اصلی خدمات پیش از درخواست ماست. ارزش پیشنهادی، مدل درآمد، تناسب با بازار و مقیاس‌پذیری شما را ارزیابی می‌کنیم — سپس کمک می‌کنیم قوی‌ترین پرونده‌ی ممکن را به نهادهای مهاجرتی ارائه دهید." },
  { q: "Is funding mandatory to apply for a startup visa?",
    qFa: "آیا برای درخواست ویزای استارتاپ، تأمین مالی الزامی است؟",
    a: "Requirements vary. Some programs require proof of funding or a commitment from a designated accelerator or investor. Others focus more on the quality of the business idea. Nexa will map out the exact financial requirements for your target country.",
    aFa: "الزامات متفاوت‌اند. برخی برنامه‌ها نیازمند اثبات تأمین مالی یا تعهد از سوی یک شتاب‌دهنده یا سرمایه‌گذار تعیین‌شده هستند. برخی دیگر بیشتر بر کیفیت ایده‌ی کسب‌وکار تمرکز دارند. نکسا الزامات مالی دقیق کشور هدف شما را ترسیم می‌کند." },
  { q: "How do you support fundraising and capital access?",
    qFa: "چگونه از جذب سرمایه و دسترسی به سرمایه پشتیبانی می‌کنید؟",
    a: "We connect founders to our global network of investors, VCs, and designated organizations. We also help prepare investor-ready materials including pitch decks, financial models, and executive summaries to maximize your fundraising success.",
    aFa: "بنیان‌گذاران را به شبکه‌ی جهانی سرمایه‌گذاران، صندوق‌های سرمایه‌گذاری خطرپذیر و سازمان‌های تعیین‌شده‌ی خود متصل می‌کنیم. همچنین در آماده‌سازی مواد آماده‌ی ارائه به سرمایه‌گذار، شامل ارائه، مدل مالی و خلاصه‌ی اجرایی، کمک می‌کنیم تا موفقیت جذب سرمایه‌ی شما به حداکثر برسد." },
  { q: "Can I relocate with my family under a startup program?",
    qFa: "آیا می‌توانم تحت یک برنامه‌ی استارتاپی با خانواده‌ام جابه‌جا شوم؟",
    a: "Yes. Most startup visa programs include dependent family members — spouse and children — with full rights to study and, in many cases, work. Nexa advises on family inclusion as part of every application we manage.",
    aFa: "بله. بیشتر برنامه‌های ویزای استارتاپ، اعضای خانواده‌ی تحت تکفل — همسر و فرزندان — را با حقوق کامل تحصیل و در بسیاری موارد کار دربر می‌گیرند. نکسا در هر درخواستی که مدیریت می‌کند درباره‌ی شمول خانواده مشاوره می‌دهد." },
  { q: "What industries are best suited for startup programs?",
    qFa: "کدام صنایع برای برنامه‌های استارتاپی مناسب‌ترند؟",
    a: "Tech, SaaS, FinTech, HealthTech, CleanTech, EdTech, and AI-driven businesses are generally the strongest fits. However, any innovative, scalable model with a clear market need can qualify — Nexa will assess your specific sector against each country's criteria.",
    aFa: "کسب‌وکارهای فناوری، SaaS، فین‌تک، هلث‌تک، کلین‌تک، اِدتک و مبتنی بر هوش مصنوعی معمولاً بهترین گزینه‌ها هستند. با این حال، هر مدل نوآورانه و مقیاس‌پذیر با نیاز روشن بازار می‌تواند واجد شرایط باشد — نکسا صنعت خاص شما را در برابر معیارهای هر کشور ارزیابی می‌کند." },
  { q: "How long does the startup immigration process usually take?",
    qFa: "فرایند مهاجرت استارتاپی معمولاً چقدر طول می‌کشد؟",
    a: "Timelines vary by country. Finland typically takes 2–3 months, Canada 12–16 months, UK 3–8 weeks, Netherlands 3–6 months, and France 2–4 months. Nexa provides a full timeline roadmap at the beginning of every engagement.",
    aFa: "زمان‌بندی‌ها بسته به کشور متفاوت‌اند. فنلاند معمولاً ۲ تا ۳ ماه، کانادا ۱۲ تا ۱۶ ماه، انگلستان ۳ تا ۸ هفته، هلند ۳ تا ۶ ماه و فرانسه ۲ تا ۴ ماه. نکسا در آغاز هر همکاری نقشه‌ی راه کامل زمان‌بندی را ارائه می‌دهد." },
  { q: "What happens after the startup is launched?",
    qFa: "پس از راه‌اندازی استارتاپ چه اتفاقی می‌افتد؟",
    a: "Our support continues post-launch. We offer ongoing advisory, KPI tracking, visa renewal support, investor relations management, and access to our global partner network to help your startup hit its growth milestones and scale sustainably.",
    aFa: "پشتیبانی ما پس از راه‌اندازی ادامه می‌یابد. مشاوره‌ی مستمر، پیگیری شاخص‌های کلیدی عملکرد، پشتیبانی تمدید ویزا، مدیریت ارتباط با سرمایه‌گذاران و دسترسی به شبکه‌ی شرکای جهانی خود را ارائه می‌دهیم تا استارتاپ شما به نقاط عطف رشد دست یابد و پایدار مقیاس بگیرد." },
];

export default function StartupFAQ() {
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
