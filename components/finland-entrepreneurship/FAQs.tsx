"use client";

import { useState } from "react";
import Row from "@/components/global/Row";
import { useLang } from "@/components/global/LanguageProvider";

const MOBILE_INITIAL_COUNT = 6;

const faqs = [
  {
    q: "What is the Finland Self-Employed Visa, and who is it for?",
    qFa: "ویزای خوداشتغالی فنلاند چیست و برای چه کسانی است؟",
    a: "Technically called the Residence Permit for an Entrepreneur, this visa is designed for non-EU/EEA citizens who want to move to Finland to run a business. It covers private entrepreneurs, partners in a general partnership, general partners in a limited partnership, and working shareholders in a limited liability company (Oy).",
    aFa: "این ویزا که از نظر فنی مجوز اقامت برای کارآفرین نامیده می‌شود، برای شهروندان خارج از اتحادیه اروپا/منطقه‌ی اقتصادی اروپا که می‌خواهند برای اداره‌ی یک کسب‌وکار به فنلاند بروند طراحی شده است. این ویزا کارآفرینان خصوصی، شرکا در یک شراکت عمومی، شرکای عمومی در یک شراکت محدود و سهام‌داران شاغل در یک شرکت با مسئولیت محدود (Oy) را پوشش می‌دهد.",
  },
  {
    q: "Can I get this permit just by investing or owning shares?",
    qFa: "آیا می‌توانم فقط با سرمایه‌گذاری یا مالکیت سهام این مجوز را بگیرم؟",
    a: "No. Passive investment or sole ownership of shares does not qualify. You must actively work in the company within Finland, and your physical presence must be essential to the daily operations and growth of the business.",
    aFa: "خیر. سرمایه‌گذاری منفعل یا مالکیت صرف سهام واجد شرایط نیست. باید فعالانه در شرکت داخل فنلاند کار کنید و حضور فیزیکی شما باید برای عملیات روزانه و رشد کسب‌وکار ضروری باشد.",
  },
  {
    q: "What is the difference between the Entrepreneur Permit and the Startup Visa?",
    qFa: "تفاوت میان مجوز کارآفرینی و ویزای استارتاپ چیست؟",
    a: "The Entrepreneur Permit is for traditional small businesses, freelancers, consultants, and local service providers — assessed by the ELY Centre on local profitability. The Startup Entrepreneur Permit is for high-growth, innovative tech teams aiming for rapid international scaling — assessed by Business Finland, not the ELY Centre.",
    aFa: "مجوز کارآفرینی برای کسب‌وکارهای کوچک سنتی، فریلنسرها، مشاوران و ارائه‌دهندگان خدمات محلی است — که توسط مرکز ELY بر اساس سودآوری محلی ارزیابی می‌شود. مجوز کارآفرین استارتاپ برای تیم‌های فناوری نوآور و پررشد است که به دنبال مقیاس‌دهی سریع بین‌المللی هستند — که توسط Business Finland ارزیابی می‌شود، نه مرکز ELY.",
  },
  {
    q: "Do I need to register my company before applying?",
    qFa: "آیا باید پیش از درخواست، شرکتم را ثبت کنم؟",
    a: "Not necessarily, but your business foundation must be completely ready. You can apply before registering the company if you provide a solid business plan and proof that the necessary capital is ready to deploy. However, if the business is already registered with the PRH, submitting those documents strengthens your application.",
    aFa: "لزوماً نه، اما پایه‌ی کسب‌وکار شما باید کاملاً آماده باشد. می‌توانید پیش از ثبت شرکت درخواست دهید، به شرطی که یک طرح کسب‌وکار مستحکم و مدرکی مبنی بر آماده بودن سرمایه‌ی لازم برای به‌کارگیری ارائه دهید. با این حال، اگر کسب‌وکار قبلاً نزد PRH ثبت شده باشد، ارائه‌ی آن اسناد درخواست شما را تقویت می‌کند.",
  },
  {
    q: "What are the minimum income requirements?",
    qFa: "حداقل الزامات درآمدی چیست؟",
    a: "The required net income threshold generally ranges between €1,030 and €1,210 per month for a single adult — varying by municipality. You must demonstrate access to enough funds to sustain this minimum for at least one full year, totaling €12,360 to €14,520 in personal cash reserves.",
    aFa: "آستانه‌ی درآمد خالص موردنیاز عموماً برای یک بزرگسال مجرد بین ۱٬۰۳۰ تا ۱٬۲۱۰ یورو در ماه است — که بسته به شهرداری متفاوت است. باید نشان دهید که به وجوه کافی برای حفظ این حداقل حداقل برای یک سال کامل دسترسی دارید، که مجموعاً ۱۲٬۳۶۰ تا ۱۴٬۵۲۰ یورو ذخیره‌ی نقدی شخصی می‌شود.",
  },
  {
    q: "Can I bring my family with me to Finland?",
    qFa: "آیا می‌توانم خانواده‌ام را همراه خود به فنلاند بیاورم؟",
    a: "Yes. Your spouse or registered partner and dependent children under 18 can apply for residence permits based on family ties. Applications can be submitted simultaneously via Enter Finland. Note: bringing family members increases the monthly income threshold you need to demonstrate to Migri.",
    aFa: "بله. همسر یا شریک ثبت‌شده و فرزندان تحت تکفل زیر ۱۸ سال شما می‌توانند بر اساس پیوندهای خانوادگی برای مجوز اقامت درخواست دهند. درخواست‌ها می‌توانند به‌طور هم‌زمان از طریق Enter Finland ثبت شوند. توجه: آوردن اعضای خانواده آستانه‌ی درآمد ماهانه‌ای را که باید به Migri نشان دهید افزایش می‌دهد.",
  },
  {
    q: "What is the typical processing time?",
    qFa: "زمان معمول پردازش چقدر است؟",
    a: "On average, standard processing takes 3 to 4 months. The dual-stage review (ELY Centre followed by Migri) means your application passes through two separate authorities. Ensuring all financial projections are complete and clear is the best way to prevent delays or requests for additional information.",
    aFa: "به‌طور میانگین، پردازش استاندارد ۳ تا ۴ ماه طول می‌کشد. بررسی دومرحله‌ای (مرکز ELY و سپس Migri) به این معناست که درخواست شما از دو مرجع جداگانه عبور می‌کند. اطمینان از کامل و روشن بودن همه‌ی پیش‌بینی‌های مالی بهترین راه برای جلوگیری از تأخیر یا درخواست اطلاعات اضافی است.",
  },
  {
    q: "How long is the initial permit valid, and how do I extend it?",
    qFa: "مجوز اولیه چه مدت معتبر است و چگونه آن را تمدید کنم؟",
    a: "The first residence permit is typically granted for 1 to 2 years depending on your business projections and financial reserves. Before it expires, you can apply for an extended permit from within Finland. Extended permits can be granted for up to 4 years, provided the business is operating successfully, tax-compliant, and generating enough profit.",
    aFa: "نخستین مجوز اقامت معمولاً بسته به پیش‌بینی‌های کسب‌وکار و ذخایر مالی شما برای ۱ تا ۲ سال اعطا می‌شود. پیش از انقضای آن، می‌توانید از داخل فنلاند برای یک مجوز تمدیدشده درخواست دهید. مجوزهای تمدیدشده می‌توانند تا ۴ سال اعطا شوند، به شرطی که کسب‌وکار با موفقیت فعالیت کند، از نظر مالیاتی منطبق باشد و سود کافی ایجاد کند.",
  },
  {
    q: "Does this visa lead to permanent residency and citizenship?",
    qFa: "آیا این ویزا به اقامت دائم و تابعیت منجر می‌شود؟",
    a: "Yes. After 4 years of continuous residence on an A-permit, you become eligible for Permanent Residency. After 5 years, provided you pass the YKI language test (Finnish or Swedish at B1 level) and meet the integrity requirements, you can apply for Finnish Citizenship.",
    aFa: "بله. پس از ۴ سال اقامت پیوسته با مجوز A، واجد شرایط اقامت دائم می‌شوید. پس از ۵ سال، به شرطی که آزمون زبان YKI (فنلاندی یا سوئدی در سطح B1) را بگذرانید و الزامات درستکاری را برآورده کنید، می‌توانید برای تابعیت فنلاند درخواست دهید.",
  },
  {
    q: "What is the ELY Centre and why does it matter?",
    qFa: "مرکز ELY چیست و چرا اهمیت دارد؟",
    a: "The ELY Centre (Centre for Economic Development, Transport and the Environment) is a Finnish government agency that assesses the commercial viability of your business plan before Migri reviews your immigration file. A negative ELY assessment means your application stops — Migri will not review it. This makes the business plan and financial forecast the most critical elements of your file.",
    aFa: "مرکز ELY (مرکز توسعه‌ی اقتصادی، حمل‌ونقل و محیط زیست) یک آژانس دولتی فنلاندی است که پیش از بررسی پرونده‌ی مهاجرتی شما توسط Migri، امکان‌پذیری تجاری طرح کسب‌وکار شما را ارزیابی می‌کند. یک ارزیابی منفی ELY به معنای توقف درخواست شماست — Migri آن را بررسی نخواهد کرد. این موضوع طرح کسب‌وکار و پیش‌بینی مالی را به حیاتی‌ترین عناصر پرونده‌ی شما تبدیل می‌کند.",
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
