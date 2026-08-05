"use client";

import { useState } from "react";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/LazyReveal";
import { useLang } from "@/components/global/LanguageProvider";

const steps = [
  {
    num: "01",
    title: "Expression of Interest",
    titleFa: "اعلام علاقه‌مندی",
    time: "Immediate · 1-4 mo draw",
    timeFa: "فوری · قرعه‌کشی ۱ تا ۴ ماهه",
    detail: {
      heading: "Expression of Interest (EOI)",
      headingFa: "اعلام علاقه‌مندی (EOI)",
      body: "Most provinces require candidates to submit an Expression of Interest. You're scored on several weighted factors before receiving an invitation.",
      bodyFa: "بیشتر استان‌ها از داوطلبان می‌خواهند یک اعلام علاقه‌مندی ثبت کنند. پیش از دریافت دعوت، بر اساس چند عامل وزن‌دار امتیازدهی می‌شوید.",
      bullets: ["Net worth & investment amount", "Business experience & language", "Proposed location (urban / regional)", "Sector & economic alignment"],
      bulletsFa: ["دارایی خالص و مبلغ سرمایه‌گذاری", "تجربه‌ی کسب‌وکار و زبان", "مکان پیشنهادی (شهری / منطقه‌ای)", "حوزه و همسویی اقتصادی"],
    },
  },
  {
    num: "02",
    title: "Invitation & Plan",
    titleFa: "دعوت و طرح",
    time: "4-8 months review",
    timeFa: "بررسی ۴ تا ۸ ماهه",
    detail: {
      heading: "Invitation & Business Plan",
      headingFa: "دعوت و طرح کسب‌وکار",
      body: "Once invited, you'll submit a detailed business plan that aligns with the province's economic development objectives and your personal background.",
      bodyFa: "پس از دعوت، یک طرح کسب‌وکار مفصل ارسال می‌کنید که با اهداف توسعه‌ی اقتصادی استان و پیشینه‌ی شخصی شما همسو باشد.",
      bullets: ["Business plan submission", "Province reviews application", "Interview or assessment", "Performance agreement negotiation"],
      bulletsFa: ["ارسال طرح کسب‌وکار", "بررسی درخواست توسط استان", "مصاحبه یا ارزیابی", "مذاکره‌ی توافق‌نامه‌ی عملکرد"],
    },
  },
  {
    num: "03",
    title: "Work Permit",
    titleFa: "مجوز کار",
    time: "2-5 months IRCC",
    timeFa: "۲ تا ۵ ماه IRCC",
    detail: {
      heading: "Work Permit Issuance",
      headingFa: "صدور مجوز کار",
      body: "After the province signs the performance agreement, IRCC issues a temporary work permit enabling you to legally establish and operate the business.",
      bodyFa: "پس از امضای توافق‌نامه‌ی عملکرد توسط استان، IRCC یک مجوز کار موقت صادر می‌کند که به شما امکان می‌دهد کسب‌وکار را به‌طور قانونی تأسیس و اداره کنید.",
      bullets: ["Province-backed support letter", "IRCC processing (2-5 months)", "Entry and business establishment", "Compliance period begins"],
      bulletsFa: ["نامه‌ی پشتیبانی مورد حمایت استان", "پردازش IRCC (۲ تا ۵ ماه)", "ورود و تأسیس کسب‌وکار", "آغاز دوره‌ی رعایت الزامات"],
    },
  },
  {
    num: "04",
    title: "Operate & Nominate",
    titleFa: "بهره‌برداری و نامزدی",
    time: "12-20 months",
    timeFa: "۱۲ تا ۲۰ ماه",
    detail: {
      heading: "Operate & Achieve Milestones",
      headingFa: "بهره‌برداری و تحقق نقاط عطف",
      body: "You must actively manage the business and demonstrate progress against all investment, hiring, and operational commitments within the performance agreement.",
      bodyFa: "شما باید کسب‌وکار را به‌طور فعال مدیریت کنید و پیشرفت در برابر همه‌ی تعهدات سرمایه‌گذاری، استخدام و عملیاتی مندرج در توافق‌نامه‌ی عملکرد را نشان دهید.",
      bullets: ["Capital deployment verified", "Job creation requirements", "Revenue or operations milestones", "Province submits nomination"],
      bulletsFa: ["راستی‌آزمایی به‌کارگیری سرمایه", "الزامات ایجاد اشتغال", "نقاط عطف درآمد یا عملیات", "ثبت نامزدی توسط استان"],
    },
  },
  {
    num: "05",
    title: "Permanent Residence",
    titleFa: "اقامت دائم",
    time: "16-18+ months",
    timeFa: "بیش از ۱۶ تا ۱۸ ماه",
    detail: {
      heading: "Permanent Residence Application",
      headingFa: "درخواست اقامت دائم",
      body: "Upon provincial nomination, you apply to IRCC for permanent residence through the federal Express Entry or provincial paper-based stream.",
      bodyFa: "پس از نامزدی استانی، از طریق اکسپرس اِنتری فدرال یا جریان کاغذی استانی برای اقامت دائم به IRCC درخواست می‌دهید.",
      bullets: ["Federal PR application submitted", "IRCC processing 16-18 months", "Biometrics & medical clearance", "PR confirmation and landing"],
      bulletsFa: ["ثبت درخواست اقامت دائم فدرال", "پردازش IRCC ۱۶ تا ۱۸ ماه", "بیومتریک و تأییدیه‌ی پزشکی", "تأیید اقامت دائم و ورود"],
    },
  },
];

