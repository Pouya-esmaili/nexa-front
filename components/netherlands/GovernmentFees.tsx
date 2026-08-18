"use client";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const fees = [
  {
    stage: "Initial Application",
    stageFa: "درخواست اولیه",
    amount: "€192",
    amountFa: "۱۹۲ یورو",
    label: "IND Startup Visa Application Fee",
    labelFa: "هزینه‌ی درخواست ویزای استارتاپ IND",
    desc: "Standard IND processing fee for the initial Startup Residence Permit application. Submitted digitally by your facilitator on your behalf.",
    descFa: "هزینه درخواست ویزای استارتاپ نزد IND که توسط تسهیل‌گر به‌صورت دیجیتال از طرف شما ثبت می‌شود.",
  },
  {
    stage: "Self-Employed Transition",
    stageFa: "انتقال به اقامت خوداشتغالی",
    amount: "€192",
    amountFa: "۱۹۲ یورو",
    label: "Change of Status Application",
    labelFa: "درخواست تغییر وضعیت",
    desc: "Fee to transition from your Startup Visa into a standard Self-Employed Residence Permit at the end of your first year, based on your facilitator's positive progress assessment.",
    descFa: "هزینه درخواست تغییر وضعیت از ویزای استارتاپ به مجوز اقامت خوداشتغالی در پایان سال اول، بر اساس ارزیابی مثبت تسهیل‌گر از روند پیشرفت کسب‌وکار.",
  },
];

export default function GovernmentFees() {
  const { t } = useLang();
  return (
    <section className="py-16 md:py-20 bg-white">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center mb-10 md:mb-14">
            {t("Government Fee Structure", "ساختار هزینه‌های دولتی")}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          {fees.map((f, i) => (
            <Reveal key={f.label} variant="up" delay={i * 100 + 100}>
              <div
                className="relative rounded-[14px] p-7 flex flex-col gap-3 overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-xl"
                style={{ background: "white", border: "1px solid #E2E2E2" }}
              >
                {/* Yellow top bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#FFE600]" />
                <span
                  className="self-start text-[11px] font-bold uppercase tracking-[.1em] px-2.5 py-1 rounded-full"
                  style={{ background: "#FFFBE6", border: "1px solid #F0D800", color: "#7A6800" }}
                >
                  {t(f.stage, f.stageFa)}
                </span>
                <div className="text-[52px] font-bold tracking-[-0.04em] leading-none">{t(f.amount, f.amountFa)}</div>
                <div className="text-[14px] font-semibold">{t(f.label, f.labelFa)}</div>
                <p className="text-[13px] text-[#929292] leading-[1.6] m-0">{t(f.desc, f.descFa)}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal variant="up" delay={350}>
          <div
            className="rounded-[8px] px-4 py-3.5 text-[13px] leading-[1.6]"
            style={{ background: "#FFFBE6", border: "1px solid #F0D800", color: "#7A6800" }}
          >
            {t("Note: Government fees are subject to IND annual updates. Additional costs include certified document translations, apostilles, facilitator fees, and KVK business registration (~€50).", "توجه: هزینه‌های دولتی ممکن است هر سال توسط IND به‌روزرسانی شوند. هزینه‌های جانبی شامل ترجمه رسمی مدارک، آپوستیل، هزینه تسهیل‌گر و ثبت کسب‌وکار در KVK (حدود ۵۰ یورو) است.")}
          </div>
        </Reveal>
      </Row>
    </section>
  );
}
