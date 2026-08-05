"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "../global/LanguageProvider";

export default function Hero() {
  const { t } = useLang();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setMounted(true), 80); return () => clearTimeout(t); }, []);

  const base = "transition-all duration-700";
  const hidden = "opacity-0 translate-y-8";
  const shown = "opacity-100 translate-y-0";

  return (
    <section className="pt-1 pb-14 md:pb-20 bg-white overflow-hidden mt-8">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

          {/* ── LEFT: Text ── */}
          <div className="order-2 md:order-1">

            {/* H1 */}
            <h1
              className={`${base} ${mounted ? shown : hidden} text-[32px] md:text-[46px] font-extrabold leading-[1.06] tracking-[-0.035em] text-black mb-5`}
              style={{ transitionDelay: "80ms" }}
            >
              {t("Your Global Launchpad", "دروازه ورود شما")}<br></br> {t("for Investment,", "به فرصت های جهانی سرمایه گذاری")}{" "}
              <span className="inline bg-[#FFE600] rounded-[3px] pb-[3px]">
                <br></br>{t("Startups & Growth.", "نواوری و رشد.")}
              </span>
            </h1>

            {/* Lead */}
            <p
              className={`${base} ${mounted ? shown : hidden} text-[16px] text-[#929292] leading-[1.68] max-w-[520px] mb-9`}
              style={{ transitionDelay: "160ms" }}
            >
              {t(
                "We fuel the global expansion of startups into new markets — for entrepreneurs ready to scale and investors seeking high-growth opportunities.",
                " ما مسیر توسعه بین‌المللی استارتاپ‌ها را هموار می‌کنیم تا کارآفرینان با اطمینان وارد بازارهای جدید شوند و سرمایه‌گذاران به فرصت‌های رشد بالا دست یابند."
              )}
            </p>

            {/* CTA */}
            <div
              className={`${base} ${mounted ? shown : hidden} flex flex-wrap gap-3.5`}
              style={{ transitionDelay: "240ms" }}
            >
              <button
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#8F27FF] text-white font-semibold rounded-full text-[14px] transition-all hover:bg-[#7A1FE0] hover:-translate-y-px hover:shadow-[0_8px_22px_rgba(143,39,255,0.28)]">
                {t("Explore Services →", "مشاهده خدمات →")}
              </button>
              <Link href="#contact"
                className="inline-flex items-center gap-2 px-[22px] py-[10px] border-[1.5px] border-[#1a1a1a] text-[#1a1a1a] font-semibold rounded-full text-[13px] transition-all hover:border-[#8F27FF] hover:text-[#8F27FF]">
                {t("Book a Call", "رزرو تماس")}
              </Link>
            </div>

          </div>

          {/* ── RIGHT: Visual ── */}
          <div
            className={`${base} ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"} order-1 md:order-2 relative`}
            style={{ transitionDelay: "100ms", transitionDuration: "800ms" }}
          >
            <div className="relative rounded-[20px] overflow-hidden">
              <Image
                src="/images/landing/TEAM 2 (1).webp"
                alt="Nexa Team"
                width={700}
                height={520}
                className="w-full h-full object-cover"
                priority
              />
              
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes floatY {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
}
