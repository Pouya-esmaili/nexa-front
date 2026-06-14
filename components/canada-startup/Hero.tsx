"use client";

import { useState, useEffect } from "react";
import Row from "@/components/global/Row";

export default function StartupHero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setMounted(true), 80); return () => clearTimeout(t); }, []);

  const base = "transition-all duration-700";
  const hidden = "opacity-0 translate-y-8";
  const show = "opacity-100 translate-y-0";

  return (
    <section className="py-16 pb-20 relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute -top-[200px] -right-[150px] w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(143,39,255,0.05), transparent 70%)" }} />

      <Row>
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-16 items-center relative z-10">

          {/* Left */}
          <div>
            <h1 className={`${base} ${mounted ? show : hidden} text-[32px] md:text-[48px] font-bold leading-[1.06] tracking-[-0.03em] mb-5`}
              style={{ transitionDelay: "0ms" }}>
              Direct permanent residency for{" "}
              <em className="text-[#8F27FF] not-italic">innovative founders</em>{" "}
              in North America.
            </h1>

            <p className={`${base} ${mounted ? show : hidden} text-[16px] text-[#474747] leading-[1.65] mb-8 max-w-[520px]`}
              style={{ transitionDelay: "80ms" }}>
              The Canada Start-Up Visa grants — not a temporary visa. If your venture fails after landing, your permanent residency stands. Build in one of the world's most business-friendly economies from day one.
            </p>

            <div className={`${base} ${mounted ? show : hidden} grid grid-cols-3 gap-6 py-6 mb-8`}
              style={{ borderTop: "1px solid #E2E2E2", borderBottom: "1px solid #E2E2E2", transitionDelay: "160ms" }}>
              {[
                { num: "Direct", label: "PR — Not a Visa" },
                { num: "5", label: "Max Co-Founders" },
                { num: "3 yr", label: "Path to Citizenship" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-[26px] font-bold tracking-[-0.03em] leading-none">{s.num}</div>
                  <div className="text-[11px] text-[#929292] mt-1.5 font-medium uppercase tracking-[0.06em]">{s.label}</div>
                </div>
              ))}
            </div>

            <div className={`${base} ${mounted ? show : hidden}`} style={{ transitionDelay: "240ms" }}>
              <a href="#contact"
                className="inline-flex items-center gap-[10px] px-7 py-3.5 bg-[#8F27FF] text-white font-semibold rounded-full text-[14px] transition-all hover:-translate-y-0.5"
                style={{ boxShadow: "0 12px 28px rgba(143,39,255,0.28)" }}>
                Book an Appointment →
              </a>
            </div>
          </div>

          {/* Right */}
          <div className={`${base} ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"} relative h-[480px] md:h-[520px]`}
            style={{ transitionDelay: "100ms", transitionDuration: "800ms" }}>
            <div className="absolute inset-0 overflow-hidden"
              style={{
                borderRadius: "32px 120px 32px 32px",
                background: "#0d1a24 url('https://images.unsplash.com/photo-1517090504586-fde19ea6066f?w=900&q=80') center/cover",
                boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
              }}>
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.12))" }} />
            </div>

          </div>

        </div>
      </Row>

      <style>{`
        @keyframes floatY { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes pulseGreen { 0%,100%{box-shadow:0 0 0 0 rgba(16,185,129,0.4)} 50%{box-shadow:0 0 0 6px rgba(16,185,129,0)} }
      `}</style>
    </section>
  );
}
