"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

export default function Financials() {
  const { t, lang } = useLang();
  return (
    <section className="py-20 md:py-24 bg-black relative overflow-hidden">
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(143,39,255,0.3), transparent 65%)" }} />

      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center text-white mb-14">
            {t("Capital Verification Requirements", "الزامات تأیید سرمایه")}
          </h2>
        </Reveal>

        <Reveal variant="up" delay={80}>
          <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-5 relative z-10">

            {/* Left hero card */}
            <div className="rounded-[20px] p-10 flex flex-col gap-5"
              style={{ background: "#0E0E10", border: "1px solid #1f1f24" }}>
              <span className="self-start text-[11px] font-bold tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-full text-[#FFE600]"
                style={{ background: "rgba(255,230,0,0.12)", border: "1px solid rgba(255,230,0,0.3)" }}>
                {t("Wire Transfer Only", "فقط انتقال بانکی")}
              </span>
              <div className="text-[72px] font-bold tracking-[-0.04em] leading-none text-white">{t("100%", "۱۰۰٪")}</div>
              <p className="text-[14px] text-[#B5B5BA] leading-[1.65]">
                {t("The", "")} <strong className="text-[#FFE600] font-semibold">{t("full investment amount", "کل مبلغ سرمایه‌گذاری")}</strong> {t("must be paid at deed execution — no installments, no partial payments. Funds must move via", "باید هنگام اجرای سند پرداخت شود — بدون اقساط، بدون پرداخت‌های جزئی. وجوه باید از طریق")}{" "}
                <strong className="text-[#FFE600] font-semibold">{t("cross-border wire transfer", "انتقال بانکی فرامرزی")}</strong> {t("from the applicant's overseas bank directly to the seller's verified Greek account.", "از بانک خارجی متقاضی مستقیماً به حساب یونانی تأییدشده‌ی فروشنده منتقل شوند.")}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto pt-5" style={{ borderTop: "1px solid #1f1f24" }}>
                {[
                  { en: "Cross-border wire transfer", fa: "انتقال بانکی فرامرزی" },
                  { en: "Certified bank check (Greek bank)", fa: "چک بانکی تأییدشده (بانک یونانی)" },
                  { en: "Applicant's own account only", fa: "فقط حساب شخصی متقاضی" },
                ].map((chip) => (
                  <span key={chip.en} className="text-[12px] px-3 py-1.5 rounded-full text-white font-medium"
                    style={{ border: "1px solid #2a2a30" }}>{t(chip.en, chip.fa)}</span>
                ))}
              </div>
            </div>

            {/* Right rules */}
            <div className="flex flex-col gap-3">
              {[
                { type: "must", label: "Required", labelFa: "الزامی", title: "Electronic Cross-Border Wire", titleFa: "انتقال الکترونیکی فرامرزی", desc: <>Funds must move from the <strong className="text-white font-semibold">main applicant's overseas bank account</strong> directly into the seller's verified Greek bank account — or via a certified bank check issued by a Greek credit institution.</>, descFa: <>وجوه باید از <strong className="text-white font-semibold">حساب بانکی خارجی متقاضی اصلی</strong> مستقیماً به حساب بانکی یونانی تأییدشده‌ی فروشنده منتقل شوند — یا از طریق یک چک بانکی تأییدشده که توسط یک مؤسسه‌ی اعتباری یونانی صادر شده باشد.</> },
                { type: "must", label: "Required", labelFa: "الزامی", title: "Greek Tax Number (AFM) First", titleFa: "ابتدا شماره‌ی مالیاتی یونان (AFM)", desc: <>Nexa secures your AFM and opens your Greek bank account via <strong className="text-white font-semibold">remote Power of Attorney</strong> before any capital is deployed — a mandatory prerequisite for property execution.</>, descFa: <>نکسا AFM شما را تأمین می‌کند و حساب بانکی یونانی شما را از طریق <strong className="text-white font-semibold">وکالت‌نامه‌ی از راه دور</strong> پیش از به‌کارگیری هرگونه سرمایه باز می‌کند — یک پیش‌نیاز الزامی برای اجرای معامله‌ی ملک.</> },
                { type: "ban",  label: "Prohibited", labelFa: "ممنوع", title: "Cash, Crypto & Third-Party Transfers", titleFa: "نقد، رمزارز و انتقال‌های شخص ثالث", desc: <>Cash payments, <strong className="text-white font-semibold">crypto-asset settlements</strong>, and any wire from a person not named on the visa application will <strong className="text-white font-semibold">invalidate the application entirely</strong> with no recourse.</>, descFa: <>پرداخت‌های نقدی، <strong className="text-white font-semibold">تسویه با رمزدارایی</strong> و هر انتقالی از شخصی که در درخواست ویزا نام برده نشده، <strong className="text-white font-semibold">درخواست را به‌طور کامل باطل می‌کند</strong> بدون هیچ راه جبرانی.</> },
              ].map((rule) => (
                <div key={rule.title} className="rounded-[14px] p-6 transition-all duration-200 hover:border-[#8F27FF]"
                  style={{ background: "#0E0E10", border: "1px solid #1f1f24" }}>
                  <div className={`text-[11px] font-bold uppercase tracking-widest mb-2 ${rule.type === "must" ? "text-[#FFE600]" : "text-[#F87171]"}`}>
                    {t(rule.label, rule.labelFa)}
                  </div>
                  <h4 className="text-[15px] font-semibold text-white mb-1">{t(rule.title, rule.titleFa)}</h4>
                  <p className="text-[13px] text-[#B5B5BA] leading-[1.6]">{lang === "fa" ? rule.descFa : rule.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </Reveal>
      </Row>
    </section>
  );
}
