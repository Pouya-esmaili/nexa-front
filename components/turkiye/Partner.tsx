"use client";

import Link from "next/link";
import { useLang } from "@/components/global/LanguageProvider";

const points: { en: string; fa: string }[] = [
  { en: "Carefully selected investment opportunities", fa: "فرصت‌های سرمایه‌گذاری با دقت انتخاب‌شده" },
  { en: "Local industry & market expertise", fa: "تخصص در صنعت و بازار محلی" },
  { en: "Operational transparency end-to-end", fa: "شفافیت عملیاتی سرتاسری" },
  { en: "On-the-ground execution capabilities", fa: "قابلیت‌های اجرایی در محل" },
];

const Check = () => (
  <span className="check">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
      <path d="M5 12l4 4 10-10" />
    </svg>
  </span>
);

export default function Partner() {
  const { t } = useLang();
  return (
    <section className="partner">
      <h2 className="section-title">{t("Our Strategic Real Estate Partner in Türkiye", "شریک راهبردی املاک ما در ترکیه")}</h2>
      <div className="partner-grid">
        <div className="partner-left">
          <div className="partner-card">
            <div className="partner-card-head">
              <span className="partner-logo">Ö</span>
              <div>
                <strong>Önaylar Group</strong>
                <small>{t("Real estate & construction · Izmir, Türkiye", "املاک و ساخت‌وساز · ازمیر، ترکیه")}</small>
              </div>
            </div>
            <p>
              {t("Nexa operates in strategic partnership with", "نکسا در مشارکت راهبردی با")} <strong>Önaylar Group</strong> {t("— a well-established real estate and construction company based in Izmir with significant experience in property development, construction, and real estate operations across Türkiye.", "فعالیت می‌کند — یک شرکت املاک و ساخت‌وساز تثبیت‌شده مستقر در ازمیر با تجربه‌ی چشمگیر در توسعه‌ی ملک، ساخت‌وساز و عملیات املاک در سراسر ترکیه.")}
            </p>
            <ul className="partner-points">
              {points.map((p) => (
                <li key={p.en}>
                  <Check /> {t(p.en, p.fa)}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="partner-right">
          <div className="partner-purple">
            <div className="pp-pill">{t("Integrated Migration Platform", "پلتفرم یکپارچه‌ی مهاجرت")}</div>
            <h3>{t("Structured consulting paired with on-the-ground real estate execution.", "مشاوره‌ی ساختارمند همراه با اجرای املاک در محل.")}</h3>
            <p>
              {t("By integrating structured consulting with experienced real estate operations in Türkiye, Nexa delivers a more secure, transparent, and professionally managed investment migration experience.", "با یکپارچه‌سازی مشاوره‌ی ساختارمند با عملیات باتجربه‌ی املاک در ترکیه، نکسا یک تجربه‌ی مهاجرت سرمایه‌گذاری امن‌تر، شفاف‌تر و حرفه‌ای‌تر مدیریت‌شده ارائه می‌دهد.")}
            </p>
            <Link className="btn-light" href="#contact">
              {t("Book a strategy call", "رزرو تماس راهبردی")}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
