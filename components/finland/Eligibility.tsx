import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const requirements = [
  {
    num: "01",
    title: "A Team of At Least 2 Founders",
    desc: "You cannot apply as a solo entrepreneur. Your founding team must have at least two people moving to Finland who together hold <strong>at least 60% ownership</strong> of the company.",
  },
  {
    num: "02",
    title: "An Innovative Global Idea",
    desc: "Your product or service must have a clear competitive advantage in <strong>international markets</strong> — capable of rapid scaling to global reach and high revenue. Not a local replica.",
  },
  {
    num: "03",
    title: "Business Finland \"Green Light\"",
    desc: "Before any visa application, the official government agency <strong>Business Finland</strong> must evaluate and approve your business plan, issuing an Eligibility Statement valid for 4 months.",
  },
  {
    num: "04",
    title: "Proven Financial Self-Sufficiency",
    desc: "You must demonstrate liquid personal savings sufficient to cover your cost of living for at least your <strong>first year in Finland</strong>. No public financial aid is provided to founders.",
  },
];

const benefits = [
  "2-year continuous residence permit",
  "Legal right to incorporate a company in Finland",
  "Freedom to travel across all 27 Schengen countries",
  "Spouse gets unrestricted Finnish work rights",
  "Optional side employment to supplement income",
  "Direct pathway to EU Permanent Residency & Passport",
];

export default function Eligibility() {
  return (
    <section className="py-16 md:py-20 bg-[#F7F6F9]">
      <Row>
        <Reveal variant="up" className="mb-10 md:mb-14">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em]">
            The 4 Strict Eligibility Requirements
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

          {/* Main requirements */}
          <Reveal variant="left" delay={100}>
            <div className="bg-white border border-gray-200 rounded-[20px] p-10 flex flex-col">
              <p className="text-[16px] text-[#474747] leading-[1.65] mb-8 pb-8 border-b border-gray-200">
                Finland has a highly specific definition of what constitutes a &ldquo;startup.&rdquo; Traditional lifestyle businesses — a local restaurant, consulting firm, retail shop, or import/export agency —{" "}
                <strong className="text-black font-semibold">do not qualify.</strong>
              </p>
              <div className="flex flex-col">
                {requirements.map((r, i) => (
                  <div
                    key={r.num}
                    className="grid grid-cols-[48px_1fr] gap-5 items-start py-5 border-b border-gray-200 last:border-b-0 transition-all duration-300 hover:pl-1.5"
                    style={{ transitionDelay: `${i * 40}ms` }}
                  >
                    <div
                      className="w-12 h-8 rounded-lg flex items-center justify-center text-[13px] font-bold text-[#8F27FF] flex-shrink-0"
                      style={{ background: "#FAF6FF" }}
                    >
                      {r.num}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[16px] mb-1.5 tracking-[-0.015em]">{r.title}</h4>
                      <p
                        className="text-[13.5px] text-gray-500 leading-relaxed m-0"
                        dangerouslySetInnerHTML={{ __html: r.desc.replace(/<strong>/g, '<strong class="text-black font-semibold">') }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Aside */}
          <div className="flex flex-col gap-4 lg:sticky lg:top-24">
            <Reveal variant="right" delay={150}>
              {/* Benefits card */}
              <div
                className="rounded-[20px] p-8"
                style={{ background: "#FAF6FF", border: "1px solid rgba(143,39,255,0.18)" }}
              >
                <div
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#8F27FF] uppercase tracking-widest px-3 py-1.5 bg-white rounded-full mb-5"
                  style={{ border: "1px solid rgba(143,39,255,0.18)" }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M5 12l4 4 10-10"/></svg>
                  Key Benefits
                </div>
                <h3 className="font-semibold text-[17px] mb-4 tracking-[-0.02em]">What you get with the permit</h3>
                <ul className="flex flex-col gap-3">
                  {benefits.map((b, i) => (
                    <li
                      key={b}
                      className="flex items-center gap-3 text-[14px] font-medium text-black leading-snug transition-transform duration-200 hover:translate-x-1"
                      style={{ transitionDelay: `${i * 30}ms` }}
                    >
                      <span
                        className="w-[22px] h-[22px] rounded-full flex items-center justify-center flex-shrink-0 text-white"
                        style={{ background: "#8F27FF" }}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" className="w-3 h-3">
                          <path d="M5 12l4 4 10-10" />
                        </svg>
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal variant="up" delay={250}>
              {/* Warning */}
              <div
                className="rounded-[14px] p-5 flex gap-3.5 items-start"
                style={{ background: "#FFFBEB", border: "1px solid #FDE68A" }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                  <line x1="12" y1="9" x2="12" y2="13"/>
                  <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
                <p className="text-[13.5px] leading-[1.55] m-0" style={{ color: "#92400E" }}>
                  <strong style={{ color: "#78350F", fontWeight: 600 }}>Important:</strong> Traditional lifestyle businesses do not qualify. Your venture must demonstrate clear international scalability — not just local viability.
                </p>
              </div>
            </Reveal>
          </div>

        </div>
      </Row>
    </section>
  );
}
