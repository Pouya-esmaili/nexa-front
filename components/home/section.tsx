"use client";

import Image from "next/image";

const logos = [
  { src: "/images/landing/craft.svg", name: "Landa Craft", size: "w-10 h-10" },
  { src: "/images/landing/Autilab.svg", name: "Autilab", size: "w-16 h-16" },
  { src: "/images/landing/preventigene.svg", name: "Preventigene", size: "w-10 h-10" },
  { src: "/images/landing/diaco.svg", name: "Diaco Center", size: "w-10 h-10" },
  { src: "/images/landing/raft.svg", name: "Vision Raft", size: "w-10 h-10" },
  { src: "/images/landing/Landa Trip.svg", name: "Landa Trip", size: "w-10 h-10" },
  { src: "/images/landing/SteadySkull.webp", name: "Steady Skull", size: "w-10 h-10" },
  { src: "/images/landing/Arshia Gallery.svg", name: "Arshia Gallery", size: "w-16 h-16" },
];

/* triplicate for seamless infinite loop */
const track = [...logos, ...logos, ...logos];

export default function Ticker() {
  return (
    <div className="py-1 bg-[#F7F6F9] border-t border-b border-[#E2E2E2] overflow-hidden">
      <div
        className="flex items-center gap-16 w-max"
        style={{ animation: "ticker 20s linear infinite" }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLDivElement).style.animationPlayState = "paused")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLDivElement).style.animationPlayState = "running")
        }
      >
        {track.map((logo, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex items-center gap-3 opacity-55 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-200 group"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={64}
              height={64}
              className={`${logo.size} object-contain flex-shrink-0`}
            />
            <span className="text-[13px] font-semibold text-[#474747] group-hover:text-[#8F27FF] tracking-wide transition-colors duration-200 whitespace-nowrap">
              {logo.name}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.33%); }
        }
      `}</style>
    </div>
  );
}
