"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const requirements = [
  {
    num: "A",
    title: "Corporate Validation & Capitalization",
    titleFa: "اعتبارسنجی شرکتی و سرمایه‌گذاری",
    desc: "You must have already incorporated a Portuguese business entity (Lda) or present a robust plan for imminent launch. The business must be properly capitalized relative to its sector. While there is no statutory minimum, a capital injection of €5,000–€10,000+ establishes baseline commercial viability.",
    descFa: "باید قبلاً یک نهاد تجاری پرتغالی (Lda) ثبت کرده باشید یا یک طرح مستحکم برای راه‌اندازی قریب‌الوقوع ارائه دهید. کسب‌وکار باید متناسب با حوزه‌ی خود به‌درستی سرمایه‌گذاری شده باشد. اگرچه حداقل قانونی وجود ندارد، تزریق سرمایه‌ای معادل ۵٬۰۰۰ تا ۱۰٬۰۰۰ یورو به بالا، امکان‌پذیری تجاری پایه را ایجاد می‌کند.",
  },
  {
    num: "B",
    title: "Local Economic Impact",
    titleFa: "تأثیر اقتصادی محلی",
    desc: "The business plan must demonstrate realistic potential for local job creation, scalability, market differentiation, and clear intent to anchor operational infrastructure — leasing a local office, unit, or commercial facility.",
    descFa: "طرح کسب‌وکار باید پتانسیل واقع‌بینانه برای ایجاد اشتغال محلی، مقیاس‌پذیری، تمایز در بازار و قصد روشن برای تثبیت زیرساخت عملیاتی — اجاره‌ی دفتر، واحد یا تأسیسات تجاری محلی — را نشان دهد.",
  },
  {
    num: "C",
    title: "Founder Credentials",
    titleFa: "صلاحیت‌های بنیان‌گذار",
    desc: "Immigration officials evaluate your professional profile, academic credentials, and managerial background to confirm you possess the direct technical capability and leadership experience required to steer the entity to profitability.",
    descFa: "مقامات مهاجرتی پروفایل حرفه‌ای، مدارک تحصیلی و پیشینه‌ی مدیریتی شما را ارزیابی می‌کنند تا تأیید کنند که قابلیت فنی مستقیم و تجربه‌ی رهبری لازم برای هدایت نهاد به سوی سودآوری را دارید.",
  },
];

const benefits: { en: string; fa: string }[] = [
  { en: "2-year initial residence card (renewable for 3 years)", fa: "کارت اقامت اولیه‌ی ۲ ساله (قابل‌تمدید برای ۳ سال)" },
  { en: "Any commercial business model permitted", fa: "هر مدل کسب‌وکار تجاری مجاز است" },
  { en: "Secondary employment & freelance contracts allowed", fa: "اشتغال ثانویه و قراردادهای آزاد مجاز است" },
  { en: "Full family included with immediate work rights", fa: "کل خانواده با حقوق کار فوری گنجانده می‌شوند" },
  { en: "Multiple co-founders under same entity permitted", fa: "چند هم‌بنیان‌گذار تحت یک نهاد مجاز است" },
  { en: "Dual citizenship fully permitted at naturalization", fa: "تابعیت دوگانه هنگام تابعیت‌پذیری کاملاً مجاز است" },
];

export default function Eligibility() {
  const { t } = useLang();
  return (
    <section className="py-20 md:py-24 bg-[#F7F6F9]">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center mb-12">
            {t("Core Eligibility & Evaluation Criteria", "شرایط اصلی واجد بودن و معیارهای ارزیابی")}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Main */}
          <Reveal variant="left">
            <div className="bg-white border border-[#E2E2E2] rounded-[20px] p-11 flex flex-col">
              <p className="text-[16px] text-[#474747] leading-[1.65] mb-8 pb-8" style={{ borderBottom: "1px solid #E2E2E2" }}>
                {t("Your business model must be vetted by Portuguese authorities against the lenses of", "مدل کسب‌وکار شما باید توسط مقامات پرتغالی از منظر")} <strong className="text-black font-semibold">{t("economic, social, scientific, or cultural utility", "فایده‌ی اقتصادی، اجتماعی، علمی یا فرهنگی")}</strong>{t(". The evaluation covers three pillars.", " بررسی شود. ارزیابی سه ستون را پوشش می‌دهد.")}
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
                <h3 className="text-[17px] font-semibold mb-4">{t("What the permit grants you", "این مجوز چه چیزی به شما می‌دهد")}</h3>
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
                  <strong className="font-semibold" style={{ color: "#78350F" }}>{t("Portuguese bank account preferred.", "حساب بانکی پرتغالی ترجیح داده می‌شود.")}</strong> {t("Authorities heavily favor liquid funds held inside a domestic Portuguese bank. Nexa secures your NIF and opens your Portuguese account remotely before file submission.", "مقامات به‌شدت دارایی‌های نقدی نگهداری‌شده در یک بانک داخلی پرتغالی را ترجیح می‌دهند. نکسا شماره‌ی NIF شما را تأمین می‌کند و حساب پرتغالی شما را پیش از ارسال پرونده از راه دور باز می‌کند.")}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Row>
    </section>
  );
}
