"use client";

import { useState, type FormEvent } from "react";
import { useLang } from "@/components/global/LanguageProvider";

const STAGES = [
  { value: "New venture", labelFa: "کسب‌وکار نوپا" },
  { value: "Early growth", labelFa: "رشد اولیه" },
  { value: "Established business", labelFa: "کسب‌وکار تثبیت‌شده" },
  { value: "New market or offer", labelFa: "بازار یا پیشنهاد جدید" },
];

const SERVICE_CHOICES = [
  { value: "Business Model Design", labelFa: "طراحی مدل کسب‌وکار" },
  { value: "Brand Strategy", labelFa: "استراتژی برند" },
  { value: "Go-To-Market Strategy", labelFa: "استراتژی ورود به بازار" },
  { value: "Market Analysis", labelFa: "تحلیل بازار" },
  { value: "Business Documentation", labelFa: "مستندسازی کسب‌وکار" },
  { value: "Not sure yet", labelFa: "هنوز مطمئن نیستم" },
];

export default function Cta() {
  const { t } = useLang();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [services, setServices] = useState<string[]>([SERVICE_CHOICES[0].value]);

  function toggleService(value: string) {
    setServices((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const fd = new FormData(e.currentTarget);
    const body = {
      formName: "business_strategy_contact",
      firstName: fd.get("name")?.toString() || "",
      email: fd.get("email")?.toString() || "",
      company: fd.get("company")?.toString() || "",
      stage: fd.get("stage")?.toString() || "",
      services,
      message: fd.get("context")?.toString() || "",
    };
    try {
      const res = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (res.ok) setSent(true);
      else console.error("Submit failed", await res.json());
    } catch (err) {
      console.error("Submit error", err);
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="cta">
      <div className="wrap cta-grid">
        <div className="cta-copy">
          <span className="ey">{t("/ Start a Strategy Project", "/ شروع یک پروژه استراتژیک")}</span>
          <h2 className="title">
            <span className="out">{t("What Decision", "کدام تصمیم")}</span>
            <span>{t("Needs More", "به شفافیت")}</span>
            <span className="purple">{t("Clarity?", "بیشتری نیاز دارد؟")}</span>
          </h2>
          <p>
            {t(
              "Tell us what is changing, where growth feels stuck, or what your team needs to decide next.",
              "بگویید چه چیزی در کسب‌وکارتان در حال تغییر است، رشد در کدام نقطه متوقف شده، یا تیم شما برای قدم بعدی به چه تصمیمی نیاز دارد. ما کمک می‌کنیم مسیر درست را پیدا کنید."
            )}
          </p>
        </div>

        {sent ? (
          <div className="form" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16, padding: "48px 31px", textAlign: "center" }}>
            <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#8F27FF", display: "grid", placeItems: "center" }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2.5} strokeLinecap="round"><path d="M5 12l4 4 10-10" /></svg>
            </div>
            <h3 style={{ fontSize: 22, fontWeight: 800, margin: 0 }}>{t("Message Sent!", "پیام ارسال شد!")}</h3>
            <p style={{ fontSize: 15, color: "#929292", margin: 0 }}>{t("We will suggest the most useful starting point.", "مناسب‌ترین نقطه شروع را به شما پیشنهاد می‌دهیم.")}</p>
          </div>
        ) : (
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-head">
              <strong>{t("Strategy project brief", "بریف پروژه استراتژی")}</strong>
              <p>{t("Share the essentials. We will suggest the most useful starting point.", "نکات ضروری را با ما در میان بگذارید. مناسب‌ترین نقطه شروع را پیشنهاد می‌دهیم.")}</p>
            </div>
            <div className="split">
              <div>
                <label htmlFor="bs-name">{t("Full name", "نام و نام خانوادگی")}</label>
                <input id="bs-name" name="name" autoComplete="name" placeholder="Jane Doe" required />
              </div>
              <div>
                <label htmlFor="bs-email">{t("Work email", "ایمیل کاری")}</label>
                <input id="bs-email" name="email" type="email" autoComplete="email" placeholder="jane@company.com" required />
              </div>
            </div>
            <div className="split">
              <div>
                <label htmlFor="bs-company">{t("Company", "شرکت")}</label>
                <input id="bs-company" name="company" autoComplete="organization" placeholder={t("Company name", "نام شرکت")} />
              </div>
              <div>
                <label htmlFor="bs-stage">{t("Business stage", "مرحله کسب‌وکار")}</label>
                <select id="bs-stage" name="stage" defaultValue={STAGES[0].value}>
                  {STAGES.map((s) => (
                    <option key={s.value} value={s.value}>{t(s.value, s.labelFa)}</option>
                  ))}
                </select>
              </div>
            </div>
            <span className="choice-label">{t("Services you are considering", "خدماتی که در نظر دارید")}</span>
            <div className="service-choices">
              {SERVICE_CHOICES.map((s) => (
                <label className="service-choice" key={s.value}>
                  <input
                    type="checkbox"
                    checked={services.includes(s.value)}
                    onChange={() => toggleService(s.value)}
                  />
                  <span>{t(s.value, s.labelFa)}</span>
                </label>
              ))}
            </div>
            <label htmlFor="bs-context">{t("The decision or challenge", "تصمیم یا چالش")}</label>
            <textarea id="bs-context" name="context" placeholder={t("What are you trying to understand, change, launch, or document?", "چه چیزی می‌خواهید بفهمید، تغییر دهید، راه‌اندازی کنید یا مستند کنید؟")}></textarea>
            <button type="submit" disabled={sending} className="btn">
              {sending ? t("Sending…", "در حال ارسال…") : t("Request an Intro Call", "درخواست تماس آشنایی")}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
