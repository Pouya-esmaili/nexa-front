"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const cards = [
  { title: "Main Applicant (100% Minimum Wage)", titleFa: "متقاضی اصلی (۱۰۰٪ حداقل دستمزد)", sub: "Personal liquid funds baseline", subFa: "پایه‌ی دارایی نقدی شخصی", amount: "~€10,000", amountFa: "~۱۰٬۰۰۰ یورو" },
  { title: "Spouse / Adult Dependent (+50%)", titleFa: "همسر / فرد تحت تکفل بزرگسال (+۵۰٪)", sub: "Additional per adult family member", subFa: "اضافی به‌ازای هر عضو بزرگسال خانواده", amount: "+~€5,000", amountFa: "+~۵٬۰۰۰ یورو" },
  { title: "Each Dependent Child (+30%)", titleFa: "هر فرزند تحت تکفل (+۳۰٪)", sub: "Additional per minor child", subFa: "اضافی به‌ازای هر فرزند صغیر", amount: "+~€3,000", amountFa: "+~۳٬۰۰۰ یورو" },
];

export default function FinancialRequirements() {
  const { t } = useLang();
  return (
    <section className="py-20 md:py-24 bg-black relative overflow-hidden">
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(143,39,255,0.3), transparent 65%)" }} />

      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-white text-center mb-12 relative z-10">
            {t("Financial Requirements", "الزامات مالی")}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-5 relative z-10">
          {/* Hero card */}
          <Reveal variant="left" delay={100}>
            <div className="rounded-[20px] p-10 flex flex-col gap-5 h-full" style={{ background: "#0E0E10", border: "1px solid #1f1f24" }}>
              <div className="self-start text-[11px] font-bold tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-full"
                style={{ background: "rgba(255,230,0,0.12)", border: "1px solid rgba(255,230,0,0.3)", color: "#FFE600" }}>
                {t("Salário Mínimo Nacional Baseline", "پایه‌ی حداقل دستمزد ملی (Salário Mínimo Nacional)")}
              </div>
              <div className="text-[72px] font-bold tracking-[-0.04em] leading-[0.9] text-white">{t("~€10K", "~۱۰ هزار یورو")}</div>
              <p className="text-[14px] leading-[1.65]" style={{ color: "#B5B5BA" }}>
                {t("Annual personal maintenance threshold for a", "آستانه‌ی سالانه‌ی تأمین معاش شخصی برای یک")} <strong style={{ color: "#FFE600", fontWeight: 600 }}>{t("solo founder", "بنیان‌گذار منفرد")}</strong> {t("— pegged to Portugal's national minimum wage.", "— که به حداقل دستمزد ملی پرتغال گره خورده است.")}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto pt-4" style={{ borderTop: "1px solid #1f1f24" }}>
                {[
                  { en: "Portuguese bank account", fa: "حساب بانکی پرتغالی" },
                  { en: "Share capital deposits", fa: "سپرده‌های سرمایه‌ی سهام" },
                  { en: "Dividend contracts", fa: "قراردادهای سود سهام" },
                  { en: "Executive salary records", fa: "سوابق حقوق اجرایی" },
                ].map((chip) => (
                  <span key={chip.en} className="text-[12px] px-3 py-1.5 rounded-full font-medium text-white" style={{ border: "1px solid #2a2a30" }}>
                    {t(chip.en, chip.fa)}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Info cards */}
          <div className="flex flex-col gap-3">
            {cards.map((c, i) => (
              <Reveal key={c.title} variant="up" delay={i * 80 + 100}>
                <div
                  className="rounded-[14px] px-6 py-5 flex justify-between items-center gap-4 transition-all duration-250"
                  style={{ background: "#0E0E10", border: "1px solid #1f1f24" }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = "#8F27FF";
                    el.style.background = "#150026";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = "#1f1f24";
                    el.style.background = "#0E0E10";
                  }}
                >
                  <div>
                    <h4 className="text-[14px] font-semibold text-white mb-1">{t(c.title, c.titleFa)}</h4>
                    <p className="text-[13px] m-0" style={{ color: "#B5B5BA" }}>{t(c.sub, c.subFa)}</p>
                  </div>
                  <div className="text-[28px] font-bold tracking-[-0.03em] whitespace-nowrap" style={{ color: "#FFE600" }}>
                    {t(c.amount, c.amountFa)}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Row>
    </section>
  );
}
