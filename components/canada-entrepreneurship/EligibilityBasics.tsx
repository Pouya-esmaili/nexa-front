"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const requirements = [
  {
    num: "01",
    title: "Scalable Business Plan",
    titleFa: "طرح کسب‌وکار مقیاس‌پذیر",
    desc: "A strong, market-validated, and growth-oriented business plan demonstrating realistic potential for revenue generation, market expansion, and long-term viability.",
    descFa: "یک طرح کسب‌وکار قوی، بازارسنجی‌شده و رشدمحور که پتانسیل واقع‌بینانه برای ایجاد درآمد، گسترش بازار و پایداری بلندمدت را نشان دهد.",
  },
  {
    num: "02",
    title: "Net Worth & Capital",
    titleFa: "دارایی خالص و سرمایه",
    desc: "Sufficient personal net worth and investment capacity relative to the stream. Authorities verify liquid assets and business capital as part of the financial viability assessment.",
    descFa: "دارایی خالص شخصی و ظرفیت سرمایه‌گذاری کافی متناسب با جریان. مقامات دارایی‌های نقدی و سرمایه‌ی کسب‌وکار را به‌عنوان بخشی از ارزیابی امکان‌پذیری مالی راستی‌آزمایی می‌کنند.",
  },
  {
    num: "03",
    title: "Active Management",
    titleFa: "مدیریت فعال",
    desc: "Day-to-day operational involvement is required. You must demonstrate hands-on management of the Canadian business entity, not passive investment.",
    descFa: "دخالت عملیاتی روزمره لازم است. باید مدیریت عملی نهاد تجاری کانادایی را نشان دهید، نه سرمایه‌گذاری منفعل.",
  },
  {
    num: "04",
    title: "Language Proficiency",
    titleFa: "تسلط زبانی",
    desc: "English or French language ability at the threshold required by your specific stream — typically CLB 5 or higher for federal pathways.",
    descFa: "توانایی زبان انگلیسی یا فرانسه در آستانه‌ی موردنیاز جریان خاص شما — معمولاً CLB 5 یا بالاتر برای مسیرهای فدرال.",
  },
  {
    num: "05",
    title: "Management Experience",
    titleFa: "تجربه‌ی مدیریتی",
    desc: "Prior business management or ownership history verified through documentation. Executive experience in relevant sectors strengthens the application significantly.",
    descFa: "سابقه‌ی پیشین مدیریت یا مالکیت کسب‌وکار که از طریق مستندات تأیید شود. تجربه‌ی اجرایی در حوزه‌های مرتبط، درخواست را به‌طور قابل‌توجهی تقویت می‌کند.",
  },
  {
    num: "06",
    title: "Job Creation Focus",
    titleFa: "تمرکز بر ایجاد اشتغال",
    desc: "Most streams emphasize employment creation over fixed capital thresholds. A credible plan for hiring Canadian residents adds substantial weight to your file.",
    descFa: "بیشتر جریان‌ها بر ایجاد اشتغال بیش از آستانه‌های سرمایه‌ی ثابت تأکید می‌کنند. یک طرح معتبر برای استخدام مقیمان کانادا وزن قابل‌توجهی به پرونده‌ی شما می‌افزاید.",
  },
];

const benefits: { en: string; fa: string }[] = [
  { en: "Permanent residency pathway upon approval", fa: "مسیر اقامت دائم پس از تأیید" },
  { en: "Full family included with work & study rights", fa: "کل خانواده با حقوق کار و تحصیل گنجانده می‌شوند" },
  { en: "Multiple provincial streams available", fa: "چند جریان استانی در دسترس" },
  { en: "No mandatory startup capital minimum in all streams", fa: "بدون حداقل سرمایه‌ی استارتاپ الزامی در همه‌ی جریان‌ها" },
  { en: "Business assets protected under Canadian law", fa: "دارایی‌های کسب‌وکار تحت قانون کانادا محافظت می‌شوند" },
  { en: "Dual citizenship recognized after 5 years", fa: "تابعیت دوگانه پس از ۵ سال به رسمیت شناخته می‌شود" },
];

