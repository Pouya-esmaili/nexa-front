"use client";

import { useRef } from "react";
import { useLang } from "@/components/global/LanguageProvider";
import { useCarousel } from "./useCarousel";

const CARDS = [
  { img: "002-img.jpg", brand: "PreventiGene", type: "HealthTech / Genetics Identity", typeFa: "هویت سلامت دیجیتال / ژنتیک" },
  { img: "003-img.jpg", brand: "Landa Trip", type: "Travel & Education Identity", typeFa: "هویت گردشگری و آموزش" },
  { img: "004-img.jpg", brand: "Diaco", type: "AI Platform Identity", typeFa: "هویت پلتفرم هوش مصنوعی" },
  { img: "005-img.jpg", brand: "AutiLab", type: "Family Health Identity", typeFa: "هویت سلامت خانواده" },
  { img: "006-img.jpg", brand: "Furlo", type: "Pet Health Identity", typeFa: "هویت سلامت حیوانات خانگی" },
  { img: "007-img.jpg", brand: "Landa Craft", type: "Marketplace Identity", typeFa: "هویت بازارگاه" },
  { img: "008-img.jpg", brand: "Thredloom", type: "Luxury Resale Identity", typeFa: "هویت فروش لوکس دست‌دوم" },
  { img: "009-img.jpg", brand: "Landa Academy", type: "Education / Mentorship Identity", typeFa: "هویت آموزش / منتورینگ" },
  { img: "010-img.jpg", brand: "Verdalyn", type: "AgTech Identity", typeFa: "هویت فناوری کشاورزی" },
  { img: "011-img.jpg", brand: "Orbiq", type: "EdTech Identity", typeFa: "هویت فناوری آموزش" },
];

export default function Work() {
  const { t } = useLang();
  const gridRef = useRef<HTMLDivElement>(null);
  const { activeIdx, atStart, atEnd, scroll } = useCarousel(gridRef, CARDS.length, "vi-card--active");

  return (
    <section className="vi-section vi-work" id="work">
      <div className="wrap">
        <div className="vi-work__head">
          <div>
            <span className="vi-label">{t("/ SELECTED WORK", "/ نمونه‌کارهای منتخب")}</span>
            <h2 className="editorial-h2">
              <span className="eh2-outline">{t("IDENTITIES", "هویت‌هایی")}</span>
              <br />
              <span className="eh2-solid">{t("WE'VE", "که")}</span> <span className="eh2-purple">{t("BUILT.", "ساخته‌ایم.")}</span>
            </h2>
          </div>
          <p>{t("A curated collection of 9 identity systems — logo designs, brand systems, typography and application mockups. Click any card to inspect full details.", "مجموعه‌ای منتخب از ۹ سیستم هویت بصری — طراحی لوگو، سیستم برند، تایپوگرافی و ماکاپ‌های کاربردی. برای مشاهده‌ی جزئیات کامل، روی هر کارت کلیک کنید.")}</p>
        </div>
        <div className="vi-work__grid-4col" ref={gridRef}>
          {CARDS.map((c, i) => (
            <div className="vi-work__card-4col" key={i} aria-label={`View ${c.brand} brand identity`}>
              <div className="vi-work__card-img-wrap">
                <img src={`/images/visual-identity/${c.img}`} alt={`${c.brand} brand identity`} className="vi-work__card-img" />
                <div className="vi-work__caption-4col">
                  <span className="vi-work__brand">{c.brand}</span>
                  <span className="vi-work__type">{t(c.type, c.typeFa)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="vi-work-swipe-hint">
          <span className="vi-swipe-counter">{String(activeIdx + 1).padStart(2, "0")}/{CARDS.length}</span>
          <span className="vi-nav-btns">
            <button className="vi-nav-btn" aria-label="Previous" disabled={atStart} onClick={() => scroll(-1)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6" /></svg>
            </button>
            <button className="vi-nav-btn" aria-label="Next" disabled={atEnd} onClick={() => scroll(1)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
            </button>
          </span>
        </p>
      </div>
    </section>
  );
}
