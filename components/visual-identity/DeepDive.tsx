"use client";

import { useRef } from "react";
import { useLang } from "@/components/global/LanguageProvider";
import { useCarousel } from "./useCarousel";

const PINS = [
  { num: "01", left: "17%", top: "30%", label: "About the Brand", labelFa: "درباره‌ی برند" },
  { num: "02", left: "50%", top: "30%", label: "Logo Suite", labelFa: "مجموعه‌ی لوگو" },
  { num: "03", left: "83%", top: "30%", label: "Logo on Color", labelFa: "لوگو روی رنگ", edge: true },
  { num: "04", left: "16%", top: "49.5%", label: "Corporate Colors", labelFa: "رنگ‌های سازمانی" },
  { num: "05", left: "48%", top: "49.5%", label: "Typography", labelFa: "تایپوگرافی" },
  { num: "06", left: "83%", top: "49.5%", label: "Patterns & Textures", labelFa: "الگو و بافت", edge: true },
  { num: "07", left: "33%", top: "65.5%", label: "Brand Applications", labelFa: "کاربردهای برند" },
  { num: "08", left: "83%", top: "65.5%", label: "Stationery", labelFa: "لوازم اداری", edge: true },
  { num: "09", left: "22%", top: "81%", label: "Merchandise", labelFa: "کالاهای برندی" },
  { num: "10", left: "55%", top: "81%", label: "Social Media", labelFa: "شبکه‌های اجتماعی" },
  { num: "11", left: "83%", top: "81%", label: "Iconography", labelFa: "آیکونوگرافی", edge: true },
  { num: "12", left: "35%", top: "95.5%", label: "Thank You", labelFa: "تشکر" },
];

const CARDS = [
  { num: "01", title: "About the Brand", titleFa: "درباره‌ی برند", desc: "The mission, distilled into one clear paragraph.", descFa: "مأموریت برند، در یک پاراگراف شفاف." },
  { num: "02", title: "Logo Suite", titleFa: "مجموعه‌ی لوگو", desc: "Color variations of the mark for every background.", descFa: "نسخه‌های رنگی نشان برای هر پس‌زمینه." },
  { num: "03", title: "Logo on Color", titleFa: "لوگو روی رنگ", desc: "A stress-test of the logo on the brand's own palette.", descFa: "آزمون لوگو روی پالت رنگی خود برند." },
  { num: "04", title: "Corporate Colors", titleFa: "رنگ‌های سازمانی", desc: "The exact palette, locked to hex and RGB values.", descFa: "پالت دقیق، قفل‌شده روی مقادیر hex و RGB." },
  { num: "05", title: "Typography", titleFa: "تایپوگرافی", desc: "The typeface that carries the brand's voice.", descFa: "فونتی که صدای برند را حمل می‌کند." },
  { num: "06", title: "Patterns & Textures", titleFa: "الگو و بافت", desc: "Reusable motifs that extend the identity beyond the logo.", descFa: "الگوهای قابل‌استفاده‌ی مجدد که هویت را فراتر از لوگو می‌برند." },
  { num: "07", title: "Brand Applications", titleFa: "کاربردهای برند", desc: "The system in action, inside a real product UI.", descFa: "سیستم در عمل، درون یک رابط کاربری واقعی." },
  { num: "08", title: "Stationery", titleFa: "لوازم اداری", desc: "Everyday collateral, scaled to functional formats.", descFa: "اقلام روزمره، در قالب‌های کاربردی." },
  { num: "09", title: "Merchandise", titleFa: "کالاهای برندی", desc: "Apparel and print goods, testing the mark off-screen.", descFa: "پوشاک و اقلام چاپی، آزمون نشان بیرون از صفحه‌نمایش." },
  { num: "10", title: "Social Media", titleFa: "شبکه‌های اجتماعی", desc: "Ready-made post templates with a consistent voice.", descFa: "قالب‌های آماده‌ی پست با لحنی یکدست." },
  { num: "11", title: "Iconography", titleFa: "آیکونوگرافی", desc: "A unified icon set for a coherent interface.", descFa: "مجموعه‌ای یکپارچه از آیکون برای رابطی منسجم." },
  { num: "12", title: "Thank You", titleFa: "تشکر", desc: "The closing note — where the system signs off with warmth.", descFa: "یادداشت پایانی — جایی که سیستم با گرمی خداحافظی می‌کند." },
];

export default function DeepDive() {
  const { t } = useLang();
  const legendRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const { activeIdx, atStart, atEnd, scroll } = useCarousel(legendRef, CARDS.length, "ab-card--active");

  const goToCard = (num: string) => {
    const card = cardRefs.current[num];
    if (!card) return;
    card.scrollIntoView({ behavior: "smooth", block: "center" });
    card.classList.remove("ab-highlight");
    void card.offsetWidth;
    card.classList.add("ab-highlight");
    setTimeout(() => card.classList.remove("ab-highlight"), 3000);
  };

  return (
    <section className="vi-section vi-deep" id="inside-identity">
      <div className="wrap">
        <div className="vi-deep__header vi-work__head">
          <div>
            <span className="vi-label">{t("/ SYSTEM DEEPDIVE", "/ کالبدشکافی سیستم")}</span>
            <h2 className="editorial-h2">
              <span className="eh2-outline">{t("INSIDE", "درون")}</span> <span className="eh2-solid">{t("ONE", "یک")}</span>
              <br />
              <span className="eh2-purple">{t("IDENTITY.", "هویت.")}</span>
            </h2>
          </div>
          <p>{t("A complete identity is a system, not just a logo. Here's every component that makes the AutiLab brand work — mapped and explained.", "یک هویت کامل، یک سیستم است، نه فقط یک لوگو. این‌جا همه‌ی اجزایی که برند AutiLab را می‌سازند، نقشه‌برداری و توضیح داده شده‌اند.")}</p>
        </div>
        <div className="ab-breakdown">
          <div className="ab-board">
            <div className="ab-specimen-col">
              <div className="ab-specimen">
                <img src="/images/visual-identity/012-img.jpg" alt="AutiLab brand identity sheet" />
                {PINS.map((p) => (
                  <div
                    key={p.num}
                    className={`ab-pin${p.edge ? " edge" : ""}`}
                    data-num={p.num}
                    style={{ left: p.left, top: p.top }}
                    onClick={() => goToCard(p.num)}
                  >
                    <span className="ab-pin-num">{p.num}</span>
                    <span className="ab-pin-label">{t(p.label, p.labelFa)}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="ab-legend" ref={legendRef}>
              {CARDS.map((c) => (
                <div className="ab-card" key={c.num} ref={(el) => { cardRefs.current[c.num] = el; }}>
                  <div className="ab-card-head"><div className="ab-tag">{c.num}</div><h3>{t(c.title, c.titleFa)}</h3></div>
                  <p>{t(c.desc, c.descFa)}</p>
                </div>
              ))}
            </div>
            <p className="ab-swipe-hint">
              <span className="ab-swipe-counter">{String(activeIdx + 1).padStart(2, "0")} / {CARDS.length}</span>
              <span className="ab-nav-btns">
                <button className="ab-nav-btn" aria-label="Previous" disabled={atStart} onClick={() => scroll(-1)}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6" /></svg>
                </button>
                <button className="ab-nav-btn" aria-label="Next" disabled={atEnd} onClick={() => scroll(1)}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
                </button>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
