"use client";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const cards = [
  {
    title: "4-Year Initial Runway",
    titleFa: "بازه‌ی اولیه‌ی ۴ ساله",
    desc: "One of the longest initial permits in the EU — calibrated to your startup's scope and growth projections, with no annual renewal stress.",
    descFa: "یکی از طولانی‌ترین مجوزهای اولیه در اتحادیه اروپا — متناسب با دامنه و پیش‌بینی‌های رشد استارتاپ شما، بدون استرس تمدید سالانه.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} className="w-6 h-6">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Zero Minimum Capital",
    titleFa: "بدون حداقل سرمایه",
    desc: "No €30,000 corporate deposit. The program focuses on innovation and execution capability — not your balance sheet.",
    descFa: "بدون سپرده‌ی شرکتی ۳۰٬۰۰۰ یورویی. این برنامه بر نوآوری و توان اجرا تمرکز دارد — نه ترازنامه‌ی شما.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} className="w-6 h-6">
        <circle cx="12" cy="12" r="9" />
        <path d="M9 8.5h5a2 2 0 0 1 0 4h-4a2 2 0 0 0 0 4h5M12 6v2M12 16v2" />
      </svg>
    ),
  },
  {
    title: "Full Family Inclusion",
    titleFa: "شمول کامل خانواده",
    desc: 'Spouse receives a matching “Talent – Family” permit with unrestricted work rights. Children are covered without separate documentation.',
    descFa: 'همسر یک مجوز متناظر «استعداد – خانواده» با حق کار نامحدود دریافت می‌کند. فرزندان بدون مدارک جداگانه پوشش داده می‌شوند.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} className="w-6 h-6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Schengen Mobility",
    titleFa: "تحرک شنگن",
    desc: "Travel freely across all Schengen states — 90 days per 180-day period. Seamless pan-European business development from day one.",
    descFa: "آزادانه در تمام کشورهای شنگن سفر کنید — ۹۰ روز در هر بازه‌ی ۱۸۰ روزه. توسعه‌ی کسب‌وکار سراسر اروپا بدون دردسر از روز نخست.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} className="w-6 h-6">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    title: "World-Class Ecosystem",
    titleFa: "اکوسیستم درجه‌یک جهانی",
    desc: "Station F, Paris-Saclay, Bpifrance — France's startup infrastructure is among the most developed in Europe, with deep capital and research networks.",
    descFa: "استیشن F، پاریس‌ساکله، Bpifrance — زیرساخت استارتاپی فرانسه از توسعه‌یافته‌ترین‌ها در اروپاست، با شبکه‌های عمیق سرمایه و پژوهش.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} className="w-6 h-6">
        <path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" />
      </svg>
    ),
  },
  {
    title: "Pathway to French Citizenship",
    titleFa: "مسیر تابعیت فرانسه",
    desc: "5 years of continuous residence unlocks a 10-year permanent card and eligibility for French naturalization — one of the world's strongest passports.",
    descFa: "۵ سال اقامت پیوسته، کارت دائم ۱۰ ساله و واجد شرایط بودن برای تابعیت‌پذیری فرانسه را باز می‌کند — یکی از قوی‌ترین پاسپورت‌های جهان.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} className="w-6 h-6">
        <path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

export default function WhyFrance() {
  const { t } = useLang();
  return (
    <section className="py-16 md:py-20 bg-white">
      <Row>
        <Reveal variant="up" className="text-center mb-10 md:mb-14">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em]">
            {t("Why France?", "چرا فرانسه؟")}
          </h2>
        </Reveal>

        <div
          className="grid grid-cols-1 md:grid-cols-3 rounded-[20px] overflow-hidden"
          style={{ border: "1px solid #E2E2E2" }}
        >
          {cards.map((c, i) => (
            <Reveal key={i} variant="up" delay={i * 80}>
              <div
                className="p-8 md:p-9 h-full transition-colors duration-300 hover:bg-[#F7F6F9]"
                style={{
                  borderRight: (i + 1) % 3 !== 0 ? "1px solid #E2E2E2" : undefined,
                  borderBottom: i < 5 ? "1px solid #E2E2E2" : undefined,
                }}
              >
                <div className="w-12 h-12 rounded-[12px] bg-[#FAF6FF] text-[#8F27FF] flex items-center justify-center mb-5 transition-transform duration-300 hover:scale-110">
                  {c.icon}
                </div>
                <h3 className="text-[17px] font-semibold tracking-[-0.015em] mb-2.5">{t(c.title, c.titleFa)}</h3>
                <p className="text-[14px] text-[#929292] leading-[1.6]">{t(c.desc, c.descFa)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Row>
    </section>
  );
}
