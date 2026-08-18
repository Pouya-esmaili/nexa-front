"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const cards = [
  {
    title: "Helsinki Metropolitan Area",
    titleFa: "منطقه کلان‌شهری هلسینکی",
    desc: "Minimum <strong>€1,210/month</strong> — approximately <strong>€14,520</strong> in unencumbered liquid savings for the first year.",
    descFa: "حداقل <strong>۱٬۲۱۰ یورو در ماه</strong> — حدود <strong>۱۴٬۵۲۰ یورو</strong> منابع مالی نقدشونده برای سال اول.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="12" r="9"/><path d="M9 8.5h5a2 2 0 0 1 0 4h-4a2 2 0 0 0 0 4h5M12 6v2M12 16v2"/></svg>,
  },
  {
    title: "Large Municipalities",
    titleFa: "شهرهای بزرگ",
    desc: "Minimum <strong>€1,090/month</strong> — approximately <strong>€13,080</strong> required for the first year in other major cities.",
    descFa: "حداقل <strong>۱٬۰۹۰ یورو در ماه</strong> — حدود <strong>۱۳٬۰۸۰ یورو</strong> برای سال اول.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  },
  {
    title: "Other Regions",
    titleFa: "سایر مناطق",
    desc: "Minimum <strong>€1,030/month</strong> — approximately <strong>€12,360</strong> for settling in smaller regions across Finland.",
    descFa: "حداقل <strong>۱٬۰۳۰ یورو در ماه</strong> — حدود <strong>۱۲٬۳۶۰ یورو</strong> برای استقرار در مناطق کوچک‌تر فنلاند.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>,
  },
  {
    title: "Family Members",
    titleFa: "اعضای خانواده",
    desc: "The required savings amount <strong>increases linearly</strong> for each additional family member joining your relocation.",
    descFa: "با اضافه شدن هر یک از اعضای خانواده، میزان منابع مالی موردنیاز نیز <strong>متناسب با تعداد افراد افزایش پیدا می‌کند</strong>.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/></svg>,
  },
];

const chips: { en: string; fa: string }[] = [
  { en: "Helsinki Metro", fa: "کلان‌شهر هلسینکی" },
  { en: "Large Municipalities", fa: "شهرداری‌های بزرگ" },
  { en: "Other Regions", fa: "سایر مناطق" },
  { en: "+Family", fa: "+خانواده" },
];

export default function FinancialRequirements() {
  const { t } = useLang();
  return (
    <section className="py-16 md:py-20 relative overflow-hidden" style={{ background: "#000" }}>
      {/* glow */}
      <div
        className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(143,39,255,0.3), transparent 65%)" }}
      />

      <Row>
        <Reveal variant="up" className="relative z-10 mb-10 md:mb-14">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-white text-center">
            {t("Financial & Capital Requirements", "الزامات مالی و سرمایه")}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-5 relative z-10">

          {/* Hero stat */}
          <Reveal variant="left" delay={100}>
            <div
              className="rounded-[20px] p-10 flex flex-col gap-5 h-full"
              style={{ background: "#0E0E10", border: "1px solid #1f1f24" }}
            >
              <span
                className="self-start text-[11px] font-bold tracking-[.12em] uppercase px-3.5 py-1.5 rounded-full"
                style={{ background: "rgba(255,230,0,0.12)", border: "1px solid rgba(255,230,0,0.3)", color: "#FFE600" }}
              >
                {t("Personal Savings Threshold", "حداقل میزان پس‌انداز شخصی")}
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-[72px] font-bold tracking-[-0.04em] leading-[0.9] text-white">{t("€14.5K", "۱۴٬۵۰۰ یورو")}</span>
              </div>
              <p className="text-[14px] leading-[1.65] m-0 max-w-[38ch]" style={{ color: "#B5B5BA" }}>
                {t("Required liquid personal savings for a single founder settling in the", "حداقل منابع مالی شخصی و نقدشونده برای یک بنیان‌گذار مجرد که قصد استقرار در")}{" "}
                <strong style={{ color: "#FFE600", fontWeight: 600 }}>{t("Helsinki Metropolitan Area", "منطقه کلان‌شهری هلسینکی")}</strong> {t("— sufficient to cover Year 1 living costs.", "را دارد؛ مبلغی که برای پوشش هزینه‌های زندگی سال اول در نظر گرفته می‌شود.")}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-[#1f1f24]">
                {chips.map((c) => (
                  <span
                    key={c.en}
                    className="text-[12px] px-3 py-1.5 rounded-full font-medium text-white transition-all duration-200 hover:border-white/30 cursor-default"
                    style={{ border: "1px solid #2a2a30" }}
                  >
                    {t(c.en, c.fa)}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Cards grid — hover: border purple + bg #150026 (طبق HTML اصلی) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {cards.map((c, i) => (
              <Reveal key={c.title} variant="up" delay={i * 80 + 150}>
                <div
                  className="group rounded-[14px] p-6 flex gap-5 items-start h-full cursor-default"
                  style={{
                    background: "#0E0E10",
                    border: "1px solid #1f1f24",
                    transition: "border-color 0.25s, background 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "#8F27FF";
                    (e.currentTarget as HTMLDivElement).style.background = "#150026";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "#1f1f24";
                    (e.currentTarget as HTMLDivElement).style.background = "#0E0E10";
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-[10px] flex items-center justify-center flex-shrink-0 text-[#8F27FF] transition-colors duration-250 group-hover:bg-[rgba(143,39,255,0.25)]"
                    style={{ background: "rgba(143,39,255,0.15)" }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <h4 className="text-[15px] font-semibold text-white mb-1.5 tracking-[-0.015em]">{t(c.title, c.titleFa)}</h4>
                    <p
                      className="text-[13px] leading-relaxed m-0"
                      style={{ color: "#B5B5BA" }}
                      dangerouslySetInnerHTML={{ __html: t(c.desc, c.descFa).replace(/<strong>/g, '<strong style="color:white;font-weight:600">') }}
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </Row>
    </section>
  );
}
