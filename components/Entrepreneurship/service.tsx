import React from "react";
import Image from "next/image";
import Row from "../global/Row";

const services = [
  {
    icon: "/images/Entrepreneurship/analysis.svg",
    title: "Business model & financial feasibility analysis",
  },
  {
    icon: "/images/Entrepreneurship/Legal.svg",
    title: "Legal guidance for immigration applications",
  },
  {
    icon: "/images/Entrepreneurship/Company.svg",
    title: "Company registration and post-launch support",
  },
  {
    icon: "/images/Entrepreneurship/performance.svg",
    title: "Ongoing advisory and performance monitoring",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="w-full py-20">
      <Row>
        <div className="w-full">

          {/* Title */}
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-16">
            Our Services
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="
                  relative
                  bg-[#F7F6F9]
                  rounded-2xl
                  p-6
                  shadow-[0px_4px_4px_0px_#00000040]
                "
              >
                {/* Purple Side Line */}
                <div className="absolute left-0 top-10 h-14 w-[4px] bg-[#8F27FF] rounded-2xl" />

                {/* Icon Box */}
                <div
                  className="
                    w-14 h-14
                    bg-white
                    rounded-xl
                    flex items-center justify-center
                    shadow-[0px_4px_4px_0px_#00000040]
                    mb-6
                  "
                >
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={28}
                    height={28}
                  />
                </div>

                {/* Text */}
                <p className="text-sm font-medium text-black leading-relaxed">
                  {service.title}
                </p>
              </div>
            ))}
          </div>

        </div>
      </Row>
    </section>
  );
};

export default ServicesSection;