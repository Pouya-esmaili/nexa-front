"use client";

import { useState } from "react";
import { useLang } from "@/components/global/LanguageProvider";

const FAQS = [
  { q: "Should early-stage startups invest in branding?", qFa: "آیا استارتاپ‌های مرحله‌ی اولیه باید روی برندسازی سرمایه‌گذاری کنند؟", a: "Yes — especially early. A clear identity makes every investor conversation, hire and early customer interaction easier, and it's cheaper to build it right the first time.", aFa: "بله — به‌خصوص در مراحل اولیه. یک هویت شفاف هر مکالمه با سرمایه‌گذار، هر استخدام و هر تعامل با مشتریان اولیه را ساده‌تر می‌کند، و ساختن درست آن از همان ابتدا ارزان‌تر تمام می‌شود." },
  { q: "Is visual identity different from brand strategy?", qFa: "آیا هویت بصری با استراتژی برند تفاوت دارد؟", a: "Yes. Strategy defines your positioning and message. Visual identity is how that strategy looks. We offer both — see Brand Strategy if you need to start there first.", aFa: "بله. استراتژی، جایگاه و پیام شما را تعریف می‌کند. هویت بصری، ظاهر آن استراتژی است. ما هر دو را ارائه می‌دهیم — اگر لازم است از آن‌جا شروع کنید، بخش استراتژی برند را ببینید." },
  { q: "Can you redesign an existing brand?", qFa: "آیا می‌توانید یک برند موجود را بازطراحی کنید؟", a: "Yes. We audit what's working and what isn't, and rebuild around a clear direction rather than changing things for the sake of it.", aFa: "بله. آنچه را که کار می‌کند و آنچه را که کار نمی‌کند بررسی می‌کنیم و بر پایه‌ی یک جهت‌گیری روشن بازسازی می‌کنیم، نه صرفاً برای تغییر دادن." },
  { q: "Will I receive editable assets?", qFa: "آیا فایل‌های قابل‌ویرایش دریافت می‌کنم؟", a: "Yes — full source files, a usage guideline document, and everything needed to hand off to an internal team or future hire.", aFa: "بله — فایل‌های منبع کامل، یک سند راهنمای استفاده و هر آنچه برای تحویل به تیم داخلی یا نیروی آینده لازم است." },
  { q: "How long does a visual identity project take?", qFa: "یک پروژه‌ی هویت بصری چقدر طول می‌کشد؟", a: "Most identity projects run 3–5 weeks depending on scope. We'll give you an exact timeline after the discovery call.", aFa: "بیشتر پروژه‌های هویت بصری بسته به دامنه‌ی کار ۳ تا ۵ هفته طول می‌کشند. بعد از تماس کشف، جدول زمانی دقیق را اعلام می‌کنیم." },
];

export default function Faq() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="vi-section faq-section">
      <div className="wrap">
        <div className="faq-layout">
          <div className="faq-left">
            <span className="editorial-label">{t("/ FAQ", "/ پرسش‌های متداول")}</span>
            <h2 className="editorial-h2">
              <span className="eh2-outline">{t("STILL", "هنوز")}</span>
              <span className="eh2-solid">{t("DECIDING?", "تصمیم نگرفته اید؟ ")}</span>
            </h2>
            <p className="faq-sub">{t("A few things founders usually ask before starting.", "چند سؤال رایج که معمولاً قبل از شروع یک پروژه مطرح می‌شوند.")}</p>
          </div>
          <div className="faq-list">
            {FAQS.map((f, i) => (
              <div className="faq-item" key={i}>
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
