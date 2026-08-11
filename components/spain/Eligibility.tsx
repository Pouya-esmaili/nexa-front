"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const requirements = [
  {
    num: "01",
    title: "Innovation & Scalability",
    titleFa: "نوآوری و قابلیت توسعه",
    desc: "The project must possess a unique value proposition, specialized technology, or an original organizational method — with a clear trajectory for generating corporate volume, scalable profits, and local market expansion.",
    descFa: "پروژه باید دارای ارزش پیشنهادی متمایز، فناوری تخصصی یا یک روش سازمانی نوآورانه باشد و مسیر روشنی برای رشد کسب‌وکار، افزایش سودآوری و توسعه در بازار اسپانیا ارائه دهد.",
  },
  {
    num: "02",
    title: "Job Creation Metrics",
    titleFa: "ظرفیت ایجاد اشتغال",
    desc: "Your business plan must illustrate a realistic capacity to hire local employees, contract regional suppliers, and actively contribute to the employment landscape of Spain over a 3-year horizon.",
    descFa: "بیزنس‌پلن باید نشان دهد که کسب‌وکار شما ظرفیت واقع‌بینانه‌ای برای استخدام نیروی کار محلی، همکاری با تأمین‌کنندگان منطقه‌ای و ایجاد ارزش در بازار اشتغال اسپانیا طی یک دوره سه‌ساله دارد.",
  },
  {
    num: "03",
    title: "Founder Professional Profile",
    titleFa: "سوابق و توانمندی‌های بنیان‌گذار",
    desc: "ENISA analyzes your professional CV, academic credentials, and entrepreneurship history to verify that you possess the technical capabilities and leadership experience required to execute the business plan.",
    descFa: "ENISA سوابق حرفه‌ای، مدارک تحصیلی و تجربه کارآفرینی شما را بررسی می‌کند تا اطمینان حاصل شود که از دانش تخصصی، توان اجرایی و تجربه مدیریتی لازم برای عملیاتی کردن طرح کسب‌وکار برخوردار هستید.",
  },
];

const benefits: { en: string; fa: string }[] = [
  { en: "3-year TIE residence card (applied from Spain)", fa: "دریافت کارت اقامت TIE سه‌ساله در صورت درخواست از داخل اسپانیا" },
  { en: "Apply from inside Spain on tourist entry", fa: "امکان درخواست از داخل اسپانیا با ورود به‌عنوان توریست" },
  { en: "Secondary employment & consulting permitted", fa: "امکان اشتغال و ارائه خدمات مشاوره‌ای در کنار فعالیت اصلی" },
  { en: "Full family included with unrestricted work rights", fa: "امکان همراهی کامل خانواده با حق کار بدون محدودیت" },
  { en: "29-country Schengen travel freedom", fa: "امکان سفر در سراسر ۲۹ کشور حوزه شنگن" },
  { en: "2-year fast-track citizenship for Ibero-Americans", fa: "مسیر سریع‌تر اخذ تابعیت برای شهروندان کشورهای ایبروآمریکایی، با امکان درخواست پس از ۲ سال در صورت احراز شرایط قانونی" },
];

