"use client";

import { useLang } from "@/components/global/LanguageProvider";

const STEPS = [
  { num: "01", title: "Discover", titleFa: "کشف", desc: "We learn the business, the market and who the identity actually needs to convince.", descFa: "کسب‌وکار، بازار و مخاطبی که هویت باید متقاعد کند را می‌شناسیم." },
  { num: "02", title: "Design", titleFa: "طراحی", desc: "Concepts, then refinement — logo, palette and type developed together, not in isolation.", descFa: "کانسپت‌ها، سپس اصلاح — لوگو، پالت و تایپ با هم توسعه می‌یابند، نه جدا از هم." },
  { num: "03", title: "Deliver", titleFa: "تحویل", desc: "Every file, every format, and a guideline doc — ready to hand to a printer, a developer or a new hire.", descFa: "هر فایل، هر فرمت و یک سند راهنما — آماده‌ی تحویل به چاپخانه، توسعه‌دهنده یا نیروی تازه‌وارد." },
];

export default function Process() {
  const { t } = useLang();
  return (
    <section className="vi-section vi-process">
      <div className="wrap">
        <span className="vi-label">{t("/ HOW WE WORK", "/ روش کار ما")}</span>
        <h2 className="editorial-h2">
          <span className="eh2-outline">{t("FROM BRIEF", "از بریف")}</span>
          <br />
          <span className="eh2-solid">{t("TO", "تا")}</span> <span className="eh2-purple">{t("FINISHED SYSTEM.", "سیستم نهایی.")}</span>
        </h2>
        <div className="vi-proc__grid">
          {STEPS.map((s) => (
            <div className="vi-proc__card" key={s.num}>
              <div className="vi-proc__num">{s.num}</div>
              <h4>{t(s.title, s.titleFa)}</h4>
              <p>{t(s.desc, s.descFa)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
