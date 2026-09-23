"use client";

import { useLang } from "@/components/global/LanguageProvider";

export default function Hero() {
  const { t } = useLang();
  return (
    <section className="cc-hero">
      <div className="wrap cc-hero__grid">
        <div>
          <h1 className="vi-hero__title">
            <span className="vi-o">{t("Give Your Brand", "به برندتان")}</span>
            <br />
            <span className="vi-s">{t("Something", "حرفی برای")}</span>
            <br />
            <span className="vi-p">{t("To Say.", "گفتن بدهید.")}</span>
          </h1>
          <p className="vi-hero__sub">
            {t(
              "We create strategic, distinctive content that turns your brand into a consistent presence across the channels that matter — built on a system, not just a feed.",
              "ما محتوایی استراتژیک و متمایز خلق می‌کنیم تا برند شما در تمام کانال‌های مهم، حضوری منسجم و قابل‌تشخیص داشته باشد؛ محتوایی که بر پایه یک سیستم مشخص ساخته می‌شود، نه صرفاً مجموعه‌ای از پست‌ها."
            )}
          </p>
          <div className="vi-hero__actions">
            <a href="#social" className="btn-primary">{t("See The Work", "مشاهده نمونه‌کارها")}</a>
            <a href="#cta" className="vi-hero__secondary">{t("Start Your Project", "شروع پروژه")}</a>
          </div>
        </div>
        <div className="cc-wall cc-wall--video">
          <img className="cc-wall__media" src="/images/content-creation/001-hero-wall.gif" alt={t("NEXA content creation motion", "تصویر متحرک تولید محتوای نکسا")} />
        </div>
      </div>
    </section>
  );
}
