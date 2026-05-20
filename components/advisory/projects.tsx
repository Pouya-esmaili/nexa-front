"use client";

import Image from "next/image";
import Row from "../global/Row";

const projects = [
  {
    title: "Vision Raft",
    subtitle: "Business Plan & PitchDeck",
    image: "/images/advisory/raft.png",
  },
  {
    title: "Preventie Gene",
    subtitle: "Financial Model",
    image: "/images/advisory/gene.png",
  },
  {
    title: "Landa Craft",
    subtitle: "Business Plan & PitchDeck",
    image: "/images/advisory/craft.png",
  },
  {
    title: "Diaco Center",
    subtitle: "Business Advisory & Marketing Analysis",
    image: "/images/advisory/diaco.png",
  },
];

function Content() {
  return (
    <div className="mx-auto">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Our Highlighted Projects
      </h2>

      {/* Purple Container */}
      <div className="bg-[#8F27FF] rounded-3xl p-8 md:p-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center transition-all duration-300"
              style={{
                boxShadow:
                  "0px 10px 30px 0px #00000026, 0px -10px 30px 0px #00000026",
              }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-5">
                <div className="transition-transform duration-300 hover:scale-120">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">
                {project.title}
              </h3>

              {/* Subtitle */}
              <p className="text-sm text-gray-600">
                {project.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HighlightedProjects() {
  return (
    <section className="w-full py-20">
      {/* Mobile */}
      <div className="block lg:hidden px-6">
        <Content />
      </div>

      {/* Desktop */}
      <div className="hidden lg:block">
        <Row>
          <Content />
        </Row>
      </div>
    </section>
  );
}