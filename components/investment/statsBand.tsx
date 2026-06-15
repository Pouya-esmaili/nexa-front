"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { pill: "Track Record", target: 89, suffix: "%", label: "Successful cases across all programs", startDelay: 200 },
  { pill: "Portfolio",    target: 400, suffix: "+", label: "Ventures supported globally",         startDelay: 360 },
  { pill: "Experience",  target: 7,   suffix: "+", label: "Years of investment expertise",        startDelay: 520 },
];

const DURATION = 1400;

function easeOut(p: number) {
  return 1 - Math.pow(1 - p, 3);
}

export default function InvestmentStatsBand() {
  const bandRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState([0, 0, 0]);
  const triggered = useRef(false);

  useEffect(() => {
    const el = bandRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          io.disconnect();

          STATS.forEach((stat, i) => {
            setTimeout(() => {
              const start = performance.now();
              const tick = (now: number) => {
                const p = Math.min((now - start) / DURATION, 1);
                const val = Math.round(easeOut(p) * stat.target);
                setCounts((prev) => {
                  const next = [...prev];
                  next[i] = val;
                  return next;
                });
                if (p < 1) requestAnimationFrame(tick);
              };
              requestAnimationFrame(tick);
            }, stat.startDelay);
          });
        }
      },
      { threshold: 0.3 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={bandRef} className="relative overflow-hidden" style={{ background: "#000" }}>
      {/* Radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: 600, height: 200,
          background: "radial-gradient(ellipse, rgba(143,39,255,0.2) 0%, transparent 70%)",
        }}
      />

      <div className="px-6 mx-auto w-full relative z-10" style={{ maxWidth: 1240 }}>
        <div
          className="stats-band-grid grid"
          style={{ gridTemplateColumns: "repeat(3,1fr)" }}
        >
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="stats-band-item flex flex-col items-center text-center"
              style={{
                padding: "36px 24px",
                borderRight: i < 2 ? "1px solid rgba(255,255,255,0.07)" : "none",
              }}
            >
              {/* Pill */}
              <div
                className="stats-band-pill inline-flex items-center gap-1 font-bold uppercase mb-2.5"
                style={{
                  fontSize: 10,
                  letterSpacing: "0.12em",
                  padding: "4px 10px",
                  background: "rgba(255,230,0,0.08)",
                  border: "1px solid rgba(255,230,0,0.2)",
                  borderRadius: 999,
                  color: "#FFE600",
                }}
              >
                {stat.pill}
              </div>

              {/* Number */}
              <div
                className="stats-band-number font-extrabold text-white mb-2"
                style={{
                  fontSize: 48,
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {counts[i]}
                <span style={{ color: "#8F27FF" }}>{stat.suffix}</span>
              </div>

              {/* Label */}
              <div
                className="font-medium text-center leading-snug"
                style={{ fontSize: 12.5, color: "rgba(255,255,255,0.4)", maxWidth: "18ch" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .stats-band-item {
            padding: 24px 8px !important;
          }
          .stats-band-pill {
            font-size: 8px !important;
            padding: 4px 7px !important;
            text-align: center;
          }
          .stats-band-number {
            font-size: 32px !important;
          }
        }
      `}</style>
    </div>
  );
}
