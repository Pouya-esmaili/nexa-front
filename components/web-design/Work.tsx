"use client";

import { useRef } from "react";
import { useLang } from "@/components/global/LanguageProvider";
import { useCarousel } from "./useCarousel";

const CARDS = [
  { img: "002-landa-trip.jpg", brand: "Landa Trip", type: "Travel & Education Booking", typeFa: "رزرو سفر و آموزش" },
  { img: "003-orbiq.jpg", brand: "Orbiq", type: "Mobile App / Space Learning", typeFa: "اپلیکیشن موبایل / آموزش فضا" },
  { img: "004-landa-academy.jpg", brand: "Landa Academy", type: "Business Education Platform", typeFa: "پلتفرم آموزش کسب‌وکار" },
  { img: "005-thredloom.jpg", brand: "Thredloom", type: "Mobile App / Luxury Resale", typeFa: "اپلیکیشن موبایل / فروش مجدد لوکس" },
  { img: "006-preventigene.jpg", brand: "PreventiGene", type: "HealthTech / Genetics", typeFa: "فناوری سلامت / ژنتیک" },
  { img: "007-verdalyn.jpg", brand: "Verdalyn", type: "Mobile App / Smart Farming", typeFa: "اپلیکیشن موبایل / کشاورزی هوشمند" },
  { img: "008-autilab.jpg", brand: "AutiLab", type: "Autism Care Platform", typeFa: "پلتفرم مراقبت از اوتیسم" },
  { img: "009-furlo.jpg", brand: "Furlo", type: "Mobile App / Pet Health", typeFa: "اپلیکیشن موبایل / سلامت حیوانات خانگی" },
  { img: "010-landacrafts.jpg", brand: "Landacrafts", type: "Handcraft Marketplace", typeFa: "مارکت‌پلیس صنایع دستی" },
  { img: "011-autilab-connect.jpg", brand: "AutiLab Connect", type: "Mobile App / Care Booking", typeFa: "اپلیکیشن موبایل / رزرو مراقبت" },
];

export default function Work() {
  const { t, n, lang } = useLang();
  const gridRef = useRef<HTMLDivElement>(null);
  const { activeIdx, atStart, atEnd, scroll } = useCarousel(gridRef, CARDS.length, "case--active");

  return (
    <section className="cases">
      <div className="wrap">
        <div className="cases__head">
          <div>
            <span className="eyebrow">{t("/ Our Work", "/ پروژه‌های ما")}</span>
            <h2 className="h2">
              <span className="outline">{t("Websites.", "وب‌سایت و")}</span>
              <span className="solid">{t("Apps.", "اپلیکیشن‌هایی")}</span>
              <span className="purple">{t("We Built.", "که توسعه داده‌ایم.")}</span>
            </h2>
          </div>
          <p style={{ color: "var(--grey)", fontSize: 15, maxWidth: 360, margin: 0 }}>
            {t(
              "A look at what we've actually shipped — websites and apps, screen by screen.",
              "نگاهی به پروژه‌هایی که توسط نکسا طراحی و اجرا شده‌اند؛ از وب‌سایت‌ها تا اپلیکیشن‌ها به صورت جزء به جزء"
            )}
          </p>
        </div>
        <div className="cases__grid" ref={gridRef}>
          {CARDS.map((c, i) => (
            <div className="case" key={i}>
              <div className="case__frame">
                <div className="case__stage" style={{ padding: 0 }}>
                  <img
                    src={`/images/web-design/${c.img}`}
                    alt={c.brand}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", transition: "transform .4s ease" }}
                  />
                </div>
              </div>
              <div className="case__caption">
                <span className="case__brand">{c.brand}</span>
                <span className="case__type">{t(c.type, c.typeFa)}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="cases__hint">
          <span className="cases__counter">{n(String(activeIdx + 1).padStart(2, "0"))}/{n(CARDS.length)}</span>
          <span className="cases__nav-btns">
            <button className="cases__nav-btn" aria-label="Previous" disabled={atStart} onClick={() => scroll(-1)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d={lang === "fa" ? "M9 6l6 6-6 6" : "M15 6l-6 6 6 6"} /></svg>
            </button>
            <button className="cases__nav-btn" aria-label="Next" disabled={atEnd} onClick={() => scroll(1)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d={lang === "fa" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"} /></svg>
            </button>
          </span>
        </p>
      </div>
    </section>
  );
}
