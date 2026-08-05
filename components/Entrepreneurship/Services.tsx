"use client";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const cards = [
  { badge: "Analysis", badgeFa: "تحلیل و ارزیابی", name: "Feasibility Analysis", nameFa: "امکان‌سنجی کسب‌وکار", title: "Business Model & Financial Feasibility", titleFa: "طراحی مدل کسب‌وکار و ارزیابی مالی" },
  { badge: "Legal", badgeFa: "امور حقوقی", name: "Immigration Legal", nameFa: "خدمات حقوقی مهاجرت", title: "Legal Guidance for Immigration Applications", titleFa: "مشاوره حقوقی برای پرونده‌های مهاجرتی" },
  { badge: "Setup", badgeFa: "راه‌اندازی", name: "Company Registration", nameFa: "ثبت شرکت", title: "Company Registration & Post-Launch Support", titleFa: "ثبت شرکت و خدمات پس از راه‌اندازی" },
  { badge: "Growth", badgeFa: "رشد", name: "Ongoing Advisory", nameFa: "مشاوره‌ی مستمر", title: "Ongoing Advisory & Performance Monitoring", titleFa: "همراهی مستمر برای رشد و ارزیابی عملکرد" },
];

export default function Services() {
  const { t } = useLang();
  return (
    <section className="py-[90px] bg-white">
      <Row>
        <Reveal variant="up">
          <div className="text-center max-w-[700px] mx-auto mb-14">
            <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1]">
              {t("Our Services", "خدمات تخصصی ما")}
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[22px]">
          {cards.map((c, i) => (
            <Reveal key={i} variant="up" delay={i * 80}>
              <div
                className="group flex flex-col border border-[#E2E2E2] rounded-[28px] p-[36px_30px_28px] bg-white cursor-pointer relative overflow-hidden min-h-[240px] transition-[transform,box-shadow,border-color] duration-500"
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-10px)";
                  el.style.boxShadow = "0 30px 60px -20px rgba(143,39,255,0.25),0 12px 24px -12px rgba(0,0,0,0.08)";
                  el.style.borderColor = "rgba(143,39,255,0.25)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "";
                  el.style.boxShadow = "";
                  el.style.borderColor = "#E2E2E2";
                }}
              >
                {/* Radial gradient overlay on hover */}
                <div
                  className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms] pointer-events-none"
                  style={{ background: "radial-gradient(120% 80% at 100% 0%,rgba(143,39,255,0.07) 0%,transparent 55%)" }}
                />

                {/* Badge with line prefix */}
                <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[.12em] uppercase text-[#8F27FF] mb-[18px] relative z-10">
                  <span className="w-6 h-[1.5px] bg-[#8F27FF] rounded-full" />
                  {t(c.badge, c.badgeFa)}
                </span>

                {/* Title */}
                <h3 className="text-[18px] font-bold tracking-[-0.02em] text-black leading-[1.3] flex-1 relative z-10">
                  {t(c.title, c.titleFa)}
                </h3>

                {/* Footer */}
                <div className="flex items-center justify-between mt-auto pt-5 border-t border-[#E2E2E2] group-hover:border-[rgba(143,39,255,0.18)] transition-colors duration-[350ms] relative z-10">
                  <span className="text-[14px] font-semibold text-[#474747] group-hover:text-[#8F27FF] tracking-[-0.01em] transition-colors duration-300">
                    {t(c.name, c.nameFa)}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Row>
    </section>
  );
}
