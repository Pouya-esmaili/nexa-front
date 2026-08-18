"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/LazyReveal";
import { useLang } from "@/components/global/LanguageProvider";

const steps = [
  {
    num: "1",
    meta: "Step 1 · Weeks 1–3",
    metaFa: "۰۱ | هفته‌های ۱ تا ۳",
    title: "Asset Selection & Legal Structure Setup",
    titleFa: "انتخاب دارایی و آماده‌سازی ساختار حقوقی",
    desc: "Select your investment tier (€250K, €400K, or €800K). Issue a remote Power of Attorney via your local Greek Consulate or apostilled notary. Nexa secures your Greek Tax Number (AFM) and opens your local bank account remotely.",
    descFa: "انتخاب مسیر سرمایه‌گذاری موردنظر (€250,000، €400,000 یا €800,000)، تنظیم وکالت‌نامه رسمی از طریق کنسولگری یونان یا دفتر اسناد رسمی، دریافت AFM و افتتاح حساب بانکی یونانی.",
  },
  {
    num: "2",
    meta: "Step 2 · Weeks 4–8",
    metaFa: "۰۲ | هفته‌های ۴ تا ۸",
    title: "Legal Due Diligence & Property Purchase",
    titleFa: "بررسی حقوقی و خرید ملک",
    desc: "Nexa's real estate attorneys audit the property registry — guaranteeing clean title ownership, freedom from mortgages, and total building permit compliance. Execute the final digital purchase contract and wire the full investment capital.",
    descFa: "وکلای ملکی NEXA سوابق ثبتی ملک، مالکیت، بدهی‌ها، رهن و انطباق مجوزهای ساختمانی را بررسی می‌کنند. پس از تأیید، قرارداد نهایی تنظیم و کل مبلغ سرمایه‌گذاری منتقل می‌شود.",
  },
  {
    num: "3",
    meta: "Step 3 · Weeks 9–12",
    metaFa: "۰۳ | هفته‌های ۹ تا ۱۲",
    title: "Deed Registration & Residency Filing",
    titleFa: "ثبت سند و ارسال درخواست اقامت",
    desc: "Notary submits the executed deed to the Land Registry. Nexa compiles apostilled civil documents (birth/marriage certificates, background checks, health insurance) and files the application digitally with the Ministry of Migration.",
    descFa: "پس از ثبت رسمی سند در اداره ثبت املاک، نکسا مدارک موردنیاز شامل اسناد هویتی، گواهی تولد و ازدواج، گواهی عدم سوءپیشینه و بیمه درمانی را آماده کرده و درخواست اقامت را به وزارت مهاجرت ارائه می‌دهد.",
  },
  {
    num: "4",
    meta: "Step 4 · Months 4–6",
    metaFa: "۰۴ | ماه‌های ۴ تا ۶",
    title: "Biometric Collection & Card Issuance",
    titleFa: "انگشت‌نگاری و صدور کارت اقامت",
    desc: "Ministry issues a temporary receipt certificate (Blue Paper) granting 12 months of legal entry to Greece. Schedule a single biometric appointment in Greece. Physical permanent residence cards issued within 30 to 60 days post-biometrics.",
    descFa: "پس از ثبت درخواست، گواهی موقت اقامت صادر می‌شود. متقاضی برای انجام انگشت‌نگاری به یونان مراجعه می‌کند و کارت اقامت دائم معمولاً پس از تکمیل این مرحله صادر می‌شود.",
  },
];

export default function Process() {
  const { t } = useLang();
  return (
    <section className="py-20 md:py-24 bg-[#F7F6F9]">
      <Row>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-[70px] items-start">

          {/* Left — sticky lead */}
          <div className="md:sticky md:top-[100px]">
            <Reveal variant="up">
              <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1] mb-5">
                {t("Investment & Application Timeline", "مراحل سرمایه‌گذاری و دریافت اقامت")}
              </h2>
            </Reveal>
            <Reveal variant="up" delay={120}>
              <blockquote className="text-[18px] italic font-medium leading-[1.5] text-black py-5 pl-6 mb-4"
                style={{ borderLeft: "3px solid #8F27FF" }}>
                &ldquo;{t("Nexa coordinates your investment life cycle into a linear engineering workflow — data validation occurs well before capital deployment.", "نکسا کل مسیر سرمایه‌گذاری تا دریافت اقامت را به یک فرآیند منظم و مرحله‌به‌مرحله تبدیل می‌کند تا بررسی‌های حقوقی و مالی پیش از انتقال سرمایه انجام شود.")}&rdquo;
              </blockquote>
            </Reveal>
            <Reveal variant="up" delay={240}>
              <p className="text-[14.5px] text-[#929292] leading-[1.7]">
                {t("From remote Power of Attorney to physical residence card collection, the full process takes approximately 4 to 6 months. Nexa manages the entire pipeline — property diligence, AFM registration, deed execution, and Ministry filing.", "از تنظیم وکالت‌نامه از راه دور تا دریافت کارت اقامت، این فرآیند در حالت معمول حدود ۴ تا ۶ ماه زمان می‌برد. نکسا کل مسیر، از بررسی ملک و دریافت AFM تا انتقال سند و ثبت درخواست اقامت را مدیریت می‌کند.")}
              </p>
            </Reveal>
          </div>

          {/* Right — steps */}
          <Reveal variant="up" delay={80}>
            <div className="relative pl-[52px]">
              {/* Vertical line */}
              <div className="absolute top-[22px] bottom-[22px] left-[20px] w-[2px] rounded-[2px]"
                style={{ background: "linear-gradient(180deg, #8F27FF 0%, rgba(143,39,255,0.15) 100%)" }} />

              {steps.map((s, i) => (
                <div key={s.num} className={`relative group ${i < steps.length - 1 ? "pb-8" : ""}`}>
                  {/* Circle number */}
                  <div className="absolute -left-[52px] top-0 w-[42px] h-[42px] rounded-full flex items-center justify-center text-[13px] font-bold text-[#8F27FF] bg-white transition-all duration-300 group-hover:bg-[#8F27FF] group-hover:text-white"
                    style={{
                      border: "2px solid #8F27FF",
                      boxShadow: "0 0 0 5px #FAF6FF, 0 4px 12px rgba(143,39,255,0.12)",
                    }}>
                    {s.num}
                  </div>

                  {/* Step card */}
                  <div className="rounded-[14px] p-[18px_22px] border border-[#E2E2E2] bg-white transition-all duration-200 group-hover:translate-x-1 group-hover:border-[rgba(143,39,255,0.18)]">
                    <div className="text-[11px] font-bold text-[#8F27FF] uppercase tracking-[0.08em] mb-1.5">
                      {t(s.meta, s.metaFa)}
                    </div>
                    <h4 className="text-[16px] font-semibold text-black mb-1.5">{t(s.title, s.titleFa)}</h4>
                    <p className="text-[13.5px] text-[#929292] leading-[1.6] m-0">{t(s.desc, s.descFa)}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

        </div>
      </Row>
    </section>
  );
}
