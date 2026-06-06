import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const steps = [
  { num: "01", title: "Acquire qualifying property", desc: "Residential or commercial real estate eligible under residency criteria." },
  { num: "02", title: "Submit residency application", desc: "Verified ownership documentation reviewed through structured channels." },
  { num: "03", title: "Receive renewable permit", desc: "Issued for the principal applicant and eligible family members." },
  { num: "04", title: "Pathway to CBI unlocked", desc: "Upgrade to Turkish citizenship when investment thresholds are met." },
];

const suitedFor = [
  "Entrepreneurs seeking regional expansion",
  "Families planning international relocation",
  "Investors diversifying assets internationally",
  "Individuals seeking a secondary residence",
  "Remote business owners & digital entrepreneurs",
];

export default function Residency() {
  return (
    <section className="py-16 md:py-20 bg-[#faf9f5]">
      <Row>
        <Reveal variant="up" className="mb-10 md:mb-14">
          <h2 className="text-[28px] md:text-[38px] font-bold tracking-tight">
            Turkish Residency Through Property Investment
          </h2>
        </Reveal>

        <div className="flex flex-col lg:flex-row gap-10">

          {/* Left — steps */}
          <div className="flex-[1.4]">
            <Reveal variant="up" delay={100}>
              <p className="text-[16px] text-[#474747] leading-relaxed mb-8">
                Foreign nationals can obtain residency in Türkiye through qualifying property ownership. Residential or commercial property may provide eligibility for renewable residence permits — opening access to local services, education, healthcare and banking.
              </p>
            </Reveal>
            <ol className="flex flex-col gap-6">
              {steps.map((s, i) => (
                <Reveal key={s.num} variant="left" delay={i * 100 + 150}>
                  <li className="flex items-start gap-4">
                    <span
                      className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-lg text-[13px] font-bold text-[#8F27FF]"
                      style={{ background: "#FAF6FF", border: "1px solid rgba(143,39,255,0.15)" }}
                    >
                      {s.num}
                    </span>
                    <div>
                      <h5 className="font-semibold text-[16px] mb-1">{s.title}</h5>
                      <p className="text-[14px] text-gray-500 leading-relaxed">{s.desc}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          {/* Right — aside */}
          <Reveal variant="right" delay={200} className="flex-[0.8]">
            <aside
              className="rounded-2xl p-7 flex flex-col gap-5 self-start"
              style={{ border: "1px solid #E2E2E2", background: "#fff" }}
            >
              <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">Suited for</span>
              <ul className="flex flex-col gap-3">
                {suitedFor.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-[14px] text-[#333] transition-all duration-300 hover:translate-x-1"
                    style={{ transitionDelay: `${i * 40}ms` }}
                  >
                    <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#FAF6FF" }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="#8F27FF" strokeWidth={2} strokeLinecap="round" className="w-3.5 h-3.5">
                        <path d="M5 12l4 4 10-10" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[13px] text-gray-500 leading-relaxed border-t border-gray-100 pt-5">
                Property ownership also creates a direct pathway toward Turkish citizenship under the CBI Program when investment thresholds are met.
              </p>
            </aside>
          </Reveal>

        </div>
      </Row>
    </section>
  );
}
