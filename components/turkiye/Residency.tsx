"use client";

import { useLang } from "@/components/global/LanguageProvider";

const steps = [
  { num: "01", title: "Acquire qualifying property", titleFa: "تملک ملک واجد شرایط", desc: "Residential or commercial real estate eligible under residency criteria.", descFa: "املاک مسکونی یا تجاری واجد شرایط بر اساس معیارهای اقامت." },
  { num: "02", title: "Submit residency application", titleFa: "ثبت درخواست اقامت", desc: "Verified ownership documentation reviewed through structured channels.", descFa: "مستندات مالکیت تأییدشده که از طریق کانال‌های ساختارمند بررسی می‌شود." },
  { num: "03", title: "Receive renewable permit", titleFa: "دریافت مجوز قابل‌تمدید", desc: "Issued for the principal applicant and eligible family members.", descFa: "برای متقاضی اصلی و اعضای واجد شرایط خانواده صادر می‌شود." },
  { num: "04", title: "Pathway to CBI unlocked", titleFa: "گشایش مسیر تابعیت", desc: "Upgrade to Turkish citizenship when investment thresholds are met.", descFa: "ارتقا به تابعیت ترکیه هنگام برآورده شدن آستانه‌های سرمایه‌گذاری." },
];

const suitedFor: { en: string; fa: string }[] = [
  { en: "Entrepreneurs seeking regional expansion", fa: "کارآفرینان جویای گسترش منطقه‌ای" },
  { en: "Families planning international relocation", fa: "خانواده‌های در حال برنامه‌ریزی برای جابه‌جایی بین‌المللی" },
  { en: "Investors diversifying assets internationally", fa: "سرمایه‌گذارانی که دارایی‌های خود را به‌صورت بین‌المللی متنوع می‌کنند" },
  { en: "Individuals seeking a secondary residence", fa: "افراد جویای اقامت دوم" },
  { en: "Remote business owners & digital entrepreneurs", fa: "صاحبان کسب‌وکار از راه دور و کارآفرینان دیجیتال" },
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
      <h2 className="section-title">{t("Turkish Residency Through Property Investment", "اقامت ترکیه از طریق سرمایه‌گذاری در ملک")}</h2>
      <div className="residency-grid">
        <div className="res-main">
          <p className="res-lede">
            {t("Foreign nationals can obtain residency in Türkiye through qualifying property ownership. Residential or commercial property may provide eligibility for renewable residence permits — opening access to local services, education, healthcare and banking.", "اتباع خارجی می‌توانند از طریق مالکیت ملک واجد شرایط در ترکیه اقامت بگیرند. ملک مسکونی یا تجاری ممکن است واجد شرایط بودن برای مجوزهای اقامت قابل‌تمدید را فراهم کند — که دسترسی به خدمات محلی، آموزش، درمان و بانکداری را باز می‌کند.")}
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
            {t("Property ownership also creates a direct pathway toward Turkish citizenship under the CBI Program when investment thresholds are met.", "مالکیت ملک همچنین هنگام برآورده شدن آستانه‌های سرمایه‌گذاری، یک مسیر مستقیم به سوی تابعیت ترکیه تحت برنامه‌ی CBI ایجاد می‌کند.")}
          </div>
        </aside>
      </div>
    </section>
  );
}
