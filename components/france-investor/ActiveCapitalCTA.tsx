"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const checkItems: { en: string; fa: string }[] = [
  { en: "Commercial, industrial, artisanal, or agricultural enterprise", fa: "بنگاه تجاری، صنعتی، صنایع‌دستی یا کشاورزی" },
  { en: "Direct equity, reinvested earnings, or inter-affiliate loans", fa: "سهام مستقیم، درآمد سرمایه‌گذاری‌مجدد، یا وام‌های بین‌شرکتی" },
  { en: "Permanent job creation or preservation within 4 years", fa: "ایجاد یا حفظ اشتغال دائمی ظرف ۴ سال" },
];

const CheckIcon = () => (
  <span
    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-[1px]"
    style={{ background: "#8F27FF" }}
  >
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
      <path d="M5 12l4 4 10-10" />
    </svg>
  </span>
);

export default function ActiveCapitalCTA() {
  const { t } = useLang();
  return (
    <section className="py-[80px]" style={{ background: "#F7F6F9", borderTop: "1px solid #E2E2E2" }}>
      <Row>
        <Reveal variant="up">
          <div
            className="grid grid-cols-1 md:grid-cols-2 rounded-[24px] overflow-hidden"
            style={{ border: "1.5px solid #E2E2E2" }}
          >
            <div
              className="flex flex-col gap-5 p-[52px_48px]"
              style={{ background: "white", borderRight: "1px solid #E2E2E2" }}
            >
              <h2 className="text-[30px] font-bold tracking-[-0.03em] leading-[1.15] text-black">
                {t("Not real estate.", "نه املاک.")}<br />
                <em className="text-[#8F27FF] not-italic">{t("Active capital", "سرمایه‌ی فعال")}</em> {t("that builds France.", "که فرانسه را می‌سازد.")}
              </h2>
              <p className="text-[14px] text-[#929292] leading-[1.65] m-0">
                {t("Unlike traditional European Golden Visa programs, France does not grant residency for passive residential real estate. Your €300K must work — inside a commercial enterprise, creating real jobs.", "برخلاف برنامه‌های سنتی ویزای طلایی اروپا، فرانسه برای املاک مسکونی منفعل اقامت اعطا نمی‌کند. ۳۰۰ هزار یورو شما باید کار کند — در داخل یک بنگاه تجاری، با ایجاد مشاغل واقعی.")}
              </p>
              <ul className="flex flex-col">
                {checkItems.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[14px] font-medium text-black py-3 leading-[1.45]"
                    style={{ borderBottom: i < checkItems.length - 1 ? "1px solid #E2E2E2" : "none" }}
                  >
                    <CheckIcon />
                    {t(item.en, item.fa)}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="flex flex-col gap-5 justify-center p-[52px_48px] relative overflow-hidden"
              style={{ background: "#000000" }}
            >
              <div
                className="absolute -bottom-[60px] -right-[60px] w-[240px] h-[240px] rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(255,230,0,0.1), transparent 70%)" }}
              />
              <div className="text-[11px] font-bold uppercase tracking-[0.1em] relative z-10" style={{ color: "rgba(255,255,255,0.45)" }}>
                {t("Minimum Threshold", "حداقل آستانه")}
              </div>
              <div
                className="font-black tabular-nums leading-[0.9] relative z-10"
                style={{ fontSize: "80px", color: "#FFE600", letterSpacing: "-0.06em" }}
              >
                {t("€300K", "۳۰۰ هزار یورو")}
              </div>
              <div className="text-[15px] font-semibold text-white relative z-10">
                {t("In fixed assets — tangible or intangible", "در دارایی‌های ثابت — مشهود یا نامشهود")}
              </div>
              <p className="text-[13px] leading-[1.55] m-0 relative z-10" style={{ color: "rgba(255,255,255,0.5)" }}>
                {t("No passive stock portfolios. No residential property. Active capital deployed into France's economic fabric.", "بدون پرتفوی سهام منفعل. بدون ملک مسکونی. سرمایه‌ی فعال که در بافت اقتصادی فرانسه به‌کار گرفته می‌شود.")}
              </p>
              <a
                href="#contact"
                className="self-start inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-[14px] font-bold transition-all hover:-translate-y-0.5 relative z-10 mt-2"
                style={{
                  background: "#FFE600",
                  color: "#000000",
                  boxShadow: "0 12px 28px rgba(255,230,0,0.25)",
                }}
              >
                {t("Assess My Eligibility →", "واجد شرایط بودنم را ارزیابی کنید →")}
              </a>
            </div>
          </div>
        </Reveal>
      </Row>
    </section>
  );
}
