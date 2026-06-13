"use client";
import { useEffect, useRef, useState } from "react";
import Row from "@/components/global/Row";

const stats = [
  { pill: "Track Record", num: 89,  suf: "%", label: "Successful cases across all programs" },
  { pill: "Global Reach", num: 400, suf: "+", label: "Entrepreneurs placed in 5 countries" },
  { pill: "Experience",   num: 7,   suf: "+", label: "Years of proven market expertise" },
];

function StatItem({ pill, num, suf, label, idx }: { pill: string; num: number; suf: string; label: string; idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const duration = 1400;
    const delay = idx * 160 + 200;
    let raf: number;
    const timeout = setTimeout(() => {
      const start = performance.now();
      function tick(now: number) {
        const p = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        setCount(Math.round(ease * num));
        if (p < 1) raf = requestAnimationFrame(tick);
      }
      raf = requestAnimationFrame(tick);
    }, delay);
    return () => { clearTimeout(timeout); cancelAnimationFrame(raf); };
  }, [visible, num, idx]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center py-9 px-6 transition-all duration-[600ms]"
      style={{
        borderRight: idx < 2 ? "1px solid rgba(255,255,255,.07)" : undefined,
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(12px)",
        transitionDelay: visible ? `${idx * 160 + 100}ms` : "0ms",
      }}
    >
      <span
        className="inline-flex items-center gap-[5px] px-[10px] py-1 rounded-full text-[10px] font-bold tracking-[.12em] uppercase mb-[10px]"
        style={{ background: "rgba(255,230,0,.08)", border: "1px solid rgba(255,230,0,.2)", color: "#FFE600" }}
      >
        {pill}
      </span>
      <div
        className="text-[48px] font-extrabold text-white tracking-[-0.04em] leading-none mb-2"
        style={{ fontVariantNumeric: "tabular-nums" }}
      >
        {visible ? count : 0}<span className="text-[#8F27FF]">{suf}</span>
      </div>
      <div className="text-[12.5px] text-white/40 font-medium leading-snug" style={{ maxWidth: "18ch" }}>
        {label}
      </div>
    </div>
  );
}

export default function StatsBand() {
  return (
    <section className="bg-black relative overflow-hidden">
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px]"
        style={{ background: "radial-gradient(ellipse,rgba(143,39,255,0.2) 0%,transparent 70%)" }}
      />
      <Row className="relative z-[1]">
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {stats.map((s, i) => (
            <StatItem key={i} {...s} idx={i} />
          ))}
        </div>
      </Row>
    </section>
  );
}
