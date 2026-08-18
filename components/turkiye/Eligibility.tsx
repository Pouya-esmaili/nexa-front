"use client";

import { useLang } from "@/components/global/LanguageProvider";

const profiles = [
  {
    label: "High-net-worth individuals",
    labelFa: "افراد دارای سرمایه قابل‌توجه",
    descFa: "برای افرادی که به دنبال ایجاد یک پایگاه سرمایه‌گذاری و اقامت در خارج از کشور هستند.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l4 5-4 13-4-13 4-5z" /><path d="M8 8h8" />
      </svg>
    ),
  },
  {
    label: "International entrepreneurs",
    labelFa: "کارآفرینان بین‌المللی",
    descFa: "برای صاحبان کسب‌وکارهایی که ترکیه را به‌عنوان پایگاه توسعه منطقه‌ای انتخاب می‌کنند.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 19l4-4M14 5c5 0 5 5 5 5s0 5-5 5c-3 0-4-3-4-3l-3-3s0-4 7-4z" /><circle cx="14" cy="10" r="1.5" />
      </svg>
    ),
  },
  {
    label: "Startup founders",
    labelFa: "بنیان‌گذاران استارتاپ‌ها",
    descFa: "برای کارآفرینانی که به دنبال دسترسی به بازارهای اروپا، آسیا و خاورمیانه هستند.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" />
      </svg>
    ),
  },
  {
    label: "Business owners expanding",
    labelFa: "صاحبان کسب‌وکار",
    descFa: "برای افرادی که قصد توسعه فعالیت تجاری خود در بازارهای منطقه‌ای را دارند.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18" />
      </svg>
    ),
  },
  {
    label: "Asset diversification",
    labelFa: "سرمایه‌گذاران",
    descFa: "برای کسانی که به دنبال تنوع‌بخشی بین‌المللی به دارایی‌های خود هستند.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" /><path d="M12 3v9l7 4" />
      </svg>
    ),
  },
  {
    label: "Families seeking mobility",
    labelFa: "خانواده‌های متقاضی جابه‌جایی",
    descFa: "برای خانواده‌هایی که به دنبال اقامت و آزادی جابه‌جایی بیشتر هستند.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.4" />
        <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M14 20c0-2.6 1.8-4.5 4-4.5s4 1.9 4 4.5" />
      </svg>
    ),
  },
  {
    label: "Alternative citizenship",
    labelFa: "متقاضیان تابعیت دوم",
    descFa: "برای افرادی که به دنبال یک مسیر قانونی و ساختاریافته برای دریافت تابعیت جایگزین هستند.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z" /><path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

export default function Eligibility() {
  const { t, lang } = useLang();
  return (
    <section className="eligibility">
      <h2 className="section-title">{t("Who Is This Program Designed For?", "این برنامه برای چه کسانی مناسب است؟")}</h2>
      <div className="elig-wrap">
        <div className="elig-row">
          {profiles.map((p) => (
            <div key={p.label} className="elig-cell">
              <div className="elig-ico">{p.icon}</div>
              <span>{t(p.label, p.labelFa)}</span>
              {lang === "fa" && p.descFa && (
                <p className="elig-desc">{p.descFa}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
