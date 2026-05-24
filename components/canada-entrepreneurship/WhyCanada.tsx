import Row from "@/components/global/Row";

const reasons = [
  {
    title: "Globally Credible",
    desc: "A G7 nation delivering economic stability and worldwide credibility.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "Innovation-First",
    desc: "One of the world's most entrepreneurial immigration ecosystems.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Strategic Location",
    desc: "A bridge between U.S. capital flows and European trade corridors.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "Capital Networks",
    desc: "Access to VCs, angels, incubators, and accelerators.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Quality of Life",
    desc: "A multicultural consumer base with reach into global markets.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: "Stage-Aware",
    desc: "Programs supporting seed, growth, and scale-up companies alike.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

export default function WhyCanada() {
  return (
    <section className="py-16 md:py-24 bg-white">

      {/* ========== MOBILE ========== */}
      <div className="md:hidden px-5">
        <h2 className="text-3xl font-bold text-center tracking-tight mb-8">Why Canada</h2>
        <div className="flex flex-col gap-3">
          {reasons.map((r) => (
            <div key={r.title} className="flex gap-4 p-5 rounded-2xl" style={{ background: "#F7F6F9" }}>
              <div
                className="w-10 h-10 flex-shrink-0 rounded-xl flex items-center justify-center text-[#8F27FF]"
                style={{ background: "#FAF6FF" }}
              >
                {r.icon}
              </div>
              <div>
                <h3 className="font-semibold text-black mb-1">{r.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ========== DESKTOP ========== */}
      <div className="hidden md:block">
        <Row>
          <h2 className="text-4xl font-bold text-center tracking-tight mb-12">Why Canada</h2>
          <div className="grid grid-cols-3 border border-gray-200 rounded-2xl overflow-hidden bg-white">
            {reasons.map((r, i) => (
              <div
                key={r.title}
                className="p-9 hover:bg-[#F7F6F9] transition-colors"
                style={{
                  borderRight: (i + 1) % 3 !== 0 ? "1px solid #E2E2E2" : undefined,
                  borderBottom: i < 3 ? "1px solid #E2E2E2" : undefined,
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-[#8F27FF] mb-5"
                  style={{ background: "#FAF6FF" }}
                >
                  {r.icon}
                </div>
                <h3 className="text-[18px] font-semibold text-black mb-2">{r.title}</h3>
                <p className="text-[14.5px] text-gray-500 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </Row>
      </div>

    </section>
  );
}
