"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const services = [
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M3 3h18v18H3z"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/></svg>, label: "Strategic Business Modeling" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>, label: "Financial Architecture" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>, label: "Market Entry Strategy" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>, label: "Provincial Alignment" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>, label: "Investor Readiness" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg>, label: "Long-term Scaling" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>, label: "Landing Services" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>, label: "Immigration Services" },
];

export default function NexaRole() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <Row>
        <div className="grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-12 items-center">
          {/* Intro */}
          <Reveal variant="left">
            <div className="md:sticky md:top-24">
              <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] mb-5">
                Nexa&apos;s Role
              </h2>
              <p className="text-[15px] text-[#929292] leading-[1.65] mb-8">
                We work alongside high-potential entrepreneurs to architect ventures structurally aligned with Canada's provincial economic priorities — from strategic modeling to long-term scaling roadmaps.
              </p>
              <a href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#8F27FF] text-white font-semibold rounded-full text-[15px] transition-all hover:-translate-y-0.5"
                style={{ boxShadow: "0 10px 24px rgba(143,39,255,0.28)" }}>
                Start with a Strategy Call →
              </a>
            </div>
          </Reveal>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {services.map((s, i) => (
              <Reveal key={s.label} variant="up" delay={i * 60 + 100}>
                <div
                  className="bg-white border border-[#E2E2E2] rounded-[8px] px-5 py-4 flex items-center gap-3.5 cursor-pointer transition-all duration-250 hover:translate-x-[3px]"
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = "#8F27FF";
                    el.style.background = "#FAF6FF";
                    const icon = el.querySelector(".svc-icon") as HTMLElement;
                    if (icon) { icon.style.background = "#8F27FF"; icon.style.color = "white"; icon.style.borderColor = "#8F27FF"; }
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = "#E2E2E2";
                    el.style.background = "white";
                    const icon = el.querySelector(".svc-icon") as HTMLElement;
                    if (icon) { icon.style.background = "#F7F6F9"; icon.style.color = "#8F27FF"; icon.style.borderColor = "#F4F4F4"; }
                  }}
                >
                  <div className="svc-icon flex-shrink-0 w-[38px] h-[38px] rounded-[9px] grid place-items-center text-[#8F27FF] transition-all duration-250"
                    style={{ background: "#F7F6F9", border: "1px solid #F4F4F4" }}>
                    {s.icon}
                  </div>
                  <h4 className="text-[14px] font-semibold tracking-[-0.01em]">{s.label}</h4>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Row>
    </section>
  );
}
