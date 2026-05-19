"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Row from "../global/Row";

const cards = [
  "Experienced Business Owners Looking To Expand Internationally",
  "Investors Seeking High-Potential Opportunities",
  "Professionals Aiming To Relocate Their Business Or Career",
  "Business Owners Expanding From Their Home Country",
];

export default function EntrepreneurshipDesignedSection() {
  return (
    <section
      className="relative w-full flex items-center justify-center bg-cover bg-center py-14 md:py-20 overflow-hidden mt-8"
      style={{
        backgroundImage:
          "url('/images/Entrepreneurship/Designed.svg')",
      }}
    >
      <Row className="w-full">

        <div className="relative z-10 w-full text-center">

          {/* Title */}
          <h2 className="text-white text-3xl md:text-4xl font-semibold mb-8 md:mb-14">
            Who Entrepreneurship Program is Designed For?
          </h2>

          {/* Mobile Slider */}
          <div className="block lg:hidden">
            <Swiper
              slidesPerView={1.2}
              centeredSlides={true}
              spaceBetween={16}
              className="!overflow-visible"
            >
              {cards.map((text, i) => (
                <SwiperSlide key={i}>
                  <div className="rounded-2xl px-5 py-6 text-center bg-white/50 backdrop-blur-[30px] shadow-[0px_10px_15px_0px_#00000040] min-h-[140px] flex items-center justify-center">
                    <p className="text-sm font-medium">
                      {text}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid grid-cols-4 gap-6">
            {cards.map((text, i) => (
              <div
                key={i}
                className="rounded-2xl px-6 py-8 text-center bg-white/50 backdrop-blur-[30px] shadow-[0px_10px_15px_0px_#00000040]"
              >
                <p className="text-base font-medium">
                  {text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </Row>
    </section>
  );
}