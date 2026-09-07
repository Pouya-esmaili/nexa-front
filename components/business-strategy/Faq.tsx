"use client";

import { useState } from "react";
import { useLang } from "@/components/global/LanguageProvider";

const FAQS = [
  {
    q: "Can we engage Nexa for only one service?",
    qFa: "آیا می‌توانیم فقط یک خدمت از نکسا دریافت کنیم؟",
    a: "Yes. Each service can work independently. When the challenge crosses disciplines, we connect only the workstreams needed to reach the decision.",
    aFa: "بله. هر خدمت می‌تواند به‌طور مستقل ارائه شود. وقتی چالش به چند حوزه مرتبط باشد، فقط جریان‌های کاری لازم برای رسیدن به تصمیم را به هم متصل می‌کنیم.",
  },
  {
    q: "How do you define the right scope?",
    qFa: "دامنه مناسب پروژه را چگونه تعیین می‌کنید؟",
    a: "We begin with the business decision, available evidence, timeline, and stakeholders—then recommend a focused scope with clear outputs.",
    aFa: "ابتدا از تصمیم کسب‌وکار، شواهد موجود، زمان‌بندی و ذی‌نفعان شروع می‌کنیم، سپس دامنه‌ای متمرکز با خروجی‌های شفاف پیشنهاد می‌دهیم.",
  },
  {
    q: "Do you work with new and established businesses?",
    qFa: "آیا با کسب‌وکارهای جدید و تثبیت‌شده همکاری می‌کنید؟",
    a: "Yes. We support new ventures, scale-ups, established companies, new offers, and organizations entering new markets.",
    aFa: "بله. ما از کسب‌وکارهای نوپا، در حال مقیاس‌گذاری، تثبیت‌شده، پیشنهادهای جدید و سازمان‌هایی که وارد بازارهای جدید می‌شوند حمایت می‌کنیم.",
  },
  {
    q: "Can you turn the strategy into a business plan or pitch deck?",
    qFa: "آیا می‌توانید استراتژی را به بیزینس پلن یا ارائه سرمایه‌گذار تبدیل کنید؟",
    a: "Yes. Business plans, investor narratives, pitch decks, and executive strategy documents can be included as final communication outputs.",
    aFa: "بله. بیزینس پلن‌ها، روایت‌های سرمایه‌گذار، ارائه‌ها و اسناد استراتژیک اجرایی می‌توانند به‌عنوان خروجی‌های نهایی ارتباطی گنجانده شوند.",
  },
];

export default function Faq() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="faq">
      <div className="wrap faq-grid">
        <div className="faq-lead">
          <span className="ey">{t("/ FAQ", "/ سوالات متداول")}</span>
          <h2 className="title">
            <span className="out">{t("Start With", "همه‌چیز از")}</span>
            <span>{t("The Right", "یک سؤال")}</span>
            <span className="purple">{t("Question.", "شروع می‌شود.")}</span>
          </h2>
          <p>{t("You do not need to know which service you need before speaking with us.", "لازم نیست از قبل بدانید دقیقاً به کدام خدمت نیاز دارید؛ کافی است درباره چالش یا تصمیمی که پیش روی کسب‌وکارتان وجود دارد با ما صحبت کنید.")}</p>
        </div>
        <div>
          {FAQS.map((f, i) => (
            <article className={`faqitem${open === i ? " open" : ""}`} key={i}>
              <button className="q" onClick={() => setOpen(open === i ? null : i)}>
                {t(f.q, f.qFa)}<span>+</span>
              </button>
              <div className="ans">
                <p>{t(f.a, f.aFa)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
