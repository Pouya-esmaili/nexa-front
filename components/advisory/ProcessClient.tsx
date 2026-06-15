"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { useRef, useState } from "react";
import Row from "../global/Row";

const steps = [
  {
    title: "Discovery Call",
    desc: "We listen intently about the details of your endeavor with a focus on what you’re looking to achieve. From there, we propose the services that are needed to help you accomplish your goal.",
    image: "/images/advisory/Discovery.png",
  },
  {
    title: "Proposal",
    desc: "We put together and send you a proposal inclusive of the scope of work, delivery timing, Price, and terms of engagement.",
    image: "/images/advisory/Proposal.png",
  },
  {
    title: "Contract & Invoice",
    desc: "Once the Proposal is accepted by you, we finalize our contract and send you the invoice. We’re ready to start your project!",
    image: "/images/advisory/Contract.png",
  },
  {
    title: "Questionnaire",
    desc: "You receive our comprehensive questionnaire, designed specifically to allow you to easily share the details of your endeavor with us. We’ll use this knowledge to expertly create the agreed upon products that will help you achieve your goal.",
    image: "/images/advisory/Questionnaire.png",
  },
  {
    title: "Review",
    desc: "Upon receiving your complete questionnaire, our team analyzes the answers and reaches out to you in case of any missing data or additional questions.",
    image: "/images/advisory/Review.png",
  },
  {
    title: "Writing Process",
    desc: "Your dedicated team creates your custom built first draft of the first product within the specified time frame. And we never miss a deadline!",
    image: "/images/advisory/Writing.png",
  },
  {
    title: "Optional Revisions",
    desc: "Once the Proposal is accepted by you, we finalize our contract and send you the invoice. We’re ready to start your project!",
    image: "/images/advisory/2 1537 (1).png",
  },
];

export default function OurProcessClient() {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
   <section className="w-full py-10 md:px-16 overflow-hidden">
      <Row>
        <div className="mx-auto relative w-full">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-14">
            Our Process
          </h2>

          {/* Left Arrow */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className={`hidden md:flex absolute -left-12 top-1/2 -translate-y-1/2 z-10
            w-10 h-8 rounded-lg items-center justify-center
            border transition-all
            ${
              activeIndex === 0
                ? "border-[#929292] text-[#929292]"
                : "border-[#8F27FF] text-[#8F27FF]"
            }`}
          >
            ←
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className={`hidden md:flex absolute -right-12 top-1/2 -translate-y-1/2 z-10
            w-10 h-8 rounded-lg items-center justify-center
            border transition-all
            ${
              activeIndex >= steps.length - 3
                ? "border-[#929292] text-[#929292]"
                : "border-[#8F27FF] text-[#8F27FF]"
            }`}
          >
            →
          </button>

  <Swiper
    slidesPerView={1.15}
    spaceBetween={20}
    centeredSlides={true}

    breakpoints={{
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: false,
      },
    }}

    onSwiper={(swiper) => (swiperRef.current = swiper)}
    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}

    className="!overflow-visible md:!overflow-hidden"
  >
              {steps.map((step, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="
                      flex flex-col
                      w-full
                      min-h-[520px] md:min-h-[580px]
                      p-5 md:p-6
                      gap-6 md:gap-8
                      rounded-[24px]
                      border-[0.5px] border-[#929292]
                      bg-white
                      shadow-[0px_4px_8px_0px_#00000040]
                    "
                  >
                    {/* Number */}
                    <div className="text-5xl md:text-6xl font-bold text-[#8F27FF40]">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Content Wrapper */}
                    <div className="flex flex-col flex-1">

                      {/* Title + Desc */}
                      <div className="min-h-[160px] md:min-h-[200px]">
                        <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                          {step.title}
                        </h3>

                        <p className="text-black text-base leading-relaxed">
                          {step.desc}
                        </p>
                      </div>

                      {/* Progress */}
                      <div className="flex gap-2 mt-auto">
                        {Array.from({ length: 7 }).map((_, i) => (
                          <div
                            key={i}
                            className={`h-[3px] flex-1 rounded-full
                            ${i <= index ? "bg-[#8F27FF]" : "bg-gray-200"}`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Image */}
                    <div className="overflow-hidden rounded-xl">
                      <Image
                        src={step.image}
                        alt={step.title}
                        width={400}
                        height={220}
                        className="w-full h-[180px] md:h-[200px] object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

        </div>
      </Row>
    </section>
  );
}
