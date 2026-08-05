"use client";

import { useState } from "react";
import Row from "@/components/global/Row";
import { useLang } from "@/components/global/LanguageProvider";

const steps = [
  {
    id: 1,
    num: "01",
    title: "Expression of Interest",
    titleFa: "اعلام علاقه‌مندی",
    time: "Immediate · 1–4 mo draw",
    timeFa: "فوری · قرعه‌کشی ۱ تا ۴ ماهه",
    detail: {
      title: "Expression of Interest (EOI)",
      titleFa: "اعلام علاقه‌مندی (EOI)",
      desc: "Most provinces require candidates to submit an Expression of Interest. You're scored on several weighted factors before receiving an invitation.",
      descFa: "بیشتر استان‌ها از داوطلبان می‌خواهند یک اعلام علاقه‌مندی ثبت کنند. پیش از دریافت دعوت، بر اساس چند عامل وزن‌دار امتیازدهی می‌شوید.",
      items: [
        "Net worth & investment amount",
        "Business experience & language",
        "Proposed location (urban / regional)",
        "Sector & economic alignment",
      ],
      itemsFa: [
        "دارایی خالص و مبلغ سرمایه‌گذاری",
        "تجربه‌ی کسب‌وکار و زبان",
        "مکان پیشنهادی (شهری / منطقه‌ای)",
        "حوزه و همسویی اقتصادی",
      ],
    },
  },
  {
    id: 2,
    num: "02",
    title: "Invitation & Plan",
    titleFa: "دعوت و طرح",
    time: "4–8 months review",
    timeFa: "بررسی ۴ تا ۸ ماهه",
    detail: {
      title: "Invitation & Business Plan",
      titleFa: "دعوت و طرح کسب‌وکار",
      desc: "If your score ranks competitively, you receive an Invitation to Apply (ITA) and submit your full application.",
      descFa: "اگر امتیاز شما رقابتی رتبه‌بندی شود، یک دعوت به درخواست (ITA) دریافت می‌کنید و درخواست کامل خود را ثبت می‌کنید.",
      items: [
        "Detailed business plan",
        "Net worth verification report",
        "Supporting documentation",
        "Interview (some provinces)",
      ],
      itemsFa: [
        "طرح کسب‌وکار مفصل",
        "گزارش راستی‌آزمایی دارایی خالص",
        "مستندات پشتیبان",
        "مصاحبه (برخی استان‌ها)",
      ],
    },
  },
  {
    id: 3,
    num: "03",
    title: "Work Permit",
    titleFa: "مجوز کار",
    time: "2–5 months IRCC",
    timeFa: "۲ تا ۵ ماه IRCC",
    detail: {
      title: "Performance Agreement & Work Permit",
      titleFa: "توافق‌نامه‌ی عملکرد و مجوز کار",
      desc: "Upon provincial approval, you sign a Business Performance Agreement and apply for a temporary work permit through IRCC.",
      descFa: "پس از تأیید استانی، یک توافق‌نامه‌ی عملکرد کسب‌وکار امضا می‌کنید و برای یک مجوز کار موقت از طریق IRCC درخواست می‌دهید.",
      items: [
        "Business Performance Agreement",
        "Letter of Support issued",
        "Federal work permit (2–5 mo)",
        "Move to the province",
      ],
      itemsFa: [
        "توافق‌نامه‌ی عملکرد کسب‌وکار",
        "صدور نامه‌ی پشتیبانی",
        "مجوز کار فدرال (۲ تا ۵ ماه)",
        "نقل‌مکان به استان",
      ],
    },
  },
  {
    id: 4,
    num: "04",
    title: "Operate & Nominate",
    titleFa: "بهره‌برداری و نامزدی",
    time: "12–20 months",
    timeFa: "۱۲ تا ۲۰ ماه",
    detail: {
      title: "Business Operation & Nomination",
      titleFa: "بهره‌برداری کسب‌وکار و نامزدی",
      desc: "You have 12–20 months to invest committed capital, establish operations, create required jobs, and meet performance milestones.",
      descFa: "شما ۱۲ تا ۲۰ ماه فرصت دارید تا سرمایه‌ی متعهدشده را سرمایه‌گذاری کنید، عملیات را برقرار کنید، مشاغل موردنیاز را ایجاد کنید و نقاط عطف عملکرد را برآورده سازید.",
      items: [
        "Invest committed capital",
        "Establish operations",
        "Create required jobs",
        "Meet performance milestones",
      ],
      itemsFa: [
        "سرمایه‌گذاری سرمایه‌ی متعهدشده",
        "برقراری عملیات",
        "ایجاد مشاغل موردنیاز",
        "برآورده کردن نقاط عطف عملکرد",
      ],
    },
  },
  {
    id: 5,
    num: "05",
    title: "Permanent Residence",
    titleFa: "اقامت دائم",
    time: "16–18+ months",
    timeFa: "بیش از ۱۶ تا ۱۸ ماه",
    detail: {
      title: "Apply for Permanent Residence",
      titleFa: "درخواست اقامت دائم",
      desc: "The province nominates you for Permanent Residence. You then apply federally for PR — timing depends on IRCC workload.",
      descFa: "استان شما را برای اقامت دائم نامزد می‌کند. سپس به‌صورت فدرال برای اقامت دائم درخواست می‌دهید — زمان‌بندی به حجم کاری IRCC بستگی دارد.",
      items: [
        "Provincial nomination certificate",
        "Federal PR application",
        "IRCC processing 16–18+ months",
        "Final PR landing",
      ],
      itemsFa: [
        "گواهی نامزدی استانی",
        "درخواست اقامت دائم فدرال",
        "پردازش IRCC بیش از ۱۶ تا ۱۸ ماه",
        "ورود نهایی اقامت دائم",
      ],
    },
  },
];

