import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const steps = [
  { num: "01", title: "Eligibility & structuring", desc: "Confirm investor profile, family inclusion, source-of-funds documentation and qualifying investment strategy.", highlight: false },
  { num: "02", title: "Property acquisition", desc: "Acquire qualifying real estate — residential, commercial, villa or government-approved development — above USD 600,000.", highlight: false },
  { num: "03", title: "Official valuation", desc: "Obtain government-authorized property valuation and complete transfer through compliant banking channels.", highlight: true },
  { num: "04", title: "Residence & CBI filing", desc: "File the citizenship application for the principal applicant and eligible family members through structured government channels.", highlight: false },
  { num: "05", title: "Passport issuance", desc: "Turkish citizenship and passports issued upon final approval — property is held for a minimum of 3 years.", highlight: false },
];

export default function CBIProgram() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <Row>
        <Reveal variant="up" className="mb-10 md:mb-14">
          <h2 className="text-[28px] md:text-[38px] font-bold tracking-tight">
            Turkish Citizenship by Investment Program
          </h2>
        </Reveal>

        <div className="flex flex-col lg:flex-row gap-10">

          {/* Sidebar */}
          <Reveal variant="left" delay={100} className="lg:w-64 flex-shrink-0 self-start">
            <aside
              className="rounded-2xl p-7 flex flex-col gap-5"
              style={{ background: "#1a1a22", color: "#fff" }}
            >
              <span
                className="inline-block text-[11px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full w-fit"
                style={{ background: "rgba(255,255,255,0.08)", color: "#ccc" }}
              >
                Process duration
              </span>
              <div className="flex items-end gap-2">
                <span className="text-[56px] font-extrabold leading-none">6–12</span>
                <span className="text-[18px] font-semibold mb-2 text-white/70">months</span>
              </div>
              <p className="text-[14px] text-white/60 leading-relaxed">
                One of the world&apos;s most established Citizenship by Investment programs. Applications proceed through structured government channels.
              </p>
              <div className="flex flex-col gap-2 pt-2 border-t border-white/10">
                {["Government recognized", "Family inclusion"].map((tag) => (
                  <span key={tag} className="flex items-center gap-2 text-[14px] text-white/80">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="w-4 h-4 text-[#8F27FF]">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                    {tag}
                  </span>
                ))}
              </div>
            </aside>
          </Reveal>

          {/* Timeline */}
          <ol className="flex-1 flex flex-col gap-0 relative">
            {steps.map((s, i) => (
              <Reveal key={s.num} variant="up" delay={i * 90 + 150}>
                <li className="flex gap-5 relative">
                  {/* Connector line */}
                  {i < steps.length - 1 && (
                    <div className="absolute left-[19px] top-10 bottom-0 w-px bg-gray-100" />
                  )}
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-[13px] font-bold z-10 transition-all duration-300"
                    style={
                      s.highlight
                        ? { background: "#8F27FF", color: "#fff" }
                        : { background: "#F5F5F5", color: "#555" }
                    }
                  >
                    {s.num}
                  </div>
                  <div
                    className={`flex-1 mb-6 p-5 rounded-2xl transition-all duration-300 hover:-translate-x-0 hover:shadow-sm ${
                      s.highlight ? "border-[1.5px] border-[#8F27FF]" : "border border-gray-100"
                    }`}
                    style={s.highlight ? { background: "#FAF6FF" } : { background: "#fff", boxShadow: "0 2px 12px rgba(0,0,0,0.03)" }}
                  >
                    <h4 className="font-semibold text-[15px] mb-1">{s.title}</h4>
                    <p className="text-[13px] text-gray-500 leading-relaxed">{s.desc}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>

        </div>
      </Row>
    </section>
  );
}
