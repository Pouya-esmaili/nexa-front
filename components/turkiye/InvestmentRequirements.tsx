"use client";

import { useLang } from "@/components/global/LanguageProvider";

const cards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" /><path d="M9 8.5h5a2 2 0 0 1 0 4h-4a2 2 0 0 0 0 4h5M12 6v2M12 16v2" />
      </svg>
    ),
    title: "Minimum threshold",
    titleFa: "حداقل سرمایه‌گذاری",
    desc: (<>Purchase qualifying real estate with a minimum value of <strong>USD 600,000</strong>.</>),
    descFa: (<>خرید ملک یا مجموعه‌ای از املاک واجد شرایط با ارزش حداقل <strong>۶۰۰ هزار دلار</strong>.</>),
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
      </svg>
    ),
    title: "3-year holding",
    titleFa: "دوره نگهداری ۳ ساله",
    desc: (<>Maintain ownership for at least <strong>3 years</strong> from the date of acquisition.</>),
    descFa: (<>مالکیت ملک باید حداقل <strong>۳ سال</strong> از تاریخ خرید حفظ شود.</>),
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="6" width="18" height="12" rx="1.5" /><path d="M3 10h18M7 14h3" />
      </svg>
    ),
    title: "Compliant banking",
    titleFa: "انجام تراکنش از مسیرهای رسمی",
    desc: "Complete the transaction through official banking channels and Turkish financial regulations.",
    descFa: "پرداخت و انتقال وجه باید مطابق مقررات بانکی و مالی ترکیه و از طریق کانال‌های رسمی انجام شود.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z" /><path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Authorized approvals",
    titleFa: "ارزیابی و تأیید رسمی",
    desc: "Obtain official valuation and eligibility approvals from government-authorized authorities.",
    descFa: "ارزش ملک و واجد شرایط بودن سرمایه‌گذاری باید توسط مراجع ذی‌صلاح مورد تأیید قرار گیرد.",
  },
];

const chips: { en: string; fa: string }[] = [
  { en: "Residential apartments", fa: "آپارتمان‌های مسکونی" },
  { en: "Commercial units", fa: "واحدهای تجاری" },
  { en: "Villas", fa: "ویلاها" },
  { en: "Approved developments", fa: "پروژه‌های مورد تأیید" },
  { en: "Combined structures", fa: "ترکیب چند ملک واجد شرایط" },
];

export default function InvestmentRequirements() {
  const { t, lang } = useLang();
  return (
    <section className="reqs">
      <h2 className="section-title light">{t("Investment Requirements, Costs & Financial Structure", "الزامات سرمایه‌گذاری، هزینه‌ها و ساختار مالی")}</h2>
      <div className="reqs-layout">
        <aside className="reqs-hero">
          <div className="reqs-hero-pill">{t("Minimum threshold", "حداقل سرمایه‌گذاری")}</div>
          <div className="reqs-hero-stat">
            <span className="prefix">{t("USD", "دلار")}</span>
            <span className="figure">{t("600K", "۶۰۰ هزار")}</span>
          </div>
          <p className="reqs-hero-meta">
            {lang === "fa"
              ? (<>حداقل ارزش ملک واجد شرایط برای ورود به مسیر شهروندی، مطابق با الزامات فعلی برنامه، با الزام به حفظ سرمایه‌گذاری برای حداقل <strong>۳ سال</strong>.</>)
              : (<>Qualifying real estate value established by the Turkish government — held for a minimum of <strong>3 years</strong>.</>)}
          </p>
          <div className="reqs-hero-chips">
            {chips.map((c) => (
              <span key={c.en}>{t(c.en, c.fa)}</span>
            ))}
          </div>
        </aside>
        <div className="reqs-grid">
          {cards.map((c) => (
            <article key={c.title} className="req-card">
              <div className="req-ico">{c.icon}</div>
              <h3>{t(c.title, c.titleFa)}</h3>
              <p>{lang === "fa" ? c.descFa : c.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