export default function ProcessTimeline() {
  const { t } = useLang();
  const [activeId, setActiveId] = useState(1);
  const current = steps.find((s) => s.id === activeId)!;

  return (
    <section className="py-16 md:py-24 bg-white" id="process">

      {/* ========== MOBILE ========== */}
      <div className="md:hidden px-5">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-8">
          {t("The Standard Provincial Structure", "ساختار استاندارد استانی")}
        </h2>
        <div className="flex flex-col gap-3">
          {steps.map((s) => {
            const isActive = activeId === s.id;
            return (
              <div
                key={s.id}
                onClick={() => setActiveId(s.id)}
                className="cursor-pointer p-4 rounded-2xl border transition-all"
                style={{
                  borderColor: isActive ? "#8F27FF" : "#E2E2E2",
                  background: isActive ? "#FAF6FF" : "white",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-bold transition-all"
                    style={{
                      background: isActive ? "#8F27FF" : "white",
                      color: isActive ? "white" : "#8F27FF",
                      border: "2px solid #8F27FF",
                    }}
                  >
                    {s.num}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-black">{t(s.title, s.titleFa)}</div>
                    <div className="text-xs text-gray-500">{t(s.time, s.timeFa)}</div>
                  </div>
                </div>
                {isActive && (
                  <div className="mt-3 pt-3 border-t border-[#8F27FF]/20">
                    <p className="text-sm text-gray-700 leading-relaxed mb-3">{t(s.detail.desc, s.detail.descFa)}</p>
                    <ul className="flex flex-col gap-1.5">
                      {s.detail.items.map((item, ii) => (
                        <li key={item} className="text-xs text-gray-700 pl-5 relative">
                          <span className="absolute left-0 text-[#8F27FF] font-bold">✓</span>
                          {t(item, s.detail.itemsFa[ii])}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ========== DESKTOP ========== */}
      <div className="hidden md:block">
        <Row>
          <h2 className="text-4xl font-bold tracking-tight text-center mb-12">
            {t("The Standard Provincial Structure", "ساختار استاندارد استانی")}
          </h2>

          <div
            className="rounded-[28px] p-12 border border-gray-200"
            style={{ background: "#FAF6FF" }}
          >
            {/* Step circles */}
            <div className="relative grid grid-cols-5 gap-2">
              <div
                className="absolute top-10 left-[8%] right-[8%] h-0.5 z-0"
                style={{ background: "#8F27FF", opacity: 0.2 }}
              />
              {steps.map((s) => {
                const isActive = activeId === s.id;
                return (
                  <div
                    key={s.id}
                    onClick={() => setActiveId(s.id)}
                    className="relative z-10 text-center cursor-pointer"
                  >
                    <div
                      className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-[26px] font-bold tracking-tight transition-all"
                      style={{
                        background: isActive ? "#8F27FF" : "white",
                        color: isActive ? "white" : "#8F27FF",
                        border: "2.5px solid #8F27FF",
                        transform: isActive ? "scale(1.08)" : undefined,
                        boxShadow: isActive
                          ? "0 0 0 5px #FAF6FF, 0 8px 24px rgba(143,39,255,0.3)"
                          : "0 0 0 5px #FAF6FF, 0 4px 14px rgba(143,39,255,0.15)",
                      }}
                    >
                      {s.num}
                    </div>
                    <div className="text-[15px] font-semibold text-black mb-1">{t(s.title, s.titleFa)}</div>
                    <div className="text-[12px] text-gray-500 font-medium">{t(s.time, s.timeFa)}</div>
                  </div>
                );
              })}
            </div>

            {/* Detail panel */}
            <div
              className="mt-9 bg-white rounded-2xl p-7 border border-gray-200 min-h-[140px]"
              style={{ borderLeft: "4px solid #8F27FF" }}
            >
              <h3 className="text-[22px] font-bold text-black mb-2.5 tracking-tight">{t(current.detail.title, current.detail.titleFa)}</h3>
              <p className="text-[15px] text-[#474747] leading-[1.65] mb-4">{t(current.detail.desc, current.detail.descFa)}</p>
              <ul className="grid grid-cols-2 gap-2.5">
                {current.detail.items.map((item, ii) => (
                  <li key={item} className="text-[14px] text-[#474747] pl-6 relative">
                    <span className="absolute left-0 text-[#8F27FF] font-bold">✓</span>
                    {t(item, current.detail.itemsFa[ii])}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </Row>
      </div>

    </section>
  );
}
