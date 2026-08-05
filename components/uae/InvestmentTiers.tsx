"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const subChannels = [
  {
    tag: "Sub-Channel A",
    tagFa: "زیرمسیر A",
    amount: "AED 2M",
    amountFa: "۲ میلیون درهم",
    label: "Investment Fund Channel",
    labelFa: "مسیر صندوق سرمایه‌گذاری",
    desc: "Official, unconditioned letter from a UAE-accredited investment fund confirming a capital deposit of no less than AED 2,000,000.",
    descFa: "نامه‌ی رسمی و بدون قید از یک صندوق سرمایه‌گذاری مورد تأیید امارات که سپرده‌ی سرمایه‌ای کمتر از ۲٬۰۰۰٬۰۰۰ درهم نباشد را تأیید می‌کند.",
  },
  {
    tag: "Sub-Channel B",
    tagFa: "زیرمسیر B",
    amount: "AED 2M",
    amountFa: "۲ میلیون درهم",
    label: "Corporate Capital Channel",
    labelFa: "مسیر سرمایه‌ی شرکتی",
    desc: "Establishment or equity acquisition within a domestic corporate entity demonstrating individual paid-up share capital of at least AED 2,000,000.",
    descFa: "تأسیس یا تملک سهام در یک نهاد شرکتی داخلی که سرمایه‌ی سهام پرداخت‌شده‌ی فردی حداقل ۲٬۰۰۰٬۰۰۰ درهم را نشان دهد.",
  },
  {
    tag: "Sub-Channel C",
    tagFa: "زیرمسیر C",
    amount: "AED 250K",
    amountFa: "۲۵۰ هزار درهم",
    label: "Fiscal Contribution Channel",
    labelFa: "مسیر مشارکت مالیاتی",
    desc: "FTA certification confirming the investor's corporate entity contributes a minimum of AED 250,000 annually in federal taxes — the lowest capital entry point in the program.",
    descFa: "گواهی FTA که تأیید می‌کند نهاد شرکتی سرمایه‌گذار سالانه حداقل ۲۵۰٬۰۰۰ درهم مالیات فدرال می‌پردازد — کم‌ترین نقطه‌ی ورود سرمایه در برنامه.",
  },
];

