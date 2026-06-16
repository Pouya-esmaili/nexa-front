"use client";

import { useState } from "react";
import Image from "next/image";
import Row from "../global/Row";

export default function PreviousProjectsSection() {
  const projects = [
    {
      title: "Arshia Gallery",
      image: "/images/Entrepreneurship/galleryy.svg",
    },
    {
      title: "Afra Cafe",
      image: "/images/Entrepreneurship/afra.svg",
    },
    {
      title: "Green Frame",
      image: "/images/Entrepreneurship/green.svg",
    },
    {
      title: "Aurora Clinic",
      image: "/images/Entrepreneurship/clinic.svg",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  return (
    <section className="w-full py-20">

      {/* Mobile Slider */}
      <div className="md:hidden px-4">
        {/* Title */}
        <h2 className="text-center text-3xl font-semibold mb-10">
          Our Previous Projects
        </h2>

        <div className="relative">

          {/* Card */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <Image
              src={projects[current].image}
              alt={projects[current].title}
              fill
              className="object-cover"
              sizes="100vw"
            />

            {/* Label */}
            <div className="absolute bottom-4 left-4 px-4 py-2 rounded-lg bg-[#0000004D] backdrop-blur-sm">
              <span className="text-white text-sm font-medium">
                {projects[current].title}
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-black text-white text-xl"
            >
              ←
            </button>

            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-black text-white text-xl"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:block">
        <Row className="w-full">
          <div className="mx-auto w-full">

            {/* Title */}
            <h2 className="text-center text-4xl font-semibold mb-14">
              Our Previous Projects
            </h2>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-18">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="relative rounded-2xl overflow-hidden group cursor-pointer transition duration-300 aspect-[4/3]"
                >
                  {/* Image */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* Label */}
                  <div className="absolute bottom-4 left-4 px-4 py-2 rounded-lg bg-[#0000004D] backdrop-blur-sm">
                    <span className="text-white text-sm font-medium">
                      {project.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </Row>
      </div>
    </section>
  );
}