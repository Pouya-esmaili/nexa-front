import React from "react";
import Image from "next/image";
import Row from "../global/Row";

const projects = [
  {
    name: "Landa Academy",
    imageSrc: "/images/about/academy.webp",
    year: "2017",
  },
  {
    name: "Diaco",
    imageSrc: "/images/about/diacoo.svg",
    year: "2021",
  },
  {
    name: "Vision Raft",
    imageSrc: "/images/about/vision.svg",
    year: "2022",
  },
  {
    name: "Diaco Center",
    imageSrc: "/images/about/diacocenter.svg",
    year: "2023",
  },
  {
    name: "PreventiGene",
    imageSrc: "/images/about/preventigene.svg",
    year: "2024",
  },
  {
    name: "AutiLab",
    imageSrc: "/images/about/autilab.svg",
    year: "2025",
  },
  {
    name: "Landa Craft",
    imageSrc: "/images/about/craft.svg",
    year: "2025",
  },
];

export default function SuccessfulProjects() {
  return (
    <section className="w-full py-16">
      <Row>
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
          Our Successful Projects
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group relative overflow-hidden rounded-2xl bg-[#F7F6F9] shadow-card hover:shadow-serviceCard transition-shadow duration-300"
            >
              <Image
                src={project.imageSrc}
                alt={project.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Name overlay */}
              <div className="px-4 py-3 flex items-center justify-between">
                <span className="font-semibold text-black text-sm md:text-base truncate">
                  {project.name}
                </span>
                <span className="text-xs text-[#8F27FF] font-medium bg-purple-50 px-2 py-0.5 rounded-full flex-shrink-0">
                  {project.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Row>
    </section>
  );
}