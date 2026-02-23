import React from "react";
import Image from "next/image";
import Highlight from "../ui/Highlight";
import Row from "../global/Row";

const AcademyTimeline: React.FC = () => {
  return (
    <section className="w-full py-16">
      <Row>
        <div className="mx-auto">

          {/* Title */}
          <div className="text-center mb-16">
            <Highlight>
              <h2 className="text-3xl md:text-4xl font-bold inline-block">
                NEXA Timeline
              </h2>
            </Highlight>
          </div>

          {/* Timeline Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-2">

            {/* Left Image (برعکس سکشن قبلی - حفظ شده) */}
            <div className="flex justify-center md:justify-start">
              <div className="rounded-xl">
                <Image
                  src="/images/about/academy.svg"
                  alt="Landa Academy"
                  width={400}
                  height={300}
                  className="w-full object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Middle Timeline */}
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/about/2017.svg"
                  alt="2017"
                  width={120}
                  height={80}
                  className="h-38 w-auto"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold text-black mb-3">
                The Spark – Landa Academy is Born
              </h3>

              <p className="text-gray-900 text-lg">
                Our story began with education. Hadi established Landa Academy in
                a co-working space in Isfahan to mentor bright undergraduate and
                graduate students. This initiative created a fertile ground for
                the innovative ideas that would later become Nexa’s first ventures.
              </p>
            </div>

          </div>

        </div>
      </Row>
    </section>
  );
};

export default AcademyTimeline;