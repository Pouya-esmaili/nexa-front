"use client";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const items = [
  { pill: "Competition", title: "Enhancing Competitiveness",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
  { pill: "Innovation",  title: "Fostering Innovation",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg> },
  { pill: "Employment",  title: "Job Creation",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
  { pill: "Economy",     title: "Wealth Creation",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> },
];

export default function WhyImportant() {
  return (
    <section className="py-[90px] bg-black relative overflow-hidden">
      <div className="pointer-events-none absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(circle,rgba(143,39,255,0.28),transparent 65%)" }} />
      <div className="pointer-events-none absolute top-[-60px] left-[-60px] w-[300px] h-[300px] rounded-full"
        style={{ background: "radial-gradient(circle,rgba(255,230,0,0.07),transparent 70%)" }} />

      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center text-white mb-12">
            Why Startup Programs Are Important for Countries
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <Reveal key={i} variant="up" delay={i * 80}>
              <div className="flex flex-col rounded-[16px] p-7 transition-all duration-200 cursor-default"
                style={{ background: "#0E0E10", border: "1px solid #1f1f24" }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "#8F27FF";
                  el.style.background = "#120020";
                  const iconBox = el.querySelector<HTMLElement>(".icon-box");
                  const iconSpan = el.querySelector<HTMLElement>(".icon-span");
                  if (iconBox) { iconBox.style.background = "#8F27FF"; iconBox.style.borderColor = "#8F27FF"; }
                  if (iconSpan) iconSpan.style.color = "#fff";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "#1f1f24";
                  el.style.background = "#0E0E10";
                  const iconBox = el.querySelector<HTMLElement>(".icon-box");
                  const iconSpan = el.querySelector<HTMLElement>(".icon-span");
                  if (iconBox) { iconBox.style.background = "rgba(143,39,255,0.12)"; iconBox.style.borderColor = "rgba(143,39,255,0.2)"; }
                  if (iconSpan) iconSpan.style.color = "#8F27FF";
                }}>
                <span className="inline-flex self-start items-center px-2.5 py-1 rounded-full text-[10px] font-bold tracking-[.1em] uppercase mb-3.5"
                  style={{ background: "rgba(255,230,0,0.08)", border: "1px solid rgba(255,230,0,0.2)", color: "#FFE600" }}>
                  {item.pill}
                </span>
                <div className="icon-box w-11 h-11 rounded-[12px] grid place-items-center mb-4"
                  style={{ background: "rgba(143,39,255,0.12)", border: "1px solid rgba(143,39,255,0.2)" }}>
                  <span className="icon-span" style={{ color: "#8F27FF" }}>{item.icon}</span>
                </div>
                <h4 className="text-[14px] font-semibold text-white leading-[1.4] tracking-[-0.01em]">{item.title}</h4>
              </div>
            </Reveal>
          ))}
        </div>
      </Row>
    </section>
  );
}
