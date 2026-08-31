"use client";

import { useLang } from "@/components/global/LanguageProvider";

export default function Hero() {
  const { t } = useLang();
  return (
    <section className="hero">
      <div className="wrap hero__grid">
        <div>
          <h1 className="hero__title">
            <span className="stroke">{t("A Website Is", "وب‌سایت،")}</span>
            <span className="ink">{t("a Business", "نقطه اتصال کسب‌وکار شما")}</span>
            <span className="fill">{t("Interface.", "با مخاطب است.")}</span>
          </h1>
          <p className="hero__sub">
            {t(
              "Not just a beautiful website — an experience that connects your business goal, your user's intent, and your brand into one working system.",
              "ما فقط یک وب‌سایت برای شما طراحی نمی‌کنیم؛ تجربه‌ای می‌سازیم که هدف کسب‌وکار، نیاز کاربر و هویت برند را در یک سیستم منسجم به هم متصل می‌کند."
            )}
          </p>
          <div className="hero__actions">
            <a href="#cta" className="btn-primary">{t("Start Your Project", "شروع پروژه ←")}</a>
            <a href="#process" className="btn-ghost">{t("See Our Process", "فرآیند طراحی ما")}</a>
          </div>
        </div>
        <div className="diagram">
          <video className="hero-video" autoPlay muted loop playsInline preload="auto" aria-label="Web design interface motion">
            <source src="/images/web-design/motion.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
