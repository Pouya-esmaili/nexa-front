"use client";

import { useState, FormEvent } from "react";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import PhoneField from "@/components/global/PhoneField";
import { useLang } from "@/components/global/LanguageProvider";

export default function ContactForm() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="py-20 md:py-24 bg-white">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center mb-10 md:mb-14">
            {t("Start Your France Talent Passport Journey", "سفر پاسپورت استعداد فرانسه خود را آغاز کنید")}
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
            <p className="text-[#929292] text-[15px]">{t("A Nexa advisor will reach out within 24 hours.", "یک مشاور نکسا ظرف ۲۴ ساعت با شما تماس خواهد گرفت.")}</p>
          </div>
        ) : (
          <Reveal variant="up" delay={100}>
            <form
              onSubmit={handleSubmit}
              className="rounded-[20px] p-5 sm:p-8 md:p-11 flex flex-col gap-5"
              style={{ background: "#F7F6F9", border: "1px solid #E2E2E2" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <label className="flex flex-col gap-2 text-[13px] font-medium">
                  <span className="flex items-center gap-1 text-[#474747]">
                    {t("First Name", "نام")} <em className="text-[#8F27FF] not-italic font-semibold">*</em>
                  </span>
                  <input type="text" required placeholder={t("Your first name", "نام شما")}
                    className="h-11 px-3.5 rounded-[10px] border border-[#E2E2E2] bg-white text-[14px] font-medium outline-none focus:border-[#8F27FF] transition-colors" />
                </label>
                <label className="flex flex-col gap-2 text-[13px] font-medium">
                  <span className="flex items-center gap-1 text-[#474747]">
                    {t("Last Name", "نام خانوادگی")} <em className="text-[#8F27FF] not-italic font-semibold">*</em>
                  </span>
                  <input type="text" required placeholder={t("Your last name", "نام خانوادگی شما")}
                    className="h-11 px-3.5 rounded-[10px] border border-[#E2E2E2] bg-white text-[14px] font-medium outline-none focus:border-[#8F27FF] transition-colors" />
                </label>
                <label className="flex flex-col gap-2 text-[13px] font-medium">
                  <span className="flex items-center gap-1 text-[#474747]">
                    {t("Email", "ایمیل")} <em className="text-[#8F27FF] not-italic font-semibold">*</em>
                  </span>
                  <input type="email" required placeholder="you@example.com"
                    className="h-11 px-3.5 rounded-[10px] border border-[#E2E2E2] bg-white text-[14px] font-medium outline-none focus:border-[#8F27FF] transition-colors" />
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <label className="flex flex-col gap-2 text-[13px] font-medium">
                  <span className="flex items-center gap-1 text-[#474747]">
                    {t("Phone Number", "شماره تماس")} <em className="text-[#8F27FF] not-italic font-semibold">*</em>
                  </span>
                  <PhoneField defaultCountryCode="+33" />
                </label>
                <label className="flex flex-col gap-2 text-[13px] font-medium">
                  <span className="text-[#474747]">{t("Investment Form", "نوع سرمایه‌گذاری")}</span>
                  <select className="h-11 px-3.5 rounded-[10px] border border-[#E2E2E2] bg-white text-[14px] font-medium outline-none focus:border-[#8F27FF] transition-colors">
                    <option>{t("Direct Equity (≥10%)", "سرمایه‌گذاری مستقیم در سهام (حداقل ۱۰٪)")}</option>
                    <option>{t("Reinvested Earnings", "سرمایه‌گذاری مجدد سود")}</option>
                    <option>{t("Inter-Affiliate Loans", "وام بین شرکت‌های وابسته")}</option>
                    <option>{t("Not yet decided", "هنوز تصمیم نگرفته‌ام")}</option>
                  </select>
                </label>
                <label className="flex flex-col gap-2 text-[13px] font-medium">
                  <span className="text-[#474747]">{t("Business Sector", "حوزه فعالیت")}</span>
                  <select className="h-11 px-3.5 rounded-[10px] border border-[#E2E2E2] bg-white text-[14px] font-medium outline-none focus:border-[#8F27FF] transition-colors">
                    <option>{t("Technology / SaaS", "فناوری / SaaS")}</option>
                    <option>{t("Industrial / Manufacturing", "صنعتی / تولید")}</option>
                    <option>{t("Agri-food / Agriculture", "کشاورزی و صنایع غذایی")}</option>
                    <option>{t("Artisanal / Craft", "صنایع دستی")}</option>
                    <option>{t("Healthcare / Medtech", "سلامت / مد‌تک")}</option>
                    <option>{t("Other", "سایر")}</option>
                  </select>
                </label>
              </div>

              <label className="flex flex-col gap-2 text-[13px] font-medium">
                <span className="text-[#474747]">{t("Tell us about your investment & goals", "درباره سرمایه‌گذاری و اهداف خود برای ما بنویسید")}</span>
                <textarea rows={4}
                  placeholder={t("Describe your investment capacity, target enterprise, job creation plan, and long-term France goals…", "ظرفیت سرمایه‌گذاری، بنگاه هدف، طرح ایجاد اشتغال و اهداف بلندمدت خود در فرانسه را شرح دهید…")}
                  className="px-3.5 py-3 rounded-[10px] border border-[#E2E2E2] bg-white text-[14px] font-medium outline-none focus:border-[#8F27FF] transition-colors resize-y" />
              </label>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                <small className="text-[12px] text-[#929292] leading-relaxed max-w-[50ch]">
                  {t("Your information is reviewed confidentially by Nexa's advisory team. We typically respond within 24 hours.", "اطلاعات شما توسط تیم مشاوره نکسا به‌صورت محرمانه بررسی می‌شود. حداکثر ظرف ۲۴ ساعت پاسخ خواهیم داد.")}
                </small>
                <button type="submit"
                  className="w-full sm:w-auto flex-shrink-0 inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#8F27FF] text-white font-semibold rounded-full text-[14px] transition-all hover:-translate-y-0.5"
                  style={{ boxShadow: "0 10px 24px rgba(143,39,255,0.28)" }}>
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
