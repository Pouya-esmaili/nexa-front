"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const rows = [
  {
    profile: "Main Applicant",
    profileFa: "متقاضی اصلی",
    detail: "400% IPREM",
    detailFa: "۴۰۰٪ IPREM",
    monthly: "€2,400",
    monthlyFa: "۲٬۴۰۰ یورو",
    annual: "€28,800",
    annualFa: "۲۸٬۸۰۰ یورو",
  },
  {
    profile: "Per Dependent Member",
    profileFa: "به‌ازای هر عضو تحت تکفل",
    detail: "+100% IPREM each",
    detailFa: "+۱۰۰٪ IPREM برای هرکدام",
    monthly: "+€600",
    monthlyFa: "+۶۰۰ یورو",
    annual: "+€7,200",
    annualFa: "+۷٬۲۰۰ یورو",
  },
];

export default function IPREM() {
  const { t } = useLang();
  return (
    <section className="py-20 md:py-24 bg-black relative overflow-hidden">
      <div
        className="absolute -bottom-20 -right-20 w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(143,39,255,0.25), transparent 65%)" }}
      />
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1] text-white text-center mb-14">
            {t("Financial Sustainability Standard", "استاندارد پایداری مالی")}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          {/* Hero card */}
          <Reveal variant="left" delay={60}>
            <div
              className="rounded-[20px] p-10 flex flex-col gap-5 h-full"
              style={{ background: "#0E0E10", border: "1px solid #1f1f24" }}
            >
              <div
                className="self-start text-[11px] font-bold uppercase tracking-[0.12em] px-3.5 py-1.5 rounded-full"
                style={{ background: "rgba(255,230,0,0.12)", border: "1px solid rgba(255,230,0,0.3)", color: "#FFE600" }}
              >
                {t("IPREM-Based Calculation", "محاسبه‌ی مبتنی بر IPREM")}
              </div>
              <div
                className="font-extrabold text-white leading-[0.9] tabular-nums"
                style={{ fontSize: "64px", letterSpacing: "-0.04em" }}
              >
                {t("€600", "۶۰۰ یورو")}
              </div>
              <p className="text-[14px] leading-[1.6] m-0" style={{ color: "#B5B5BA" }}>
                {t("Monthly IPREM index (€7,200 annually). Your liquid reserves must cover", "شاخص ماهانه‌ی IPREM (۷٬۲۰۰ یورو سالانه). ذخایر نقدی شما باید")}{" "}
                <strong style={{ color: "#FFE600", fontWeight: 600 }}>{t("400% IPREM", "۴۰۰٪ IPREM")}</strong> {t("for the main applicant plus", "برای متقاضی اصلی به‌علاوه‌ی")} <strong style={{ color: "#FFE600", fontWeight: 600 }}>{t("100% per dependent", "۱۰۰٪ به‌ازای هر فرد تحت تکفل")}</strong>{t(".", " را پوشش دهد.")}
              </p>
            </div>
          </Reveal>

          {/* Table */}
          <Reveal variant="right" delay={60}>
            <div className="flex flex-col gap-4">
              <div className="overflow-x-auto rounded-[14px]" style={{ border: "1px solid #1f1f24" }}>
                <table className="w-full border-collapse" style={{ minWidth: "320px" }}>
                  <thead>
                    <tr style={{ background: "rgba(143,39,255,0.15)" }}>
                      <th className="text-left px-6 py-4 text-[11px] font-bold uppercase tracking-[0.08em] border-b border-[#1f1f24]" style={{ color: "rgba(255,255,255,0.6)" }}>
                        {t("Applicant Profile", "پروفایل متقاضی")}
                      </th>
                      <th className="text-left px-6 py-4 text-[11px] font-bold uppercase tracking-[0.08em] border-b border-[#1f1f24]" style={{ color: "rgba(255,255,255,0.6)" }}>
                        {t("Monthly", "ماهانه")}
                      </th>
                      <th className="text-left px-6 py-4 text-[11px] font-bold uppercase tracking-[0.08em] border-b border-[#1f1f24]" style={{ color: "rgba(255,255,255,0.6)" }}>
                        {t("Annual Requirement", "الزام سالانه")}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((r, i) => (
                      <tr key={i} style={{ borderBottom: i < rows.length - 1 ? "1px solid #1f1f24" : "none" }}>
                        <td className="px-6 py-5 text-[13.5px] leading-[1.5] align-middle" style={{ color: "#B5B5BA" }}>
                          <strong className="text-white font-semibold block">{t(r.profile, r.profileFa)}</strong>
                          {t(r.detail, r.detailFa)}
                        </td>
                        <td className="px-6 py-5 align-middle">
                          <span className="text-[18px] font-bold tabular-nums whitespace-nowrap" style={{ color: "#FFE600" }}>
                            {t(r.monthly, r.monthlyFa)}
                          </span>
                        </td>
                        <td className="px-6 py-5 align-middle">
                          <span className="text-[18px] font-bold tabular-nums whitespace-nowrap" style={{ color: "#FFE600" }}>
                            {t(r.annual, r.annualFa)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div
                className="rounded-[14px] px-6 py-5 text-[13px] leading-[1.6]"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid #1f1f24", color: "rgba(255,255,255,0.45)" }}
              >
                {t("Consulates require 3 consecutive monthly bank statements with letterhead, clear account numbers, and stable end-of-period balances. Unexplained sudden cash injections will trigger additional scrutiny.", "کنسولگری‌ها ۳ صورت‌حساب بانکی ماهانه‌ی متوالی با سربرگ، شماره‌حساب‌های روشن و مانده‌های پایان‌دوره‌ی پایدار می‌خواهند. تزریق‌های نقدی ناگهانی و توضیح‌داده‌نشده موجب بررسی بیشتر می‌شوند.")}
              </div>
            </div>
          </Reveal>
        </div>
      </Row>
    </section>
  );
}
