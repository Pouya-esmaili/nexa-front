"use client";

import { useState, FormEvent } from "react";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/LazyReveal";
import PhoneField from "@/components/global/PhoneField";
import { useLang } from "@/components/global/LanguageProvider";

const inputCls = "font-[inherit] text-[14px] bg-[#F7F6F9] border border-[#E2E2E2] rounded-[10px] px-[14px] py-3 text-black font-medium transition-all duration-150 outline-none focus:border-[#8F27FF] focus:shadow-[0_0_0_3px_rgba(143,39,255,0.12)] focus:bg-white w-full";

export default function Contact() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const body = {
      formName: 'canada_startup_contact',
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
    <section id="contact" className="py-20 md:py-24 bg-[#F7F6F9]">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center mb-10">
            {t("Start Your Canada Start-Up Visa Journey", "سفر ویزای استارتاپ کانادا خود را آغاز کنید")}
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
            <p className="text-gray-500 text-[15px]">{t("A Nexa advisor will reach out within 48 hours.", "یک مشاور نکسا ظرف ۴۸ ساعت با شما تماس خواهد گرفت.")}</p>
          </div>
        ) : (
          <Reveal variant="up" delay={80}>
            <form onSubmit={handleSubmit}
              className="bg-white border border-[#E2E2E2] rounded-[20px] p-5 sm:p-8 md:p-[44px]">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
                <label className="flex flex-col gap-2 text-[13px] font-medium text-black">
                  <span>{t("First Name", "نام")} <em className="text-[#8F27FF] not-italic font-semibold">*</em></span>
                  <input name="firstName" type="text" required placeholder={t("Your first name", "نام شما")} className={inputCls} />
                </label>
                <label className="flex flex-col gap-2 text-[13px] font-medium text-black">
                  <span>{t("Last Name", "نام خانوادگی")} <em className="text-[#8F27FF] not-italic font-semibold">*</em></span>
                  <input name="lastName" type="text" required placeholder={t("Your last name", "نام خانوادگی شما")} className={inputCls} />
                </label>
                <label className="flex flex-col gap-2 text-[13px] font-medium text-black">
                  <span>{t("Email", "ایمیل")} <em className="text-[#8F27FF] not-italic font-semibold">*</em></span>
                  <input name="email" type="email" required placeholder="you@example.com" className={inputCls} />
                </label>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
                <label className="flex flex-col gap-2 text-[13px] font-medium text-black">
                  <span>{t("Phone Number", "شماره تماس")} <em className="text-[#8F27FF] not-italic font-semibold">*</em></span>
                  <PhoneField name="phone" defaultCountryCode="+1" />
                </label>
                <label className="flex flex-col gap-2 text-[13px] font-medium text-black">
                  <span>{t("Do you have a 2025 Certificate?", "آیا گواهی ۲۰۲۵ را در اختیار دارید؟")}</span>
                  <select className={inputCls}>
                    <option>{t("Yes — 2025 Commitment Certificate", "بله — گواهی تعهد (Commitment Certificate) سال ۲۰۲۵")}</option>
                    <option>{t("No — Interested in Next Pilot", "خیر — مایل به بررسی پایلوت بعدی هستم")}</option>
                    <option>{t("Not Sure", "مطمئن نیستم")}</option>
                  </select>
                </label>
                <label className="flex flex-col gap-2 text-[13px] font-medium text-black">
                  <span>{t("Organization Type", "نوع سازمان")}</span>
                  <select className={inputCls}>
                    <option>{t("VC Fund ($200K+)", "صندوق سرمایه‌گذاری خطرپذیر — حداقل ۲۰۰,۰۰۰ دلار")}</option>
                    <option>{t("Angel Investor Group ($75K+)", "گروه سرمایه‌گذاران فرشته — حداقل ۷۵,۰۰۰ دلار")}</option>
                    <option>{t("Business Incubator ($0)", "مرکز رشد / انکوباتور — بدون حداقل سرمایه‌گذاری")}</option>
                    <option>{t("Not Yet Determined", "هنوز مشخص نیست")}</option>
                  </select>
                </label>
              </div>

              {/* Textarea */}
              <div className="mb-5">
                <label className="flex flex-col gap-2 text-[13px] font-medium text-black">
                  <span>{t("Tell us about your startup & team", "درباره استارتاپ و تیم خود برای ما بنویسید")}</span>
                  <textarea
                    rows={4}
                    placeholder={t("Describe your venture, team size, current stage, and your 2026 filing timeline…", "کسب‌وکار، اندازه‌ی تیم، مرحله‌ی فعلی و زمان‌بندی ثبت ۲۰۲۶ خود را شرح دهید…")}
                    name="message"
                    className={`${inputCls} resize-y min-h-[110px]`}
                  />
                </label>
              </div>

              {/* Footer */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mt-2">
                <small className="text-[12px] text-[#929292] leading-[1.5]">
                  {t("Your information is reviewed confidentially by Nexa's advisory team. We typically respond within 48 hours.", "اطلاعات شما توسط تیم مشاوره نکسا به‌صورت محرمانه بررسی می‌شود. حداکثر ظرف ۴۸ ساعت پاسخ خواهیم داد.")}
                </small>
                <button type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-[10px] px-7 py-3.5 bg-[#8F27FF] text-white font-semibold rounded-full text-[14px] transition-all hover:-translate-y-0.5 flex-shrink-0"
                  style={{ boxShadow: "0 12px 28px rgba(143,39,255,0.28)" }}>
                  {t("Submit Application →", "ارسال درخواست ←")}
                </button>
              </div>
            </form>
          </Reveal>
        )}
      </Row>
    </section>
  );
}
