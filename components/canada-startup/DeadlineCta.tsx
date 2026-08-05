"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

export default function DeadlineCta() {
  const { t } = useLang();
  return (
    <section className="py-20 bg-white border-t border-[#E2E2E2]">
      <Row>
        <Reveal variant="up">
          <div className="rounded-[24px] overflow-hidden shadow-[0_0_0_2px_#000]">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_380px]">

              {/* Left — black */}
              <div className="bg-black px-12 py-[52px] flex flex-col gap-5 relative overflow-hidden">
                <div className="pointer-events-none absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full"
                  style={{ background: "radial-gradient(circle, rgba(255,230,0,0.08), transparent 70%)" }} />

                <div className="inline-flex items-center gap-2 self-start text-[11px] font-bold uppercase tracking-[0.1em] text-black bg-[#FF4444] px-[14px] py-1.5 rounded-full">
                  <span className="text-[8px]">●</span>
                  {t("Program Pause in Effect", "توقف برنامه در حال اجرا")}
                </div>

                <h2 className="text-[26px] md:text-[34px] font-bold text-white tracking-[-0.03em] leading-[1.1] relative z-10">
                  {t("The window was open.", "پنجره باز بود.")}<br />
                  <em className="text-[#FFE600] not-italic">{t("But only until June 30.", "اما فقط تا ۳۰ ژوئن.")}</em>
                </h2>

                <p className="text-[14.5px] text-[rgba(255,255,255,0.6)] leading-[1.65] max-w-[54ch] relative z-10">
                  {t("IRCC enacted a full program pause effective January 1, 2026. New applications are completely closed — only 2025 Commitment Certificate holders remain eligible. Miss the deadline and your certificate lapses permanently.", "IRCC یک توقف کامل برنامه را از ۱ ژانویه ۲۰۲۶ اجرا کرد. درخواست‌های جدید به‌طور کامل بسته شده‌اند — تنها دارندگان گواهی تعهد ۲۰۲۵ همچنان واجد شرایط باقی می‌مانند. اگر مهلت را از دست بدهید، گواهی شما برای همیشه منقضی می‌شود.")}
                </p>

                <div className="flex flex-col gap-2.5 relative z-10">
                  {[
                    { en: "Only founders with a valid 2025 Commitment Certificate can file", fa: "تنها بنیان‌گذاران دارای گواهی تعهد معتبر ۲۰۲۵ می‌توانند ثبت کنند" },
                    { en: "All group members must submit simultaneously — one delay collapses the entire file", fa: "همه‌ی اعضای گروه باید به‌طور هم‌زمان ثبت کنند — یک تأخیر کل پرونده را از هم می‌پاشد" },
                    { en: "IRCC is actively transitioning to a new entrepreneur pilot program in late 2026", fa: "IRCC فعالانه در حال گذار به یک برنامه‌ی آزمایشی جدید کارآفرینی در اواخر ۲۰۲۶ است" },
                  ].map((rule) => (
                    <div key={rule.en} className="flex items-start gap-3 text-[13.5px] text-[rgba(255,255,255,0.85)] font-medium leading-[1.5]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFE600] flex-shrink-0 mt-[6px]" />
                      {t(rule.en, rule.fa)}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — yellow */}
              <div className="bg-[#FFE600] px-10 py-[52px] flex flex-col gap-5 items-start justify-center">
                <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-[rgba(0,0,0,0.5)]">
                  {t("Hard Submission Deadline", "مهلت قطعی ثبت")}
                </div>
                <div className="text-[28px] font-extrabold text-black tracking-[-0.03em] leading-[1.1]">
                  {t("June 30,", "۳۰ ژوئن")}<br />{t("2026", "۲۰۲۶")}
                </div>
                <div className="w-full h-[1.5px] bg-[rgba(0,0,0,0.12)]" />
                <p className="text-[13px] text-[rgba(0,0,0,0.65)] leading-[1.6]">
                  {t("If you hold a", "اگر یک")} <strong className="text-black font-bold">{t("2025 Commitment Certificate", "گواهی تعهد ۲۰۲۵")}</strong>{t(", your PR filing must be complete and submitted before this date — no extensions are available.", " دارید، ثبت اقامت دائم شما باید پیش از این تاریخ کامل و ارسال شده باشد — هیچ تمدیدی در دسترس نیست.")}
                </p>
                <a href="#contact"
                  className="inline-flex items-center gap-[10px] px-6 py-3.5 bg-black text-white font-bold rounded-full text-[14px] transition-all duration-200 hover:bg-[#8F27FF] hover:-translate-y-0.5">
                  {t("Talk to Nexa Now →", "همین حالا با نکسا صحبت کنید →")}
                </a>
              </div>

            </div>
          </div>
        </Reveal>
      </Row>
    </section>
  );
}