export default function InvestmentTiers() {
  const { t } = useLang();
  return (
    <section className="py-20 md:py-24" style={{ background: "#F7F6F9" }}>
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1] text-center mb-6">
            {t("Investment Architecture & Entry Vectors", "معماری سرمایه‌گذاری و مسیرهای ورود")}
          </h2>
        </Reveal>

        <Reveal variant="up" delay={60}>
          <p className="text-[16px] text-[#474747] leading-[1.65] max-w-[72ch] mx-auto text-center mb-12">
            {t("The regulatory framework establishes", "چارچوب مقرراتی")}{" "}
            <strong className="text-black font-semibold">{t("two primary entry vectors", "دو مسیر ورود اصلی")}</strong> {t("for the 10-year Golden Residency — real estate capital deployment and public market instruments — with strict asset classification rules governing each.", "برای اقامت طلایی ۱۰ ساله تعیین می‌کند — به‌کارگیری سرمایه در املاک و ابزارهای بازار عمومی — با قوانین سختگیرانه‌ی طبقه‌بندی دارایی که بر هر کدام حاکم است.")}
          </p>
        </Reveal>

        {/* Main tier cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Featured — Real Estate */}
          <Reveal variant="left" delay={80}>
            <div
              className="rounded-[20px] p-8 sm:p-9 flex flex-col gap-5 h-full border transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "#FAF6FF",
                border: "1.5px solid #8F27FF",
                boxShadow: "0 0 0 0 rgba(143,39,255,0)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 20px 48px rgba(143,39,255,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 0 0 0 rgba(143,39,255,0)";
              }}
            >
              <span
                className="self-start text-[11px] font-bold uppercase tracking-[0.1em] px-3 py-1.5 rounded-full"
                style={{ background: "#FAF6FF", color: "#8F27FF", border: "1px solid rgba(143,39,255,0.18)" }}
              >
                {t("Real Estate Vector", "مسیر املاک")}
              </span>
              <div>
                <div className="text-[56px] font-extrabold tracking-[-0.05em] leading-[0.9] tabular-nums text-[#8F27FF]">
                  {t("AED 2M", "۲ میلیون درهم")}
                </div>
                <div className="text-[13px] font-semibold text-[#929292] uppercase tracking-[0.06em] mt-1">
                  {t("Total Property Asset Valuation", "ارزش‌گذاری کل دارایی ملکی")}
                </div>
              </div>
              <div className="h-px" style={{ background: "rgba(143,39,255,0.18)" }} />
              <div>
                <div className="text-[15px] font-semibold text-black mb-3">
                  {t("Property Investor Visa UAE — 10-Year Renewable", "ویزای سرمایه‌گذار ملکی امارات — ۱۰ ساله‌ی قابل‌تمدید")}
                </div>
                <ul className="flex flex-col gap-2.5">
                  {[
                    { strong: "Portfolio Aggregation:", strongFa: "تجمیع پرتفوی:", text: "Combine multiple freehold properties registered under the DLD to meet the AED 2M threshold.", textFa: "چند ملک مالکیت کامل ثبت‌شده در DLD را برای رسیدن به آستانه‌ی ۲ میلیون درهم ترکیب کنید." },
                    { strong: "Mortgaged Properties Eligible:", strongFa: "املاک رهنی واجد شرایط‌اند:", text: "Eligibility based on official DLD valuation — not purchase price. Bank NOC required.", textFa: "واجد شرایط بودن بر اساس ارزش‌گذاری رسمی DLD — نه قیمت خرید. نامه‌ی عدم‌اعتراض بانک لازم است." },
                    { strong: "2-Year Holding Lock-in", strongFa: "قفل نگهداری ۲ ساله", text: "post visa issuance.", textFa: "پس از صدور ویزا." },
                  ].map((r, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[13px] text-[#929292] leading-[1.55]">
                      <span className="text-[#8F27FF] font-bold flex-shrink-0 text-[12px] mt-0.5">→</span>
                      <span><strong className="text-black font-semibold">{t(r.strong, r.strongFa)}</strong> {t(r.text, r.textFa)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Public Investments */}
          <Reveal variant="right" delay={80}>
            <div
              className="rounded-[20px] p-8 sm:p-9 flex flex-col gap-5 h-full bg-white transition-all duration-300 hover:-translate-y-1"
              style={{ border: "1.5px solid #E2E2E2" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "#8F27FF";
                el.style.boxShadow = "0 20px 48px rgba(143,39,255,0.1)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "#E2E2E2";
                el.style.boxShadow = "none";
              }}
            >
              <span
                className="self-start text-[11px] font-bold uppercase tracking-[0.1em] px-3 py-1.5 rounded-full"
                style={{ background: "#FFFBE6", color: "#7A6800", border: "1px solid #F0D800" }}
              >
                {t("Public Investments Vector", "مسیر سرمایه‌گذاری‌های عمومی")}
              </span>
              <div>
                <div className="text-[56px] font-extrabold tracking-[-0.05em] leading-[0.9] tabular-nums text-black">
                  {t("AED 2M", "۲ میلیون درهم")}
                </div>
                <div className="text-[13px] font-semibold text-[#929292] uppercase tracking-[0.06em] mt-1">
                  {t("Capital Deposit or Paid-up Share Capital", "سپرده‌ی سرمایه یا سرمایه‌ی سهام پرداخت‌شده")}
                </div>
              </div>
              <div className="h-px bg-[#E2E2E2]" />
              <div>
                <div className="text-[15px] font-semibold text-black mb-3">
                  {t("Three Distinct Sub-Channels — 10-Year Renewable", "سه زیرمسیر مجزا — ۱۰ ساله‌ی قابل‌تمدید")}
                </div>
                <ul className="flex flex-col gap-2.5">
                  {[
                    { en: "For investors seeking deployment outside physical property portfolios.", fa: "برای سرمایه‌گذارانی که به دنبال به‌کارگیری سرمایه خارج از پرتفوی املاک فیزیکی هستند." },
                    { en: "Capital must be wholly owned — not structured via secondary debt or unapproved loans.", fa: "سرمایه باید کاملاً تحت مالکیت باشد — نه از طریق بدهی ثانویه یا وام‌های تأییدنشده ساختاربندی شده باشد." },
                  ].map((r, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[13px] text-[#929292] leading-[1.55]">
                      <span className="text-[#8F27FF] font-bold flex-shrink-0 text-[12px] mt-0.5">→</span>
                      {t(r.en, r.fa)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Sub-channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {subChannels.map((sc, i) => (
            <Reveal key={i} variant="up" delay={i * 70}>
              <div
                className="bg-white rounded-[14px] p-6 flex flex-col gap-2.5 transition-all duration-200 hover:border-[rgba(143,39,255,0.18)] hover:bg-[#FAF6FF]"
                style={{ border: "1px solid #E2E2E2" }}
              >
                <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#929292]">
                  {t(sc.tag, sc.tagFa)}
                </span>
                <div className="text-[28px] font-extrabold text-black tracking-[-0.03em] tabular-nums leading-none">
                  {t(sc.amount, sc.amountFa)}
                </div>
                <div className="text-[13px] font-semibold text-black">{t(sc.label, sc.labelFa)}</div>
                <p className="text-[12.5px] text-[#929292] leading-[1.55] m-0">{t(sc.desc, sc.descFa)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Row>
    </section>
  );
}
