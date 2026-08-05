"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const benefits = [
  {
    title: "Zero Personal Income Tax",
    titleFa: "مالیات بر درآمد شخصی صفر",
    desc: "The UAE operates a zero-bracket personal income tax regime. Salaries, dividends, capital gains, and investment returns are entirely untaxed at the individual level.",
    descFa: "امارات یک نظام مالیات بر درآمد شخصی با نرخ صفر دارد. حقوق، سود سهام، عایدی سرمایه و بازده سرمایه‌گذاری در سطح فردی به‌طور کامل بدون مالیات هستند.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M9 8.5h5a2 2 0 0 1 0 4h-4a2 2 0 0 0 0 4h5" />
      </svg>
    ),
  },
  {
    title: "No Local Sponsor Required",
    titleFa: "بدون نیاز به حامی محلی",
    desc: "The Golden Visa eliminates the historical Emirati sponsor requirement — providing complete operational autonomy and legal independence from day one.",
    descFa: "ویزای طلایی الزام تاریخی حامی اماراتی را حذف می‌کند — و از روز نخست استقلال عملیاتی کامل و استقلال حقوقی فراهم می‌کند.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "100% Corporate Ownership",
    titleFa: "مالکیت ۱۰۰٪ شرکتی",
    desc: "Full foreign ownership of UAE business entities is permitted. Establish or acquire domestic corporate structures with complete shareholding control and profit repatriation rights.",
    descFa: "مالکیت کامل خارجی نهادهای تجاری امارات مجاز است. ساختارهای شرکتی داخلی را با کنترل کامل سهام و حق بازگرداندن سود ایجاد یا تملک کنید.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    title: "Three-Generation Family Coverage",
    titleFa: "پوشش خانوادگی سه‌نسلی",
    desc: "Sponsor spouse, children of any age (unmarried daughters, sons with no age caps), domestic staff, and executive support personnel — all under one application.",
    descFa: "همسر، فرزندان در هر سنی (دختران مجرد، پسران بدون محدودیت سنی)، کارکنان خانگی و پرسنل پشتیبانی اجرایی را حمایت کنید — همه تحت یک درخواست.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Unrestricted Global Mobility",
    titleFa: "تحرک جهانی نامحدود",
    desc: "The Golden Visa explicitly waives the standard 6-month travel restriction. Remain outside the UAE indefinitely without risking your legal status, Emirates ID, or asset linkages.",
    descFa: "ویزای طلایی صراحتاً محدودیت سفر استاندارد ۶ ماهه را لغو می‌کند. بدون به‌خطر انداختن وضعیت قانونی، شناسه‌ی اماراتی یا پیوندهای دارایی خود، به‌طور نامحدود بیرون از امارات بمانید.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
      </svg>
    ),
  },
  {
    title: "Seamless Capital Mobility",
    titleFa: "تحرک بی‌وقفه‌ی سرمایه",
    desc: "The UAE enforces no restrictions on capital repatriation, profit transfers, or cross-border fund movements — full financial integration with international markets.",
    descFa: "امارات هیچ محدودیتی بر بازگرداندن سرمایه، انتقال سود یا جابه‌جایی وجوه فرامرزی اعمال نمی‌کند — یکپارچگی مالی کامل با بازارهای بین‌المللی.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" />
      </svg>
    ),
  },
];

export default function Benefits() {
  const { t } = useLang();
  return (
    <section className="py-20 md:py-24 bg-white">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1] text-center mb-14">
            {t("Program Advantages & Strategic Benefits", "مزایای برنامه و منافع راهبردی")}
          </h2>
        </Reveal>

        {/* Desktop grid */}
        <Reveal variant="up" delay={60}>
          <div
            className="hidden md:grid grid-cols-3 overflow-hidden rounded-[20px]"
            style={{ border: "1px solid #E2E2E2" }}
          >
            {benefits.map((b, i) => (
              <div
                key={i}
                className="p-9 transition-colors duration-200 hover:bg-[#F7F6F9]"
                style={{
                  borderRight: (i + 1) % 3 !== 0 ? "1px solid #E2E2E2" : "none",
                  borderBottom: i < 3 ? "1px solid #E2E2E2" : "none",
                }}
              >
                <div
                  className="w-12 h-12 rounded-[12px] flex items-center justify-center mb-5"
                  style={{ background: "#FAF6FF", color: "#8F27FF" }}
                >
                  <span className="w-6 h-6">{b.icon}</span>
                </div>
                <h3 className="text-[16px] font-semibold text-black mb-2 tracking-[-0.015em]">
                  {t(b.title, b.titleFa)}
                </h3>
                <p className="text-[13.5px] text-[#929292] leading-[1.6] m-0">{t(b.desc, b.descFa)}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Mobile stack */}
        <div className="md:hidden flex flex-col gap-0 rounded-[20px] overflow-hidden" style={{ border: "1px solid #E2E2E2" }}>
          {benefits.map((b, i) => (
            <Reveal key={i} variant="up" delay={i * 60}>
              <div
                className="p-6 bg-white"
                style={{ borderBottom: i < benefits.length - 1 ? "1px solid #E2E2E2" : "none" }}
              >
                <div
                  className="w-11 h-11 rounded-[10px] flex items-center justify-center mb-4"
                  style={{ background: "#FAF6FF", color: "#8F27FF" }}
                >
                  <span className="w-5 h-5">{b.icon}</span>
                </div>
                <h3 className="text-[15px] font-semibold text-black mb-1.5">{t(b.title, b.titleFa)}</h3>
                <p className="text-[13px] text-[#929292] leading-[1.6] m-0">{t(b.desc, b.descFa)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Row>
    </section>
  );
}
