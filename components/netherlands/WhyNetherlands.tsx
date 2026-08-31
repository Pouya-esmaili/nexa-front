"use client";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const cards = [
  {
    title: "Direct Eurozone Access",
    titleFa: "دسترسی مستقیم به بازار یورو",
    desc: "Amsterdam, Rotterdam, Eindhoven — embed your company in Europe's primary logistics and digital pathways from day one.",
    descFa: "از آمستردام و روتردام تا آیندهوون، کسب‌وکار خود را از همان ابتدا در یکی از مهم‌ترین مراکز لجستیک، فناوری و تجارت دیجیتال اروپا مستقر کنید.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} className="w-6 h-6">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
      </svg>
    ),
  },
  {
    title: "Co-Founder Launch",
    titleFa: "راه‌اندازی با هم‌بنیان‌گذاران",
    desc: "Up to 3 co-founders can apply under a single startup project, each holding an active management role.",
    descFa: "تا ۳ هم‌بنیان‌گذار می‌توانند در قالب یک پروژه استارتاپی مشترک اقدام کنند؛ مشروط بر اینکه هرکدام نقش مدیریتی و اجرایی فعال داشته باشند.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} className="w-6 h-6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Accelerated Onboarding",
    titleFa: "ورود سریع‌تر و ساختاریافته‌تر",
    desc: "Replaces complex capital scoring with a trusted facilitator partnership system — faster, cleaner, and more founder-friendly.",
    descFa: "به‌جای سیستم‌های پیچیده ارزیابی سرمایه، این مسیر بر همکاری با یک تسهیل‌گر مورد تأیید دولت متکی است؛ فرآیندی شفاف‌تر، سریع‌تر و متناسب‌تر با نیاز بنیان‌گذاران.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} className="w-6 h-6">
        <path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" />
      </svg>
    ),
  },
  {
    title: "Full Family Relocation",
    titleFa: "انتقال کامل خانواده",
    desc: "Spouse and minor children relocate with you. Your partner gets unrestricted Dutch labor market access — no separate work permit needed.",
    descFa: "همسر و فرزندان زیر سن قانونی می‌توانند همراه شما به هلند نقل‌مکان کنند. همسر شما نیز بدون نیاز به مجوز کار جداگانه، از حق کار نامحدود در بازار کار هلند برخوردار خواهد بود.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} className="w-6 h-6">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

export default function WhyNetherlands() {
  const { t } = useLang();
  return (
    <section className="py-16 md:py-20 bg-white">
      <Row>
        <Reveal variant="up" className="text-center mb-10 md:mb-14">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em]">
            {t("The Benefits of the Dutch Ecosystem", "مزایای اکوسیستم استارتاپی هلند")}
          </h2>
        </Reveal>

        <div
          className="grid grid-cols-1 md:grid-cols-4 rounded-[20px] overflow-hidden"
          style={{ border: "1px solid #E2E2E2" }}
        >
          {cards.map((c, i) => (
            <Reveal key={i} variant="up" delay={i * 80}>
              <div
                className={`p-8 md:p-9 h-full transition-colors duration-300 hover:bg-[#F7F6F9] ${i < cards.length - 1 ? "border-b md:border-b-0" : ""}`}
                style={{
                  borderColor: i < cards.length - 1 ? "#E2E2E2" : undefined,
                  borderInlineEnd: i < cards.length - 1 ? "1px solid #E2E2E2" : undefined,
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
