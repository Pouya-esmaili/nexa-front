import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const requirements = [
  {
    num: "A",
    title: "Collaboration with a Recognized Facilitator",
    desc: 'You must enter into a formal, signed agreement with a <strong>government-approved startup facilitator</strong> listed on the official RVO register. The facilitator provides mentorship and operational support but cannot hold a majority stake in your firm or be a close relative.',
  },
  {
    num: "B",
    title: "Proof of Innovation",
    desc: 'Your product, service, or methodology must satisfy at least one criterion: <strong>new to the Dutch market</strong>, applies <strong>novel technology</strong>, or uses a <strong>unique organizational setup</strong>. Evaluated directly by the RVO against your submitted business plan.',
  },
  {
    num: "C",
    title: "Active Entrepreneurial Role",
    desc: 'The visa is built for operational founders only. You cannot be a passive shareholder or silent partner. Your business plan must prove an active executive role — CEO, CTO, or lead developer — responsible for daily execution and operational scaling.',
  },
  {
    num: "D",
    title: "Comprehensive Business Plan",
    desc: 'A full 12-month step plan covering organizational structure, innovation analysis, operational milestones (MVP, market entry), financial projections, startup budget, liquidity forecast, and capital source mapping.',
  },
  {
    num: "E",
    title: "Sufficient Personal Financial Runway",
    desc: '<strong>Solo founder:</strong> minimum <strong>€21,000</strong> in personal liquid funds. <strong>With family:</strong> minimum <strong>€30,000</strong>. Acceptable proofs: certified bank statements, Dutch notary escrow, VC funding letters, or facilitator financial sponsorship.',
  },
];

const benefits = [
  "1-year residence permit to build your startup",
  "Side employment permitted alongside your venture",
  "Up to 3 co-founders under one project",
  "Spouse receives matching residency permit",
  "Spouse has full, unrestricted Dutch work rights",
  "Permit remains valid until expiry if startup closes",
];

export default function Eligibility() {
  return (
    <section className="py-16 md:py-20 bg-[#F7F6F9]">
      <Row>
        <Reveal variant="up" className="text-center mb-10 md:mb-14">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em]">
            Eligibility Requirements
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Main */}
          <Reveal variant="left" delay={100}>
            <div
              className="bg-white rounded-[20px] p-8 md:p-11 flex flex-col gap-0"
              style={{ border: "1px solid #E2E2E2" }}
            >
              <p className="text-[15px] text-[#474747] leading-[1.65] mb-8 pb-8 border-b border-gray-200">
                To qualify for the{" "}
                <strong className="text-black font-semibold">Dutch Startup Residence Permit</strong>,
                your application must meet five specific statutory conditions enforced by the{" "}
                <strong className="text-black font-semibold">IND</strong> and evaluated by the{" "}
                <strong className="text-black font-semibold">Netherlands Enterprise Agency (RVO)</strong>.
              </p>
              {requirements.map((r, i) => (
                <div
                  key={r.num}
                  className="grid gap-5 py-5 border-b border-gray-200 last:border-b-0 transition-all duration-300 hover:pl-1.5"
                  style={{ gridTemplateColumns: "48px 1fr", transitionDelay: `${i * 40}ms` }}
                >
                  <div className="w-12 h-8 rounded-[8px] bg-[#FAF6FF] flex items-center justify-center text-[13px] font-bold text-[#8F27FF] flex-shrink-0">
                    {r.num}
                  </div>
                  <div>
                    <h4 className="text-[16px] font-semibold tracking-[-0.015em] mb-1.5">{r.title}</h4>
                    <p
                      className="text-[13.5px] text-[#929292] leading-[1.6] m-0 [&_strong]:text-black [&_strong]:font-semibold"
                      dangerouslySetInnerHTML={{ __html: r.desc }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Aside */}
          <div className="flex flex-col gap-4 md:sticky md:top-24">
            <Reveal variant="right" delay={150}>
              <div
                className="rounded-[20px] p-8"
                style={{ background: "#FAF6FF", border: "1px solid rgba(143,39,255,0.18)" }}
              >
                <div
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#8F27FF] uppercase tracking-widest px-3 py-1.5 rounded-full mb-5"
                  style={{ background: "white", border: "1px solid rgba(143,39,255,0.18)" }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                  Key Benefits
                </div>
                <h3 className="text-[17px] font-semibold mb-4">What the permit grants you</h3>
                <ul className="flex flex-col gap-3">
                  {benefits.map((b, i) => (
                    <li
                      key={b}
                      className="flex items-center gap-3 text-[14px] font-medium leading-snug transition-transform duration-200 hover:translate-x-1"
                      style={{ transitionDelay: `${i * 30}ms` }}
                    >
                      <span className="w-[22px] h-[22px] rounded-full bg-[#8F27FF] text-white flex items-center justify-center flex-shrink-0">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-3 h-3">
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
              <div
                className="rounded-[14px] p-5 flex gap-3.5 items-start"
                style={{ background: "#FFFBEB", border: "1px solid #FDE68A" }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#D97706] flex-shrink-0 mt-0.5">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                <p className="text-[13.5px] text-[#92400E] leading-[1.55] m-0">
                  <strong className="text-[#78350F] font-semibold">Facilitator is mandatory.</strong>{" "}
                  You cannot apply independently. Your RVO-approved facilitator is the anchor of the entire application — their endorsement triggers the IND review process.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Row>
    </section>
  );
}
