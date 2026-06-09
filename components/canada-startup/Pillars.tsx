import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const pillars = [
  {
    num: "1",
    title: "Qualifying Business Structure",
    desc: <>Up to <strong>5 co-founders</strong> can apply under one venture. Each must hold at least <strong>10% voting rights</strong>. Together with their designated organization, they must jointly control <strong>more than 50%</strong> of total corporate voting rights. Business operations and active management must take place <strong>inside Canada</strong>.</>,
  },
  {
    num: "2",
    title: "Letter of Support from a Designated Organization",
    desc: <>A formal endorsement letter from an <strong>IRCC-approved Venture Capital fund, Angel Investor Group, or Business Incubator</strong> is mandatory. The capital floor and structure vary fundamentally by organization type. No Letter of Support means no application.</>,
  },
  {
    num: "3",
    title: "Language Proficiency — CLB 5",
    desc: <>A minimum score of <strong>CLB 5</strong> across all four competencies (Listening, Reading, Writing, Speaking) is mandatory. Accepted tests: IELTS General Training, CELPIP General, TEF, or TCF. Results must be <strong>less than 2 years old</strong> at submission. <strong>Zero waivers exist for this rule.</strong></>,
  },
];

export default function Pillars() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center mb-14">
            Core Program Requirements
          </h2>
        </Reveal>

        <Reveal variant="up" delay={60}>
          <div className="rounded-[20px] overflow-hidden border border-[#E2E2E2]">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {pillars.map((p, i) => (
                <div
                  key={p.num}
                  className="p-9 flex flex-col gap-4 transition-colors duration-200 hover:bg-[#F7F6F9]"
                  style={{
                    borderRight: i < 2 ? "1px solid #E2E2E2" : undefined,
                    borderBottom: i < pillars.length ? undefined : "1px solid #E2E2E2",
                  }}
                >
                  <div className="w-10 h-10 rounded-full bg-[#FAF6FF] border-[1.5px] border-[rgba(143,39,255,0.18)] flex items-center justify-center text-[14px] font-bold text-[#8F27FF] flex-shrink-0">
                    {p.num}
                  </div>
                  <h3 className="text-[17px] font-semibold text-black tracking-[-0.015em]">{p.title}</h3>
                  <p className="text-[13.5px] text-[#929292] leading-[1.65] m-0 [&_strong]:text-black [&_strong]:font-semibold">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Row>
    </section>
  );
}
