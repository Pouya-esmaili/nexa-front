import Image from "next/image";
import Reveal from "@/components/global/LazyReveal";

/* ─────────────────────────────────────────────────────────────
   plan.svg  →  viewBox 0 0 1440 665
   Verified pin positions (visual inspection at 1440px):
     Vancouver  →  x=325  y=225
     Tehran     →  x=850  y=295
   Both image (object-cover) and SVG (xMidYMid slice) scale
   identically inside a fixed-aspect container → pins stay on
   the correct cities at every viewport width.
─────────────────────────────────────────────────────────────── */

export default function Results() {
  return (
    <section style={{ background: "#000", padding: "72px 0 60px" }}>

        {/* ── Header ── */}
        <Reveal variant="up">
          <div className="text-center">
            <h2 className="text-[28px] md:text-[40px] font-bold text-white tracking-[-0.03em]">
              Our Results Tell the Story
            </h2>
          </div>
        </Reveal>

        {/* ── Map wrapper – fixed aspect ratio so image & SVG always scale identically ── */}
        <Reveal variant="up" delay={80}>
          <div
            className="relative overflow-hidden w-full"
            style={{ aspectRatio: "1440 / 665", background: "#000" }}
          >
            <Image
              src="/images/landing/plan.svg"
              alt="World map"
              fill
              sizes="100vw"
              className="object-cover"
              style={{
                filter: "invert(1) brightness(6) contrast(8) saturate(0)",
              }}
              priority
            />

            {/* ── SVG overlay – same viewBox as plan.svg, same cover behaviour ── */}
            <svg
              viewBox="0 0 1440 665"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <filter id="glow2">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                <filter id="cs2" x="-25%" y="-25%" width="150%" height="150%">
                  <feDropShadow dx="0" dy="5" stdDeviation="10"
                    floodColor="rgba(0,0,0,0.7)" floodOpacity="1"/>
                </filter>
              </defs>

              {/* Arc: Vancouver (325,225) → Tehran (850,295) */}
              <path
                d="M325,225 Q590,100 850,295"
                fill="none"
                stroke="rgba(143,39,255,0.8)"
                strokeWidth="2"
                strokeDasharray="10,6"
                strokeDashoffset="0"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  values="0;-160"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              </path>

              {/* ── Pin: Vancouver x=325 y=225 ── */}
              <g transform="translate(325,225)">
                <circle r="22" fill="rgba(143,39,255,0.15)">
                  <animate attributeName="r" values="22;34;22" dur="2.5s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.6;0;0.6" dur="2.5s" repeatCount="indefinite"/>
                </circle>
                <circle r="10" fill="#8F27FF" filter="url(#glow2)"/>
                <circle r="4.5" fill="white"/>
              </g>

              {/* ── Pin: Tehran x=850 y=295 ── */}
              <g transform="translate(850,295)">
                <circle r="22" fill="rgba(143,39,255,0.15)">
                  <animate attributeName="r" values="22;34;22" dur="2.5s" begin="0.8s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.6;0;0.6" dur="2.5s" begin="0.8s" repeatCount="indefinite"/>
                </circle>
                <circle r="10" fill="#8F27FF" filter="url(#glow2)"/>
                <circle r="4.5" fill="white"/>
              </g>

              {/* ── Stat cards (desktop) ── */}
              <g id="result-stat-cards">
                <g transform="translate(270,535)" filter="url(#cs2)">
                  <rect width="210" height="100" rx="16" fill="rgba(22,4,50,0.95)" stroke="rgba(143,39,255,0.5)" strokeWidth="1.5"/>
                  <rect width="6" height="100" rx="3" fill="#8F27FF"/>
                  <text x="26" y="48" fontSize="40" fontWeight="800" fill="white" fontFamily="Inter,sans-serif">89</text>
                  <text x="96" y="48" fontSize="26" fontWeight="700" fill="#8F27FF" fontFamily="Inter,sans-serif">%</text>
                  <text x="26" y="76" fontSize="13" fontWeight="500" fill="rgba(255,255,255,0.65)" fontFamily="Inter,sans-serif">Successful Cases</text>
                </g>
                <g transform="translate(600,535)" filter="url(#cs2)">
                  <rect width="210" height="100" rx="16" fill="rgba(22,4,50,0.95)" stroke="rgba(143,39,255,0.5)" strokeWidth="1.5"/>
                  <rect width="6" height="100" rx="3" fill="#8F27FF"/>
                  <text x="26" y="48" fontSize="40" fontWeight="800" fill="white" fontFamily="Inter,sans-serif">400</text>
                  <text x="118" y="48" fontSize="26" fontWeight="700" fill="#8F27FF" fontFamily="Inter,sans-serif">+</text>
                  <text x="26" y="76" fontSize="13" fontWeight="500" fill="rgba(255,255,255,0.65)" fontFamily="Inter,sans-serif">Clients Worldwide</text>
                </g>
                <g transform="translate(960,535)" filter="url(#cs2)">
                  <rect width="210" height="100" rx="16" fill="rgba(22,4,50,0.95)" stroke="rgba(143,39,255,0.5)" strokeWidth="1.5"/>
                  <rect width="6" height="100" rx="3" fill="#8F27FF"/>
                  <text x="26" y="48" fontSize="40" fontWeight="800" fill="white" fontFamily="Inter,sans-serif">10</text>
                  <text x="68" y="48" fontSize="26" fontWeight="700" fill="#8F27FF" fontFamily="Inter,sans-serif">+ Yrs</text>
                  <text x="26" y="76" fontSize="13" fontWeight="500" fill="rgba(255,255,255,0.65)" fontFamily="Inter,sans-serif">Years of Expertise</text>
                </g>
              </g>
            </svg>

            {/* ── Pin labels – positioned as % of the fixed-aspect container ── */}
            {/* Vancouver (325/1440 = 22.57%, 225/665 = 33.83%) */}
            <div
              className="hidden sm:block absolute text-white font-bold px-2.5 py-1.5 rounded-[7px] pointer-events-none whitespace-nowrap leading-none"
              style={{
                fontSize: "clamp(8px, 0.9vw, 12px)",
                background: "rgba(10,0,20,0.9)",
                left: "22.57%",
                top: "33.83%",
                transform: "translate(14px, 8px)",
              }}
            >
              📍 Vancouver, Canada
            </div>
            {/* Tehran (850/1440 = 59.03%, 295/665 = 44.36%) */}
            <div
              className="hidden sm:block absolute text-white font-bold px-2.5 py-1.5 rounded-[7px] pointer-events-none whitespace-nowrap leading-none"
              style={{
                fontSize: "clamp(8px, 0.9vw, 12px)",
                background: "rgba(10,0,20,0.9)",
                left: "59.03%",
                top: "44.36%",
                transform: "translate(14px, 8px)",
              }}
            >
              📍 Tehran, Iran
            </div>
          </div>
        </Reveal>


    </section>
  );
}
