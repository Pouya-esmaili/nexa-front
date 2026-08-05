"use client";

import Link from "next/link";
import Row from "@/components/global/Row";
import { useLang } from "@/components/global/LanguageProvider";

export default function Alert2026() {
  const { t } = useLang();
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
            {t("2026 LANDSCAPE", "چشم‌انداز ۲۰۲۶")}
          </span>
        </div>
        <h3 className="text-xl font-semibold italic text-white leading-snug">
          {t("The federal SUV program has undergone structural adjustments.", "برنامه‌ی SUV فدرال دستخوش تعدیل‌های ساختاری شده است.")}
        </h3>
        <p className="text-sm text-white/70 leading-relaxed">
          {t("Canada has shifted toward more controlled, region-driven selection mechanisms. The center of gravity has moved decisively to Provincial Nominee Programs (PNPs) and Quebec's independent business immigration streams.", "کانادا به سمت سازوکارهای انتخاب کنترل‌شده‌تر و منطقه‌محورتر حرکت کرده است. مرکز ثقل به‌طور قاطع به برنامه‌های نامزدی استانی (PNP) و جریان‌های مستقل مهاجرت تجاری کبک منتقل شده است.")}
        </p>
        <Link
          href="#contact"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#8F27FF] text-white font-semibold rounded-full text-sm"
        >
          {t("Adapt Your Strategy →", "راهبرد خود را وفق دهید →")}
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
              {t("2026 LANDSCAPE", "چشم‌انداز ۲۰۲۶")}
            </span>

            <div>
              <h3 className="text-[26px] font-semibold italic text-white mb-2 tracking-tight">
                {t("The federal SUV program has undergone structural adjustments.", "برنامه‌ی SUV فدرال دستخوش تعدیل‌های ساختاری شده است.")}
              </h3>
              <p className="text-[15px] text-white/70 leading-relaxed max-w-[700px]">
                {t("Canada has shifted toward more controlled, region-driven selection mechanisms. The center of gravity has moved decisively to Provincial Nominee Programs (PNPs) and Quebec's independent business immigration streams.", "کانادا به سمت سازوکارهای انتخاب کنترل‌شده‌تر و منطقه‌محورتر حرکت کرده است. مرکز ثقل به‌طور قاطع به برنامه‌های نامزدی استانی (PNP) و جریان‌های مستقل مهاجرت تجاری کبک منتقل شده است.")}
              </p>
            </div>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#8F27FF] text-white font-semibold rounded-full text-[15px] whitespace-nowrap transition-all hover:-translate-y-0.5"
              style={{ boxShadow: "0 12px 28px rgba(143,39,255,0.28)" }}
            >
              {t("Adapt Your Strategy →", "راهبرد خود را وفق دهید →")}
            </Link>
          </div>
        </Row>
      </div>
    </section>
  );
}
