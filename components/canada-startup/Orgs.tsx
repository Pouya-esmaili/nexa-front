import Row from "@/components/global/Row";
import Reveal from "@/components/global/LazyReveal";

const orgs = [
  {
    type: "Venture Capital Fund",
    typeColor: "text-[#8F27FF]",
    topBar: "bg-[#8F27FF]",
    amount: "$200K",
    amountColor: "text-black",
    floor: "CAD Minimum Investment",
    title: "Designated VC Fund",
    desc: <>Must secure a legally binding, full <strong>equity investment commitment</strong> from one or more approved Canadian VC funds listed on the official IRCC designated organization registry.</>,
  },
  {
    type: "Angel Investor Group",
    typeColor: "text-[#10B981]",
    topBar: "bg-[#10B981]",
    amount: "$75K",
    amountColor: "text-black",
    floor: "CAD Minimum Investment",
    title: "Designated Angel Network",
    desc: "Must secure a minimum capital allocation vetted and committed by an approved Canadian angel investor group or network through their formal evaluation process.",
  },
  {
    type: "Business Incubator",
    typeColor: "text-[#7A6800]",
    topBar: "bg-[#FFE600]",
    amount: "$0",
    amountColor: "text-[#7A6800]",
    floor: "No Financial Floor Required",
    title: "Designated Incubator Program",
    desc: <>No direct cash injection required. Instead, the founder must be <strong>formally accepted into an elite, structured Canadian incubator</strong> acceleration curriculum — the acceptance itself is the qualifying credential.</>,
  },
];

export default function Orgs() {
  return (
    <section className="py-20 md:py-24 bg-[#F7F6F9]">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center mb-14">
            Designated Organization Types & Capital Floors
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {orgs.map((o, i) => (
            <Reveal key={o.type} variant="up" delay={i * 80}>
              <div className="bg-white border border-[#E2E2E2] rounded-[20px] flex flex-col gap-4 overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.07)]">
                <div className={`h-[3px] ${o.topBar}`} />
                <div className="px-8 pb-8 flex flex-col gap-4">
                  <div className={`text-[11px] font-bold uppercase tracking-[0.1em] ${o.typeColor}`}>{o.type}</div>
                  <div className={`text-[44px] font-extrabold tracking-[-0.04em] leading-none ${o.amountColor}`}>{o.amount}</div>
                  <div className="text-[12px] font-semibold text-[#929292] uppercase tracking-[0.06em]">{o.floor}</div>
                  <h4 className="text-[15px] font-semibold text-black mt-1">{o.title}</h4>
                  <p className="text-[13px] text-[#929292] leading-[1.6] m-0 [&_strong]:text-black [&_strong]:font-semibold">{o.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal variant="up" delay={80}>
          <div className="rounded-[14px] px-6 py-[18px] text-[13.5px] text-[#8F27FF] font-medium"
            style={{ background: "#FAF6FF", border: "1px solid rgba(143,39,255,0.18)" }}>
            Each organization type issues an official <strong className="font-bold">Letter of Support</strong> to the founder group and transmits a matching <strong className="font-bold">Commitment Certificate directly to IRCC</strong>. Both documents are mandatory for filing.
          </div>
        </Reveal>
      </Row>
    </section>
  );
}
