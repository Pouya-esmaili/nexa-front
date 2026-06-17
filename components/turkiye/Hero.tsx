"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Row from "@/components/global/Row";

const stats = [
  { num: "USD 600K", label: "Min. investment" },
  { num: "6–12 mo", label: "Processing" },
  { num: "3 yrs", label: "Hold period" },
];

const HERO_IMG = "/images/investment/Türkiye.jpg";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const base = "transition-all ease-out";
  const show = "opacity-100 translate-y-0 translate-x-0";
  const hideUp = "opacity-0 translate-y-6";
  const hideLeft = "opacity-0 -translate-x-8";
  const hideRight = "opacity-0 translate-x-8";

  return (
    <section className="py-16 md:py-20 overflow-hidden bg-[#faf9f5]">

      {/* MOBILE */}
      <div className="md:hidden px-5">
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-5 ${base} duration-500 ${mounted ? show : hideUp}`}
          style={{ background: "#FAF6FF", color: "#8F27FF", border: "1px solid rgba(143,39,255,0.18)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#8F27FF]" />
          Türkiye Residency &amp; Citizenship
        </div>
        <h1 className={`text-3xl font-bold leading-tight tracking-tight mb-4 ${base} duration-600 delay-100 ${mounted ? show : hideUp}`}>
          Where <span className="text-[#8F27FF]">three continents</span> meet — your next passport begins here.
        </h1>
        <p className={`text-sm text-gray-600 leading-relaxed mb-6 ${base} duration-600 delay-200 ${mounted ? show : hideUp}`}>
          Through structured real estate investment, foreign nationals secure long-term residency and qualify for Turkish Citizenship by Investment — at the crossroads of Europe, Asia and the Middle East.
        </p>
        <div className={`grid grid-cols-3 gap-4 py-6 border-t border-b border-gray-200 mb-6 ${base} duration-600 delay-300 ${mounted ? show : hideUp}`}>
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-extrabold tracking-tight">{s.num}</div>
              <div className="text-[11px] text-gray-500 font-medium mt-1">{s.label}</div>
            </div>
          ))}
        </div>
        <Link
          href="#contact"
          className={`inline-flex items-center gap-2 px-6 py-3 bg-[#8F27FF] text-white font-semibold rounded-full text-sm ${base} duration-500 delay-400 ${mounted ? show : hideUp}`}
        >
          Start your application →
        </Link>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:block">
        <Row>
          <div className="flex items-center gap-14">

            {/* Left content */}
            <div className="flex-[1.1]">
              <h1 className={`text-3xl lg:text-[48px] font-bold leading-[1.08] tracking-tight mb-6 ${base} duration-700 delay-100 ${mounted ? show : hideLeft}`}>
                Where <span className="text-[#8F27FF]">three continents</span> meet — your next passport begins here.
              </h1>
              <p className={`text-[17px] text-[#474747] leading-[1.65] mb-8 max-w-[520px] ${base} duration-700 delay-200 ${mounted ? show : hideLeft}`}>
                Through structured real estate investment, foreign nationals secure long-term residency and qualify for Turkish Citizenship by Investment — at the crossroads of Europe, Asia and the Middle East.
              </p>
              <div className={`grid grid-cols-3 gap-7 py-7 border-t border-b border-gray-200 mb-9 ${base} duration-700 delay-300 ${mounted ? show : hideLeft}`}>
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-[34px] font-extrabold tracking-tight leading-none">{s.num}</div>
                    <div className="text-[13px] text-gray-500 font-medium mt-2">{s.label}</div>
                  </div>
                ))}
              </div>
              <Link
                href="#contact"
                className={`inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#8F27FF] text-white font-semibold rounded-full text-[15px] transition-all hover:-translate-y-0.5 ${base} duration-500 delay-[400ms] ${mounted ? show : hideLeft}`}
                style={{ boxShadow: "0 12px 28px rgba(143,39,255,0.28)" }}
              >
                Start your application →
              </Link>
            </div>

            {/* Right visual */}
            <div className={`flex-[0.9] relative h-[380px] lg:h-[540px] ${base} duration-800 delay-200 ${mounted ? show : hideRight}`}>
              <div
                className="absolute inset-0"
                style={{
                  borderRadius: "32px 120px 32px 32px",
                  backgroundImage: `url('${HERO_IMG}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
                }}
              />
            </div>

          </div>
        </Row>
      </div>
    </section>
  );
}
