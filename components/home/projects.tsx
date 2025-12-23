"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsSection() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const projects = [
    {
      title: "Landa Trip",
      image: "/images/landing/projects(1).svg",
      logo: "/images/landing/Autilab.svg",
      link: "/projects/landa-trip",
    },
    {
      title: "Landa Craft",
      image: "/images/landing/projects(2).svg",
      logo: "/images/landing/craft.svg",
      link: "/projects/landa-craft",
    },
    {
      title: "AutiLab",
      image: "/images/landing/projects(10).svg",
      logo: "/images/landing/Autilab.svg",
      link: "/projects/autilab",
    },
    {
      title: "Vision raft",
      image: "/images/landing/projects(7).svg",
      logo: "/images/landing/craft.svg",
      link: "/projects/landa-craft",
    },
    {
      title: "diaco",
      image: "/images/landing/projects(8).svg",
      logo: "/images/landing/diaco.svg",
      link: "/projects/landa-craft",
    },
    {
      title: "Arshia Gallery",
      image: "/images/landing/projects(9).svg",
      logo: "/images/landing/Autilab.svg",
      link: "/projects/autilab",
    },
  ];

  const mouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;

    setIsDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const mouseLeave = () => setIsDown(false);
  const mouseUp = () => setIsDown(false);

  const mouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDown || !sliderRef.current) return;

    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="w-full py-14">
      <h2 className="text-center text-2xl font-bold mb-8">
        Our Successful Projects
      </h2>

      <div
        ref={sliderRef}
        className="flex gap-6 px-6 pb-8 overflow-x-scroll cursor-grab active:cursor-grabbing select-none"
        onMouseDown={mouseDown}
        onMouseLeave={mouseLeave}
        onMouseUp={mouseUp}
        onMouseMove={mouseMove}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative min-w-[260px] h-[260px] rounded-xl overflow-hidden shrink-0"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />

            <div className="absolute bottom-3 w-50 left-3 right-3 flex items-center justify-between bg-[#FFFFFF12] backdrop-blur-xl px-3 py-2 rounded-2xl">
              <Image
                src={project.logo}
                alt="logo"
                width={44}
                height={34}
                className="opacity-80"
              />
              <span className="text-sm text-white font-medium">
                {project.title}
              </span>
            </div>

            <Link
              href={project.link}
              className="absolute -bottom-2 -right-2 w-12 h-12 flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110"
            >
              <Image
                src="/images/landing/arrow.svg"
                alt="arrow"
                width={30}
                height={30}
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}