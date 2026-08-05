"use client";
import { useState } from "react";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const steps = [
  {
    num: "1",
    meta: "Step 1 · Weeks 1–6",
    metaFa: "گام ۱ · هفته‌های ۱ تا ۶",
    title: "Secure a Vetted Facilitator",
    titleFa: "گرفتن یک تسهیل‌گر تأییدشده",
    desc: "Pitch your business model, prototype, or MVP to an RVO-approved incubator or accelerator. Negotiate terms and secure a signed collaboration agreement with your chosen facilitator.",
    descFa: "مدل کسب‌وکار، نمونه‌ی اولیه یا MVP خود را به یک شتاب‌دهنده یا مرکز رشد مورد تأیید RVO ارائه دهید. شرایط را مذاکره کنید و یک توافق‌نامه‌ی همکاری امضاشده با تسهیل‌گر منتخب خود بگیرید.",
  },
  {
    num: "2",
    meta: "Step 2 · Weeks 7–9",
    metaFa: "گام ۲ · هفته‌های ۷ تا ۹",
    title: "Prepare the Legal File",
    titleFa: "آماده‌سازی پرونده‌ی حقوقی",
    desc: "Finalize your 12-month step plan, obtain certified bank statements (€21,000+ floor), and have all civil documents professionally translated and apostilled.",
    descFa: "برنامه‌ی گام‌به‌گام ۱۲ ماهه‌ی خود را نهایی کنید، صورت‌حساب‌های بانکی تأییدشده (کف ۲۱٬۰۰۰ یورو به بالا) دریافت کنید و همه‌ی اسناد مدنی را به‌صورت حرفه‌ای ترجمه و آپوستیل کنید.",
  },
  {
    num: "3",
    meta: "Step 3 · Weeks 10–16",
    metaFa: "گام ۳ · هفته‌های ۱۰ تا ۱۶",
    title: "IND Filing & RVO Evaluation",
    titleFa: "ثبت در IND و ارزیابی RVO",
    desc: "Your facilitator submits the application digitally to the IND. The RVO evaluates your plan's innovation. The official government decision takes up to 90 days.",
    descFa: "تسهیل‌گر شما درخواست را به‌صورت دیجیتال به IND ثبت می‌کند. RVO نوآوری طرح شما را ارزیابی می‌کند. تصمیم رسمی دولت تا ۹۰ روز طول می‌کشد.",
  },
  {
    num: "4",
    meta: "Step 4 · Month 5",
    metaFa: "گام ۴ · ماه ۵",
    title: "Arrival & Business Onboarding",
    titleFa: "ورود و راه‌اندازی کسب‌وکار",
    desc: "Collect your MVV entry visa from your local embassy if required. Land in the Netherlands, register at city hall (BRP) for your BSN, register your business at the Chamber of Commerce (KVK), and collect your residence card.",
    descFa: "در صورت نیاز، ویزای ورود MVV خود را از سفارت محلی دریافت کنید. به هلند وارد شوید، در شهرداری (BRP) برای شماره‌ی BSN ثبت‌نام کنید، کسب‌وکارتان را در اتاق بازرگانی (KVK) ثبت کنید و کارت اقامت خود را دریافت کنید.",
  },
];

export default function ProcessSteps() {
  const { t } = useLang();
  const [active, setActive] = useState<number | null>(null);
  const [hoveredCircle, setHoveredCircle] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-20 bg-[#F7F6F9]" id="process">
      <Row>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Left — sticky via Reveal className (همان الگوی UK) */}
          <div className="md:sticky md:top-24">
            <Reveal variant="left">
              <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] mb-5">
                {t("Step-by-Step Application Timeline", "زمان‌بندی گام‌به‌گام درخواست")}
              </h2>
            </Reveal>
            <Reveal variant="left" delay={120}>
              <blockquote className="text-[18px] italic font-medium leading-[1.5] py-5 pl-6 mb-4"
                style={{ borderLeft: "3px solid #8F27FF" }}>
                &ldquo;{t("Nexa coordinates your application flow into a clear, linear progression to avoid processing rejections.", "نکسا جریان درخواست شما را در یک روند روشن و خطی هماهنگ می‌کند تا از ردهای پردازشی جلوگیری شود.")}&rdquo;
              </blockquote>
            </Reveal>
            <Reveal variant="left" delay={240}>
              <p className="text-[14.5px] text-[#929292] leading-[1.7]">
                {t("From securing your facilitator to landing in the Netherlands and registering your business, the full process takes approximately 4 to 5 months when properly prepared.", "از گرفتن تسهیل‌گر تا ورود به هلند و ثبت کسب‌وکار، کل فرایند با آماده‌سازی درست حدود ۴ تا ۵ ماه طول می‌کشد.")}
              </p>
            </Reveal>
          </div>

          {/* Right — steps */}
          <div className="relative pl-[52px]">
            <div className="absolute top-[22px] bottom-[22px] left-5 w-0.5 rounded-full"
              style={{ background: "linear-gradient(180deg, #8F27FF 0%, rgba(143,39,255,0.15) 100%)" }} />

            {steps.map((s, i) => (
              <Reveal key={s.num} variant="up" delay={i * 100 + 100}>
                <div
                  className="relative mb-5 last:mb-0 transition-transform hover:translate-x-1 cursor-pointer"
                  onClick={() => setActive(active === i ? null : i)}
                >
                  <div
                    className="absolute -left-[52px] top-0 w-[42px] h-[42px] rounded-full flex items-center justify-center text-[13px] font-bold z-10 transition-all duration-300 hover:scale-110"
                    onMouseEnter={() => setHoveredCircle(i)}
                    onMouseLeave={() => setHoveredCircle(null)}
                    style={{
                      border: "2px solid #8F27FF",
                      boxShadow: "0 0 0 5px #FAF6FF, 0 4px 12px rgba(143,39,255,0.12)",
                      background: active === i || hoveredCircle === i ? "#8F27FF" : "white",
                      color: active === i || hoveredCircle === i ? "white" : "#8F27FF",
                    }}
                  >
                    {s.num}
                  </div>
                  <div
                    className="bg-white rounded-[14px] p-[18px_22px] transition-colors duration-200"
                    style={{ border: active === i ? "1px solid rgba(143,39,255,0.4)" : "1px solid #E2E2E2" }}
                  >
                    <div className="text-[11px] font-bold text-[#8F27FF] uppercase tracking-[.08em] mb-1.5">{t(s.meta, s.metaFa)}</div>
                    <h4 className="text-[16px] font-semibold mb-1.5">{t(s.title, s.titleFa)}</h4>
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
