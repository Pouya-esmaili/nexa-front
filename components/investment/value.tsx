import React from "react";
import Image from "next/image";
import Row from "../global/Row";

const services = [
  {
    icon: "/images/investment/Group 1000001664.svg",
    title: "Scaling & International Expansion Strategies",
  },
  {
    icon: "/images/investment/Clip path group (7).svg",
    title: "Strategic Advisory & Expert Guidance",
  },
  {
    icon: "/images/investment/Clip path group (8).svg",
    title: "Governance & Risk Management Solutions",
  },
  {
    icon: "/images/investment/Group 1000001663.svg",
    title: "Market Access & Business Opportunities",
  },
];

const value: React.FC = () => {
  return (
    <section className="w-full py-20">

      {/* Mobile بدون Row */}
      <div className="md:hidden px-6">
        {/* Title */}
        <h2 className="text-center text-3xl font-bold mb-10">
          Our Services
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6">
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
              <div className="absolute left-0 top-8 h-14 w-[4px] bg-[#8F27FF] rounded-r-md" />

              <div
                className="
    w-14 h-14
    bg-white
    rounded-xl
    flex items-center justify-center
    shadow-[0px_4px_4px_0px_#00000040]
    mb-6
    mx-auto md:mx-0
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
              <p className="text-sm font-medium text-black leading-relaxed text-center md:text-left">
                {service.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop داخل Row */}
      <div className="hidden md:block">
        <Row>
          <div className="w-full">

            {/* Title */}
            <h2 className="text-center text-4xl font-bold mb-16">
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
                  <div className="absolute left-0 top-8 h-14 w-[4px] bg-[#8F27FF] rounded-r-md" />

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
      </div>
    </section>
  );
};

export default value;