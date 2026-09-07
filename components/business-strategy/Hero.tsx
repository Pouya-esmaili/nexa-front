"use client";

import { useLang } from "@/components/global/LanguageProvider";

export default function Hero() {
  const { t } = useLang();
  return (
    <section className="hero strategy-hero">
      <div className="wrap strategy-hero-grid">
        <div className="strategy-hero-copy">
          <h1 className="title">
            <span className="out">{t("Strategy", "استراتژی‌ای")}</span>
            <span>{t("That", "که")}</span>
            <span className="purple">{t("Works.", "نتیجه می‌سازد.")}</span>
          </h1>
          <p>
            {t(
              "We connect business design, brand, go-to-market, market intelligence, and decision-ready documentation into one clear system.",
              "ما طراحی مدل کسب‌وکار، استراتژی برند، ورود به بازار، تحلیل بازار و مستندسازی را در یک سیستم منسجم کنار هم قرار می‌دهیم تا مسیر رشد کسب‌وکار روشن، قابل اجرا و مبتنی بر داده باشد."
            )}
          </p>
          <div className="hero-actions">
            <a className="btn" href="#contact">{t("Start a Strategy Project", "شروع یک پروژه")}</a>
            <a className="btn btn-secondary" href="#services">{t("Explore Services", "مشاهده خدمات")}</a>
          </div>
        </div>
        <div className="hero-video-wrap">
          <img src="/images/business-strategy/001-hero.gif" alt={t("Animated Nexa business and market strategy visual", "تصویر متحرک استراتژی کسب‌وکار و بازار نکسا")} />
        </div>
      </div>
    </section>
  );
}
