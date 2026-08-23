"use client";

import { useState, type FormEvent } from "react";
import { useLang } from "@/components/global/LanguageProvider";

const PROJECT_TYPES = [
  { value: "New Website", labelFa: "وب‌سایت جدید" },
  { value: "Redesign", labelFa: "بازطراحی وب‌سایت" },
  { value: "Web App", labelFa: "وب‌اپلیکیشن" },
  { value: "Not Sure Yet", labelFa: "هنوز مطمئن نیستم" },
];

const BUDGETS = [
  { value: "Under $5,000", labelFa: "کمتر از ۵,۰۰۰ دلار" },
  { value: "$5,000 – $15,000", labelFa: "۵,۰۰۰ تا ۱۵,۰۰۰ دلار" },
  { value: "$15,000 – $40,000", labelFa: "۱۵,۰۰۰ تا ۴۰,۰۰۰ دلار" },
  { value: "$40,000+", labelFa: "بیشتر از ۴۰,۰۰۰ دلار" },
];

export default function Cta() {
  const { t } = useLang();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [projectType, setProjectType] = useState(PROJECT_TYPES[0].value);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const fd = new FormData(e.currentTarget);
    const body = {
      formName: "web_design_contact",
      firstName: fd.get("name")?.toString() || "",
      email: fd.get("email")?.toString() || "",
      company: fd.get("company")?.toString() || "",
      budget: fd.get("budget")?.toString() || "",
      projectType,
      message: fd.get("details")?.toString() || "",
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
    <section id="cta" className="cta">
      <div className="wrap cta__grid">
        <div className="cta__intro">
          <span className="eyebrow on-dark">{t("/ Start a Project", "/ شروع یک پروژه")}</span>
          <h2 className="h2">
            <span className="outline" style={{ WebkitTextStrokeColor: "#fff" }}>{t("Tell Us", "ایده و پروژه")}</span>
            <span className="solid" style={{ color: "#fff" }}>{t("What You're", "خود را با ما")}</span>
            <span className="purple" style={{ color: "var(--yellow)" }}>{t("Building.", "در میان بگذارید.")}</span>
          </h2>
          <p>{t("A website or an app — tell us what you need and we'll get back to you within one business day.", "وب‌سایت یا اپلیکیشن شما چیست؟ درباره پروژه‌تان بگویید و ما حداکثر تا یک روز کاری با شما تماس می‌گیریم.")}</p>
          <div className="cta__points">
            <div className="cta__point">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12l4 4 10-10" strokeLinecap="round" strokeLinejoin="round" /></svg>
              {t("Free 20-minute intro call", "جلسه آشنایی رایگان ۲۰ دقیقه‌ای")}
            </div>
            <div className="cta__point">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12l4 4 10-10" strokeLinecap="round" strokeLinejoin="round" /></svg>
              {t("No obligation, no pressure", "بدون تعهد و بدون فشار")}
            </div>
            <div className="cta__point">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12l4 4 10-10" strokeLinecap="round" strokeLinejoin="round" /></svg>
              {t("Reply within 1 business day", "پاسخ‌گویی حداکثر تا یک روز کاری")}
            </div>
          </div>
        </div>

        {sent ? (
          <div className="form-card" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16, padding: "48px 40px", textAlign: "center" }}>
            <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#8F27FF", display: "grid", placeItems: "center" }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2.5} strokeLinecap="round"><path d="M5 12l4 4 10-10" /></svg>
            </div>
            <h3 style={{ fontSize: 22, fontWeight: 800, margin: 0 }}>{t("Message Sent!", "پیام ارسال شد!")}</h3>
            <p style={{ fontSize: 15, color: "#929292", margin: 0 }}>{t("We'll get back to you within one business day.", "ظرف یک روز کاری با شما تماس می‌گیریم.")}</p>
          </div>
        ) : (
          <form className="form-card" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="cta-name">{t("Full Name", "نام و نام خانوادگی")}</label>
                <input id="cta-name" name="name" type="text" placeholder="Jane Doe" required />
              </div>
              <div className="form-field">
                <label htmlFor="cta-email">{t("Email", "ایمیل")}</label>
                <input id="cta-email" name="email" type="email" placeholder="jane@company.com" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="cta-company">{t("Company", "نام شرکت")}</label>
                <input id="cta-company" name="company" type="text" placeholder={t("Company name", "نام شرکت")} />
              </div>
              <div className="form-field">
                <label htmlFor="cta-budget">{t("Budget Range", "بودجه پروژه")}</label>
                <select id="cta-budget" name="budget" defaultValue={BUDGETS[0].value}>
                  {BUDGETS.map((b) => (
                    <option key={b.value} value={b.value}>{t(b.value, b.labelFa)}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-field">
              <label>{t("What Are You Building?", "پروژه شما چیست؟")}</label>
              <div className="pill-group">
                {PROJECT_TYPES.map((p) => (
                  <label className="pill-option" key={p.value}>
                    <input
                      type="radio"
                      name="project-type"
                      checked={projectType === p.value}
                      onChange={() => setProjectType(p.value)}
                    />
                    {t(p.value, p.labelFa)}
                  </label>
                ))}
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="cta-details">{t("Project Details", "درباره پروژه")}</label>
              <textarea id="cta-details" name="details" placeholder={t("A few lines about your business, goals, and timeline...", "چند خط درباره کسب‌وکار، اهداف و زمان‌بندی پروژه برای ما بنویسید...")}></textarea>
            </div>
            <button type="submit" disabled={sending} className="btn-primary form-submit">
              {sending ? t("Sending…", "در حال ارسال…") : t("Send Project Details", "ارسال اطلاعات پروژه")}
            </button>
            <p className="form-note">{t("We'll never share your information. Read our privacy policy.", "اطلاعات شما کاملاً محرمانه باقی می‌ماند. سیاست حفظ حریم خصوصی")}</p>
          </form>
        )}
      </div>
    </section>
  );
}
