"use client";

import { useRef, type ReactNode } from "react";
import Link from "next/link";
import { useStaggerReveal } from "./useStaggerReveal";
import { useLang } from "@/components/global/LanguageProvider";

type Card = { tone: string; href: string; diag: ReactNode; title: ReactNode; desc: string };

const CARDS: Card[] = [
  {
    tone: "sc-dark",
    href: "/advisory/business-model-design",
    title: <>Business<br />Model Design</>,
    desc: "Revenue logic, cost structure and value flow — mapped so investors see exactly how the business makes money.",
    diag: (
      <svg className="sc-diag" viewBox="0 0 160 100" fill="none"><rect x="2" y="2" width="70" height="46" rx="10" fill="#8F27FF" opacity=".9" /><rect x="80" y="2" width="78" height="46" rx="10" fill="#FFE600" opacity=".9" /><rect x="2" y="56" width="44" height="42" rx="10" fill="#fff" opacity=".12" /><rect x="54" y="56" width="46" height="42" rx="10" fill="#fff" opacity=".2" /><rect x="108" y="56" width="50" height="42" rx="10" fill="#8F27FF" opacity=".5" /></svg>
    ),
  },
  {
    tone: "sc-light",
    href: "/advisory/brand-strategy",
    title: <>Brand<br />Strategy</>,
    desc: "Positioning and voice defined clearly enough that everyone on your team can repeat it.",
    diag: (
      <svg className="sc-diag" viewBox="0 0 160 100" fill="none"><circle cx="80" cy="50" r="46" stroke="#8F27FF" strokeOpacity=".35" strokeWidth="3" /><circle cx="80" cy="50" r="30" fill="#8F27FF" fillOpacity=".1" stroke="#8F27FF" strokeOpacity=".6" strokeWidth="3" /><circle cx="80" cy="50" r="14" stroke="#8F27FF" strokeWidth="3" /><circle cx="80" cy="50" r="5" fill="#FFE600" /></svg>
    ),
  },
  {
    tone: "sc-dark",
    href: "/advisory/go-to-market-strategy",
    title: <>Go‑To‑Market<br />Strategy</>,
    desc: "Which channel first, what price, in what order — a roadmap not a checklist.",
    diag: (
      <svg className="sc-diag" viewBox="0 0 160 100" fill="none"><path d="M8 88 Q 80 88 152 12" stroke="#8F27FF" strokeWidth="4" fill="none" strokeLinecap="round" opacity=".9" /><circle cx="8" cy="88" r="6" fill="#7A1FE0" opacity=".85" /><circle cx="45" cy="72" r="4" fill="#FFE600" opacity=".8" /><circle cx="80" cy="50" r="6" fill="#FFE600" opacity=".9" /><circle cx="118" cy="30" r="4" fill="#8F27FF" opacity=".7" /><circle cx="152" cy="12" r="10" fill="#FFE600" stroke="#8F27FF" strokeWidth="2" /></svg>
    ),
  },
  // {
  //   tone: "sc-light",
  //   href: "/advisory/marketing-strategy",
  //   title: <>Marketing Strategy<br />&amp; Planning</>,
  //   desc: "A calendar and budget connected back to the funnel — spend with a reason attached.",
  //   diag: (
  //     <svg className="sc-diag" viewBox="0 0 160 100" fill="none"><path d="M8 8 L96 8 L64 92 L8 92 Z" fill="#8F27FF" opacity=".85" /><circle cx="130" cy="26" r="12" fill="#FFE600" /><circle cx="130" cy="56" r="8" fill="#8F27FF" opacity=".5" /><circle cx="130" cy="80" r="5" fill="#1a1a1a" opacity=".3" /></svg>
  //   ),
  // },
  {
    tone: "sc-light",
    href: "/advisory/market-analysis",
    title: <>Market<br />Analysis</>,
    desc: "Real numbers on size, competitors and demand — strategy built on data, not assumption.",
    diag: (
      <svg className="sc-diag" viewBox="0 0 160 100" fill="none"><rect x="10" y="56" width="18" height="38" rx="5" fill="#8F27FF" opacity=".9" /><rect x="36" y="36" width="18" height="58" rx="5" fill="#7A1FE0" opacity=".8" /><rect x="62" y="14" width="18" height="80" rx="5" fill="#1a1a1a" opacity=".85" /><rect x="88" y="44" width="18" height="50" rx="5" fill="#7A1FE0" opacity=".7" /><circle cx="130" cy="28" r="18" stroke="#FFE600" strokeWidth="3" /><line x1="143" y1="41" x2="155" y2="53" stroke="#FFE600" strokeWidth="4" strokeLinecap="round" /></svg>
    ),
  },
  {
    tone: "sc-dark",
    href: "/advisory/visual-identity",
    title: <>Visual<br />Identity</>,
    desc: "Logo, color and type system built to hold up on a pitch deck and a billboard alike.",
    diag: (
      <svg className="sc-diag" viewBox="0 0 160 100" fill="none"><circle cx="22" cy="30" r="18" fill="#8F27FF" /><circle cx="60" cy="30" r="18" fill="#FFE600" /><circle cx="98" cy="30" r="18" fill="#7A1FE0" /><text x="10" y="90" fontFamily="Inter,sans-serif" fontWeight="900" fontSize="40" fill="#fff" opacity=".9">Aa</text><text x="100" y="86" fontFamily="Inter,sans-serif" fontWeight="400" fontSize="28" fill="#fff" opacity=".4">Aa</text></svg>
    ),
  },
  {
    tone: "sc-light",
    href: "/advisory/web-design",
    title: <>Web<br />Design</>,
    desc: "Structured for conversion first, responsive from day one, matched to the brand exactly.",
    diag: (
      <svg className="sc-diag" viewBox="0 0 160 100" fill="none"><rect x="2" y="2" width="156" height="96" rx="10" stroke="#8F27FF" strokeWidth="2" strokeOpacity=".4" /><circle cx="16" cy="14" r="4" fill="#FFE600" /><circle cx="28" cy="14" r="4" fill="#8F27FF" opacity=".6" /><circle cx="40" cy="14" r="4" fill="#7A1FE0" opacity=".4" /><rect x="10" y="26" width="140" height="24" rx="6" fill="#8F27FF" opacity=".2" /><rect x="10" y="56" width="64" height="34" rx="6" stroke="#8F27FF" strokeOpacity=".4" strokeWidth="1.5" /><rect x="84" y="56" width="66" height="34" rx="6" stroke="#8F27FF" strokeOpacity=".4" strokeWidth="1.5" /></svg>
    ),
  },
  {
    tone: "sc-dark",
    href: "/advisory/content-creation",
    title: <>Content<br />Creation</>,
    desc: "Copy, visuals and campaign assets that keep the brand consistent across every channel.",
    diag: (
      <svg className="sc-diag" viewBox="0 0 160 100" fill="none"><rect x="2" y="28" width="62" height="66" rx="8" fill="#8F27FF" opacity=".22" /><rect x="16" y="14" width="62" height="66" rx="8" fill="#FFE600" opacity=".22" /><rect x="30" y="2" width="62" height="66" rx="8" fill="#fff" /><polygon points="48,18 48,46 72,32" fill="#8F27FF" /><line x1="104" y1="14" x2="156" y2="14" stroke="#8F27FF" strokeOpacity=".75" strokeWidth="4" strokeLinecap="round" /><line x1="104" y1="30" x2="148" y2="30" stroke="#FFE600" strokeOpacity=".8" strokeWidth="4" strokeLinecap="round" /><line x1="104" y1="46" x2="140" y2="46" stroke="#8F27FF" strokeOpacity=".45" strokeWidth="4" strokeLinecap="round" /><line x1="104" y1="62" x2="152" y2="62" stroke="#FFE600" strokeOpacity=".75" strokeWidth="4" strokeLinecap="round" /></svg>
    ),
  },
  {
    tone: "sc-light",
    href: "#contact",
    title: <>Business<br />Documentation</>,
    desc: "A complete, investor-ready business plan, pitch deck, revenue projections, and cost forecasts laid out in the documents.",
    diag: (
      <svg className="sc-diag" viewBox="0 0 160 100" fill="none"><rect x="20" y="6" width="88" height="88" rx="10" fill="#fff" opacity=".08" /><rect x="20" y="6" width="88" height="88" rx="10" stroke="#fff" strokeOpacity=".25" strokeWidth="2" /><line x1="34" y1="26" x2="94" y2="26" stroke="#FFE600" strokeWidth="4" strokeLinecap="round" /><line x1="34" y1="42" x2="84" y2="42" stroke="#fff" strokeOpacity=".5" strokeWidth="4" strokeLinecap="round" /><line x1="34" y1="58" x2="90" y2="58" stroke="#fff" strokeOpacity=".3" strokeWidth="4" strokeLinecap="round" /><line x1="34" y1="74" x2="70" y2="74" stroke="#8F27FF" strokeWidth="4" strokeLinecap="round" /><circle cx="130" cy="70" r="20" fill="#8F27FF" /><path d="M122 70l6 6 12-14" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
    ),
  },
  // {
  //   tone: "sc-light",
  //   href: "#contact",
  //   title: <>Financial<br />Model</>,
  //   desc: "Revenue projections, cost forecasts and cash-flow modeling built to stand up to investor scrutiny.",
  //   diag: (
  //     <svg className="sc-diag" viewBox="0 0 160 100" fill="none"><line x1="14" y1="10" x2="14" y2="90" stroke="#E2E2E2" strokeWidth="2" /><line x1="14" y1="90" x2="150" y2="90" stroke="#E2E2E2" strokeWidth="2" /><polyline points="14,78 40,66 66,70 92,42 118,48 146,14" fill="none" stroke="#8F27FF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><circle cx="92" cy="42" r="4" fill="#8F27FF" /><circle cx="40" cy="66" r="4" fill="#8F27FF" opacity=".5" /><circle cx="146" cy="14" r="6" fill="#FFE600" stroke="#8F27FF" strokeWidth="2" /></svg>
  //   ),
  // },
];

