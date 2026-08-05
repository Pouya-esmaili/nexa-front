"use client";

import { useState, useRef, useEffect } from "react";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const tiers = [
  {
    badge: "Spanish Government Bonds",
    badgeFa: "اوراق قرضه‌ی دولتی اسپانیا",
    badgeStyle: { background: "#E8F5E9", color: "#2E7D32", border: "1px solid #A5D6A7" },
    amount: "€2M",
    amountFa: "۲ میلیون یورو",
    sub: "Minimum Investment",
    subFa: "حداقل سرمایه‌گذاری",
    desc: "Spanish public debt instruments maintained for a minimum of 5 years. Highest capital threshold — lowest operational complexity.",
    descFa: "ابزارهای بدهی عمومی اسپانیا که حداقل ۵ سال نگهداری می‌شوند. بالاترین آستانه‌ی سرمایه — کم‌ترین پیچیدگی عملیاتی.",
    featured: false,
  },
  {
    badge: "Investment Funds / VC",
    badgeFa: "صندوق‌های سرمایه‌گذاری / سرمایه‌ی خطرپذیر",
    badgeStyle: { background: "#FAF6FF", color: "#8F27FF", border: "1px solid rgba(143,39,255,0.18)" },
    amount: "€1M",
    amountFa: "۱ میلیون یورو",
    sub: "Minimum Investment",
    subFa: "حداقل سرمایه‌گذاری",
    desc: (
      <>
        Shares of <strong className="text-black font-semibold">closed-end investment funds or venture capital funds</strong>{" "}
        (<em>Fondos de Capital Riesgo</em>) set up and actively registered in Spain.
      </>
    ),
    descFa: (
      <>
        سهام <strong className="text-black font-semibold">صندوق‌های سرمایه‌گذاری با سرمایه‌ی ثابت یا صندوق‌های سرمایه‌ی خطرپذیر</strong>{" "}
        (<em>Fondos de Capital Riesgo</em>) که در اسپانیا تأسیس و به‌طور فعال ثبت شده‌اند.
      </>
    ),
    featured: true,
  },
  {
    badge: "Corporate Equity",
    badgeFa: "سهام شرکتی",
    badgeStyle: { background: "#E3F2FD", color: "#1565C0", border: "1px solid #90CAF9" },
    amount: "€1M",
    amountFa: "۱ میلیون یورو",
    sub: "Minimum Investment",
    subFa: "حداقل سرمایه‌گذاری",
    desc: (
      <>
        Stocks or shares of <strong className="text-black font-semibold">active Spanish companies</strong> with a verifiable,
        real business presence and operational activity inside Spain.
      </>
    ),
    descFa: (
      <>
        سهام یا سهم <strong className="text-black font-semibold">شرکت‌های فعال اسپانیایی</strong> با حضور تجاری واقعی و
        قابل‌تأیید و فعالیت عملیاتی در داخل اسپانیا.
      </>
    ),
    featured: false,
  },
  {
    badge: "Bank Deposits",
    badgeFa: "سپرده‌های بانکی",
    badgeStyle: { background: "#FFF3E0", color: "#E65100", border: "1px solid #FFCC80" },
    amount: "€1M",
    amountFa: "۱ میلیون یورو",
    sub: "Minimum Investment",
    subFa: "حداقل سرمایه‌گذاری",
    desc: (
      <>
        Stable bank deposits within <strong className="text-black font-semibold">authorized Spanish financial institutions</strong>.
        Most liquid and straightforward capital deployment option.
      </>
    ),
    descFa: (
      <>
        سپرده‌های بانکی پایدار در <strong className="text-black font-semibold">مؤسسات مالی مجاز اسپانیایی</strong>.
        نقدشونده‌ترین و ساده‌ترین گزینه‌ی به‌کارگیری سرمایه.
      </>
    ),
    featured: false,
  },
];

export default function InvestmentTiers() {
  const { t, lang } = useLang();
  const [selected, setSelected] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (gridRef.current && !gridRef.current.contains(e.target as Node)) {
        setSelected(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="py-20 md:py-24 bg-white">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1] text-center mb-6">
            {t("Qualifying Financial Pathways & Thresholds", "مسیرهای مالی واجد شرایط و آستانه‌ها")}
          </h2>
        </Reveal>

        <Reveal variant="up" delay={60}>
          <p className="text-[16px] text-[#474747] leading-[1.65] max-w-[68ch] mx-auto text-center mb-12">
            {t("Real estate is", "املاک")} <strong className="text-black font-semibold">{t("no longer an eligible asset class", "دیگر یک طبقه‌ی دارایی واجد شرایط نیست")}</strong> {t("for new residency applications. The current framework welcomes capital into Spain's financial and corporate ecosystems across four qualifying channels.", "برای درخواست‌های اقامت جدید. چارچوب فعلی سرمایه را در چهار کانال واجد شرایط به اکوسیستم‌های مالی و شرکتی اسپانیا می‌پذیرد.")}
          </p>
        </Reveal>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tiers.map((tier, i) => {
            const isActive = selected === i;
            return (
            <Reveal key={i} variant="up" delay={i * 60}>
              <div
                onClick={() => setSelected((prev) => (prev === i ? null : i))}
                className="rounded-[20px] p-8 flex flex-col gap-4 h-full transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                style={{
                  background: isActive ? "#FAF6FF" : "#F7F6F9",
                  border: isActive ? "1.5px solid #8F27FF" : "1.5px solid #E2E2E2",
                  boxShadow: isActive ? "0 16px 40px rgba(143,39,255,0.08)" : "none",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = "#8F27FF";
                    el.style.boxShadow = "0 16px 40px rgba(143,39,255,0.08)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = "#E2E2E2";
                    el.style.boxShadow = "none";
                  }
                }}
              >
                <span
                  className="self-start text-[11px] font-bold uppercase tracking-[0.1em] px-3 py-1.5 rounded-full"
                  style={tier.badgeStyle}
                >
                  {t(tier.badge, tier.badgeFa)}
                </span>
                <div>
                  <div
                    className="font-extrabold leading-none tabular-nums"
                    style={{
                      fontSize: "52px",
                      letterSpacing: "-0.05em",
                      color: tier.featured ? "#8F27FF" : "#000",
                    }}
                  >
                    {t(tier.amount, tier.amountFa)}
                  </div>
                  <div className="text-[12px] font-semibold text-[#929292] uppercase tracking-[0.06em] mt-1">
                    {t(tier.sub, tier.subFa)}
                  </div>
                </div>
                <div
                  className="h-px"
                  style={{ background: tier.featured ? "rgba(143,39,255,0.18)" : "#E2E2E2" }}
                />
                <p className="text-[13.5px] text-[#474747] leading-[1.6] m-0">{lang === "fa" ? tier.descFa : tier.desc}</p>
              </div>
            </Reveal>
            );
          })}
        </div>
      </Row>
    </section>
  );
}
