"use client";

import { useState } from "react";
import Image from "next/image";
import Row from "@/components/global/Row";
import { useLang } from "@/components/global/LanguageProvider";

const MOBILE_INITIAL_COUNT = 6;

const faqs = [
  {
    q: "Can I submit a brand new application for the SUV right now?",
    qFa: "آیا در حال حاضر می‌توانم یک درخواست جدید برای Canada Start-Up Visa ثبت کنم؟",
    a: "No. Due to the active IRCC program pause, new applications are completely closed unless you possess a valid Commitment Certificate issued by a designated organization in 2025. If you hold a 2025 certificate, you must submit your complete permanent residence application by June 30, 2026.",
    aFa: "خیر. به دلیل توقف فعلی برنامه توسط IRCC، پذیرش درخواست‌های جدید متوقف شده است؛ مگر اینکه متقاضی دارای Commitment Certificate معتبر صادرشده در سال ۲۰۲۵ از سوی یکی از سازمان‌های تعیین‌شده باشد.\n\nدارندگان Commitment Certificate سال ۲۰۲۵ باید درخواست اقامت دائم خود را حداکثر تا ۳۰ ژوئن ۲۰۲۶ ثبت می‌کردند.",
  },
  {
    q: "What happens if my startup goes bankrupt after landing?",
    qFa: "اگر بعد از ورود به کانادا استارتاپم ورشکست شود، چه اتفاقی برای اقامتم می‌افتد؟",
    a: "This is a major structural benefit. Because the SUV grants direct Permanent Residency rather than a conditional visa, your legal status in Canada is secure even if your business faces market failure. There are no clawback provisions on your PR status based on corporate performance.",
    aFa: "یکی از مزایای ساختاری Start-Up Visa این است که اقامت دائم به عملکرد مالی شرکت وابسته نیست.\n\nاز آنجا که این برنامه مستقیماً به اقامت دائم کانادا (PR) منتهی می‌شود و اقامت شما مشروط به موفقیت تجاری شرکت نیست، شکست یا تعطیلی کسب‌وکار به‌خودی‌خود باعث لغو وضعیت اقامت دائم شما نمی‌شود.",
  },
  {
    q: "What is a \"Complete Group Application\" under the SUV rules?",
    qFa: "منظور از «Complete Group Application» در قوانین SUV چیست؟",
    a: "If your startup is being launched by a team of up to 5 founders, IRCC will process the group application once all members have completed and submitted their respective permanent residence applications. A delay by one co-founder in completing and submitting their documents can affect the processing of the entire group application.",
    aFa: "اگر یک استارتاپ توسط یک تیم، حداکثر ۵ بنیان‌گذار، راه‌اندازی شود، IRCC پرونده گروه را زمانی وارد فرآیند بررسی می‌کند که تمام اعضای گروه پرونده‌های اقامت دائم خود را تکمیل و ارسال کرده باشند.\n\nبنابراین تأخیر یکی از هم‌بنیان‌گذاران در تکمیل و ارسال مدارک می‌تواند بر روند بررسی کل پرونده گروه تأثیر بگذارد.",
  },
  {
    q: "Can I bypass the CLB 5 requirement with an advanced degree?",
    qFa: "اگر مدرک تحصیلی پیشرفته از یک دانشگاه انگلیسی‌زبان داشته باشم، می‌توانم از شرط زبان CLB 5 معاف شوم؟",
    a: "No. An academic degree or education in an English-speaking country cannot replace an official language test. Every applicant must provide a valid result from an IRCC-approved language test, such as IELTS or CELPIP, and demonstrate at least CLB 5.",
    aFa: "خیر. داشتن مدرک دانشگاهی یا تحصیل در یک کشور انگلیسی‌زبان جایگزین مدرک رسمی زبان نمی‌شود.\n\nهر متقاضی باید نتیجه معتبر یک آزمون زبان مورد تأیید IRCC، مانند IELTS یا CELPIP، ارائه کند و حداقل سطح مورد نیاز CLB 5 را اثبات کند.",
  },
  {
    q: "Can I apply for an SUV work permit right now?",
    qFa: "آیا در حال حاضر می‌توانم برای مجوز کار اولیه تحت برنامه SUV اقدام کنم؟",
    a: "New applications for the optional SUV temporary work permit are currently closed. Work permit options are mainly available to founders who are already in Canada and are extending an active SUV work permit while their permanent residence application is being processed.",
    aFa: "در حال حاضر درخواست‌های جدید برای مجوز کار موقت اختیاری SUV متوقف شده‌اند.\n\nگزینه‌های مربوط به مجوز کار فعلاً عمدتاً برای بنیان‌گذارانی مطرح است که پیش‌تر در کانادا حضور دارند و در حال تمدید مجوز کار فعال خود در حالی هستند که پرونده اقامت دائمشان در حال بررسی است.",
  },
  {
    q: "Can we change team composition or add new co-founders in 2026?",
    qFa: "آیا هم‌بنیان‌گذاران می‌توانند در سال ۲۰۲۶ ترکیب تیم خود را تغییر دهند؟",
    a: "During the current wind-down phase of the program, significant changes to the team composition are restricted. While some minor corrections to 2025 Letters of Support may be possible, adding a brand-new co-founder or replacing a core team member is generally not permitted, and the original team composition should match the information recorded in the 2025 Commitment Certificate.",
    aFa: "در مرحله فعلی برنامه، امکان ایجاد تغییرات اساسی در ترکیب تیم محدود است.\n\nاگرچه ممکن است برخی اصلاحات جزئی در Letters of Support سال ۲۰۲۵ قابل انجام باشد، اضافه‌کردن یک هم‌بنیان‌گذار جدید یا جایگزین‌کردن اعضای اصلی تیم معمولاً امکان‌پذیر نیست و ترکیب اصلی تیم باید با اطلاعات ثبت‌شده در Commitment Certificate سال ۲۰۲۵ مطابقت داشته باشد.",
  },
  {
    q: "Are there geographic limits on where I can set up my business?",
    qFa: "آیا برای محل فعالیت کسب‌وکار در کانادا محدودیت جغرافیایی وجود دارد؟",
    a: "The federal Start-Up Visa program allows you to establish and operate your business anywhere in Canada, except for the province of Quebec, which operates its own independent business immigration system.",
    aFa: "برنامه فدرال Start-Up Visa امکان راه‌اندازی و فعالیت شرکت را در هر نقطه از کانادا فراهم می‌کند، به‌جز استان کبک که سیستم مستقل خود را برای مهاجرت تجاری دارد.",
  },
  {
    q: "What are the main processing priority criteria used by IRCC?",
    qFa: "IRCC در بررسی پرونده‌های معوقه SUV چه پرونده‌هایی را در اولویت قرار می‌دهد؟",
    a: "One important prioritization factor is the physical presence of at least one essential founder in Canada who is actively managing the startup under a valid SUV work permit. Having an eligible work permit application being processed from inside Canada may also be considered when prioritizing a case.",
    aFa: "یکی از معیارهای مهم در اولویت‌بندی، حضور حداقل یک بنیان‌گذار اصلی در کانادا و فعالیت واقعی او در مدیریت استارتاپ تحت یک مجوز کار معتبر SUV است.\n\nداشتن یک درخواست مجوز کار واجد شرایط که از داخل کانادا در حال بررسی باشد نیز می‌تواند در اولویت‌بندی پرونده مورد توجه قرار گیرد.",
  },
  {
    q: "What happens if I miss the June 30, 2026 deadline?",
    qFa: "اگر مهلت ۳۰ ژوئن ۲۰۲۶ را از دست بدهم، چه اتفاقی می‌افتد؟",
    a: "If you held a valid 2025 Commitment Certificate but failed to submit a complete permanent residence application by June 30, 2026, that certificate can no longer be used to apply under this Start-Up Visa stream.",
    aFa: "اگر دارای Commitment Certificate معتبر سال ۲۰۲۵ بوده‌اید اما درخواست کامل اقامت دائم را تا ۳۰ ژوئن ۲۰۲۶ ارسال نکرده باشید، اعتبار آن گواهی برای این مسیر به پایان می‌رسد و دیگر نمی‌توانید بر اساس همان گواهی از برنامه Start-Up Visa استفاده کنید.",
  },
  {
    q: "When will Canada announce the new entrepreneur pilot program?",
    qFa: "جزئیات برنامه جدید کارآفرینی کانادا چه زمانی اعلام می‌شود؟",
    a: "According to the information provided, IRCC is expected to communicate details and intake frameworks for the new targeted entrepreneur pilot program during the second half of 2026. Nexa is actively tracking these developments to prepare future applicants for the new pathway.",
    aFa: "طبق اطلاعات ارائه‌شده، IRCC قرار است جزئیات و چارچوب پذیرش برنامه جدید و هدفمند کارآفرینی را در نیمه دوم سال ۲۰۲۶ اعلام کند.\n\nNexa نیز این تحولات را به‌صورت فعال دنبال می‌کند تا متقاضیان آینده را برای مسیر جدید آماده کند.",
  },
];

export default function Faq() {
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
