import Row from "@/components/global/Row";

const steps = [
  {
    title: "Submit Business Concept",
    desc: "Submit an Expression of Interest (EOI) to your target province. You're scored on investment capacity, experience, and sector fit.",
  },
  {
    title: "Performance Agreement",
    desc: "If invited, sign a performance agreement outlining your investment, job creation, and operational commitments.",
  },
  {
    title: "Work Permit & Entry",
    desc: "Enter Canada on a province-backed work permit and begin establishing your business.",
  },
  {
    title: "Operate & Deliver",
    desc: "Run the business actively for 12–20 months, meeting capital, hiring, and milestone requirements.",
  },
  {
    title: "Provincial Nomination → PR",
    desc: "Upon meeting all milestones, the province nominates you. Federal PR processing follows.",
  },
];

export default function ProvincialModel() {
  return (
    <section className="py-16 md:py-24" style={{ background: "#F7F6F9" }}>

      {/* ========== MOBILE ========== */}
      <div className="md:hidden px-5">
        <h2 className="text-3xl font-bold tracking-tight mb-3">The Provincial Model</h2>
        <p className="text-sm text-gray-500 leading-relaxed mb-8">
          Canada&apos;s entrepreneur pathways are performance-based. Each province sets its own investment thresholds, sector priorities, and operating requirements.
        </p>
        <div className="relative pl-10">
          <div className="absolute top-2 bottom-2 left-4 w-0.5 bg-[#8F27FF]/30" />
          {steps.map((s, i) => (
            <div key={i} className="relative pb-7 last:pb-0">
              <div
                className="absolute -left-10 w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs font-bold text-[#8F27FF]"
                style={{ border: "2px solid #8F27FF", boxShadow: "0 0 0 4px #FAF6FF" }}
              >
                {i + 1}
              </div>
              <h4 className="font-semibold text-black mb-1">{s.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ========== DESKTOP ========== */}
      <div className="hidden md:block">
        <Row>
          <div className="grid grid-cols-2 gap-20 items-start">

            {/* Left - sticky lead */}
            <div className="sticky top-24">
              <h2 className="text-[40px] font-bold tracking-tight mb-6">The Provincial Model</h2>
              <blockquote
                className="text-[21px] italic font-medium leading-[1.5] py-5 pl-6 mb-5 text-black"
                style={{ borderLeft: "3px solid #8F27FF" }}
              >
                &ldquo;This model rewards{" "}
                <span className="text-[#8F27FF] font-semibold not-italic">execution</span>
                {" "}— not just investment.&rdquo;
              </blockquote>
              <p className="text-[15px] text-gray-500 leading-[1.7]">
                Canada&apos;s entrepreneur pathways are performance-based. Each province sets its own investment thresholds, sector priorities, and operating requirements — rewarding entrepreneurs who build real businesses, not just deploy capital.
              </p>
            </div>

            {/* Right - steps with vertical line */}
            <div className="relative pl-[52px]">
              <div
                className="absolute top-5 bottom-5 left-5 w-0.5 rounded"
                style={{ background: "linear-gradient(180deg, #8F27FF 0%, rgba(143,39,255,0.15) 100%)" }}
              />
              {steps.map((s, i) => (
                <div key={i} className="relative pb-8 last:pb-0 group hover:translate-x-1 transition-transform">
                  <div
                    className="absolute -left-[52px] w-[42px] h-[42px] rounded-full bg-white flex items-center justify-center text-sm font-bold text-[#8F27FF] transition-all group-hover:bg-[#8F27FF] group-hover:text-white"
                    style={{
                      border: "2px solid #8F27FF",
                      boxShadow: "0 0 0 5px #FAF6FF, 0 4px 12px rgba(143,39,255,0.12)",
                    }}
                  >
                    {i + 1}
                  </div>
                  <h4 className="font-semibold text-black mb-1.5 pt-2">{s.title}</h4>
                  <p className="text-[14px] text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </Row>
      </div>

    </section>
  );
}
