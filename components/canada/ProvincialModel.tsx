import Row from "@/components/global/Row";
import Reveal from "@/components/global/LazyReveal";

const steps = [
  {
    num: "1",
    title: "Submit Business Concept",
    desc: "Submit an Expression of Interest (EOI) to your target province. You're scored on investment capacity, experience, and sector fit.",
  },
  {
    num: "2",
    title: "Performance Agreement",
    desc: "If invited, sign a performance agreement outlining your investment, job creation, and operational commitments.",
  },
  {
    num: "3",
    title: "Work Permit & Entry",
    desc: "Enter Canada on a province-backed work permit and begin establishing your business.",
  },
  {
    num: "4",
    title: "Operate & Deliver",
    desc: "Run the business actively for 12–20 months, meeting capital, hiring, and milestone requirements.",
  },
  {
    num: "5",
    title: "Provincial Nomination → PR",
    desc: "Upon meeting all milestones, the province nominates you. Federal PR processing follows.",
  },
];

export default function ProvincialModel() {
  return (
    <section className="py-20 md:py-24 bg-[#F7F6F9]">
      <Row>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Lead */}
          <Reveal variant="left">
            <div className="md:sticky md:top-24">
              <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] mb-6">
                The Provincial Model
              </h2>
              <blockquote className="text-[21px] font-medium italic leading-[1.5] tracking-[-0.015em] pl-6 mb-4"
                style={{ borderLeft: "3px solid #8F27FF" }}>
                "This model rewards <span className="text-[#8F27FF] font-semibold">execution</span> — not just investment."
              </blockquote>
              <p className="text-[15px] text-[#929292] leading-[1.7]">
                Canada's entrepreneur pathways are performance-based. Each province sets its own investment thresholds, sector priorities, and operating requirements — rewarding entrepreneurs who build real businesses, not just deploy capital.
              </p>
            </div>
          </Reveal>

          {/* Steps */}
          <div className="relative pl-14">
            {/* Vertical line */}
            <div className="absolute top-5 bottom-5 left-5 w-[2px] rounded-full"
              style={{ background: "linear-gradient(180deg, #8F27FF 0%, rgba(143,39,255,0.15) 100%)" }} />

            {steps.map((s, i) => (
              <Reveal key={s.num} variant="up" delay={i * 100 + 100}>
                <div
                  className="relative pb-8 last:pb-0 group transition-transform duration-250 hover:translate-x-1"
                >
                  {/* Circle */}
                  <div
                    className="absolute -left-14 top-0 w-[42px] h-[42px] rounded-full flex items-center justify-center text-[14px] font-bold text-[#8F27FF] bg-white transition-all duration-300 group-hover:bg-[#8F27FF] group-hover:text-white"
                    style={{
                      border: "2px solid #8F27FF",
                      boxShadow: "0 0 0 5px #FAF6FF, 0 4px 12px rgba(143,39,255,0.12)",
                    }}
                  >
                    {s.num}
                  </div>
                  <h4 className="text-[16px] font-semibold tracking-[-0.015em] pt-2 mb-1">{s.title}</h4>
                  <p className="text-[14px] text-[#929292] leading-[1.6]">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Row>
    </section>
  );
}
