import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const reqs = [
  {
    num: "01",
    title: "Individual Voting Rights Minimum",
    desc: <>Every individual applicant on the team must personally hold a minimum of <strong>10% of the total voting rights</strong> in the corporation at the time of application.</>,
  },
  {
    num: "02",
    title: "Unified Control Threshold",
    desc: <>The applicants and their designated supporting organization must <strong>jointly hold more than 50%</strong> of the total corporate voting rights. Control must be demonstrable at filing.</>,
  },
  {
    num: "03",
    title: "Simultaneous Group Submission",
    desc: <>If the business is launched by a team, <strong>every co-founder must upload and submit their PR file simultaneously</strong>. IRCC will not begin processing any individual file until all members of the group have submitted. A delay by a single co-founder risks the entire corporate submission.</>,
  },
  {
    num: "04",
    title: "Onshore Active Management Required",
    desc: <>The essential parts of business operations must take place <strong>within Canada</strong>, and founders must provide active, ongoing management from inside Canadian territory to secure final PR approval.</>,
  },
  {
    num: "05",
    title: "Geographic Restriction — Quebec Excluded",
    desc: <>The federal Start-Up Visa allows corporate setup <strong>anywhere in Canada except Quebec</strong>, which administers its own distinct business immigration programs.</>,
  },
];

const benefits = [
  "Direct permanent residency — not a temporary visa",
  "PR status survives startup failure — no clawback",
  "Up to 5 co-founders under one venture",
  "Full family included with PR status",
  "Citizenship eligible after 3 years physical presence",
  "Dual citizenship fully recognized by Canada",
];

export default function Eligibility() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center mb-14">
            Corporate Ownership & Filing Rules
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

          {/* Left — main requirements */}
          <Reveal variant="up">
            <div className="bg-[#F7F6F9] border border-[#E2E2E2] rounded-[20px] p-11 flex flex-col">
              <p className="text-[16px] text-[#474747] leading-[1.65] mb-8 pb-8 border-b border-[#E2E2E2] [&_strong]:text-black [&_strong]:font-semibold">
                Beyond the Letter of Support, your corporate structure and group filing must satisfy strict statutory thresholds enforced by IRCC at the time of PR application submission.
              </p>
              {reqs.map((r, i) => (
                <div key={r.num}
                  className={`grid grid-cols-[48px_1fr] gap-5 items-start py-5 transition-all duration-200 hover:pl-1.5 ${i < reqs.length - 1 ? "border-b border-[#E2E2E2]" : ""}`}>
                  <div className="w-12 h-8 bg-[#FAF6FF] rounded-[8px] flex items-center justify-center text-[13px] font-bold text-[#8F27FF] flex-shrink-0">
                    {r.num}
                  </div>
                  <div>
                    <h4 className="text-[16px] font-semibold text-black mb-1.5">{r.title}</h4>
                    <p className="text-[13.5px] text-[#929292] leading-[1.6] m-0 [&_strong]:text-black [&_strong]:font-semibold">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right — aside sticky */}
          <Reveal variant="up" delay={80}>
            <div className="flex flex-col gap-4 md:sticky md:top-[100px]">

              {/* Benefits card */}
              <div className="rounded-[20px] p-8" style={{ background: "#FAF6FF", border: "1px solid rgba(143,39,255,0.18)" }}>
                <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#8F27FF] uppercase tracking-[0.1em] px-3 py-1.5 bg-white rounded-full mb-5"
                  style={{ border: "1px solid rgba(143,39,255,0.18)" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M5 12l4 4 10-10"/></svg>
                  Program Benefits
                </div>
                <h3 className="text-[17px] font-semibold text-black mb-4">What PR status grants you</h3>
                <ul className="flex flex-col gap-3">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-[14px] font-medium text-black leading-[1.45]">
                      <span className="w-[22px] h-[22px] rounded-full bg-[#8F27FF] text-white flex items-center justify-center flex-shrink-0">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" className="w-3 h-3"><path d="M5 12l4 4 10-10"/></svg>
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Warning */}
              <div className="rounded-[14px] p-5 flex gap-3.5 items-start" style={{ background: "#FFFBEB", border: "1px solid #FDE68A" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#D97706] flex-shrink-0 mt-0.5">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                  <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
                <p className="text-[13.5px] text-[#92400E] leading-[1.55] m-0">
                  <strong className="text-[#78350F] font-semibold">Program currently paused.</strong> New applications are closed as of January 1, 2026. Only founders with a valid 2025 Commitment Certificate can file — with a hard deadline of <strong className="text-[#78350F] font-semibold">June 30, 2026</strong>.
                </p>
              </div>

            </div>
          </Reveal>

        </div>
      </Row>
    </section>
  );
}
