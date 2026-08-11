"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const cards = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>,
    title: "No Sector Restrictions",
    titleFa: "بدون محدودیت در حوزه فعالیت",
    desc: <span>Valid for <strong className="text-black font-semibold">any legitimate commercial model</strong> — tech, consulting, import-export, services, and more. No tech-only mandate.</span>,
    descFa: <span>این مسیر برای طیف گسترده‌ای از <strong className="text-black font-semibold">کسب‌وکارهای قانونی و قابل‌اجرا</strong> مناسب است؛ از شرکت‌های فناوری و مشاوره‌ای گرفته تا فعالیت‌های واردات و صادرات، کسب‌وکارهای خدماتی و موارد دیگر. برخلاف برخی برنامه‌ها، فعالیت شما الزاماً نباید در حوزه فناوری باشد.</span>,
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z"/><path d="M9 12l2 2 4-4"/></svg>,
    title: "Direct EU Passport Path",
    titleFa: "مسیر مستقیم به تابعیت پرتغال",
    desc: <span>Unlocks permanent settlement and full <strong className="text-black font-semibold">Portuguese citizenship</strong> after 5 years of legal residence — with dual citizenship fully permitted.</span>,
    descFa: <span>پس از ۵ سال اقامت قانونی و در صورت احراز شرایط، می‌توانید برای اقامت دائم و <strong className="text-black font-semibold">تابعیت پرتغال</strong> اقدام کنید. پرتغال همچنین تابعیت دوگانه را به رسمیت می‌شناسد.</span>,
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    title: "Full Family Reunification",
    titleFa: "امکان همراهی کامل خانواده",
    desc: <span>Spouse, minor children, and dependent parents included. All family members receive <strong className="text-black font-semibold">immediate, unrestricted rights</strong> to work or study in Portugal.</span>,
    descFa: <span>همسر، فرزندان زیر سن قانونی و والدین تحت تکفل می‌توانند در چارچوب الحاق خانواده همراه متقاضی باشند. اعضای خانواده پس از دریافت مجوز مربوطه، امکان <strong className="text-black font-semibold">کار یا تحصیل</strong> در پرتغال را خواهند داشت.</span>,
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
    title: "Schengen Area Access",
    titleFa: "دسترسی به منطقه شنگن",
    desc: <span>Visa-free travel across all <strong className="text-black font-semibold">29 Schengen countries</strong> for up to 90 days within any 180-day window.</span>,
    descFa: <span>امکان سفر بدون نیاز به ویزا در سراسر <strong className="text-black font-semibold">۲۹ کشور عضو شنگن</strong>، تا سقف ۹۰ روز در هر دوره ۱۸۰ روزه.</span>,
  },
];

export default function Benefits() {
  const { t, lang } = useLang();
  return (
    <section className="py-20 md:py-24 bg-white">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center mb-12">
            {t("Program Advantages & Strategic Benefits", "مزایا و فرصت‌های برنامه")}
          </h2>
        </Reveal>

        <div className="rounded-[20px] overflow-hidden border border-[#E2E2E2]">
          <div className="grid grid-cols-1 md:grid-cols-4">
            {cards.map((c, i) => (
              <Reveal key={c.title} variant="up" delay={i * 80}>
                <div
                  className="p-8 transition-colors duration-250 hover:bg-[#F7F6F9] h-full"
                  style={{ borderRight: i < 3 ? "1px solid #E2E2E2" : undefined }}
                >
                  <div className="w-12 h-12 rounded-[12px] grid place-items-center bg-[#FAF6FF] text-[#8F27FF] mb-5">
                    {c.icon}
                  </div>
                  <h3 className="text-[16px] font-semibold tracking-[-0.015em] mb-2">{t(c.title, c.titleFa)}</h3>
                  <p className="text-[13.5px] text-[#929292] leading-[1.6]">{lang === "fa" ? c.descFa : c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Row>
    </section>
  );
}
