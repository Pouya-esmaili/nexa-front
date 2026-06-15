import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const blocks = [
  {
    title: "Non-Negotiable Entry Requirements",
    items: [
      {
        strong: "Valid International Passport",
        text: "Minimum 6 months remaining validity at time of submission.",
      },
      {
        strong: "Antecedents Certificate",
        text: "Signed declaration confirming a clean global criminal record; no threat to Dutch public order.",
      },
      {
        strong: "TB Medical Screening",
        text: "Mandatory chest X-ray at a public health service (GGD) within 3 months of arrival, unless nationality is exempt.",
      },
      {
        strong: "Dutch Health Insurance",
        text: "Immediate enrollment in a compliant policy is required upon establishing residency.",
      },
    ],
  },
  {
    title: "Corporate & Sectoral Compliance",
    items: [
      {
        strong: "KvK Registration",
        text: "Immediate registration with the Dutch Chamber of Commerce (Kamer van Koophandel) to secure your corporate identifier.",
      },
      {
        strong: "Belastingdienst Alignment",
        text: "Registration with the Dutch Tax Authority for corporate income tax and VAT (BTW) obligations.",
      },
      {
        strong: "Professional Licensing",
        text: "Sector-specific operational licenses, certifications, or regulatory clearances required to trade legally in the Netherlands.",
      },
      {
        strong: "RVO Business Plan",
        text: "A localized, data-backed operational blueprint with signed LOIs, MOUs, or client contracts — no generic templates.",
      },
    ],
  },
];

export default function DocumentRequirements() {
  return (
    <section className="py-20 md:py-24" style={{ background: "#F7F6F9" }}>
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1] text-center mb-14">
            Document Requirements
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {blocks.map((block, bi) => (
            <Reveal key={bi} variant="up" delay={bi * 80}>
              <div
                className="bg-white rounded-[20px] p-7 sm:p-8 flex flex-col h-full"
                style={{ border: "1px solid #E2E2E2" }}
              >
                {/* Block title */}
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-1 h-4 rounded-sm flex-shrink-0" style={{ background: "#8F27FF" }} />
                  <span className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#8F27FF]">
                    {block.title}
                  </span>
                </div>

                <ul className="flex flex-col gap-0">
                  {block.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-[13.5px] text-[#474747] leading-[1.55] py-3"
                      style={{
                        borderBottom: i < block.items.length - 1 ? "1px solid #1a1a1f" : "none",
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[7px]"
                        style={{ background: "#8F27FF" }}
                      />
                      <div>
                        <strong className="block mb-0.5 text-black font-semibold">{item.strong}</strong>
                        {item.text}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Row>
    </section>
  );
}
