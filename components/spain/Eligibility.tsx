import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const requirements = [
  {
    num: "01",
    title: "Innovation & Scalability",
    desc: "The project must possess a unique value proposition, specialized technology, or an original organizational method — with a clear trajectory for generating corporate volume, scalable profits, and local market expansion.",
  },
  {
    num: "02",
    title: "Job Creation Metrics",
    desc: "Your business plan must illustrate a realistic capacity to hire local employees, contract regional suppliers, and actively contribute to the employment landscape of Spain over a 3-year horizon.",
  },
  {
    num: "03",
    title: "Founder Professional Profile",
    desc: "ENISA analyzes your professional CV, academic credentials, and entrepreneurship history to verify that you possess the technical capabilities and leadership experience required to execute the business plan.",
  },
];

const benefits = [
  "3-year TIE residence card (applied from Spain)",
  "Apply from inside Spain on tourist entry",
  "Secondary employment & consulting permitted",
  "Full family included with unrestricted work rights",
  "29-country Schengen travel freedom",
  "2-year fast-track citizenship for Ibero-Americans",
];

export default function Eligibility() {
  return (
    <section className="py-20 md:py-24 bg-[#F7F6F9]">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center mb-12">
            Core Eligibility &amp; Business Evaluation
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Main */}
          <Reveal variant="left">
            <div className="bg-white border border-[#E2E2E2] rounded-[20px] p-11 flex flex-col">
              <p className="text-[16px] text-[#474747] leading-[1.65] mb-8 pb-8" style={{ borderBottom: "1px solid #E2E2E2" }}>
                Your project must be vetted as <strong className="text-black font-semibold">innovative and of special economic interest to Spain</strong>. The official evaluation is conducted by <strong className="text-black font-semibold">ENISA</strong> (Empresa Nacional de Innovación S.A.) against three strict parameters.
              </p>

              {requirements.map((r, i) => (
                <div key={r.num} className="grid grid-cols-[48px_1fr] gap-5 items-start py-5 transition-all duration-200 hover:pl-1.5"
                  style={{ borderBottom: i < requirements.length - 1 ? "1px solid #E2E2E2" : undefined }}>
                  <div className="w-[48px] h-[32px] bg-[#FAF6FF] rounded-[8px] flex items-center justify-center text-[13px] font-bold text-[#8F27FF] flex-shrink-0">
                    {r.num}
                  </div>
                  <div>
                    <h4 className="text-[16px] font-semibold tracking-[-0.015em] mb-1.5">{r.title}</h4>
                    <p className="text-[13.5px] text-[#929292] leading-[1.6] m-0">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Aside */}
          <Reveal variant="right">
            <div className="flex flex-col gap-4 md:sticky md:top-24">
              {/* Benefits note */}
              <div className="rounded-[20px] p-8" style={{ background: "#FAF6FF", border: "1px solid rgba(143,39,255,0.18)" }}>
                <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#8F27FF] uppercase tracking-[0.1em] px-3 py-1.5 bg-white rounded-full mb-5"
                  style={{ border: "1px solid rgba(143,39,255,0.18)" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="w-3 h-3">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                  Key Benefits
                </div>
                <h3 className="text-[17px] font-semibold mb-4">What the permit grants you</h3>
                <ul className="flex flex-col gap-3">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-[14px] font-medium leading-[1.45]">
                      <span className="w-[22px] h-[22px] rounded-full bg-[#8F27FF] text-white flex items-center justify-center flex-shrink-0">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" className="w-3 h-3">
                          <path d="M5 12l4 4 10-10" />
                        </svg>
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Warning */}
              <div className="rounded-[14px] p-5 flex gap-3.5 items-start" style={{ background: "#FFFBEB", border: "1px solid #FDE68A" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 flex-shrink-0 mt-[1px]" style={{ color: "#D97706" }}>
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                  <line x1="12" y1="9" x2="12" y2="13"/>
                  <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
                <p className="text-[13.5px] leading-[1.55] m-0" style={{ color: "#92400E" }}>
                  <strong className="font-semibold" style={{ color: "#78350F" }}>ENISA evaluation takes 30–60 days.</strong> The UGE decision runs 20 working days, but the preliminary ENISA business review takes an average of 30 to 60 days. Nexa structures your full timeline to account for this window.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Row>
    </section>
  );
}
