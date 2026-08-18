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
      formName: 'portugal_contact',
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
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center mb-10 md:mb-14">
            {t("Start Your Portugal D2 Visa Journey", "یک قدم تا ورود به مسیر دریافت ویزای D2 پرتغال")}
          </h2>
        </Reveal>

        {sent ? (
          <div className="flex flex-col items-center justify-center gap-4 rounded-[20px] p-14 text-center max-w-xl mx-auto"
            style={{ background: "#FAF6FF", border: "1.5px solid rgba(143,39,255,0.2)" }}>
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
            <form onSubmit={handleSubmit} className="rounded-[20px] p-5 sm:p-8 md:p-11 flex flex-col gap-5"
              style={{ background: "#F7F6F9", border: "1px solid #E2E2E2" }}>
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <label className="flex flex-col gap-2 text-[13px] font-medium">
                  <span className="flex items-center gap-1 text-[#474747]">{t("First Name", "نام")} <em className="text-[#8F27FF] not-italic font-semibold">*</em></span>
                  <input name="firstName" type="text" required placeholder={t("Your first name", "نام شما")}
                    className="h-11 px-3.5 rounded-[10px] border border-gray-200 bg-white text-[14px] font-medium outline-none focus:border-[#8F27FF] transition-colors" />
                </label>
                <label className="flex flex-col gap-2 text-[13px] font-medium">
                  <span className="flex items-center gap-1 text-[#474747]">{t("Last Name", "نام خانوادگی")} <em className="text-[#8F27FF] not-italic font-semibold">*</em></span>
                  <input name="lastName" type="text" required placeholder={t("Your last name", "نام خانوادگی شما")}
                    className="h-11 px-3.5 rounded-[10px] border border-gray-200 bg-white text-[14px] font-medium outline-none focus:border-[#8F27FF] transition-colors" />
                </label>
                <label className="flex flex-col gap-2 text-[13px] font-medium">
                  <span className="flex items-center gap-1 text-[#474747]">{t("Email", "ایمیل")} <em className="text-[#8F27FF] not-italic font-semibold">*</em></span>
                  <input name="email" type="email" required placeholder="you@example.com"
                    className="h-11 px-3.5 rounded-[10px] border border-gray-200 bg-white text-[14px] font-medium outline-none focus:border-[#8F27FF] transition-colors" />
                </label>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <label className="flex flex-col gap-2 text-[13px] font-medium">
                  <span className="flex items-center gap-1 text-[#474747]">{t("Phone Number", "شماره تماس")} <em className="text-[#8F27FF] not-italic font-semibold">*</em></span>
                  <PhoneField name="phone" defaultCountryCode="+351" />
                </label>
                <label className="flex flex-col gap-2 text-[13px] font-medium">
                  <span className="text-[#474747]">{t("Your Role", "نقش شما")}</span>
                  <select className="h-11 px-3.5 rounded-[10px] border border-gray-200 bg-white text-[14px] font-medium outline-none focus:border-[#8F27FF] transition-colors">
                    <option>{t("Lead Founder", "بنیان‌گذار اصلی")}</option>
                    <option>{t("Co-Founder", "هم‌بنیان‌گذار")}</option>
                    <option>{t("Currently in Portugal (EOI)", "در حال حاضر در پرتغال (EOI)")}</option>
                  </select>
                </label>
                <label className="flex flex-col gap-2 text-[13px] font-medium">
                  <span className="text-[#474747]">{t("Business Type", "نوع کسب‌وکار")}</span>
                  <select className="h-11 px-3.5 rounded-[10px] border border-gray-200 bg-white text-[14px] font-medium outline-none focus:border-[#8F27FF] transition-colors">
                    <option>{t("Technology / SaaS", "فناوری / SaaS")}</option>
                    <option>{t("Consulting / Services", "مشاوره / خدمات")}</option>
                    <option>{t("Import-Export", "واردات و صادرات")}</option>
                    <option>{t("Real Estate", "املاک و مستغلات")}</option>
                    <option>{t("Hospitality", "هتلداری")}</option>
                    <option>{t("Other", "سایر")}</option>
                  </select>
                </label>
              </div>

              {/* Textarea */}
              <label className="flex flex-col gap-2 text-[13px] font-medium">
                <span className="text-[#474747]">{t("Tell us about your business & goals", "درباره کسب‌وکار و اهداف خود برای ما بنویسید")}</span>
                <textarea name="message" rows={4} placeholder={t("Describe your business model, target market in Portugal, and what you're looking to achieve…", "مدل کسب‌وکار، بازار هدف در پرتغال و آنچه به دنبال دستیابی به آن هستید را شرح دهید…")}
                  className="px-3.5 py-3 rounded-[10px] border border-gray-200 bg-white text-[14px] font-medium outline-none focus:border-[#8F27FF] transition-colors resize-y" />
              </label>

              {/* Footer */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                <small className="text-[12px] text-gray-500 leading-relaxed max-w-[50ch]">
                  {t("Your information is reviewed confidentially by Nexa's advisory team. We typically respond within 48 hours.", "اطلاعات شما به‌صورت محرمانه توسط تیم مشاوره نکسا بررسی می‌شود. معمولاً ظرف ۴۸ ساعت پاسخ خواهیم داد.")}
                </small>
                <button type="submit"
                  className="w-full sm:w-auto flex-shrink-0 inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#8F27FF] text-white font-semibold rounded-full text-[14px] transition-all hover:-translate-y-0.5"
                  style={{ boxShadow: "0 10px 24px rgba(143,39,255,0.28)" }}>
                  {t("Submit Application →", "ارسال درخواست →")}
                </button>
              </div>
            </form>
          </Reveal>
        )}
      </Row>
    </section>
  );
}
