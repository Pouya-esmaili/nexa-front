"use client";
import { useEffect, useRef, useState } from "react";
import { useLang } from "@/components/global/LanguageProvider";

const values = [
  {
    title: { en: "Global Mindset", fa: "نگرش جهانی" },
    desc: { en: "We think beyond borders and build solutions that scale internationally from day one.", fa: "ما فراتر از مرزها می‌اندیشیم و راهکارهایی می‌سازیم که از روز نخست در سطح بین‌المللی مقیاس‌پذیرند." },
    icon: (
      <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: { en: "Fearless Innovation", fa: "نوآوری بی‌پروا" },
    desc: { en: "Bold ideas are our foundation — we embrace risk to unlock breakthrough growth.", fa: "ایده‌های جسورانه بنیان ما هستند — برای گشودن مسیر رشدهای بزرگ، ریسک را می‌پذیریم." },
    icon: (
      <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: { en: "Trusted Partnership", fa: "مشارکت قابل‌اعتماد" },
    desc: { en: "We build long-term relationships based on transparency and measurable results.", fa: "روابط بلندمدت را بر پایه‌ی شفافیت و نتایج قابل‌اندازه‌گیری می‌سازیم." },
    icon: (
      <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const DELAYS = [60, 130, 200];

export default function ValuesSection() {
  const { t } = useLang();
  const [headVis, setHeadVis] = useState(false);
  const [gridVis, setGridVis] = useState(false);
  const headRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const makeObs = (el: HTMLElement | null, set: (v: boolean) => void) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) { set(true); obs.disconnect(); } },
        { threshold: 0.1, rootMargin: "0px 0px -36px 0px" }
      );
      obs.observe(el);
      return () => obs.disconnect();
    };
    const c1 = makeObs(headRef.current, setHeadVis);
    const c2 = makeObs(gridRef.current, setGridVis);
    return () => { c1?.(); c2?.(); };
  }, []);

  return (
    <section className="bg-[#F7F7F7] py-[88px]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-16">
        <div
          ref={headRef}
          className={`text-center mb-[52px] transition-all duration-700 delay-75 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            headVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-[26px] sm:text-[32px] lg:text-[40px] font-extrabold tracking-[-1.2px] leading-[1.1]">
            {t("Our Values", "ارزش‌های ما")}
          </h2>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px] mt-11"
        >
          {values.map((v, i) => (
            <div
              key={v.title.en}
              className={`bg-white border border-[#E8E8E8] rounded-[12px] p-8 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[#DEC8FF] hover:shadow-[0_8px_32px_rgba(143,39,255,0.07)] ${
                gridVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: gridVis ? `${DELAYS[i]}ms` : "0ms" }}
            >
              <div className="w-12 h-12 rounded-[13px] bg-[#F3EAFF] border border-[#DEC8FF] flex items-center justify-center mb-[18px] text-[#8F27FF]">
                {v.icon}
              </div>
              <h3 className="text-[16px] font-bold mb-[9px] tracking-[-0.2px]">{t(v.title.en, v.title.fa)}</h3>
              <p className="text-[13px] text-[#5A5A5A] leading-[1.68]">{t(v.desc.en, v.desc.fa)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
