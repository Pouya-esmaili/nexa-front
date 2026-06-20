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
    <section className="py-20 md:py-24 relative overflow-hidden">
      <style>{`
        @keyframes floatBadge { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes pulseGreen { 0%,100%{box-shadow:0 0 0 0 rgba(16,185,129,0.4)} 50%{box-shadow:0 0 0 6px rgba(16,185,129,0)} }
        .float-badge { animation: floatBadge 4s ease-in-out infinite; }
        .pulse-green { animation: pulseGreen 2s ease-in-out infinite; }
      `}</style>

      {/* Radial bg */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(143,39,255,0.05), transparent 70%)" }} />

      <Row>
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          {/* Left */}
          <div className="order-2 md:order-1">
            {/* Eyebrow */}
            <div className={`${base} ${mounted ? show : hidden} inline-flex items-center gap-2 px-4 py-[7px] rounded-full text-[13px] font-semibold mb-6`}
              style={{ background: "#FAF6FF", border: "1px solid rgba(143,39,255,0.18)", color: "#8F27FF", transitionDelay: "0ms" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#8F27FF]" />
              Canada Entrepreneur Immigration
            </div>

            <h1 className={`${base} ${mounted ? show : hidden} text-[38px] md:text-[48px] font-bold leading-[1.08] tracking-[-0.03em] mb-6`}
              style={{ transitionDelay: "80ms" }}>
              Build a <span className="text-[#8F27FF]">scalable</span> company on a high-stability economic platform.
            </h1>

            <p className={`${base} ${mounted ? show : hidden} text-[17px] text-[#474747] leading-[1.65] mb-9 max-w-[520px]`}
              style={{ transitionDelay: "160ms" }}>
              At Nexa, we view Canada not as a migration destination, but as a structured, transparent, capital-accessible environment where serious businesses can be launched, positioned, and expanded with long-term certainty.
            </p>

            {/* Stats */}
            <div className={`${base} ${mounted ? show : hidden} grid grid-cols-3 gap-6 py-7 mb-9`}
              style={{ borderTop: "1px solid #E2E2E2", borderBottom: "1px solid #E2E2E2", transitionDelay: "240ms" }}>
              <div>
                <div className="text-[34px] font-extrabold tracking-[-0.04em] leading-none">G7</div>
                <div className="text-[13px] text-[#929292] mt-2 font-medium">Nation Stability</div>
              </div>
              <div>
                <div className="text-[34px] font-extrabold tracking-[-0.04em] leading-none">10+</div>
                <div className="text-[13px] text-[#929292] mt-2 font-medium">Provincial Streams</div>
              </div>
              <div>
                <div className="text-[34px] font-extrabold tracking-[-0.04em] leading-none">24-36<span className="text-[18px]">mo</span></div>
                <div className="text-[13px] text-[#929292] mt-2 font-medium">Path to PR</div>
              </div>
            </div>

            <div className={`${base} ${mounted ? show : hidden}`} style={{ transitionDelay: "320ms" }}>
              <a href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#8F27FF] text-white font-semibold rounded-full text-[15px] transition-all hover:-translate-y-0.5"
                style={{ boxShadow: "0 10px 24px rgba(143,39,255,0.28)" }}>
                Book an Appointment →
              </a>
            </div>
          </div>

          {/* Right — visual */}
          <div className={`${base} ${mounted ? show : hidden} order-1 md:order-2 relative h-[240px] md:h-[540px]`} style={{ transitionDelay: "100ms" }}>
            {/* Main image */}
            <div className="absolute inset-0 overflow-hidden"
              style={{
                borderRadius: "32px 32px 32px 120px",
                background: "#1e3a5f url('https://images.unsplash.com/photo-1517935706615-2717063c2225?w=900&q=80') center/cover",
                boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
              }}>
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.15))" }} />
            </div>

            {/* Canada flag badge */}
            <div className="absolute top-6 right-6 w-[68px] h-[44px] bg-white rounded-[10px] grid place-items-center z-10 overflow-hidden"
              style={{ boxShadow: "0 6px 20px rgba(0,0,0,0.05)", border: "1.5px solid #E2E2E2" }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 36" width={60} height={36} shapeRendering="crispEdges">
                <rect width={60} height={36} fill="#fff" />
                <rect width={15} height={36} fill="#D80621" />
                <rect x={45} width={15} height={36} fill="#D80621" />
                <g transform="translate(30,18)">
                  <path d="M0,-12 L1.6,-5.8 L7.6,-7.2 L5,-2 L9.8,-0.4 L6.2,3.2 L7,7.8 L3,6 L0,10 L-3,6 L-7,7.8 L-6.2,3.2 L-9.8,-0.4 L-5,-2 L-7.6,-7.2 L-1.6,-5.8 Z" fill="#D80621" />
                  <rect x={-1} y={10} width={2} height={5} fill="#D80621" />
                </g>
              </svg>
            </div>

            {/* Floating badge */}
            <div className="float-badge absolute top-[90px] -right-5 bg-white rounded-[14px] px-4 py-3 flex items-center gap-2.5 z-10"
              style={{ boxShadow: "0 12px 36px rgba(0,0,0,0.07)", border: "1px solid #F4F4F4" }}>
              <span className="pulse-green w-2 h-2 rounded-full bg-[#10B981]" />
              <span className="text-[13px] font-semibold text-black">PR Pathway Active</span>
            </div>

            {/* Yellow accent badge */}
            <div className="absolute -bottom-4 -left-4 bg-[#FFE600] rounded-[14px] px-5 py-3.5 flex items-center gap-3 z-10"
              style={{ boxShadow: "0 6px 20px rgba(0,0,0,0.05)" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-black">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span className="text-[14px] font-bold text-black tracking-tight">10+ Provincial Streams</span>
            </div>
          </div>
        </div>
      </Row>
    </section>
  );
}
