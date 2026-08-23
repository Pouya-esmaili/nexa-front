"use client";

import { useState, type FormEvent } from "react";
import { useLang } from "@/components/global/LanguageProvider";

const STAGES = [
  { value: "Launching a new brand", labelFa: "راه‌اندازی برند جدید" },
  { value: "Early-stage brand", labelFa: "برند در مرحله اولیه" },
  { value: "Established brand", labelFa: "برند تثبیت‌شده" },
  { value: "Merger or new direction", labelFa: "ادغام یا تغییر مسیر" },
];

const SCOPES = [
  { value: "New identity", labelFa: "هویت جدید" },
  { value: "Brand refresh", labelFa: "بازآرایی برند" },
  { value: "Identity system", labelFa: "سیستم هویت" },
];

const TIMELINES = [
  { value: "Within 1 month", labelFa: "ظرف ۱ ماه" },
  { value: "1–2 months", labelFa: "۱ تا ۲ ماه" },
  { value: "2–3 months", labelFa: "۲ تا ۳ ماه" },
  { value: "Still exploring", labelFa: "هنوز در حال بررسی" },
];

const BUDGETS = [
  { value: "Under $5,000", labelFa: "کمتر از ۵,۰۰۰ دلار" },
  { value: "$5,000 – $15,000", labelFa: "۵,۰۰۰ تا ۱۵,۰۰۰ دلار" },
  { value: "$15,000 – $30,000", labelFa: "۱۵,۰۰۰ تا ۳۰,۰۰۰ دلار" },
  { value: "$30,000+", labelFa: "بیش از ۳۰,۰۰۰ دلار" },
];

export default function Brief() {
  const { t } = useLang();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [scope, setScope] = useState(SCOPES[0].value);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const fd = new FormData(e.currentTarget);
    const body = {
      formName: "visual_identity_brief",
      firstName: fd.get("name")?.toString() || "",
      email: fd.get("email")?.toString() || "",
      company: fd.get("company")?.toString() || "",
      stage: fd.get("stage")?.toString() || "",
      scope,
      timeline: fd.get("timeline")?.toString() || "",
      budget: fd.get("budget")?.toString() || "",
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
    <section className="vi-brief">
      <div className="wrap">
        <div className="vi-brief__intro">
          <span className="vi-brief__label">{t("/ Start a Project", "/ شروع یک پروژه")}</span>
          <h2>
            <span className="vi-brief-outline">{t("Tell Us What Your Brand", "به ما بگویید برند شما")}</span>
            <span className="vi-brief-accent">{t("Needs To Become.", "باید به چه چیزی تبدیل شود.")}</span>
          </h2>
          <p>
            {t(
              "Share where your brand is today and where it needs to go. We'll recommend the right identity scope and reply within one business day.",
              "بگویید برند شما امروز کجاست و باید به کجا برسد. ما دامنه هویت مناسب را پیشنهاد می‌دهیم و ظرف یک روز کاری پاسخ می‌دهیم."
            )}
          </p>
        </div>

        {sent ? (
          <div className="vi-brief__form" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16, padding: "48px 30px", textAlign: "center" }}>
            <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#8F27FF", display: "grid", placeItems: "center" }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2.5} strokeLinecap="round"><path d="M5 12l4 4 10-10" /></svg>
            </div>
            <h3 style={{ fontSize: 22, fontWeight: 800, margin: 0 }}>{t("Message Sent!", "پیام ارسال شد!")}</h3>
            <p style={{ fontSize: 15, color: "#929292", margin: 0 }}>{t("We'll reply with the right starting point within one business day.", "ظرف یک روز کاری با نقطه شروع مناسب پاسخ می‌دهیم.")}</p>
          </div>
        ) : (
          <form className="vi-brief__form" onSubmit={handleSubmit}>
            <div className="vi-brief__form-head">
              <strong>{t("Visual identity brief", "بریف هویت بصری")}</strong>
              <p>{t("A few focused questions help us understand the right starting point.", "چند سؤال متمرکز به ما کمک می‌کند نقطه شروع مناسب را بشناسیم.")}</p>
            </div>
            <div className="vi-brief__row">
              <div className="vi-brief__field">
                <label htmlFor="vib-name">{t("Full name", "نام و نام خانوادگی")}</label>
                <input id="vib-name" name="name" type="text" autoComplete="name" placeholder="Jane Doe" required />
              </div>
              <div className="vi-brief__field">
                <label htmlFor="vib-email">{t("Work email", "ایمیل کاری")}</label>
                <input id="vib-email" name="email" type="email" autoComplete="email" placeholder="jane@company.com" required />
              </div>
            </div>
            <div className="vi-brief__row">
              <div className="vi-brief__field">
                <label htmlFor="vib-company">{t("Company / brand", "شرکت / برند")}</label>
                <input id="vib-company" name="company" type="text" autoComplete="organization" placeholder={t("Brand name", "نام برند")} />
              </div>
              <div className="vi-brief__field">
                <label htmlFor="vib-stage">{t("Brand stage", "مرحله برند")}</label>
                <select id="vib-stage" name="stage" defaultValue={STAGES[0].value}>
                  {STAGES.map((s) => (
                    <option key={s.value} value={s.value}>{t(s.value, s.labelFa)}</option>
                  ))}
                </select>
              </div>
            </div>
            <span className="vi-brief__legend">{t("What do you need?", "به چه چیزی نیاز دارید؟")}</span>
            <div className="vi-brief__options">
              {SCOPES.map((s) => (
                <label className="vi-brief__option" key={s.value}>
                  <input
                    type="radio"
                    name="scope"
                    checked={scope === s.value}
                    onChange={() => setScope(s.value)}
                  />
                  <span>{t(s.value, s.labelFa)}</span>
                </label>
              ))}
            </div>
            <div className="vi-brief__row">
              <div className="vi-brief__field">
                <label htmlFor="vib-timeline">{t("Ideal timeline", "زمان‌بندی ایده‌آل")}</label>
                <select id="vib-timeline" name="timeline" defaultValue={TIMELINES[0].value}>
                  {TIMELINES.map((s) => (
                    <option key={s.value} value={s.value}>{t(s.value, s.labelFa)}</option>
                  ))}
                </select>
              </div>
              <div className="vi-brief__field">
                <label htmlFor="vib-budget">{t("Investment range", "محدوده سرمایه‌گذاری")}</label>
                <select id="vib-budget" name="budget" defaultValue={BUDGETS[0].value}>
                  {BUDGETS.map((s) => (
                    <option key={s.value} value={s.value}>{t(s.value, s.labelFa)}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="vi-brief__field">
              <label htmlFor="vib-context">{t("What should the new identity change?", "هویت جدید باید چه چیزی را تغییر دهد؟")}</label>
              <textarea
                id="vib-context"
                name="context"
                placeholder={t(
                  "Tell us about the business, audience, current identity, and the change you want people to feel...",
                  "درباره کسب‌وکار، مخاطب، هویت فعلی و تغییری که می‌خواهید مردم حس کنند برای ما بنویسید..."
                )}
              ></textarea>
            </div>
            <button type="submit" disabled={sending} className="vi-brief__button">
              {sending ? t("Sending…", "در حال ارسال…") : t("Request an Intro Call", "درخواست تماس آشنایی")}
            </button>
            <p className="vi-brief__note">{t("Your information stays confidential. No obligation, no pressure.", "اطلاعات شما محرمانه باقی می‌ماند. بدون تعهد و بدون فشار.")}</p>
          </form>
        )}
      </div>
    </section>
  );
}
