"use client";

import { useState, useEffect } from "react";
import Row from "@/components/global/Row";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setMounted(true), 80); return () => clearTimeout(t); }, []);

  const base = "transition-all duration-700";
  const hidden = "opacity-0 translate-y-8";
  const show = "opacity-100 translate-y-0";

  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      <style>{`
        @keyframes floatBadge { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes pulseGreen { 0%,100%{box-shadow:0 0 0 0 rgba(16,185,129,0.4)} 50%{box-shadow:0 0 0 6px rgba(16,185,129,0)} }
        .float-badge { animation: floatBadge 4s ease-in-out infinite; }
        .pulse-green { animation: pulseGreen 2s ease-in-out infinite; }
      `}</style>

      <div className="pointer-events-none absolute -top-52 -right-40 w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(143,39,255,0.05), transparent 70%)" }} />

      <Row>
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-16 items-center">

          {/* Left */}
          <div>
            <div className={`${base} ${mounted ? show : hidden} inline-flex items-center gap-2 px-4 py-[7px] rounded-full text-[13px] font-semibold mb-6`}
              style={{ background: "#FAF6FF", border: "1px solid rgba(143,39,255,0.18)", color: "#8F27FF", transitionDelay: "0ms" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#8F27FF]" />
              Portugal D2 Entrepreneur Visa
            </div>

            <h1 className={`${base} ${mounted ? show : hidden} text-[38px] md:text-[48px] font-bold leading-[1.06] tracking-[-0.03em] mb-5`}
              style={{ transitionDelay: "80ms" }}>
              Expand to Europe with{" "}
              <span className="text-[#8F27FF]">any business model.</span>
            </h1>

            <p className={`${base} ${mounted ? show : hidden} text-[16px] text-[#474747] leading-[1.65] mb-8 max-w-[520px]`}
              style={{ transitionDelay: "160ms" }}>
              The Portugal D2 Entrepreneur Visa is the EU&apos;s most flexible founder pathway — open to any viable commercial enterprise, from tech startups to consulting firms, import-export operations, and service businesses.
            </p>

            {/* Stats */}
            <div className={`${base} ${mounted ? show : hidden} grid grid-cols-3 py-6 mb-8`}
              style={{ borderTop: "1px solid #E2E2E2", borderBottom: "1px solid #E2E2E2", transitionDelay: "240ms" }}>
              {[
                { num: "2 yr", label: "Initial Card" },
                { num: "~€10K", label: "Personal Threshold" },
                { num: "5 yr", label: "Path to Citizenship" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-[26px] font-bold tracking-[-0.03em] leading-none">{s.num}</div>
                  <div className="text-[11px] text-[#929292] mt-1.5 font-medium uppercase tracking-[0.06em]">{s.label}</div>
                </div>
              ))}
            </div>

            <div className={`${base} ${mounted ? show : hidden}`} style={{ transitionDelay: "320ms" }}>
              <a href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#8F27FF] text-white font-semibold rounded-full text-[14px] transition-all hover:-translate-y-0.5"
                style={{ boxShadow: "0 10px 24px rgba(143,39,255,0.28)" }}>
                Book an Appointment →
              </a>
            </div>
          </div>

          {/* Right visual */}
          <div className={`${base} ${mounted ? show : hidden} relative h-[460px] md:h-[520px]`} style={{ transitionDelay: "100ms" }}>
            {/* Main image — Lisbon */}
            <div className="absolute inset-0 overflow-hidden"
              style={{
                borderRadius: "32px 120px 32px 32px",
                background: "#0d1a1f url('https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=900&q=80') center/cover",
                boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
              }}>
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.12))" }} />
            </div>

            {/* Portugal flag badge */}
            <div className="absolute top-6 right-6 w-[68px] h-[44px] rounded-[10px] overflow-hidden z-10 bg-white grid place-items-center"
              style={{ boxShadow: "0 6px 20px rgba(0,0,0,0.06)", border: "1.5px solid #E2E2E2" }}>
              <svg viewBox="0 0 60 36" width={60} height={36}>
                {/* Portugal flag: green (2/5) + red (3/5) */}
                <rect width={24} height={36} fill="#006600" />
                <rect x={24} width={36} height={36} fill="#CC0000" />
                {/* simplified coat of arms circle */}
                <circle cx={24} cy={18} r={7} fill="#FFE600" opacity={0.9} />
                <circle cx={24} cy={18} r={5} fill="#CC0000" />
              </svg>
            </div>

            {/* Floating badge */}
            <div className="float-badge absolute top-[88px] -right-5 bg-white rounded-[14px] px-4 py-3 flex items-center gap-2.5 z-10"
              style={{ boxShadow: "0 12px 36px rgba(0,0,0,0.07)", border: "1px solid #F4F4F4" }}>
              <span className="pulse-green w-2 h-2 rounded-full bg-[#10B981]" />
              <span className="text-[13px] font-semibold text-black">Visa Active</span>
            </div>

            {/* Yellow accent badge */}
            <div className="absolute -bottom-4 -left-4 bg-[#FFE600] rounded-[14px] px-5 py-3.5 flex items-center gap-3 z-10"
              style={{ boxShadow: "0 6px 20px rgba(0,0,0,0.05)" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-black">
                <path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z"/>
                <path d="M9 12l2 2 4-4"/>
              </svg>
              <span className="text-[14px] font-bold text-black tracking-tight">Dual Citizenship Permitted</span>
            </div>
          </div>
        </div>
      </Row>
    </section>
  );
}
