import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

export default function DeadlineCta() {
  return (
    <section className="py-20 bg-white border-t border-[#E2E2E2]">
      <Row>
        <Reveal variant="up">
          <div className="rounded-[24px] overflow-hidden shadow-[0_0_0_2px_#000]">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_380px]">

              {/* Left — black */}
              <div className="bg-black px-12 py-[52px] flex flex-col gap-5 relative overflow-hidden">
                <div className="pointer-events-none absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full"
                  style={{ background: "radial-gradient(circle, rgba(255,230,0,0.08), transparent 70%)" }} />

                <div className="inline-flex items-center gap-2 self-start text-[11px] font-bold uppercase tracking-[0.1em] text-black bg-[#FF4444] px-[14px] py-1.5 rounded-full">
                  <span className="text-[8px]">●</span>
                  Program Pause in Effect
                </div>

                <h2 className="text-[26px] md:text-[34px] font-bold text-white tracking-[-0.03em] leading-[1.1] relative z-10">
                  The window was open.<br />
                  <em className="text-[#FFE600] not-italic">But only until June 30.</em>
                </h2>

                <p className="text-[14.5px] text-[rgba(255,255,255,0.6)] leading-[1.65] max-w-[54ch] relative z-10">
                  IRCC enacted a full program pause effective January 1, 2026. New applications are completely closed — only 2025 Commitment Certificate holders remain eligible. Miss the deadline and your certificate lapses permanently.
                </p>

                <div className="flex flex-col gap-2.5 relative z-10">
                  {[
                    "Only founders with a valid 2025 Commitment Certificate can file",
                    "All group members must submit simultaneously — one delay collapses the entire file",
                    "IRCC is actively transitioning to a new entrepreneur pilot program in late 2026",
                  ].map((rule) => (
                    <div key={rule} className="flex items-start gap-3 text-[13.5px] text-[rgba(255,255,255,0.85)] font-medium leading-[1.5]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFE600] flex-shrink-0 mt-[6px]" />
                      {rule}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — yellow */}
              <div className="bg-[#FFE600] px-10 py-[52px] flex flex-col gap-5 items-start justify-center">
                <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-[rgba(0,0,0,0.5)]">
                  Hard Submission Deadline
                </div>
                <div className="text-[28px] font-extrabold text-black tracking-[-0.03em] leading-[1.1]">
                  June 30,<br />2026
                </div>
                <div className="w-full h-[1.5px] bg-[rgba(0,0,0,0.12)]" />
                <p className="text-[13px] text-[rgba(0,0,0,0.65)] leading-[1.6]">
                  If you hold a <strong className="text-black font-bold">2025 Commitment Certificate</strong>, your PR filing must be complete and submitted before this date — no extensions are available.
                </p>
                <a href="#contact"
                  className="inline-flex items-center gap-[10px] px-6 py-3.5 bg-black text-white font-bold rounded-full text-[14px] transition-all duration-200 hover:bg-[#8F27FF] hover:-translate-y-0.5">
                  Talk to Nexa Now →
                </a>
              </div>

            </div>
          </div>
        </Reveal>
      </Row>
    </section>
  );
}
