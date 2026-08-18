"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "@/components/global/LanguageProvider";

const MARK_ICONS = [
  { name: "PreventiGene", color: "/images/visual-identity/046-img.png", white: "/images/visual-identity/047-img.png" },
  { name: "Diaco", color: "/images/visual-identity/048-img.png", white: "/images/visual-identity/049-img.png" },
  { name: "Landa Craft", color: "/images/visual-identity/050-img.png", white: "/images/visual-identity/051-img.png" },
];

export default function MarkBuilder() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const [drawn, setDrawn] = useState(false);
  const [idx, setIdx] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setDrawn(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setDrawn(true);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      setFading(true);
      setTimeout(() => {
        setIdx((i) => (i + 1) % MARK_ICONS.length);
        setFading(false);
      }, 320);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const m = MARK_ICONS[idx];

  return (
    <section className={`vi-section vi-mark${drawn ? " vi-drawn" : ""}`} id="viMark" ref={sectionRef}>
      <div className="wrap">
        <div className="vi-mark__grid">
          <div className="vi-mark__stage">
            <div className="vi-mark__stage-glow"></div>
            <div className="vi-mark__corner vi-mark__corner--tl"></div>
            <div className="vi-mark__corner vi-mark__corner--tr"></div>
            <div className="vi-mark__corner vi-mark__corner--bl"></div>
            <div className="vi-mark__corner vi-mark__corner--br"></div>
            <svg className="vi-mark__guides" viewBox="0 0 300 300">
              <circle className="vi-mark__guide-circle vi-mark__guide-circle--outer" cx="150" cy="150" r="120" />
              <circle className="vi-mark__guide-circle" cx="150" cy="150" r="90" />
              <circle className="vi-mark__guide-circle" cx="150" cy="150" r="60" />
              <line className="vi-mark__guide-cross" x1="150" y1="10" x2="150" y2="290" />
              <line className="vi-mark__guide-cross" x1="10" y1="150" x2="290" y2="150" />
            </svg>
            <img className={`vi-mark__glyph vi-mark__glyph--img${fading ? " vi-fade-swap" : ""}`} src={m.white} alt={`${m.name} mark`} />
            <span className={`vi-mark__label-tag${fading ? " vi-fade-swap" : ""}`}>{m.name.toUpperCase()}</span>
            <div className="vi-mark__progress">
              {MARK_ICONS.map((_, i) => (
                <span key={i} className={`vi-mark__progress-dot${i === idx ? " vi-active" : ""}`}></span>
              ))}
            </div>
          </div>
          <div className="vi-mark__copy">
            <span className="vi-label">{t("/ THE MARK", "/ لوگو")}</span>
            <h2 className="editorial-h2">
              <span className="eh2-outline" style={{ WebkitTextStrokeColor: "#fff" }}>{t("A MARK BUILT", "لوگویی که بر پایه")}</span>
              <br />
              <span className="eh2-purple" style={{ color: "var(--yellow)" }}>{t("ON A GRID.", "یک گرید طراحی شده است.")}</span>
            </h2>
            <p>{t("Every logo we design sits on a geometric grid — proportion, clear space and a minimum size are decided before a single curve is drawn. That's why it still reads at 16px and still holds up at three stories tall.", "تمام لوگوهایی که طراحی می‌کنیم بر اساس یک گرید هندسی شکل می‌گیرند. تناسبات، فضای تنفس و حداقل اندازه لوگو، پیش از طراحی حتی یک منحنی مشخص می‌شوند. به همین دلیل، لوگو هم در اندازه ۱۶ پیکسل خوانا باقی می‌ماند و هم در ابعاد بسیار بزرگ، مانند یک سازه چندطبقه، استحکام بصری خود را حفظ می‌کند.")}</p>
            <div className="vi-mark__rules">
              <div className="vi-mark__rule"><b>{t("Clear space", "فضای تنفس")}</b> {t("Never crowded by other elements", "بدون ازدحام و تداخل با سایر عناصر")}</div>
              <div className="vi-mark__rule"><b>{t("Minimum size", "حداقل اندازه")}</b> {t("Tested down to favicon scale", "آزمایش‌شده تا ابعاد Favicon")}</div>
              <div className="vi-mark__rule"><b>{t("Construction", "ساختار")}</b> {t("Built on a reusable proportion grid", "طراحی‌شده بر پایه یک گرید تناسبات قابل استفاده مجدد")}</div>
            </div>
            <div className="vi-mark__variants">
              <div className="vi-mark__variant"><img src={m.color} alt={`${m.name} mark on white`} style={{ maxWidth: 40, maxHeight: 40, width: "auto", height: "auto", display: "block" }} /></div>
              <div className="vi-mark__variant"><img src={m.white} alt={`${m.name} mark on purple`} style={{ maxWidth: 40, maxHeight: 40, width: "auto", height: "auto", display: "block" }} /></div>
              <div className="vi-mark__variant"><img src={m.white} alt={`${m.name} mark reversed`} style={{ maxWidth: 40, maxHeight: 40, width: "auto", height: "auto", display: "block" }} /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
