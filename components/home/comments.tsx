"use client";

import { useState, useCallback, useEffect } from "react";
import Reveal from "@/components/global/LazyReveal";
import { useLang } from "@/components/global/LanguageProvider";

const testimonials = [
  {
    name: "Chloe Patterson", date: "May 5, 2023",
    gradient: "linear-gradient(135deg,#f093fb,#f5576c)", initial: "C",
    text: "Great quality and attention to detail. Their designs elevated my brand significantly. The team at Nexa truly understands what founders need to succeed globally.",
  },
  {
    name: "Isabella Turner", date: "March 22, 2023",
    gradient: "linear-gradient(135deg,#4facfe,#00f2fe)", initial: "I",
    text: "Working with Nexa was a transformative experience. Their network opened doors I couldn't have accessed on my own. Highly recommend for any serious founder.",
  },
  {
    name: "Ava Mitchell", date: "January 15, 2023",
    gradient: "linear-gradient(135deg,#43e97b,#38f9d7)", initial: "A",
    text: "The strategic advisory team at Nexa helped us refine our pitch and close our seed round faster than expected. Professional, responsive, and results-driven.",
  },
  {
    name: "Benjamin Collins", date: "February 8, 2023",
    gradient: "linear-gradient(135deg,#fa709a,#fee140)", initial: "B",
    text: "From our first consultation to market entry, Nexa provided exceptional support. Their global connections made expansion into Canada remarkably smooth.",
  },
  {
    name: "Sophia Reynolds", date: "April 3, 2023",
    gradient: "linear-gradient(135deg,#a18cd1,#fbc2eb)", initial: "S",
    text: "Nexa's investment advisory helped us navigate complex international regulations with confidence. Their expertise and dedication to our success was unmatched.",
  },
];

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" className="ml-auto flex-shrink-0">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const GAP = 20;

export default function CommentsSection() {
  const { t } = useLang();
  const [active, setActive] = useState(0);
  const [perView, setPerView] = useState(3);

  const maxIndex = Math.max(0, testimonials.length - perView);

  /* responsive perView — also keep the active page within the new range */
  useEffect(() => {
    const update = () => {
      const pv = window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3;
      setPerView(pv);
      setActive((a) => Math.min(a, Math.max(0, testimonials.length - pv)));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  /*
   * `active` is the current page. Advance one card + gap per step, expressed
   * purely in CSS so it never depends on a measured width — one card advance
   * equals (100% + GAP) / perView. Measuring was the real bug: the track lives
   * inside a LazyReveal that mounts AFTER this component's effects run, so a
   * ResizeObserver only ever saw a null node and the width stayed 0.
   */
  const offset = `translateX(calc((100% + ${GAP}px) / ${perView} * ${active} * -1))`;

  const prev = useCallback(() => setActive((a) => Math.max(0, a - 1)), []);
  const next = useCallback(() => setActive((a) => Math.min(maxIndex, a + 1)), [maxIndex]);

  return (
    <section className="py-20 md:py-24 bg-[#F7F6F9]">
      <div className="max-w-[1240px] mx-auto px-6">

        <Reveal variant="up">
          <div className="text-center mb-14">
            <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em]">
              {t("Our Community's Experience", "تجربه‌ی همکاری با ما")}
            </h2>
          </div>
        </Reveal>

        <Reveal variant="up" delay={80}>
          <div className="overflow-hidden" dir="ltr">
            <div
              className="flex gap-5 transition-transform duration-500 ease-in-out"
              style={{ transform: offset }}
            >
              {testimonials.map((item, i) => {
                const isActive = i === active;
                return (
                  <div
                    key={item.name}
                    className={[
                      "flex-shrink-0 bg-white rounded-[20px] p-7 border transition-all duration-200",
                      isActive
                        ? "border-[#8F27FF] shadow-[0_8px_24px_rgba(143,39,255,0.12)]"
                        : "border-[#E2E2E2] hover:border-[#8F27FF] hover:shadow-[0_8px_24px_rgba(143,39,255,0.1)]",
                    ].join(" ")}
                    style={{ width: `calc((100% - ${GAP * (perView - 1)}px) / ${perView})` }}
                  >
                    {/* Top row */}
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-[42px] h-[42px] rounded-full grid place-items-center text-white font-bold text-[16px] flex-shrink-0"
                        style={{ background: item.gradient }}
                      >
                        {item.initial}
                      </div>
                      <div>
                        <div className="font-semibold text-[14px] tracking-[-0.01em]">{item.name}</div>
                        <div className="text-[12px] text-[#929292] mt-0.5">{item.date}</div>
                      </div>
                      <GoogleIcon />
                    </div>

                    {/* Stars */}
                    <div className="flex gap-0.5 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-[#F59E0B] text-[14px]">★</span>
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-[14px] text-[#929292] leading-[1.68]" dir="ltr">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        
        <div className="flex items-center justify-center gap-2.5 mt-9" dir="ltr">
          <button
            onClick={prev}
            disabled={active === 0}
            className="w-10 h-10 rounded-full bg-white border-[1.5px] border-[#E2E2E2] grid place-items-center text-[#474747] hover:bg-[#8F27FF] hover:border-[#8F27FF] hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          <div className="flex items-center gap-1.5 px-3">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: i === active ? "22px" : "8px",
                  background: i === active ? "#8F27FF" : "#D9D9D9",
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            disabled={active >= maxIndex}
            className="w-10 h-10 rounded-full bg-white border-[1.5px] border-[#E2E2E2] grid place-items-center text-[#474747] hover:bg-[#8F27FF] hover:border-[#8F27FF] hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
