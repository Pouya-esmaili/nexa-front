"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const cards = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
    title: "3-Year Initial Runway",
    titleFa: "اقامت اولیه‌ ۳ ساله",
    desc: <span>Immediate residency issued for up to <strong className="text-black font-semibold">3 years</strong> when applied from inside Spain — or 1 year if processed via an overseas consulate.</span>,
    descFa: <span>در صورت درخواست از داخل اسپانیا، اقامت اولیه تا <strong className="text-black font-semibold">۳ سال</strong> صادر می‌شود؛ در حالی که درخواست‌های ارائه‌شده از طریق کنسولگری‌های خارج از اسپانیا، معمولاً اقامت اولیه یک‌ساله خواهند داشت.</span>,
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z"/></svg>,
    title: "20-Day Fast-Track",
    titleFa: "بررسی سریع ۲۰ روزه",
    desc: <span>By law, a strict <strong className="text-black font-semibold">silence-is-consent</strong> rule applies. If the UGE does not reply within 20 working days, the application is legally deemed approved.</span>,
    descFa: <span>طبق قانون، این مسیر مشمول اصل <strong className="text-black font-semibold">«تأیید در صورت عدم پاسخ»</strong> است. اگر واحد UGE ظرف ۲۰ روز کاری پاسخی به درخواست ندهد، درخواست از نظر قانونی تأییدشده تلقی می‌شود.</span>,
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    title: "Unified Family Inclusion",
    titleFa: "همراهی هم‌زمان خانواده",
    desc: <span>Spouses, civil partners, minor children, and financially dependent adult children included simultaneously with <strong className="text-black font-semibold">full work and business rights</strong>.</span>,
    descFa: <span>همسر، شریک زندگی، فرزندان زیر سن قانونی و فرزندان بزرگسالِ وابسته مالی می‌توانند هم‌زمان با متقاضی اصلی اقامت دریافت کنند و از <strong className="text-black font-semibold">حق کامل کار و فعالیت تجاری</strong> برخوردار باشند.</span>,
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
    title: "Schengen Mobility",
    titleFa: "آزادی تردد در شنگن",
    desc: <span>Travel freely throughout all <strong className="text-black font-semibold">29 Schengen countries</strong> for up to 90 days within any 180-day window.</span>,
    descFa: <span>امکان سفر آزادانه در سراسر <strong className="text-black font-semibold">۲۹ کشور عضو شنگن</strong> تا سقف ۹۰ روز در هر دوره ۱۸۰ روزه.</span>,
  },
];

export default function Benefits() {
  const { t, lang } = useLang();
  return (
    <section className="py-20 md:py-24 bg-white">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center mb-12">
            {t("The Program Benefits", "مزایای برنامه")}
          </h2>
        </Reveal>

        <div className="rounded-[20px] overflow-hidden border border-[#E2E2E2]">
          <div className="grid grid-cols-1 md:grid-cols-4">
            {cards.map((c, i) => (
              <Reveal key={c.title} variant="up" delay={i * 80}>
                <div
                  className="p-8 transition-colors duration-250 hover:bg-[#F7F6F9] h-full"
                  style={{
                    borderRight: i < 3 ? "1px solid #E2E2E2" : undefined,
                  }}
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
