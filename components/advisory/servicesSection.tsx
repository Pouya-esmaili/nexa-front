import React from "react";
import Image from "next/image";
import Row from "../global/Row";

const services = [
  {
    icon: "/images/advisory/note.svg",
    title: "Preparation of Professional Business Documents",
  },
  {
    icon: "/images/advisory/privte.svg",
    title: "Registration of Intellectual Property and Patent",
  },
  {
    icon: "/images/advisory/international.svg",
    title: "Access to Our International Network of Experts",
  },
  {
    icon: "/images/advisory/kpi.svg",
    title: "Fundraising Support and Developing KPI System",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="w-full py-14 md:py-20">
      <Row>
        <div className="w-full">

          {/* Title */}
          <h2 className="text-center text-2xl md:text-4xl font-bold mb-10 md:mb-16">
            Our Services
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="
                  relative
                  bg-[#F7F6F9]
                  rounded-2xl
                  p-6
                  shadow-[0px_4px_4px_0px_#00000040]

                  flex flex-col
                  items-center text-center
                  md:items-start md:text-start
                "
              >
                {/* Purple Side Line */}
                <div className="md:block absolute left-0 top-8 h-14 w-[4px] bg-[#8F27FF] rounded-r-md" />

                {/* Icon Box */}
                <div
                  className="
                    w-16 h-16
                    bg-white
                    rounded-xl
                    flex items-center justify-center
                    shadow-[0px_4px_4px_0px_#00000040]
                    mb-5
                  "
                >
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={30}
                    height={30}
                  />
                </div>

                {/* Text */}
                <p className="text-sm md:text-base font-medium text-black leading-relaxed">
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