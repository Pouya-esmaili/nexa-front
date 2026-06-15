import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const reqs = [
  {
    num: "A",
    title: "Minimum Capital Deployment",
    desc: <>A baseline investment of <strong className="text-black font-semibold">€300,000</strong> in tangible or intangible fixed assets within a qualifying French commercial, industrial, artisanal, or agricultural enterprise.</>,
  },
  {
    num: "B",
    title: "Job Creation or Preservation Commitment",
    desc: <>The investor must explicitly commit to <strong className="text-black font-semibold">creating or maintaining permanent jobs</strong> within 4 years following the initial capital deployment.</>,
  },
  {
    num: "C",
    title: "Active Corporate Position",
    desc: <>The applicant must either <strong className="text-black font-semibold">manage the enterprise personally</strong> or hold a director / legal representative status within the recipient entity — passive shareholders do not qualify.</>,
  },
  {
    num: "D",
    title: "Personal Financial Liquidity",
    desc: <>Separate from the €300K investment capital, personal resources must equal or exceed the French minimum wage (SMIC): <strong className="text-black font-semibold">€21,621.60 gross per year</strong> in accessible personal bank accounts.</>,
  },
];

const rights = [
  "4-year Talent Passport card, renewable",
  "Full work authorization — no separate permit",
  "Spouse receives Talent (Family) permit with full work rights",
  "Minor children included without separate docs",
  "No language requirement at initial stage",
  "Schengen travel across 29 countries",
];

const CheckIcon = () => (
  <span
    className="w-[22px] h-[22px] rounded-full flex items-center justify-center flex-shrink-0"
    style={{ background: "#8F27FF" }}
  >
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
      <path d="M5 12l4 4 10-10" />
    </svg>
  </span>
);

export default function Eligibility() {
  return (
    <section className="py-20 md:py-24" style={{ background: "#F7F6F9" }}>
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1] text-center mb-14">
            Core Eligibility Requirements
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <Reveal variant="left">
            <div
              className="bg-white rounded-[20px] p-8 md:p-11"
              style={{ border: "1px solid #E2E2E2" }}
            >
              <p className="text-[15px] text-[#474747] leading-[1.65] mb-7 pb-7" style={{ borderBottom: "1px solid #E2E2E2" }}>
                To qualify under the <strong className="text-black font-semibold">Talent – Economic Investor</strong> stream, your application must satisfy three statutory conditions — beyond the €300K capital deployment.
              </p>

              {reqs.slice(0, 3).map((r, i) => (
                <div
                  key={i}
                  className="grid gap-[18px] items-start py-4 transition-all duration-200 hover:pl-1.5"
                  style={{
                    gridTemplateColumns: "44px 1fr",
                    borderBottom: "1px solid #E2E2E2",
                  }}
                >
                  <div
                    className="w-11 h-[30px] rounded-[8px] flex items-center justify-center text-[12px] font-bold flex-shrink-0"
                    style={{ background: "#FAF6FF", color: "#8F27FF" }}
                  >
                    {r.num}
                  </div>
                  <div>
                    <h4 className="text-[15px] font-semibold text-black mb-1">{r.title}</h4>
                    <p className="text-[13px] text-[#929292] leading-[1.6] m-0">{r.desc}</p>
                  </div>
                </div>
              ))}

              <div className="text-[12px] font-bold text-[#929292] uppercase tracking-[0.1em] mt-5 mb-3.5">
                Personal Financial Safeguards (SMIC)
              </div>

              <div
                className="grid gap-[18px] items-start py-4"
                style={{ gridTemplateColumns: "44px 1fr" }}
              >
                <div
                  className="w-11 h-[30px] rounded-[8px] flex items-center justify-center text-[12px] font-bold flex-shrink-0"
                  style={{ background: "#FAF6FF", color: "#8F27FF" }}
                >
                  D
                </div>
                <div>
                  <h4 className="text-[15px] font-semibold text-black mb-1">{reqs[3].title}</h4>
                  <p className="text-[13px] text-[#929292] leading-[1.6] m-0">{reqs[3].desc}</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal variant="right">
            <div className="flex flex-col gap-4 md:sticky md:top-[100px]">
              <div
                className="rounded-[20px] p-8"
                style={{ background: "#FAF6FF", border: "1px solid rgba(143,39,255,0.18)" }}
              >
                <div
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#8F27FF] uppercase tracking-[0.1em] px-3 py-1.5 bg-white rounded-full mb-5"
                  style={{ border: "1px solid rgba(143,39,255,0.18)" }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                  What You Get
                </div>
                <h3 className="text-[17px] font-semibold text-black mb-4">Key permit rights</h3>
                <ul className="flex flex-col gap-3">
                  {rights.map((r, i) => (
                    <li key={i} className="flex items-center gap-3 text-[14px] font-medium text-black leading-[1.45]">
                      <CheckIcon />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="rounded-[14px] p-6"
                style={{ background: "white", border: "1.5px solid #E2E2E2" }}
              >
                <div className="text-[11px] font-bold text-[#929292] uppercase tracking-[0.08em] mb-2">
                  Personal Liquidity Minimum
                </div>
                <div
                  className="font-extrabold tabular-nums leading-none mb-2"
                  style={{ fontSize: "32px", color: "#8F27FF", letterSpacing: "-0.04em" }}
                >
                  €21,621
                </div>
                <p className="text-[13px] text-[#929292] leading-[1.55] m-0">
                  Gross annual SMIC baseline — required in accessible personal bank accounts, separate from the €300K investment capital.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Row>
    </section>
  );
}
