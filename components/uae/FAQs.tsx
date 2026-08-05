"use client";

import { useState } from "react";
import Image from "next/image";
import Row from "@/components/global/Row";
import { useLang } from "@/components/global/LanguageProvider";

const MOBILE_INITIAL_COUNT = 6;

const faqs = [
  {
    q: "What is the minimum investment for the UAE Golden Visa in 2026?",
    qFa: "حداقل سرمایه‌گذاری برای ویزای طلایی امارات در سال ۲۰۲۶ چقدر است؟",
    a: "The baseline capital threshold is AED 2,000,000 (approximately USD 545,000). This capital must be deployed into qualified asset classes — UAE real estate (ready or approved off-plan freehold properties), accredited public investment funds, or domestic corporate setups with verified paid-up share capital.",
    aFa: "آستانه‌ی پایه‌ی سرمایه ۲٬۰۰۰٬۰۰۰ درهم (تقریباً ۵۴۵٬۰۰۰ دلار آمریکا) است. این سرمایه باید در طبقات دارایی واجد شرایط به‌کار گرفته شود — املاک امارات (املاک مالکیت کامل آماده یا پیش‌فروش تأییدشده)، صندوق‌های سرمایه‌گذاری عمومی معتبر، یا ساختارهای شرکتی داخلی با سرمایه‌ی سهام پرداخت‌شده‌ی تأییدشده.",
  },
  {
    q: "Can I get a UAE Golden Visa with a mortgaged property?",
    qFa: "آیا می‌توانم با یک ملک رهنی ویزای طلایی امارات بگیرم؟",
    a: "Yes. The strict 50% cash down-payment rule has been lifted. Eligibility is now determined solely by the official Dubai Land Department (DLD) valuation. If the total asset value reaches or exceeds AED 2,000,000, you qualify. A current No Objection Certificate (NOC) from your financing bank confirming the mortgage is in good standing is required.",
    aFa: "بله. قانون سختگیرانه‌ی پیش‌پرداخت نقدی ۵۰٪ حذف شده است. واجد شرایط بودن اکنون تنها بر اساس ارزش‌گذاری رسمی اداره‌ی زمین دبی (DLD) تعیین می‌شود. اگر ارزش کل دارایی به ۲٬۰۰۰٬۰۰۰ درهم برسد یا از آن فراتر رود، واجد شرایط هستید. یک نامه‌ی عدم‌اعتراض (NOC) معتبر از بانک تأمین‌کننده‌ی شما که تأیید کند وام در وضعیت خوبی است لازم است.",
  },
  {
    q: "Can I combine multiple properties to reach the AED 2 million threshold?",
    qFa: "آیا می‌توانم چند ملک را برای رسیدن به آستانه‌ی ۲ میلیون درهم ترکیب کنم؟",
    a: "Yes. The regulatory framework explicitly permits portfolio aggregation. You can combine multiple independent freehold properties (residential, commercial, or mixed) to satisfy the AED 2,000,000 baseline. Each asset must be registered under your name, located in designated freehold zones, and backed by an individual DLD valuation certificate free of unresolved liens.",
    aFa: "بله. چارچوب مقرراتی صراحتاً تجمیع پرتفوی را مجاز می‌داند. می‌توانید چند ملک مالکیت کامل مستقل (مسکونی، تجاری یا ترکیبی) را برای برآورده کردن پایه‌ی ۲٬۰۰۰٬۰۰۰ درهم ترکیب کنید. هر دارایی باید به نام شما ثبت شده، در مناطق مالکیت کامل تعیین‌شده واقع باشد و با یک گواهی ارزش‌گذاری DLD جداگانه‌ی عاری از حق‌الرهن‌های حل‌نشده پشتیبانی شود.",
  },
  {
    q: "Does the purchase price or current market valuation determine eligibility?",
    qFa: "آیا قیمت خرید یا ارزش‌گذاری فعلی بازار، واجد شرایط بودن را تعیین می‌کند؟",
    a: "Eligibility is governed strictly by the official government valuation, not the historic purchase price on your title deed. If you bought an asset for less than AED 2,000,000 but a current DLD valuation shows appreciation past the threshold, your file is fully eligible. Conversely, if market softening pushes the current valuation below the threshold, the file will be flagged for restructuring.",
    aFa: "واجد شرایط بودن به‌طور دقیق بر اساس ارزش‌گذاری رسمی دولت اداره می‌شود، نه قیمت خرید تاریخی روی سند مالکیت شما. اگر دارایی را با کمتر از ۲٬۰۰۰٬۰۰۰ درهم خریده باشید اما یک ارزش‌گذاری فعلی DLD افزایش ارزش فراتر از آستانه را نشان دهد، پرونده‌ی شما کاملاً واجد شرایط است. برعکس، اگر رکود بازار ارزش‌گذاری فعلی را زیر آستانه ببرد، پرونده برای بازساختاردهی علامت‌گذاری می‌شود.",
  },
  {
    q: "What are the bank statement requirements?",
    qFa: "الزامات صورت‌حساب بانکی چیست؟",
    a: "Depending on your investment vector, you must present a 3 to 6-month localized bank statement from an accredited institution (e.g., Emirates NBD, ADCB). The statements must prove clean capital origin pathways, show a continuous disposable income buffer, and verify the invested capital is wholly owned by you and not leveraged via unapproved secondary loans.",
    aFa: "بسته به مسیر سرمایه‌گذاری شما، باید یک صورت‌حساب بانکی محلی ۳ تا ۶ ماهه از یک مؤسسه‌ی معتبر (مثلاً Emirates NBD، ADCB) ارائه دهید. صورت‌حساب‌ها باید مسیرهای پاک منشأ سرمایه را اثبات کنند، یک ذخیره‌ی درآمد قابل‌تصرف پیوسته نشان دهند و تأیید کنند که سرمایه‌ی سرمایه‌گذاری‌شده کاملاً تحت مالکیت شماست و از طریق وام‌های ثانویه‌ی تأییدنشده اهرم نشده است.",
  },
  {
    q: "Can a husband and wife jointly apply using a single property?",
    qFa: "آیا زن و شوهر می‌توانند با استفاده از یک ملک واحد به‌صورت مشترک درخواست دهند؟",
    a: "Yes. Married couples can combine their separately owned shares or purchase jointly to meet the AED 2,000,000 threshold. You must provide a legally translated and fully attested marriage certificate verified by the Ministry of Foreign Affairs (MOFA). Once approved, the primary applicant secures the 10-year residency and immediately acts as legal sponsor for the spouse.",
    aFa: "بله. زوج‌های متأهل می‌توانند سهم‌های جداگانه‌ی خود را ترکیب کنند یا به‌صورت مشترک خرید کنند تا به آستانه‌ی ۲٬۰۰۰٬۰۰۰ درهم برسند. باید یک سند ازدواج ترجمه‌ی قانونی‌شده و کاملاً تأییدشده که توسط وزارت امور خارجه (MOFA) تأیید شده باشد ارائه دهید. پس از تأیید، متقاضی اصلی اقامت ۱۰ ساله را دریافت می‌کند و بلافاصله به‌عنوان حامی قانونی همسر عمل می‌کند.",
  },
  {
    q: "How long can a Golden Visa holder stay outside the UAE?",
    qFa: "دارنده‌ی ویزای طلایی چه مدت می‌تواند خارج از امارات بماند؟",
    a: "Indefinitely. The Golden Visa explicitly waives the 6-month travel restriction that applies to standard UAE residency visas. Golden Residency holders enjoy complete global mobility and can remain outside the UAE without any risk of cancellation of their legal status, Emirates ID, or asset linkages.",
    aFa: "به‌طور نامحدود. ویزای طلایی صراحتاً محدودیت سفر ۶ ماهه‌ای را که برای ویزاهای اقامت استاندارد امارات اعمال می‌شود لغو می‌کند. دارندگان اقامت طلایی از تحرک جهانی کامل بهره‌مندند و می‌توانند بدون هیچ خطری از لغو وضعیت قانونی، شناسه‌ی اماراتی یا پیوندهای دارایی، خارج از امارات بمانند.",
  },
  {
    q: "Who can I sponsor under the UAE Golden Visa?",
    qFa: "تحت ویزای طلایی امارات چه کسانی را می‌توانم حمایت کنم؟",
    a: "The primary investor can sponsor their spouse, unmarried daughters of any age, sons with no historical age caps, and an unlimited number of domestic workers and executive household staff. If the primary investor passes away within the 10-year term, sponsored dependents maintain their residency until the natural expiration of the permit.",
    aFa: "سرمایه‌گذار اصلی می‌تواند همسر، دختران مجرد در هر سنی، پسران بدون محدودیت سنی، و تعداد نامحدودی کارگر خانگی و کارکنان اجرایی خانه را حمایت کند. اگر سرمایه‌گذار اصلی در طول دوره‌ی ۱۰ ساله فوت کند، افراد تحت تکفل حمایت‌شده اقامت خود را تا انقضای طبیعی مجوز حفظ می‌کنند.",
  },
  {
    q: "Does the UAE Golden Visa provide a path to UAE citizenship?",
    qFa: "آیا ویزای طلایی امارات مسیری به سوی تابعیت امارات فراهم می‌کند؟",
    a: "No. The UAE Golden Visa is structurally a long-term, self-sponsored residency program designed for wealth preservation and asset security. It does not offer an automated, direct, or time-based path to UAE citizenship or permanent residency. Emirati nationality is granted almost exclusively via royal decrees, exceptional state recommendations, or specialized federal talent quotas.",
    aFa: "خیر. ویزای طلایی امارات از نظر ساختاری یک برنامه‌ی اقامتی بلندمدت و خودحمایتی است که برای حفظ ثروت و امنیت دارایی طراحی شده است. این ویزا مسیری خودکار، مستقیم یا مبتنی بر زمان به سوی تابعیت امارات یا اقامت دائم ارائه نمی‌دهد. تابعیت اماراتی تقریباً به‌طور انحصاری از طریق فرمان‌های سلطنتی، توصیه‌های استثنایی دولتی یا سهمیه‌های تخصصی استعداد فدرال اعطا می‌شود.",
  },
  {
    q: "What is the estimated processing time?",
    qFa: "زمان تخمینی پردازش چقدر است؟",
    a: "With the government's centralized one-portal application system, the end-to-end pipeline spans 2 to 6 weeks once asset certification is complete. This includes entry permit issuance, mandatory in-country medical screening (blood tests and chest X-rays), biometric logging at an ICP center, and final Emirates ID activation.",
    aFa: "با سیستم درخواست متمرکز تک‌پورتال دولت، کل این خط لوله پس از تکمیل گواهی دارایی ۲ تا ۶ هفته طول می‌کشد. این شامل صدور مجوز ورود، غربالگری پزشکی الزامی در داخل کشور (آزمایش خون و رادیوگرافی قفسه‌ی سینه)، ثبت بیومتریک در یک مرکز ICP و فعال‌سازی نهایی شناسه‌ی اماراتی است.",
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
