import Reveal from "@/components/global/Reveal";
import Image from "next/image";

/* ─────────────────────────────────────────────────────────────
   plan.svg  →  viewBox 0 0 1440 665
   Equirectangular pin positions:
     Vancouver  lon=-123.1  lat=49.3   →  x=227  y=150
     Tehran     lon=51.4    lat=35.7   →  x=926  y=200
   Stat-card bottom positions (scaled from original 1017×517 design):
     Card 1 (89%)   : x=78    y=535
     Card 2 (400+)  : x=600   y=535
     Card 3 (7+Yrs) : x=1125  y=535
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

        {/* ── Map wrapper – full width ── */}
        <Reveal variant="up" delay={80}>
          <div
            className="relative overflow-hidden"
            style={{ background: "#000" }}
          >
            {/*
              plan.svg has a light (#FAF6FF) background and light-gray (#DAD6DC) paths.
              Filter pipeline:
                invert(1)     → background becomes near-black,  paths become dark-gray
                brightness(4) → paths rise to ~58% gray,  background stays ~8%
                contrast(4)   → paths push to ~82% (light-gray ✓),  bg collapses to 0 (black ✓)
                saturate(0)   → remove any colour cast → pure grayscale ✓
            */}
            <Image
              src="/images/landing/plan.svg"
              alt="World map"
              width={1440}
              height={665}
              className="w-full block"
              style={{
                filter: "invert(1) brightness(6) contrast(8) saturate(0)",
                opacity: 1,
              }}
              priority
            />

            {/* ── SVG overlay – viewBox matches plan.svg 1440×665 ── */}
            <svg
              viewBox="0 0 1440 665"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="xMidYMid meet"
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

              {/* Arc: Vancouver → Tehran */}
              <path
                d="M325,225 Q586,100 848,295"
                fill="none"
                stroke="rgba(143,39,255,0.8)"
                strokeWidth="2"
                strokeDasharray="10,6"
              >
                <animate attributeName="stroke-dashoffset"
                  values="0;-100" dur="2.5s" repeatCount="indefinite"/>
              </path>

              {/* ── Pin: Vancouver (130, 110) ── */}
              <g transform="translate(325,225)">
                <circle r="22" fill="rgba(143,39,255,0.15)">
                  <animate attributeName="r"   values="22;34;22" dur="2.5s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.5;0;0.5" dur="2.5s" repeatCount="indefinite"/>
                </circle>
                <circle r="10" fill="#8F27FF" filter="url(#glow2)"/>
                <circle r="4.5" fill="white"/>
              </g>

              {/* ── Pin: Tehran (630, 175) ── */}
              <g transform="translate(848,295)">
                <circle r="22" fill="rgba(143,39,255,0.15)">
                  <animate attributeName="r"   values="22;34;22" dur="2.5s" begin="0.8s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.5;0;0.5" dur="2.5s" begin="0.8s" repeatCount="indefinite"/>
                </circle>
                <circle r="10" fill="#8F27FF" filter="url(#glow2)"/>
                <circle r="4.5" fill="white"/>
              </g>

              {/* ── Stat cards (desktop) ── */}
              <g id="result-stat-cards">
                {/* 89% */}
                <g transform="translate(130,535)" filter="url(#cs2)">
                  <rect width="210" height="100" rx="16" fill="rgba(22,4,50,0.95)" stroke="rgba(143,39,255,0.5)" strokeWidth="1.5"/>
                  <rect width="6" height="100" rx="3" fill="#8F27FF"/>
                  <text x="26" y="48"  fontSize="40" fontWeight="800" fill="white" fontFamily="Inter,sans-serif">89</text>
                  <text x="96" y="48"  fontSize="26" fontWeight="700" fill="#8F27FF" fontFamily="Inter,sans-serif">%</text>
                  <text x="26" y="76"  fontSize="13" fontWeight="500" fill="rgba(255,255,255,0.65)" fontFamily="Inter,sans-serif">Successful Cases</text>
                </g>
                {/* 400+ */}
                <g transform="translate(600,535)" filter="url(#cs2)">
                  <rect width="210" height="100" rx="16" fill="rgba(22,4,50,0.95)" stroke="rgba(143,39,255,0.5)" strokeWidth="1.5"/>
                  <rect width="6" height="100" rx="3" fill="#8F27FF"/>
                  <text x="26" y="48"  fontSize="40" fontWeight="800" fill="white" fontFamily="Inter,sans-serif">400</text>
                  <text x="118" y="48" fontSize="26" fontWeight="700" fill="#8F27FF" fontFamily="Inter,sans-serif">+</text>
                  <text x="26" y="76"  fontSize="13" fontWeight="500" fill="rgba(255,255,255,0.65)" fontFamily="Inter,sans-serif">Clients Worldwide</text>
                </g>
                {/* 7+ Yrs */}
                <g transform="translate(1110,535)" filter="url(#cs2)">
                  <rect width="210" height="100" rx="16" fill="rgba(22,4,50,0.95)" stroke="rgba(143,39,255,0.5)" strokeWidth="1.5"/>
                  <rect width="6" height="100" rx="3" fill="#8F27FF"/>
                  <text x="26" y="48"  fontSize="40" fontWeight="800" fill="white" fontFamily="Inter,sans-serif">10</text>
                  <text x="68" y="48"  fontSize="26" fontWeight="700" fill="#8F27FF" fontFamily="Inter,sans-serif">+ Yrs</text>
                  <text x="26" y="76"  fontSize="13" fontWeight="500" fill="rgba(255,255,255,0.65)" fontFamily="Inter,sans-serif">Years of Expertise</text>
                </g>
              </g>
            </svg>

            {/* ── Pin label overlays ── */}
            {/* Vancouver: 130/1440 = 9.0% from left, 110/665 = 16.5% from top */}
            <div
              className="absolute text-white font-bold px-2.5 py-1.5 rounded-[7px] pointer-events-none whitespace-nowrap leading-none"
              style={{
                fontSize: "clamp(9px,1.1vw,12px)",
                background: "rgba(10,0,20,0.9)",
                left: "21.0%",
                top: "36.5%",
                transform: "translate(14px, 8px)",
              }}
            >
              📍 Vancouver, Canada
            </div>
            {/* Tehran: 630/1440 = 43.75% from left, 175/665 = 26.3% from top */}
            <div
              className="absolute text-white font-bold px-2.5 py-1.5 rounded-[7px] pointer-events-none whitespace-nowrap leading-none"
              style={{
                fontSize: "clamp(9px,1.1vw,12px)",
                background: "rgba(10,0,20,0.9)",
                left: "54.75%",
                top: "46.3%",
                transform: "translate(14px, 8px)",
              }}
            >
              📍 Tehran, Iran
            </div>
          </div>
        </Reveal>

        {/* ── Mobile stats row ── */}
        <div className="md:hidden grid grid-cols-3 gap-2.5 mt-4 px-4">
          {[
            { num: "89",  suffix: "%",     label: "Successful Cases"   },
            { num: "400", suffix: "+",     label: "Clients Worldwide"  },
            { num: "7",   suffix: "+ Yrs", label: "Years of Expertise" },
          ].map((s) => (
            <div key={s.num} className="rounded-[12px] p-3.5 flex flex-col gap-1"
              style={{
                background: "rgba(22,4,50,0.95)",
                border: "1.5px solid rgba(143,39,255,0.45)",
                borderLeft: "4px solid #8F27FF",
              }}>
              <span className="text-[26px] font-extrabold text-white leading-none">
                {s.num}<span className="text-[16px] font-bold text-[#8F27FF]">{s.suffix}</span>
              </span>
              <span className="text-[10px] text-white/65 font-medium leading-tight">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Hide SVG stat cards on mobile */}
        <style>{`
          @media (max-width: 768px) {
            #result-stat-cards { display: none; }
          }
        `}</style>

    </section>
  );
}
