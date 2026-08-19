"use client";
import { useEffect, useRef, useState } from "react";
import Row from "@/components/global/Row";
import { useLang } from "@/components/global/LanguageProvider";

const stats = [
  { pill: "Track Record", pillFa: "کارنامه موفق", num: 89,  suf: "%", label: "Successful cases across all programs", labelFa: "پرونده‌های موفق در تمامی برنامه‌ها" },
  { pill: "Global Reach",  pillFa: "شبکه جهانی", num: 400, suf: "+", label: "Entrepreneurs placed in 5 countries", labelFa: "همراهی بیش از ۴۰۰ کارآفرین در ۵ کشور" },
  { pill: "Experience",    pillFa: "تجربه", num: 10,   suf: "+", label: "Years of proven market expertise", labelFa: "بیش از ۱۰ سال تجربه در بازارهای بین‌المللی" },
];

function useCountUp(target: number, inView: boolean, duration = 1200) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const id = setInterval(() => {
      start = Math.min(start + step, target);
      setVal(Math.floor(start));
      if (start >= target) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [inView, target, duration]);
  return val;
}

function StatItem({ pill, pillFa, num, suf, label, labelFa, idx }: { pill: string; pillFa: string; num: number; suf: string; label: string; labelFa: string; idx: number }) {
  const { t, n } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); ob.disconnect(); } }, { threshold: 0.3 });
    ob.observe(el); return () => ob.disconnect();
  }, []);
  const val = useCountUp(num, inView);
  return (
    <div ref={ref} className="flex flex-col items-center py-12 px-6"
      style={{ borderRight: idx < 2 ? "1px solid rgba(255,255,255,.08)" : undefined }}>
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-[.12em] uppercase mb-3"
        style={{ background: "rgba(255,230,0,.08)", border: "1px solid rgba(255,230,0,.2)", color: "#FFE600" }}>
        {t(pill, pillFa)}
      </span>
      <div className="text-[48px] font-extrabold text-white tracking-[-0.04em] leading-none">
        {n(inView ? val : 0)}<span className="text-[#8F27FF]">{suf}</span>
      </div>
      <div className="text-[12.5px] text-white/40 mt-2 font-medium text-center leading-snug max-w-[18ch]">{t(label, labelFa)}</div>
    </div>
  );
}

export default function StatsBand() {
  return (
    <section className="bg-black">
      <Row>
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {stats.map((s, i) => <StatItem key={i} {...s} idx={i} />)}
        </div>
      </Row>
    </section>
  );
}
