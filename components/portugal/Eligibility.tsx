"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const requirements = [
  {
    num: "A",
    title: "Corporate Validation & Capitalization",
    titleFa: "اعتبار تجاری و پشتوانه مالی",
    desc: "You must have already incorporated a Portuguese business entity (Lda) or present a robust plan for imminent launch. The business must be properly capitalized relative to its sector. While there is no statutory minimum, a capital injection of €5,000–€10,000+ establishes baseline commercial viability.",
    descFa: "باید یک شرکت پرتغالی (Lda) را از قبل به ثبت رسانده باشید یا یک برنامه عملی و مستند برای راه‌اندازی قریب‌الوقوع کسب‌وکار ارائه دهید. شرکت باید متناسب با حوزه فعالیت خود از پشتوانه مالی کافی برخوردار باشد. اگرچه قانون حداقل سرمایه مشخصی تعیین نکرده است، تأمین سرمایه در حدود ۵٬۰۰۰ تا ۱۰٬۰۰۰ یورو یا بیشتر می‌تواند پشتوانه مناسبی برای نشان دادن جدیت و قابلیت تجاری پروژه باشد.",
  },
  {
    num: "B",
    title: "Local Economic Impact",
    titleFa: "تأثیرگذاری اقتصادی در پرتغال",
    desc: "The business plan must demonstrate realistic potential for local job creation, scalability, market differentiation, and clear intent to anchor operational infrastructure — leasing a local office, unit, or commercial facility.",
    descFa: "بیزنس‌پلن باید ظرفیت واقع‌بینانه کسب‌وکار برای ایجاد اشتغال، رشد و مقیاس‌پذیری، ایجاد تمایز در بازار و توسعه فعالیت در پرتغال را نشان دهد. همچنین باید مشخص باشد که کسب‌وکار قصد دارد زیرساخت عملیاتی خود را در پرتغال مستقر کند؛ برای مثال، از طریق اجاره دفتر، واحد کاری یا فضای تجاری.",
  },
  {
    num: "C",
    title: "Founder Credentials",
    titleFa: "سوابق و توانمندی‌های بنیان‌گذار",
    desc: "Immigration officials evaluate your professional profile, academic credentials, and managerial background to confirm you possess the direct technical capability and leadership experience required to steer the entity to profitability.",
    descFa: "مراجع مهاجرتی سوابق حرفه‌ای، تحصیلات و تجربه مدیریتی شما را بررسی می‌کنند تا اطمینان حاصل شود که از دانش تخصصی و توانایی مدیریتی لازم برای هدایت کسب‌وکار و رساندن آن به سودآوری برخوردار هستید.",
  },
];

const benefits: { en: string; fa: string }[] = [
  { en: "2-year initial residence card (renewable for 3 years)", fa: "دریافت کارت اقامت اولیه ۲ ساله با امکان تمدید برای ۳ سال" },
  { en: "Any commercial business model permitted", fa: "امکان راه‌اندازی و فعالیت در طیف گسترده‌ای از مدل‌های کسب‌وکار" },
  { en: "Secondary employment & freelance contracts allowed", fa: "امکان اشتغال هم‌زمان و انجام فعالیت‌های فریلنسری" },
  { en: "Full family included with immediate work rights", fa: "امکان همراهی کامل خانواده با حق کار از ابتدا" },
  { en: "Multiple co-founders under same entity permitted", fa: "امکان فعالیت چند بنیان‌گذار در قالب یک شرکت" },
  { en: "Dual citizenship fully permitted at naturalization", fa: "امکان حفظ تابعیت قبلی در کنار تابعیت پرتغال، در صورت احراز شرایط قانونی" },
];

export default function Eligibility() {
  const { t } = useLang();
  return (
    <section className="py-20 md:py-24 bg-[#F7F6F9]">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center mb-12">
            {t("Core Eligibility & Evaluation Criteria", "شرایط اصلی و معیارهای ارزیابی")}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Main */}
          <Reveal variant="left">
            <div className="bg-white border border-[#E2E2E2] rounded-[20px] p-11 flex flex-col">
              <p className="text-[16px] text-[#474747] leading-[1.65] mb-8 pb-8" style={{ borderBottom: "1px solid #E2E2E2" }}>
                {t("Your business model must be vetted by Portuguese authorities against the lenses of", "مدل کسب‌وکار شما باید از سوی مراجع ذی‌صلاح پرتغال از نظر ارزش و کارکرد")} <strong className="text-black font-semibold">{t("economic, social, scientific, or cultural utility", "اقتصادی، اجتماعی، علمی یا فرهنگی")}</strong>{t(". The evaluation covers three pillars.", " مورد ارزیابی و تأیید قرار گیرد. این ارزیابی بر سه محور اصلی انجام می‌شود.")}
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
                  <strong className="font-semibold" style={{ color: "#78350F" }}>{t("Portuguese bank account preferred.", "داشتن حساب بانکی در پرتغال یک مزیت مهم محسوب می‌شود.")}</strong> {t("Authorities heavily favor liquid funds held inside a domestic Portuguese bank. Nexa secures your NIF and opens your Portuguese account remotely before file submission.", "مراجع مربوطه معمولاً منابع مالی نقدشونده موجود در حساب بانکی پرتغال را مطلوب‌تر ارزیابی می‌کنند. NEXA پیش از ثبت پرونده، فرآیند دریافت NIF و افتتاح حساب بانکی در پرتغال را نیز برای شما هماهنگ می‌کند.")}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Row>
    </section>
  );
}
