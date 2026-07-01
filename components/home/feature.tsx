'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Card data
const cardData = [
  {
    id: 1,
    title: 'Entrepreneurship',
    desc: 'From business development to investor engagement, we guide ambitious founders to scale globally — turning bold ideas into borderless, investment-ready ventures.',
    icon: '/images/landing/Entrepeneurship.svg',
    link: '/Entrepreneurship',
  },
  {
    id: 2,
    title: 'Startup',
    desc: 'We deliver precise startup advisory, crafting professional business plans, financial models, and investor pitch decks tailored for global success.',
    icon: '/images/landing/Startup.svg',
    link: '/startup',
  },
  // {
  //   id: 3,
  //   title: 'Advisory',
  //   desc: 'Our expertise spans business development, financial planning and modeling, compelling pitch deck creation, IP guidance, go-to-market strategy, and strategic investor engagement.',
  //   icon: '/images/landing/Advisory.svg',
  //   link: '/advisory',
  // },
  {
    id: 4,
    title: 'Investment',
    desc: 'With Exclusive Access to International Investors and Emerging Opportunities, We Focus on Growth-Stage Startups Driving Scalable Innovation.',
    icon: '/images/landing/Investment.svg',
    link: '/investment',
  },
];

export default function CardsPage() {
  return (
    <div id="services" className="py-8 md:py-18 md:mb-4 md:mt-4">
      <div className="max-w-[1240px] mx-auto px-6">

      {/* ── Section Title ── */}
      <div className="text-center mb-10">
        <h2 className="text-[32px] md:text-[40px] font-bold mt-8 tracking-[-0.03em] text-black">
          Our Services
        </h2>
      </div>

      <div
        className="
          grid grid-cols-1 md:grid-cols-3
          gap-x-6 gap-y-12 md:gap-y-6
          items-stretch
        "
      >
        {cardData.map((card) => (
          <Link
            key={card.id}
            href={card.link}
            className="group block w-full h-full"
          >
            <Card
              title={card.title}
              desc={card.desc}
              icon={card.icon}
            />
          </Link>
        ))}
      </div>
      </div>
    </div>
  );
}

function Card({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: string;
}) {
  return (
    
    <div className="group relative w-full h-full flex flex-col items-center transition-all duration-500 mt-8 md:mt-6 origin-top hover:scale-y-90">
      {/* Card Shadow Wrapper */}
      <div className="relative w-full h-full filter drop-shadow-[0_-1px_0_#8F27FF] group-hover:drop-shadow-none transition-all duration-300">

        {/* Card Body */}
        <div className="relative w-full h-[260px] bg-white border border-[#8F27FF] rounded-4xl p-4 pt-12 pb-14 flex flex-col items-center text-center transition-all duration-500 group-hover:bg-[#8F27FF] group-hover:translate-y-4 [mask-image:radial-gradient(circle_at_top_center,transparent_2.8rem,black_2.9rem)] [-webkit-mask-image:radial-gradient(circle_at_top_center,transparent_2.8rem,black_2.9rem)]">

          {/* Title */}
          <h3 className="absolute top-10 left-1/2 pt-3 -translate-x-1/2 md:text-[24px] text-[22px] font-bold text-black mb-3 transition-all duration-500 ease-in-out group-hover:top-1/2 group-hover:-translate-y-1/2 group-hover:text-white">
            {title}
          </h3>

          {/* Description */}
          <div className="flex-1 flex items-start overflow-hidden pt-6 transition-all duration-500 max-h-[160px] opacity-100 group-hover:max-h-0 group-hover:opacity-0 mt-6">
            <p className="md:text-[14px] text-[15px] text-[#929292] font-normal leading-relaxed mb-10">
              {desc}
            </p>
          </div>

          {/* Arrow Button */}
          <div className="absolute bottom-4 right-4">
            <div className="w-9 h-9 rounded-full flex items-center justify-center bg-[#8F27FF] group-hover:bg-white transition-all cursor-pointer">
              <Image src="/images/landing/ArrowRight.svg" alt="Arrow" width={16} height={16} className="group-hover:invert transition-all" />
            </div>
          </div>
        </div>
      </div>

      {/* Top Icon */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[8px] z-10 transition-transform duration-500 group-hover:translate-y-[10px]">
        <div className="w-20 h-4 flex items-center justify-center">
          <Image src={icon} alt={title} width={84} height={64} />
        </div>
      </div>
    </div>
  );
}
