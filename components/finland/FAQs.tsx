"use client";

import { useState } from "react";
import Image from "next/image";
import Row from "@/components/global/Row";
import { useLang } from "@/components/global/LanguageProvider";

const MOBILE_INITIAL_COUNT = 6;

const faqs = [
  {
    q: "Can I apply as a solo founder?",
    qFa: "آیا به‌عنوان یک بنیان‌گذار، به صورت انفرادی می‌توانم برای مجوز استارتاپ اقدام کنم؟",
    a: "No. The Finnish Startup Permit requires a founding team of at least two co-founders with complementary skills, both planning to move to Finland. Solo entrepreneurs may consider the general \"Entrepreneur Residence Permit,\" which has different criteria.",
    aFa: "خیر. برای واجد شرایط بودن در Startup Permit رسمی فنلاند، تیم مؤسس باید حداقل دو هم‌بنیان‌گذار داشته باشد که مهارت‌ها و تخصص‌های مکملی دارند و هر دو قصد مهاجرت به فنلاند را دارند.\n\nاگر به‌صورت انفرادی فعالیت می‌کنید، می‌توانید مجوز اقامت کارآفرینی (Entrepreneur Residence Permit) را بررسی کنید که شرایط و فرآیند ارزیابی متفاوتی دارد.",
  },
  {
    q: "What does \"innovative business idea\" mean exactly?",
    qFa: "منظور از «ایده کسب‌وکار نوآورانه» دقیقاً چیست؟",
    a: "Business Finland defines it as a clear competitive advantage in international markets — not a replica of a local service. It must demonstrate potential for rapid global growth, typically aiming for millions of euros in international revenue within a few years.",
    aFa: "از نگاه Business Finland، یک ایده نوآورانه باید مزیت رقابتی مشخصی در بازارهای بین‌المللی ایجاد کند. صرفاً ارائه نسخه‌ای مشابه از یک کسب‌وکار محلی، مانند یک آژانس دیجیتال مارکتینگ معمولی یا فروشگاه محلی، کافی نیست.\n\nایده باید ظرفیت رشد سریع در بازارهای جهانی را نشان دهد و بتواند طی چند سال به درآمد قابل‌توجهی از بازارهای بین‌المللی دست پیدا کند.",
  },
  {
    q: "Do I need a registered company before applying?",
    qFa: "آیا قبل از درخواست باید شرکت خود را ثبت کرده باشم؟",
    a: "No. You don't need a Finnish company to apply for the Eligibility Statement from Business Finland. Many founders incorporate their Limited Liability Company (Oy) after arriving in Finland. However, your business plan must be concrete and ready.",
    aFa: "خیر. برای دریافت Eligibility Statement از Business Finland، نیازی نیست از قبل یک شرکت فنلاندی داشته باشید.\n\nبسیاری از بنیان‌گذاران پس از دریافت مجوز اقامت و ورود به فنلاند، شرکت خود را در قالب شرکت با مسئولیت محدود (Oy) به ثبت می‌رسانند. بااین‌حال، در زمان درخواست باید بیزنس‌پلن شما آماده، دقیق و قابل‌اجرا باشد.",
  },
  {
    q: "How long does the full approval process take?",
    qFa: "فرآیند دریافت تأییدیه چقدر طول می‌کشد؟",
    a: "Step 1 (Business Finland Eligibility Statement) takes 30–60 days. Step 2 onward (the 14-day Fast Track) processes your permit in just two weeks. Total: plan for a 2-to-3-month journey from first submission to moving.",
    aFa: "با استفاده از سرویس Fast-Track چهارده‌روزه، تصمیم‌گیری درباره مجوز اقامت می‌تواند تنها طی دو هفته انجام شود. البته این مربوط به مرحله دوم فرآیند است.\n\nمرحله اول، یعنی دریافت Eligibility Statement از Business Finland، معمولاً حدود ۳۰ تا ۶۰ روز زمان می‌برد.\n\nدر مجموع، بهتر است برای کل مسیر از اولین درخواست تا آماده‌شدن برای مهاجرت، حدود ۲ تا ۳ ماه زمان در نظر بگیرید.",
  },
  {
    q: "Can I work for another company while running my startup?",
    qFa: "آیا هم‌زمان با اداره استارتاپم می‌توانم برای شرکت دیگری هم کار کنم؟",
    a: "Yes. While your main activity must be your startup, the permit legally allows you to take other employment in Finland to support yourself financially. This is one of the unique flexibilities of the Finnish Startup Permit.",
    aFa: "بله. یکی از مزایای مهم Startup Permit فنلاند انعطاف‌پذیری آن است.\n\nاگرچه فعالیت اصلی و دلیل اقامت شما باید راه‌اندازی و توسعه استارتاپتان باشد، این مجوز به شما اجازه می‌دهد برای تأمین هزینه‌های زندگی، در کنار فعالیت استارتاپی خود برای شرکت دیگری نیز کار کنید.",
  },
  {
    q: "What happens if my startup fails after I move?",
    qFa: "اگر بعد از مهاجرت استارتاپم شکست بخورد چه اتفاقی می‌افتد؟",
    a: "Finland understands startups are high-risk. Your current permit remains valid until expiration. For an Extended Permit, you'll need to show you're pivoting to a new startup or have another legal ground for residence (employment or a different business).",
    aFa: "فنلاند می‌داند که راه‌اندازی استارتاپ ذاتاً با ریسک همراه است. اگر شرکت شما در دو سال نخست با شکست مواجه شود، مجوز اقامت فعلی شما تا پایان اعتبار خود معتبر باقی می‌ماند.\n\nاما برای دریافت مجوز اقامت تمدیدی، باید نشان دهید که یا در حال تغییر مسیر و راه‌اندازی یک ایده جدید هستید، یا شرایط لازم برای دریافت اقامت از طریق دیگری، مانند اشتغال یا فعالیت تجاری دیگر، را به دست آورده‌اید.",
  },
  {
    q: "Does my family get the same rights?",
    qFa: "آیا خانواده من هم از حقوق مشابهی برخوردار خواهند بود؟",
    a: "Yes. Spouse and children receive permits for the same duration. Your spouse receives full, unrestricted access to the Finnish labor market — work for any company, in any field, or even start their own separate business.",
    aFa: "بله. همسر و فرزندان شما می‌توانند برای مجوز اقامت با همان مدت اعتبار مجوز شما اقدام کنند.\n\nهمسر شما نیز حق کار کامل و بدون محدودیت در بازار کار فنلاند خواهد داشت؛ یعنی می‌تواند برای هر شرکت و در هر حوزه‌ای کار کند یا حتی کسب‌وکار مستقلی برای خود راه‌اندازی کند.",
  },
  {
    q: "When can I get a Finnish Passport?",
    qFa: "چه زمانی می‌توانم پاسپورت فنلاند را دریافت کنم؟",
    a: "Typically eligible after 5–6 years of continuous legal residence in Finland, plus passing a basic language test in Finnish or Swedish. A Finnish passport grants full EU rights — live and work in any of the 27 EU member states.",
    aFa: "در حالت معمول، پس از حدود ۵ تا ۶ سال اقامت قانونی و مستمر در فنلاند می‌توانید واجد شرایط درخواست تابعیت شوید.\n\nهمچنین باید سطح پایه مهارت زبان فنلاندی یا سوئدی را از طریق آزمون مربوطه اثبات کنید.\n\nپس از دریافت تابعیت، پاسپورت فنلاند به شما حقوق کامل شهروندی اتحادیه اروپا را می‌دهد و می‌توانید در هر یک از ۲۷ کشور عضو اتحادیه اروپا زندگی و کار کنید.",
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
