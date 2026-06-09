import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

export default function Renewal() {
  return (
    <section className="py-20 md:py-24 bg-white border-t border-[#E2E2E2]">
      <Row>
        <Reveal variant="up">
          <div className="rounded-[24px] overflow-hidden border-[1.5px] border-[#E2E2E2]">
            <div className="grid grid-cols-1 md:grid-cols-3">

              {/* Col 1 — Renewal (gray) */}
              <div className="p-[44px_36px] flex flex-col gap-4 bg-[#F7F6F9] border-b md:border-b-0 md:border-r border-[#E2E2E2]">
                <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#929292]">Every 5 Years</div>
                <h3 className="text-[22px] font-bold tracking-[-0.02em] leading-[1.2] text-black">Streamlined Renewals</h3>
                <p className="text-[13.5px] text-[#929292] leading-[1.65]">
                  No language test. No wealth reassessment. No physical presence check. Only two conditions must be met at each renewal.
                </p>
                <ul className="flex flex-col gap-[10px] mt-1">
                  {[
                    "Certified land registry proof that you remain 100% legal titleholder of the qualifying property",
                    "Active Greek medical insurance policy for all applicants on the file",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-[10px] text-[13.5px] font-medium text-black leading-[1.45]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8F27FF] flex-shrink-0 mt-[5px]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 2 — Citizenship (purple) */}
              <div className="p-[44px_36px] flex flex-col gap-4 bg-[#8F27FF] border-b md:border-b-0 md:border-r border-[rgba(255,255,255,0.15)]">
                <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-[rgba(255,255,255,0.6)]">Optional Pathway</div>
                <h3 className="text-[22px] font-bold tracking-[-0.02em] leading-[1.2] text-white">Greek Citizenship</h3>
                <p className="text-[13.5px] text-[rgba(255,255,255,0.75)] leading-[1.65]">
                  The Golden Visa grants permanent residency — not automatic citizenship. Naturalization is optional and requires deep physical integration.
                </p>
                <ul className="flex flex-col gap-[10px] mt-1">
                  {[
                    "7 consecutive years of physical residence (183+ days/year)",
                    "Continuous local tax filing and fiscal integration",
                    "Greek language & culture exam at minimum B1 level",
                    "Dual citizenship fully recognized — no renunciation required",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-[10px] text-[13.5px] font-medium text-[rgba(255,255,255,0.9)] leading-[1.45]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[rgba(255,255,255,0.5)] flex-shrink-0 mt-[5px]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 3 — CTA (yellow) */}
              <div className="p-[44px_36px] flex flex-col gap-4 bg-[#FFE600]">
                <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-[rgba(0,0,0,0.5)]">The Bottom Line</div>
                <div className="text-[52px] font-extrabold text-black tracking-[-0.05em] leading-none">∞</div>
                <div className="text-[13px] font-semibold text-[rgba(0,0,0,0.55)] uppercase tracking-[0.08em]">
                  Renewable residency<br />with no stay condition
                </div>
                <p className="text-[13.5px] text-[rgba(0,0,0,0.65)] leading-[1.65] flex-1">
                  Permanent EU residency for your entire family — across three generations — maintained simply by keeping your investment.
                </p>
                <a href="#contact"
                  className="inline-flex items-center gap-[10px] px-6 py-3.5 bg-black text-white font-bold rounded-full text-[14px] transition-all duration-200 hover:bg-[#8F27FF] hover:-translate-y-0.5 self-start">
                  Start Your Application →
                </a>
              </div>

            </div>
          </div>
        </Reveal>
      </Row>
    </section>
  );
}
