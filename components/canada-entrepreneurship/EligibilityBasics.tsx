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
    descFa: "طرح کسب‌وکاری قوی، مبتنی بر شناخت و اعتبارسنجی بازار و دارای چشم‌انداز رشد که ظرفیت واقع‌بینانه‌ای برای درآمدزایی، توسعه بازار و تداوم فعالیت در بلندمدت نشان دهد.",
  },
  {
    num: "02",
    title: "Net Worth & Capital",
    titleFa: "دارایی خالص و سرمایه",
    desc: "Sufficient personal net worth and investment capacity relative to the stream. Authorities verify liquid assets and business capital as part of the financial viability assessment.",
    descFa: "برخورداری از دارایی خالص و توانایی سرمایه‌گذاری متناسب با الزامات برنامه. در فرآیند ارزیابی توان مالی، دارایی‌های نقدشونده و سرمایه کسب‌وکار نیز مورد بررسی و راستی‌آزمایی قرار می‌گیرند.",
  },
  {
    num: "03",
    title: "Active Management",
    titleFa: "مدیریت فعال کسب‌وکار",
    desc: "Day-to-day operational involvement is required. You must demonstrate hands-on management of the Canadian business entity, not passive investment.",
    descFa: "حضور و مشارکت مستقیم در اداره روزمره کسب‌وکار ضروری است. متقاضی باید نشان دهد که در مدیریت عملیاتی کسب‌وکار کانادایی خود نقش مستقیم دارد و صرفاً یک سرمایه‌گذار منفعل نیست.",
  },
  {
    num: "04",
    title: "Language Proficiency",
    titleFa: "مهارت زبانی",
    desc: "English or French language ability at the threshold required by your specific stream — typically CLB 5 or higher for federal pathways.",
    descFa: "داشتن مهارت زبان انگلیسی یا فرانسوی در سطح موردنیاز برنامه موردنظر؛ برای مثال، در برخی مسیرهای فدرال معمولاً حداقل CLB 5 مورد نیاز است.",
  },
  {
    num: "05",
    title: "Management Experience",
    titleFa: "سابقه مدیریتی",
    desc: "Prior business management or ownership history verified through documentation. Executive experience in relevant sectors strengthens the application significantly.",
    descFa: "داشتن سابقه مستند در مالکیت یا مدیریت کسب‌وکار. تجربه مدیریتی و اجرایی مرتبط، به‌ویژه در حوزه فعالیت موردنظر، می‌تواند پرونده متقاضی را به شکل قابل‌توجهی تقویت کند.",
  },
  {
    num: "06",
    title: "Job Creation Focus",
    titleFa: "تمرکز بر ایجاد اشتغال",
    desc: "Most streams emphasize employment creation over fixed capital thresholds. A credible plan for hiring Canadian residents adds substantial weight to your file.",
    descFa: "در بسیاری از برنامه‌ها، ایجاد اشتغال یکی از معیارهای اصلی ارزیابی است و صرفاً میزان سرمایه‌گذاری تعیین‌کننده نیست. ارائه یک برنامه معتبر برای استخدام نیروی کار در کانادا می‌تواند تأثیر قابل‌توجهی بر پرونده داشته باشد.",
  },
];

const benefits: { en: string; fa: string }[] = [
  { en: "Permanent residency pathway upon approval", fa: "مسیر دریافت اقامت دائم در صورت تأیید پرونده" },
  { en: "Full family included with work & study rights", fa: "امکان همراهی اعضای خانواده با امکان کار و تحصیل" },
  { en: "Multiple provincial streams available", fa: "دسترسی به مسیرهای متنوع استانی" },
  { en: "No mandatory startup capital minimum in all streams", fa: "نبود حداقل سرمایه‌گذاری ثابت در برخی از برنامه‌ها" },
  { en: "Business assets protected under Canadian law", fa: "حمایت قانونی از دارایی‌ها و منافع کسب‌وکار در کانادا" },
  { en: "Dual citizenship recognized after 5 years", fa: "امکان دریافت تابعیت کانادا پس از احراز شرایط قانونی" },
];

export default function EligibilityBasics() {
  const { t } = useLang();
  return (
    <section className="py-16 md:py-24 bg-[#F7F6F9]">
      <Row>
        <Reveal variant="up" className="text-center mb-10 md:mb-14">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em]">
            {t("Eligibility Basics", "الزامات اولیه این برنامه")}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

          {/* Main */}
          <Reveal variant="left" delay={100}>
            <div className="bg-white border border-[#E2E2E2] rounded-[20px] p-8 md:p-11 flex flex-col">
              <p className="text-[15px] text-[#474747] leading-[1.65] mb-8 pb-8 border-b border-gray-200">
                {t("Canada's entrepreneur immigration streams assess applicants against a consistent set of business, financial, and management benchmarks. Meeting all six criteria is required for a complete application.", "مسیرهای مهاجرتی کارآفرینی کانادا، متقاضیان را بر اساس مجموعه‌ای از معیارهای مشخص تجاری، مالی و مدیریتی ارزیابی می‌کنند. برای تکمیل یک درخواست، احراز هر شش معیار ضروری است.")}
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
                <h3 className="text-[17px] font-semibold mb-4">{t("Key program benefits", "مزایای کلیدی برنامه‌ها")}</h3>
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
                  <strong className="text-[#78350F] font-semibold">{t("Stream requirements vary.", "الزامات هر برنامه متفاوت است.")}</strong>{" "}
                  {t("Each provincial and federal entrepreneur stream has its own capital thresholds, net worth requirements, and scoring rubrics. Nexa maps your profile to the optimal stream before file preparation.", "هر یک از مسیرهای کارآفرینی استانی و فدرال، معیارهای خاص خود را برای میزان سرمایه، دارایی خالص و امتیازبندی دارند. نکسا پیش از آماده‌سازی پرونده، شرایط و سوابق شما را بررسی می‌کند تا مناسب‌ترین مسیر را برای پروفایل شما مشخص کند.")}
                </p>
              </div>
            </Reveal>
          </div>

        </div>
      </Row>
    </section>
  );
}
