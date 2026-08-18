"use client";

import { useLang } from "@/components/global/LanguageProvider";

const SURFACES = [
  { img: "017-img.jpg", title: "BRAND APPLICATIONS", titleFa: "کاربردهای برند", sub: "Web & Mobile UI", subFa: "رابط کاربری وب و موبایل" },
  { img: "018-img.jpg", title: "STATIONERY", titleFa: "ست اداری", sub: "Print Collateral", subFa: "اقلام چاپی و سازمانی" },
  { img: "019-img.jpg", title: "SOCIAL MEDIA", titleFa: "شبکه‌های اجتماعی", sub: "Campaign Templates", subFa: "قالب‌های آماده کمپین" },
  { img: "020-img.jpg", title: "ICONOGRAPHY", titleFa: "آیکونوگرافی", sub: "Vector Icon Set", subFa: "مجموعه آیکون وکتور" },
];

export default function Apps() {
  const { t } = useLang();
  return (
    <section className="vi-section vi-apps">
      <div className="wrap">
        <div className="vi-comp-intro">
          <span className="vi-label">{t("/ IN THE WILD", "/ در دنیای واقعی")}</span>
          <h2 className="editorial-h2">
            <span className="eh2-outline">{t("ONE SYSTEM,", "یک سیستم،")}</span> <span className="eh2-purple">{t("EVERY SURFACE.", "برای تمام نقاط تماس.")}</span>
          </h2>
          <p className="vi-intro-p">{t("Explore the unified brand system across digital web applications, executive print stationery, social campaign grids, and vector iconography.", "هویت برند را در تمام سطوح تجربه کنید؛ از وب‌سایت و اپلیکیشن گرفته تا اقلام چاپی، کمپین‌های شبکه‌های اجتماعی و مجموعه آیکون‌های وکتور.")}</p>
        </div>
        <div className="vi-surfaces-grid">
          {SURFACES.map((s) => (
            <div className="vi-surface-card" key={s.img}>
              <div className="vi-surface-card__image-wrap">
                <img src={`/images/visual-identity/${s.img}`} alt={s.title} className="vi-surface-card__img" />
              </div>
              <div className="vi-surface-card__meta">
                <h3 className="vi-surface-card__title">{t(s.title, s.titleFa)}</h3>
                <span className="vi-surface-card__sub">{t(s.sub, s.subFa)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
