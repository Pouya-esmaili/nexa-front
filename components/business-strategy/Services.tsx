"use client";

import { useLang } from "@/components/global/LanguageProvider";

const SERVICES = [
  {
    idx: "01",
    icon: "svc-ico-model",
    eyebrow: "Design", eyebrowFa: "طراحی",
    tag: "Business Model", tagFa: "مدل کسب‌وکار",
    desc: "A validated model with clear economics, pricing logic, and a delivery plan you can execute right away.",
    descFa: "مدلی اعتبارسنجی‌شده با ساختار درآمدی شفاف، منطق قیمت‌گذاری مشخص و سازوکاری عملی برای ارائه ارزش به مشتری.",
    items: [
      { en: "Business model canvas & logic", fa: "طراحی مدل و منطق کسب‌وکار" },
      { en: "Pricing & unit economics", fa: "قیمت‌گذاری و اقتصاد واحد" },
      { en: "Delivery system design", fa: "طراحی سیستم ارائه خدمات" },
    ],
  },
  {
    idx: "02",
    icon: "svc-ico-brand",
    eyebrow: "Define", eyebrowFa: "تعریف",
    tag: "Brand Strategy", tagFa: "استراتژی برند",
    desc: "An ownable position, message, and narrative your whole team can apply consistently.",
    descFa: "جایگاهی متمایز، پیام‌هایی روشن و روایتی منسجم که تمام اعضای تیم بتوانند به‌درستی از آن استفاده کنند.",
    items: [
      { en: "Positioning & category definition", fa: "جایگاه‌سازی و تعریف جایگاه برند" },
      { en: "Brand voice & messaging", fa: "لحن و پیام برند" },
      { en: "Visual identity direction", fa: "جهت‌گیری هویت بصری" },
    ],
  },
  {
    idx: "03",
    icon: "svc-ico-gtm",
    eyebrow: "Enter", eyebrowFa: "ورود",
    tag: "Go-To-Market", tagFa: "استراتژی ورود به بازار",
    desc: "A prioritized channel and launch plan built around how your buyer actually decides.",
    descFa: "یک برنامه اولویت‌بندی‌شده برای انتخاب کانال‌ها و زمان‌بندی عرضه، بر اساس نحوه واقعی تصمیم‌گیری مشتری.",
    items: [
      { en: "Audience & channel strategy", fa: "استراتژی مخاطب و کانال" },
      { en: "Launch sequencing & priorities", fa: "اولویت‌بندی و زمان‌بندی عرضه" },
      { en: "Early traction plan", fa: "برنامه دستیابی به اولین Traction" },
    ],
  },
  {
    idx: "04",
    icon: "svc-ico-analysis",
    eyebrow: "Analyze", eyebrowFa: "تحلیل",
    tag: "Market Analysis", tagFa: "تحلیل بازار",
    desc: "A sized opportunity map with competitive landscape and the evidence behind it.",
    descFa: "تصویری مبتنی بر داده از اندازه بازار، فضای رقابتی و فرصت‌هایی که می‌توان روی آن‌ها حساب کرد.",
    items: [
      { en: "Market sizing & trends", fa: "اندازه بازار و روندها" },
      { en: "Competitive landscape", fa: "تحلیل فضای رقابتی" },
      { en: "Opportunity mapping", fa: "شناسایی و نقشه‌برداری فرصت‌ها" },
    ],
  },
  {
    idx: "05",
    icon: "svc-ico-docs",
    eyebrow: "Document", eyebrowFa: "مستندسازی",
    tag: "Documentation", tagFa: "مستندات کسب‌وکار",
    desc: "Investor-ready decks, plans, and reports that turn strategy into an approved decision.",
    descFa: "بیزنس‌پلن، Pitch Deck و گزارش‌های استراتژیک حرفه‌ای که استراتژی را به اسنادی قابل ارائه و مبنایی برای تصمیم‌گیری تبدیل می‌کنند.",
    items: [
      { en: "Business plans", fa: "بیزنس‌پلن" },
      { en: "Investor pitch decks", fa: "Pitch Deck سرمایه‌گذاری" },
      { en: "Strategic reports", fa: "گزارش‌های استراتژیک" },
    ],
  },
];

export default function Services() {
  const { t, n } = useLang();
  return (
    <section id="services" className="services-section svc-section">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="ey">{t("/ Strategic Services", "/ خدمات استراتژیک")}</span>
            <h2 className="title">
              <span className="out">{t("Five Disciplines.", "پنج تخصص.")}</span>
              <span>{t("One Growth", "یک مسیر")}</span>
              <span className="purple">{t("System.", "برای رشد.")}</span>
            </h2>
          </div>
          <p>
            {t(
              "Everything a growing business needs to decide, position, launch, and prove its next move—delivered as five focused services.",
              "از طراحی مدل کسب‌وکار و جایگاه‌سازی برند تا ورود به بازار، تحلیل فرصت‌ها و آماده‌سازی اسناد تصمیم‌گیری؛ تمام آنچه یک کسب‌وکار در مسیر رشد برای تصمیم‌گیری و حرکت به مرحله بعد نیاز دارد، در قالب پنج خدمت تخصصی."
            )}
          </p>
        </div>
        <div className="svc-cards">
          {SERVICES.map((s) => (
            <article className="svc-card" key={s.idx}>
              <div className="svc-card-top">
                <div className={`svc-ico ${s.icon}`}><i></i></div>
                <span className="svc-idx">{n(s.idx)}</span>
              </div>
              <span className="svc-eyebrow">{t(s.eyebrow, s.eyebrowFa)}</span>
              <span className="svc-tag">{t(s.tag, s.tagFa)}</span>
              <p>{t(s.desc, s.descFa)}</p>
              <ul className="svc-list">
                {s.items.map((it) => (
                  <li key={it.en}>{t(it.en, it.fa)}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
