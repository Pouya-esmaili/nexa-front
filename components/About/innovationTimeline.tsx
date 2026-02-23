import React from "react";
import Image from "next/image";
import Row from "../global/Row";

const InnovationTimeline: React.FC = () => {
  return (
    <section className="w-full py-16">
      <Row>
        <div className="mx-auto">

          {/* Timeline Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-2">

            {/* Left Image (برعکس سکشن قبلی - حفظ شده) */}
            <div className="flex justify-center md:justify-start">
              <div className="rounded-xl">
                <Image
                  src="/images/about/diacocenter.svg"
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
                  src="/images/about/2023(2).svg"
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
                The Innovation Hub – Diaco Center
              </h3>

              <p className="text-gray-900 text-lg">
                Diaco Center was launched as a marketplace connecting technology seekers with validated technology providers.
              </p>
            </div>

          </div>

        </div>
      </Row>
    </section>
  );
};

export default InnovationTimeline;