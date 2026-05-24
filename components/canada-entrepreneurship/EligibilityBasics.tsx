import Row from "@/components/global/Row";

const items = [
  {
    title: "Scalable Business Plan",
    desc: "A strong, market-validated, and growth-oriented business plan.",
  },
  {
    title: "Net Worth & Capital",
    desc: "Sufficient personal net worth and investment capacity.",
  },
  {
    title: "Active Management",
    desc: "Day-to-day operational involvement required.",
  },
  {
    title: "Language Proficiency",
    desc: "English or French at the threshold required by stream.",
  },
  {
    title: "Management Experience",
    desc: "Prior business management or ownership history.",
  },
  {
    title: "Job Creation Focus",
    desc: "Many streams emphasize employment over fixed capital.",
  },
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-[18px] h-[18px]">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function EligibilityBasics() {
  return (
    <section className="py-16 md:py-24" style={{ background: "#F7F6F9" }}>

      {/* ========== MOBILE ========== */}
      <div className="md:hidden px-5">
        <h2 className="text-3xl font-bold text-center tracking-tight mb-8">Eligibility Basics</h2>
        <div className="flex flex-col gap-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 items-start p-4 bg-white rounded-2xl border border-gray-200"
            >
              <div
                className="w-9 h-9 flex-shrink-0 rounded-full flex items-center justify-center text-[#8F27FF]"
                style={{ background: "#FAF6FF" }}
              >
                <CheckIcon />
              </div>
              <div>
                <h4 className="font-semibold text-black mb-0.5">{item.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ========== DESKTOP ========== */}
      <div className="hidden md:block">
        <Row>
          <h2 className="text-4xl font-bold text-center tracking-tight mb-12">Eligibility Basics</h2>
          <div className="grid grid-cols-3 gap-4">
            {items.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 items-start p-6 bg-white rounded-2xl border border-gray-200 hover:border-[#8F27FF]/30 hover:-translate-y-0.5 transition-all"
                style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
              >
                <div
                  className="w-[38px] h-[38px] flex-shrink-0 rounded-full flex items-center justify-center text-[#8F27FF]"
                  style={{ background: "#FAF6FF" }}
                >
                  <CheckIcon />
                </div>
                <div>
                  <h4 className="text-[16px] font-semibold text-black mb-1">{item.title}</h4>
                  <p className="text-[13.5px] text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Row>
      </div>

    </section>
  );
}