/* Persian titles & descriptions, indexed to CARDS */
const TITLES_FA: ReactNode[] = [
  <>طراحی<br />مدل کسب‌وکار</>,
  <>استراتژی<br />برند</>,
  <>استراتژی<br />ورود به بازار</>,
  <>استراتژی و برنامه‌ریزی<br />بازاریابی</>,
  <>تحلیل<br />بازار</>,
  <>هویت<br />بصری</>,
  <>طراحی<br />وب سایت</>,
  <>تولید<br />محتوا</>,
];
const DESCS_FA: string[] = [
  "منطق درآمدزایی، ساختار هزینه‌ها و جریان ارزش را به‌گونه‌ای طراحی می‌کنیم که مدل کسب‌وکار برای سرمایه‌گذاران کاملاً شفاف باشد.",
  "جایگاه و لحن برند را به‌گونه‌ای مشخص می‌کنیم که همه اعضای تیم بتوانند آن را به‌درستی درک و به‌صورت یکپارچه بیان کنند.",
  "از انتخاب بهترین کانال و تعیین قیمت تا اولویت‌بندی اقدامات؛ یک نقشه راه عملی برای ورود و رشد در بازار.",
  "متن، محتوای بصری و ابزارهای کمپین را تولید می‌کنیم تا پیام برند در تمام کانال‌ها به شکلی منسجم و یکپارچه منتقل شود.",
  "با تکیه بر داده‌های واقعی درباره اندازه بازار، رقبا و میزان تقاضا، استراتژی‌هایی مبتنی بر واقعیت و داده طراحی می‌کنیم.",
  "لوگو، رنگ‌ها و سیستم تایپوگرافی را به‌گونه‌ای طراحی می‌کنیم که هویت برند در هر مقیاسی، از Pitch Deck گرفته تا بیلبورد، قدرتمند و یکپارچه باقی بماند.    ",
  "وب‌سایت‌هایی ساختارمند و مبتنی بر تبدیل طراحی می‌کنیم که از ابتدا واکنش‌گرا بوده و در عین عملکرد حرفه‌ای، کاملاً با هویت برند هماهنگ باشند.,",
  "متن، محتوای بصری و ابزارهای کمپین را تولید می‌کنیم تا پیام برند در تمام کانال‌ها به شکلی منسجم و یکپارچه منتقل شود.",
];

