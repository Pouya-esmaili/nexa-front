"use client";

import Link from "next/link";
import Row from "@/components/global/Row";
import { useEffect, useState } from "react";

const stats = [
  { num: "1 yr", label: "Initial Permit" },
  { num: "€21K", label: "Solo Threshold" },
  { num: "5 yr", label: "Path to PR" },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const base = "transition-all ease-out";
  const show      = "opacity-100 translate-y-0 translate-x-0";
  const hideUp    = "opacity-0 translate-y-6";
  const hideLeft  = "opacity-0 -translate-x-8";
  const hideRight = "opacity-0 translate-x-8";

  return (
    <section className="py-14 md:py-20 overflow-hidden bg-white relative">
      <div
        className="absolute top-[-200px] right-[-150px] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(143,39,255,0.05), transparent 70%)" }}
      />

      {/* MOBILE */}
      <div className="md:hidden px-5 relative z-10">
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[12px] font-semibold mb-5 uppercase tracking-wider ${base} duration-500 ${mounted ? show : hideUp}`}
          style={{ background: "#FAF6FF", color: "#8F27FF", border: "1px solid rgba(143,39,255,0.18)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#8F27FF]" />
          Netherlands Startup Visa
        </div>
        <div
          className={`h-56 rounded-[32px_80px_32px_32px] mb-6 overflow-hidden ${base} duration-700 delay-75 ${mounted ? show : hideUp}`}
          style={{ background: "#0f1f2e url('https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=900&q=80') center/cover" }}
        />
        <h1 className={`text-3xl font-bold leading-tight tracking-tight mb-4 ${base} duration-600 delay-150 ${mounted ? show : hideUp}`}>
          Scale your <span className="text-[#8F27FF]">innovative venture</span> inside the European Union.
        </h1>
        <p className={`text-sm text-gray-600 leading-relaxed mb-6 ${base} duration-600 delay-200 ${mounted ? show : hideUp}`}>
          The Netherlands Startup Visa gives non-EU founders a structured, institutionally supported entry into one of Europe's most competitive digital economies — no complex capital scoring, no minimum investment floor.
        </p>
        <div className={`grid grid-cols-3 gap-4 py-6 border-t border-b border-gray-200 mb-6 ${base} duration-600 delay-300 ${mounted ? show : hideUp}`}>
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-xl font-extrabold tracking-tight">{s.num}</div>
              <div className="text-[11px] text-gray-500 font-medium mt-1 uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
        <Link
          href="#contact"
          className={`inline-flex items-center gap-2 px-6 py-3 bg-[#8F27FF] text-white font-semibold rounded-full text-sm ${base} duration-500 delay-[400ms] ${mounted ? show : hideUp}`}
        >
          Book an Appointment →
        </Link>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:block relative z-10">
        <Row>
          <div className="grid grid-cols-[1.1fr_0.9fr] gap-16 items-center">
            <div>
              <div
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[12px] font-semibold mb-6 uppercase tracking-wider ${base} duration-500 ${mounted ? show : hideLeft}`}
                style={{ background: "#FAF6FF", color: "#8F27FF", border: "1px solid rgba(143,39,255,0.18)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#8F27FF]" />
                Netherlands Startup Visa
              </div>
              <h1 className={`text-[48px] font-bold leading-[1.06] tracking-[-0.03em] mb-6 ${base} duration-700 delay-100 ${mounted ? show : hideLeft}`}>
                Scale your <span className="text-[#8F27FF]">innovative venture</span> inside the European Union.
              </h1>
              <p className={`text-[16px] text-[#474747] leading-[1.65] mb-8 max-w-[520px] ${base} duration-700 delay-200 ${mounted ? show : hideLeft}`}>
                The Netherlands Startup Visa gives non-EU founders a structured, institutionally supported entry into one of Europe&apos;s most competitive digital economies — no complex capital scoring, no minimum investment floor.
              </p>
              <div className={`grid grid-cols-3 py-6 border-t border-b border-gray-200 mb-9 ${base} duration-700 delay-300 ${mounted ? show : hideLeft}`}>
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-[26px] font-bold tracking-[-0.03em] leading-none">{s.num}</div>
                    <div className="text-[11px] text-gray-500 font-medium mt-2 uppercase tracking-widest">{s.label}</div>
                  </div>
                ))}
              </div>
              <Link
                href="#contact"
                className={`inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#8F27FF] text-white font-semibold rounded-full text-[14px] transition-all hover:-translate-y-0.5 ${base} duration-500 delay-[400ms] ${mounted ? show : hideLeft}`}
                style={{ boxShadow: "0 12px 28px rgba(143,39,255,0.28)" }}
              >
                Book an Appointment →
              </Link>
            </div>

            <div className={`relative h-[520px] ${base} duration-800 delay-200 ${mounted ? show : hideRight}`}>
              <div
                className="absolute inset-0"
                style={{
                  borderRadius: "32px 120px 32px 32px",
                  background: "#0f1f2e url('https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=900&q=80') center/cover",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
                }}
              />
              <div
                className={`absolute top-6 right-6 w-[68px] h-11 bg-white rounded-[10px] flex items-center justify-center z-10 text-2xl ${base} duration-500 delay-500 ${mounted ? show : hideUp}`}
                style={{ boxShadow: "0 6px 20px rgba(0,0,0,0.05)", border: "1.5px solid #E2E2E2" }}
              >
                🇳🇱
              </div>
              <div
                className={`absolute top-[80px] -right-[22px] bg-white rounded-[14px] px-4 py-3 flex items-center gap-2.5 z-10 ${base} duration-500 delay-[600ms] ${mounted ? show : hideRight}`}
                style={{
                  boxShadow: "0 12px 36px rgba(0,0,0,0.07)",
                  border: "1px solid #F4F4F4",
                  animation: "floatBadge 4s ease-in-out infinite",
                }}
              >
                <span
                  className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"
                  style={{ boxShadow: "0 0 0 4px rgba(16,185,129,0.2)", animation: "pulseGreen 2s ease-in-out infinite" }}
                />
                <span className="text-[13px] font-semibold text-black whitespace-nowrap">Startup Permit Active</span>
              </div>
              <div
                className={`absolute -bottom-4 -left-4 flex items-center gap-3 px-5 py-3.5 rounded-[14px] z-10 ${base} duration-500 delay-[700ms] ${mounted ? show : hideLeft}`}
                style={{ background: "#FFE600", boxShadow: "0 6px 20px rgba(0,0,0,0.05)" }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5 text-black">
                  <path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z" />
                </svg>
                <span className="font-bold text-[13px] text-black">EU Schengen Access</span>
              </div>
            </div>
          </div>
        </Row>
      </div>

      <style>{`
        @keyframes floatBadge { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes pulseGreen { 0%,100%{box-shadow:0 0 0 4px rgba(16,185,129,0.2)} 50%{box-shadow:0 0 0 7px rgba(16,185,129,0.1)} }
      `}</style>
    </section>
  );
}
