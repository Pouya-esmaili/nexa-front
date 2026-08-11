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
              <span className="vi-o">{t("Your Brand", "برند شما")}</span>
              <br />
              <span className="vi-s">{t("Speaks", "پیش از آنکه")}</span>
              <br />
              <span className="vi-p">{t("Before You Do.", "خودتان بگویید، حرف می‌زند.")}</span>
            </h1>
            <p className="vi-hero__sub">
              {t(
                "Before anyone reads your pitch deck or visits your site, they've already formed an opinion of your business. We design the visual identity that opinion is built on — logo, color, type, and everything it touches.",
                "پیش از آنکه کسی پیچ‌دک شما را بخواند یا از سایتتان بازدید کند، پیش‌تر درباره‌ی کسب‌وکارتان به یک برداشت رسیده است. ما هویت بصری‌ای طراحی می‌کنیم که آن برداشت روی آن شکل می‌گیرد — لوگو، رنگ، تایپوگرافی و هر چیزی که با آن در تماس است."
              )}
            </p>
            <div className="vi-hero__actions">
              <a href="#work" className="btn-primary">{t("See The Work", "کارها را ببینید")}</a>
              <span className="vi-hero__note">{t("Fixed price · Proposal in 48 hours", "قیمت ثابت · ارائه‌ی پیشنهاد ظرف ۴۸ ساعت")}</span>
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
