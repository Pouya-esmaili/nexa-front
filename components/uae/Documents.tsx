import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const docGroups = [
  {
    title: "Asset & Corporate Documents",
    items: [
      { strong: "DLD Title Deed", text: "Proving unencumbered asset value of AED 2,000,000+." },
      { strong: "Audited Balance Sheets / Fund Letters", text: "For public investment channels." },
      { strong: "Trade License & Articles of Incorporation", text: "For corporate capital channel." },
    ],
  },
  {
    title: "Admissibility Requirements",
    items: [
      { strong: "Medical Screening", text: "Blood tests & chest X-ray inside UAE for all adults." },
      { strong: "Police Clearance Certificate (PCC)", text: "From country of origin." },
      { strong: "UAE-Compliant Health Insurance", text: "Mandatory for residency activation." },
    ],
  },
];

const tableRows = [
  {
    vector: "Real Estate (Mortgaged)",
    sub: "NOC from financing bank required",
    threshold: "AED 2,000,000",
    thresholdSub: "Paid equity",
    tag: "6 Months",
    tagColor: "purple",
  },
  {
    vector: "Public Investments",
    sub: "Fund deposit channel",
    threshold: "AED 2,000,000",
    thresholdSub: "Fixed deposit",
    tag: "2-Year Lock-in",
    tagColor: "yellow",
  },
  {
    vector: "Corporate Establishments",
    sub: "Paid-up share capital",
    threshold: "AED 2,000,000",
    thresholdSub: "Audited corporate",
    tag: "6 Months",
    tagColor: "purple",
  },
  {
    vector: "Dependent Sponsorship",
    sub: "Variable liquidity buffers",
    threshold: "Variable",
    thresholdSub: "Disposable income path",
    tag: "3 Months",
    tagColor: "yellow",
  },
];

export default function Documents() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1] text-center mb-14">
            Required Documents &amp; Financial Compliance
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Left — doc groups */}
          <Reveal variant="left" delay={60}>
            <div className="flex flex-col gap-3">
              {docGroups.map((group, gi) => (
                <div
                  key={gi}
                  className="rounded-[14px] p-7 sm:p-8"
                  style={{ background: "#F7F6F9", border: "1px solid #E2E2E2" }}
                >
                  <div className="text-[13px] font-bold text-[#8F27FF] uppercase tracking-[0.08em] mb-4">
                    {group.title}
                  </div>
                  <ul className="flex flex-col gap-0">
                    {group.items.map((item, ii) => (
                      <li
                        key={ii}
                        className="flex items-start gap-3 text-[13.5px] text-[#474747] leading-[1.55] py-2.5"
                        style={{
                          borderBottom: ii < group.items.length - 1 ? "1px solid #E2E2E2" : "none",
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[7px]"
                          style={{ background: "#8F27FF" }}
                        />
                        <span>
                          <strong className="text-black font-semibold">{item.strong}</strong>{" "}
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right — table */}
          <Reveal variant="right" delay={60}>
            <div>
              <div className="rounded-[14px] overflow-hidden" style={{ border: "1px solid #E2E2E2" }}>
                <table className="w-full border-collapse text-[13px]">
                  <thead>
                    <tr style={{ background: "#000000" }}>
                      <th className="py-3 px-4 text-left text-[12px] font-semibold text-white uppercase tracking-[0.06em]">
                        Investment Vector
                      </th>
                      <th className="py-3 px-4 text-left text-[12px] font-semibold text-white uppercase tracking-[0.06em]">
                        Bank Balance Threshold
                      </th>
                      <th className="py-3 px-4 text-left text-[12px] font-semibold text-white uppercase tracking-[0.06em]">
                        Statement History
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableRows.map((row, i) => (
                      <tr key={i} style={{ background: i % 2 === 1 ? "#F7F6F9" : "white" }}>
                        <td
                          className="py-3 px-4 text-[#474747] leading-[1.5] align-top"
                          style={{ borderBottom: i < tableRows.length - 1 ? "1px solid #E2E2E2" : "none" }}
                        >
                          <strong className="text-black font-semibold block">{row.vector}</strong>
                          <span className="text-[12px] text-[#929292]">{row.sub}</span>
                        </td>
                        <td
                          className="py-3 px-4 text-[#474747] leading-[1.5] align-top"
                          style={{ borderBottom: i < tableRows.length - 1 ? "1px solid #E2E2E2" : "none" }}
                        >
                          <strong className="text-black font-semibold block">{row.threshold}</strong>
                          <span className="text-[12px] text-[#929292]">{row.thresholdSub}</span>
                        </td>
                        <td
                          className="py-3 px-4 align-top"
                          style={{ borderBottom: i < tableRows.length - 1 ? "1px solid #E2E2E2" : "none" }}
                        >
                          <span
                            className="inline-block text-[11px] font-bold px-2 py-0.5 rounded-full"
                            style={
                              row.tagColor === "purple"
                                ? { background: "#FAF6FF", color: "#8F27FF" }
                                : { background: "#FFFBE6", color: "#7A6800" }
                            }
                          >
                            {row.tag}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div
                className="mt-3.5 p-4 sm:p-5 rounded-lg text-[13px] text-[#929292] leading-[1.6]"
                style={{ background: "#F7F6F9", border: "1px solid #E2E2E2" }}
              >
                UAE financial institutions (ADCB, Emirates NBD) must issue formal, standardized letters
                verifying that capital allocation meets non-leverage constraints before the file is routed
                for final ICP vetting.
              </div>
            </div>
          </Reveal>
        </div>
      </Row>
    </section>
  );
}
