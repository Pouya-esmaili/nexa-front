"use client";

import { useState } from "react";
import Row from "@/components/global/Row";
import { useLang } from "@/components/global/LanguageProvider";

const MOBILE_INITIAL_COUNT = 6;

const faqs = [
  {
    q: "What is the minimum monthly income required?",
    qFa: "حداقل درآمد ماهانه‌ی موردنیاز چقدر است؟",
    a: "The IND requires your business to provide a stable gross monthly income of at least €1,734.57 — equal to the 2026 Dutch single-person levensonderhoud standard, inclusive of the mandatory 8% holiday allowance. This threshold is subject to biannual indexation by the Dutch government.",
    aFa: "IND الزام می‌کند که کسب‌وکار شما یک درآمد ناخالص ماهانه‌ی پایدار حداقل ۱٬۷۳۴٫۵۷ یورو فراهم کند — برابر با استاندارد levensonderhoud تک‌نفره‌ی هلند در سال ۲۰۲۶، شامل کمک‌هزینه‌ی مرخصی الزامی ۸٪. این آستانه مشمول شاخص‌بندی شش‌ماهه توسط دولت هلند است.",
  },
  {
    q: "How much capital must I inject into my Dutch business?",
    qFa: "چه مقدار سرمایه باید به کسب‌وکار هلندی خود تزریق کنم؟",
    a: "The RVO enforces a minimum of €4,500 in unencumbered personal equity injected directly into your Dutch business (registered Dutch BV or one-person business). This capital cannot come from unapproved personal loans or credit lines.",
    aFa: "RVO حداقل ۴٬۵۰۰ یورو سرمایه‌ی شخصی بدون قید که مستقیماً به کسب‌وکار هلندی شما (BV هلندی ثبت‌شده یا کسب‌وکار تک‌نفره) تزریق شده باشد را الزامی می‌کند. این سرمایه نمی‌تواند از وام‌های شخصی یا خطوط اعتباری تأییدنشده تأمین شود.",
  },
  {
    q: "How does the 300-point RVO scoring system work?",
    qFa: "سیستم امتیازدهی ۳۰۰ امتیازی RVO چگونه کار می‌کند؟",
    a: "The RVO uses a rigid 300-point matrix divided into three legs: Personal Experience, Business Plan, and Economic Added Value — 100 points each. You must score a minimum of 30 points in each individual leg, with a total minimum of 90 points. Failing the 30-point floor in any single leg triggers automatic full rejection regardless of your total score.",
    aFa: "RVO از یک ماتریس سختگیرانه‌ی ۳۰۰ امتیازی تقسیم‌شده به سه بخش استفاده می‌کند: تجربه‌ی شخصی، طرح کسب‌وکار و ارزش افزوده‌ی اقتصادی — هرکدام ۱۰۰ امتیاز. باید در هر بخش جداگانه حداقل ۳۰ امتیاز کسب کنید، با حداقل کل ۹۰ امتیاز. عدم رسیدن به کف ۳۰ امتیازی در هر بخش، صرف‌نظر از امتیاز کل شما، موجب رد کامل خودکار می‌شود.",
  },
  {
    q: "Can I do paid freelance work while my visa is being processed?",
    qFa: "آیا می‌توانم در حین پردازش ویزایم کار آزاد باحقوق انجام دهم؟",
    a: "No. Under current Dutch immigration law, third-country nationals are strictly prohibited from performing paid work or executing service contracts in the Netherlands while their initial application is being processed. Your KvK can be structured and registered, but trading cannot commence until the physical residence card is activated.",
    aFa: "خیر. طبق قانون فعلی مهاجرت هلند، اتباع کشورهای ثالث اکیداً از انجام کار باحقوق یا اجرای قراردادهای خدماتی در هلند در حین پردازش درخواست اولیه‌شان منع شده‌اند. KvK شما می‌تواند ساختاردهی و ثبت شود، اما تجارت تا فعال شدن کارت فیزیکی اقامت نمی‌تواند آغاز شود.",
  },
  {
    q: "What evidence proves my financial projections to the RVO?",
    qFa: "چه مدرکی پیش‌بینی‌های مالی من را به RVO اثبات می‌کند؟",
    a: "The RVO penalizes unbacked forecasting. You must provide signed Letters of Intent (LOIs) from prospective B2B clients, active service contracts, or Memoranda of Understanding (MOUs) with Dutch companies. Generic market reports without localized business connections will result in a lower point allocation.",
    aFa: "RVO پیش‌بینی‌های بدون پشتوانه را جریمه می‌کند. باید نامه‌های اعلام قصد (LOI) امضاشده از مشتریان بالقوه‌ی B2B، قراردادهای خدماتی فعال یا تفاهم‌نامه‌ها (MOU) با شرکت‌های هلندی ارائه دهید. گزارش‌های عمومی بازار بدون ارتباطات تجاری بومی‌شده منجر به تخصیص امتیاز کمتر می‌شوند.",
  },
  {
    q: "Can I use this visa if I work for just one client?",
    qFa: "آیا می‌توانم اگر فقط برای یک مشتری کار کنم از این ویزا استفاده کنم؟",
    a: "No. The RVO and Belastingdienst actively monitor for 'false self-employment' (schijnzelfstandigheid). Your business plan must prove multiple target clients, clear corporate risk, and independent marketing infrastructure. Relying on a single primary client mirrors an employment relationship and triggers rejection.",
    aFa: "خیر. RVO و Belastingdienst به‌طور فعال «خوداشتغالی کاذب» (schijnzelfstandigheid) را رصد می‌کنند. طرح کسب‌وکار شما باید چند مشتری هدف، ریسک شرکتی روشن و زیرساخت بازاریابی مستقل را اثبات کند. اتکا به یک مشتری اصلی واحد، شبیه یک رابطه‌ی اشتغال است و موجب رد شدن می‌شود.",
  },
  {
    q: "What is the TB test requirement upon arrival?",
    qFa: "الزام آزمون سل هنگام ورود چیست؟",
    a: "Unless your nationality is on the IND exemption list, you must undergo a mandatory tuberculosis screening (chest X-ray) within 3 months of arriving in the Netherlands. This is performed at a local public health service (GGD). Failing to complete this screening can lead to immediate cancellation of your residence permit.",
    aFa: "مگر اینکه تابعیت شما در فهرست معافیت IND باشد، باید ظرف ۳ ماه از ورود به هلند یک غربالگری الزامی سل (رادیوگرافی قفسه‌ی سینه) انجام دهید. این کار در یک مرکز بهداشت عمومی محلی (GGD) انجام می‌شود. عدم تکمیل این غربالگری می‌تواند به لغو فوری مجوز اقامت شما منجر شود.",
  },
  {
    q: "Can I sponsor my family under this visa?",
    qFa: "آیا می‌توانم خانواده‌ام را تحت این ویزا حمایت کنم؟",
    a: "Yes. Once approved, you act as legal sponsor for your spouse or registered partner and minor children through family reunification channels. They receive a residence card matching your visa validity period, with specific labor market markers regarding their independent work rights.",
    aFa: "بله. پس از تأیید، شما به‌عنوان حامی قانونی همسر یا شریک ثبت‌شده و فرزندان صغیر خود از طریق کانال‌های پیوند مجدد خانواده عمل می‌کنید. آن‌ها یک کارت اقامت متناسب با دوره‌ی اعتبار ویزای شما دریافت می‌کنند، با نشانگرهای خاص بازار کار در مورد حقوق کار مستقل‌شان.",
  },
  {
    q: "Can I keep my original passport when naturalizing?",
    qFa: "آیا می‌توانم هنگام تابعیت‌پذیری پاسپورت اصلی خود را حفظ کنم؟",
    a: "The Netherlands enforces a strict renunciation policy — by default you must legally surrender your original nationality to become a Dutch citizen. Exceptions apply in specific circumstances, such as being legally married to a Dutch national or if renunciation would cause statelessness.",
    aFa: "هلند یک سیاست انصراف سختگیرانه اعمال می‌کند — به‌طور پیش‌فرض باید برای شهروند هلند شدن به‌طور قانونی از تابعیت اصلی خود صرف‌نظر کنید. استثناها در شرایط خاص اعمال می‌شوند، مانند ازدواج قانونی با یک تبعه‌ی هلندی یا در صورتی که انصراف موجب بی‌تابعیتی شود.",
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
                  <img
                    src={isActive ? "/images/Entrepreneurship/close.svg" : "/images/Entrepreneurship/open.svg"}
                    alt={isActive ? "Close" : "Open"}
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
                    <img
                      src={isActive ? "/images/Entrepreneurship/close.svg" : "/images/Entrepreneurship/open.svg"}
                      alt={isActive ? "Close" : "Open"}
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
