"use client";

import { useRef } from "react";
import { useStaggerReveal } from "./useStaggerReveal";
import { useLang } from "@/components/global/LanguageProvider";

const TYPE_FA: Record<string, string> = {
  "Brand Identity": "هویت برند",
  "Mobile App Design": "طراحی اپلیکیشن موبایل",
  "Packaging Design": "طراحی بسته‌بندی",
  "Product Photography": "عکاسی محصول",
};

const WORK = [
  { img: "/images/advisory/AutiLab Identity.jpg", alt: "Autilab autism-care brand identity board", brand: "Autilab", type: "Brand Identity", h: "wk-h-xl" },
  { img: "/images/advisory/Lumina.jpg", alt: "Aura Lumière skincare cream product photography", brand: "Aura Lumière", type: "Product Photography", h: "wk-h-sm" },
  { img: "/images/advisory/Identity (2).jpg", alt: "Furlo pet-health brand guidelines", brand: "Furlo", type: "Brand Identity", h: "wk-h-lg" },
  { img: "/images/advisory/pitch deck Furlo.jpg", alt: "Mango and passion fruit smoothie product photography", brand: "Furlo", type: "Pitch Deck", h: "wk-h-md" },
  { img: "/images/advisory/LandaAcademi (1).jpg", alt: "Landa Trip travel-education brand identity", brand: "Landa Academy", type: "Brand Identity", h: "wk-h-xl" },
  { img: "/images/advisory/12.jpg", alt: "Thredloom luxury resale mobile app UI", brand: "Thredloom", type: "Mobile App Design", h: "wk-h-sm" },
  { img: "/images/advisory/8.jpg", alt: "Verdalyn smart-farming mobile app UI", brand: "Verdalyn", type: "Mobile App Design", h: "wk-h-sm" },
  { img: "/images/advisory/Cream.jpg", alt: "Gourmet fruit and nut spread packaging", brand: "Gourmet Spreads", type: "Packaging Design", h: "wk-h-lg" },
  { img: "/images/advisory/pitch deck tPreventiGenee.jpg", alt: "Autilab autism-care mobile app UI", brand: "PreventiGene", type: "Pitch Deck", h: "wk-h-md" },
  { img: "/images/advisory/yam-yam.jpg", alt: "Yam Yam biscuit cream spread packaging", brand: "Yam Yam", type: "Packaging Design", h: "wk-h-xl" },
  { img: "/images/advisory/16.jpg", alt: "Orbiq astronomy learning mobile app UI", brand: "Orbiq", type: "Mobile App Design", h: "wk-h-sm" },
  { img: "/images/advisory/Landa Trip Identity.jpg ", alt: "Landa Academy mentoring brand identity", brand: "Landa Trip", type: "Brand Identity", h: "wk-h-lg" },
];

export default function Work() {
  const { t } = useLang();
  const ref = useRef<HTMLElement>(null);
  useStaggerReveal(ref, ".wk-card", "wk-visible", (i) => (i % 4) * 90, 0.1);

  return (
    <section className="work-section" id="work" ref={ref}>
      <div className="wrap">
        <div className="work-title-row">
          <span className="editorial-label">{t("/ OUR WORK", "/ نمونه‌کارهای ما")}</span>
          <h2 className="editorial-h2"><span className="eh2-outline">{t("BUILT", "ساخته‌شده")}</span><br /><span className="eh2-solid">{t("TO LAST.", "برای ماندگاری.")}</span></h2>
        </div>
      </div>

      <div className="wk-grid">
        {WORK.map((w, i) => (
          <div className={`wk-card ${w.h}`} key={i}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={w.img} alt={w.alt} loading="lazy" />
            <div className="wk-card__scrim"></div>
            <div className="wk-card__overlay">
              <div className="wk-card__text">
                <span className="wk-brand">{w.brand}</span>
                <span className="wk-type">{t(w.type, TYPE_FA[w.type] ?? w.type)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
