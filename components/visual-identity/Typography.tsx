"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "@/components/global/LanguageProvider";
import { useStaggerReveal } from "@/components/advisory/useStaggerReveal";

const WEIGHTS = [
  { w: 400, label: "Regular", labelFa: "رگولار" },
  { w: 500, label: "Medium", labelFa: "مدیوم" },
  { w: 700, label: "Bold", labelFa: "بولد" },
  { w: 900, label: "Black", labelFa: "بلک" },
];

const ROWS = [
  { label: "H1", size: 40, weight: undefined as number | undefined, spec: "64 / 900", text: "The quick brand fox.", caption: false },
  { label: "H2", size: 30, weight: undefined as number | undefined, spec: "40 / 800", text: "The quick brand fox.", caption: false },
  { label: "H3", size: 22, weight: undefined as number | undefined, spec: "24 / 700", text: "The quick brand fox.", caption: false },
  { label: "Body", size: 16, weight: 500, spec: "16 / 500", text: "The quick brand fox jumps over the lazy layout.", caption: false },
  { label: "Caption", size: 12, weight: 600, spec: "12 / 600", text: "The quick brand fox", caption: true },
];

export default function Typography() {
  const { t } = useLang();
  const scaleRef = useRef<HTMLDivElement>(null);
  const [weight, setWeight] = useState(900);
  useStaggerReveal(scaleRef, ".vi-type__row", "vi-visible", (i) => i * 90, 0.2);

  useEffect(() => {
    const cycle = [400, 500, 700, 900];
    const timer = setInterval(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      setWeight((w) => cycle[(cycle.indexOf(w) + 1) % cycle.length]);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="vi-section vi-type">
      <div className="wrap">
        <div className="vi-comp-intro">
          <span className="vi-label">{t("/ TYPOGRAPHY", "/ تایپوگرافی")}</span>
          <h2 className="editorial-h2">
            <span className="eh2-outline">{t("TYPE THAT", "تایپی که")}</span> <span className="eh2-solid">{t("CARRIES", "وزن")}</span>
            <br />
            <span className="eh2-purple">{t("ITS OWN WEIGHT.", "خودش را به دوش می‌کشد.")}</span>
          </h2>
        </div>
        <div className="vi-type__layout">
          <div className="vi-type__specimen">
            <div className="vi-type__glyph" style={{ fontWeight: weight }}>Aa</div>
            <div className="vi-type__weights">
              {WEIGHTS.map((wt) => (
                <span
                  key={wt.w}
                  className={`vi-type__weight-tag${weight === wt.w ? " vi-active" : ""}`}
                  style={{ cursor: "pointer" }}
                  onClick={() => setWeight(wt.w)}
                >
                  {t(wt.label, wt.labelFa)}
                </span>
              ))}
            </div>
          </div>
          <div className="vi-type__scale" ref={scaleRef}>
            {ROWS.map((r) => (
              <div className="vi-type__row" key={r.label}>
                <span className="vi-type__row-label">{r.label}</span>
                <span
                  className="vi-type__row-sample"
                  style={{
                    fontSize: r.size,
                    fontWeight: r.weight,
                    textTransform: r.caption ? "uppercase" : undefined,
                    letterSpacing: r.caption ? ".06em" : undefined,
                  }}
                >
                  {r.text}
                </span>
                <span className="vi-type__row-px">{r.spec}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
