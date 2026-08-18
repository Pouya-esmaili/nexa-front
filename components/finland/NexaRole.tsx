"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

function scrollToContact(e: React.MouseEvent) {
  e.preventDefault();
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}

const points: { en: string; fa: string }[] = [
  { en: "Align team equity to meet the strict 60% ownership rule", fa: "تنظیم ساختار سهام تیم برای رعایت شرط مالکیت ۶۰٪" },
  { en: "Stress-test your plan against Business Finland's exact benchmarks", fa: "ارزیابی و آزمون استحکام بیزنس‌پلن بر اساس معیارهای دقیق Business Finland" },
  { en: "Structure family applications for the 14-day Fast Track", fa: "ساختاربندی درخواست‌های اعضای خانواده برای استفاده از Fast Track" },
  { en: "Prepare banking documentation to meet all financial thresholds", fa: "آماده‌سازی مدارک بانکی مطابق با تمام الزامات مالی" },
  { en: "End-to-end compliance management from concept to permit", fa: "مدیریت یکپارچه الزامات و انطباق از مرحله ایده تا دریافت مجوز اقامت" },
];

export default function NexaRole() {
  const { t } = useLang();
  return (
    <section className="py-16 md:py-20 bg-white">
      <Row>
        <Reveal variant="up" className="text-center mb-10 md:mb-14">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em]">
            {t("How Nexa Engineers Your Journey", "نکسا چگونه مسیر شما را مهندسی می‌کند؟")}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-5 items-stretch">

          {/* Advisory card */}
          <Reveal variant="left" delay={100}>
            <div className="bg-white border border-gray-200 rounded-[20px] p-10 flex flex-col gap-6 h-full">
              <div className="flex items-center gap-3.5 pb-6 border-b border-gray-200">
                <div
                  className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-[20px] font-bold text-white flex-shrink-0"
                  style={{ background: "#8F27FF" }}
                >
                  N
                </div>
                <div>
                  <strong className="block text-[18px] font-bold tracking-[-0.01em]">{t("Nexa Advisory", "NEXA Advisory")}</strong>
                  <small className="block text-gray-500 text-[13px] mt-0.5">{t("Investment migration & startup relocation.", "مهاجرت سرمایه‌گذاری و جابه‌جایی استارتاپ‌ها")}</small>
                </div>
              </div>
              <p className="text-[15px] leading-[1.65] text-[#474747] m-0">
                {t("Moving your entire life and business to a new country can feel overwhelming when dealing with foreign portals, complex financial models, and immigration compliance. At Nexa, we approach your move with structural engineering clarity — not generic templates.", "انتقال هم‌زمان زندگی و کسب‌وکار به کشوری جدید، به‌ویژه در مواجهه با سامانه‌های خارجی، ساختارهای پیچیده مالی و الزامات مهاجرتی، می‌تواند چالش‌برانگیز باشد. در نکسا، ما این فرآیند را با رویکردی ساختاریافته و دقیق پیش می‌بریم؛ نه با قالب‌های عمومی و راهکارهای یکسان برای همه.")}
              </p>
              <ul className="flex flex-col mt-auto">
                {points.map((p, i) => (
                  <li
                    key={p.en}
                    className="flex items-center gap-3 text-[14px] font-medium py-3 border-b border-gray-200 last:border-b-0 transition-transform duration-200 hover:translate-x-1"
                    style={{ transitionDelay: `${i * 30}ms` }}
                  >
                    <span
                      className="w-[22px] h-[22px] rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "#FAF6FF" }}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="#8F27FF" strokeWidth={2.5} strokeLinecap="round" className="w-3 h-3">
                        <path d="M5 12l4 4 10-10" />
                      </svg>
                    </span>
                    {t(p.en, p.fa)}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Purple CTA */}
          <Reveal variant="right" delay={150}>
            <div
              className="rounded-[20px] p-10 flex flex-col gap-5 text-white h-full relative overflow-hidden"
              style={{ background: "#8F27FF" }}
            >
              {/* Radial glow */}
              <div
                className="absolute top-0 right-0 w-56 h-56 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(255,255,255,0.1), transparent 70%)" }}
              />
              <span
                className="self-start text-[11px] font-bold uppercase tracking-[.08em] px-3.5 py-1.5 rounded-full relative z-10"
                style={{ background: "rgba(255,255,255,0.16)", border: "1px solid rgba(255,255,255,0.18)" }}
              >
                {t("Integrated Advisory Platform", "پلتفرم یکپارچه مشاوره")}
              </span>
              <h3 className="text-[24px] font-bold leading-[1.2] tracking-[-0.025em] text-white relative z-10">
                {t("Regulatory engineering so you can focus on building your global vision.", "طراحی ساختار حقوقی و مهاجرتی، تا شما روی ساختن آینده جهانی کسب‌وکارتان تمرکز کنید.")}
              </h3>
              <p className="text-[14px] leading-relaxed relative z-10" style={{ color: "rgba(255,255,255,0.85)" }}>
                {t("We handle the complexity — portal submissions, financial structuring, immigration compliance, and family documentation — so you arrive in Helsinki ready to build, not stressed about paperwork.", "ما پیچیدگی‌های مسیر را مدیریت می‌کنیم؛ از ثبت درخواست در سامانه‌ها و ساختاربندی مالی گرفته تا الزامات مهاجرتی و مدارک خانواده، تا زمانی که به هلسینکی می‌رسید، آماده ساختن و توسعه دادن باشید، نه درگیر شدن با کاغذبازی.")}
              </p>
              <a
                href="#contact"
                onClick={scrollToContact}
                className="mt-auto self-start inline-flex items-center gap-2.5 px-6 py-3.5 bg-white text-black font-semibold rounded-full text-[14px] transition-all hover:bg-[#FFE600] hover:-translate-y-0.5 relative z-10 cursor-pointer"
              >
                {t("Book a Strategy Call →", "رزرو جلسه ←")}
              </a>
            </div>
          </Reveal>

        </div>
      </Row>
    </section>
  );
}
