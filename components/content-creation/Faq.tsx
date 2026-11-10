"use client";

import { useState } from "react";
import { useLang } from "@/components/global/LanguageProvider";

const FAQS = [
  {
    q: "What types of content do you create?",
    qFa: "چه نوع محتوایی تولید می‌کنید؟",
    a: "Social content, video and motion, brand content, and full campaign assets — whatever fits your channels and goals.",
    aFa: "محتوای شبکه‌های اجتماعی، ویدیو و موشن، محتوای برند و دارایی‌های کامل کمپین — هر آنچه با کانال‌ها و اهداف شما متناسب باشد.",
  },
  {
    q: "Do you create the content strategy as well?",
    qFa: "آیا استراتژی محتوا را هم طراحی می‌کنید؟",
    a: "Yes. Every project starts with strategy — goals, audience, message and pillars — before we create a single asset.",
    aFa: "بله. هر پروژه با استراتژی شروع می‌شود — اهداف، مخاطب، پیام و ستون‌های محتوا — پیش از تولید حتی یک قطعه محتوا.",
  },
  {
    q: "Can you work with our existing brand identity?",
    qFa: "آیا می‌توانید با هویت برند فعلی ما کار کنید؟",
    a: "Absolutely. We build content systems on top of your existing brand, or alongside a new one we design for you.",
    aFa: "قطعاً. ما سیستم محتوا را بر پایه برند فعلی شما می‌سازیم، یا در کنار هویت جدیدی که برایتان طراحی می‌کنیم.",
  },
  {
    q: "Do you provide ongoing content creation?",
    qFa: "آیا تولید محتوای مستمر هم ارائه می‌دهید؟",
    a: "Yes, we support both one-off campaigns and ongoing monthly content production.",
    aFa: "بله، هم از کمپین‌های یک‌باره و هم از تولید محتوای ماهانه مستمر پشتیبانی می‌کنیم.",
  },
  {
    q: "Can you create content for a specific campaign or launch?",
    qFa: "آیا برای یک کمپین یا رونمایی خاص محتوا تولید می‌کنید؟",
    a: "Definitely — launch campaigns and promotional pushes are some of our most common engagements.",
    aFa: "قطعاً — کمپین‌های رونمایی و تبلیغاتی از رایج‌ترین پروژه‌های ما هستند.",
  },
];

export default function Faq() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="vi-section faq-section">
      <div className="wrap">
        <div className="faq-layout">
          <div className="faq-left">
            <span className="editorial-label">{t("/ FAQ", "/ سوالات متداول")}</span>
            <h2 className="editorial-h2">
              <span className="eh2-outline">{t("QUESTIONS,", "پاسخ به")}</span>
              <span className="eh2-solid">{t("ANSWERED.", "سؤالات مهم شما")}</span>
            </h2>
            <p className="faq-sub">{t("A few things brands usually ask before starting a content project.", "پاسخ به پرسش‌هایی که معمولاً برندها پیش از شروع یک پروژه تولید محتوا درباره مسیر، فرایند و خروجی آن دارند.")}</p>
          </div>
          <div className="faq-list">
            {FAQS.map((f, i) => (
              <div className={`faq-item${open === i ? " open" : ""}`} key={i}>
                <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
                  {t(f.q, f.qFa)} <span className="faq-icon">{open === i ? "−" : "+"}</span>
                </button>
                <div className="faq-a" style={{ maxHeight: open === i ? 300 : 0 }}>
                  <p>{t(f.a, f.aFa)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
