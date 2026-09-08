"use client";

import { useLang } from "@/components/global/LanguageProvider";

const WORKS = [
  {
    img: "002-market-growth-plan.jpg",
    extraClass: "",
    status: "CONFIDENTIAL PROJECT", statusFa: "پروژه محرمانه",
    small: "BUSINESS PLAN / MARKET ENTRY", smallFa: "بیزنس‌پلن / ورود به بازار",
    title: "Landa Gene", titleFa: "Landa Gene",
    desc: "Business model, market sizing, financial logic, and launch roadmap.",
    descFa: "مدل کسب‌وکار، اندازه بازار، منطق مالی و نقشه راه ورود به بازار.",
  },
  {
    img: "003-venture-pitch.jpg",
    extraClass: "wc2",
    status: "PREVIEW AVAILABLE", statusFa: "پیش‌نمایش",
    small: "PITCH DECK / INVESTMENT STORY", smallFa: "Pitch Deck / روایت سرمایه‌گذاری",
    title: "Furlo", titleFa: "Furlo",
    desc: "Strategy, story, evidence, and investor presentation.",
    descFa: "استراتژی، روایت، شواهد و ارائه‌ای که کسب‌وکار را برای گفت‌وگو با سرمایه‌گذاران آماده می‌کند.",
  },
  {
    img: "004-autilab-pitch-deck.jpg",
    extraClass: "wc3",
    status: "CASE STUDY", statusFa: "بررسی یک پروژه",
    small: "MARKET ANALYSIS / BRAND", smallFa: "تحلیل بازار / برند",
    title: "Autilab", titleFa: "Autilab",
    desc: "Competition, customers, whitespace, and strategic position.",
    descFa: "بررسی رقبا، مشتریان، فضای خالی بازار و جایگاه استراتژیک برند.",
  },
];

export default function Work() {
  const { t } = useLang();
  return (
    <section id="work" className="work-section">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="ey">{t("/ Selected Strategy Work", "/ نمونه پروژه‌های استراتژیک")}</span>
            <h2 className="title">
              <span className="out">{t("Thinking Made", "استراتژی وقتی")}</span>
              <span>{t("Visible And", "ارزشمند است")}</span>
              <span className="purple">{t("Useful.", "که قابل استفاده باشد.")}</span>
            </h2>
          </div>
          <p>
            {t(
              "A flexible showcase for business plans, pitch decks, market studies, and strategic programmes.",
              "نمونه‌ای از بیزنس‌پلن‌ها، Pitch Deckها، مطالعات بازار و پروژه‌های استراتژیکی که برای تبدیل ایده‌ها و تحلیل‌ها به تصمیم‌های واقعی طراحی شده‌اند."
            )}
          </p>
        </div>
        <div className="work-grid">
          {WORKS.map((w) => (
            <article className={`work-card${w.extraClass ? ` ${w.extraClass}` : ""}`} key={w.img}>
              <div className="work-cover" style={{ backgroundImage: `url(/images/business-strategy/${w.img})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
              <span className="work-status">{t(w.status, w.statusFa)}</span>
              <div className="work-meta">
                <small>{t(w.small, w.smallFa)}</small>
                <strong>{t(w.title, w.titleFa)}</strong>
                <p>{t(w.desc, w.descFa)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