export default function Eligibility() {
  const { t } = useLang();
  return (
    <section className="py-20 md:py-24 bg-[#F7F6F9]">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center mb-12">
            {t("Core Eligibility & Business Evaluation", "شرایط اصلی و ارزیابی کسب‌وکار")}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Main */}
          <Reveal variant="left">
            <div className="bg-white border border-[#E2E2E2] rounded-[20px] p-11 flex flex-col">
              <p className="text-[16px] text-[#474747] leading-[1.65] mb-8 pb-8" style={{ borderBottom: "1px solid #E2E2E2" }}>
                {t("Your project must be vetted as", "پروژه شما باید از نظر نوآورانه بودن و برخورداری از")} <strong className="text-black font-semibold">{t("innovative and of special economic interest to Spain", "اهمیت اقتصادی ویژه برای اسپانیا")}</strong>{t(". The official evaluation is conducted by", " مورد تأیید قرار گیرد. این ارزیابی رسمی توسط")} <strong className="text-black font-semibold">ENISA</strong> {t("(Empresa Nacional de Innovación S.A.) against three strict parameters.", "(Empresa Nacional de Innovación S.A.) و بر اساس سه معیار اصلی انجام می‌شود.")}
              </p>

              {requirements.map((r, i) => (
                <div key={r.num} className="grid grid-cols-[48px_1fr] gap-5 items-start py-5 transition-all duration-200 hover:pl-1.5"
                  style={{ borderBottom: i < requirements.length - 1 ? "1px solid #E2E2E2" : undefined }}>
                  <div className="w-[48px] h-[32px] bg-[#FAF6FF] rounded-[8px] flex items-center justify-center text-[13px] font-bold text-[#8F27FF] flex-shrink-0">
                    {r.num}
                  </div>
                  <div>
                    <h4 className="text-[16px] font-semibold tracking-[-0.015em] mb-1.5">{t(r.title, r.titleFa)}</h4>
                    <p className="text-[13.5px] text-[#929292] leading-[1.6] m-0">{t(r.desc, r.descFa)}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Aside */}
          <div className="flex flex-col gap-4 md:sticky md:top-24">
            <Reveal variant="right" delay={150}>
              {/* Benefits note */}
              <div className="rounded-[20px] p-8" style={{ background: "#FAF6FF", border: "1px solid rgba(143,39,255,0.18)" }}>
                <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#8F27FF] uppercase tracking-[0.1em] px-3 py-1.5 bg-white rounded-full mb-5"
                  style={{ border: "1px solid rgba(143,39,255,0.18)" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="w-3 h-3">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                  {t("Key Benefits", "مزایای کلیدی")}
                </div>
                <h3 className="text-[17px] font-semibold mb-4">{t("What the permit grants you", "این مجوز چه امکاناتی در اختیار شما قرار می‌دهد")}</h3>
                <ul className="flex flex-col gap-3">
                  {benefits.map((b) => (
                    <li key={b.en} className="flex items-center gap-3 text-[14px] font-medium leading-[1.45]">
                      <span className="w-[22px] h-[22px] rounded-full bg-[#8F27FF] text-white flex items-center justify-center flex-shrink-0">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" className="w-3 h-3">
                          <path d="M5 12l4 4 10-10" />
                        </svg>
                      </span>
                      {t(b.en, b.fa)}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal variant="up" delay={250}>
              {/* Warning */}
              <div className="rounded-[14px] p-5 flex gap-3.5 items-start" style={{ background: "#FFFBEB", border: "1px solid #FDE68A" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 flex-shrink-0 mt-[1px]" style={{ color: "#D97706" }}>
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                  <line x1="12" y1="9" x2="12" y2="13"/>
                  <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
                <p className="text-[13.5px] leading-[1.55] m-0" style={{ color: "#92400E" }}>
                  <strong className="font-semibold" style={{ color: "#78350F" }}>{t("ENISA evaluation takes 30–60 days.", "ارزیابی ENISA معمولاً ۳۰ تا ۶۰ روز زمان می‌برد.")}</strong> {t("The UGE decision runs 20 working days, but the preliminary ENISA business review takes an average of 30 to 60 days. Nexa structures your full timeline to account for this window.", "اگرچه بررسی درخواست توسط UGE طبق قانون در بازه ۲۰ روز کاری انجام می‌شود، ارزیابی اولیه طرح کسب‌وکار توسط ENISA به‌طور میانگین ۳۰ تا ۶۰ روز زمان می‌برد. NEXA کل مسیر را با در نظر گرفتن این بازه زمانی برنامه‌ریزی و ساختاربندی می‌کند.")}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Row>
    </section>
  );
}
