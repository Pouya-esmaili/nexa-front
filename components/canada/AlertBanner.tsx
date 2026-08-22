"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

export default function AlertBanner() {
  const { t } = useLang();
  return (
    <section className="py-16 bg-black relative overflow-hidden">
      {/* radial glow */}
      <div className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(circle at 30% 50%, rgba(143,39,255,0.18), transparent 60%)" }} />

      <Row>
        <Reveal variant="up">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-8 md:gap-10 items-center text-white">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFE600] rounded-full text-[12px] font-bold tracking-[0.08em] text-black whitespace-nowrap self-start md:self-center">
              <span className="w-2 h-2 rounded-full bg-black" />
              {t("2026 LANDSCAPE", "چشم‌انداز ۲۰۲۶")}
            </div>

            {/* Body */}
            <div>
              <h3 className="text-[26px] font-semibold italic tracking-[-0.02em] mb-2">
                {t("The federal SUV program has undergone structural adjustments.", "برنامه‌ی SUV فدرال دستخوش تعدیل‌های ساختاری شده است.")}
              </h3>
              <p className="text-[15px] leading-[1.6] max-w-[700px]" style={{ color: "rgba(255,255,255,0.7)" }}>
                {t("Canada has shifted toward more controlled, region-driven selection mechanisms. The center of gravity has moved decisively to Provincial Nominee Programs (PNPs) and Quebec's independent business immigration streams.", "کانادا به سمت سازوکارهای انتخاب کنترل‌شده‌تر و منطقه‌محورتر حرکت کرده است. مرکز ثقل به‌طور قاطع به برنامه‌های نامزدی استانی (PNP) و جریان‌های مستقل مهاجرت تجاری کبک منتقل شده است.")}
              </p>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#8F27FF] text-white font-semibold rounded-full text-[15px] whitespace-nowrap transition-all hover:-translate-y-0.5 self-start md:self-center"
              style={{ boxShadow: "0 10px 24px rgba(143,39,255,0.28)" }}
            >
              {t("Adapt Your Strategy →", "راهبرد خود را وفق دهید ←")}
            </a>
          </div>
        </Reveal>
      </Row>
    </section>
  );
}
