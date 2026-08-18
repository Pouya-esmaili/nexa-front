"use client";
import { useState } from "react";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const steps = [
  {
    num: "1",
    meta: "Stage 1 · Weeks 1–6",
    metaFa: "۰۱ — هفته‌های ۱ تا ۶",
    title: "Ecosystem Vetting & Incubation Selection",
    titleFa: "ارزیابی اکوسیستم و پذیرش در انکوباتور",
    desc: "Submit your business model, market research, and technology roadmap to a recognized French Tech incubator or ecosystem stakeholder. Secure their official endorsement letter.",
    descFa: "مدل کسب‌وکار، تحقیقات بازار و نقشه توسعه فناوری برای یک انکوباتور یا نهاد معتبر فرانسوی ارائه می‌شود و تأییدیه رسمی اکوسیستم دریافت می‌گردد.",
  },
  {
    num: "2",
    meta: "Stage 2 · Weeks 7–10",
    metaFa: "۰۲ — هفته‌های ۷ تا ۱۰",
    title: "DRIEETS Innovation Review",
    titleFa: "ارزیابی نوآوری توسط DRIEETS",
    desc: "Upload your business framework, financials, and endorsement letters to the Ministry of Economy platform. DRIEETS issues your 12-month Innovation Certificate upon approval.",
    descFa: "ساختار کسب‌وکار، مدارک مالی و نامه‌های حمایتی در پلتفرم وزارت اقتصاد بارگذاری می‌شود. در صورت تأیید، DRIEETS گواهی نوآوری ۱۲ماهه صادر می‌کند.",
  },
  {
    num: "3",
    meta: "Stage 3 · Weeks 11–14",
    metaFa: "۰۳ — هفته‌های ۱۱ تا ۱۴",
    title: "Consular Visa Application (VLS-TS)",
    titleFa: "درخواست ویزای بلندمدت VLS-TS",
    desc: "File via the France-Visas portal. Attend your biometric appointment at the French Consulate with your Innovation Certificate, proof of accommodation, passport, and bank statements.",
    descFa: "درخواست از طریق پورتال France-Visas ثبت می‌شود. سپس در کنسولگری فرانسه، مدارکی از جمله گواهی نوآوری، مدرک محل اقامت، پاسپورت و مدارک مالی ارائه و مراحل بیومتریک انجام می‌شود.",
  },
  {
    num: "4",
    meta: "Stage 4 · Within 3 Months of Entry",
    metaFa: "۰۴ — حداکثر ۳ ماه پس از ورود",
    title: "Arrival, Company Registration & ANEF Filing",
    titleFa: "ورود به فرانسه، ثبت شرکت و درخواست کارت اقامت",
    desc: 'Land in France. Validate VLS-TS and incorporate your business (K-bis). Submit your "Talent" residence card via the ANEF digital portal to receive your electronic protection certificate.',
    descFa: 'پس از ورود، VLS-TS اعتبارسنجی شده و شرکت در فرانسه ثبت می‌شود. سپس درخواست کارت اقامت Talent از طریق پورتال دیجیتال ANEF ثبت خواهد شد.',
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
              {t("The 4-Stage Application Roadmap", "مسیر چهارمرحله‌ای دریافت اقامت")}
            </h2>
            <blockquote className="text-[18px] italic font-medium leading-[1.5] py-5 pl-6 mb-4"
              style={{ borderLeft: "3px solid #8F27FF" }}>
              &ldquo;{t("Missing a step or mixing up the order can lead to long delays or immediate refusal.", "در این مسیر، ترتیب مراحل اهمیت زیادی دارد؛ یک مرحله ناقص یا جابه‌جایی در فرآیند می‌تواند باعث تأخیر طولانی یا حتی رد پرونده شود.")}&rdquo;
            </blockquote>
            <p className="text-[14.5px] text-[#929292] leading-[1.7]">
              {t("Nexa structures this process into a clear, four-stage lifecycle. From your first ecosystem submission to landing in France and registering your company, the full journey takes approximately 3–4 months when properly prepared.", "نکسا کل فرآیند را در قالب یک مسیر چهارمرحله‌ای و منظم مدیریت می‌کند. در صورت آماده بودن مدارک، از دریافت تأییدیه اکوسیستم تا ورود به فرانسه و ثبت شرکت، این فرآیند حدود ۳ تا ۴ ماه زمان می‌برد.")}
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
