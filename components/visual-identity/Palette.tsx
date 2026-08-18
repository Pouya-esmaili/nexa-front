"use client";

import { useRef, useState } from "react";
import { useLang } from "@/components/global/LanguageProvider";
import { useStaggerReveal } from "@/components/advisory/useStaggerReveal";

const PALETTES = [
  {
    brand: "DIACO",
    tag: "AI Research-Matching Platform",
    tagFa: "پلتفرم تطبیق پژوهش‌های هوش مصنوعی",
    count: "2 COLORS",
    countFa: "۲ رنگ",
    colors: [
      { id: "diaco-0", hex: "#13375D", name: "Navy", nameFa: "Navy", rgb: "19, 55, 93", reason: "Depth and authority — the color of institutional trust and serious research.", reasonFa: "عمق و اعتبار؛ رنگی که حس اعتماد سازمانی و جدیت فضای پژوهش را منتقل می‌کند." },
      { id: "diaco-1", hex: "#76B5F8", name: "Sky Blue", nameFa: "Sky Blue", rgb: "118, 181, 248", reason: "Clarity and momentum — technology that feels open, not cold or corporate.", reasonFa: "شفافیت و پویایی؛ فناوری‌ای که مدرن و در دسترس به نظر می‌رسد، نه سرد و بیش‌ازحد رسمی." },
    ],
  },
  {
    brand: "ORBIQ",
    tag: "Kids' Astronomy Learning App",
    tagFa: "اپلیکیشن آموزش نجوم برای کودکان",
    count: "4 COLORS",
    countFa: "۴ رنگ",
    colors: [
      { id: "orbiq-0", hex: "#2E1A47", name: "Midnight", nameFa: "Midnight", rgb: "46, 26, 71", reason: "The night sky itself — deep space, mystery, and wonder for young explorers.", reasonFa: "الهام‌گرفته از آسمان شب؛ تداعی‌کننده فضا، رمز و راز و حس شگفتی برای کاوشگران جوان." },
      { id: "orbiq-1", hex: "#F4C95D", name: "Starlight", nameFa: "Starlight", rgb: "244, 201, 93", reason: "A spark of discovery — the warmth of a star against the dark, always inviting curiosity.", reasonFa: "جرقه‌ای از کشف و کنجکاوی؛ گرمای یک ستاره در دل تاریکی که همیشه حس کشف و ماجراجویی را برمی‌انگیزد." },
      { id: "orbiq-2", hex: "#5B7FDE", name: "Galactic", nameFa: "Galactic", rgb: "91, 127, 222", reason: "Playful but credible — friendly enough for age 6, trustworthy enough for age 14.", reasonFa: "سرزنده و در عین حال قابل اعتماد؛ آن‌قدر صمیمی برای یک کودک ۶ ساله و آن‌قدر معتبر برای یک نوجوان ۱۴ ساله." },
      { id: "orbiq-3", hex: "#F7F3EA", name: "Cream", nameFa: "Cream", rgb: "247, 243, 234", reason: "A soft neutral that keeps the whole system from feeling too heavy for kids.", reasonFa: "رنگی خنثی و لطیف که باعث می‌شود کل هویت بصری بیش از حد سنگین و جدی به نظر نرسد و همچنان برای مخاطب کودک، گرم و دلنشین باقی بماند." },
    ],
  },
];

export default function Palette() {
  const { t } = useLang();
  const wrapRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<string[]>(PALETTES.map((p) => p.colors[0].id));
  useStaggerReveal(wrapRef, ".vi-palette-card", "vi-visible", (i) => i * 140, 0.2);

  return (
    <section className="vi-section vi-palette">
      <div className="wrap">
        <div className="vi-comp-intro">
          <span className="vi-label">{t("/ COLOR SYSTEM", "/ سیستم رنگ")}</span>
          <h2 className="editorial-h2">
            <span className="eh2-outline">{t("A PALETTE", "هر رنگ،")}</span> <span className="eh2-solid">{t("WITH", "")}</span>
            <br />
            <span className="eh2-purple">{t("A REASON FOR EVERY SHADE.", "دلیلی برای حضور دارد.")}</span>
          </h2>
          <p style={{ color: "var(--grey)", fontSize: 15, marginTop: 16 }}>{t("Two real projects, two color systems. Click a swatch to see why that color earned its place.", "دو پروژه واقعی، دو سیستم رنگ متفاوت. روی هر رنگ کلیک کنید تا ببینید چرا بخشی از هویت برند شده است.")}</p>
        </div>
        <div className="vi-palette2-wrap" ref={wrapRef}>
          {PALETTES.map((pal, pi) => {
            const activeId = active[pi];
            return (
              <div className="vi-palette-card" key={pal.brand}>
                <div className="vi-palette-card__head">
                  <div>
                    <span className="vi-palette-card__brand">{pal.brand}</span>
                    <span className="vi-palette-card__tag">{t(pal.tag, pal.tagFa)}</span>
                  </div>
                  <span className="vi-palette-card__count">{t(pal.count, pal.countFa)}</span>
                </div>
                <div className="vi-pswatch-row">
                  {pal.colors.map((c) => (
                    <button
                      key={c.id}
                      className={`vi-pswatch${c.id === activeId ? " is-active" : ""}`}
                      style={{ background: c.hex, color: c.hex }}
                      aria-label={c.name}
                      onClick={() => setActive((a) => a.map((v, i) => (i === pi ? c.id : v)))}
                    >
                      <span className="vi-pswatch__check">✓</span>
                    </button>
                  ))}
                </div>
                <div className="vi-palette-detail">
                  {pal.colors.map((c) => (
                    <div key={c.id} className={`vi-palette-detail__panel${c.id === activeId ? " is-active" : ""}`}>
                      <span className="vi-palette-detail__swatch" style={{ background: c.hex }}></span>
                      <div>
                        <div className="vi-palette-detail__name">
                          {t(c.name, c.nameFa)}
                          <span className="vi-palette-detail__hex">{c.hex} · RGB {c.rgb}</span>
                        </div>
                        <p className="vi-palette-detail__reason">{t(c.reason, c.reasonFa)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
