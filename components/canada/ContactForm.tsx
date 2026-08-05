"use client";

import { useState, FormEvent } from "react";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import PhoneField from "@/components/global/PhoneField";
import { useLang } from "@/components/global/LanguageProvider";

export default function ContactForm() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const body = {
      formName: 'canada_contact',
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
    <section id="contact" className="py-20 md:py-24 bg-white">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center mb-10">
            {t("Book an Appointment", "رزرو وقت ملاقات")}
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
          <Reveal variant="up" delay={100}>
            {/* Outer dashed wrapper */}
            <div className="max-w-[1100px] mx-auto rounded-[28px] p-5 sm:p-8 md:p-9"
              style={{ background: "#F4F4F4", border: "1.5px dashed #B8C5FF" }}>
              {/* Inner white card */}
              <div className="bg-white rounded-[20px] p-5 sm:p-7 md:p-8 border border-[#E2E2E2]">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {/* Row 1 */}
                  <label className="flex flex-col gap-1.5 text-[12.5px] font-medium text-[#474747]">
                    {t("First Name", "نام")} <em className="text-[#8F27FF] not-italic">*</em>
                    <input name="firstName" type="text" required
                      className="h-10 px-3.5 rounded-[10px] border border-[#E2E2E2] bg-[#F4F4F4] text-[13.5px] outline-none focus:border-[#8F27FF] focus:bg-white transition-colors"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5 text-[12.5px] font-medium text-[#474747]">
                    {t("Last Name", "نام خانوادگی")} <em className="text-[#8F27FF] not-italic">*</em>
                    <input name="lastName" type="text" required
                      className="h-10 px-3.5 rounded-[10px] border border-[#E2E2E2] bg-[#F4F4F4] text-[13.5px] outline-none focus:border-[#8F27FF] focus:bg-white transition-colors"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5 text-[12.5px] font-medium text-[#474747]">
                    {t("Email", "ایمیل")} <em className="text-[#8F27FF] not-italic">*</em>
                    <input name="email" type="email" required
                      className="h-10 px-3.5 rounded-[10px] border border-[#E2E2E2] bg-[#F4F4F4] text-[13.5px] outline-none focus:border-[#8F27FF] focus:bg-white transition-colors"
                    />
                  </label>

                  {/* Row 2 */}
                  <label className="flex flex-col gap-1.5 text-[12.5px] font-medium text-[#474747]">
                    {t("Phone Number", "شماره تماس")} <em className="text-[#8F27FF] not-italic">*</em>
                    <PhoneField name="phone" defaultCountryCode="+1" />
                  </label>
                  <label className="flex flex-col gap-1.5 text-[12.5px] font-medium text-[#474747]">
                    {t("Which best describes you?", "کدام گزینه شما را بهتر توصیف می‌کند؟")} <em className="text-[#8F27FF] not-italic">*</em>
                    <select className="h-10 px-3.5 rounded-[10px] border border-[#E2E2E2] bg-[#F4F4F4] text-[13.5px] outline-none focus:border-[#8F27FF] focus:bg-white transition-colors">
                      <option>{t("Investor", "سرمایه‌گذار")}</option>
                      <option>{t("Entrepreneur", "کارآفرین")}</option>
                      <option>{t("Startup Founder", "بنیان‌گذار استارتاپ")}</option>
                    </select>
                  </label>
                  <label className="flex flex-col gap-1.5 text-[12.5px] font-medium text-[#474747]">
                    {t("What is your primary objective?", "هدف اصلی شما چیست؟")}
                    <select className="h-10 px-3.5 rounded-[10px] border border-[#E2E2E2] bg-[#F4F4F4] text-[13.5px] outline-none focus:border-[#8F27FF] focus:bg-white transition-colors">
                      <option>{t("Seeking Investment", "جست‌وجوی سرمایه‌گذاری")}</option>
                      <option>{t("Start a business in Canada", "راه‌اندازی کسب‌وکار در کانادا")}</option>
                      <option>{t("Obtain Permanent Residence", "دریافت اقامت دائم")}</option>
                      <option>{t("Expand existing business", "گسترش کسب‌وکار موجود")}</option>
                    </select>
                  </label>

                  {/* Row 3 */}
                  <label className="flex flex-col gap-1.5 text-[12.5px] font-medium text-[#474747]">
                    {t("Industry / Sector", "صنعت / حوزه")} <em className="text-[#8F27FF] not-italic">*</em>
                    <select className="h-10 px-3.5 rounded-[10px] border border-[#E2E2E2] bg-[#F4F4F4] text-[13.5px] outline-none focus:border-[#8F27FF] focus:bg-white transition-colors">
                      <option>{t("Real Estate", "املاک و مستغلات")}</option>
                      <option>{t("Technology & Innovation", "فناوری و نوآوری")}</option>
                      <option>{t("Healthcare", "بهداشت و درمان")}</option>
                      <option>{t("Manufacturing", "تولید")}</option>
                      <option>{t("Clean Energy", "انرژی پاک")}</option>
                      <option>{t("Tourism & Hospitality", "گردشگری و مهمان‌نوازی")}</option>
                      <option>{t("Agriculture", "کشاورزی")}</option>
                    </select>
                  </label>
                  <label className="flex flex-col gap-1.5 text-[12.5px] font-medium text-[#474747]">
                    {t("Target Province", "استان هدف")}
                    <select className="h-10 px-3.5 rounded-[10px] border border-[#E2E2E2] bg-[#F4F4F4] text-[13.5px] outline-none focus:border-[#8F27FF] focus:bg-white transition-colors">
                      <option>{t("Ontario", "انتاریو")}</option>
                      <option>{t("British Columbia", "بریتیش کلمبیا")}</option>
                      <option>{t("Alberta", "آلبرتا")}</option>
                      <option>{t("Quebec", "کبک")}</option>
                      <option>{t("Manitoba", "مانیتوبا")}</option>
                      <option>{t("Saskatchewan", "ساسکاچوان")}</option>
                      <option>{t("Atlantic Provinces", "استان‌های آتلانتیک")}</option>
                      <option>{t("Not decided yet", "هنوز تصمیم نگرفته‌ام")}</option>
                    </select>
                  </label>
                  <label className="flex flex-col gap-1.5 text-[12.5px] font-medium text-[#474747]">
                    {t("Available Investment", "سرمایه‌ی در دسترس")}
                    <select className="h-10 px-3.5 rounded-[10px] border border-[#E2E2E2] bg-[#F4F4F4] text-[13.5px] outline-none focus:border-[#8F27FF] focus:bg-white transition-colors">
                      <option>{t("Under CAD 150K", "کمتر از ۱۵۰ هزار دلار کانادا")}</option>
                      <option>{t("CAD 150K – 300K", "۱۵۰ تا ۳۰۰ هزار دلار کانادا")}</option>
                      <option>{t("CAD 300K – 600K", "۳۰۰ تا ۶۰۰ هزار دلار کانادا")}</option>
                      <option>{t("CAD 600K+", "بیش از ۶۰۰ هزار دلار کانادا")}</option>
                    </select>
                  </label>

                  {/* Textarea full-width */}
                  <label className="flex flex-col gap-1.5 text-[12.5px] font-medium text-[#474747] col-span-full">
                    {t("Tell us about your startup & goals", "درباره‌ی استارتاپ و اهداف خود به ما بگویید")}
                    <textarea
                      rows={4}
                      placeholder={t("Describe your business idea, target province, and what you're looking to achieve in Canada…", "ایده‌ی کسب‌وکار، استان هدف و آنچه می‌خواهید در کانادا به آن دست یابید را شرح دهید…")}
                      name="message"
                      className="px-3.5 py-3 rounded-[10px] border border-[#E2E2E2] bg-[#F4F4F4] text-[13.5px] outline-none focus:border-[#8F27FF] focus:bg-white transition-colors resize-y"
                    />
                  </label>

                  {/* Footer */}
                  <div className="col-span-full flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 pt-1">
                    <small className="text-[12px] text-gray-400">{t("Your information is reviewed confidentially by Nexa's advisory team.", "اطلاعات شما به‌صورت محرمانه توسط تیم مشاوره‌ی نکسا بررسی می‌شود.")}</small>
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-3.5 bg-[#8F27FF] text-white font-semibold rounded-full text-[15px] tracking-[-0.01em] transition-all hover:-translate-y-0.5"
                      style={{ boxShadow: "0 10px 24px rgba(143,39,255,0.3)" }}
                    >
                      {t("Submit Application →", "ارسال درخواست →")}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Reveal>
        )}
      </Row>
    </section>
  );
}
