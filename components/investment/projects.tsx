"use client";

import Image from "next/image";
import Reveal from "@/components/global/Reveal";

const PROJECTS = [
  {
    name: "Arshia Gallery",
    tag: "Fine Jewelry · Luxury Retail",
    img: "/images/Entrepreneurship/Arshia Gallery.jpg",
  },
  {
    name: "Afra Cafe",
    tag: "F&B · International",
    img: "/images/Entrepreneurship/Afra Cafe.jpg",
  },
  {
    name: "Green farm",
    tag: "Sustainability · Global",
    img: "/images/Entrepreneurship/Green Farm.jpg",
  },
  {
    name: "Aurora Clinic",
    tag: "Healthcare · Canada",
    img: "/images/Entrepreneurship/Aurora Clinic.jpg",
  },
];

export default function InvestmentProjects() {
  return (
    <section style={{ padding: "90px 0", background: "#fff" }}>
      <div className="px-6 mx-auto w-full" style={{ maxWidth: 1240 }}>
        {/* Header */}
        <Reveal>
          <div className="text-center mb-14">
            <h2
              style={{
                fontSize: "clamp(26px, 3vw, 40px)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                color: "#000",
              }}
            >
              Our Previous Projects
            </h2>
          </div>
        </Reveal>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[22px]">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.name} delay={i * 80}>
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ name, tag, img }: (typeof PROJECTS)[0]) {
  return (
    <div
      className="group relative overflow-hidden cursor-pointer"
      style={{
        borderRadius: 20,
        height: 260,
        transition: "transform .4s cubic-bezier(.2,.8,.2,1), box-shadow .4s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(-4px)";
        el.style.boxShadow = "0 24px 48px rgba(0,0,0,.25)";
        const overlayEl = el.querySelector<HTMLElement>(".proj-overlay");
        if (overlayEl) overlayEl.style.background = "linear-gradient(180deg,rgba(143,39,255,.08) 0%,rgba(0,0,0,.85) 100%)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
        const overlayEl = el.querySelector<HTMLElement>(".proj-overlay");
        if (overlayEl) overlayEl.style.background = "linear-gradient(180deg,transparent 40%,rgba(0,0,0,.75) 100%)";
      }}
    >
      {/* Image */}
      <Image
        src={img}
        alt={name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Overlay */}
      <div
        className="proj-overlay absolute inset-0 transition-all duration-300"
        style={{
          background: "linear-gradient(180deg,transparent 40%,rgba(0,0,0,.75) 100%)",
        }}
      />

      {/* Body */}
      <div
        className="absolute z-10 bottom-0 left-0 right-0 flex items-end justify-between"
        style={{ padding: 22 }}
      >
        <div>
          <div
            style={{
              color: "white",
              fontWeight: 700,
              fontSize: 16,
              letterSpacing: "-0.01em",
            }}
          >
            {name}
          </div>
          <div
            style={{
              fontSize: 12,
              color: "rgba(255,255,255,0.65)",
              marginTop: 4,
              fontWeight: 500,
            }}
          >
            {tag}
          </div>
        </div>

      </div>
    </div>
  );
}
