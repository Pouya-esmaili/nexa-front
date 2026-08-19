"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/global/LazyReveal";
import { useLang } from "@/components/global/LanguageProvider";

const bullets: { en: string; fa: string }[] = [
  {
    en: "Direct Access to Top Accelerators and Research Ecosystems",
    fa: "دسترسی مستقیم به شتاب‌دهنده‌های برتر و اکوسیستم‌های پژوهشی بین‌المللی",
  },
  {
    en: "Cross-border Co-founder and Elite Talent Pools",
    fa: "ارتباط با هم‌بنیان‌گذاران و استعدادهای برتر از سراسر جهان",
  },
  {
    en: "Global Investor Circles and Strategic Growth Capital",
    fa: "دسترسی به شبکه سرمایه‌گذاران بین‌المللی و سرمایه راهبردی برای رشد",
  },
];

export default function Bio() {
  const { t } = useLang();
  return (
    <section className="py-20 md:py-24 bg-[#F7F6F9]">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[70px] items-center">

          {/* Left — image */}
          <Reveal variant="left">
            <div className="relative rounded-[24px] overflow-hidden">
              <Image
                src="/images/landing/Team.jpg"
                alt="Who We Are"
                width={600}
                height={520}
                className="w-full h-auto object-cover"
              />
              
            </div>
          </Reveal>

          {/* Right — content */}
          <Reveal variant="right">
            <div className="flex flex-col gap-5">

              <h2 className="text-[32px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1]">
                {t("NEXA is where", "نکسا جایی است که ")}{" "}
                <span className="inline bg-[#FFE600] rounded-[3px] px-[5px] pb-[3px]">{t("bold founders", " ایده های بزرگ")}</span>{" "}
                {t("come to grow.", "  آینده را می سازند.")}
              </h2>

              <p className="text-[16px] text-[#929292] leading-[1.72]">
                {t(
                  "NEXA is a global hub where bold founders and breakthrough ideas come to grow. We bring together industry expertise and the creativity of a young, globally minded team — blending fearless innovation with strategic insight to transform early-stage concepts into world-ready companies.",
                  "نکسا یک هاب جهانی برای کارآفرینان و ایده‌های نوآورانه است؛ جایی که استارتاپ‌ها فرصت رشد، توسعه و ورود به بازارهای بین‌المللی را پیدا می‌کنند. ما با ترکیب دانش تخصصی، تجربه صنعت و انرژی یک تیم جوان با نگاه جهانی، نوآوری را با استراتژی پیوند می‌دهیم تا ایده‌های نوپا را به کسب‌وکارهایی رقابتی در سطح بین‌المللی تبدیل کنیم."
                )}
              </p>

              <p className="text-[16px] text-[#929292] leading-[1.72]">
                {t(
                  "With strong roots in emerging markets and an extensive international network, we provide entrepreneurs with the capital, mentorship, and global opportunities they need to succeed.",
                  "با تکیه بر حضور قدرتمند در بازارهای نوظهور و شبکه‌ای گسترده از شرکای بین‌المللی، سرمایه، منتورینگ و فرصت‌های جهانی موردنیاز را در اختیار کارآفرینان قرار می‌دهیم تا مسیر رشد خود را با اطمینان طی کنند."
                )}
              </p>

              {/* Bullets */}
              <ul className="flex flex-col gap-3.5 mt-2">
                {bullets.map((b) => (
                  <li key={b.en} className="flex items-center gap-3.5 text-[15px] text-[#474747] leading-[1.5]">
                    <span className="flex-shrink-0 w-[26px] h-[26px] bg-[rgba(143,39,255,0.12)] rounded-full grid place-items-center">
                      <svg className="w-3 h-3 text-[#8F27FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}><polyline points="20 6 9 17 4 12" /></svg>
                    </span>
                    {t(b.en, b.fa)}
                  </li>
                ))}
              </ul>
              <Link
                href="/our-team"
                className="self-start mt-2 inline-flex items-center gap-2 px-7 py-3.5 border-[1.5px] border-[#8F27FF] text-[#8F27FF] font-semibold rounded-full text-[14px] hover:bg-[#8F27FF] hover:text-white hover:-translate-y-px transition-all">
                {t("Meet Our Team →", "با تیم ما آشنا شوید ←")}
              </Link>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
