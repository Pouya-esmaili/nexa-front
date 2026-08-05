"use client";
import { useState, FormEvent } from "react";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import PhoneField from "@/components/global/PhoneField";
import { useLang } from "@/components/global/LanguageProvider";

const inputCls =
  "w-full bg-[#F7F6F9] border-[1.5px] border-[#E2E2E2] rounded-[12px] px-4 py-[13px] text-[15px] text-black outline-none transition-all duration-[200ms] placeholder:text-[#D9D9D9] focus:border-[#8F27FF] focus:bg-[#FAF6FF] focus:shadow-[0_0_0_3px_rgba(143,39,255,.1)]";

const selectCls =
  "w-full bg-[#F7F6F9] border-[1.5px] border-[#E2E2E2] rounded-[12px] px-4 py-[13px] text-[15px] text-black outline-none transition-all duration-[200ms] appearance-none cursor-pointer focus:border-[#8F27FF] focus:bg-[#FAF6FF]";

const selectStyle = {
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23929292' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
  backgroundRepeat: "no-repeat" as const,
  backgroundPosition: "right 14px center",
  backgroundSize: "16px",
  paddingRight: 42,
};

const labelCls = "text-[12px] font-semibold tracking-[.08em] uppercase text-[#929292]";

export default function ContactForm() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const body = {
      formName: 'entrepreneurship_contact',
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
    <section id="contact" className="py-[100px] bg-white relative overflow-hidden">
      <div
        className="pointer-events-none absolute -top-[300px] -right-[200px] w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle,rgba(143,39,255,.06) 0%,transparent 65%)" }}
      />
      <Row>
        <Reveal variant="up">
          <div className="text-center max-w-[700px] mx-auto mb-14">
            <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1]">
              {t("Ready to Take Your Business", "آماده‌اید کسب‌وکارتان را")} <span className="highlight">{t("Global?", "جهانی کنید؟")}</span>
            </h2>
          </div>
        </Reveal>

        {sent ? (
          <div
            className="flex flex-col items-center justify-center gap-4 rounded-[28px] p-14 text-center max-w-xl mx-auto"
            style={{ background: "#FAF6FF", border: "1.5px solid rgba(143,39,255,0.2)" }}
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#8F27FF]">
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2.5} strokeLinecap="round" className="w-7 h-7">
                <path d="M5 12l4 4 10-10" />
              </svg>
            </div>
            <h3 className="text-[22px] font-bold">{t("Thank you!", "سپاسگزاریم!")}</h3>
            <p className="text-[#929292] text-[15px]">{t("A Nexa advisor will reach out within 48 hours.", "یکی از مشاوران نکسا ظرف ۴۸ ساعت با شما تماس می‌گیرد.")}</p>
          </div>
        ) : (
          <Reveal variant="up" delay={100}>
            <div
              className="max-w-[860px] mx-auto bg-white rounded-[28px] px-[52px] py-[48px] relative overflow-hidden"
              style={{
                border: "1px solid rgba(143,39,255,.15)",
                boxShadow: "0 24px 80px rgba(143,39,255,.05),0 4px 24px rgba(0,0,0,.05)",
              }}
            >
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-x-[28px] gap-y-[22px]">

                <div className="flex flex-col gap-[7px]">
                  <label className={labelCls}>{t("First Name", "نام")} <span className="text-[#8F27FF]">*</span></label>
                  <input name="firstName" type="text" required placeholder={t("Your first name", "نام شما")} className={inputCls} />
                </div>

                <div className="flex flex-col gap-[7px]">
                  <label className={labelCls}>{t("Last Name", "نام خانوادگی")} <span className="text-[#8F27FF]">*</span></label>
                  <input name="lastName" type="text" required placeholder={t("Your last name", "نام خانوادگی شما")} className={inputCls} />
                </div>

                <div className="flex flex-col gap-[7px]">
                  <label className={labelCls}>{t("Email Address", "آدرس ایمیل")} <span className="text-[#8F27FF]">*</span></label>
                  <input name="email" type="email" required placeholder="you@example.com" className={inputCls} />
                </div>

                <div className="flex flex-col gap-[7px]">
                  <label className={labelCls}>{t("Phone Number", "شماره تماس")} <span className="text-[#8F27FF]">*</span></label>
                  <PhoneField name="phone" defaultCountryCode="+1" />
                </div>

                <div className="flex flex-col gap-[7px]">
                  <label className={labelCls}>{t("Country of Interest", "کشور موردنظر")} <span className="text-[#8F27FF]">*</span></label>
                  <select required className={selectCls} style={selectStyle}>
                    <option value="">{t("Select a country…", "یک کشور را انتخاب کنید…")}</option>
                    <option>{t("Canada — Start-Up Visa", "کانادا — ویزای استارتاپ")}</option>
                    <option>{t("Spain — Entrepreneur Visa", "اسپانیا — ویزای کارآفرینی")}</option>
                    <option>{t("Finland — Startup Permit", "فنلاند — مجوز استارتاپ")}</option>
                    <option>{t("Portugal — D2 Visa", "پرتغال — ویزای D2")}</option>
                    <option>{t("Netherlands — Startup Visa", "هلند — ویزای استارتاپ")}</option>
                    <option>{t("Not sure yet", "هنوز مطمئن نیستم")}</option>
                  </select>
                </div>

                <div className="flex flex-col gap-[7px]">
                  <label className={labelCls}>{t("Industry / Business Type", "صنعت / نوع کسب‌وکار")} <span className="text-[#8F27FF]">*</span></label>
                  <select required className={selectCls} style={selectStyle}>
                    <option value="">{t("Select your industry…", "صنعت خود را انتخاب کنید…")}</option>
                    <option>{t("Technology / SaaS", "فناوری / SaaS")}</option>
                    <option>{t("E-commerce / Retail", "تجارت الکترونیک / خرده‌فروشی")}</option>
                    <option>{t("Healthcare / Medical", "سلامت / پزشکی")}</option>
                    <option>{t("Food & Beverage", "غذا و نوشیدنی")}</option>
                    <option>{t("Education / EdTech", "آموزش / فناوری آموزش")}</option>
                    <option>{t("Finance / FinTech", "مالی / فین‌تک")}</option>
                    <option>{t("Manufacturing", "تولید")}</option>
                    <option>{t("Creative / Media", "خلاقیت / رسانه")}</option>
                    <option>{t("Other", "سایر")}</option>
                  </select>
                </div>

                <div className="flex flex-col gap-[7px]">
                  <label className={labelCls}>{t("Current Business Stage", "مرحله‌ی فعلی کسب‌وکار")}</label>
                  <select className={selectCls} style={selectStyle}>
                    <option value="">{t("Select stage…", "مرحله را انتخاب کنید…")}</option>
                    <option>{t("Idea / Pre-revenue", "ایده / پیش از درآمد")}</option>
                    <option>{t("MVP / Early Traction", "MVP / جذب اولیه")}</option>
                    <option>{t("Established (1–3 years)", "تثبیت‌شده (۱ تا ۳ سال)")}</option>
                    <option>{t("Scaling / Growth Stage", "مرحله‌ی مقیاس‌دهی / رشد")}</option>
                  </select>
                </div>

                <div className="flex flex-col gap-[7px]">
                  <label className={labelCls}>{t("Estimated Available Capital", "سرمایه‌ی در دسترس تخمینی")}</label>
                  <select className={selectCls} style={selectStyle}>
                    <option value="">{t("Select range…", "بازه را انتخاب کنید…")}</option>
                    <option>{t("Under $50,000", "زیر ۵۰٬۰۰۰ دلار")}</option>
                    <option>{t("$50,000 – $100,000", "۵۰٬۰۰۰ تا ۱۰۰٬۰۰۰ دلار")}</option>
                    <option>{t("$100,000 – $250,000", "۱۰۰٬۰۰۰ تا ۲۵۰٬۰۰۰ دلار")}</option>
                    <option>{t("$250,000 – $500,000", "۲۵۰٬۰۰۰ تا ۵۰۰٬۰۰۰ دلار")}</option>
                    <option>{t("$500,000+", "بیش از ۵۰۰٬۰۰۰ دلار")}</option>
                  </select>
                </div>

                <div className="flex flex-col gap-[7px]">
                  <label className={labelCls}>{t("How Did You Hear About Us?", "چطور با ما آشنا شدید؟")}</label>
                  <select className={selectCls} style={selectStyle}>
                    <option value="">{t("Select…", "انتخاب کنید…")}</option>
                    <option>{t("Google", "گوگل")}</option>
                    <option>{t("Social Media", "شبکه‌های اجتماعی")}</option>
                    <option>{t("Friend / Referral", "دوست / معرفی")}</option>
                    <option>{t("Attorney", "وکیل")}</option>
                    <option>{t("Webinar", "وبینار")}</option>
                    <option>{t("Tradeshow / Conference", "نمایشگاه / کنفرانس")}</option>
                    <option>{t("Other", "سایر")}</option>
                  </select>
                </div>

                {/* Full-width: empty cell to balance grid before textarea */}
                <div className="hidden sm:block" />

                <div className="flex flex-col gap-[7px] col-span-1 sm:col-span-2">
                  <label className={labelCls}>{t("Tell Us About Your Project", "درباره‌ی پروژه‌تان بگویید")}</label>
                  <textarea
                    rows={5}
                    placeholder={t("Briefly describe your business, goals, and what you're looking to achieve through international expansion…", "به‌طور خلاصه کسب‌وکار، اهداف و آنچه از طریق گسترش بین‌المللی می‌خواهید به آن برسید را شرح دهید…")}
                    name="message"
                    className={`${inputCls} resize-y min-h-[120px] leading-[1.65]`}
                  />
                </div>

                <div className="col-span-1 sm:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 mt-2 border-t border-[#F4F4F4]">
                  <span className="flex items-center gap-[6px] text-[13px] text-[#929292] leading-[1.5]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="flex-shrink-0">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    {t("Your information is kept strictly confidential.", "اطلاعات شما کاملاً محرمانه نگهداری می‌شود.")}
                  </span>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-[10px] px-10 py-[14px] bg-[#8F27FF] text-white font-semibold rounded-full text-[15px] transition-all duration-[250ms] hover:bg-[#7A1FE0] hover:-translate-y-px hover:shadow-[0_8px_22px_rgba(143,39,255,.28)]"
                  >
                    {t("Send Message", "ارسال پیام")}
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.5} className="w-4 h-4">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

              </form>
            </div>
          </Reveal>
        )}
      </Row>
    </section>
  );
}
