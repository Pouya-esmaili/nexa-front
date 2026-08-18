"use client";

import { useLang } from "@/components/global/LanguageProvider";

const steps = [
  { num: "01", title: "Acquire qualifying property", titleFa: "خرید ملک واجد شرایط", desc: "Residential or commercial real estate eligible under residency criteria.", descFa: "خرید ملک مسکونی یا تجاری مطابق با الزامات قانونی اقامت." },
  { num: "02", title: "Submit residency application", titleFa: "ثبت درخواست اقامت", desc: "Verified ownership documentation reviewed through structured channels.", descFa: "ارائه مدارک مالکیت و مستندات لازم از طریق مسیرهای رسمی." },
  { num: "03", title: "Receive renewable permit", titleFa: "دریافت اقامت قابل تمدید", desc: "Issued for the principal applicant and eligible family members.", descFa: "صدور مجوز اقامت برای متقاضی اصلی و اعضای واجد شرایط خانواده." },
  { num: "04", title: "Pathway to CBI unlocked", titleFa: "ورود به مسیر شهروندی", desc: "Upgrade to Turkish citizenship when investment thresholds are met.", descFa: "با رسیدن سرمایه‌گذاری به حدنصاب مقرر، امکان ارتقا از مسیر اقامت ملکی به برنامه شهروندی از طریق سرمایه‌گذاری فراهم می‌شود." },
];

const suitedFor: { en: string; fa: string }[] = [
  { en: "Entrepreneurs seeking regional expansion", fa: "کارآفرینانی که به دنبال توسعه فعالیت خود در منطقه هستند" },
  { en: "Families planning international relocation", fa: "خانواده‌هایی که قصد جابه‌جایی بین‌المللی دارند" },
  { en: "Investors diversifying assets internationally", fa: "سرمایه‌گذارانی که به دنبال تنوع‌بخشی به سبد دارایی‌های خود هستند" },
  { en: "Individuals seeking a secondary residence", fa: "افرادی که به دنبال اقامت دوم هستند" },
  { en: "Remote business owners & digital entrepreneurs", fa: "صاحبان کسب‌وکارهای آنلاین و کارآفرینان دیجیتال" },
];

const Check = () => (
  <span className="res-check">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
      <path d="M5 12l4 4 10-10" />
    </svg>
  </span>
);

export default function Residency() {
  const { t } = useLang();
  return (
    <section className="residency">
      <h2 className="section-title">{t("Turkish Residency Through Property Investment", "اقامت ترکیه از طریق خرید ملک")}</h2>
      <div className="residency-grid">
        <div className="res-main">
          <p className="res-lede">
            {t("Foreign nationals can obtain residency in Türkiye through qualifying property ownership. Residential or commercial property may provide eligibility for renewable residence permits — opening access to local services, education, healthcare and banking.", "اتباع خارجی می‌توانند با خرید ملکی که مطابق مقررات اقامت ترکیه واجد شرایط باشد، برای اجازه اقامت قابل تمدید اقدام کنند. این ملک می‌تواند مسکونی یا تجاری باشد و اقامت حاصل، دسترسی به خدمات محلی، آموزش، خدمات درمانی و سیستم بانکی ترکیه را فراهم می‌کند.")}
          </p>
          <ol className="res-steps">
            {steps.map((s) => (
              <li key={s.num}>
                <span className="res-step-num">{s.num}</span>
                <div>
                  <h5>{t(s.title, s.titleFa)}</h5>
                  <p>{t(s.desc, s.descFa)}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <aside className="res-aside">
          <div className="res-aside-tag">{t("Suited for", "مناسب برای")}</div>
          <ul className="res-aside-list">
            {suitedFor.map((item) => (
              <li key={item.en}>
                <Check />
                {t(item.en, item.fa)}
              </li>
            ))}
          </ul>
          <div className="res-aside-foot">
            {t("Property ownership also creates a direct pathway toward Turkish citizenship under the CBI Program when investment thresholds are met.", "مالکیت ملک، در صورت رعایت شرایط و حدنصاب‌های قانونی سرمایه‌گذاری، می‌تواند مسیر مستقیمی برای ورود به برنامه شهروندی ترکیه از طریق سرمایه‌گذاری نیز ایجاد کند.")}
          </div>
        </aside>
      </div>
    </section>
  );
}