export default function ProcessTimeline() {
  const { t } = useLang();
  const [active, setActive] = useState(0);
  const d = steps[active].detail;

  return (
    <section className="py-20 md:py-24 bg-white">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center mb-12">
            {t("The Standard Provincial Structure", "ساختار استاندارد استانی")}
          </h2>
        </Reveal>

        <Reveal variant="up" delay={100}>
          <div className="rounded-[28px] p-8 md:p-12 border border-[#E2E2E2]" style={{ background: "#FAF6FF" }}>
            {/* Steps row */}
            <div className="relative grid grid-cols-5 gap-2 mb-9">
              {/* connector line */}
              <div className="absolute top-10 left-[8%] right-[8%] h-[2px] bg-[#8F27FF] opacity-20 rounded-full hidden md:block" />
              {steps.map((s, i) => (
                <button
                  key={s.num}
                  onClick={() => setActive(i)}
                  className="relative z-10 text-center flex flex-col items-center gap-4"
                >
                  <div
                    className="w-[80px] h-[80px] rounded-full flex items-center justify-center text-[26px] font-bold bg-white transition-all duration-300"
                    style={{
                      border: "2.5px solid #8F27FF",
                      boxShadow: active === i
                        ? "0 0 0 5px #FAF6FF, 0 8px 24px rgba(143,39,255,0.3)"
                        : "0 0 0 5px #FAF6FF, 0 4px 14px rgba(143,39,255,0.15)",
                      background: active === i ? "#8F27FF" : "white",
                      color: active === i ? "white" : "#8F27FF",
                      transform: active === i ? "scale(1.08)" : "scale(1)",
                    }}
                  >
                    {s.num}
                  </div>
                  <div>
                    <div className="text-[15px] font-semibold tracking-[-0.015em]">{t(s.title, s.titleFa)}</div>
                    <div className="text-[12px] text-[#929292] font-medium mt-1">{t(s.time, s.timeFa)}</div>
                  </div>
                </button>
              ))}
            </div>

            {/* Detail panel */}
            <div className="bg-white rounded-[14px] p-7 border border-[#E2E2E2]" style={{ borderLeft: "4px solid #8F27FF" }}>
              <h3 className="text-[22px] font-bold tracking-[-0.02em] mb-2">{t(d.heading, d.headingFa)}</h3>
              <p className="text-[15px] text-[#474747] leading-[1.65] mb-4">{t(d.body, d.bodyFa)}</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {d.bullets.map((b, bi) => (
                  <li key={b} className="pl-5 relative text-[14px] text-[#474747]">
                    <span className="absolute left-0 text-[#8F27FF] font-bold">→</span>
                    {t(b, d.bulletsFa[bi])}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Row>
    </section>
  );
}
