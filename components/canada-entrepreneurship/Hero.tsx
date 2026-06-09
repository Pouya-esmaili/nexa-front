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
              <h1 className="text-3xl lg:text-[48px] font-bold leading-[1.08] tracking-tight mb-6">
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
            <div className="flex-[0.9] relative h-[380px] lg:h-[540px]">
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

            </div>

          </div>
        </Row>
      </div>

    </section>
  );
}
