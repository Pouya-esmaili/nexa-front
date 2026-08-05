"use client";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const cards = [
  {
    title: "Zero Capital Requirement",
    titleFa: "بدون نیاز به سرمایه",
    desc: "No property purchase or upfront investment deposit needed. Your idea is your asset — Finland evaluates innovation, not balance sheets.",
    descFa: "بدون نیاز به خرید ملک یا سپرده‌ی سرمایه‌گذاری اولیه. ایده‌ی شما دارایی شماست — فنلاند نوآوری را ارزیابی می‌کند، نه ترازنامه را.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>,
  },
  {
    title: "Family Included",
    titleFa: "شمول خانواده",
    desc: "Spouse and dependent children apply simultaneously. Your partner receives an unrestricted, open right to work or study anywhere in Finland.",
    descFa: "همسر و فرزندان تحت تکفل هم‌زمان درخواست می‌دهند. همسر شما حق نامحدود و آزاد کار یا تحصیل در هر جای فنلاند را دریافت می‌کند.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  },
  {
    title: "27-Country Schengen Access",
    titleFa: "دسترسی به شنگن ۲۷ کشوری",
    desc: "Travel freely across the entire Schengen Area for business or leisure. A permit that opens all of Europe's doors from day one.",
    descFa: "آزادانه در سراسر منطقه‌ی شنگن برای کار یا تفریح سفر کنید. مجوزی که از روز نخست همه‌ی درهای اروپا را می‌گشاید.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
  },
  {
    title: "14-Day Fast Track",
    titleFa: "مسیر سریع ۱۴ روزه",
    desc: "Finland's official fast-track service processes your residency card in just 14 days — one of the fastest pathways in the EU.",
    descFa: "خدمات رسمی مسیر سریع فنلاند کارت اقامت شما را تنها در ۱۴ روز پردازش می‌کند — یکی از سریع‌ترین مسیرها در اتحادیه اروپا.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z"/></svg>,
  },
  {
    title: "Top-Tier Passport",
    titleFa: "پاسپورت درجه‌یک",
    desc: "Finnish citizenship unlocks full EU rights — live, work, and study in any of the 27 EU member states with one of the world's most powerful passports.",
    descFa: "تابعیت فنلاند حقوق کامل اتحادیه اروپا را باز می‌کند — زندگی، کار و تحصیل در هر یک از ۲۷ کشور عضو اتحادیه اروپا با یکی از قدرتمندترین پاسپورت‌های جهان.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z"/><path d="M9 12l2 2 4-4"/></svg>,
  },
  {
    title: "Work Flexibility",
    titleFa: "انعطاف شغلی",
    desc: "While your primary focus is your startup, the permit legally allows you to take employment at any Finnish company to supplement your income.",
    descFa: "در حالی که تمرکز اصلی شما استارتاپتان است، این مجوز به‌طور قانونی به شما اجازه می‌دهد برای تکمیل درآمدتان در هر شرکت فنلاندی مشغول به کار شوید.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 0h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 7.91a16 16 0 0 0 6.1 6.1l.44-.44a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  },
];

export default function WhyFinland() {
  const { t } = useLang();
  return (
    <section className="py-16 md:py-20 bg-white">
      <Row>
        <Reveal variant="up" className="text-center mb-10 md:mb-14">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em]">
            {t("Why Finland?", "چرا فنلاند؟")}
          </h2>
        </Reveal>

<div
  className="grid grid-cols-1 md:grid-cols-3 rounded-[20px] overflow-hidden"
  style={{ border: "1px solid #E2E2E2" }}
>
  {cards.map((c, i) => (
    <Reveal key={c.title} variant="up" delay={i * 80}>
      <div
        className="p-8 md:p-9 h-full transition-colors duration-300 hover:bg-[#F7F6F9]"
        style={{
          borderRight: (i + 1) % 3 !== 0 ? "1px solid #E2E2E2" : undefined,
          borderBottom: i < 5 ? "1px solid #E2E2E2" : undefined,
        }}
      >
        <div
          className="w-12 h-12 rounded-[12px] bg-[#FAF6FF] text-[#8F27FF] flex items-center justify-center mb-5 transition-transform duration-300 hover:scale-110"
        >
          {c.icon}
        </div>

        <h3 className="text-[17px] font-semibold tracking-[-0.015em] mb-2.5">
          {t(c.title, c.titleFa)}
        </h3>

        <p className="text-[14px] text-[#929292] leading-[1.6]">
          {t(c.desc, c.descFa)}
        </p>
      </div>
    </Reveal>
  ))}
</div>
      </Row>
    </section>
  );
}
