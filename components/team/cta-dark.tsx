"use client";
import { useEffect, useRef, useState } from "react";

export default function CtaDark() {
  const [vis, setVis] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0.1, rootMargin: "0px 0px -36px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative bg-[#0D0D0D] overflow-hidden px-5 sm:px-16 py-24 text-center">
      {/* Subtle yellow glow */}
      <div
        className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[480px] h-[280px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(255,230,0,0.05) 0%, transparent 70%)" }}
      />

      <div
        ref={ref}
        className={`relative z-10 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-[28px] sm:text-[32px] lg:text-[42px] font-extrabold text-white tracking-[-1.5px] mb-4 leading-[1.1]">
          Ready to Work With{" "}
          <span className="text-[#FFE600]">the Best?</span>
        </h2>
        <p className="text-[16px] text-white/50 mb-10">
          Every great company starts with the right team. We&apos;re ready to build yours.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <button className="bg-[#FFE600] text-[#0D0D0D] border-none px-8 py-[14px] rounded-full text-[14px] font-extrabold cursor-pointer font-[inherit] transition-[opacity,transform] duration-200 hover:opacity-90 hover:-translate-y-[1px]">
            Start Your Journey
          </button>
          <button className="bg-transparent text-white border border-white/20 px-8 py-[14px] rounded-full text-[14px] font-semibold cursor-pointer font-[inherit] transition-colors duration-200 hover:border-white/55">
            Learn About Us
          </button>
        </div>
      </div>
    </section>
  );
}
