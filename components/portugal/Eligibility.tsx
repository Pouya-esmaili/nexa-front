import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const requirements = [
  {
    num: "A",
    title: "Corporate Validation & Capitalization",
    desc: "You must have already incorporated a Portuguese business entity (Lda) or present a robust plan for imminent launch. The business must be properly capitalized relative to its sector. While there is no statutory minimum, a capital injection of €5,000–€10,000+ establishes baseline commercial viability.",
  },
  {
    num: "B",
    title: "Local Economic Impact",
    desc: "The business plan must demonstrate realistic potential for local job creation, scalability, market differentiation, and clear intent to anchor operational infrastructure — leasing a local office, unit, or commercial facility.",
  },
  {
    num: "C",
    title: "Founder Credentials",
    desc: "Immigration officials evaluate your professional profile, academic credentials, and managerial background to confirm you possess the direct technical capability and leadership experience required to steer the entity to profitability.",
  },
];

const benefits = [
  "2-year initial residence card (renewable for 3 years)",
  "Any commercial business model permitted",
  "Secondary employment & freelance contracts allowed",
  "Full family included with immediate work rights",
  "Multiple co-founders under same entity permitted",
  "Dual citizenship fully permitted at naturalization",
];

export default function Eligibility() {
  return (
    <section className="py-20 md:py-24 bg-[#F7F6F9]">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center mb-12">
            Core Eligibility &amp; Evaluation Criteria
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Main */}
          <Reveal variant="left">
            <div className="bg-white border border-[#E2E2E2] rounded-[20px] p-11 flex flex-col">
              <p className="text-[16px] text-[#474747] leading-[1.65] mb-8 pb-8" style={{ borderBottom: "1px solid #E2E2E2" }}>
                Your business model must be vetted by Portuguese authorities against the lenses of <strong className="text-black font-semibold">economic, social, scientific, or cultural utility</strong>. The evaluation covers three pillars.
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
                  <strong className="font-semibold" style={{ color: "#78350F" }}>Portuguese bank account preferred.</strong> Authorities heavily favor liquid funds held inside a domestic Portuguese bank. Nexa secures your NIF and opens your Portuguese account remotely before file submission.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Row>
    </section>
  );
}
