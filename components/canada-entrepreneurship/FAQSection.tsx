"use client";

import { useState } from "react";
import Image from "next/image";
import Row from "@/components/global/Row";
import { useLang } from "@/components/global/LanguageProvider";

const MOBILE_INITIAL_COUNT = 6;

const faqs = [
  {
    q: "What province best fits my business and settlement goals?",
    qFa: "کدام استان با اهداف کسب‌وکار و استقرار من بهترین تناسب را دارد؟",
    a: "It depends on sector, capital, and lifestyle. Ontario and BC suit technology and scalable ventures; Saskatchewan, Manitoba, and Atlantic provinces favor lower-investment regional businesses. Investment thresholds typically range from CAD 100,000–600,000.",
    aFa: "به حوزه، سرمایه و سبک زندگی بستگی دارد. انتاریو و بریتیش کلمبیا برای فناوری و کسب‌وکارهای مقیاس‌پذیر مناسب‌اند؛ ساسکاچوان، مانیتوبا و استان‌های آتلانتیک، کسب‌وکارهای منطقه‌ای با سرمایه‌گذاری کمتر را ترجیح می‌دهند. آستانه‌های سرمایه‌گذاری معمولاً بین ۱۰۰٬۰۰۰ تا ۶۰۰٬۰۰۰ دلار کانادا است.",
  },
  {
    q: "Does Nexa participate in mergers and acquisitions (M&A)?",
    qFa: "آیا نکسا در ادغام و تملک (M&A) مشارکت می‌کند؟",
    a: "Yes, Nexa actively supports M&A activity — from target identification and due diligence to deal structuring and post-merger integration planning for businesses entering Canadian markets.",
    aFa: "بله، نکسا فعالانه از فعالیت M&A پشتیبانی می‌کند — از شناسایی هدف و بررسی دقیق تا ساختاردهی معامله و برنامه‌ریزی ادغام پس از ادغام برای کسب‌وکارهای واردشونده به بازارهای کانادا.",
  },
  {
    q: "How much investment am I expected to commit?",
    qFa: "انتظار می‌رود چه مقدار سرمایه‌گذاری تعهد کنم؟",
    a: "Minimum investment varies by province and city tier — generally ranging from CAD 100,000 in select regional programs to CAD 600,000+ in major metropolitan streams.",
    aFa: "حداقل سرمایه‌گذاری بسته به استان و سطح شهر متفاوت است — عموماً از ۱۰۰٬۰۰۰ دلار کانادا در برنامه‌های منطقه‌ای منتخب تا بیش از ۶۰۰٬۰۰۰ دلار کانادا در جریان‌های کلان‌شهری اصلی.",
  },
  {
    q: "How does Nexa evaluate potential investments?",
    qFa: "نکسا سرمایه‌گذاری‌های بالقوه را چگونه ارزیابی می‌کند؟",
    a: "Nexa evaluates businesses based on scalability, sector alignment with provincial priorities, management experience, financial viability, and long-term growth potential in the Canadian market.",
    aFa: "نکسا کسب‌وکارها را بر اساس مقیاس‌پذیری، همسویی حوزه با اولویت‌های استانی، تجربه‌ی مدیریتی، امکان‌پذیری مالی و پتانسیل رشد بلندمدت در بازار کانادا ارزیابی می‌کند.",
  },
  {
    q: "Do I need existing revenue, or can early-stage startups qualify?",
    qFa: "آیا به درآمد موجود نیاز دارم، یا استارتاپ‌های مرحله‌ی اولیه می‌توانند واجد شرایط شوند؟",
    a: "Most entrepreneur PNP streams do not require existing revenue. Your plan must demonstrate financial viability, market demand, and realistic projections.",
    aFa: "بیشتر جریان‌های PNP کارآفرینی به درآمد موجود نیاز ندارند. طرح شما باید امکان‌پذیری مالی، تقاضای بازار و پیش‌بینی‌های واقع‌بینانه را نشان دهد.",
  },
  {
    q: "Do we work with founders who are raising their first round?",
    qFa: "آیا با بنیان‌گذارانی که نخستین دور جذب سرمایه‌ی خود را انجام می‌دهند کار می‌کنیم؟",
    a: "Yes. Nexa works with first-time founders raising capital, helping structure investment readiness, pitch materials, and introductions to the Canadian venture ecosystem.",
    aFa: "بله. نکسا با بنیان‌گذاران تازه‌کار در حال جذب سرمایه کار می‌کند و به ساختاردهی آمادگی سرمایه‌گذاری، مواد ارائه و معرفی به اکوسیستم سرمایه‌گذاری کانادا کمک می‌کند.",
  },
  {
    q: "What jobs must I create and by when?",
    qFa: "چه مشاغلی باید ایجاد کنم و تا چه زمانی؟",
    a: "Most programs require at least 1 full-time job for a Canadian citizen or PR. Major urban streams may require 2+. Creation is typically expected within 12–20 months.",
    aFa: "بیشتر برنامه‌ها حداقل ۱ شغل تمام‌وقت برای یک شهروند کانادایی یا مقیم دائم را الزامی می‌دانند. جریان‌های شهری اصلی ممکن است ۲ شغل یا بیشتر را الزامی کنند. ایجاد معمولاً ظرف ۱۲ تا ۲۰ ماه انتظار می‌رود.",
  },
  {
    q: "How long does the investment evaluation process take?",
    qFa: "فرایند ارزیابی سرمایه‌گذاری چقدر طول می‌کشد؟",
    a: "Initial evaluation typically takes 2–4 weeks. Full due diligence and decision may extend to 6–10 weeks depending on complexity and documentation readiness.",
    aFa: "ارزیابی اولیه معمولاً ۲ تا ۴ هفته طول می‌کشد. بررسی دقیق کامل و تصمیم ممکن است بسته به پیچیدگی و آمادگی مستندات تا ۶ تا ۱۰ هفته به طول انجامد.",
  },
  {
    q: "How do I align my plan with provincial economic priorities?",
    qFa: "چگونه طرح خود را با اولویت‌های اقتصادی استانی همسو کنم؟",
    a: "Each province publishes sector priorities — tech, agriculture, manufacturing, tourism, clean energy. Your venture must show local economic impact and long-term sustainability.",
    aFa: "هر استان اولویت‌های حوزه‌ای را منتشر می‌کند — فناوری، کشاورزی، تولید، گردشگری، انرژی پاک. کسب‌وکار شما باید تأثیر اقتصادی محلی و پایداری بلندمدت را نشان دهد.",
  },
  {
    q: "Can we help with international market expansion?",
    qFa: "آیا می‌توانیم در گسترش بازار بین‌المللی کمک کنیم؟",
    a: "Yes. Nexa's international network spans multiple markets, offering market research, local partner introductions, and cross-border growth strategy support.",
    aFa: "بله. شبکه‌ی بین‌المللی نکسا در چندین بازار گسترده است و تحقیقات بازار، معرفی شرکای محلی و پشتیبانی راهبرد رشد فرامرزی ارائه می‌دهد.",
  },
  {
    q: "How long does it take to obtain Permanent Residence?",
    qFa: "دریافت اقامت دائم چقدر طول می‌کشد؟",
    a: "From initial application to PR approval, timelines typically range between 24 and 36 months — including the 12–20 month business establishment period plus federal processing after nomination.",
    aFa: "از درخواست اولیه تا تأیید اقامت دائم، زمان‌بندی‌ها معمولاً بین ۲۴ تا ۳۶ ماه است — شامل دوره‌ی تأسیس کسب‌وکار ۱۲ تا ۲۰ ماهه به‌علاوه‌ی پردازش فدرال پس از نامزدی.",
  },
  {
    q: "How can I submit my startup or project to Nexa?",
    qFa: "چگونه می‌توانم استارتاپ یا پروژه‌ی خود را به نکسا ارسال کنم؟",
    a: "Use the contact form below to share details about your venture. Our team reviews all submissions and responds within 48 business hours with next steps.",
    aFa: "از فرم تماس زیر برای اشتراک‌گذاری جزئیات کسب‌وکار خود استفاده کنید. تیم ما همه‌ی ارسال‌ها را بررسی می‌کند و ظرف ۴۸ ساعت کاری با گام‌های بعدی پاسخ می‌دهد.",
  },
];

export default function FAQSection() {
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
        <h2 className="text-2xl font-bold text-center mb-8">{t("FAQs", "پرسش‌های پرتکرار")}</h2>
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
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">{t("FAQs", "پرسش‌های پرتکرار")}</h2>
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
