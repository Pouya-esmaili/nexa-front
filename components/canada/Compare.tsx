import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const diyList = [
  "Generic business plans rarely match provincial priorities",
  "Manual tracking of constantly-changing quotas & rules",
  "Higher refusal risk from documentation errors",
  "Limited insight into nomination agreement nuances",
  "Longer timelines, with frequent restarts",
  "Unclear performance-milestone roadmap",
];

const nexaList = [
  "Customized plans aligned to each province's criteria",
  "Real-time monitoring of program updates & quotas",
  "Documentation precision built on 7+ years of practice",
  "Full navigation of nomination & performance agreements",
  "Significantly shorter timelines & higher success rates",
  "Clear milestone-driven roadmap to PR",
];

export default function Compare() {
  return (
    <section className="py-20 md:py-24 bg-[#F7F6F9]">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center mb-12">
            Why Working with an Expert Matters
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1100px] mx-auto">
          {/* DIY */}
          <Reveal variant="left" delay={100}>
            <div className="bg-white rounded-[28px] p-10 border border-[#E2E2E2]">
              <h3 className="text-[26px] font-bold tracking-[-0.02em] mb-6">Going It Alone</h3>
              <ul className="space-y-0">
                {diyList.map((item) => (
                  <li key={item} className="relative pl-8 py-3 text-[14.5px] leading-[1.5] border-b border-[#E2E2E2] last:border-b-0">
                    <span className="absolute left-0 top-3 w-[22px] h-[22px] rounded-full bg-[#F4F4F4] text-[#474747] flex items-center justify-center text-[12px] font-bold">
                      ✕
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Nexa */}
          <Reveal variant="right" delay={100}>
            <div className="rounded-[28px] p-10 relative bg-[#8F27FF]">
              {/* Recommended badge */}
              <div className="absolute top-6 right-6 text-[11px] font-bold tracking-[0.1em] px-3 py-1 rounded-full"
                style={{ background: "rgba(255,255,255,0.15)", color: "white", border: "1px solid rgba(255,255,255,0.25)" }}>
                RECOMMENDED
              </div>
              <h3 className="text-[26px] font-bold tracking-[-0.02em] mb-6 text-white">With Nexa</h3>
              <ul className="space-y-0">
                {nexaList.map((item) => (
                  <li key={item} className="relative pl-8 py-3 text-[14.5px] leading-[1.5] text-white"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.15)" }}>
                    <span className="absolute left-0 top-3 w-[22px] h-[22px] rounded-full bg-white flex items-center justify-center text-[12px] font-bold text-[#8F27FF]">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Row>
    </section>
  );
}
