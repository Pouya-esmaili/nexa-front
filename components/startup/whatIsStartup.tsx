import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import Image from "next/image";

const tags = [
  "Team-Driven Vision & Collaborative Execution",
  "Innovative Solutions for Real Market Needs",
  "Sustainable Revenue & Wealth Creation Models",
  "Scalable Structure with Global Growth Potential",
];

export default function WhatIsStartup() {
  return (
    <section className="py-16 md:py-24 bg-[#F7F6F9]">
      <Row>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-12 md:gap-16 items-center">
          <Reveal variant="left">
            <div className="relative">
              <div className="relative rounded-[24px] overflow-hidden" style={{ height: 460 }}>
                <Image
                  src="/images/photos/1559136555-9303baea8ebd-w800.jpg"
                  alt="Entrepreneur planning global expansion"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute bottom-6 left-6 bg-white rounded-[14px] px-5 py-4 flex items-center gap-4"
                style={{ boxShadow: "0 16px 48px rgba(0,0,0,0.09)" }}>
                <div className="w-[42px] h-[42px] rounded-[12px] bg-[#8F27FF] grid place-items-center text-[20px] flex-shrink-0">🌍</div>
                <div>
                  <strong className="block text-[14px] font-bold text-black">400+ Entrepreneurs Placed</strong>
                  <span className="text-[12px] text-[#929292]">Across 5 countries</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal variant="right">
            <h2 className="text-[32px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1] mb-5">
              Built To <span className="text-[#8F27FF]">Innovate.</span> Designed To Scale.
            </h2>
            <p className="text-[16px] text-[#929292] leading-[1.72] mb-4">
              A Startup is a team-driven venture focused on solving real market needs through innovation and technology, while building sustainable revenue models designed for scalable, long-term growth.
            </p>
            <p className="text-[16px] text-[#929292] leading-[1.72] mb-6">
              Nexa supports founders at every stage — from idea validation and visa application to fundraising and post-launch scaling across global markets.
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map(t => (
                <span key={t} className="px-3.5 py-1.5 rounded-full text-[13px] font-medium border border-[#E2E2E2] bg-white text-[#474747] hover:bg-[#FAF6FF] hover:border-[rgba(143,39,255,0.18)] hover:text-[#8F27FF] transition-colors cursor-default">
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
