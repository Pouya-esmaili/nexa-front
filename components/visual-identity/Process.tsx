"use client";

import { useLang } from "@/components/global/LanguageProvider";

const STEPS = [
  { num: "01", title: "Discover", titleFa: "کشف و شناخت", desc: "We learn the business, the market and who the identity actually needs to convince.", descFa: "کسب‌وکار، بازار و مخاطبانی را می‌شناسیم که این هویت باید آن‌ها را تحت تأثیر قرار دهد." },
  { num: "02", title: "Design", titleFa: "طراحی", desc: "Concepts, then refinement — logo, palette and type developed together, not in isolation.", descFa: "از شکل‌گیری کانسپت تا اصلاح و نهایی‌سازی؛ لوگو، پالت رنگ و تایپوگرافی را در کنار هم توسعه می‌دهیم، نه به‌صورت جداگانه." },
  { num: "03", title: "Deliver", titleFa: "تحویل", desc: "Every file, every format, and a guideline doc — ready to hand to a printer, a developer or a new hire.", descFa: "تمام فایل‌ها، فرمت‌های موردنیاز و یک راهنمای جامع برند را تحویل می‌دهیم؛ آماده استفاده توسط چاپخانه، توسعه‌دهنده یا اعضای جدید تیم." },
];

export default function Process() {
  const { t, n } = useLang();
  return (
    <section className="vi-section vi-process">
      <div className="wrap">
        <span className="vi-label">{t("/ HOW WE WORK", "/ فرآیند همکاری ما")}</span>
        <h2 className="editorial-h2">
          <span className="eh2-outline">{t("FROM BRIEF", "از ایده اولیه")}</span>
          <br />
          <span className="eh2-solid">{t("TO", "تا")}</span> <span className="eh2-purple">{t("FINISHED SYSTEM.", "یک سیستم کامل.")}</span>
        </h2>
        <div className="vi-proc__grid">
          {STEPS.map((s) => (
            <div className="vi-proc__card" key={s.num}>
              <div className="vi-proc__num">{n(s.num)}</div>
              <h4>{t(s.title, s.titleFa)}</h4>
              <p>{t(s.desc, s.descFa)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
