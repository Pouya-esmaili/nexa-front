"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/LazyReveal";
import { useLang } from "@/components/global/LanguageProvider";

const items = [
  { title: "Scalable Business Plan", titleFa: "طرح کسب‌وکار مقیاس‌پذیر", desc: "A strong, market-validated, and growth-oriented business plan.", descFa: "یک طرح کسب‌وکار قوی، تأییدشده توسط بازار و رشدمحور." },
  { title: "Net Worth & Capital", titleFa: "دارایی خالص و سرمایه", desc: "Sufficient personal net worth and investment capacity.", descFa: "دارایی خالص شخصی کافی و ظرفیت سرمایه‌گذاری." },
  { title: "Active Management", titleFa: "مدیریت فعال", desc: "Day-to-day operational involvement required.", descFa: "مشارکت عملیاتی روزانه الزامی است." },
  { title: "Language Proficiency", titleFa: "تسلط زبانی", desc: "English or French at the threshold required by stream.", descFa: "انگلیسی یا فرانسوی در سطح موردنیاز جریان." },
  { title: "Management Experience", titleFa: "تجربه‌ی مدیریتی", desc: "Prior business management or ownership history.", descFa: "سابقه‌ی پیشین مدیریت یا مالکیت کسب‌وکار." },
  { title: "Job Creation Focus", titleFa: "تمرکز بر ایجاد اشتغال", desc: "Many streams emphasize employment over fixed capital.", descFa: "بسیاری از جریان‌ها بر اشتغال بیش از سرمایه‌ی ثابت تأکید دارند." },
];

export default function EligibilityBasics() {
  const { t } = useLang();
  return (
    <section className="py-20 md:py-24 bg-[#F7F6F9]">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center mb-12">
            {t("Eligibility Basics", "اصول واجد بودن")}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <Reveal key={item.title} variant="up" delay={i * 80 + 100}>
              <div className="bg-white rounded-[14px] p-6 flex gap-4 items-start border border-[#E2E2E2] transition-all duration-250 hover:-translate-y-0.5 hover:shadow-sm"
                style={{ transition: "border-color 0.25s, transform 0.25s, box-shadow 0.25s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(143,39,255,0.3)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "#E2E2E2"; }}>
                <div className="flex-shrink-0 w-[38px] h-[38px] rounded-full bg-[#FAF6FF] text-[#8F27FF] grid place-items-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[16px] font-semibold tracking-[-0.015em] mb-1">{t(item.title, item.titleFa)}</h4>
                  <p className="text-[13.5px] text-[#929292] leading-[1.55]">{t(item.desc, item.descFa)}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Row>
    </section>
  );
}
