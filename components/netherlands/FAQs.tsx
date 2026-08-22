"use client";

import { useState } from "react";
import Image from "next/image";
import Row from "@/components/global/Row";
import { useLang } from "@/components/global/LanguageProvider";

const MOBILE_INITIAL_COUNT = 6;

const faqs = [
  {
    q: "Is there a Dutch language requirement to get the initial Startup Visa?",
    qFa: "آیا برای دریافت ویزای اولیه استارتاپ هلند، دانستن زبان هلندی الزامی است؟",
    a: "No. The visa application, business plan, pitching sessions, and day-to-day operations can be conducted entirely in English. You only need to learn Dutch later if you choose to settle permanently and apply for citizenship at the 5-year mark.",
    aFa: "خیر. برای دریافت ویزای استارتاپ، نیازی به تسلط به زبان هلندی ندارید. فرآیند درخواست، تهیه بیزنس‌پلن، جلسات ارائه و حتی فعالیت‌های روزمره کسب‌وکار می‌توانند کاملاً به زبان انگلیسی انجام شوند.\n\nیادگیری زبان هلندی زمانی اهمیت پیدا می‌کند که بخواهید در هلند به‌صورت بلندمدت بمانید و در ادامه برای اقامت دائم یا تابعیت هلند اقدام کنید.",
  },
  {
    q: "Can multiple co-founders apply under the same business plan?",
    qFa: "آیا چند هم‌بنیان‌گذار می‌توانند بر اساس یک بیزنس‌پلن مشترک اقدام کنند؟",
    a: "Yes, up to 3 co-founders can use the same business plan. However, each must submit an individual application, hold an active management role, and independently prove they have at least €21,000 in personal financial capital.",
    aFa: "بله. حداکثر ۳ هم‌بنیان‌گذار می‌توانند بر اساس یک بیزنس‌پلن مشترک برای برنامه استارتاپ اقدام کنند.\n\nبااین‌حال، هر بنیان‌گذار باید درخواست خود را به‌صورت جداگانه ثبت کند، در مدیریت کسب‌وکار نقش فعال داشته باشد و به‌طور مستقل اثبات کند که حداقل ۲۱٬۰۰۰ یورو سرمایه شخصی برای تأمین هزینه‌های زندگی در اختیار دارد.",
  },
  {
    q: "What happens if my startup fails during the visa year?",
    qFa: "اگر استارتاپم در طول سال اول شکست بخورد، چه اتفاقی برای اقامتم می‌افتد؟",
    a: "Your visa will not be immediately cancelled. It remains legally valid until the expiration date on your residence card, giving you an administrative buffer to wind down operations, pivot, or adjust your legal status.",
    aFa: "اقامت شما صرفاً به دلیل شکست یا توقف استارتاپ، بلافاصله لغو نمی‌شود.\n\nمجوز اقامت تا تاریخ انقضای درج‌شده روی کارت اقامت معتبر خواهد بود. این فرصت به شما امکان می‌دهد فعالیت کسب‌وکار را جمع‌بندی کنید، مدل کسب‌وکار را تغییر دهید یا در صورت امکان، وضعیت اقامتی خود را از طریق یک مسیر قانونی دیگر تنظیم کنید.",
  },
  {
    q: "Can I take a side job while running my startup?",
    qFa: "آیا در کنار راه‌اندازی استارتاپ می‌توانم برای شرکت دیگری هم کار کنم؟",
    a: "Yes. You are permitted to take secondary employment or freelance work alongside your startup. However, your innovative venture must remain your primary focus, and any external employer must comply with standard Dutch labor rules.",
    aFa: "بله. شما می‌توانید در کنار فعالیت اصلی خود به‌عنوان بنیان‌گذار، کار جانبی یا فعالیت فریلنسری نیز داشته باشید.\n\nبااین‌حال، استارتاپ نوآورانه شما باید همچنان فعالیت اصلی و محور اقامت شما باشد و هرگونه اشتغال جانبی نیز باید مطابق قوانین کار هلند انجام شود.",
  },
  {
    q: "How long does the entire process take?",
    qFa: "کل فرآیند درخواست از ابتدا تا دریافت اقامت چقدر طول می‌کشد؟",
    a: "On average 4 to 5 months: 4 to 6 weeks to secure a facilitator and prepare your files, followed by the IND's official decision window of up to 90 days.",
    aFa: "به‌طور معمول، کل فرآیند حدود ۴ تا ۵ ماه زمان می‌برد.\n\nاین بازه شامل حدود ۴ تا ۶ هفته برای پیدا کردن Facilitator مناسب، دریافت توافق‌نامه همکاری و آماده‌سازی مدارک است. پس از آن، پرونده برای بررسی رسمی به IND ارسال می‌شود و این نهاد می‌تواند تا ۹۰ روز برای تصمیم‌گیری زمان داشته باشد.",
  },
  {
    q: "Can my facilitator finance my required personal living costs?",
    qFa: "آیا Facilitator می‌تواند هزینه‌های زندگی من را تأمین کند؟",
    a: "Yes. Your facilitator can choose to cover your monthly living expenses directly. This arrangement must be explicitly written into your signed facilitator agreement, specifying that the capital is fully guaranteed for your entire one-year stay — eliminating the need to show personal bank savings of €21,000.",
    aFa: "بله. طبق دستورالعمل‌های رسمی IND، Facilitator مورد تأیید می‌تواند متعهد شود که هزینه‌های ماهانه زندگی شما را مستقیماً تأمین کند.\n\nدر این صورت، این تعهد باید به‌طور صریح در توافق‌نامه رسمی و امضاشده با Facilitator درج شود و مشخص کند که منابع مالی مورد نیاز برای کل دوره یک‌ساله اقامت شما تضمین شده است.\n\nدر چنین شرایطی، نیازی نیست شخصاً موجودی بانکی ۲۱٬۰۰۰ یورویی ارائه کنید.",
  },
  {
    q: "Can my spouse work freely in the Netherlands?",
    qFa: "آیا همسر یا پارتنر من می‌تواند آزادانه در هلند کار کند؟",
    a: "Yes. Your spouse or registered partner receives an automatic matching residence permit with complete, unrestricted access to the Dutch labor market. They do not need a corporate sponsor or separate work permit — they can accept any job offer or build their own freelance business immediately.",
    aFa: "بله. همسر یا پارتنر ثبت‌شده شما می‌تواند مجوز اقامتی متناسب با مدت اقامت شما دریافت کند که دسترسی کامل و بدون محدودیت به بازار کار هلند را فراهم می‌کند.\n\nدر نتیجه، برای شروع به کار به اسپانسر شرکتی یا مجوز کار جداگانه (TWV) نیاز نخواهد داشت و می‌تواند برای هر کارفرمایی کار کند یا فعالیت فریلنسری و کسب‌وکار مستقل خود را راه‌اندازی کند.",
  },
  {
    q: "Can I transition directly from the Startup Visa to Permanent Residency?",
    qFa: "آیا می‌توانم مستقیماً از ویزای استارتاپ به اقامت دائم برسم؟",
    a: "Not immediately. The Startup Visa is a non-extendable 1-year bridge. You must first transition into a Self-Employed Permit at year-end. After completing 5 continuous legal years of residency in total, you become eligible for Permanent Residency or Dutch Citizenship.",
    aFa: "خیر، به‌صورت مستقیم امکان‌پذیر نیست.\n\nویزای استارتاپ یک مجوز اقامت موقت یک‌ساله و غیرقابل تمدید است که به‌عنوان پلی برای ورود به مسیر اقامت بلندمدت عمل می‌کند.\n\nبرای ادامه اقامت پس از سال اول، باید به یک مجوز اقامت معمول Self-Employed منتقل شوید. Facilitator نیز با ارائه ارزیابی از عملکرد و پیشرفت کسب‌وکار می‌تواند در این فرآیند نقش داشته باشد.\n\nپس از تکمیل مجموع ۵ سال اقامت قانونی و مستمر در هلند، می‌توانید برای اقامت دائم یا تابعیت هلند واجد شرایط شوید.",
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
