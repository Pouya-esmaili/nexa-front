import Row from "@/components/global/Row";

const diyList = [
  "Generic business plans rarely match provincial priorities",
  "Manual tracking of constantly-changing quotas & rules",
  "Higher refusal risk from documentation errors",
  "Limited insight into nomination agreement nuances",
  "Longer timelines, with frequent restarts",
  "Unclear performance-milestone roadmap",
];

const nexaList = [
  "Customized plans aligned to each province's criteria",
  "Real-time monitoring of program updates & quotas",
  "Documentation precision built on 7+ years of practice",
  "Full navigation of nomination & performance agreements",
  "Significantly shorter timelines & higher success rates",
  "Clear milestone-driven roadmap to PR",
];

export default function Compare() {
  return (
    <section className="py-16 md:py-24" style={{ background: "#F7F6F9" }}>

      {/* ========== MOBILE ========== */}
      <div className="md:hidden px-5">
        <h2 className="text-3xl font-bold text-center tracking-tight mb-8">
          Why Working with an Expert Matters
        </h2>
        <div className="flex flex-col gap-5">
          {/* DIY */}
          <div className="bg-white rounded-3xl p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-black mb-5">Going It Alone</h3>
            <ul className="flex flex-col gap-3">
              {diyList.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-[#474747] leading-snug">
                  <span className="w-[22px] h-[22px] flex-shrink-0 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center text-xs font-bold">✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* Nexa */}
          <div className="rounded-3xl p-6 relative" style={{ background: "#8F27FF" }}>
            <span
              className="absolute top-5 right-5 text-[11px] font-bold tracking-widest text-white px-3 py-1 rounded-full"
              style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}
            >
              RECOMMENDED
            </span>
            <h3 className="text-xl font-bold text-white mb-5">With Nexa</h3>
            <ul className="flex flex-col gap-3">
              {nexaList.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-white leading-snug">
                  <span className="w-[22px] h-[22px] flex-shrink-0 rounded-full bg-white text-[#8F27FF] flex items-center justify-center text-xs font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ========== DESKTOP ========== */}
      <div className="hidden md:block">
        <Row>
          <h2 className="text-4xl font-bold text-center tracking-tight mb-12">
            Why Working with an Expert Matters
          </h2>
          <div className="grid grid-cols-2 gap-6 max-w-[1100px] mx-auto">

            {/* DIY column */}
            <div className="bg-white rounded-[28px] p-10 border border-gray-200">
              <h3 className="text-[26px] font-bold text-black mb-6 tracking-tight">Going It Alone</h3>
              <ul className="flex flex-col">
                {diyList.map((item) => (
                  <li
                    key={item}
                    className="flex gap-4 py-3.5 border-b border-gray-200 last:border-b-0 text-[14.5px] text-[#474747] leading-snug"
                  >
                    <span className="w-[22px] h-[22px] flex-shrink-0 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center text-xs font-bold">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Nexa column */}
            <div className="rounded-[28px] p-10 relative" style={{ background: "#8F27FF" }}>
              <span
                className="absolute top-6 right-6 text-[11px] font-bold tracking-[0.1em] text-white px-3 py-1 rounded-full"
                style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}
              >
                RECOMMENDED
              </span>
              <h3 className="text-[26px] font-bold text-white mb-6 tracking-tight">With Nexa</h3>
              <ul className="flex flex-col">
                {nexaList.map((item) => (
                  <li
                    key={item}
                    className="flex gap-4 py-3.5 text-[14.5px] text-white leading-snug"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.15)" }}
                  >
                    <span className="w-[22px] h-[22px] flex-shrink-0 rounded-full bg-white text-[#8F27FF] flex items-center justify-center text-xs font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </Row>
      </div>

    </section>
  );
}
