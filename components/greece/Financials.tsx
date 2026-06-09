import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

export default function Financials() {
  return (
    <section className="py-20 md:py-24 bg-black relative overflow-hidden">
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(143,39,255,0.3), transparent 65%)" }} />

      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center text-white mb-14">
            Capital Verification Requirements
          </h2>
        </Reveal>

        <Reveal variant="up" delay={80}>
          <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-5 relative z-10">

            {/* Left hero card */}
            <div className="rounded-[20px] p-10 flex flex-col gap-5"
              style={{ background: "#0E0E10", border: "1px solid #1f1f24" }}>
              <span className="self-start text-[11px] font-bold tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-full text-[#FFE600]"
                style={{ background: "rgba(255,230,0,0.12)", border: "1px solid rgba(255,230,0,0.3)" }}>
                Wire Transfer Only
              </span>
              <div className="text-[72px] font-bold tracking-[-0.04em] leading-none text-white">100%</div>
              <p className="text-[14px] text-[#B5B5BA] leading-[1.65]">
                The <strong className="text-[#FFE600] font-semibold">full investment amount</strong> must be paid at
                deed execution — no installments, no partial payments. Funds must move via{" "}
                <strong className="text-[#FFE600] font-semibold">cross-border wire transfer</strong> from the
                applicant's overseas bank directly to the seller's verified Greek account.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto pt-5" style={{ borderTop: "1px solid #1f1f24" }}>
                {["Cross-border wire transfer", "Certified bank check (Greek bank)", "Applicant's own account only"].map((chip) => (
                  <span key={chip} className="text-[12px] px-3 py-1.5 rounded-full text-white font-medium"
                    style={{ border: "1px solid #2a2a30" }}>{chip}</span>
                ))}
              </div>
            </div>

            {/* Right rules */}
            <div className="flex flex-col gap-3">
              {[
                { type: "must", label: "Required", title: "Electronic Cross-Border Wire", desc: <>Funds must move from the <strong className="text-white font-semibold">main applicant's overseas bank account</strong> directly into the seller's verified Greek bank account — or via a certified bank check issued by a Greek credit institution.</> },
                { type: "must", label: "Required", title: "Greek Tax Number (AFM) First", desc: <>Nexa secures your AFM and opens your Greek bank account via <strong className="text-white font-semibold">remote Power of Attorney</strong> before any capital is deployed — a mandatory prerequisite for property execution.</> },
                { type: "ban",  label: "Prohibited", title: "Cash, Crypto & Third-Party Transfers", desc: <>Cash payments, <strong className="text-white font-semibold">crypto-asset settlements</strong>, and any wire from a person not named on the visa application will <strong className="text-white font-semibold">invalidate the application entirely</strong> with no recourse.</> },
              ].map((rule) => (
                <div key={rule.title} className="rounded-[14px] p-6 transition-all duration-200 hover:border-[#8F27FF]"
                  style={{ background: "#0E0E10", border: "1px solid #1f1f24" }}>
                  <div className={`text-[11px] font-bold uppercase tracking-widest mb-2 ${rule.type === "must" ? "text-[#FFE600]" : "text-[#F87171]"}`}>
                    {rule.label}
                  </div>
                  <h4 className="text-[15px] font-semibold text-white mb-1">{rule.title}</h4>
                  <p className="text-[13px] text-[#B5B5BA] leading-[1.6]">{rule.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </Reveal>
      </Row>
    </section>
  );
}
