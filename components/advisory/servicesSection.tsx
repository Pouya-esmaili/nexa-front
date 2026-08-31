"use client";

import { useRef, type ReactNode } from "react";
import Link from "next/link";
import { useStaggerReveal } from "./useStaggerReveal";
import { useLang } from "@/components/global/LanguageProvider";

type Card = { tone: string; href: string; diag: ReactNode; title: ReactNode; desc: string };

const CARDS: Card[] = [
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
    title: <>Business<br />Strategy</>,
    desc: "From business model to market position — we connect the strategy, numbers, and roadmap behind sustainable growth.",
    diag: (
      <svg className="sc-diag" viewBox="0 0 160 100" fill="none"><circle cx="80" cy="50" r="46" stroke="#8F27FF" strokeOpacity=".35" strokeWidth="3" /><circle cx="80" cy="50" r="30" fill="#8F27FF" fillOpacity=".1" stroke="#8F27FF" strokeOpacity=".6" strokeWidth="3" /><circle cx="80" cy="50" r="14" stroke="#8F27FF" strokeWidth="3" /><circle cx="80" cy="50" r="5" fill="#FFE600" /></svg>
    ),
  },
];

/* Persian titles & descriptions, indexed to CARDS */
const TITLES_FA: ReactNode[] = [
  <>هویت<br />بصری</>,
  <>طراحی<br />وب سایت</>,
  <>تولید<br />محتوا</>,
  <>استراتژی<br />کسب‌وکار</>,
];
const DESCS_FA: string[] = [
  "لوگو، رنگ‌ها و سیستم تایپوگرافی را به‌گونه‌ای طراحی می‌کنیم که هویت برند در هر مقیاسی، از Pitch Deck گرفته تا بیلبورد، قدرتمند و یکپارچه باقی بماند.",
  "وب‌سایت‌هایی ساختارمند و مبتنی بر تبدیل طراحی می‌کنیم که از ابتدا واکنش‌گرا بوده و در عین عملکرد حرفه‌ای، کاملاً با هویت برند هماهنگ باشند.",
  "متن، محتوای بصری و ابزارهای کمپین را تولید می‌کنیم تا پیام برند در تمام کانال‌ها به شکلی منسجم و یکپارچه منتقل شود.",
  "از طراحی مدل کسب‌وکار تا جایگاه‌یابی در بازار — استراتژی، اعداد و مسیر رشد را در یک نقشه منسجم برای رشد پایدار به هم متصل می‌کنیم.",
];

export default function ServicesSection() {
  const { t, lang, n } = useLang();
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
              <div className="sc-num">{n(String(i + 1).padStart(2, "0"))}</div>
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
