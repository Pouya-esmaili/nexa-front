import React from "react";
import Image from "next/image";
import Row from "../global/Row";

const InnovationTimeline: React.FC = () => {
  return (
    <section className="w-full py-8 md:py-16">

      {/* ================= MOBILE ================= */}
      <div className="relative flex flex-col items-center md:hidden">

        {/* Vertical Line */}
        <div className="absolute top-0 bottom-0 left-1/2 w-[2px] -translate-x-1/2 bg-[#8F27FF]/20" />

        {/* Timeline Item */}
        <div className="relative z-10 flex w-full flex-col items-center px-3">

          {/* Card */}
          <div
            className="
              relative
              w-full
              overflow-hidden
              rounded-[28px]
              border
              border-gray-200/50
              bg-white/70
              backdrop-blur-[3px]
            "
            style={{
              boxShadow: "0px 6px 6px 0px #00000040",
            }}
          >

            {/* Image */}
            <div className="relative mt-4 h-[220px] w-full">
              <Image
                src="/images/about/diacocenter.svg"
                alt="Diaco Center"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="px-5 pb-6 pt-5 text-center">

              {/* Year */}
              <span className="mb-3 block text-xl font-semibold text-[#8F27FF]">
                November 2023
              </span>

              <h3 className="text-base font-semibold leading-7 text-black">
                The Innovation Hub – Diaco Center
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                Diaco Center was launched as a marketplace connecting
                technology seekers with validated technology providers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block">
        <Row>
          <div className="mx-auto">

            {/* Desktop Layout */}
            <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-3 md:gap-2">

              {/* Image */}
              <div className="flex justify-center md:justify-start">
                <Image
                  src="/images/about/diacocenter.svg"
                  alt="Diaco Center"
                  width={400}
                  height={300}
                  className="w-full rounded-xl object-cover"
                />
              </div>

              {/* Year */}
              <div className="flex items-center justify-center">
                <Image
                  src="/images/about/2023(2).svg"
                  alt="2023"
                  width={120}
                  height={80}
                  className="h-38 w-auto"
                />
              </div>

              {/* Text */}
              <div className="text-center md:text-left">
                <h3 className="mb-3 text-xl font-semibold text-black md:text-2xl">
                  The Innovation Hub – Diaco Center
                </h3>

                <p className="text-base text-gray-900 md:text-lg">
                  Diaco Center was launched as a marketplace connecting
                  technology seekers with validated technology providers.
                </p>
              </div>

            </div>
          </div>
        </Row>
      </div>
    </section>
  );
};

export default InnovationTimeline;