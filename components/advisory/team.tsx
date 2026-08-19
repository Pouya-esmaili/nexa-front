"use client";

import { useEffect, useRef } from "react";
import { useLang, toFaDigits } from "@/components/global/LanguageProvider";

const ROLE_FA: Record<string, string> = {
  "Brand Strategist": "استراتژیست برند",
  "GTM Specialist": "متخصص ورود به بازار",
  "UI/UX Designer": "طراح UI/UX",
  "Front-End Developer": "توسعه‌دهنده‌ی فرانت‌اند",
  "Back-End Developer": "توسعه‌دهنده‌ی بک‌اند",
  "Content Creator": "تولیدکننده‌ی محتوا",
  "Client Success": "موفقیت مشتری",
  "Ops Manager": "مدیر عملیات",
};

/* 8 unique cards (photos cycle through the 5 available images), rendered twice for the seamless loop */
const CARDS = [
  { h: "clamp(320px, 43vw, 440px)", tone: "tc-pink", role: "Front-End Developer", img: "/images/ourteam/pouya.jpg ", name: "Mehdi Esmaeili", nameFa: "مهدی اسماعیلی" },
  { h: "clamp(235px, 31vw, 320px)", tone: "tc-sage", role: "Marketing Specialist", img: "/images/ourteam/pooya.JPG", name: "Pouya Shafaghatiyan", nameFa: "پویا شفاقتیان" },
  { h: "clamp(290px, 39vw, 400px)", tone: "tc-cream", role: "Content Strategist", img: "/images/ourteam/kiana.JPG", name: "Kiyana Mehrasa", nameFa: "کیانا مهرآسا" },
  { h: "clamp(220px, 29vw, 300px)", tone: "tc-yellow", role: "Back-End Developer", img: "/images/ourteam/amir.jpg", name: "Amir Esfahanizade", nameFa: "امیر اصفهانی‌زاده" },
  { h: "clamp(315px, 42vw, 430px)", tone: "tc-purple", role: "AI Engineer", img: "/images/ourteam/sajjad.jpg", name: "Sajjad Momeni", nameFa: "سجاد مؤمنی" },
  { h: "clamp(250px, 33vw, 340px)", tone: "tc-yellow", role: "Business Advisor", img: "/images/ourteam/parastoo.jpg", name: "Parastoo Sanaifar", nameFa: "پرستو ثنایی‌فر" },
  { h: "clamp(300px, 40vw, 410px)", tone: "tc-purple", role: "UI/UX Designer ", img: "/images/ourteam/narges.jpg", name: "Narjes Orouji", nameFa: "نرگس اروجی" },
  { h: "clamp(265px, 35vw, 360px)", tone: "tc-cream", role: "Business Advisor", img: "/images/ourteam/milad.jpg", name: "Milad Fatemi", nameFa: "میلاد فاطمی" },
];

const STATS = [
  { target: 12, suf: "+", label: "Team members", labelFa: "عضو تیم" },
  { target: 6, suf: "", label: "Disciplines covered", labelFa: "حوزه‌ی تخصصی" },
  { target: 9, suf: "+", label: "Years combined experience", labelFa: "سال تجربه‌ی ترکیبی" },
];

export default function Team() {
  const { t, lang } = useLang();
  const ref = useRef<HTMLElement>(null);

  /* stat counters — same easing/duration as the original */
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const fmt = (v: number) => (lang === "fa" ? toFaDigits(v) : String(v));
    const nums = Array.from(root.querySelectorAll<HTMLElement>(".hs-num[data-target]"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      nums.forEach((el) => (el.textContent = fmt(parseInt(el.dataset.target ?? "0", 10))));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          const target = parseInt(el.dataset.target ?? "0", 10);
          const dur = 1800;
          let startTime: number | null = null;
          const step = (ts: number) => {
            if (startTime === null) startTime = ts;
            const progress = Math.min((ts - startTime) / dur, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            el.textContent = fmt(Math.round(ease * target));
            if (progress < 1) requestAnimationFrame(step);
            else el.textContent = fmt(target);
          };
          requestAnimationFrame(step);
          obs.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    nums.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [lang]);

  return (
    <section className="team-section" ref={ref}>
      <div className="wrap">
        <div className="team-header">
          <div className="team-header__left">
            <span className="editorial-label">{t("/ THE TEAM", "/ اعضاي تيم")}</span>
            <h2 className="editorial-h2"><span className="eh2-outline">{t("THE PEOPLE", "اعضای")}</span><br /><span className="eh2-solid">{t("BEHIND", "پشتِ")}</span><br /><span className="eh2-purple">{t("THE WORK.", " صحنه.")}</span></h2>
          </div>
          <div className="team-header__right">
            <svg className="team-deco" viewBox="0 0 80 80" fill="none" aria-hidden="true"><circle cx="40" cy="40" r="36" stroke="#E2E2E2" strokeWidth="2" /><circle cx="40" cy="40" r="24" stroke="#8F27FF" strokeWidth="2" strokeDasharray="6 4" /><circle cx="40" cy="40" r="8" fill="#8F27FF" opacity=".15" /><circle cx="40" cy="40" r="4" fill="#8F27FF" /></svg>
            <div className="team-stats">
              {STATS.map((s) => (
                <div className="hs-item" key={s.label}>
                  <div className="hs-num-row"><span className="hs-num" data-target={s.target}>0</span>{s.suf && <span className="hs-suf">{s.suf}</span>}</div>
                  <span className="hs-label">{t(s.label, s.labelFa)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="team-cards">
        <div className="team-cards__track">
          {[...CARDS, ...CARDS].map((c, i) => (
            <div style={{ height: c.h }} className={`team-card ${c.tone}`} key={i}>
              <div className="tc-info"><span className="tc-name">{t(c.name, c.nameFa)}</span><span className="tc-role">{t(c.role, ROLE_FA[c.role] ?? c.role)}</span></div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <div className="tc-photo"><img src={c.img} alt="Team member" loading="lazy" /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
