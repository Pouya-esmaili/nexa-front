"use client";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const cards = [
  {
    title: "4-Year Initial Runway",
    titleFa: "۴ سال فرصت برای ساخت و توسعه",
    desc: "One of the longest initial permits in the EU — calibrated to your startup's scope and growth projections, with no annual renewal stress.",
    descFa: "یکی از طولانی‌ترین مجوزهای اقامت اولیه در میان مسیرهای کارآفرینی اروپا؛ فرصتی برای اینکه متناسب با ابعاد و چشم‌انداز رشد استارتاپتان، بدون دغدغه تمدیدهای سالانه روی توسعه کسب‌وکار تمرکز کنید.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} className="w-6 h-6">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Zero Minimum Capital",
    titleFa: "بدون حداقل سرمایه‌گذاری",
    desc: "No €30,000 corporate deposit. The program focuses on innovation and execution capability — not your balance sheet.",
    descFa: "نیازی به سپرده شرکتی €۳۰,۰۰۰ نیست. این مسیر بیشتر از اینکه به حجم سرمایه شما وابسته باشد، بر نوآوری و توانایی اجرای پروژه تمرکز دارد.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} className="w-6 h-6">
        <circle cx="12" cy="12" r="9" />
        <path d="M9 8.5h5a2 2 0 0 1 0 4h-4a2 2 0 0 0 0 4h5M12 6v2M12 16v2" />
      </svg>
    ),
  },
  {
    title: "Full Family Inclusion",
    titleFa: "خانواده، همراه شما",
    desc: 'Spouse receives a matching “Talent – Family” permit with unrestricted work rights. Children are covered without separate documentation.',
    descFa: 'همسر شما می‌تواند هم‌زمان مجوز Talent – Family دریافت کند و از حق کامل کار در فرانسه برخوردار شود. فرزندان نیز بدون نیاز به تشکیل پرونده‌ای جداگانه تحت پوشش قرار می‌گیرند.',
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
    titleFa: "دسترسی به منطقه شنگن",
    desc: "Travel freely across all Schengen states — 90 days per 180-day period. Seamless pan-European business development from day one.",
    descFa: "امکان سفر آزادانه در سراسر کشورهای شنگن تا ۹۰ روز در هر دوره ۱۸۰ روزه؛ فرصتی برای توسعه فعالیت‌های تجاری در سراسر اروپا از همان ابتدای مسیر.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} className="w-6 h-6">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    title: "World-Class Ecosystem",
    titleFa: "اکوسیستم قدرتمند استارتاپی",
    desc: "Station F, Paris-Saclay, Bpifrance — France's startup infrastructure is among the most developed in Europe, with deep capital and research networks.",
    descFa: "از Station F و Paris-Saclay گرفته تا Bpifrance، فرانسه یکی از توسعه‌یافته‌ترین زیرساخت‌های استارتاپی اروپا را در اختیار دارد؛ با دسترسی گسترده به سرمایه، شبکه‌های تحقیقاتی و شرکای تجاری.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} className="w-6 h-6">
        <path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" />
      </svg>
    ),
  },
  {
    title: "Pathway to French Citizenship",
    titleFa: "مسیر روشن تا تابعیت فرانسه",
    desc: "5 years of continuous residence unlocks a 10-year permanent card and eligibility for French naturalization — one of the world's strongest passports.",
    descFa: "پس از ۵ سال اقامت مستمر، می‌توانید برای کارت اقامت دائم ۱۰ ساله و در صورت احراز شرایط، برای تابعیت فرانسه اقدام کنید؛ تابعیتی با یکی از معتبرترین پاسپورت‌های جهان.",
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
                  borderInlineEnd: (i + 1) % 3 !== 0 ? "1px solid #E2E2E2" : undefined,
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
