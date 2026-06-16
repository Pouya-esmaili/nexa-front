import Image from "next/image";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/LazyReveal";

const tags = [
  "Access to global markets",
  "Designed for innovative founders",
  "Growth & expansion opportunities",
  "Business-friendly legal frameworks",
  "Family inclusion pathways",
];

export default function WhatIs() {
  return (
    <section className="py-[90px] bg-[#F7F6F9]">
      <Row>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[70px] items-center">

          {/* Image */}
          <Reveal variant="left">
            <div className="relative">
              <div className="relative rounded-[24px] overflow-hidden" style={{ maxHeight: 520, height: 460 }}>
                <Image
                  src="/images/photos/1559136555-9303baea8ebd-w800.jpg"
                  alt="Entrepreneur planning global expansion"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Badge */}
              <div
                className="absolute bottom-6 left-6 bg-white rounded-[14px] px-5 py-4 flex items-center gap-[14px]"
                style={{ boxShadow: "0 16px 48px rgba(0,0,0,0.09)" }}
              >
                <div className="w-[42px] h-[42px] rounded-[12px] bg-[#8F27FF] grid place-items-center text-[20px] flex-shrink-0">
                  🌍
                </div>
                <div>
                  <strong className="block text-[14px] font-bold text-black">400+ Entrepreneurs Placed</strong>
                  <span className="text-[12px] text-[#929292]">Across 5 countries</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <Reveal variant="right">
            <h2 className="text-[32px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1] mb-5">
              What is an <span className="highlight">Entrepreneurship</span> Program?
            </h2>
            <p className="text-[16px] text-[#929292] leading-[1.72] mb-4">
              Entrepreneurship programs help founders and business owners access global markets, scale their ideas, and build sustainable businesses through clear, government-backed pathways.
            </p>
            <p className="text-[16px] text-[#929292] leading-[1.72] mb-[22px]">
              Each program offers a structured route to legal residency, company registration, and long-term growth — supported by Nexa&apos;s end-to-end advisory at every step.
            </p>
            <div className="flex flex-wrap gap-2 mt-[22px]">
              {tags.map(t => (
                <span
                  key={t}
                  className="px-[14px] py-[6px] rounded-full text-[14px] font-medium border border-[#E2E2E2] bg-[#F7F6F9] text-[#474747] hover:bg-[#FAF6FF] hover:border-[#8F27FF] hover:text-[#8F27FF] transition-all duration-[200ms] cursor-default"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

        </div>
      </Row>
    </section>
  );
}
