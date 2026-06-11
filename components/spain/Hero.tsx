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

      {/* Radial glow */}
      <div className="pointer-events-none absolute -top-52 -right-40 w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(143,39,255,0.05), transparent 70%)" }} />

      <Row>
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-16 items-center">

          {/* Left */}
          <div>
            <h1 className={`${base} ${mounted ? show : hidden} text-[38px] md:text-[48px] font-bold leading-[1.06] tracking-[-0.03em] mb-5`}
              style={{ transitionDelay: "80ms" }}>
              Launch your <span className="text-[#8F27FF]">innovative venture</span> in the Mediterranean hub of Europe.
            </h1>

            <p className={`${base} ${mounted ? show : hidden} text-[16px] text-[#474747] leading-[1.65] mb-8 max-w-[520px]`}
              style={{ transitionDelay: "160ms" }}>
               (Visado para Emprendedores) bypasses conventional immigration bottlenecks — with a 20-working-day approval rule, 3-year initial residency, and full family inclusion from day one.
            </p>

            {/* Stats */}
            <div className={`${base} ${mounted ? show : hidden} grid grid-cols-3 gap-0 py-6 mb-8`}
              style={{ borderTop: "1px solid #E2E2E2", borderBottom: "1px solid #E2E2E2", transitionDelay: "240ms" }}>
              {[
                { num: "3 yr", label: "Initial Permit" },
                { num: "20 days", label: "Decision Window" },
                { num: "5 yr", label: "Path to PR" },
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
            {/* Main image — Barcelona */}
            <div className="absolute inset-0 overflow-hidden"
              style={{
                borderRadius: "32px 120px 32px 32px",
                background: "#1a1020 url('https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=900&q=80') center/cover",
                boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
              }}>
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.12))" }} />
            </div>

          </div>
        </div>
      </Row>
    </section>
  );
}
