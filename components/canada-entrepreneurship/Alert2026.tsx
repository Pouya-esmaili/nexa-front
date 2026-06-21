import { Link } from "@/i18n/navigation";
import Row from "@/components/global/Row";

export default function Alert2026() {
  return (
    <section className="py-16 md:py-[70px] bg-black relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 30% 50%, rgba(143,39,255,0.18), transparent 60%)",
        }}
      />

      {/* ========== MOBILE ========== */}
      <div className="md:hidden relative z-10 px-5 flex flex-col gap-5 text-center">
        <div className="flex justify-center">
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest text-black"
            style={{ background: "#FFE600" }}
          >
            <span className="w-2 h-2 rounded-full bg-black" />
            2026 LANDSCAPE
          </span>
        </div>
        <h3 className="text-xl font-semibold italic text-white leading-snug">
          The federal SUV program has undergone structural adjustments.
        </h3>
        <p className="text-sm text-white/70 leading-relaxed">
          Canada has shifted toward more controlled, region-driven selection mechanisms. The center of gravity has moved decisively to Provincial Nominee Programs (PNPs) and Quebec&apos;s independent business immigration streams.
        </p>
        <Link
          href="#contact"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#8F27FF] text-white font-semibold rounded-full text-sm"
        >
          Adapt Your Strategy →
        </Link>
      </div>

      {/* ========== DESKTOP ========== */}
      <div className="hidden md:block relative z-10">
        <Row>
          <div className="grid grid-cols-[auto_1fr_auto] gap-10 items-center">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-[0.08em] text-black whitespace-nowrap"
              style={{ background: "#FFE600" }}
            >
              <span className="w-2 h-2 rounded-full bg-black" />
              2026 LANDSCAPE
            </span>

            <div>
              <h3 className="text-[26px] font-semibold italic text-white mb-2 tracking-tight">
                The federal SUV program has undergone structural adjustments.
              </h3>
              <p className="text-[15px] text-white/70 leading-relaxed max-w-[700px]">
                Canada has shifted toward more controlled, region-driven selection mechanisms. The center of gravity has moved decisively to Provincial Nominee Programs (PNPs) and Quebec&apos;s independent business immigration streams.
              </p>
            </div>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#8F27FF] text-white font-semibold rounded-full text-[15px] whitespace-nowrap transition-all hover:-translate-y-0.5"
              style={{ boxShadow: "0 12px 28px rgba(143,39,255,0.28)" }}
            >
              Adapt Your Strategy →
            </Link>
          </div>
        </Row>
      </div>
    </section>
  );
}
