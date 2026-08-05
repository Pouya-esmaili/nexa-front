"use client";

import { useState } from "react";
import Image from "next/image";
import Row from "@/components/global/Row";
import { useLang } from "@/components/global/LanguageProvider";

const MOBILE_INITIAL_COUNT = 6;

const faqs = [
  {
    q: "Is the D2 Visa limited only to tech startups?",
    qFa: "آیا ویزای D2 فقط به استارتاپ‌های فناوری محدود است؟",
    a: "No. Unlike the parallel Startup Visa track (strictly managed by IAPMEI for high-tech concepts), the D2 Entrepreneur Visa welcomes all traditional, commercial, and industrial business lines — restaurants, real estate management, import-export firms, tech firms, and freelance consulting businesses are all fully eligible.",
    aFa: "خیر. برخلاف مسیر موازی ویزای استارتاپ (که به‌طور دقیق توسط IAPMEI برای مفاهیم فناوری پیشرفته مدیریت می‌شود)، ویزای کارآفرینی D2 از همه‌ی خطوط کسب‌وکار سنتی، تجاری و صنعتی استقبال می‌کند — رستوران‌ها، مدیریت املاک، شرکت‌های واردات-صادرات، شرکت‌های فناوری و کسب‌وکارهای مشاوره‌ی آزاد همگی کاملاً واجد شرایط هستند.",
  },
  {
    q: "Do I need to inject a large amount of capital to get approved?",
    qFa: "آیا برای تأیید شدن باید مقدار زیادی سرمایه تزریق کنم؟",
    a: "There is no legally mandated minimum investment amount. Your corporate account must hold enough capital to realistically execute your stated business plan. For service-based or consulting firms with minimal overhead, a share capital deposit of €5,000 to €10,000 is widely considered a safe baseline for approval.",
    aFa: "هیچ حداقل مبلغ سرمایه‌گذاری الزامی قانونی وجود ندارد. حساب شرکتی شما باید به‌اندازه‌ی کافی سرمایه داشته باشد تا طرح کسب‌وکار اعلام‌شده‌ی شما را واقع‌بینانه اجرا کند. برای شرکت‌های خدماتی یا مشاوره با هزینه‌ی سربار حداقلی، سپرده‌ی سرمایه‌ی سهام ۵٬۰۰۰ تا ۱۰٬۰۰۰ یورو به‌طور گسترده یک پایه‌ی امن برای تأیید در نظر گرفته می‌شود.",
  },
  {
    q: "Do I need to speak Portuguese to apply?",
    qFa: "آیا برای درخواست باید به زبان پرتغالی صحبت کنم؟",
    a: "No. There is no language requirement for the initial visa or residence card. Your business plan and initial communications can be handled in English. You are only required to pass a basic A2-level Portuguese test if you choose to apply for citizenship at the 5-year mark.",
    aFa: "خیر. هیچ الزام زبانی برای ویزا یا کارت اقامت اولیه وجود ندارد. طرح کسب‌وکار و ارتباطات اولیه‌ی شما می‌تواند به انگلیسی انجام شود. تنها در صورتی که بخواهید در نقطه‌ی ۵ سالگی برای تابعیت درخواست دهید، باید یک آزمون پایه‌ی پرتغالی سطح A2 را بگذرانید.",
  },
  {
    q: "Can I apply for the D2 Visa directly from inside Portugal?",
    qFa: "آیا می‌توانم مستقیماً از داخل پرتغال برای ویزای D2 درخواست دهم؟",
    a: "Yes. An alternative pathway known as an Expression of Interest (EOI) allows entrepreneurs who entered Portugal as tourists to register a business and apply for residency onshore. However, onshore processing lines take significantly longer than the consular route. Nexa advises the consular pathway for maximum predictability.",
    aFa: "بله. یک مسیر جایگزین به نام اعلام علاقه‌مندی (EOI) به کارآفرینانی که به‌عنوان توریست وارد پرتغال شده‌اند اجازه می‌دهد یک کسب‌وکار ثبت کنند و در داخل کشور برای اقامت درخواست دهند. با این حال، صف‌های پردازش داخلی به‌طور قابل‌توجهی طولانی‌تر از مسیر کنسولی هستند. نکسا برای بیشترین پیش‌بینی‌پذیری، مسیر کنسولی را توصیه می‌کند.",
  },
  {
    q: "What happens to my visa if my business fails?",
    qFa: "اگر کسب‌وکارم شکست بخورد چه بر سر ویزای من می‌آید؟",
    a: "Your residence card is not instantly canceled. Your residency remains legally valid until the expiration date on your physical card, giving you an administrative buffer to restructure, pivot your business model, or transition to a different immigration status.",
    aFa: "کارت اقامت شما بلافاصله لغو نمی‌شود. اقامت شما تا تاریخ انقضای روی کارت فیزیکی از نظر قانونی معتبر می‌ماند و به شما یک فرصت اداری می‌دهد تا بازساختاردهی کنید، مدل کسب‌وکار خود را تغییر دهید یا به یک وضعیت مهاجرتی دیگر گذار کنید.",
  },
  {
    q: "Can I work for another Portuguese company while holding a D2 Visa?",
    qFa: "آیا می‌توانم در حین داشتن ویزای D2 برای یک شرکت پرتغالی دیگر کار کنم؟",
    a: "Yes. The D2 residence card grants full authorization to manage your own enterprise and also allows secondary employment or independent freelance contracts within Portugal, provided you continue to fulfill your legal and tax duties for your primary company.",
    aFa: "بله. کارت اقامت D2 مجوز کامل برای مدیریت بنگاه خودتان را اعطا می‌کند و همچنین اشتغال ثانویه یا قراردادهای آزاد مستقل در داخل پرتغال را مجاز می‌داند، مشروط بر اینکه به انجام وظایف قانونی و مالیاتی خود برای شرکت اصلی‌تان ادامه دهید.",
  },
  {
    q: "What are the physical stay requirements?",
    qFa: "الزامات اقامت فیزیکی چیست؟",
    a: "To maintain residency and qualify for renewals, avoid being absent from Portugal for more than 6 consecutive months or 8 alternate months during your visa period, unless absences are tied to justified professional travel for your international business operations.",
    aFa: "برای حفظ اقامت و واجد شرایط بودن برای تمدید، از غیبت بیش از ۶ ماه متوالی یا ۸ ماه متناوب از پرتغال در طول دوره‌ی ویزای خود اجتناب کنید، مگر اینکه غیبت‌ها به سفر حرفه‌ای موجه برای عملیات کسب‌وکار بین‌المللی شما مرتبط باشد.",
  },
  {
    q: "Can multiple co-founders apply under the same company?",
    qFa: "آیا چند هم‌بنیان‌گذار می‌توانند تحت یک شرکت واحد درخواست دهند؟",
    a: "Yes. Multiple partners can apply under the same corporate entity, provided the business plan clearly shows large scale, high capital, and an operational need for multiple directors. Each co-founder must independently demonstrate their own personal maintenance funds of ~€10,000.",
    aFa: "بله. چند شریک می‌توانند تحت یک نهاد شرکتی واحد درخواست دهند، مشروط بر اینکه طرح کسب‌وکار به‌روشنی مقیاس بزرگ، سرمایه‌ی بالا و یک نیاز عملیاتی به چند مدیر را نشان دهد. هر هم‌بنیان‌گذار باید به‌طور مستقل وجوه تأمین معاش شخصی خود معادل ~۱۰٬۰۰۰ یورو را نشان دهد.",
  },
  {
    q: "What is a NIF and why do I need it first?",
    qFa: "NIF چیست و چرا ابتدا به آن نیاز دارم؟",
    a: "The NIF (Número de Identificação Fiscal) is your mandatory Portuguese tax identification number. Required for any legal transaction — opening a bank account, renting property, or incorporating a business. Nexa secures this for you via an authorized fiscal representative before you arrive.",
    aFa: "NIF (Número de Identificação Fiscal) شماره‌ی شناسایی مالیاتی الزامی پرتغالی شماست. برای هر معامله‌ی قانونی لازم است — باز کردن حساب بانکی، اجاره‌ی ملک یا ثبت کسب‌وکار. نکسا این را از طریق یک نماینده‌ی مالی مجاز پیش از ورود شما تأمین می‌کند.",
  },
  {
    q: "How long does the entire D2 process take?",
    qFa: "کل فرایند D2 چقدر طول می‌کشد؟",
    a: "On average, the consular route takes 3 to 5 months — 4 weeks for business planning and company formation, followed by a 60-to-90-day processing window at the Portuguese Consulate to evaluate your file and issue your entry visa.",
    aFa: "به‌طور میانگین، مسیر کنسولی ۳ تا ۵ ماه طول می‌کشد — ۴ هفته برای برنامه‌ریزی کسب‌وکار و تشکیل شرکت، و سپس یک بازه‌ی پردازش ۶۰ تا ۹۰ روزه در کنسولگری پرتغال برای ارزیابی پرونده و صدور ویزای ورود شما.",
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