export default function ServicesSection() {
  const { t, lang } = useLang();
  const ref = useRef<HTMLElement>(null);
  useStaggerReveal(ref, ".svc-card", "sc-visible", (i) => (i % 4) * 80, 0.12);

  return (
    <section className="svcs-section" ref={ref}>
      <div className="wrap">
        <div className="svcs-header">
          <div className="svcs-header__left">
            <span className="editorial-label">{t("/ OUR SERVICES", "/ خدمات ما")}</span>
            <h2 className="editorial-h2"><span className="eh2-outline">{t("WHAT", "آنچه ")}</span><br /><span className="eh2-solid">{t("WE DO", "ارائه می‌دهیم")}</span></h2>
          </div>
        </div>

        <div className="svcs-grid">
          {CARDS.map((c, i) => (
            <Link className={`svc-card ${c.tone}`} id={`detail-${i + 1}`} href={c.href} key={i}>
              <div className="sc-num">{String(i + 1).padStart(2, "0")}</div>
              <div className="sc-body">
                {c.diag}
                <h3>{lang === "fa" ? TITLES_FA[i] : c.title}</h3>
                <p>{t(c.desc, DESCS_FA[i])}</p>
              </div>
              <span className="sc-cta">{t("Explore", "بیشتر بدانید")} <span>↗</span></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
