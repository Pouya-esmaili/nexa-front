"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const team = [
  { name: "Mahsa Esmaeili",      role: "Legal Advisor",        dept: "Legal",      image: "/images/ourteam/mahsa.svg" },
  { name: "Iman Nasr Esfahani",  role: "COO",                  dept: "Leadership", image: "/images/ourteam/iman.png" },
  { name: "Lida Parvizi",        role: "HR & Administrative",  dept: "Operations", image: "/images/ourteam/lida.svg" },
  { name: "Gelareh Bahrami",     role: "Sales Officer",        dept: "Sales",      image: "/images/ourteam/gelareh.svg" },
  { name: "Parastoo Sanaifar",   role: "Business Advisor",     dept: "Advisory",   image: "/images/ourteam/parastoo.svg" },
  { name: "Milad Fatemi",        role: "Business Advisor",     dept: "Advisory",   image: "/images/ourteam/milad.svg" },
  { name: "Mehdi Esmaeili",      role: "Front-End Developer",  dept: "Tech",       image: "/images/ourteam/pouya.svg" },
  { name: "Sajjad Momeni",       role: "Full-Stack Developer", dept: "Tech",       image: "/images/ourteam/sajjad.png" },
  { name: "Ali Soleimani",       role: "Accountant",           dept: "Finance",    image: "/images/ourteam/ali.svg" },
  { name: "Narjes Orouji",       role: "UI/UX Designer",       dept: "Design",     image: "/images/ourteam/narges.svg" },
  { name: "Amir Esfahanizade",   role: "Back-End Developer",   dept: "Tech",       image: "/images/ourteam/amirmohammad.svg" },
];

const DELAYS = [60, 130, 200, 270, 340, 410, 480, 550, 620, 690, 760];

export default function TeamGrid() {
  const [headVis, setHeadVis] = useState(false);
  const [gridVis, setGridVis] = useState(false);
  const headRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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
    const c2 = makeObs(gridRef.current, setGridVis);
    return () => { c1?.(); c2?.(); };
  }, []);

  return (
    <section className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-16 pt-[60px] pb-[88px]">
      {/* Header */}
      <div
        ref={headRef}
        className={`text-center mb-[52px] transition-all duration-700 delay-75 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          headVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-[26px] sm:text-[32px] lg:text-[40px] font-extrabold tracking-[-1.2px] leading-[1.1]">
          Full Team
        </h2>
      </div>

      {/* Grid */}
      <div
        ref={gridRef}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-[14px] lg:gap-[18px]"
      >
        {team.map((member, i) => (
          <div
            key={member.name}
            className={`border border-[#E8E8E8] rounded-[12px] overflow-hidden bg-white transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[#DEC8FF] hover:shadow-[0_10px_40px_rgba(143,39,255,0.09)] hover:-translate-y-1 group ${
              gridVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: gridVis ? `${DELAYS[i]}ms` : "0ms" }}
          >
            {/* Photo */}
            <div className="relative w-full aspect-square overflow-hidden bg-[#FAF6FF]">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>

            {/* Info */}
            <div className="p-4 pb-[18px]">
              <div className="text-[14px] font-bold mb-[3px] tracking-[-0.2px]">
                {member.name}
              </div>
              <div className="text-[12px] text-[#8F27FF] font-semibold mb-[9px]">
                {member.role}
              </div>
              <div className="inline-block bg-[#F7F7F7] border border-[#E8E8E8] text-[#A0A0A0] text-[11px] px-[9px] py-[3px] rounded-full font-medium mb-[9px]">
                {member.dept}
              </div>
              <div className="flex gap-[6px]">
                <a
                  href="#"
                  className="w-[26px] h-[26px] border border-[#E8E8E8] rounded-md flex items-center justify-center text-[#A0A0A0] text-[10px] font-bold no-underline transition-colors duration-200 hover:border-[#8F27FF] hover:text-[#8F27FF]"
                >
                  in
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
