"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const groups = [
  {
    title: "Mandatory Corporate Evidence",
    titleFa: "مدارک شرکتی الزامی",
    items: [
      { strong: "Strategic Business Plan", strongFa: "طرح کسب‌وکار راهبردی", desc: "Multi-year model with capital allocation schedules and explicit job-creation milestones over a 4-year horizon.", descFa: "مدل چندساله با برنامه‌های تخصیص سرمایه و نقاط عطف صریح ایجاد اشتغال در افق ۴ ساله." },
      { strong: "Corporate Structure Documentation", strongFa: "مستندسازی ساختار شرکتی", desc: "Signed letters of intent, articles of incorporation (Statuts), or Kbis extracts showing equity share greater than 10%.", descFa: "نامه‌های اعلام قصد امضاشده، اساسنامه‌ی شرکت (Statuts)، یا استخراج‌های Kbis که سهم سهام بیش از ۱۰٪ را نشان می‌دهند." },
      { strong: "Investment Proof", strongFa: "اثبات سرمایه‌گذاری", desc: "Escrow receipt, capital deposit certificate from a French financial institution, or authenticated corporate loan agreement.", descFa: "رسید امانت‌سپاری، گواهی سپرده‌ی سرمایه از یک مؤسسه‌ی مالی فرانسوی، یا توافق‌نامه‌ی وام شرکتی تأییدشده." },
    ],
  },
  {
    title: "Personal Financial Proofs",
    titleFa: "مدارک مالی شخصی",
    items: [
      { strong: "6 Months of Bank Statements", strongFa: "۶ ماه صورت‌حساب بانکی", desc: "Personal statements demonstrating clean, unencumbered liquid savings at or above the annual SMIC baseline.", descFa: "صورت‌حساب‌های شخصی که پس‌انداز نقدی پاک و بدون قید در حد یا بالاتر از پایه‌ی سالانه‌ی SMIC را نشان می‌دهند." },
      { strong: "Origin of Funds Declaration", strongFa: "اظهارنامه‌ی منشأ وجوه", desc: "Audited tax returns, property sale receipts, or corporate dividend records validating the lawful accumulation of the €300K capital.", descFa: "اظهارنامه‌های مالیاتی حسابرسی‌شده، رسیدهای فروش ملک، یا سوابق سود سهام شرکتی که انباشت قانونی سرمایه‌ی ۳۰۰ هزار یورویی را تأیید می‌کنند." },
      { strong: "Valid Passport", strongFa: "پاسپورت معتبر", desc: "Sufficient remaining validity for the full permit duration. French DRIEETS enforce zero-tolerance for incomplete financial trails.", descFa: "اعتبار باقی‌مانده‌ی کافی برای کل مدت مجوز. DRIEETS فرانسه برای مسیرهای مالی ناقص هیچ اغماضی ندارند." },
    ],
  },
];

export default function Documents() {
  const { t } = useLang();
  return (
    <section className="py-20 md:py-24 bg-black relative overflow-hidden">
      <div
        className="absolute -top-[80px] -left-[80px] w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,230,0,0.1), transparent 70%)" }}
      />
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1] text-white text-center mb-14">
            {t("Document Checklist & Verification", "چک‌لیست اسناد و راستی‌آزمایی")}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-10">
          {groups.map((g, gi) => (
            <Reveal key={gi} variant={gi === 0 ? "left" : "right"} delay={60}>
              <div
                className="rounded-[20px] p-[36px_32px] h-full"
                style={{ background: "#0E0E10", border: "1px solid rgba(255,230,0,0.15)" }}
              >
                <div
                  className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.1em] mb-5"
                  style={{ color: "#FFE600" }}
                >
                  <span className="w-1 h-3.5 rounded-sm" style={{ background: "#FFE600" }} />
                  {t(g.title, g.titleFa)}
                </div>
                <ul className="flex flex-col">
                  {g.items.map((item, ii) => (
                    <li
                      key={ii}
                      className="flex items-start gap-3 text-[13.5px] leading-[1.55] py-3"
                      style={{
                        color: "#B5B5BA",
                        borderBottom: ii < g.items.length - 1 ? "1px solid #1f1f24" : "none",
                      }}
                    >
                      <span
                        className="flex-shrink-0 rounded-full mt-[7px]"
                        style={{ width: 5, height: 5, background: "#FFE600", opacity: 0.8 }}
                      />
                      <div>
                        <strong className="block mb-0.5" style={{ color: "#FFFDE7", fontWeight: 600 }}>{t(item.strong, item.strongFa)}</strong>
                        {t(item.desc, item.descFa)}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Row>
    </section>
  );
}
