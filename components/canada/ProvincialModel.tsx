"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/LazyReveal";
import { useLang } from "@/components/global/LanguageProvider";

const steps = [
  {
    num: "1",
    title: "Submit Business Concept",
    titleFa: "ارائه‌ی ایده‌ی کسب‌وکار",
    desc: "Submit an Expression of Interest (EOI) to your target province. You're scored on investment capacity, experience, and sector fit.",
    descFa: "یک اعلام علاقه‌مندی (EOI) به استان هدف خود ارسال کنید. بر اساس ظرفیت سرمایه‌گذاری، تجربه و تناسب حوزه امتیازدهی می‌شوید.",
  },
  {
    num: "2",
    title: "Performance Agreement",
    titleFa: "توافق‌نامه‌ی عملکرد",
    desc: "If invited, sign a performance agreement outlining your investment, job creation, and operational commitments.",
    descFa: "در صورت دعوت، یک توافق‌نامه‌ی عملکرد امضا می‌کنید که سرمایه‌گذاری، ایجاد اشتغال و تعهدات عملیاتی شما را مشخص می‌کند.",
  },
  {
    num: "3",
    title: "Work Permit & Entry",
    titleFa: "مجوز کار و ورود",
    desc: "Enter Canada on a province-backed work permit and begin establishing your business.",
    descFa: "با یک مجوز کار مورد حمایت استان وارد کانادا شوید و تأسیس کسب‌وکار خود را آغاز کنید.",
  },
  {
    num: "4",
    title: "Operate & Deliver",
    titleFa: "بهره‌برداری و تحقق",
    desc: "Run the business actively for 12–20 months, meeting capital, hiring, and milestone requirements.",
    descFa: "کسب‌وکار را به‌طور فعال به مدت ۱۲ تا ۲۰ ماه اداره کنید و الزامات سرمایه، استخدام و نقاط عطف را برآورده سازید.",
  },
  {
    num: "5",
    title: "Provincial Nomination → PR",
    titleFa: "نامزدی استانی ← اقامت دائم",
    desc: "Upon meeting all milestones, the province nominates you. Federal PR processing follows.",
    descFa: "پس از برآورده کردن همه‌ی نقاط عطف، استان شما را نامزد می‌کند. سپس پردازش اقامت دائم فدرال انجام می‌شود.",
  },
];

export default function ProvincialModel() {
  const { t } = useLang();
  return (
    <section className="py-20 md:py-24 bg-[#F7F6F9]">
      <Row>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Lead */}
          <Reveal variant="left">
            <div className="md:sticky md:top-24">
              <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] mb-6">
                {t("The Provincial Model", "مدل استانی")}
              </h2>
              <blockquote className="text-[21px] font-medium italic leading-[1.5] tracking-[-0.015em] pl-6 mb-4"
                style={{ borderLeft: "3px solid #8F27FF" }}>
                {t('"This model rewards', "«این مدل به")} <span className="text-[#8F27FF] font-semibold">{t("execution", "اجرا")}</span> {t('— not just investment."', "پاداش می‌دهد، نه فقط به سرمایه‌گذاری.»")}
              </blockquote>
              <p className="text-[15px] text-[#929292] leading-[1.7]">
                {t("Canada's entrepreneur pathways are performance-based. Each province sets its own investment thresholds, sector priorities, and operating requirements — rewarding entrepreneurs who build real businesses, not just deploy capital.", "مسیرهای کارآفرینی کانادا عملکردمحور هستند. هر استان آستانه‌های سرمایه‌گذاری، اولویت‌های حوزه‌ای و الزامات عملیاتی خود را تعیین می‌کند — و به کارآفرینانی پاداش می‌دهد که کسب‌وکارهای واقعی می‌سازند، نه صرفاً سرمایه به‌کار می‌گیرند.")}
              </p>
            </div>
          </Reveal>

          {/* Steps */}
          <div className="relative pl-14">
            {/* Vertical line */}
            <div className="absolute top-5 bottom-5 left-5 w-[2px] rounded-full"
              style={{ background: "linear-gradient(180deg, #8F27FF 0%, rgba(143,39,255,0.15) 100%)" }} />

            {steps.map((s, i) => (
              <Reveal key={s.num} variant="up" delay={i * 100 + 100}>
                <div
                  className="relative pb-8 last:pb-0 group transition-transform duration-250 hover:translate-x-1"
                >
                  {/* Circle */}
                  <div
                    className="absolute -left-14 top-0 w-[42px] h-[42px] rounded-full flex items-center justify-center text-[14px] font-bold text-[#8F27FF] bg-white transition-all duration-300 group-hover:bg-[#8F27FF] group-hover:text-white"
                    style={{
                      border: "2px solid #8F27FF",
                      boxShadow: "0 0 0 5px #FAF6FF, 0 4px 12px rgba(143,39,255,0.12)",
                    }}
                  >
                    {s.num}
                  </div>
                  <h4 className="text-[16px] font-semibold tracking-[-0.015em] pt-2 mb-1">{t(s.title, s.titleFa)}</h4>
                  <p className="text-[14px] text-[#929292] leading-[1.6]">{t(s.desc, s.descFa)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Row>
    </section>
  );
}
