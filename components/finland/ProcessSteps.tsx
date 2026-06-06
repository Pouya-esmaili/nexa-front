import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const steps = [
  {
    num: "1",
    meta: "Step 1 · ~1 Month",
    title: "Secure Business Finland Approval",
    desc: "Submit your detailed business plan, financial projections, and CVs to Business Finland. Upon approval, they issue an official Eligibility Statement valid for 4 months.",
  },
  {
    num: "2",
    meta: "Step 2 · Enter Finland Portal",
    title: "Submit the Visa Application",
    desc: "With your Eligibility Statement ready, each team member and family submit individual residence permit applications online, uploading bank statements showing required living capital.",
  },
  {
    num: "3",
    meta: "Step 3 · Within Days",
    title: "Identity Verification",
    desc: "Visit the nearest Finnish Embassy, Consulate, or VFS Global center. Biometrics are scanned, your passport verified, and all documents validated in person.",
  },
  {
    num: "4",
    meta: "Step 4 · 14-Day Fast Track",
    title: "Decision & Move to Finland",
    desc: "Using Finland's 14-day Fast-Track service, residency cards and digital D-Visas are processed at record speed. Move to Finland, incorporate your company, and begin operations.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-16 md:py-20 bg-[#F7F6F9]" id="process">
      <Row>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Lead — sticky */}
          <Reveal variant="left" className="lg:sticky lg:top-24">
            <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] mb-5">
              The Step-by-Step Roadmap
            </h2>
            <blockquote
              className="text-[18px] font-medium italic leading-[1.5] tracking-[-0.015em] py-5 pl-6 mb-4"
              style={{ borderLeft: "3px solid #8F27FF", color: "#000" }}
            >
              &ldquo;You cannot skip steps — the transition moves through a clear, legally ordered sequence.&rdquo;
            </blockquote>
            <p className="text-[14.5px] text-gray-500 leading-[1.7]">
              From your first Business Finland submission to landing in Helsinki, the process is structured, transparent, and achievable in 2–3 months when properly prepared.
            </p>
          </Reveal>

          {/* Steps timeline */}
          <div className="relative pl-14">
            {/* Vertical line */}
            <div
              className="absolute top-[22px] bottom-[22px] left-5 w-0.5 rounded-sm"
              style={{ background: "linear-gradient(180deg, #8F27FF 0%, rgba(143,39,255,0.15) 100%)" }}
            />

            <div className="flex flex-col gap-0">
              {steps.map((s, i) => (
                <Reveal key={s.num} variant="up" delay={i * 100 + 100}>
                  <div className={`relative group transition-transform duration-300 hover:translate-x-1 ${i < steps.length - 1 ? "pb-8" : ""}`}>
                    {/* Circle number */}
                    <div
                      className="absolute -left-14 top-0 w-[42px] h-[42px] rounded-full bg-white border-2 border-[#8F27FF] flex items-center justify-center text-[13px] font-bold text-[#8F27FF] z-10 transition-all duration-300 group-hover:bg-[#8F27FF] group-hover:text-white group-hover:scale-110"
                      style={{ boxShadow: "0 0 0 5px #FAF6FF, 0 4px 12px rgba(143,39,255,0.12)" }}
                    >
                      {s.num}
                    </div>
                    {/* Card */}
                    <div className="bg-white border border-gray-200 rounded-[14px] p-[18px_22px] transition-colors duration-300 group-hover:border-[rgba(143,39,255,0.3)]">
                      <div className="text-[11px] font-bold text-[#8F27FF] uppercase tracking-[.08em] mb-1.5">{s.meta}</div>
                      <h4 className="font-semibold text-[16px] mb-1.5 tracking-[-0.015em]">{s.title}</h4>
                      <p className="text-[13.5px] text-gray-500 leading-relaxed m-0">{s.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </Row>
    </section>
  );
}
