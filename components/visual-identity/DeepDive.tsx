"use client";

import { useRef } from "react";
import { useLang } from "@/components/global/LanguageProvider";
import { useCarousel } from "./useCarousel";

const PINS = [
  { num: "01", left: "17%", top: "30%", label: "About the Brand", labelFa: "درباره برند" },
  { num: "02", left: "50%", top: "30%", label: "Logo Suite", labelFa: "مجموعه لوگو" },
  { num: "03", left: "83%", top: "30%", label: "Logo on Color", labelFa: "لوگو روی رنگ", edge: true },
  { num: "04", left: "16%", top: "49.5%", label: "Corporate Colors", labelFa: "رنگ‌های سازمانی" },
  { num: "05", left: "48%", top: "49.5%", label: "Typography", labelFa: "تایپوگرافی" },
  { num: "06", left: "83%", top: "49.5%", label: "Patterns & Textures", labelFa: "الگوها و بافت‌ها", edge: true },
  { num: "07", left: "33%", top: "65.5%", label: "Brand Applications", labelFa: "کاربردهای برند" },
  { num: "08", left: "83%", top: "65.5%", label: "Stationery", labelFa: "ست اداری", edge: true },
  { num: "09", left: "22%", top: "81%", label: "Merchandise", labelFa: "محصولات تبلیغاتی" },
  { num: "10", left: "55%", top: "81%", label: "Social Media", labelFa: "شبکه‌های اجتماعی" },
  { num: "11", left: "83%", top: "81%", label: "Iconography", labelFa: "آیکون‌ها", edge: true },
  { num: "12", left: "35%", top: "95.5%", label: "Thank You", labelFa: "پیام پایانی" },
];

const CARDS = [
  { num: "01", title: "About the Brand", titleFa: "درباره برند", desc: "The mission, distilled into one clear paragraph.", descFa: "مأموریت برند، در قالب یک توضیح کوتاه و شفاف." },
  { num: "02", title: "Logo Suite", titleFa: "مجموعه لوگو", desc: "Color variations of the mark for every background.", descFa: "نسخه‌های مختلف لوگو برای استفاده روی پس‌زمینه‌های گوناگون." },
  { num: "03", title: "Logo on Color", titleFa: "لوگو روی رنگ", desc: "A stress-test of the logo on the brand's own palette.", descFa: "بررسی عملکرد لوگو روی پالت رنگی اختصاصی برند." },
  { num: "04", title: "Corporate Colors", titleFa: "رنگ‌های سازمانی", desc: "The exact palette, locked to hex and RGB values.", descFa: "پالت رنگی دقیق برند، با مقادیر استاندارد HEX و RGB." },
  { num: "05", title: "Typography", titleFa: "تایپوگرافی", desc: "The typeface that carries the brand's voice.", descFa: "فونت‌هایی که لحن و شخصیت برند را منتقل می‌کنند." },
  { num: "06", title: "Patterns & Textures", titleFa: "الگوها و بافت‌ها", desc: "Reusable motifs that extend the identity beyond the logo.", descFa: "المان‌های بصری قابل استفاده مجدد برای گسترش هویت برند فراتر از لوگو." },
  { num: "07", title: "Brand Applications", titleFa: "کاربردهای برند", desc: "The system in action, inside a real product UI.", descFa: "نمایش هویت بصری در یک محصول واقعی و رابط کاربری آن." },
  { num: "08", title: "Stationery", titleFa: "ست اداری", desc: "Everyday collateral, scaled to functional formats.", descFa: "کاربرد هویت برند در اقلام اداری و ارتباطات روزمره." },
  { num: "09", title: "Merchandise", titleFa: "محصولات تبلیغاتی", desc: "Apparel and print goods, testing the mark off-screen.", descFa: "اجرای هویت روی پوشاک و محصولات چاپی برای سنجش عملکرد آن خارج از فضای دیجیتال." },
  { num: "10", title: "Social Media", titleFa: "شبکه‌های اجتماعی", desc: "Ready-made post templates with a consistent voice.", descFa: "قالب‌های آماده انتشار با لحن و ظاهر یکپارچه." },
  { num: "11", title: "Iconography", titleFa: "آیکون‌ها", desc: "A unified icon set for a coherent interface.", descFa: "مجموعه‌ای هماهنگ از آیکون‌ها برای ایجاد یک رابط کاربری منسجم." },
  { num: "12", title: "Thank You", titleFa: "پیام پایانی", desc: "The closing note — where the system signs off with warmth.", descFa: "آخرین نقطه تماس با مخاطب؛ جایی که سیستم برند با لحنی گرم و به‌یادماندنی به پایان می‌رسد." },
];

export default function DeepDive() {
  const { t, n } = useLang();
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
            <span className="vi-label">{t("/ SYSTEM DEEPDIVE", "/ بررسی عمیق سیستم برند")}</span>
            <h2 className="editorial-h2">
              <span className="eh2-outline">{t("INSIDE", "نگاهی به")}</span> <span className="eh2-solid">{t("ONE", "یک")}</span>
              <br />
              <span className="eh2-purple">{t("IDENTITY.", "هویت بصری کامل.")}</span>
            </h2>
          </div>
          <p>{t("A complete identity is a system, not just a logo. Here's every component that makes the AutiLab brand work — mapped and explained.", "هویت بصری کامل، فقط یک لوگو نیست؛ یک سیستم منسجم است. در ادامه، تمام اجزایی را می‌بینید که هویت برند AutiLab را شکل داده‌اند.")}</p>
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
                    <span className="ab-pin-num">{n(p.num)}</span>
                    <span className="ab-pin-label">{t(p.label, p.labelFa)}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="ab-legend" ref={legendRef}>
              {CARDS.map((c) => (
                <div className="ab-card" key={c.num} ref={(el) => { cardRefs.current[c.num] = el; }}>
                  <div className="ab-card-head"><div className="ab-tag">{n(c.num)}</div><h3>{t(c.title, c.titleFa)}</h3></div>
                  <p>{t(c.desc, c.descFa)}</p>
                </div>
              ))}
            </div>
            <p className="ab-swipe-hint">
              <span className="ab-swipe-counter">{n(String(activeIdx + 1).padStart(2, "0"))} / {n(CARDS.length)}</span>
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
