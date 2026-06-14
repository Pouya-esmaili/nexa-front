import React from "react";
import Row from "../global/Row";
import Image from "next/image";

const TripTimeline: React.FC = () => {
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
            <div className="relative w-full h-[240px]">
              <Image src="/images/about/trip.svg" alt="Landa Trip" fill className="object-cover" sizes="100vw" />
            </div>

            {/* Content */}
            <div className="px-5 pb-6 pt-5 text-center">

              {/* Year */}
              <span className="mb-3 block text-xl font-semibold text-[#8F27FF]">
                July 2023
              </span>

              <h3 className="text-base font-semibold leading-7 text-black">
                Learning Without Borders – Landa Trip
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                LandaTrip emerged to redefine education beyond traditional
                settings, integrating learning with purposeful travel.
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

              {/* Text */}
              <div className="order-3 text-center md:order-1 md:text-left">
                <h3 className="mb-3 text-xl font-semibold text-black md:text-2xl">
                  Learning Without Borders – Landa Trip
                </h3>

                <p className="text-base text-gray-900 md:text-lg">
                  LandaTrip emerged to redefine education beyond traditional
                  settings, integrating learning with purposeful travel.
                </p>
              </div>

              {/* Year */}
              <div className="order-2 flex items-center justify-center">
                <div className="relative h-[96px] w-[96px]">
                  <Image src="/images/about/2023.svg" alt="2023" fill className="object-contain" sizes="96px" />
                </div>
              </div>

              {/* Image */}
              <div className="order-1 flex justify-center md:order-3 md:justify-end">
                <div className="relative w-full h-[320px] md:h-[420px]">
                  <Image src="/images/about/trip.svg" alt="Landa Trip" fill className="rounded-xl object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
              </div>

            </div>
          </div>
        </Row>
      </div>
    </section>
  );
};

export default TripTimeline;