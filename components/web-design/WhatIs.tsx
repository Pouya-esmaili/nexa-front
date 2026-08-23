"use client";

import { useLang } from "@/components/global/LanguageProvider";

export default function WhatIs() {
  const { t } = useLang();
  return (
    <section className="section flow">
      <div className="wrap">
        <div className="cases__head" style={{ marginBottom: 56 }}>
          <div>
            <span className="eyebrow">{t("/ What Is Web Design?", "/ طراحی وب چیست؟")}</span>
            <h2 className="h2">
              <span className="outline">{t("Not Just a", "فقط یک صفحه")}</span>
              <span className="solid">{t("Pretty", "زیبا")}</span>
              <span className="purple">{t("Screen.", "نیست.")}</span>
            </h2>
          </div>
          <p style={{ color: "var(--grey)", fontSize: 15, maxWidth: 360, margin: 0 }}>
            {t(
              "A website isn't a stack of nice-looking pages. It's three parts working together, decided before any pixel gets drawn.",
              "وب‌سایت صرفاً مجموعه‌ای از صفحات چشم‌نواز نیست. یک وب‌سایت موفق از سه بخش به‌هم‌پیوسته تشکیل می‌شود که پیش از طراحی حتی یک پیکسل، باید درباره آن‌ها تصمیم گرفت."
            )}
          </p>
        </div>
        <div className="cluster__grid">
          <div className="cluster">
            <div className="cluster__art" style={{ background: "var(--lav)" }}>
              <svg viewBox="0 0 120 70" fill="none">
                <circle cx="95" cy="18" r="10" fill="none" stroke="var(--purple)" strokeWidth="1.4" opacity=".4" />
                <circle cx="95" cy="18" r="5" fill="none" stroke="var(--purple)" strokeWidth="1.4" opacity=".7" />
                <circle cx="95" cy="18" r="1.6" fill="var(--purple)" />
                <path d="M16 52 Q40 44 55 30 T85 22" stroke="var(--near-black)" strokeWidth="2" strokeLinecap="round" fill="none" />
                <circle cx="16" cy="52" r="3" fill="var(--near-black)" />
                <rect x="25" y="14" width="26" height="18" rx="3" fill="var(--purple)" opacity=".9" />
                <path d="M30 21 H46 M30 26 H40" stroke="rgba(255,255,255,.6)" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>
            <span className="cluster__label">{t("/ Why It Exists", "/ هدف وب‌سایت")}</span>
            <h3 className="cluster__title">{t("Strategy", "استراتژی")}</h3>
            <p className="cluster__desc">
              {t(
                "What the business needs, what the visitor needs, and what the site actually has to say — decided before any screen gets drawn.",
                "پیش از طراحی، مشخص می‌کنیم کسب‌وکار چه می‌خواهد، کاربر به دنبال چیست و وب‌سایت دقیقاً چه پیامی باید منتقل کند."
              )}
            </p>
            <div className="cluster__chips">
              <span className="cluster__chip">{t("Business Goal", "هدف کسب‌وکار")}</span>
              <span className="cluster__chip">{t("User Need", "نیاز کاربر")}</span>
              <span className="cluster__chip">{t("Content", "محتوا")}</span>
            </div>
          </div>

          <div className="cluster">
            <div className="cluster__art" style={{ background: "var(--paper)" }}>
              <svg viewBox="0 0 120 70" fill="none">
                <rect x="46" y="8" width="26" height="16" rx="3" fill="var(--near-black)" />
                <rect x="12" y="42" width="22" height="16" rx="3" fill="#fff" stroke="var(--line)" strokeWidth="1.4" />
                <rect x="46" y="42" width="22" height="16" rx="3" fill="var(--yellow)" stroke="var(--near-black)" strokeWidth="1.1" />
                <rect x="80" y="42" width="22" height="16" rx="3" fill="var(--purple)" />
                <path d="M59 24 V34 M59 34 H23 V42 M59 34 H91 V42" stroke="var(--near-black)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="cluster__label">{t("/ How It's Organized", "/ ساختار وب‌سایت")}</span>
            <h3 className="cluster__title">{t("Structure", "ساختار")}</h3>
            <p className="cluster__desc">
              {t(
                "How pages, content, and navigation are arranged, and the logic of the path someone follows to get where they're going.",
                "صفحات، محتوا و مسیرهای دسترسی را به شکلی طراحی می‌کنیم که کاربر بتواند بدون سردرگمی، مسیر درست را طی کند و به هدف خود برسد."
              )}
            </p>
            <div className="cluster__chips">
              <span className="cluster__chip">{t("Information Architecture", "معماری اطلاعات")}</span>
              <span className="cluster__chip">{t("UX", "تجربه کاربری (UX)")}</span>
            </div>
          </div>

          <div className="cluster">
            <div className="cluster__art" style={{ background: "var(--lav)" }}>
              <svg viewBox="0 0 120 70" fill="none">
                <g transform="rotate(-7 55 34)"><rect x="26" y="14" width="40" height="26" rx="4" fill="#fff" stroke="var(--line)" strokeWidth="1.4" /></g>
                <g transform="rotate(5 65 38)"><rect x="36" y="24" width="40" height="26" rx="4" fill="var(--purple)" /><circle cx="66" cy="37" r="5" fill="var(--yellow)" /></g>
                <path d="M88 46 L100 58" stroke="var(--near-black)" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M94 59 L102 61 L100 53" stroke="var(--near-black)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="cluster__label">{t("/ How It Feels", "/ تجربه کاربر")}</span>
            <h3 className="cluster__title">{t("Experience", "تجربه")}</h3>
            <p className="cluster__desc">
              {t(
                "The visual layer, what responds when someone clicks or scrolls, and the single action the whole page is built to earn.",
                "ظاهر و هویت بصری سایت، نحوه واکنش آن به کلیک و اسکرول و مهم‌تر از همه، اقدامی که می‌خواهیم کاربر انجام دهد، همگی بخشی از تجربه نهایی هستند."
              )}
            </p>
            <div className="cluster__chips">
              <span className="cluster__chip">{t("UI", "رابط کاربری (UI)")}</span>
              <span className="cluster__chip">{t("Interaction", "تعامل")}</span>
              <span className="cluster__chip">{t("Conversion", "نرخ تبدیل")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
