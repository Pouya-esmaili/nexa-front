"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const tiers = [
  {
    badge: "Prime Markets", badgeFa: "مناطق ممتاز", badgeStyle: "bg-[#F4F4F4] text-[#474747]",
    amount: "€800K", amountFa: "€۸۰۰,۰۰۰", label: "Single Property — Prime Zones", labelFa: "خرید یک ملک در مناطق منتخب",
    featured: false,
    geo: "Geographic Allocation", geoFa: "مناطق مشمول:",
    zones: "Entire Region of Attica (Greater Athens & Piraeus), Thessaloniki, Mykonos, Santorini, all islands with population over 3,100 (Crete, Rhodes, Corfu, Paros).",
    zonesFa: "کل منطقه آتیکا، شامل آتن بزرگ و پیرائوس، تسالونیکی، میکونوس، سانتورینی و جزایری با جمعیت بیش از ۳۱۰۰ نفر مانند کرت، رودس، کورفو و پاروس.",
    rules: [
      { en: "Single, discrete property — no portfolio bundling", fa: "سرمایه‌گذاری باید روی یک ملک واحد انجام شود و امکان تجمیع چند ملک وجود ندارد." },
      { en: "Minimum living area of 120 m²", fa: "حداقل مساحت ملک باید ۱۲۰ مترمربع باشد." },
    ],
  },
  {
    badge: "Regional Emerging", badgeFa: "مناطق در حال توسعه", badgeStyle: "bg-[#8F27FF] text-white",
    amount: "€400K", amountFa: "€۴۰۰,۰۰۰", label: "Single Property — Regional Zones", labelFa: "خرید یک ملک در مناطق واجد شرایط",
    featured: true,
    geo: "Geographic Allocation", geoFa: "مناطق مشمول:",
    zones: "Mainland Greece outside Attica/Thessaloniki. Regional coastal areas and secondary municipal markets. Minor islands with population under 3,100.",
    zonesFa: "این دسته شامل مناطق سرزمین اصلی یونان خارج از آتیکا و تسالونیکی، مناطق ساحلی و بازارهای منطقه‌ای و همچنین جزایر کوچک با جمعیت کمتر از ۳۱۰۰ نفر است.",
    rules: [
      { en: "Single, discrete property — no portfolio bundling", fa: "سرمایه‌گذاری باید روی یک ملک واحد انجام شود." },
      { en: "Minimum living area of 120 m²", fa: "حداقل مساحت ملک ۱۲۰ مترمربع است." },
    ],
  },
  {
    badge: "Special Category", badgeFa: "دسته ویژه", badgeStyle: "bg-[#FFFBE6] text-[#7A6800] border border-[#F0D800]",
    amount: "€250K", amountFa: "€۲۵۰,۰۰۰", label: "Conversion or Heritage — Nationwide", labelFa: "تبدیل ملک یا ساختمان‌های میراثی",
    featured: false,
    geo: "Available Anywhere in Greece", geoFa: "در دسترس در سراسر یونان",
    zones: "Valid in prime central Athens, Piraeus, or elite islands. Two qualifying asset types only.",
    zonesFa: "این مسیر در سراسر یونان قابل استفاده است و برای دو نوع دارایی تعریف شده است:",
    rules: [
      { en: "Asset Rule A: Commercial-to-residential conversion — completed before filing", fa: "تبدیل ملک تجاری به مسکونی: فرآیند تبدیل باید پیش از ثبت درخواست اقامت تکمیل شده باشد." },
      { en: "Asset Rule B: Heritage/monument building with full restoration before first renewal", fa: "ساختمان‌های تاریخی یا میراثی: ساختمان باید پیش از نخستین تمدید اقامت، به‌طور کامل مرمت شود." },
    ],
  },
];

