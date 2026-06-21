"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function HeroTeam() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1, rootMargin: "0px 0px -36px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="bg-white overflow-hidden">
      <div
        ref={ref}
        className={`max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-16 py-6 sm:py-12 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          visible ? "opacity-100 scale-100" : "opacity-0 scale-[0.93]"
        }`}
      >
        <div className="relative w-full h-[260px] sm:h-[380px] lg:h-[520px] rounded-[20px] overflow-hidden shadow-[0_24px_80px_rgba(143,39,255,0.12),0_4px_16px_rgba(0,0,0,0.06)]">
          <Image
            src="/images/ourteam/Team.jpg"
            alt="Nexa Team"
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
