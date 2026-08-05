"use client";

import { useState, type FormEvent } from "react";
import { useLang } from "@/components/global/LanguageProvider";

const NEEDS = [
  "Business Model Design", "Brand Strategy", "Go‑To‑Market Strategy", "Marketing Plan",
  "Market Analysis", "Visual Identity", "Web Design", "Content Creation",
  "Business Plan", "Financial Model",
];
const NEEDS_FA: Record<string, string> = {
  "Business Model Design": "طراحی مدل کسب‌وکار",
  "Brand Strategy": "استراتژی برند",
  "Go‑To‑Market Strategy": "استراتژی ورود به بازار",
  "Marketing Plan": "برنامه‌ی بازاریابی",
  "Market Analysis": "تحلیل بازار",
  "Visual Identity": "هویت بصری",
  "Web Design": "طراحی وب",
  "Content Creation": "تولید محتوا",
  "Business Plan": "طرح کسب‌وکار",
  "Financial Model": "مدل مالی",
};

export default function Contact() {
  const { t } = useLang();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const fd = new FormData(e.currentTarget);
    const needs = fd.getAll("needs").map(String);
    const body = {
      formName: "advisory_contact",
      firstName: fd.get("firstName")?.toString() || "",
      lastName: fd.get("lastName")?.toString() || "",
      email: fd.get("email")?.toString() || "",
      phone: fd.get("phone")?.toString() || "",
      countryCode: fd.get("countryCode")?.toString() || "",
      company: fd.get("company")?.toString() || "",
      needs,
      message: fd.get("message")?.toString() || "",
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
    <section className="contact-section" id="contact">
      <div className="wrap">
        <div className="contact-layout">
          <div className="contact-left">
            <span className="editorial-label">{t("/ BOOK A CALL", "/ رزرو تماس")}</span>
            <h2 className="editorial-h2" style={{ marginBottom: 24 }}><span className="eh2-outline">{t("30", "۳۰")}</span><br /><span className="eh2-solid">{t("MINUTES.", "دقیقه.")}</span><br /><span className="eh2-purple">{t("THAT'S ALL.", "همین و بس.")}</span></h2>
            <p className="contact-desc">{t("Tell us about your business. We'll tell you exactly what we'd do and what it costs. No pitch decks, no upsells.", "درباره‌ی کسب‌وکارتان به ما بگویید. ما دقیقاً می‌گوییم چه می‌کنیم و چقدر هزینه دارد. نه ارائه‌ی پرزرق‌وبرق، نه فروش اضافه.")}</p>
            <div className="contact-trust">
              <div className="ct-item"><span className="ct-icon">✓</span>{t("Free discovery call", "تماس کشف رایگان")}</div>
              <div className="ct-item"><span className="ct-icon">✓</span>{t("Proposal in 48 hours", "پیشنهاد ظرف ۴۸ ساعت")}</div>
              <div className="ct-item"><span className="ct-icon">✓</span>{t("Fixed price, no surprises", "قیمت ثابت، بدون غافلگیری")}</div>
              <div className="ct-item"><span className="ct-icon">✓</span>{t("Cancel anytime", "لغو در هر زمان")}</div>
            </div>
          </div>
          <div className="contact-right">
            <div className="contact-form">
              {sent ? (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16, padding: "48px 0", textAlign: "center" }}>
                  <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#8F27FF", display: "grid", placeItems: "center" }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2.5} strokeLinecap="round"><path d="M5 12l4 4 10-10" /></svg>
                  </div>
                  <h3 style={{ fontSize: 22, fontWeight: 800, margin: 0 }}>{t("Message Sent!", "پیام ارسال شد!")}</h3>
                  <p style={{ fontSize: 15, color: "#929292", margin: 0 }}>{t("A Nexa advisor will reach out within 48 hours.", "یکی از مشاوران نکسا ظرف ۴۸ ساعت با شما تماس می‌گیرد.")}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="cf-row">
                    <div className="cf-field">
                      <label>{t("First Name", "نام")}</label>
                      <input name="firstName" type="text" required placeholder={t("Your first name", "نام شما")} />
                    </div>
                    <div className="cf-field">
                      <label>{t("Last Name", "نام خانوادگی")}</label>
                      <input name="lastName" type="text" placeholder={t("Your last name", "نام خانوادگی شما")} />
                    </div>
                  </div>
                  <div className="cf-row">
                    <div className="cf-field">
                      <label>{t("Email", "ایمیل")}</label>
                      <input name="email" type="email" required placeholder="your@email.com" />
                    </div>
                    <div className="cf-field">
                      <label>{t("Phone Number", "شماره تماس")}</label>
                      <div className="cf-phone">
                        <select name="countryCode" className="cf-phone__code" aria-label={t("Country code", "کد کشور")} defaultValue="+1">
                          <option value="+1">🇨🇦 +1</option>
                          <option value="+98">🇮🇷 +98</option>
                          <option value="+1us">🇺🇸 +1</option>
                          <option value="+44">🇬🇧 +44</option>
                          <option value="+33">🇫🇷 +33</option>
                          <option value="+34">🇪🇸 +34</option>
                          <option value="+351">🇵🇹 +351</option>
                          <option value="+358">🇫🇮 +358</option>
                          <option value="+31">🇳🇱 +31</option>
                          <option value="+90">🇹🇷 +90</option>
                          <option value="+30">🇬🇷 +30</option>
                          <option value="+971">🇦🇪 +971</option>
                        </select>
                        <input name="phone" type="tel" className="cf-phone__input" placeholder="(555) 000-0000" />
                      </div>
                    </div>
                  </div>
                  <div className="cf-field">
                    <label>{t("Company / Project", "شرکت / پروژه")}</label>
                    <input name="company" type="text" placeholder={t("What are you building?", "چه چیزی می‌سازید؟")} />
                  </div>
                  <div className="cf-field">
                    <label>{t("What do you need?", "به چه چیزی نیاز دارید؟")}</label>
                    <div className="cf-checks">
                      {NEEDS.map((n) => (
                        <label className="cf-check" key={n}><input type="checkbox" name="needs" value={n} />{t(n, NEEDS_FA[n] ?? n)}</label>
                      ))}
                    </div>
                  </div>
                  <div className="cf-field">
                    <label>{t("Tell us more (optional)", "بیشتر بگویید (اختیاری)")}</label>
                    <textarea name="message" rows={4} placeholder={t("Stage of business, timeline, budget range...", "مرحله‌ی کسب‌وکار، بازه‌ی زمانی، محدوده‌ی بودجه...")}></textarea>
                  </div>
                  <button type="submit" disabled={sending} className="btn-primary cf-submit" style={{ width: "100%", justifyContent: "center", padding: 18 }}>
                    {sending ? t("Sending…", "در حال ارسال…") : t("Send & Book a Call →", "ارسال و رزرو تماس →")}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
