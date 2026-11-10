"use client";

import { useLang } from "@/components/global/LanguageProvider";

const ROWS = [
  { label: "Content Direction", labelFa: "استراتژی محتوا", items: "Content pillars · Topics · Messaging · Creative direction", itemsFa: "ستون‌های محتوا · موضوعات · پیام‌های کلیدی · مسیر خلاقانه" },
  { label: "Content Assets", labelFa: "محتوای تولیدشده", items: "Posts · Carousels · Stories · Videos · Campaign assets", itemsFa: "پست · کاروسل · استوری · ویدئو · محتوای کمپین" },
  { label: "Content System", labelFa: "سیستم محتوایی", items: "Templates · Visual language · Format system · Guidelines", itemsFa: "قالب‌ها · زبان بصری · ساختار فرمت‌ها · راهنمای اجرا" },
  { label: "Content Plan", labelFa: "برنامه محتوا", items: "Content calendar · Publishing plan · Campaign structure", itemsFa: "تقویم محتوایی · برنامه انتشار · ساختار کمپین‌ها" },
];

export default function Deliver() {
  const { t } = useLang();
  return (
    <section className="vi-section cc-deliver">
      <div className="wrap">
        <div>
          <span className="vi-label">{t("/ DELIVERABLES", "/ خروجی‌ها")}</span>
          <h2 className="editorial-h2">
            <span className="eh2-outline">{t("MORE THAN", "فراتر از")}</span>
            <span className="eh2-solid">{t("CONTENT.", "تولید محتوا.")}</span>
          </h2>
          <p className="cc-deliver__sub">{t("A structured content system built around your brand and business goals.", "یک سیستم منسجم برای تولید و مدیریت محتوا، متناسب با هویت برند و اهداف کسب‌وکار شما.")}</p>
        </div>
        <div className="cc-manifest">
          {ROWS.map((r) => (
            <div className="cc-manifest__row" key={r.label}>
              <div className="cc-manifest__label"><span className="cc-manifest__check">✓</span>{t(r.label, r.labelFa)}</div>
              <div className="cc-manifest__items">{t(r.items, r.itemsFa)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
