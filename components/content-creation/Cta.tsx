"use client";

import { useState, type FormEvent } from "react";
import { useLang } from "@/components/global/LanguageProvider";

const NEEDS = [
  { value: "Content strategy and direction", labelFa: "استراتژی و جهت‌گیری محتوا" },
  { value: "Ongoing content creation", labelFa: "تولید محتوای مستمر" },
  { value: "Campaign or launch content", labelFa: "محتوای کمپین یا رونمایی" },
  { value: "Video and motion content", labelFa: "محتوای ویدیو و موشن" },
  { value: "Not sure yet — let's discuss", labelFa: "هنوز مطمئن نیستم — بگذارید صحبت کنیم" },
];

const CONTENT_TYPES = [
  { value: "Social media content", labelFa: "محتوای شبکه اجتماعی" },
  { value: "Video and motion", labelFa: "ویدیو و موشن" },
  { value: "Campaign content", labelFa: "محتوای کمپین" },
  { value: "Website and editorial", labelFa: "وب‌سایت و ادیتوریال" },
  { value: "Ongoing monthly content", labelFa: "محتوای ماهانه مستمر" },
  { value: "Not sure yet", labelFa: "هنوز مطمئن نیستم" },
];

const TIMELINES = [
  { value: "As soon as possible", labelFa: "در اسرع وقت" },
  { value: "Within the next month", labelFa: "ظرف یک ماه آینده" },
  { value: "Within 1–3 months", labelFa: "ظرف ۱ تا ۳ ماه" },
  { value: "Just exploring for now", labelFa: "فعلاً فقط در حال بررسی" },
];

export default function Cta() {
  const { t } = useLang();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [contentTypes, setContentTypes] = useState<string[]>([]);

  function toggleType(value: string) {
    setContentTypes((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const fd = new FormData(e.currentTarget);
    const body = {
      formName: "content_creation_contact",
      firstName: fd.get("name")?.toString() || "",
      email: fd.get("email")?.toString() || "",
      company: fd.get("brand")?.toString() || "",
      need: fd.get("need")?.toString() || "",
      contentTypes,
      timeline: fd.get("timeline")?.toString() || "",
      message: fd.get("brief")?.toString() || "",
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
    <section className="vi-cta" id="cta">
      <div className="wrap">
        <div className="cc-cta__grid">
          <div className="cc-cta__copy">
            <span className="vi-label" style={{ color: "var(--yellow)" }}>{t("/ READY?", "/ آماده‌اید؟")}</span>
            <h2 className="editorial-h2">
              <span className="eh2-outline" style={{ WebkitTextStrokeColor: "#fff" }}>{t("LET'S BUILD", "سیستم محتوایی")}</span>
              <span className="eh2-purple" style={{ color: "var(--yellow)" }}>{t("YOUR CONTENT SYSTEM.", "برندتان را بسازید.")}</span>
            </h2>
            <p className="vi-cta__intro">
              {t(
                "Tell us what your brand needs to achieve. We'll turn your answers into a focused content direction, production scope, and next-step plan.",
                "بگویید برندتان از محتوا چه می‌خواهد؛ ما بر اساس اهداف و نیازهای شما، استراتژی محتوا، مسیر تولید و برنامه اجرایی مشخصی برای ادامه کار طراحی می‌کنیم."
              )}
            </p>
          </div>

          <div>
            {sent ? (
              <div className="cc-form-success">
                <div className="cc-form-success__icon">✓</div>
                <h3>{t("Thanks for reaching out.", "از تماس شما سپاسگزاریم.")}</h3>
                <p>{t("We'll review your message and reply with the right next step.", "پیام شما را بررسی می‌کنیم و با گام بعدی مناسب پاسخ می‌دهیم.")}</p>
              </div>
            ) : (
              <form className="cc-brief-form" onSubmit={handleSubmit}>
                <div className="cc-brief-form__head">
                  <h3>{t("Start a conversation.", "گفتگو را شروع کنید.")}</h3>
                  <p>{t("Share the essentials. We'll follow up to understand the details together.", "نکات ضروری را با ما در میان بگذارید. برای بررسی جزئیات با شما در تماس خواهیم بود.")}</p>
                </div>
                <div className="cc-form__grid">
                  <div className="cc-form__field">
                    <label htmlFor="ccName">{t("Your name", "نام شما")} <span className="cc-form__required">*</span></label>
                    <input id="ccName" name="name" type="text" autoComplete="name" placeholder={t("Full name", "نام کامل")} required />
                  </div>
                  <div className="cc-form__field">
                    <label htmlFor="ccEmail">{t("Work email", "ایمیل کاری")} <span className="cc-form__required">*</span></label>
                    <input id="ccEmail" name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
                  </div>
                  <div className="cc-form__field">
                    <label htmlFor="ccBrand">{t("Brand / company", "برند / شرکت")} <span className="cc-form__required">*</span></label>
                    <input id="ccBrand" name="brand" type="text" autoComplete="organization" placeholder={t("Brand name", "نام برند")} required />
                  </div>
                  <div className="cc-form__field">
                    <label htmlFor="ccNeed">{t("How can we help?", "چطور می‌توانیم کمک کنیم؟")} <span className="cc-form__required">*</span></label>
                    <select id="ccNeed" name="need" required defaultValue="">
                      <option value="" disabled>{t("Select a general need", "یک نیاز کلی انتخاب کنید")}</option>
                      {NEEDS.map((nd) => (
                        <option key={nd.value} value={nd.value}>{t(nd.value, nd.labelFa)}</option>
                      ))}
                    </select>
                  </div>
                  <fieldset className="cc-form__fieldset cc-form__field--full">
                    <legend className="cc-form__legend">{t("What content are you interested in?", "به چه نوع محتوایی علاقه‌مندید؟")}</legend>
                    <div className="cc-form__choices">
                      {CONTENT_TYPES.map((ct) => (
                        <label className="cc-form__choice" key={ct.value}>
                          <input
                            type="checkbox"
                            checked={contentTypes.includes(ct.value)}
                            onChange={() => toggleType(ct.value)}
                          />
                          <span>{t(ct.value, ct.labelFa)}</span>
                        </label>
                      ))}
                    </div>
                  </fieldset>
                  <div className="cc-form__field cc-form__field--full">
                    <label htmlFor="ccTimeline">{t("When would you like to start?", "چه زمانی می‌خواهید شروع کنید؟")}</label>
                    <select id="ccTimeline" name="timeline" defaultValue="">
                      <option value="" disabled>{t("Select a timeframe", "یک بازه زمانی انتخاب کنید")}</option>
                      {TIMELINES.map((tl) => (
                        <option key={tl.value} value={tl.value}>{t(tl.value, tl.labelFa)}</option>
                      ))}
                    </select>
                  </div>
                  <div className="cc-form__field cc-form__field--full">
                    <label htmlFor="ccBrief">{t("A little about what you need", "کمی درباره نیاز خود بنویسید")}</label>
                    <textarea id="ccBrief" name="brief" placeholder={t("A short note about your brand, challenge, or idea is enough...", "یک توضیح کوتاه درباره برند، چالش یا ایده شما کافی است...")}></textarea>
                  </div>
                </div>
                <button className="cc-form__submit" type="submit" disabled={sending}>
                  {sending ? t("Sending…", "در حال ارسال…") : t("Start the Conversation →", "شروع گفتگو ←")}
                </button>
                <div className="vi-cta__note">{t("We'll review your message and reply with the right next step.", "پیام شما را بررسی می‌کنیم و با گام بعدی مناسب پاسخ می‌دهیم.")}</div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
