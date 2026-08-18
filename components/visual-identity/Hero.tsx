"use client";

import { useLang } from "@/components/global/LanguageProvider";

export default function Hero() {
  const { t } = useLang();
  return (
    <section className="vi-hero">
      <div className="wrap">
        <div className="vi-hero__grid">
          <div>
            <h1 className="vi-hero__title">
              <span className="vi-o">{t("Your Brand", "پیش از شما،")}</span>
              <br />
              <span className="vi-s">{t("Speaks", "این برند شماست")}</span>
              <br />
              <span className="vi-p">{t("Before You Do.", "که حرف می‌زند.")}</span>
            </h1>
            <p className="vi-hero__sub">
              {t(
                "Before anyone reads your pitch deck or visits your site, they've already formed an opinion of your business. We design the visual identity that opinion is built on — logo, color, type, and everything it touches.",
                "پیش از آنکه کسی Pitch Deck شما را بخواند یا وارد وب‌سایتتان شود، تصویری از کسب‌وکار شما در ذهنش شکل گرفته است. ما همان تصویر را می‌سازیم؛ از لوگو و رنگ گرفته تا تایپوگرافی و تمام جزئیاتی که هویت برند شما را شکل می‌دهند."
              )}
            </p>
            <div className="vi-hero__actions">
              <a href="#work" className="btn-primary">{t("See The Work", "مشاهده نمونه‌کارها →")}</a>
              <span className="vi-hero__note">{t("Fixed price · Proposal in 48 hours", "قیمت ثابت · ارائه پیشنهاد ظرف ۴۸ ساعت")}</span>
            </div>
          </div>
          <div className="vi-hero__video-card">
            <video className="vi-hero__video" autoPlay loop muted playsInline preload="auto">
              <source src="/images/visual-identity/001-img.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
