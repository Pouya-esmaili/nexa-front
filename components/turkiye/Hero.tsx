"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Row from "@/components/global/Row";

const stats = [
  { num: "USD 600K", label: "Min. Investment" },
  { num: "6–12 mo", label: "Processing" },
  { num: "3 yrs", label: "Hold Period" },
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
    <Row className="mt-18 mb-20">

      {/* ================= MOBILE ================= */}
      <div className="md:hidden px-2 relative z-10">
        {/* Image */}
        <div
          className={`${base} duration-700 delay-75 ${mounted ? show : hideUp
            } h-56 rounded-[32px_120px_32px_32px] overflow-hidden mb-6`}
          style={{
            background: `url('${HERO_IMG}') center/cover`,
            boxShadow: "0 16px 40px rgba(0,0,0,.08)",
          }}
        />


        {/* Title */}
        <h1
          className={`text-3xl font-bold leading-tight tracking-tight mb-4 ${base} duration-700 delay-150 ${mounted ? show : hideUp
            }`}
        >
          Where <span className="text-[#8F27FF]">three continents</span> meet —
          your next passport begins here.
        </h1>

        {/* Description */}
        <p
          className={`text-sm text-gray-600 leading-relaxed mb-6 ${base} duration-700 delay-200 ${mounted ? show : hideUp
            }`}
        >
          Through structured real estate investment, foreign nationals secure
          long-term residency and qualify for Turkish Citizenship by Investment
          — at the crossroads of Europe, Asia and the Middle East.
        </p>

        <div
          className={`flex items-center justify-between py-6 border-t border-b border-gray-200 mb-6 ${base} duration-700 delay-300 ${mounted ? show : hideUp
            }`}
        >
          {stats.map((item) => (
            <div key={item.label} className="flex-1 text-center">
              <div className="text-[18px] font-bold">{item.num}</div>
              <div className="text-[10px] uppercase tracking-wide text-gray-500 mt-1">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <Link
          href="#contact"
          className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8F27FF] text-white font-semibold text-sm ${base} duration-700 delay-[400ms] ${mounted ? show : hideUp
            }`}
          style={{
            boxShadow: "0 12px 28px rgba(143,39,255,.28)",
            color: "#fff"
          }}
        >
          Start your application →
        </Link>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block relative z-10">

        <div className="grid grid-cols-[1.15fr_0.85fr] gap-10 xl:gap-12 items-center">

          {/* Left */}
          <div>

            {/* Title */}
            <h1
              className={`text-[48px] font-bold leading-[1.06] tracking-[-0.03em] mb-6 ${base} duration-700 delay-100 ${mounted ? show : hideLeft
                }`}
            >
              Where{" "}
              <span className="text-[#8F27FF]">
                three continents
              </span>{" "}
              meet — your next passport begins here.
            </h1>

            {/* Description */}
            <p
              className={`text-[16px] text-[#474747] leading-[1.65] mb-8 max-w-[520px] ${base} duration-700 delay-200 ${mounted ? show : hideLeft
                }`}
            >
              Through structured real estate investment, foreign nationals
              secure long-term residency and qualify for Turkish Citizenship
              by Investment — at the crossroads of Europe, Asia and the Middle
              East.
            </p>

            {/* Stats */}
            <div
              className={`grid grid-cols-3 py-6 border-t border-b border-gray-200 mb-9 ${base} duration-700 delay-300 ${mounted ? show : hideLeft
                }`}
            >
              {stats.map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-[28px] font-bold leading-none">
                    {item.num}
                  </div>
                  <div className="text-[11px] uppercase tracking-widest text-gray-500 mt-2">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Button */}
            <Link
              href="#contact"
              className={`inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#8F27FF] text-white font-semibold text-[15px] transition-all hover:-translate-y-0.5 ${base} duration-700 delay-[400ms] ${mounted ? show : hideLeft
                }`}
              style={{
                color: "#fff"
              }}
            >
              Start your application →
            </Link>
          </div>

          {/* Right */}
          <div
            className={`relative h-[400px] xl:h-[520px] ${base} duration-800 delay-200 ${mounted ? show : hideRight
              }`}
          >
            <div
              className="absolute inset-0"
              style={{
                borderRadius: "32px 180px 32px 32px",
                background: `url('${HERO_IMG}') center/cover`,
                boxShadow: "0 20px 50px rgba(0,0,0,.08)",
              }}
            />
          </div>
        </div>

      </div>
    </Row>
  );
}