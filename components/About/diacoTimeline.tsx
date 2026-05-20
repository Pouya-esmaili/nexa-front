import React from "react";
import Row from "../global/Row";

const diacoTimeline: React.FC = () => {
  return (
    <section className="w-full py-8 md:py-16">
      <Row>
        <div className="mx-auto">
          {/* Text | Year | Image  →  on mobile: Image → Year → Text */}
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 md:gap-2">

            <div className="order-3 md:order-1 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-3">
                First Venture – Diaco
              </h3>
              <p className="text-gray-900 text-base md:text-lg">
                Diaco was launched to address factory automation challenges by translating
                technical expertise into operational solutions.
              </p>
            </div>

            <div className="order-2 flex items-center justify-center">
              <img
                src="/images/about/2021.svg"
                alt="2021"
                className="h-38 w-auto"
              />
            </div>

            <div className="order-1 md:order-3 flex justify-center md:justify-end">
              <img
                src="/images/about/diacoo.svg"
                alt="Diaco team"
                className="w-full object-cover rounded-xl"
              />
            </div>

          </div>
        </div>
      </Row>
    </section>
  );
};

export default diacoTimeline;
