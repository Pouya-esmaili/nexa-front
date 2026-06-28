"use client";
import { useEffect, useRef, useState } from "react";

const offices = [
  {
    flag: "🇨🇦",
    country: "Vancouver, Canada",
    address: "301-1414 Barclay St, Vancouver,\nBritish Columbia, Canada",
    phone: "+1 (604) 351-5951",
  },
  {
    flag: "🇮🇷",
    country: "Tehran, Iran",
    address: "No. 27, Neom Building ,\nTajrish Square, Tehran",
    phone: "+98 (31) 3131-1914",
  },
    {
    flag: "🇮🇷",
    country: "Esfahan, Iran",
    address: "Tala Building, Saadat Abad,   Azadi Square, Esfahan",
    phone: "+98 (31) 3131-1914",
  },
];

export default function OfficesSection() {
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
    <section className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-16 py-[60px]">
      <div
        ref={headRef}
        className={`text-center mb-[52px] transition-all duration-700 delay-75 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          headVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-[26px] sm:text-[32px] lg:text-[40px] font-extrabold tracking-[-1.2px] leading-[1.1]">
          Our Offices
        </h2>
      </div>

      <div
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-3 gap-[18px] mt-11"
      >
        {offices.map((office, i) => (
          <div
            key={office.country}
            className={`border border-[#E8E8E8] rounded-[12px] px-[34px] py-[30px] flex gap-[18px] items-start transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[#DEC8FF] ${
              gridVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: gridVis ? `${i * 70}ms` : "0ms" }}
          >
            <div className="text-[34px] leading-none">{office.flag}</div>
            <div>
              <div className="text-[17px] font-extrabold tracking-[-0.3px] mb-[5px]">
                {office.country}
              </div>
              <div className="text-[13px] text-[#5A5A5A] leading-[1.65] mb-[7px] whitespace-pre-line">
                {office.address}
              </div>
              <div className="text-[13px] text-[#8F27FF] font-bold">{office.phone}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
