import React from "react";
import Image from "next/image";
import Highlight from "../ui/Highlight";
import Row from "../global/Row";

const AcademyTimeline: React.FC = () => {
  return (
    <section className="w-full py-8 md:py-16">

    {/* ================= MOBILE ================= */}
<div className="relative flex flex-col items-center md:hidden">

  {/* Title */}
  <div className="mb-10 text-center">
    <Highlight>
      <h2 className="inline-block text-2xl font-bold">
        NEXA Timeline
      </h2>
    </Highlight>
  </div>

  {/* Vertical Line */}
  <div className="absolute top-24 bottom-0 left-1/2 w-[2px] -translate-x-1/2 bg-[#8F27FF]/20" />

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
          src="/images/about/academy.svg"
          alt="Landa Academy"
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="px-5 pb-6 pt-5 text-center">

        {/* Year */}
        <span className="mb-3 block text-xl font-semibold text-[#8F27FF]">
          2017
        </span>

        <h3 className="text-base font-semibold leading-7 text-black">
          The Spark – Landa Academy is Born
        </h3>

        <p className="mt-3 text-sm leading-7 text-gray-600">
          Our story began with education. Hadi established Landa Academy
          in a co-working space in Isfahan to mentor bright undergraduate
          and graduate students. This initiative created a fertile ground
          for the innovative ideas that would later become Nexa&apos;s
          first ventures.
        </p>
      </div>
    </div>
  </div>
</div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block">
        <Row>
          <div className="mx-auto">

            {/* Title */}
            <div className="mb-16 text-center">
              <Highlight>
                <h2 className="inline-block text-4xl font-bold">
                  NEXA Timeline
                </h2>
              </Highlight>
            </div>

            {/* Desktop Grid */}
            <div className="grid grid-cols-3 items-center gap-2">

              {/* Image */}
              <div className="flex justify-start">
                <Image
                  src="/images/about/academy.svg"
                  alt="Landa Academy"
                  width={400}
                  height={300}
                  className="w-full rounded-xl object-cover"
                />
              </div>

              {/* Year */}
              <div className="flex items-center justify-center">
                <Image
                  src="/images/about/2017.svg"
                  alt="2017"
                  width={120}
                  height={80}
                  className="h-38 w-auto"
                />
              </div>

              {/* Text */}
              <div className="text-left">
                <h3 className="mb-3 text-2xl font-semibold text-black">
                  The Spark – Landa Academy is Born
                </h3>

                <p className="text-lg text-gray-900">
                  Our story began with education. Hadi established Landa Academy
                  in a co-working space in Isfahan to mentor bright undergraduate
                  and graduate students. This initiative created a fertile ground
                  for the innovative ideas that would later become Nexa&apos;s
                  first ventures.
                </p>
              </div>

            </div>
          </div>
        </Row>
      </div>
    </section>
  );
};

export default AcademyTimeline;