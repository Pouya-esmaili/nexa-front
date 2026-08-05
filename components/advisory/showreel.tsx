"use client";

import { Fragment, useEffect, useRef } from "react";
import { useLang } from "@/components/global/LanguageProvider";

/* Persian labels for the finite set of portfolio tags & types */
const TAG_FA: Record<string, string> = {
  "Website": "وب‌سایت",
  "Brand Identity": "هویت برند",
  "Logo Design": "طراحی لوگو",
  "Packaging": "بسته‌بندی",
  "Campaign": "کمپین",
  "Product Concept": "کانسپت محصول",
  "Landing Page": "صفحه‌ی فرود",
};
const TYPE_FA: Record<string, string> = {
  "Website Design": "طراحی وب‌سایت",
  "Brand Identity": "هویت برند",
  "Personal Brand Identity": "هویت برند شخصی",
  "Logo Design": "طراحی لوگو",
  "Packaging Design": "طراحی بسته‌بندی",
  "Product Campaign": "کمپین محصول",
  "Product Concept": "کانسپت محصول",
  "Packaging Concept": "کانسپت بسته‌بندی",
  "Landing Page Design": "طراحی صفحه‌ی فرود",
};
const WORDS_FA = ["برند", "مدل", "بازار", "رشد", "هویت", "داستان", "سایت", "بینش"];

/* Portfolio slides — order & captions match the original design */
const SLIDES = [
  { img: "/images/advisory/13.jpg", alt: "Kidsa website design", tag: "Website", brand: "Kidsa", type: "Website Design" },
  { img: "/images/advisory/12.jpg", alt: "Arvia brand identity", tag: "Brand Identity", brand: "Arvia", type: "Brand Identity" },
  { img: "/images/advisory/10.jpg", alt: "Aureva luxury brand identity", tag: "Brand Identity", brand: "Aureva", type: "Brand Identity" },
  { img: "/images/advisory/8.jpg", alt: "Sarra Hadab personal brand", tag: "Brand Identity", brand: "Sarra Hadab", type: "Personal Brand Identity" },
  { img: "/images/advisory/19.jpg", alt: "BoldPro logo design", tag: "Logo Design", brand: "BoldPro", type: "Logo Design" },
  { img: "/images/advisory/11.jpg", alt: "VigorFuel packaging design", tag: "Packaging", brand: "VigorFuel", type: "Packaging Design" },
  { img: "/images/advisory/7.jpg", alt: "Skin Concept product infographic", tag: "Campaign", brand: "Skin Concept", type: "Product Campaign" },
  { img: "/images/advisory/1.jpg", alt: "Bounty product concept", tag: "Product Concept", brand: "Bounty", type: "Product Concept" },
  { img: "/images/advisory/6.jpg", alt: "Coca-Cola Lassi packaging concept", tag: "Packaging", brand: "Coca-Cola Lassi", type: "Packaging Concept" },
  { img: "/images/advisory/17.jpg", alt: "Beauty e-commerce website", tag: "Website", brand: "Beauty Co.", type: "Website Design" },
  { img: "/images/advisory/3.jpg", alt: "Bold landing page design", tag: "Landing Page", brand: "Bold", type: "Landing Page Design" },
];

const CREDITS = SLIDES.map((s) => s.brand);
const WORDS = ["brand", "model", "market", "growth", "identity", "story", "site", "insight"];

/* Slideshow pacing — seconds between each slide entrance.
   CYCLE must equal SLIDES.length * STAGGER so the loop wraps back to the
   first image with no gap. Lower STAGGER = faster changes. */
const STAGGER = 2.5;
const CYCLE = SLIDES.length * STAGGER;

export default function Showreel() {
  const { t, lang } = useLang();
  const wordRef = useRef<HTMLElement>(null);

  /* cycling word — same timing as the original cycle() helper */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = wordRef.current;
    if (!el) return;
    const words = lang === "fa" ? WORDS_FA : WORDS;
    el.textContent = words[0];
    let i = 0;
    const id = setInterval(() => {
      i = (i + 1) % words.length;
      el.classList.add("word-out");
      setTimeout(() => {
        el.textContent = words[i];
        el.classList.remove("word-out");
      }, 420);
    }, 2200);
    return () => clearInterval(id);
  }, [lang]);

  return (
    <section className="showreel" style={{ ["--sr-cycle" as string]: `${CYCLE}s` }}>
      <div className="showreel__bg">
        {SLIDES.map((s, i) => (
          <div className="sr-slide" style={{ animationDelay: `${i * STAGGER}s` }} key={s.brand}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="sr-media"><img src={s.img} alt={s.alt} loading={i === 0 ? "eager" : "lazy"} style={{ animationDelay: `${i * STAGGER}s` }} /></div>
            <span className="sr-tag" style={{ animationDelay: `${i * STAGGER}s` }}>{t(s.tag, TAG_FA[s.tag] ?? s.tag)}</span>
            <div className="sr-caption" style={{ animationDelay: `${i * STAGGER}s` }}>
              <span className="sr-caption__brand">{s.brand}</span>
              <span className="sr-caption__type">{t(s.type, TYPE_FA[s.type] ?? s.type)}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="showreel__overlay"></div>

      <div className="showreel__content">
        <div className="hero-big-text">
          <div className="hbt-line hbt-line1">
            <span className="hbt-outline">{t("WE", "ما")}</span>
            <span className="hbt-solid">{t("BUILD", "می‌سازیم")}</span>
          </div>
          <div className="hbt-line hbt-line2">
            <span className="hbt-solid">{t("THE", "")}</span>
            <span className="hbt-purple"><em ref={wordRef}>{t("brand", "برند")}</em></span>
          </div>
          <div className="hbt-line hbt-line3">
            <span className="hbt-outline">{t("BEHIND", "پشتِ")}</span>
          </div>
          <div className="hbt-line hbt-line4">
            <span className="hbt-solid">{t("THE", "")}</span>
            <span className="hbt-solid">{t("BUSINESS.", "کسب‌وکار.")}</span>
          </div>
        </div>
      </div>

      <div className="showreel__credits">
        <div className="showreel__credits-track">
          {[...CREDITS, ...CREDITS].map((brand, i) => (
            <Fragment key={i}>
              <span>{brand}</span>
              <span className="showreel__credits-dot">✦</span>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
