"use client";
import { useState } from "react";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const steps = [
  {
    num: "1",
    meta: "Step 1 · Weeks 1–6",
    metaFa: "۰۱ — هفته‌های اول تا ششم",
    title: "Vetting & Endorsement",
    titleFa: "ارزیابی و دریافت Endorsement",
    desc: "Develop your comprehensive business plan, financial forecasts, and technological roadmap. Pitch your venture to a Home Office-approved Endorsing Body to secure your formal Endorsement Letter — valid for 3 months.",
    descFa: "بیزنس‌پلن، پیش‌بینی‌های مالی و نقشه توسعه کسب‌وکار آماده می‌شود و کسب‌وکار برای یک Endorsing Body مورد تأیید Home Office ارائه خواهد شد تا Endorsement Letter رسمی صادر شود.",
  },
  {
    num: "2",
    meta: "Step 2 · Weeks 7–8",
    metaFa: "۰۲ — هفته‌های هفتم تا هشتم",
    title: "Document Compilation & Maintenance Check",
    titleFa: "تکمیل مدارک و بررسی تمکن مالی",
    desc: "Compile your B2 English language certificates, complete a TB test if required by your country of origin, and ensure your personal account maintains the £1,270 maintenance floor for 28 consecutive days.",
    descFa: "مدرک زبان در سطح B2، نتیجه آزمایش TB در صورت نیاز و سایر مدارک تکمیل می‌شوند. همچنین باید حداقل £1,270 به مدت ۲۸ روز متوالی در حساب شخصی شما حفظ شده باشد.",
  },
  {
    num: "3",
    meta: "Step 3 · Weeks 9–12",
    metaFa: "۰۳ — هفته‌های نهم تا دوازدهم",
    title: "Home Office Portal Submission",
    titleFa: "ثبت درخواست در Home Office",
    desc: "Submit via the official GOV.UK portal, settle the visa fees and IHS surcharges, and attend a biometrics appointment at an authorized visa center to scan fingerprints and photograph.",
    descFa: "درخواست از طریق پورتال رسمی GOV.UK ثبت شده، هزینه ویزا و IHS پرداخت می‌شود و سپس برای ثبت اثر انگشت و عکس به مرکز مجاز بیومتریک مراجعه خواهید کرد.",
  },
  {
    num: "4",
    meta: "Step 4 · Month 4 and Beyond",
    metaFa: "۰۴ — از ماه چهارم به بعد",
    title: "UK Landing & Checkpoint Monitoring",
    titleFa: "ورود به بریتانیا و آغاز فعالیت",
    desc: "Arrive in the UK, collect your Biometric Residence Permit (BRP), register with Companies House as a director, and launch operations. Attend mandatory progress meetings with your Endorsing Body at Month 12 and Month 24.",
    descFa: "پس از ورود، مراحل اقامت و راه‌اندازی کسب‌وکار انجام می‌شود و فعالیت شرکت آغاز خواهد شد. همچنین در ماه‌های ۱۲ و ۲۴، جلسات ارزیابی پیشرفت با Endorsing Body انجام می‌شود.",
  },
];

export default function ProcessSteps() {
  const { t } = useLang();
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-20 bg-[#F7F6F9]" id="process">
      <Row>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <Reveal variant="left" delay={0} className="md:sticky md:top-24">
            <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] mb-5">
              {t("Operational Roadmap", "مسیر اجرایی دریافت ویزا")}
            </h2>
            <blockquote className="text-[18px] italic font-medium leading-[1.5] py-5 pl-6 mb-4"
              style={{ borderLeft: "3px solid #8F27FF" }}>
              &ldquo;{t("Nexa organizes the multi-layered UK application life-cycle into a clear, linear timeline.", "نکسا کل مسیر چندمرحله‌ای دریافت ویزای بریتانیا را به یک برنامه روشن و منظم تبدیل می‌کند.")}&rdquo;
            </blockquote>
            <p className="text-[14.5px] text-[#929292] leading-[1.7]">
              {t("From your first endorsement pitch to landing in the UK and launching operations, the full process takes approximately 3 months when properly prepared. The Home Office decision takes just 3 weeks once biometrics are submitted.", "از آماده‌سازی پرونده برای دریافت Endorsement تا ورود به بریتانیا و آغاز فعالیت کسب‌وکار، این فرآیند در صورت آماده بودن مدارک حدود ۳ ماه زمان می‌برد. پس از ثبت بیومتریک، تصمیم Home Office معمولاً در حدود ۳ هفته صادر می‌شود.")}
            </p>
          </Reveal>

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
