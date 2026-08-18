"use client";

import { useLang } from "@/components/global/LanguageProvider";

const benefits = [
  {
    num: "01",
    title: "Global mobility",
    titleFa: "دسترسی بین‌المللی",
    desc: "Visa-free or visa-on-arrival access to 110+ international destinations — strengthened by Türkiye's growing diplomatic relationships.",
    descFa: "امکان سفر بدون ویزا یا با ویزای فرودگاهی به بیش از ۱۱۰ مقصد بین‌المللی، در کنار روابط دیپلماتیک رو به گسترش ترکیه.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12l18-8-4 18-5-7-9-3z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Family inclusion",
    titleFa: "پوشش خانواده",
    desc: "Include your spouse and dependent children — securing mobility for the whole family.",
    descFa: "امکان اضافه کردن همسر و فرزندان واجد شرایط و فراهم کردن یک مسیر اقامتی و تابعیتی برای کل خانواده.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.4" />
        <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M14 20c0-2.6 1.8-4.5 4-4.5s4 1.9 4 4.5" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Business expansion",
    titleFa: "توسعه کسب‌وکار",
    desc: "Operate at the crossroads of Europe, Central Asia, the Gulf and Africa.",
    descFa: "قرار گرفتن در نقطه اتصال بازارهای اروپا، آسیای مرکزی، خلیج فارس و آفریقا و دسترسی به شبکه‌های تجاری گسترده منطقه.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 17l6-6 4 4 8-9" /><path d="M14 6h7v7" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Property appreciation",
    titleFa: "پتانسیل رشد ارزش ملک",
    desc: "Major cities undergoing urban transformation — capital growth and rental income potential.",
    descFa: "شهرهای بزرگ ترکیه همچنان در حال توسعه و نوسازی هستند و این موضوع می‌تواند فرصت‌هایی برای رشد ارزش سرمایه و درآمد اجاره‌ای ایجاد کند.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Lifestyle advantages",
    titleFa: "مزایای سبک زندگی",
    desc: "Modern cities, coastal destinations and globally connected international healthcare.",
    descFa: "ترکیبی از شهرهای مدرن، مناطق ساحلی، امکانات شهری و دسترسی به خدمات درمانی بین‌المللی.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.5 4.5l2 2M17.5 17.5l2 2M4.5 19.5l2-2M17.5 6.5l2-2" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Fast processing",
    titleFa: "فرایند نسبتاً سریع",
    desc: "Typical timeline of 6–12 months — one of the fastest CBI pathways available.",
    descFa: "مدت زمان معمول فرایند حدود ۶ تا ۱۲ ماه است و ترکیه را به یکی از مسیرهای سریع شهروندی از طریق سرمایه‌گذاری تبدیل کرده است.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
      </svg>
    ),
  },
];

export default function Benefits() {
  const { t } = useLang();
  return (
    <section className="benefits">
      <h2 className="section-title">{t("Key Benefits of Turkish Citizenship", "مزایای اصلی شهروندی ترکیه")}</h2>
      <div className="benefits-grid">
        {benefits.map((b) => (
          <article key={b.num} className="benefit">
            <div className="benefit-ico">{b.icon}</div>
            <span className="benefit-num">{b.num}</span>
            <h3>{t(b.title, b.titleFa)}</h3>
            <p>{t(b.desc, b.descFa)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
