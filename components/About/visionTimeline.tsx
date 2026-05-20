import React from "react";
import Image from "next/image";
import Row from "../global/Row";

const VisionTimeline: React.FC = () => {
  return (
    <section className="w-full py-8 md:py-16">
      <Row>
        <div className="mx-auto">

          {/* Image | Year | Text */}
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 md:gap-2">

            <div className="flex justify-center md:justify-start">
              <Image
                src="/images/about/vision.svg"
                alt="Vision Raft"
                width={400}
                height={300}
                className="w-full object-cover rounded-xl"
              />
            </div>

            <div className="flex items-center justify-center">
              <Image
                src="/images/about/2022.svg"
                alt="2022"
                width={120}
                height={80}
                className="h-38 w-auto"
              />
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-3">
                Reimagining Education – Vision Raft
              </h3>
              <p className="text-gray-900 text-base md:text-lg">
                Vision Raft was created to bring augmented reality into learning,
                helping children engage with knowledge beyond traditional classroom methods.
              </p>
            </div>

          </div>
        </div>
      </Row>
    </section>
  );
};

export default VisionTimeline;
