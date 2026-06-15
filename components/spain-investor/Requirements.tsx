import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const statutory = [
  {
    title: "Non-EU/EEA/Swiss Citizenship",
    desc: "The program applies exclusively to non-European citizens.",
  },
  {
    title: "Clean Criminal Record",
    desc: "Certified check from country of origin and any nation of residence over the past 5 years. US applicants: FBI check. Canadian applicants: RCMP fingerprint check.",
  },
  {
    title: "Private Health Insurance",
    desc: "Full-coverage policy authorized in Spain — zero copayments (sin copagos) and no waiting periods.",
  },
  {
    title: "Valid Passport",
    desc: "Minimum 1 year remaining validity and at least 2 blank pages.",
  },
];

const family = [
  {
    title: "Spouse / Civil Partner",
    desc: "Included in the main application — full work and residence rights.",
  },
  {
    title: "Dependent Children (Any Age)",
    desc: "Adult children must be unmarried and financially reliant on the primary applicant.",
  },
  {
    title: "Dependent Elderly Parents",
    desc: "Eligible for family reunification under the investor framework.",
  },
  {
    title: "Per Dependent Requirement",
    desc: "Each additional family member requires +100% IPREM (€7,200/year) in liquid savings or passive income.",
  },
];

function ReqBlock({ title, items }: { title: string; items: { title: string; desc: string }[] }) {
  return (
    <div
      className="bg-white rounded-[20px] p-9 flex flex-col w-full"
      style={{ border: "1px solid rgba(143,39,255,0.18)" }}
    >
      <div className="flex items-center gap-2 text-[13px] font-bold text-[#8F27FF] uppercase tracking-[0.08em] mb-5">
        <span className="w-1 h-4 rounded-sm bg-[#8F27FF] flex-shrink-0" />
        {title}
      </div>
      <ul className="flex flex-col">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-3 text-[13.5px] text-[#474747] leading-[1.55] py-3"
            style={{ borderBottom: i < items.length - 1 ? "1px solid #E2E2E2" : "none" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#8F27FF] flex-shrink-0 mt-[6px]" />
            <div>
              <strong className="text-black font-semibold block mb-0.5">{item.title}</strong>
              {item.desc}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Requirements() {
  return (
    <section className="py-20 md:py-24" style={{ background: "#FAF6FF" }}>
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1] text-center mb-14">
            Core Legal &amp; Personal Requirements
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
          <Reveal variant="left" delay={60} className="flex">
            <ReqBlock title="Statutory Checklist" items={statutory} />
          </Reveal>
          <Reveal variant="right" delay={60} className="flex">
            <ReqBlock title="Family Inclusion" items={family} />
          </Reveal>
        </div>
      </Row>
    </section>
  );
}
