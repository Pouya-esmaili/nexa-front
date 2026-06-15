"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function FounderSection() {
  const [headVis, setHeadVis] = useState(false);
  const [cardVis, setCardVis] = useState(false);
  const headRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const makeObs = (el: HTMLElement | null, set: (v: boolean) => void) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) { set(true); obs.disconnect(); } },
        { threshold: 0.1, rootMargin: "0px 0px -36px 0px" }
      );
      obs.observe(el);
      return () => obs.disconnect();
    };
    const c1 = makeObs(headRef.current, setHeadVis);
    const c2 = makeObs(cardRef.current, setCardVis);
    return () => { c1?.(); c2?.(); };
  }, []);

  return (
    <section className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-16 pt-[88px] pb-0">
      {/* Section header */}
      <div
        ref={headRef}
        className={`text-center mb-[52px] transition-all duration-700 delay-75 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          headVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-[26px] sm:text-[32px] lg:text-[40px] font-extrabold tracking-[-1.2px] leading-[1.1]">
          Before{" "}
          <mark className="bg-[#FFE600] text-[#0D0D0D] px-[6px] rounded-[4px] not-italic">
            the Academy
          </mark>
        </h2>
      </div>

      {/* Founder card */}
      <div
        ref={cardRef}
        className={`grid grid-cols-1 md:grid-cols-[280px_1fr] rounded-[20px] overflow-hidden mt-11 shadow-[0_2px_40px_rgba(0,0,0,0.10)] transition-all duration-700 delay-[130ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          cardVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Left: dark panel */}
        <div className="relative bg-[#0D0D0D] px-8 py-12 flex flex-col items-center text-center gap-4 overflow-hidden rounded-t-[20px] md:rounded-tr-none md:rounded-l-[20px]">
          {/* Purple glow top-right */}
          <div
            className="absolute top-[-60px] right-[-60px] w-[180px] h-[180px] pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(143,39,255,0.35) 0%, transparent 70%)" }}
          />
          {/* Yellow bottom line */}
          <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-[#FFE600] rounded-t-sm" />

          {/* Photo */}
          <div className="relative w-[140px] h-[140px] rounded-full overflow-hidden border-[3px] border-white/[0.12] z-10 flex-shrink-0">
            <Image
              src="/images/ourteam/hadi.svg"
              alt="Hadi Hasanpour"
              fill
              className="object-cover"
            />
          </div>

          <div className="text-[20px] font-extrabold tracking-[-0.4px] text-white z-10">
            Hadi Hasanpour
          </div>
          <div className="text-[12px] font-semibold text-[#FFE600] tracking-[1.5px] uppercase z-10">
            Founder &amp; CEO
          </div>
          <a
            href="#"
            className="mt-1 w-8 h-8 border border-white/[0.15] rounded-lg flex items-center justify-center text-white/45 text-[11px] font-bold no-underline transition-colors duration-200 hover:border-[#FFE600] hover:text-[#FFE600] z-10"
          >
            in
          </a>
        </div>

        {/* Right: content */}
        <div className="bg-white border border-[#E8E8E8] border-l-0 rounded-b-[20px] md:rounded-bl-none md:rounded-r-[20px] px-7 py-12 md:px-[52px] flex flex-col justify-center gap-5">
          <p className="text-[18px] font-bold leading-[1.5] tracking-[-0.3px] border-l-[3px] border-[#FFE600] pl-[18px]">
            &ldquo;Engineering taught me how systems work. Entrepreneurship taught me how people do.&rdquo;
          </p>
          <p className="text-[14px] text-[#5A5A5A] leading-[1.8]">
            With formal training across electrical, civil, and mechanical engineering — and years of
            hands-on experience in structured consulting and systems analysis — Hadi built Nexa long
            before its name existed. Every venture that followed was a proof of concept for one belief:
            that the right structure turns any idea into a global company.
          </p>
        </div>
      </div>
    </section>
  );
}
