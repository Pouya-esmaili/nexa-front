import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const steps = [
  {
    num: "1",
    meta: "Step 1 · Weeks 1–6",
    title: "Vetting & Endorsement",
    desc: "Develop your comprehensive business plan, financial forecasts, and technological roadmap. Pitch your venture to a Home Office-approved Endorsing Body to secure your formal Endorsement Letter — valid for 3 months.",
  },
  {
    num: "2",
    meta: "Step 2 · Weeks 7–8",
    title: "Document Compilation & Maintenance Check",
    desc: "Compile your B2 English language certificates, complete a TB test if required by your country of origin, and ensure your personal account maintains the £1,270 maintenance floor for 28 consecutive days.",
  },
  {
    num: "3",
    meta: "Step 3 · Weeks 9–12",
    title: "Home Office Portal Submission",
    desc: "Submit via the official GOV.UK portal, settle the visa fees and IHS surcharges, and attend a biometrics appointment at an authorized visa center to scan fingerprints and photograph.",
  },
  {
    num: "4",
    meta: "Step 4 · Month 4 and Beyond",
    title: "UK Landing & Checkpoint Monitoring",
    desc: "Arrive in the UK, collect your Biometric Residence Permit (BRP), register with Companies House as a director, and launch operations. Attend mandatory progress meetings with your Endorsing Body at Month 12 and Month 24.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-16 md:py-20 bg-[#F7F6F9]" id="process">
      <Row>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Lead */}
          <Reveal variant="left" delay={0} className="md:sticky md:top-24">
            <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] mb-5">
              Operational Roadmap
            </h2>
            <blockquote className="text-[18px] italic font-medium leading-[1.5] py-5 pl-6 mb-4" style={{ borderLeft: "3px solid #8F27FF" }}>
              &ldquo;Nexa organizes the multi-layered UK application life-cycle into a clear, linear timeline.&rdquo;
            </blockquote>
            <p className="text-[14.5px] text-[#929292] leading-[1.7]">
              From your first endorsement pitch to landing in the UK and launching operations, the full process takes approximately 3 months when properly prepared. The Home Office decision takes just 3 weeks once biometrics are submitted.
            </p>
          </Reveal>

          {/* Steps */}
          <div className="relative pl-[52px]">
            <div
              className="absolute top-[22px] bottom-[22px] left-5 w-0.5 rounded-full"
              style={{ background: "linear-gradient(180deg, #8F27FF 0%, rgba(143,39,255,0.15) 100%)" }}
            />
            {steps.map((s, i) => (
              <Reveal key={s.num} variant="up" delay={i * 100 + 100}>
                <div className="relative pb-8 last:pb-0 group transition-transform hover:translate-x-1">
                  <div
                    className="absolute -left-[52px] top-0 w-[42px] h-[42px] rounded-full bg-white flex items-center justify-center text-[13px] font-bold text-[#8F27FF] transition-all group-hover:bg-[#8F27FF] group-hover:text-white"
                    style={{
                      border: "2px solid #8F27FF",
                      boxShadow: "0 0 0 5px #FAF6FF, 0 4px 12px rgba(143,39,255,0.12)",
                    }}
                  >
                    {s.num}
                  </div>
                  <div
                    className="bg-white rounded-[14px] p-[18px_22px] transition-colors group-hover:border-[rgba(143,39,255,0.3)]"
                    style={{ border: "1px solid #E2E2E2" }}
                  >
                    <div className="text-[11px] font-bold text-[#8F27FF] uppercase tracking-[.08em] mb-1.5">{s.meta}</div>
                    <h4 className="text-[16px] font-semibold mb-1.5">{s.title}</h4>
                    <p className="text-[13.5px] text-[#929292] leading-[1.6] m-0">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Row>
    </section>
  );
}
