"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const checklist: { en: string; fa: string }[] = [
  { en: "RVO-compliant business plan with localized market data", fa: "طرح کسب‌وکار منطبق با RVO با داده‌های بومی‌شده‌ی بازار" },
  { en: "Signed LOIs and B2B contracts for financial proof", fa: "LOIها و قراردادهای B2B امضاشده برای اثبات مالی" },
  { en: "Innovation and added-value documentation for Leg 3", fa: "مستندسازی نوآوری و ارزش افزوده برای بخش ۳" },
  { en: "Full TEV pipeline management to the IND", fa: "مدیریت کامل خط لوله‌ی TEV تا IND" },
];

const breakdown = [
  { num: "100", numFa: "۱۰۰", label: "Leg 1", labelFa: "بخش ۱", min: "min 30", minFa: "حداقل ۳۰" },
  { num: "100", numFa: "۱۰۰", label: "Leg 2", labelFa: "بخش ۲", min: "min 30", minFa: "حداقل ۳۰" },
  { num: "100", numFa: "۱۰۰", label: "Leg 3", labelFa: "بخش ۳", min: "min 30", minFa: "حداقل ۳۰" },
];

export default function PointsCTA() {
  const { t } = useLang();
  return (
    <section className="py-20 bg-white" style={{ borderTop: "1px solid #E2E2E2" }}>
      <Row>
        <Reveal variant="up">
          <div
            className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] overflow-hidden rounded-[24px]"
            style={{ border: "1.5px solid #E2E2E2" }}
          >
            {/* Left */}
            <div
              className="flex flex-col gap-5 p-8 sm:p-12 md:p-[52px_48px]"
              style={{ borderRight: "1px solid #E2E2E2", borderBottom: "none" }}
            >
              <h2 className="text-[24px] sm:text-[30px] font-bold tracking-[-0.03em] leading-[1.15] text-black">
                {t("Your score determines", "امتیاز شما تعیین می‌کند")}
                <br />
                {t("your", "که شما")}{" "}
                <em className="not-italic" style={{ color: "#8F27FF" }}>
                  {t("eligibility.", "واجد شرایط هستید.")}
                </em>
              </h2>

              <p className="text-[14px] text-[#929292] leading-[1.65]">
                {t("The RVO doesn't grade on a curve. Three legs, three minimums — all must be cleared. Nexa engineers your application package to maximize points across every assessment dimension.", "RVO نمره‌دهی نسبی نمی‌کند. سه بخش، سه حداقل — همه باید برآورده شوند. نکسا بسته‌ی درخواست شما را طوری مهندسی می‌کند که امتیازها را در هر بُعد ارزیابی به حداکثر برساند.")}
              </p>

              <ul className="flex flex-col gap-0">
                {checklist.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[13.5px] sm:text-[14px] font-medium text-black py-3 leading-[1.45]"
                    style={{
                      borderBottom: i < checklist.length - 1 ? "1px solid #E2E2E2" : "none",
                    }}
                  >
                    <span
                      className="w-[22px] h-[22px] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "#8F27FF" }}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" className="w-[11px] h-[11px]">
                        <path d="M5 12l4 4 10-10" />
                      </svg>
                    </span>
                    {t(item.en, item.fa)}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right */}
            <div
              className="flex flex-col gap-5 justify-center p-8 sm:p-10 md:p-[52px_44px]"
              style={{ background: "#000000" }}
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.1em]"
                style={{ color: "rgba(255,255,255,0.45)" }}>
                {t("Passing Threshold", "آستانه‌ی قبولی")}
              </span>

              <div
                className="text-[72px] sm:text-[100px] font-black leading-[0.9] tracking-[-0.06em] tabular-nums"
                style={{ color: "#FFE600" }}
              >
                {t("90", "۹۰")}
              </div>

              <div className="text-[16px] font-semibold mt-2.5" style={{ color: "rgba(255,255,255,0.7)" }}>
                {t("out of 300 total points", "از مجموع ۳۰۰ امتیاز")}
              </div>

              <div className="grid grid-cols-3 gap-2 mt-2">
                {breakdown.map((leg) => (
                  <div
                    key={leg.label}
                    className="text-center rounded-[10px] p-3"
                    style={{ background: "rgba(255,230,0,0.08)", border: "1px solid rgba(255,230,0,0.2)" }}
                  >
                    <div className="text-[22px] font-extrabold text-white tracking-[-0.03em]">
                      {t(leg.num, leg.numFa)}
                    </div>
                    <div
                      className="text-[10px] uppercase tracking-[0.08em] mt-0.5 font-semibold"
                      style={{ color: "rgba(255,255,255,0.6)" }}
                    >
                      {t(leg.label, leg.labelFa)}
                    </div>
                    <div className="text-[10px] font-bold mt-0.5" style={{ color: "#FFE600" }}>
                      {t(leg.min, leg.minFa)}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 self-start w-full sm:w-auto justify-center px-6 py-3.5 rounded-full text-[14px] font-bold transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(255,230,0,0.3)] mt-2"
                style={{ background: "#FFE600", color: "#000000" }}
              >
                {t("Assess My Score →", "امتیاز من را ارزیابی کنید →")}
              </a>
            </div>
          </div>
        </Reveal>
      </Row>
    </section>
  );
}
