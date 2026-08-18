"use client";

import { useLang } from "@/components/global/LanguageProvider";

const steps = [
  { num: "01", title: "Eligibility & structuring", titleFa: "بررسی شرایط و ساختار سرمایه‌گذاری", desc: "Confirm investor profile, family inclusion, source-of-funds documentation and qualifying investment strategy.", descFa: "پروفایل سرمایه‌گذار، اعضای خانواده، مدارک مربوط به منشأ سرمایه و مناسب‌ترین ساختار سرمایه‌گذاری بررسی می‌شود.", highlight: false },
  { num: "02", title: "Property acquisition", titleFa: "خرید ملک", desc: "Acquire qualifying real estate — residential, commercial, villa or government-approved development — above USD 600,000.", descFa: "خرید ملک واجد شرایط شامل آپارتمان، واحد تجاری، ویلا یا پروژه مورد تأیید، با ارزش حداقل ۶۰۰ هزار دلار.", highlight: false },
  { num: "03", title: "Official valuation", titleFa: "ارزیابی رسمی ملک", desc: "Obtain government-authorized property valuation and complete transfer through compliant banking channels.", descFa: "ارزش‌گذاری ملک توسط مرجع مورد تأیید انجام شده و فرایند انتقال مالکیت از طریق مسیرهای بانکی و قانونی تکمیل می‌شود.", highlight: true },
  { num: "04", title: "Residence & CBI filing", titleFa: "درخواست اقامت و شهروندی", desc: "File the citizenship application for the principal applicant and eligible family members through structured government channels.", descFa: "درخواست شهروندی برای متقاضی اصلی و اعضای واجد شرایط خانواده از طریق مسیرهای رسمی ثبت می‌شود.", highlight: false },
  { num: "05", title: "Passport issuance", titleFa: "صدور تابعیت و پاسپورت", desc: "Turkish citizenship and passports issued upon final approval — property is held for a minimum of 3 years.", descFa: "پس از تأیید نهایی، تابعیت ترکیه و سپس پاسپورت صادر می‌شود. ملک خریداری‌شده باید حداقل ۳ سال در مالکیت سرمایه‌گذار باقی بماند.", highlight: false },
];

const Tick = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round">
    <path d="M5 12l4 4 10-10" />
  </svg>
);

export default function CBIProgram() {
  const { t } = useLang();
  return (
    <section className="cbi">
      <h2 className="section-title">{t("Turkish Citizenship by Investment Program", "برنامه شهروندی ترکیه از طریق سرمایه‌گذاری")}</h2>
      <div className="cbi-wrap">
        <aside className="cbi-side">
          <div className="cbi-side-pill">{t("Process duration", "مدت تقریبی فرایند")}</div>
          <div className="cbi-side-stat">
            <span className="big">{t("6–12", "۶ تا ۱۲")}</span>
            <span className="unit">{t("months", "ماه")}</span>
          </div>
          <p className="cbi-side-note">
            {t("One of the world's most established Citizenship by Investment programs. Applications proceed through structured government channels.", "یکی از شناخته‌شده‌ترین برنامه‌های شهروندی از طریق سرمایه‌گذاری که فرایند آن از طریق مراجع رسمی دولتی انجام می‌شود.")}
          </p>
          <div className="cbi-side-tags">
            <span><Tick /> {t("Government recognized", "مورد تأیید دولت")}</span>
            <span><Tick /> {t("Family inclusion", "امکان پوشش خانواده")}</span>
          </div>
        </aside>
        <ol className="vtimeline">
          {steps.map((s) => (
            <li key={s.num} className={`vt-step${s.highlight ? " is-highlight" : ""}`}>
              <div className="vt-num">{s.num}</div>
              <div className="vt-card">
                <h4>{t(s.title, s.titleFa)}</h4>
                <p>{t(s.desc, s.descFa)}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
