"use client";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const cards = [
  { badge: "Strategy", badgeFa: "تحلیل و ارزیابی", name: "Feasibility Analysis", nameFa: "امکان‌سنجی کسب‌وکار", title: "Business Model & Financial Feasibility Analysis", titleFa: "طراحی مدل کسب‌وکار و ارزیابی مالی" },
  { badge: "Legal", badgeFa: "امور حقوقی", name: "Immigration Legal", nameFa: "خدمات حقوقی مهاجرت", title: "Legal Guidance for Immigration Applications", titleFa: "مشاوره حقوقی برای پرونده‌های مهاجرتی" },
  { badge: "Setup", badgeFa: "راه‌اندازی", name: "Company Registration", nameFa: "ثبت شرکت", title: "Company Registration & Post-Launch Support", titleFa: "ثبت شرکت و خدمات پس از راه‌اندازی" },
  { badge: "Capital", badgeFa: "رشد", name: "Fundraising", nameFa: "مشاوره مستمر", title: "Capital Access & Fundraising Through Global Networks", titleFa: "همراهی مستمر برای رشد و ارزیابی عملکرد" },
];

export default function StartupServices() {
  const { t } = useLang();
  return (
    <section className="py-16 md:py-24 bg-white">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center mb-12">
            {t("Our Services", "خدمات تخصصی ما")}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c, i) => (
            <Reveal key={i} variant="up" delay={i * 80}>
              <div className="group flex flex-col border border-[#E2E2E2] rounded-[28px] p-9 bg-white cursor-pointer overflow-hidden relative transition-all duration-500 hover:-translate-y-2.5 min-h-[240px]"
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 30px 60px -20px rgba(143,39,255,0.25),0 12px 24px -12px rgba(0,0,0,0.08)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(143,39,255,0.25)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.borderColor = "#E2E2E2";
                }}>
                <div className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: "radial-gradient(120% 80% at 100% 0%,rgba(143,39,255,0.07) 0%,transparent 55%)" }} />

                <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[.12em] uppercase text-[#8F27FF] mb-[18px] relative z-10">
                  <span className="w-6 h-[1.5px] bg-[#8F27FF] rounded-full" />
                  {t(c.badge, c.badgeFa)}
                </span>

                <h3 className="text-[18px] font-bold tracking-[-0.02em] text-black leading-[1.3] flex-1 relative z-10">
                  {t(c.title, c.titleFa)}
                </h3>

                <div className="flex items-center justify-between mt-auto pt-5 border-t border-[#E2E2E2] group-hover:border-[rgba(143,39,255,0.18)] transition-colors relative z-10">
                  <span className="text-[14px] font-semibold text-[#474747] group-hover:text-[#8F27FF] transition-colors">{t(c.name, c.nameFa)}</span>

                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Row>
    </section>
  );
}
