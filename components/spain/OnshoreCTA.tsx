import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const pills = [
  "No consulate required",
  "3-year TIE card directly",
  "20-day decision window",
  "Silence = approval",
];

export default function OnshoreCTA() {
  return (
    <section className="py-20 md:py-24 bg-black relative overflow-hidden">
      {/* Yellow radial glow */}
      <div className="pointer-events-none absolute -top-20 -left-20 w-[360px] h-[360px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(255,230,0,0.12), transparent 70%)" }} />

      <Row>
        <Reveal variant="up">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center relative z-10">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.1em] px-3.5 py-1.5 rounded-full mb-5"
                style={{ background: "#FFE600", color: "#7A6800" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#7A6800]" />
                Unique Structural Advantage
              </div>
              <h2 className="text-[36px] font-bold tracking-[-0.03em] leading-[1.1] mb-3.5 text-white">
                Apply from inside Spain.<br />
                <em className="not-italic" style={{ color: "#FFE600" }}>Get 3 years. Not 1.</em>
              </h2>
              <p className="text-[15px] leading-[1.65] max-w-[52ch] mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
                Enter on a tourist visa, file directly with the UGE — and receive a 3-year residence card without ever visiting a consulate. No other major EU entrepreneur program works this way.
              </p>
              <div className="flex flex-wrap gap-2">
                {pills.map((p) => (
                  <span key={p} className="flex items-center gap-1.5 text-[13px] font-medium text-white px-3.5 py-1.5 rounded-full"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFE600] flex-shrink-0" />
                    {p}
                  </span>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col items-center gap-4 flex-shrink-0">
              {/* Yellow stat box */}
              <div className="rounded-[20px] px-9 py-7 text-center min-w-[180px]" style={{ background: "#FFE600" }}>
                <div className="text-[52px] font-extrabold tracking-[-0.05em] leading-none text-black">20</div>
                <div className="text-[12px] font-bold uppercase tracking-[0.08em] mt-1.5" style={{ color: "rgba(0,0,0,0.55)" }}>
                  Working Days<br />to Decision
                </div>
              </div>
              <a href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 font-bold rounded-full text-[14px] whitespace-nowrap transition-all hover:-translate-y-0.5"
                style={{ background: "#FFE600", color: "#000", boxShadow: "0 12px 28px rgba(255,230,0,0.3)" }}>
                Start Now →
              </a>
            </div>
          </div>
        </Reveal>
      </Row>
    </section>
  );
}
