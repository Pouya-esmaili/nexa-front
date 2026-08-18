"use client";
import { useState, FormEvent } from "react";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import PhoneField from "@/components/global/PhoneField";
import { useLang } from "@/components/global/LanguageProvider";

const inputCls = "h-11 px-3.5 rounded-[10px] border border-gray-200 bg-white text-[14px] font-medium outline-none focus:border-[#8F27FF] transition-colors w-full";
const selectCls = "h-11 px-3.5 rounded-[10px] border border-gray-200 bg-white text-[14px] font-medium outline-none focus:border-[#8F27FF] transition-colors w-full";

export default function StartupContactForm() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const body = {
      formName: 'startup_contact',
      firstName: fd.get('firstName')?.toString() || '',
      lastName: fd.get('lastName')?.toString() || '',
      email: fd.get('email')?.toString() || '',
      phone: fd.get('phone')?.toString() || '',
      message: fd.get('message')?.toString() || '',
    };

    try {
      const res = await fetch('/api/forms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (res.ok) setSent(true);
      else console.error('Submit failed', await res.json());
    } catch (err) {
      console.error('Submit error', err);
    }
  }

  return (
    <section id="contact" className="py-16 md:py-20 bg-white">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center mb-10 md:mb-14">
            {t("Ready to Scale Your", "آماده توسعه ")}{" "}
            <span className="text-[#8F27FF]">{t("Startup Globally?", "استارتاپ خود هستید؟")}</span>
          </h2>
        </Reveal>

        {sent ? (
          <div
            className="flex flex-col items-center justify-center gap-4 rounded-[20px] p-14 text-center max-w-xl mx-auto"
            style={{ background: "#FAF6FF", border: "1.5px solid rgba(143,39,255,0.2)" }}
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#8F27FF]">
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2.5} strokeLinecap="round" className="w-7 h-7">
                <path d="M5 12l4 4 10-10" />
              </svg>
            </div>
            <h3 className="text-[22px] font-bold">{t("Thank you!", "سپاسگزاریم!")}</h3>
            <p className="text-gray-500 text-[15px]">{t("A Nexa advisor will reach out within 48 hours.", "یکی از مشاوران نکسا ظرف ۴۸ ساعت با شما تماس می‌گیرد.")}</p>
          </div>
        ) : (
          <Reveal variant="up" delay={100}>
            <form
              onSubmit={handleSubmit}
              className="rounded-[20px] p-5 sm:p-8 md:p-11 flex flex-col gap-5"
              style={{ background: "#F7F6F9", border: "1px solid #E2E2E2" }}
            >
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <label className="flex flex-col gap-2 text-[13px] font-medium">
                  <span className="flex items-center gap-1 text-[#474747]">{t("First Name", "نام")} <em className="text-[#8F27FF] not-italic font-semibold">*</em></span>
                  <input name="firstName" type="text" required placeholder={t("Your first name", "نام شما")} className={inputCls} />
                </label>
                <label className="flex flex-col gap-2 text-[13px] font-medium">
                  <span className="flex items-center gap-1 text-[#474747]">{t("Last Name", "نام خانوادگی")} <em className="text-[#8F27FF] not-italic font-semibold">*</em></span>
                  <input name="lastName" type="text" required placeholder={t("Your last name", "نام خانوادگی شما")} className={inputCls} />
                </label>
                <label className="flex flex-col gap-2 text-[13px] font-medium">
                  <span className="flex items-center gap-1 text-[#474747]">{t("Email Address", "آدرس ایمیل")} <em className="text-[#8F27FF] not-italic font-semibold">*</em></span>
                  <input name="email" type="email" required placeholder="you@example.com" className={inputCls} />
                </label>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <label className="flex flex-col gap-2 text-[13px] font-medium">
                  <span className="flex items-center gap-1 text-[#474747]">{t("Phone Number", "شماره تماس")} <em className="text-[#8F27FF] not-italic font-semibold">*</em></span>
                  <PhoneField name="phone" defaultCountryCode="+1" />
                </label>
                <label className="flex flex-col gap-2 text-[13px] font-medium">
                  <span className="flex items-center gap-1 text-[#474747]">{t("Country of Interest", "کشور موردنظر")} <em className="text-[#8F27FF] not-italic font-semibold">*</em></span>
                  <select required className={selectCls}>
                    <option value="">{t("Select a country…", "یک کشور را انتخاب کنید…")}</option>
                    <option>{t("Finland — Startup Permit", "فنلاند — مجوز استارتاپ")}</option>
                    <option>{t("Canada — Startup Visa", "کانادا — ویزای استارتاپ")}</option>
                    <option>{t("United Kingdom — Innovator Founder Visa", "بریتانیا — ویزای Innovator Founder")}</option>
                    <option>{t("Netherlands — Startup Visa", "هلند — ویزای استارتاپ")}</option>
                    <option>{t("France — French Tech Visa", "فرانسه — French Tech Visa")}</option>
                    <option>{t("Not sure yet", "هنوز تصمیم نگرفته‌ام")}</option>
                  </select>
                </label>
                <label className="flex flex-col gap-2 text-[13px] font-medium">
                  <span className="flex items-center gap-1 text-[#474747]">{t("Industry / Business Type", "حوزه فعالیت / نوع کسب‌وکار")} <em className="text-[#8F27FF] not-italic font-semibold">*</em></span>
                  <select required className={selectCls}>
                    <option value="">{t("Select your industry…", "انتخاب حوزه فعالیت…")}</option>
                    <option>{t("Technology / SaaS", "فناوری / SaaS")}</option>
                    <option>{t("E-commerce / Retail", "تجارت الکترونیک / خرده‌فروشی")}</option>
                    <option>{t("Healthcare / Medical", "سلامت / پزشکی")}</option>
                    <option>{t("Food & Beverage", "غذا و نوشیدنی")}</option>
                    <option>{t("Real Estate", "املاک")}</option>
                    <option>{t("Education / EdTech", "آموزش / EdTech")}</option>
                    <option>{t("Finance / FinTech", "مالی / FinTech")}</option>
                    <option>{t("Manufacturing", "تولید")}</option>
                    <option>{t("Creative / Media", "صنایع خلاق / رسانه")}</option>
                    <option>{t("Other", "سایر")}</option>
                  </select>
                </label>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <label className="flex flex-col gap-2 text-[13px] font-medium">
                  <span className="text-[#474747]">{t("Current Business Stage", "مرحله فعلی کسب‌وکار")}</span>
                  <select className={selectCls}>
                    <option value="">{t("Select stage…", "انتخاب مرحله…")}</option>
                    <option>{t("Idea / Pre-revenue", "ایده / پیش از درآمدزایی")}</option>
                    <option>{t("MVP / Early Traction", "MVP / شروع جذب مشتری")}</option>
                    <option>{t("Established (1–3 years)", "کسب‌وکار فعال (۱ تا ۳ سال)")}</option>
                    <option>{t("Scaling / Growth Stage", "مرحله رشد و توسعه")}</option>
                  </select>
                </label>
                <label className="flex flex-col gap-2 text-[13px] font-medium">
                  <span className="text-[#474747]">{t("Estimated Available Capital", "سرمایه در دسترس تقریبی")}</span>
                  <select className={selectCls}>
                    <option value="">{t("Select range…", "انتخاب بازه…")}</option>
                    <option>{t("Under $50,000", "کمتر از ۵۰,۰۰۰ دلار")}</option>
                    <option>{t("$50,000 – $100,000", "۵۰,۰۰۰ تا ۱۰۰,۰۰۰ دلار")}</option>
                    <option>{t("$100,000 – $250,000", "۱۰۰,۰۰۰ تا ۲۵۰,۰۰۰ دلار")}</option>
                    <option>{t("$250,000 – $500,000", "۲۵۰,۰۰۰ تا ۵۰۰,۰۰۰ دلار")}</option>
                    <option>{t("$500,000+", "بیش از ۵۰۰,۰۰۰ دلار")}</option>
                  </select>
                </label>
                <label className="flex flex-col gap-2 text-[13px] font-medium">
                  <span className="text-[#474747]">{t("How Did You Hear About Us?", "چطور با ما آشنا شدید؟")}</span>
                  <select className={selectCls}>
                    <option value="">{t("Select…", "انتخاب کنید…")}</option>
                    <option>{t("Google", "گوگل")}</option>
                    <option>{t("Social Media", "شبکه‌های اجتماعی")}</option>
                    <option>{t("Friend / Referral", "معرفی دوستان / آشنایان")}</option>
                    <option>{t("Attorney", "وکیل")}</option>
                    <option>{t("Webinar", "وبینار")}</option>
                    <option>{t("Tradeshow / Conference", "نمایشگاه / کنفرانس")}</option>
                    <option>{t("Other", "سایر")}</option>
                  </select>
                </label>
              </div>

              {/* Textarea */}
              <label className="flex flex-col gap-2 text-[13px] font-medium">
                <span className="text-[#474747]">{t("Tell Us About Your Project", "درباره پروژه‌تان برای ما بنویسید")}</span>
                <textarea
                  rows={4}
                  placeholder={t("Tell us about your startup idea, target country, current stage, and what kind of support you're looking for…", "درباره‌ی ایده‌ی استارتاپ، کشور هدف، مرحله‌ی فعلی و نوع پشتیبانی موردنظرتان برای ما بنویسید…")}
                  name="message"
                  className="px-3.5 py-3 rounded-[10px] border border-gray-200 bg-white text-[14px] font-medium outline-none focus:border-[#8F27FF] transition-colors resize-y w-full"
                />
              </label>

              {/* Footer */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                <small className="flex items-center gap-2 text-[12px] text-gray-500 leading-relaxed max-w-[50ch]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="flex-shrink-0">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  {t("Your information is kept strictly confidential. We respond within 48 hours.", "اطلاعات شما کاملاً محرمانه خواهد ماند. حداکثر ظرف ۴۸ ساعت پاسخ خواهیم داد.")}
                </small>
                <button
                  type="submit"
                  className="w-full sm:w-auto flex-shrink-0 inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#8F27FF] text-white font-semibold rounded-full text-[14px] transition-all hover:-translate-y-0.5"
                  style={{ boxShadow: "0 10px 24px rgba(143,39,255,0.28)" }}
                >
                  {t("Send Message →", "ارسال پیام →")}
                </button>
              </div>
            </form>
          </Reveal>
        )}
      </Row>
    </section>
  );
}
