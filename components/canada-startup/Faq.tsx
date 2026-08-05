"use client";

import { useState } from "react";
import Image from "next/image";
import Row from "@/components/global/Row";
import { useLang } from "@/components/global/LanguageProvider";

const MOBILE_INITIAL_COUNT = 6;

const faqs = [
  {
    q: "Can I submit a brand new application for the SUV right now?",
    qFa: "آیا می‌توانم همین حالا یک درخواست کاملاً جدید برای SUV ثبت کنم؟",
    a: "No. Due to the active IRCC program pause, new applications are completely closed unless you possess a valid Commitment Certificate issued by a designated organization in 2025. If you hold a 2025 certificate, you have until June 30, 2026 to file your complete permanent residence paperwork.",
    aFa: "خیر. به دلیل توقف فعال برنامه‌ی IRCC، درخواست‌های جدید به‌طور کامل بسته شده‌اند، مگر اینکه یک گواهی تعهد معتبر صادرشده توسط یک سازمان تعیین‌شده در سال ۲۰۲۵ داشته باشید. اگر یک گواهی ۲۰۲۵ دارید، تا ۳۰ ژوئن ۲۰۲۶ فرصت دارید مدارک کامل اقامت دائم خود را ثبت کنید.",
  },
  {
    q: "What happens if my startup goes bankrupt after landing?",
    qFa: "اگر استارتاپ من پس از ورود ورشکست شود چه می‌شود؟",
    a: "This is a major structural benefit. Because the SUV grants direct Permanent Residency rather than a conditional visa, your legal status in Canada is secure even if your business faces market failure. There are no clawback provisions on your PR status based on corporate performance.",
    aFa: "این یک مزیت ساختاری مهم است. از آنجا که SUV به‌جای یک ویزای مشروط، اقامت دائم مستقیم اعطا می‌کند، وضعیت قانونی شما در کانادا حتی اگر کسب‌وکارتان با شکست بازار مواجه شود امن است. هیچ مقرره‌ی بازپس‌گیری بر اساس عملکرد شرکتی روی وضعیت اقامت دائم شما وجود ندارد.",
  },
  {
    q: "What is a \"complete group application\" under the SUV rules?",
    qFa: "«درخواست گروهی کامل» تحت قواعد SUV چیست؟",
    a: "If your business is being launched by a team, IRCC will not begin processing any single file until all members of the group have uploaded and submitted their respective PR files. A delay by a single co-founder risks the integrity of the entire corporate submission.",
    aFa: "اگر کسب‌وکار شما توسط یک تیم راه‌اندازی می‌شود، IRCC پردازش هیچ پرونده‌ی واحدی را تا زمانی که همه‌ی اعضای گروه پرونده‌های اقامت دائم مربوطه‌ی خود را بارگذاری و ثبت نکرده‌اند آغاز نمی‌کند. تأخیر یک هم‌بنیان‌گذار، یکپارچگی کل ثبت شرکتی را به خطر می‌اندازد.",
  },
  {
    q: "Can I bypass the CLB 5 requirement with an advanced degree?",
    qFa: "آیا می‌توانم الزام CLB 5 را با یک مدرک تحصیلی پیشرفته دور بزنم؟",
    a: "No. IRCC enforces a strict digital data policy. Every applicant must provide a valid language test transcript (IELTS or CELPIP) directly inside the PR portal. Academic degrees or native country backgrounds cannot be used as substitutes for an official language exam. There are zero waivers for this rule.",
    aFa: "خیر. IRCC یک سیاست داده‌ی دیجیتال سختگیرانه اعمال می‌کند. هر متقاضی باید یک ریزنمره‌ی معتبر آزمون زبان (IELTS یا CELPIP) را مستقیماً در پورتال اقامت دائم ارائه دهد. مدارک تحصیلی یا پیشینه‌ی کشور بومی نمی‌توانند به‌عنوان جایگزین یک آزمون زبان رسمی استفاده شوند. هیچ استثنایی برای این قاعده وجود ندارد.",
  },
  {
    q: "Can I apply for an SUV work permit right now?",
    qFa: "آیا می‌توانم همین حالا برای مجوز کار SUV درخواست دهم؟",
    a: "New applications for the optional SUV temporary work permit are closed under current emergency directives. Work permit options are restricted to founders already inside Canada who need to extend their active SUV work permits while their PR files are being processed.",
    aFa: "درخواست‌های جدید برای مجوز کار موقت اختیاری SUV تحت دستورالعمل‌های اضطراری فعلی بسته شده‌اند. گزینه‌های مجوز کار به بنیان‌گذارانی که پیش‌تر در داخل کانادا هستند و نیاز به تمدید مجوز کار فعال SUV خود در حین پردازش پرونده‌های اقامت دائم‌شان دارند، محدود می‌شود.",
  },
  {
    q: "Can we change team composition or add new co-founders in 2026?",
    qFa: "آیا می‌توانیم ترکیب تیم را تغییر دهیم یا هم‌بنیان‌گذاران جدید در سال ۲۰۲۶ اضافه کنیم؟",
    a: "While existing 2025 Letters of Support can be amended for minor structural errors, you cannot introduce brand new co-founders or substitute critical team members during this wind-down phase. The baseline group composition must exactly mirror the 2025 commitment data held by IRCC.",
    aFa: "اگرچه نامه‌های پشتیبانی موجود ۲۰۲۵ می‌توانند برای خطاهای ساختاری جزئی اصلاح شوند، شما نمی‌توانید هم‌بنیان‌گذاران کاملاً جدید معرفی کنید یا اعضای حیاتی تیم را در این مرحله‌ی جمع‌بندی جایگزین کنید. ترکیب پایه‌ی گروه باید دقیقاً منعکس‌کننده‌ی داده‌های تعهد ۲۰۲۵ نگهداری‌شده توسط IRCC باشد.",
  },
  {
    q: "Are there geographic limits on where I can set up my business?",
    qFa: "آیا محدودیت‌های جغرافیایی برای محل راه‌اندازی کسب‌وکارم وجود دارد؟",
    a: "The federal Start-Up Visa program allows corporate setup anywhere inside Canada except for the province of Quebec, which administers its own distinct business immigration programs with separate eligibility criteria.",
    aFa: "برنامه‌ی ویزای استارتاپ فدرال، راه‌اندازی شرکت را در هر نقطه‌ی داخل کانادا به‌جز استان کبک که برنامه‌های مهاجرت تجاری متمایز خود را با معیارهای واجد شرایط بودن جداگانه اجرا می‌کند، مجاز می‌داند.",
  },
  {
    q: "What are the main processing priority criteria used by IRCC?",
    qFa: "معیارهای اصلی اولویت پردازش که توسط IRCC استفاده می‌شوند چیست؟",
    a: "IRCC gives maximum processing priority to startup groups where at least one essential founder is physically in Canada actively managing the venture under an authorized SUV work permit, or has an active application for one pending onshore.",
    aFa: "IRCC بیشترین اولویت پردازش را به گروه‌های استارتاپی می‌دهد که در آن‌ها حداقل یک بنیان‌گذار اساسی به‌طور فیزیکی در کانادا حضور دارد و کسب‌وکار را تحت یک مجوز کار مجاز SUV فعالانه مدیریت می‌کند، یا یک درخواست فعال برای آن در داخل کشور در دست بررسی دارد.",
  },
  {
    q: "What happens if I miss the June 30, 2026 deadline?",
    qFa: "اگر مهلت ۳۰ ژوئن ۲۰۲۶ را از دست بدهم چه می‌شود؟",
    a: "If you hold a valid 2025 Commitment Certificate but fail to submit a complete permanent residence file by June 30, 2026, your certificate will permanently lapse, and you will lose all eligibility under this program stream with no recourse.",
    aFa: "اگر یک گواهی تعهد معتبر ۲۰۲۵ دارید اما نتوانید یک پرونده‌ی کامل اقامت دائم را تا ۳۰ ژوئن ۲۰۲۶ ثبت کنید، گواهی شما برای همیشه منقضی می‌شود و همه‌ی واجد شرایط بودن تحت این جریان برنامه را بدون هیچ راه جبرانی از دست خواهید داد.",
  },
  {
    q: "When will Canada announce the new entrepreneur pilot program?",
    qFa: "کانادا چه زمانی برنامه‌ی آزمایشی جدید کارآفرینی را اعلام خواهد کرد؟",
    a: "IRCC has confirmed that details and intake frameworks for the next-generation targeted entrepreneur pilot program will be formally communicated during the latter half of 2026. Nexa is actively tracking these developments to position future clients for early-access tracking.",
    aFa: "IRCC تأیید کرده است که جزئیات و چارچوب‌های پذیرش برنامه‌ی آزمایشی کارآفرینی هدفمند نسل بعد به‌طور رسمی در نیمه‌ی دوم سال ۲۰۲۶ اعلام خواهد شد. نکسا فعالانه این تحولات را دنبال می‌کند تا مشتریان آینده را برای دسترسی زودهنگام آماده کند.",
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
