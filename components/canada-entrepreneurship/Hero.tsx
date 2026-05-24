import Link from "next/link";
import Row from "@/components/global/Row";

const stats = [
  { num: "G7", label: "Nation Stability" },
  { num: "10+", label: "Provincial Streams" },
  { num: "24–36mo", label: "Path to PR" },
];

export default function Hero() {
  return (
    <section className="py-16 md:py-20 overflow-hidden">

      {/* ========== MOBILE ========== */}
      <div className="md:hidden px-5">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-5"
          style={{ background: "#FAF6FF", color: "#8F27FF", border: "1px solid rgba(143,39,255,0.18)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#8F27FF]" />
          Canada Entrepreneurship
        </div>
        <h1 className="text-3xl font-bold leading-tight tracking-tight mb-4">
          Build a <span className="text-[#8F27FF]">scalable</span> company on a high-stability economic platform.
        </h1>
        <p className="text-sm text-gray-600 leading-relaxed mb-6">
          At Nexa, we view Canada not as a migration destination, but as a structured, transparent, capital-accessible environment where serious businesses can be launched, positioned, and expanded.
        </p>
        <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-gray-200 mb-6">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-extrabold tracking-tight">{s.num}</div>
              <div className="text-[11px] text-gray-500 font-medium mt-1">{s.label}</div>
            </div>
          ))}
        </div>
        <Link
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#8F27FF] text-white font-semibold rounded-full text-sm"
        >
          Book an Appointment →
        </Link>
      </div>

      {/* ========== DESKTOP ========== */}
      <div className="hidden md:block">
        <Row>
          <div className="flex items-center gap-14">

            {/* Content */}
            <div className="flex-[1.1]">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-semibold mb-6"
                style={{ background: "#FAF6FF", color: "#8F27FF", border: "1px solid rgba(143,39,255,0.18)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#8F27FF]" />
                Canada Entrepreneurship
              </div>
              <h1 className="text-[48px] font-bold leading-[1.08] tracking-tight mb-6">
                Build a <span className="text-[#8F27FF]">scalable</span> company on a high-stability economic platform.
              </h1>
              <p className="text-[17px] text-[#474747] leading-[1.65] mb-8 max-w-[520px]">
                At Nexa, we view Canada not as a migration destination, but as a structured, transparent, capital-accessible environment where serious businesses can be launched, positioned, and expanded with long-term certainty.
              </p>
              <div className="grid grid-cols-3 gap-7 py-7 border-t border-b border-gray-200 mb-9">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-[34px] font-extrabold tracking-tight leading-none">{s.num}</div>
                    <div className="text-[13px] text-gray-500 font-medium mt-2">{s.label}</div>
                  </div>
                ))}
              </div>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#8F27FF] text-white font-semibold rounded-full text-[15px] transition-all hover:-translate-y-0.5"
                style={{ boxShadow: "0 12px 28px rgba(143,39,255,0.28)" }}
              >
                Book an Appointment →
              </Link>
            </div>

            {/* Visual */}
            <div className="flex-[0.9] relative h-[540px]">
              <div
                className="absolute inset-0"
                style={{
                  borderRadius: "32px 32px 32px 120px",
                  backgroundImage: "url('https://images.unsplash.com/photo-1517935706615-2717063c2225?w=900&q=80')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
                }}
              />

              {/* Canada flag */}
              <div
                className="absolute top-6 right-6 w-[68px] h-11 bg-white rounded-[10px] flex items-center justify-center z-10"
                style={{ boxShadow: "0 6px 20px rgba(0,0,0,0.05)", border: "1.5px solid #E2E2E2" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 36" className="w-14 h-9" shapeRendering="crispEdges">
                  <rect width="60" height="36" fill="#fff" />
                  <rect width="15" height="36" fill="#D80621" />
                  <rect x="45" width="15" height="36" fill="#D80621" />
                  <g transform="translate(30,18)">
                    <path d="M0,-12 L1.6,-5.8 L7.6,-7.2 L5,-2 L9.8,-0.4 L6.2,3.2 L7,7.8 L3,6 L0,10 L-3,6 L-7,7.8 L-6.2,3.2 L-9.8,-0.4 L-5,-2 L-7.6,-7.2 L-1.6,-5.8 Z" fill="#D80621" />
                    <rect x="-1" y="10" width="2" height="5" fill="#D80621" />
                  </g>
                </svg>
              </div>

              {/* Floating status */}
              <div
                className="absolute top-[90px] -right-5 bg-white rounded-[14px] px-4 py-3 flex items-center gap-2.5 z-10"
                style={{ boxShadow: "0 12px 36px rgba(0,0,0,0.07)", border: "1px solid #F4F4F4" }}
              >
                <span
                  className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"
                  style={{ boxShadow: "0 0 0 4px rgba(16,185,129,0.2)" }}
                />
                <span className="text-[14px] font-semibold text-black whitespace-nowrap">Active Programs Open</span>
              </div>

              {/* Yellow accent */}
              <div
                className="absolute -bottom-4 -left-4 flex items-center gap-3 px-[22px] py-[14px] rounded-[14px] z-10"
                style={{ background: "#FFE600", boxShadow: "0 6px 20px rgba(0,0,0,0.05)" }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-[22px] h-[22px] text-black">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span className="font-bold text-[14px] text-black">G7 Economic Stability</span>
              </div>
            </div>

          </div>
        </Row>
      </div>

    </section>
  );
}
