"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/LazyReveal";
import { useLang } from "@/components/global/LanguageProvider";

const cards = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
    title: "Globally Credible",
    titleFa: "معتبر در سطح جهانی",
    desc: "A G7 nation delivering economic stability and worldwide credibility.",
    descFa: "کشوری عضو G7 که ثبات اقتصادی و اعتبار جهانی ارائه می‌دهد.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
    title: "Innovation-First",
    titleFa: "نوآوری‌محور",
    desc: "One of the world's most entrepreneurial immigration ecosystems.",
    descFa: "یکی از کارآفرین‌ترین اکوسیستم‌های مهاجرتی جهان.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    title: "Strategic Location",
    titleFa: "موقعیت راهبردی",
    desc: "A bridge between U.S. capital flows and European trade corridors.",
    descFa: "پلی میان جریان‌های سرمایه‌ی آمریکا و کریدورهای تجاری اروپا.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
    title: "Capital Networks",
    titleFa: "شبکه‌های سرمایه",
    desc: "Access to VCs, angels, incubators, and accelerators.",
    descFa: "دسترسی به سرمایه‌گذاران خطرپذیر، فرشتگان، مراکز رشد و شتاب‌دهنده‌ها.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
    title: "Quality of Life",
    titleFa: "کیفیت زندگی",
    desc: "A multicultural consumer base with reach into global markets.",
    descFa: "پایگاه مصرف‌کننده‌ی چندفرهنگی با دسترسی به بازارهای جهانی.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    title: "Stage-Aware",
    titleFa: "متناسب با مرحله",
    desc: "Programs supporting seed, growth, and scale-up companies alike.",
    descFa: "برنامه‌هایی که از شرکت‌های در مرحله‌ی بذری، رشد و مقیاس‌دهی به‌طور یکسان پشتیبانی می‌کنند.",
  },
];

export default function WhyCanada() {
  const { t } = useLang();
  return (
    <section className="py-20 md:py-24 bg-white">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center mb-14">
            {t("Why Canada", "چرا کانادا")}
          </h2>
        </Reveal>

        <div className="rounded-[20px] overflow-hidden border border-[#E2E2E2]">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {cards.map((c, i) => (
              <Reveal key={c.title} variant="up" delay={i * 80}>
                <div
                  className="p-9 transition-colors duration-250 hover:bg-[#F7F6F9]"
                  style={{
                    borderRight: (i + 1) % 3 !== 0 ? "1px solid #E2E2E2" : undefined,
                    borderBottom: i < 3 ? "1px solid #E2E2E2" : undefined,
                  }}
                >
                  <div className="w-12 h-12 rounded-[12px] grid place-items-center bg-[#FAF6FF] text-[#8F27FF] mb-5">
                    {c.icon}
                  </div>
                  <h3 className="text-[18px] font-semibold tracking-[-0.015em] mb-2">{t(c.title, c.titleFa)}</h3>
                  <p className="text-[14.5px] text-[#929292] leading-[1.6]">{t(c.desc, c.descFa)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Row>
    </section>
  );
}
