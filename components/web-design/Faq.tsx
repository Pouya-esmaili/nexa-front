"use client";

import { useState } from "react";
import { useLang } from "@/components/global/LanguageProvider";

const FAQS = [
  {
    q: "How long does a website project take?",
    qFa: "یک پروژه وب‌سایت چقدر طول می‌کشد؟",
    a: "Most projects run 4–6 weeks from discovery to launch, depending on scope. We'll give you an exact timeline after the discovery call.",
    aFa: "بیشتر پروژه‌ها بسته به دامنه کار، ۴ تا ۶ هفته از مرحله کشف تا راه‌اندازی طول می‌کشند. بعد از تماس کشف، جدول زمانی دقیق را اعلام می‌کنیم.",
  },
  {
    q: "Do you build the website too, or just design it?",
    qFa: "آیا وب‌سایت را هم می‌سازید یا فقط طراحی می‌کنید؟",
    a: "Both. We design and build the working site — UX, UI, and development — so what you approve is exactly what goes live.",
    aFa: "هر دو. ما سایت را هم طراحی و هم توسعه می‌دهیم — تجربه کاربری، رابط کاربری و کدنویسی — بنابراین چیزی که تأیید می‌کنید دقیقاً همانی است که آنلاین می‌شود.",
  },
  {
    q: "Can you redesign our existing website?",
    qFa: "آیا می‌توانید وب‌سایت فعلی ما را بازطراحی کنید؟",
    a: "Yes. We audit what's working and what isn't, then rebuild around a clear structure rather than changing things for the sake of it.",
    aFa: "بله. آنچه را که کار می‌کند و آنچه را که کار نمی‌کند بررسی می‌کنیم و بر پایه‌ی یک ساختار روشن بازسازی می‌کنیم، نه صرفاً برای تغییر دادن.",
  },
  {
    q: "Will I be able to update the site myself later?",
    qFa: "آیا بعداً می‌توانم خودم سایت را به‌روزرسانی کنم؟",
    a: "Yes — every site ships with an editable CMS and a short handoff walkthrough, so your team can update content without touching code.",
    aFa: "بله — هر سایت با یک CMS قابل‌ویرایش و یک راهنمای کوتاه تحویل داده می‌شود تا تیم شما بتواند بدون نیاز به کدنویسی، محتوا را به‌روزرسانی کند.",
  },
  {
    q: "What do you need from us to get started?",
    qFa: "برای شروع به چه چیزی از ما نیاز دارید؟",
    a: "Just a clear picture of your business goals and any existing brand assets. We handle the strategy, content structure, and design from there.",
    aFa: "فقط یک تصویر روشن از اهداف کسب‌وکار و هر دارایی برند موجود. بقیه‌ی مسیر — استراتژی، ساختار محتوا و طراحی — با ماست.",
  },
];

export default function Faq() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="faq-section">
      <div className="wrap">
        <div className="faq-layout">
          <div className="faq-left">
            <span className="eyebrow">{t("/ FAQ", "/ پرسش‌های متداول")}</span>
            <h2 className="h2">
              <span className="outline">{t("Still", "هنوز")}</span>
              <span className="solid">{t("Deciding?", "تصمیم نگرفته‌اید؟")}</span>
            </h2>
            <p className="faq-sub">{t("A few things people usually ask before starting a web design project.", "چند سؤال رایج که معمولاً قبل از شروع یک پروژه طراحی وب مطرح می‌شوند.")}</p>
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
