"use client";
import { useState } from "react";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const steps = [
  {
    num: "1",
    meta: "Step 1 · Weeks 1–4",
    metaFa: "گام ۱ · هفته‌های ۱ تا ۴",
    title: "NIF, Bank Setup & Business Plan Architecture",
    titleFa: "NIF، راه‌اندازی بانک و معماری طرح کسب‌وکار",
    desc: "Secure your Portuguese Tax Number (NIF) via a local fiscal representative. Open your domestic Portuguese bank account remotely and transfer personal maintenance funds (~€10,000+). Design a comprehensive, market-vetted business plan.",
    descFa: "شماره‌ی مالیاتی پرتغالی (NIF) خود را از طریق یک نماینده‌ی مالی محلی تأمین کنید. حساب بانکی داخلی پرتغالی خود را از راه دور باز کنید و وجوه تأمین معاش شخصی (~۱۰٬۰۰۰ یورو به بالا) را انتقال دهید. یک طرح کسب‌وکار جامع و بازارسنجی‌شده طراحی کنید.",
  },
  {
    num: "2",
    meta: "Step 2 · Weeks 5–8",
    metaFa: "گام ۲ · هفته‌های ۵ تا ۸",
    title: "Corporate Incorporation & Capitalization",
    titleFa: "ثبت شرکت و سرمایه‌گذاری",
    desc: "Formally incorporate your Portuguese entity (Lda). Deposit the corporate share capital into your business account and secure your formal company registration documents (Certidão Permanente).",
    descFa: "نهاد پرتغالی خود (Lda) را به‌طور رسمی ثبت کنید. سرمایه‌ی سهام شرکتی را به حساب کسب‌وکار خود واریز کنید و اسناد رسمی ثبت شرکت (Certidão Permanente) را دریافت کنید.",
  },
  {
    num: "3",
    meta: "Step 3 · Weeks 9–14",
    metaFa: "گام ۳ · هفته‌های ۹ تا ۱۴",
    title: "Consular Submission & Entry Visa Issuance",
    titleFa: "ثبت کنسولی و صدور ویزای ورود",
    desc: "Submit your complete D2 file to your home country's Portuguese Consulate or VFS center — business plan, corporate registry, bank statements, apostilled criminal records, and accommodation proofs. The consulate issues a 4-month, double-entry D2 Visa.",
    descFa: "پرونده‌ی کامل D2 خود را به کنسولگری پرتغال یا مرکز VFS در کشور خود ارسال کنید — طرح کسب‌وکار، ثبت شرکت، صورت‌حساب‌های بانکی، سوابق کیفری آپوستیل‌شده و مدارک اقامت. کنسولگری یک ویزای D2 چهارماهه‌ی دو بار ورود صادر می‌کند.",
  },
  {
    num: "4",
    meta: "Step 4 · Months 4–5",
    metaFa: "گام ۴ · ماه‌های ۴ تا ۵",
    title: "Arrival & AIMA Residency Appointment",
    titleFa: "ورود و نوبت اقامت AIMA",
    desc: "Land in Portugal on your entry visa. Register your business with the tax authority and social security. Attend your AIMA appointment to submit biometrics and convert your entry visa into a multi-year physical residence card.",
    descFa: "با ویزای ورود خود به پرتغال وارد شوید. کسب‌وکار خود را نزد اداره‌ی مالیات و تأمین اجتماعی ثبت کنید. در نوبت AIMA خود برای ارائه‌ی بیومتریک و تبدیل ویزای ورود به یک کارت فیزیکی اقامت چندساله حاضر شوید.",
  },
];

export default function ProcessSteps() {
  const { t } = useLang();
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-24 bg-[#F7F6F9]">
      <Row>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <Reveal variant="left" className="md:sticky md:top-24">
            <div>
              <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] mb-5">
                {t("Step-by-Step Application Timeline", "زمان‌بندی گام‌به‌گام درخواست")}
              </h2>
              <blockquote className="text-[18px] font-medium italic leading-[1.5] pl-6 mb-4"
                style={{ borderLeft: "3px solid #8F27FF" }}>
                &ldquo;{t("Nexa coordinates your D2 life-cycle into a clear, linear workflow to avoid processing rejections.", "نکسا چرخه‌ی عمر D2 شما را در یک گردش‌کار روشن و خطی هماهنگ می‌کند تا از ردهای پردازشی جلوگیری شود.")}&rdquo;
              </blockquote>
              <p className="text-[14.5px] text-[#929292] leading-[1.7]">
                {t("From NIF registration to collecting your physical residence card, the full consular route takes approximately 3 to 5 months. Nexa structures your preliminary setup — NIF, Portuguese bank account, and business incorporation — before file submission.", "از ثبت NIF تا دریافت کارت فیزیکی اقامت، کل مسیر کنسولی حدود ۳ تا ۵ ماه طول می‌کشد. نکسا راه‌اندازی مقدماتی شما — NIF، حساب بانکی پرتغالی و ثبت کسب‌وکار — را پیش از ارسال پرونده ساختاردهی می‌کند.")}
              </p>
            </div>
          </Reveal>

          <div className="relative pl-14">
            <div className="absolute top-5 bottom-5 left-5 w-[2px] rounded-full"
              style={{ background: "linear-gradient(180deg, #8F27FF 0%, rgba(143,39,255,0.15) 100%)" }} />

            {steps.map((s, i) => (
              <Reveal key={s.num} variant="up" delay={i * 100 + 100}>
                <div
                  className="relative mb-5 last:mb-0 transition-transform duration-250 hover:translate-x-1 cursor-pointer"
                  onClick={() => setActive(active === i ? null : i)}
                >
                  <div
                    className="absolute -left-14 top-0 w-[42px] h-[42px] rounded-full flex items-center justify-center text-[13px] font-bold z-10 transition-all duration-300 hover:scale-110"
                    style={{
                      border: "2px solid #8F27FF",
                      boxShadow: "0 0 0 5px #FAF6FF, 0 4px 12px rgba(143,39,255,0.12)",
                      background: active === i ? "#8F27FF" : "white",
                      color: active === i ? "white" : "#8F27FF",
                    }}
                  >
                    {s.num}
                  </div>
                  <div
                    className="bg-white rounded-[14px] px-5 py-4 transition-colors duration-200"
                    style={{ border: active === i ? "1px solid rgba(143,39,255,0.4)" : "1px solid #E2E2E2" }}
                  >
                    <div className="text-[11px] font-bold text-[#8F27FF] uppercase tracking-[0.08em] mb-1.5">{t(s.meta, s.metaFa)}</div>
                    <h4 className="text-[16px] font-semibold tracking-[-0.015em] mb-1">{t(s.title, s.titleFa)}</h4>
                    <p className="text-[13.5px] text-[#929292] leading-[1.6] m-0">{t(s.desc, s.descFa)}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Row>
    </section>
  );
}
