"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

export default function Renewal() {
  const { t } = useLang();
  return (
    <section className="py-20 md:py-24 bg-white border-t border-[#E2E2E2]">
      <Row>
        <Reveal variant="up">
          <div className="rounded-[24px] overflow-hidden border-[1.5px] border-[#E2E2E2]">
            <div className="grid grid-cols-1 md:grid-cols-3">

              {/* Col 1 — Renewal (gray) */}
              <div className="p-[44px_36px] flex flex-col gap-4 bg-[#F7F6F9] border-b md:border-b-0 md:border-r border-[#E2E2E2]">
                <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#929292]">{t("Every 5 Years", "هر ۵ سال")}</div>
                <h3 className="text-[22px] font-bold tracking-[-0.02em] leading-[1.2] text-black">{t("Streamlined Renewals", "فرآیندی ساده و بدون آزمون زبان")}</h3>
                <p className="text-[13.5px] text-[#929292] leading-[1.65]">
                  {t("No language test. No wealth reassessment. No physical presence check. Only two conditions must be met at each renewal.", "برای تمدید اقامت، نیازی به آزمون زبان، ارزیابی مجدد میزان ثروت یا بررسی میزان حضور فیزیکی در یونان نیست. در هر تمدید، حفظ دو شرط اصلی کافی است:")}
                </p>
                <ul className="flex flex-col gap-[10px] mt-1">
                  {[
                    { en: "Certified land registry proof that you remain 100% legal titleholder of the qualifying property", fa: "ارائه مدرک رسمی ثبت املاک مبنی بر اینکه همچنان مالک ۱۰۰٪ ملک واجد شرایط هستید." },
                    { en: "Active Greek medical insurance policy for all applicants on the file", fa: "داشتن بیمه درمانی معتبر در یونان برای تمامی افراد تحت پوشش پرونده." },
                  ].map((item) => (
                    <li key={item.en} className="flex items-start gap-[10px] text-[13.5px] font-medium text-black leading-[1.45]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8F27FF] flex-shrink-0 mt-[5px]" />
                      {t(item.en, item.fa)}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 2 — Citizenship (purple) */}
              <div className="p-[44px_36px] flex flex-col gap-4 bg-[#8F27FF] border-b md:border-b-0 md:border-r border-[rgba(255,255,255,0.15)]">
                <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-[rgba(255,255,255,0.6)]">{t("Optional Pathway", "مسیر اختیاری")}</div>
                <h3 className="text-[22px] font-bold tracking-[-0.02em] leading-[1.2] text-white">{t("Greek Citizenship", "مسیر اختیاری دریافت تابعیت یونان")}</h3>
                <p className="text-[13.5px] text-[rgba(255,255,255,0.75)] leading-[1.65]">
                  {t("The Golden Visa grants permanent residency — not automatic citizenship. Naturalization is optional and requires deep physical integration.", "گلدن ویزای یونان مستقیماً به تابعیت منتهی نمی‌شود؛ بلکه ابتدا اقامت دائم اعطا می‌کند. دریافت تابعیت یک مسیر جداگانه و اختیاری است که مستلزم زندگی واقعی و ادغام در جامعه یونان است.")}
                </p>
                <ul className="flex flex-col gap-[10px] mt-1">
                  {[
                    { en: "7 consecutive years of physical residence (183+ days/year)", fa: "حداقل ۷ سال اقامت فیزیکی مستمر در یونان و حضور حداقل ۱۸۳ روز در سال" },
                    { en: "Continuous local tax filing and fiscal integration", fa: "رعایت الزامات مالیاتی و ارائه اظهارنامه‌های مالیاتی" },
                    { en: "Greek language & culture exam at minimum B1 level", fa: "قبولی در آزمون زبان و فرهنگ یونان در سطح حداقل B1" },
                    { en: "Dual citizenship fully recognized — no renunciation required", fa: "امکان حفظ تابعیت قبلی؛ یونان در چارچوب قانونی مربوطه تابعیت دوگانه را به رسمیت می‌شناسد." },
                  ].map((item) => (
                    <li key={item.en} className="flex items-start gap-[10px] text-[13.5px] font-medium text-[rgba(255,255,255,0.9)] leading-[1.45]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[rgba(255,255,255,0.5)] flex-shrink-0 mt-[5px]" />
                      {t(item.en, item.fa)}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 3 — CTA (yellow) */}
              <div className="p-[44px_36px] flex flex-col gap-4 bg-[#FFE600]">
                <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-[rgba(0,0,0,0.5)]">{t("The Bottom Line", "جمع‌بندی")}</div>
                <div className="text-[52px] font-extrabold text-black tracking-[-0.05em] leading-none">∞</div>
                <div className="text-[13px] font-semibold text-[rgba(0,0,0,0.55)] uppercase tracking-[0.08em]">
                  {t("Renewable residency", "اقامتی قابل تمدید")}<br />{t("with no stay condition", "بدون الزام به حضور")}
                </div>
                <p className="text-[13.5px] text-[rgba(0,0,0,0.65)] leading-[1.65] flex-1">
                  {t("Permanent EU residency for your entire family — across three generations — maintained simply by keeping your investment.", "با حفظ سرمایه‌گذاری واجد شرایط، شما و خانواده‌تان می‌توانید از اقامت بلندمدت یونان و دسترسی به حوزه شنگن بهره‌مند شوید؛ بدون آنکه برای حفظ اقامت، الزام به زندگی مستمر در یونان داشته باشید.")}
                </p>
                <a href="#contact"
                  className="inline-flex items-center gap-[10px] px-6 py-3.5 bg-black text-white font-bold rounded-full text-[14px] transition-all duration-200 hover:bg-[#8F27FF] hover:-translate-y-0.5 self-start">
                  {t("Start Your Application →", "شروع درخواست →")}
                </a>
              </div>

            </div>
          </div>
        </Reveal>
      </Row>
    </section>
  );
}
