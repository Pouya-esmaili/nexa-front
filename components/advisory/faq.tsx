"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "@/components/global/LanguageProvider";

const FAQS = [
  { q: "How long does a typical project take?", qFa: "یک پروژه‌ی معمول چقدر طول می‌کشد؟", a: "Strategy packages run 4–6 weeks. Full-stack projects (strategy + brand + web) typically take 8–12 weeks. We move fast without cutting corners.", aFa: "بسته‌های استراتژی ۴ تا ۶ هفته طول می‌کشند. پروژه‌های کامل (استراتژی + برند + وب) معمولاً ۸ تا ۱۲ هفته زمان می‌برند. سریع پیش می‌رویم بدون اینکه از کیفیت بزنیم." },
  { q: "Do you work with startups or established businesses?", qFa: "با استارتاپ‌ها کار می‌کنید یا کسب‌وکارهای جاافتاده؟", a: "Both. We've worked with pre-revenue founders and Series-B companies. What matters is that you're serious about building something with real strategy behind it.", aFa: "هر دو. با بنیان‌گذاران پیش از درآمد و شرکت‌های مرحله‌ی سری B کار کرده‌ایم. آنچه مهم است این است که جدی به دنبال ساختن چیزی با استراتژی واقعی باشید." },
  { q: "What's the process for getting started?", qFa: "فرایند شروع کار چگونه است؟", a: "Book a 30-minute discovery call — no commitment. We learn about your business, scope the right package, and send a proposal within 48 hours.", aFa: "یک تماس کشف ۳۰ دقیقه‌ای رزرو کنید — بدون هیچ تعهدی. درباره‌ی کسب‌وکارتان می‌آموزیم، بسته‌ی مناسب را تعیین می‌کنیم و ظرف ۴۸ ساعت پیشنهاد می‌فرستیم." },
  { q: "Can I hire you for just one service?", qFa: "می‌توانم فقط برای یک خدمت شما را استخدام کنم؟", a: "Yes. While our packages are designed to work together, every service is available as a standalone engagement. We'll tell you honestly if we think you need more.", aFa: "بله. اگرچه بسته‌های ما برای هم‌افزایی طراحی شده‌اند، هر خدمت به‌صورت مستقل هم در دسترس است. اگر فکر کنیم به چیزی بیشتر نیاز دارید، صادقانه به شما می‌گوییم." },
  { q: "Who will I be working with?", qFa: "با چه کسی کار خواهم کرد؟", a: "Every project has a dedicated lead who runs strategy and coordinates execution. You're never handed off to a junior account manager.", aFa: "هر پروژه یک سرپرست اختصاصی دارد که استراتژی را پیش می‌برد و اجرا را هماهنگ می‌کند. هرگز به یک مدیر حساب تازه‌کار واگذار نمی‌شوید." },
  { q: "What do you need from me to start?", qFa: "برای شروع به چه چیزی از من نیاز دارید؟", a: "A 30-minute conversation and a brief intake form. We handle the rest — research, interviews, and synthesis — before presenting strategy.", aFa: "یک گفت‌وگوی ۳۰ دقیقه‌ای و یک فرم کوتاه اولیه. بقیه را ما انجام می‌دهیم — پژوهش، مصاحبه و جمع‌بندی — پیش از ارائه‌ی استراتژی." },
];

export default function Faq() {
  const { t } = useLang();
  const listRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<number | null>(null);
  // reveal state is kept in React (not imperative classList) so re-renders on
  // open/close never clobber the .faq-visible class.
  const [visible, setVisible] = useState<boolean[]>(() => FAQS.map(() => false));

  useEffect(() => {
    const root = listRef.current;
    if (!root) return;
    const items = Array.from(root.querySelectorAll<HTMLElement>(".faq-item"));
    if (!("IntersectionObserver" in window)) {
      setVisible(FAQS.map(() => true));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = items.indexOf(e.target as HTMLElement);
            setTimeout(() => {
              setVisible((v) => {
                const n = [...v];
                n[idx] = true;
                return n;
              });
            }, idx * 70);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    items.forEach((it) => obs.observe(it));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="faq-section">
      <div className="wrap">
        <div className="faq-layout">
          <div className="faq-left">
            <span className="editorial-label">{t("/ FAQ", "/ سؤالات متداول")}</span>
            <h2 className="editorial-h2"><span className="eh2-outline">{t("GOT", "سؤالی")}</span><br /><span className="eh2-solid">{t("QUESTIONS?", "دارید؟")}</span></h2>
            <p className="faq-sub">{t("Everything you need to know before we talk. Still curious?", "هر آنچه پیش از گفت‌وگو لازم است بدانید. هنوز کنجکاوید؟")} <a href="#contact">{t("Drop us a line.", "برای ما پیام بفرستید.")}</a></p>
          </div>
          <div className="faq-list" id="faqList" ref={listRef}>
            {FAQS.map((f, i) => (
              <div className={`faq-item${visible[i] ? " faq-visible" : ""}${open === i ? " open" : ""}`} key={i}>
                <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
                  {t(f.q, f.qFa)} <span className="faq-icon">+</span>
                </button>
                <div className="faq-a"><p>{t(f.a, f.aFa)}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
