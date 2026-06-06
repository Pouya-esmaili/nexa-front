import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const features = [
  "Full EU citizen status",
  "Live & work in 27 EU member states",
  "CIPLE exam at A2 Portuguese only",
];

export default function CitizenshipCTA() {
  return (
    <section className="py-20 bg-white" style={{ borderTop: "1px solid #E2E2E2", borderBottom: "1px solid #E2E2E2" }}>
      <Row>
        <Reveal variant="up">
          <div className="rounded-[24px] overflow-hidden border-[1.5px] border-black grid grid-cols-1 md:grid-cols-2">

            {/* Left — black */}
            <div className="bg-black px-12 py-14 flex flex-col gap-5">
              <div className="inline-flex items-center gap-1.5 self-start text-[11px] font-bold uppercase tracking-[0.1em] px-3.5 py-1.5 rounded-full"
                style={{ background: "#FFE600", color: "#000" }}>
                Portugal&apos;s Unique Advantage
              </div>
              <h2 className="text-[38px] font-bold tracking-[-0.03em] leading-[1.1] text-white">
                Keep your passport.<br />
                <em className="not-italic" style={{ color: "#FFE600" }}>Add a Portuguese one.</em>
              </h2>
              <p className="text-[15px] leading-[1.65] max-w-[44ch]" style={{ color: "rgba(255,255,255,0.6)" }}>
                Portugal is one of the only EU countries that allows full dual citizenship at naturalization — no renunciation of your original nationality required.
              </p>
            </div>

            {/* Right — yellow */}
            <div className="bg-[#FFE600] px-12 py-14 flex flex-col gap-6 justify-center">
              {/* Stat */}
              <div className="pb-6" style={{ borderBottom: "1.5px solid rgba(0,0,0,0.12)" }}>
                <div className="text-[64px] font-extrabold tracking-[-0.05em] leading-[0.9] text-black">180+</div>
                <div className="text-[13px] font-semibold uppercase tracking-[0.08em] mt-2" style={{ color: "rgba(0,0,0,0.55)" }}>
                  Countries with visa-free access<br />on a Portuguese passport
                </div>
              </div>

              {/* Features */}
              <div className="flex flex-col gap-2.5">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-2.5 text-[14px] font-semibold text-black">
                    <span className="w-2 h-2 rounded-full bg-black flex-shrink-0" />
                    {f}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a href="#contact"
                className="self-start inline-flex items-center gap-2 px-7 py-3.5 bg-black text-white font-bold rounded-full text-[14px] transition-all hover:-translate-y-0.5 hover:bg-[#8F27FF] mt-2">
                Check My Eligibility →
              </a>
            </div>
          </div>
        </Reveal>
      </Row>
    </section>
  );
}
