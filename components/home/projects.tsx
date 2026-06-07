"use client";

import Reveal from "@/components/global/Reveal";

const projects = [
  { name: "Landa Trip",      tag: "Tourism · Travel",                 img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=700&q=80" },
  { name: "Landa Craft",     tag: "Handcraft · Artisan Market",       img: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=700&q=80" },
  { name: "AutiLab",         tag: "Autism Support · Child EdTech",    img: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=700&q=80" },
  { name: "Vision Raft",     tag: "Virtual Reality · Immersive Tech", img: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=700&q=80" },
  { name: "Diaco",           tag: "Business Solutions · Corporate",   img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80" },
  { name: "Arshia Gallery",  tag: "Fine Jewelry · Luxury Retail",     img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=700&q=80" },
  { name: "Preventie Gene",  tag: "Genetics · Health Prevention",     img: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?w=700&q=80" },
  { name: "SteadySkull",     tag: "Surgical Device · MedTech",        img: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=700&q=80" },
];

export default function ProjectsSection() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-[1240px] mx-auto px-6">

        <Reveal variant="up">
          <div className="text-center mb-14">
            <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em]">
              Our Successful Projects
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[22px]">
          {projects.map((p, i) => (
            <Reveal key={p.name} variant="up" delay={i * 50}>
              <div className="group relative rounded-[20px] overflow-hidden md:h-[260px] h-[200px] cursor-pointer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* base overlay */}
                <div className="absolute inset-0 transition-all duration-300"
                  style={{ background: "linear-gradient(180deg,transparent 40%,rgba(0,0,0,0.75) 100%)" }} />
                {/* hover overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(180deg,rgba(143,39,255,0.08) 0%,rgba(0,0,0,0.85) 100%)" }} />

                {/* body */}
                <div className="absolute bottom-0 left-0 right-0 p-[22px] flex items-end justify-between">
                  <div>
                    <div className="text-white font-bold text-[16px] tracking-[-0.01em]">{p.name}</div>
                    <div className="text-[rgba(255,255,255,0.65)] text-[12px] font-medium mt-1">{p.tag}</div>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-white/20 border border-white/30 grid place-items-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
