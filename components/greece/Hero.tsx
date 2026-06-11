"use client";

import { useState, useEffect } from "react";
import Row from "@/components/global/Row";

export default function GreeceHero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setMounted(true), 80); return () => clearTimeout(t); }, []);

  const base = "transition-all duration-700";
  const hidden = "opacity-0 translate-y-8";
  const show = "opacity-100 translate-y-0";

  return (
    <section className="py-20 md:py-24 relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(143,39,255,0.05), transparent 70%)" }} />

      <Row>
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-14 items-center">

          {/* Left */}
          <div>

            <h1 className={`${base} ${mounted ? show : hidden} text-[36px] md:text-[48px] font-bold leading-[1.08] tracking-[-0.03em] mb-6`}
              style={{ transitionDelay: "80ms" }}>
              Capital to residency.{" "}
              <span className="text-[#8F27FF]">No management required.</span>
            </h1>

            <p className={`${base} ${mounted ? show : hidden} text-[17px] text-[#474747] leading-[1.65] mb-9 max-w-[520px]`}
              style={{ transitionDelay: "160ms" }}>
              The Greece Golden Visa is a pure capital-to-residency vehicle — granting immediate EU permanent
              residency in exchange for strategic real estate or financial investment, with zero physical stay
              requirements and true three-generation family coverage.
            </p>

            <div className={`${base} ${mounted ? show : hidden} grid grid-cols-3 gap-6 py-7 mb-9`}
              style={{ borderTop: "1px solid #E2E2E2", borderBottom: "1px solid #E2E2E2", transitionDelay: "240ms" }}>
              {[
                { num: "5 yr",  label: "Permanent Card" },
                { num: "0 days", label: "Stay Requirement" },
                { num: "3 gen", label: "Family Coverage" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-[30px] font-extrabold tracking-[-0.04em] leading-none">{s.num}</div>
                  <div className="text-[12px] text-[#929292] mt-2 font-medium uppercase tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>

            <div className={`${base} ${mounted ? show : hidden}`} style={{ transitionDelay: "320ms" }}>
              <a href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#8F27FF] text-white font-semibold rounded-full text-[15px] transition-all hover:-translate-y-0.5"
                style={{ boxShadow: "0 10px 24px rgba(143,39,255,0.28)" }}>
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
                background: "#0d1620 url('https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?w=900&q=80') center/cover",
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
