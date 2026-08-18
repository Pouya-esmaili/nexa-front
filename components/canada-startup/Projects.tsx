"use client";

import Reveal from "@/components/global/LazyReveal";
import Image from "next/image";
import { useLang } from "@/components/global/LanguageProvider";

const projects = [
  // { name: "Landa Trip",      tag: "Tourism · Travel",                 img: "/images/about/trip.svg",          icon: "/images/landing/Landa Trip.svg" },
  // { name: "Landa Craft",     tag: "Handcraft · Artisan Market",       img: "/images/about/craft.svg",         icon: "/images/landing/craft.svg" },
  // { name: "AutiLab",         tag: "Autism Support · Child EdTech",    img: "/images/about/autilab.svg",       icon: "/images/landing/Autilab.svg" },
  // { name: "Vision Raft",     tag: "Virtual Reality · Immersive Tech", img: "/images/about/vision.svg",        icon: "/images/landing/raft.svg" },
  // { name: "Diaco",           tag: "Business Solutions · Corporate",   img: "/images/about/Diaco.svg",         icon: "/images/startup/Diaco.svg" },
  // { name: "Arshia Gallery",  tag: "Fine Jewelry · Luxury Retail",     img: "/images/about/academylanda.svg",  icon: "/images/landing/Arshia Gallery.svg" },
  // { name: "Preventie Gene",  tag: "Genetics · Health Prevention",     img: "/images/about/preventigene.svg",  icon: "/images/landing/preventigene.svg" },
  // { name: "SteadySkull",     tag: "Surgical Device · MedTech",        img: "/images/about/diacocenter.svg",   icon: "/images/landing/SteadySkull.svg" },
  { name: "Landa Trip",      tag: "Tourism · Travel",                 tagFa: "گردشگری · سفر", img: "/images/about/trip.jpg", icon: "/images/landing/Landa Trip.svg" },
  { name: "Landa Craft",     tag: "Handcraft · Artisan Market",       tagFa: "صنایع‌دستی · بازار هنری", img: "/images/about/craft.jpg", icon: "/images/landing/craft.svg" },
  { name: "AutiLab",         tag: "Autism Support · Child EdTech",    tagFa: "حمایت اوتیسم · فناوری آموزشی کودک", img: "/images/about/autiLab.jpg", icon: "/images/landing/Autilab.svg" },
  { name: "Vision Raft",     tag: "Virtual Reality · Immersive Tech", tagFa: "واقعیت مجازی · فناوری غوطه‌ور", img: "/images/about/vision.jpg", icon: "/images/landing/raft.svg" },
  { name: "Diaco",           tag: "Business Solutions · Corporate",   tagFa: "راهکارهای کسب‌وکار · شرکتی", img: "/images/about/Diaco.jpg", icon: "/images/startup/Diaco.svg" },
  { name: "Arshia Gallery",  tag: "Fine Jewelry · Luxury Retail",     tagFa: "جواهرات نفیس · خرده‌فروشی لوکس", img: "/images/Entrepreneurship/Arshia Gallery.jpg",  icon: "/images/landing/Arshia Gallery.svg" },
  { name: "Preventie Gene",  tag: "Genetics · Health Prevention",     tagFa: "ژنتیک · پیشگیری سلامت", img: "/images/about/preventigene.jpg",  icon: "/images/landing/preventigene.svg" },
  { name: "SteadySkull",     tag: "Surgical Device · MedTech",        tagFa: "دستگاه جراحی · فناوری پزشکی", img: "/images/about/steadyskull.jpg",   icon: "/images/landing/SteadySkull.svg" },
];

export default function ProjectsSection() {
  const { t } = useLang();
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-[1240px] mx-auto px-6">

        <Reveal variant="up">
          <div className="text-center mb-14">
            <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em]">
              {t("Our Successful Projects", "استارتاپ‌های موفق نکسا")}
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[22px]">
          {projects.map((p, i) => (
            <Reveal key={p.name} variant="up" delay={i * 50}>
              <div className="group relative rounded-[20px] overflow-hidden md:h-[260px] h-[200px] cursor-pointer">
                <div className="absolute inset-0">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* base overlay */}
                <div className="absolute inset-0 transition-all duration-300"
                  style={{ background: "linear-gradient(180deg,transparent 40%,rgba(0,0,0,0.75) 100%)" }} />
                {/* hover overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(180deg,rgba(143,39,255,0.08) 0%,rgba(0,0,0,0.85) 100%)" }} />

                {/* body */}
                <div className="absolute bottom-0 left-0 right-0 p-[22px] flex items-end justify-between gap-3">
                  <div>
                    <div className="text-white font-bold text-[16px] tracking-[-0.01em]">{p.name}</div>
                    <div className="text-[rgba(255,255,255,0.65)] text-[12px] font-medium mt-1">{t(p.tag, p.tagFa)}</div>
                  </div>
                  {/* project icon — opposite the name */}
                  <div className="w-11 h-12 rounded-2xl grid place-items-center overflow-hidden flex-shrink-0 bg-white/15 backdrop-blur-md border border-white/30 shadow-[0_10px_30px_rgba(0,0,0,0.75)] transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={p.icon}
                      alt={`${p.name} icon`}
                      width={44}
                      height={44}
                      className="w-full h-full object-contain p-1.5"
                    />
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