export default function EligibilityBasics() {
  const { t } = useLang();
  return (
    <section className="py-16 md:py-24 bg-[#F7F6F9]">
      <Row>
        <Reveal variant="up" className="text-center mb-10 md:mb-14">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em]">
            {t("Eligibility Basics", "اصول واجد بودن")}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

          {/* Main */}
          <Reveal variant="left" delay={100}>
            <div className="bg-white border border-[#E2E2E2] rounded-[20px] p-8 md:p-11 flex flex-col">
              <p className="text-[15px] text-[#474747] leading-[1.65] mb-8 pb-8 border-b border-gray-200">
                {t("Canada's entrepreneur immigration streams assess applicants against a consistent set of business, financial, and management benchmarks. Meeting all six criteria is required for a complete application.", "جریان‌های مهاجرت کارآفرینی کانادا متقاضیان را در برابر مجموعه‌ای یکپارچه از معیارهای کسب‌وکار، مالی و مدیریتی ارزیابی می‌کنند. برآورده کردن هر شش معیار برای یک درخواست کامل لازم است.")}
              </p>
              {requirements.map((r, i) => (
                <div
                  key={r.num}
                  className="grid gap-5 py-5 border-b border-gray-200 last:border-b-0 transition-all duration-300 hover:pl-1.5"
                  style={{ gridTemplateColumns: "48px 1fr" }}
                >
                  <div className="w-12 h-8 rounded-[8px] bg-[#FAF6FF] flex items-center justify-center text-[13px] font-bold text-[#8F27FF] flex-shrink-0">
                    {r.num}
                  </div>
                  <div>
                    <h4 className="text-[16px] font-semibold tracking-[-0.015em] mb-1.5">{t(r.title, r.titleFa)}</h4>
                    <p className="text-[13.5px] text-[#929292] leading-[1.6] m-0">{t(r.desc, r.descFa)}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Aside — sticky direct grid child */}
          <div className="flex flex-col gap-4 md:sticky md:top-24">
            <Reveal variant="right" delay={150}>
              <div
                className="rounded-[20px] p-8"
                style={{ background: "#FAF6FF", border: "1px solid rgba(143,39,255,0.18)" }}
              >
                <div
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#8F27FF] uppercase tracking-widest px-3 py-1.5 rounded-full mb-5"
                  style={{ background: "white", border: "1px solid rgba(143,39,255,0.18)" }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                  {t("What You Get", "آنچه دریافت می‌کنید")}
                </div>
                <h3 className="text-[17px] font-semibold mb-4">{t("Key program benefits", "مزایای کلیدی برنامه")}</h3>
                <ul className="flex flex-col gap-3">
                  {benefits.map((b, i) => (
                    <li
                      key={b.en}
                      className="flex items-center gap-3 text-[14px] font-medium leading-snug transition-transform duration-200 hover:translate-x-1"
                      style={{ transitionDelay: `${i * 30}ms` }}
                    >
                      <span className="w-[22px] h-[22px] rounded-full bg-[#8F27FF] text-white flex items-center justify-center flex-shrink-0">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-3 h-3">
                          <path d="M5 12l4 4 10-10" />
                        </svg>
                      </span>
                      {t(b.en, b.fa)}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal variant="up" delay={250}>
              <div
                className="rounded-[14px] p-5 flex gap-3.5 items-start"
                style={{ background: "#FFFBEB", border: "1px solid #FDE68A" }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#D97706] flex-shrink-0 mt-0.5">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                <p className="text-[13.5px] text-[#92400E] leading-[1.55] m-0">
                  <strong className="text-[#78350F] font-semibold">{t("Stream requirements vary.", "الزامات جریان‌ها متفاوت است.")}</strong>{" "}
                  {t("Each provincial and federal entrepreneur stream has its own capital thresholds, net worth requirements, and scoring rubrics. Nexa maps your profile to the optimal stream before file preparation.", "هر جریان کارآفرینی استانی و فدرال آستانه‌های سرمایه، الزامات دارایی خالص و معیارهای امتیازدهی خاص خود را دارد. نکسا پیش از آماده‌سازی پرونده، پروفایل شما را به جریان بهینه نگاشت می‌کند.")}
                </p>
              </div>
            </Reveal>
          </div>

        </div>
      </Row>
    </section>
  );
}
