"use client";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const items = [
  {
    pill: "Economy",
    pillFa: "اقتصاد",
    title: "Attracts Foreign Investment",
    titleFa: "جذب سرمایه‌گذاری خارجی",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
  },
  {
    pill: "Growth",
    pillFa: "رشد",
    title: "Stimulates Economic Growth",
    titleFa: "تسریع رشد و توسعه اقتصادی",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
  },
  {
    pill: "Employment",
    pillFa: "اشتغال",
    title: "Creates New Jobs",
    titleFa: "ایجاد فرصت‌های شغلی جدید",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  },
  {
    pill: "Ecosystem",
    pillFa: "اکوسیستم",
    title: "Builds a Dynamic Ecosystem",
    titleFa: "تقویت اکوسیستم کسب‌وکار و نوآوری",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  },
];

export default function Impact() {
  const { t } = useLang();
  return (
    <section className="py-[90px] bg-black relative overflow-hidden">
      {/* Purple glow bottom-right */}
      <div
        className="pointer-events-none absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(circle,rgba(143,39,255,0.28),transparent 65%)" }}
      />
      {/* Yellow glow top-left */}
      <div
        className="pointer-events-none absolute top-[-60px] left-[-60px] w-[300px] h-[300px] rounded-full"
        style={{ background: "radial-gradient(circle,rgba(255,230,0,0.07),transparent 70%)" }}
      />

      <Row>
        <Reveal variant="up">
          <div className="text-center max-w-[700px] mx-auto mb-14">
            <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1] text-white">
              {t("How Programs Strengthen Countries", "تأثیر برنامه‌های کارآفرینی بر اقتصاد کشورها")}
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[14px] relative z-[1]">
          {items.map((item, i) => (
            <Reveal key={i} variant="up" delay={i * 80}>
              <div
                className="flex flex-col rounded-[16px] p-[28px_24px] transition-all duration-[250ms] cursor-default group"
                style={{ background: "#0E0E10", border: "1px solid #1f1f24" }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "#8F27FF";
                  el.style.background = "#120020";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "#1f1f24";
                  el.style.background = "#0E0E10";
                }}
              >
                {/* Yellow pill */}
                <span
                  className="inline-flex self-start items-center px-[10px] py-1 rounded-full text-[10px] font-bold tracking-[.1em] uppercase mb-[14px]"
                  style={{ background: "rgba(255,230,0,0.08)", border: "1px solid rgba(255,230,0,0.2)", color: "#FFE600" }}
                >
                  {t(item.pill, item.pillFa)}
                </span>
                {/* Icon box */}
                <div
                  className="w-11 h-11 rounded-[12px] grid place-items-center mb-4 transition-all duration-[250ms] group-hover:bg-[#8F27FF] group-hover:border-[#8F27FF]"
                  style={{ background: "rgba(143,39,255,0.12)", border: "1px solid rgba(143,39,255,0.2)" }}
                >
                  <span className="text-[#8F27FF] group-hover:text-white transition-colors">{item.icon}</span>
                </div>
                <h4 className="text-[14px] font-semibold text-white leading-[1.4] tracking-[-0.01em]">{t(item.title, item.titleFa)}</h4>
              </div>
            </Reveal>
          ))}
        </div>
      </Row>
    </section>
  );
}
