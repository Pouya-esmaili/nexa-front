import React from "react";
import Row from "../global/Row";

const preventigeneTimeline: React.FC = () => {
  return (
    <section className="w-full py-8 md:py-16">
      <Row>
        <div className="mx-auto">
          {/* Text | Year | Image  →  on mobile: Image → Year → Text */}
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 md:gap-2">

            <div className="order-3 md:order-1 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-3">
                Engineering a Healthier Future – PreventiGene
              </h3>
              <p className="text-gray-900 text-base md:text-lg">
                PreventiGene was created to apply artificial intelligence and genetic
                analysis in early breast cancer risk prevention.
              </p>
            </div>

            <div className="order-2 flex items-center justify-center">
              <img
                src="/images/about/2024.svg"
                alt="2024"
                className="h-38 w-auto"
              />
            </div>

            <div className="order-1 md:order-3 flex justify-center md:justify-end">
              <img
                src="/images/about/preventigene.svg"
                alt="PreventiGene"
                className="w-full object-cover rounded-xl"
              />
            </div>

          </div>
        </div>
      </Row>
    </section>
  );
};

export default preventigeneTimeline;
