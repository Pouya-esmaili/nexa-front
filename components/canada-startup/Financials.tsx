"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const rows = [
  { label: "1 Person (Main Applicant)", labelFa: "۱ نفر — متقاضی اصلی", amount: "$15,263", amountFa: "۱۵٬۲۶۳ دلار" },
  { label: "2 People", labelFa: "۲ نفر", sub: "Applicant + Spouse", subFa: "متقاضی + همسر", amount: "$19,001", amountFa: "۱۹٬۰۰۱ دلار" },
  { label: "3 People", labelFa: "۳ نفر", amount: "$23,360", amountFa: "۲۳٬۳۶۰ دلار" },
  { label: "4 People", labelFa: "۴ نفر", amount: "$28,362", amountFa: "۲۸٬۳۶۲ دلار" },
  { label: "5 People", labelFa: "۵ نفر", amount: "$32,168", amountFa: "۳۲٬۱۶۸ دلار" },
  { label: "6 People", labelFa: "۶ نفر", amount: "$36,280", amountFa: "۳۶٬۲۸۰ دلار" },
  { label: "Each Additional Member", labelFa: "هر عضو اضافه", sub: "Dynamic scaling rule", subFa: "قاعده‌ی مقیاس‌بندی پویا", amount: "+$4,112", amountFa: "+۴٬۱۱۲ دلار" },
];

export default function Financials() {
  const { t } = useLang();
  return (
    <section className="py-20 md:py-24 bg-black relative overflow-hidden">
      <div className="pointer-events-none absolute -bottom-[100px] -right-[100px] w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(143,39,255,0.3), transparent 65%)" }} />

      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center text-white mb-14">
            {t("Settlement Funds & Personal Maintenance", "تمکن مالی و هزینه‌های استقرار")}
          </h2>
        </Reveal>

        <Reveal variant="up" delay={80}>
          <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-5 relative z-10">

            {/* Left hero card */}
            <div className="rounded-[20px] p-10 flex flex-col gap-5"
              style={{ background: "#0E0E10", border: "1px solid #1f1f24" }}>
              <span className="self-start text-[11px] font-bold tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-full text-[#FFE600]"
                style={{ background: "rgba(255,230,0,0.12)", border: "1px solid rgba(255,230,0,0.3)" }}>
                {t("Cannot Be Borrowed", "قابل تأمین از منابع شخصی؛ بدون وام")}
              </span>
              <div className="text-[72px] font-bold tracking-[-0.04em] leading-none text-white">{t("$15.2K", "۱۵٬۲ هزار دلار کانادا")}</div>
              <p className="text-[14px] text-[#B5B5BA] leading-[1.65]">
                {t("Minimum personal funds for a", "حداقل منابع مالی موردنیاز برای یک")} <strong className="text-[#FFE600] font-semibold">{t("solo applicant", "متقاضی مجرد")}</strong> {t("in CAD — unencumbered, liquid, and", "؛ این منابع باید")} <strong className="text-[#FFE600] font-semibold">{t("cannot come from lines of credit or third parties", "نقدشونده، در دسترس و متعلق به خود متقاضی باشند و نمی‌توانند از خطوط اعتباری یا اشخاص ثالث تأمین شوند")}</strong>{t(".", ".")}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto pt-5" style={{ borderTop: "1px solid #1f1f24" }}>
                {[
                  { en: "Certified bank statements (4–6 months)", fa: "صورت‌حساب بانکی معتبر ۴ تا ۶ ماه اخیر" },
                  { en: "Institution letters", fa: "نامه‌های بانکی" },
                  { en: "Fixed-term certificates", fa: "گواهی سپرده‌های مدت‌دار" },
                ].map((chip) => (
                  <span key={chip.en} className="text-[12px] px-3 py-1.5 rounded-full text-white font-medium"
                    style={{ border: "1px solid #2a2a30" }}>{t(chip.en, chip.fa)}</span>
                ))}
              </div>
            </div>

            {/* Right rows */}
            <div className="flex flex-col gap-2.5">
              {rows.map((r) => (
                <div key={r.label}
                  className="rounded-[8px] px-5 py-3.5 flex justify-between items-center gap-4 transition-all duration-200 hover:border-[rgba(143,39,255,0.3)]"
                  style={{ background: "#0E0E10", border: "1px solid #1f1f24" }}>
                  <div>
                    <div className="text-[13px] text-white font-semibold">{t(r.label, r.labelFa)}</div>
                    {r.sub && <div className="text-[12px] text-[#B5B5BA]">{t(r.sub, r.subFa)}</div>}
                  </div>
                  <div className="text-[20px] font-bold text-[#FFE600] tracking-[-0.02em] whitespace-nowrap">{t(r.amount, r.amountFa)}</div>
                </div>
              ))}
            </div>

          </div>
        </Reveal>
      </Row>
    </section>
  );
}