export default function Tiers() {
  const { t: tr } = useLang();
  return (
    <section className="py-20 md:py-24 bg-[#F7F6F9]">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center mb-5">
            {tr("Investment Architecture & Tier System", "ساختار سرمایه‌گذاری و سطوح مختلف برنامه")}
          </h2>
          <p className="text-[16px] text-[#474747] leading-[1.65] max-w-[68ch] mx-auto text-center mb-12">
            {tr("Following", "بر اساس")} <strong className="text-black">{tr("Law 5100/2024", "قانون ۵۱۰۰/۲۰۲۴")}</strong>{tr(", the program operates under a geographic and asset-class tiered framework. Each tier carries strict structural requirements — not just a capital floor.", "، حداقل سرمایه موردنیاز بسته به موقعیت جغرافیایی و نوع دارایی متفاوت است. بنابراین صرف تأمین مبلغ سرمایه کافی نیست و نوع و محل سرمایه‌گذاری نیز باید با الزامات قانونی مطابقت داشته باشد.")}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {tiers.map((t, i) => (
            <Reveal key={t.badge} variant="up" delay={i * 80}>
              <div className={`rounded-[20px] p-9 flex flex-col gap-5 border-[1.5px] transition-all duration-200 hover:-translate-y-1 ${
                t.featured
                  ? "border-[#8F27FF] bg-[#FAF6FF] hover:shadow-[0_20px_48px_rgba(143,39,255,0.12)]"
                  : "border-[#E2E2E2] bg-white hover:border-[#8F27FF] hover:shadow-[0_20px_48px_rgba(143,39,255,0.08)]"
              }`}>
                <span className={`self-start text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${t.badgeStyle}`}>
                  {tr(t.badge, t.badgeFa)}
                </span>
                <div>
                  <div className={`text-[52px] font-extrabold tracking-[-0.05em] leading-none ${t.featured ? "text-[#8F27FF]" : "text-black"}`}>
                    {tr(t.amount, t.amountFa)}
                  </div>
                  <div className="text-[14px] font-semibold text-black mt-1">{tr(t.label, t.labelFa)}</div>
                </div>
                <div className="h-px bg-[#E2E2E2]" />
                <div>
                  <div className="text-[11px] font-bold text-[#929292] uppercase tracking-widest mb-2">{tr(t.geo, t.geoFa)}</div>
                  <p className="text-[13.5px] text-[#474747] leading-[1.6]">{tr(t.zones, t.zonesFa)}</p>
                </div>
                <ul className="flex flex-col gap-2">
                  {t.rules.map((r) => (
                    <li key={r.en} className="flex items-start gap-2 text-[13px] text-[#929292] leading-[1.5]">
                      <span className="text-[#8F27FF] font-bold flex-shrink-0 mt-0.5">→</span>
                      {tr(r.en, r.fa)}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Alternative route */}
        <Reveal variant="up" delay={100}>
          <div className="rounded-[20px] bg-black p-9 flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="w-14 h-14 rounded-[14px] flex items-center justify-center flex-shrink-0 text-[#8F27FF]"
              style={{ background: "rgba(143,39,255,0.2)", border: "1px solid rgba(143,39,255,0.4)" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                <rect x="3" y="6" width="18" height="12" rx="1.5"/><path d="M3 10h18M7 14h3"/>
              </svg>
            </div>
            <div className="flex-1">
              <div className="text-[11px] font-bold text-white/50 uppercase tracking-widest mb-2">{tr("Alternative Route — Financial Instruments", "مسیر جایگزین؛ سرمایه‌گذاری مالی")}</div>
              <div className="text-[20px] font-bold text-white tracking-tight mb-1">{tr("Fixed-Term Deposit or Greek Government Bonds", "سپرده مدت‌دار یا اوراق قرضه دولتی یونان")}</div>
              <p className="text-[13.5px] text-white/60 leading-[1.6]">
                {tr("For investors preferring an asset class free of property maintenance. Capital must be placed in a Greek credit institution for minimum 1 year (auto-renewing), or in Greek government bonds with at least 3 years remaining maturity.", "سرمایه‌گذارانی که تمایلی به خرید و نگهداری ملک ندارند، می‌توانند از برخی ابزارهای مالی واجد شرایط استفاده کنند. امکان سرمایه‌گذاری از طریق سپرده مدت‌دار در یک مؤسسه اعتباری یونانی با حداقل دوره یک‌ساله یا اوراق قرضه دولتی یونان با حداقل سه سال زمان باقی‌مانده وجود دارد.")}
              </p>
            </div>
            <div className="text-[36px] font-extrabold text-[#FFE600] tracking-[-0.04em] whitespace-nowrap">{tr("€500K", "€۵۰۰,۰۰۰")}</div>
          </div>
        </Reveal>
      </Row>
    </section>
  );
}
