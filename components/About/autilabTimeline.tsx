import React from "react";
import Image from "next/image";
import Row from "../global/Row";

const AutilabTimeline: React.FC = () => {
  return (
    <section className="w-full py-8 md:py-16">
      <Row>
        <div className="mx-auto">

          {/* Image | Year | Text */}
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 md:gap-2">

            <div className="flex justify-center md:justify-start">
              <Image
                src="/images/about/autilab.svg"
                alt="AutiLab"
                width={400}
                height={300}
                className="w-full object-cover rounded-xl"
              />
            </div>

            <div className="flex items-center justify-center">
              <Image
                src="/images/about/2025.svg"
                alt="2025"
                width={120}
                height={80}
                className="h-38 w-auto"
              />
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-3">
                A Platform for Hope – AutiLab
              </h3>
              <p className="text-gray-900 text-base md:text-lg">
                AutiLab was established to enable early autism detection and improvement,
                combining AI-driven systems with specialist expertise.
              </p>
            </div>

          </div>
        </div>
      </Row>
    </section>
  );
};

export default AutilabTimeline;
