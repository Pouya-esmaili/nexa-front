"use client";

import { useLang } from "@/components/global/LanguageProvider";

const steps = [
  { num: "01", title: "Eligibility & structuring", titleFa: "واجد شرایط بودن و ساختاردهی", desc: "Confirm investor profile, family inclusion, source-of-funds documentation and qualifying investment strategy.", descFa: "تأیید پروفایل سرمایه‌گذار، شمول خانواده، مستندسازی منشأ وجوه و راهبرد سرمایه‌گذاری واجد شرایط.", highlight: false },
  { num: "02", title: "Property acquisition", titleFa: "تملک ملک", desc: "Acquire qualifying real estate — residential, commercial, villa or government-approved development — above USD 600,000.", descFa: "تملک ملک واجد شرایط — مسکونی، تجاری، ویلا یا پروژه‌ی مورد تأیید دولت — بالای ۶۰۰٬۰۰۰ دلار آمریکا.", highlight: false },
  { num: "03", title: "Official valuation", titleFa: "ارزش‌گذاری رسمی", desc: "Obtain government-authorized property valuation and complete transfer through compliant banking channels.", descFa: "دریافت ارزش‌گذاری ملک مورد تأیید دولت و تکمیل انتقال از طریق کانال‌های بانکی منطبق.", highlight: true },
  { num: "04", title: "Residence & CBI filing", titleFa: "ثبت اقامت و درخواست تابعیت", desc: "File the citizenship application for the principal applicant and eligible family members through structured government channels.", descFa: "ثبت درخواست تابعیت برای متقاضی اصلی و اعضای واجد شرایط خانواده از طریق کانال‌های ساختارمند دولتی.", highlight: false },
  { num: "05", title: "Passport issuance", titleFa: "صدور پاسپورت", desc: "Turkish citizenship and passports issued upon final approval — property is held for a minimum of 3 years.", descFa: "تابعیت و پاسپورت ترکیه پس از تأیید نهایی صادر می‌شود — ملک برای حداقل ۳ سال نگهداری می‌شود.", highlight: false },
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
      <h2 className="section-title">{t("Turkish Citizenship by Investment Program", "برنامه‌ی تابعیت ترکیه از طریق سرمایه‌گذاری")}</h2>
      <div className="cbi-wrap">
        <aside className="cbi-side">
          <div className="cbi-side-pill">{t("Process duration", "مدت فرایند")}</div>
          <div className="cbi-side-stat">
            <span className="big">{t("6–12", "۶ تا ۱۲")}</span>
            <span className="unit">{t("months", "ماه")}</span>
          </div>
          <p className="cbi-side-note">
            {t("One of the world's most established Citizenship by Investment programs. Applications proceed through structured government channels.", "یکی از تثبیت‌شده‌ترین برنامه‌های تابعیت از طریق سرمایه‌گذاری در جهان. درخواست‌ها از طریق کانال‌های ساختارمند دولتی پیش می‌روند.")}
          </p>
          <div className="cbi-side-tags">
            <span><Tick /> {t("Government recognized", "مورد تأیید دولت")}</span>
            <span><Tick /> {t("Family inclusion", "شمول خانواده")}</span>
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
