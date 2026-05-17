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
      logo: "/images/landing/trip.svg",
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
      logo: "/images/landing/raft.svg",
      link: "/projects/vision-raft",
    },
    {
      title: "Diaco",
      image: "/images/landing/projects(8).svg",
      logo: "/images/landing/diaco.svg",
      link: "/projects/diaco",
    },
    {
      title: "Arshia Gallery",
      image: "/images/landing/projects(9).svg",
      logo: "/images/landing/Autilab.svg",
      link: "/projects/arshia-gallery",
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
    <section className="w-full py-12 md:py-16 2xl:py-24">
      {/* Container */}
      <div className="w-full mx-auto">

        {/* Title */}
        <h2 className="text-center text-2xl md:text-4xl 2xl:text-5xl font-bold mb-8 md:mb-12">
          Our Successful Projects
        </h2>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="
            flex gap-4 md:gap-6 2xl:gap-8
            px-4 md:px-8 
            pb-6 overflow-x-auto
            cursor-grab active:cursor-grabbing
            select-none
            scrollbar-hide
            scroll-smooth
          "
          onMouseDown={mouseDown}
          onMouseLeave={mouseLeave}
          onMouseUp={mouseUp}
          onMouseMove={mouseMove}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                relative
                min-w-[240px]
                sm:min-w-[280px]
                md:min-w-[340px]
                xl:min-w-[280px]
                2xl:min-w-[430px]

                h-[240px]
                sm:h-[280px]
                md:h-[340px]
                xl:h-[400px]
                2xl:h-[480px]

                rounded-2xl
                overflow-hidden
                shrink-0
                group
              "
            >
              {/* Background Image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300" />

              {/* Bottom Content */}
              <div
                className="
                  absolute bottom-3 left-3 right-3
                  flex items-center justify-between
                  bg-white/10 backdrop-blur-xl
                  px-3 md:px-4
                  py-2 md:py-3
                  rounded-2xl
                "
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={project.logo}
                    alt="logo"
                    width={44}
                    height={34}
                    className="
                      opacity-90
                      w-8 md:w-10 2xl:w-12
                      h-auto
                    "
                  />

                  <span
                    className="
                      text-sm md:text-base 2xl:text-lg
                      text-white
                      font-extrabold
                    "
                  >
                    {project.title}
                  </span>
                </div>

                {/* Arrow */}
                <Link
                  href={project.link}
                  className="
                    w-10 h-10 md:w-12 md:h-12
                    flex items-center justify-center
                    rounded-full
                    bg-white
                    shadow-lg
                    transition-all duration-300
                    hover:scale-110
                    shrink-0
                  "
                >
                  <Image
                    src="/images/landing/arrow.svg"
                    alt="arrow"
                    width={22}
                    height={22}
                    className="w-4 md:w-5 2xl:w-6 h-auto"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}