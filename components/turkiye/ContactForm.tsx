"use client";

import { useState, FormEvent } from "react";
import { useLang } from "@/components/global/LanguageProvider";

export default function ContactForm() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const phoneLocal = fd.get("phone")?.toString() || "";
    const body = {
      formName: "turkiye_contact",
      firstName: fd.get("firstName")?.toString() || "",
      lastName: fd.get("lastName")?.toString() || "",
      email: fd.get("email")?.toString() || "",
      phone: phoneLocal ? `+90 ${phoneLocal}` : "",
      profile: fd.get("profile")?.toString() || "",
      objective: fd.get("objective")?.toString() || "",
      propertyType: fd.get("propertyType")?.toString() || "",
      targetCity: fd.get("targetCity")?.toString() || "",
      investmentSize: fd.get("investmentSize")?.toString() || "",
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
    }
  }

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">{t("Start Your Türkiye Investment Pathway", "مسیر سرمایه‌گذاری ترکیه خود را آغاز کنید")}</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="row">
          <label>
            <span className="lbl">{t("First Name", "نام")} <em>*</em></span>
            <input name="firstName" type="text" required />
          </label>
          <label>
            <span className="lbl">{t("Last Name", "نام خانوادگی")} <em>*</em></span>
            <input name="lastName" type="text" required />
          </label>
          <label>
            <span className="lbl">{t("Email", "ایمیل")} <em>*</em></span>
            <input name="email" type="email" required />
          </label>
        </div>

        <div className="row">
          <label>
            <span className="lbl">{t("Phone Number", "شماره تماس")} <em>*</em></span>
            <div className="phone">
              <span className="flag">🇹🇷 +90</span>
              <input name="phone" type="tel" required />
            </div>
          </label>
          <label>
            <span className="lbl">{t("Which best describes you?", "کدام‌یک شما را بهتر توصیف می‌کند؟")} <em>*</em></span>
            <select name="profile">
              <option>{t("Investor", "سرمایه‌گذار")}</option>
              <option>{t("Entrepreneur", "کارآفرین")}</option>
              <option>{t("Family relocation", "جابه‌جایی خانواده")}</option>
              <option>{t("Digital entrepreneur", "کارآفرین دیجیتال")}</option>
            </select>
          </label>
          <label>
            <span className="lbl">{t("Primary objective", "هدف اصلی")}</span>
            <select name="objective">
              <option>{t("Citizenship by Investment", "تابعیت از طریق سرمایه‌گذاری")}</option>
              <option>{t("Long-term residency", "اقامت بلندمدت")}</option>
              <option>{t("Rental yield", "بازده اجاره")}</option>
              <option>{t("Capital appreciation", "افزایش ارزش سرمایه")}</option>
            </select>
          </label>
        </div>

        <div className="row">
          <label>
            <span className="lbl">{t("Property type", "نوع ملک")}</span>
            <select name="propertyType">
              <option>{t("Residential apartment", "آپارتمان مسکونی")}</option>
              <option>{t("Commercial unit", "واحد تجاری")}</option>
              <option>{t("Villa", "ویلا")}</option>
              <option>{t("Government-approved development", "پروژه‌ی مورد تأیید دولت")}</option>
            </select>
          </label>
          <label>
            <span className="lbl">{t("Target city", "شهر موردنظر")}</span>
            <select name="targetCity">
              <option>{t("Istanbul", "استانبول")}</option>
              <option>{t("Ankara", "آنکارا")}</option>
              <option>{t("Antalya", "آنتالیا")}</option>
              <option>{t("Izmir", "ازمیر")}</option>
              <option>{t("Bodrum", "بدروم")}</option>
            </select>
          </label>
          <label>
            <span className="lbl">{t("Investment size", "حجم سرمایه‌گذاری")}</span>
            <select name="investmentSize">
              <option>{t("USD 600,000 – 1M", "۶۰۰٬۰۰۰ تا ۱ میلیون دلار")}</option>
              <option>{t("USD 1M – 2M", "۱ تا ۲ میلیون دلار")}</option>
              <option>{t("USD 2M+", "بیش از ۲ میلیون دلار")}</option>
            </select>
          </label>
        </div>

        <label className="full">
          <span className="lbl">{t("Details", "جزئیات")}</span>
          <textarea name="message" rows={4} placeholder={t("Tell us about your goals, timeline, and family structure…", "درباره‌ی اهداف، زمان‌بندی و ساختار خانواده‌ی خود به ما بگویید…")} />
        </label>

        <div className="form-foot">
          <small>{t("Your information is reviewed confidentially by Nexa's advisory team.", "اطلاعات شما به‌صورت محرمانه توسط تیم مشاوره‌ی نکسا بررسی می‌شود.")}</small>
          <button type="submit" className="btn-primary purple">{t("Submit", "ارسال")}</button>
        </div>

        {sent && (
          <div className="sent-msg">{t("Thanks — a Nexa advisor will reach out within 24 hours.", "سپاسگزاریم — یک مشاور نکسا ظرف ۲۴ ساعت با شما تماس خواهد گرفت.")}</div>
        )}
      </form>
    </section>
  );
}
