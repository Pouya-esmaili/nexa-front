"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Row from "@/components/global/Row";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setMounted(true), 80); return () => clearTimeout(t); }, []);
  const base = "transition-[opacity,transform] duration-[650ms] ease-[ease]";
  const left  = mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-7";
  const right = mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-7";

  return (
    <section className="pt-[64px] pb-[72px] relative overflow-hidden bg-white">
      <Row>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.15fr] gap-[48px] items-center">

          {/* LEFT */}
          <div className={`${base} ${left}`}>
            <h1 className="text-[38px] md:text-[52px] font-bold leading-[1.06] tracking-[-0.03em] text-black mb-[20px]">
              Your Independent Global{" "}
              <span className="highlight">Startup Partner</span>
            </h1>
            <p className="text-[15.5px] text-[#929292] leading-[1.7] max-w-[520px] mb-[36px]">
              We support startups on their path to global growth — from idea to scale, capital access to immigration — with end-to-end advisory and investor network access.
            </p>
            <Link href="#contact"
              className="inline-flex items-center gap-2 px-[28px] py-[14px] bg-[#8F27FF] text-white font-semibold text-[14px] rounded-full transition-all duration-[250ms] hover:bg-[#7A1FE0] hover:-translate-y-px"
              style={{ boxShadow: "0 8px 22px rgba(143,39,255,.28)" }}>
              Book a Free Consultation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>

          {/* RIGHT */}
          <div className={`${base} ${right}`} style={{ transitionDelay: "80ms" }}>
            <div className="relative w-full h-[380px] overflow-hidden"
              style={{ borderRadius: "140px 20px 20px 20px" }}>
              <Image
                src="/images/photos/1522071820081-009f0129c71c-w900.jpg"
                alt="Startup team"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 57vw"
              />
              <div className="absolute inset-0"
                style={{ background: "linear-gradient(180deg,rgba(143,39,255,.05) 0%,rgba(0,0,0,.08) 100%)" }} />
            </div>
          </div>
        </div>
      </Row>
    </section>
  );
}
