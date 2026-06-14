"use client";

import { useState } from "react";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const cards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" style={{ width: 26, height: 26 }}>
        <circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
      </svg>
    ),
    title: "Tri-continental access",
    desc: "Direct corridor between Europe, the Gulf, Central Asia and North Africa.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" style={{ width: 26, height: 26 }}>
        <path d="M4 21V8l8-4 8 4v13" /><path d="M4 21h16M9 21v-6h6v6M10 11h4M10 14h4" />
      </svg>
    ),
    title: "Real estate upside",
    desc: "Competitive acquisition costs powered by a dynamic tourism economy.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" style={{ width: 26, height: 26 }}>
        <circle cx="6" cy="6" r="2" /><circle cx="18" cy="18" r="2" /><circle cx="18" cy="6" r="2" /><circle cx="6" cy="18" r="2" />
        <path d="M8 6h8M8 18h8M6 8v8M18 8v8" />
      </svg>
    ),
    title: "World-class infrastructure",
    desc: "Modern airports, deep-water ports and high-speed rail across major cities.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" style={{ width: 26, height: 26 }}>
        <path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z" /><path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Tier-1 passport",
    desc: "Internationally recognized CBI framework — from residency to passport.",
  },
];

export default function WhyTurkiye() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-20 bg-white" id="why">
      <Row>
        <Reveal variant="up" className="text-center mb-10 md:mb-14">
          <h2 className="text-[28px] md:text-[38px] font-bold tracking-tight">
            Why Türkiye?
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
          {cards.map((c, i) => (
            <Reveal key={c.title} variant="up" delay={i * 80}>
              <article
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="flex flex-col gap-[18px] p-8 rounded-2xl border bg-white h-full transition-all duration-300"
                style={{
                  minHeight: 260,
                  borderColor: hovered === i ? "#ECDFFB" : "#E2E2E2",
                  transform: hovered === i ? "translateY(-3px)" : "none",
                  boxShadow: hovered === i
                    ? "0 24px 50px -30px rgba(143,39,255,0.2)"
                    : "none",
                }}
              >
                <div
                  className="flex items-center justify-center self-start transition-all duration-300"
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: hovered === i ? "#8F27FF" : "#FAF6FF",
                    color: hovered === i ? "#fff" : "#8F27FF",
                  }}
                >
                  {c.icon}
                </div>
                <h3 className="font-semibold text-[18px] text-black leading-snug tracking-tight">{c.title}</h3>
                <p className="text-[14px] text-[#474747] leading-relaxed">{c.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Row>
    </section>
  );
}
