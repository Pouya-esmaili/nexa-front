"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Row from "@/components/global/Row";
import { useLang } from "@/components/global/LanguageProvider";

export default function Hero() {
  const { t, lang } = useLang();
  const [ready, setReady] = useState(false);
  useEffect(() => { const t = setTimeout(() => setReady(true), 60); return () => clearTimeout(t); }, []);

  const base = "transition-[opacity,transform] duration-[650ms] ease-[ease]";
  const left = ready ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-7";
  const right = ready ? "opacity-100 translate-x-0" : "opacity-0 translate-x-7";

  return (
    <section className="pt-[64px] pb-[72px] relative overflow-hidden bg-white">
      <Row>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.15fr] gap-[48px] items-center">

          {/* Left */}
          <div className={`${base} ${left} order-2 md:order-1`}>
            <h1 className="text-[36px] md:text-[44px] font-extrabold leading-[1.08] tracking-[-0.032em] text-black mb-[20px]">
              {t("Launch Your Next Business Branch in the", "فراتر از مرزها، کسب‌وکار خود را")}{" "}
              <span className="highlight">{t("Global Market", "توسعه دهید")}</span>
            </h1>
            <p className="text-[15.5px] text-[#929292] leading-[1.7] max-w-[520px] mb-[36px]">
              {t(
                "From business development to investor engagement, we guide ambitious founders to scale globally — turning bold ideas into borderless, investment-ready ventures.",
                "از توسعه کسب‌وکار و تدوین استراتژی رشد تا ایجاد ارتباط با سرمایه‌گذاران، در کنار کارآفرینان هستیم تا کسب‌وکار خود را در بازارهای بین‌المللی توسعه دهند و ایده‌های نوآورانه را به شرکت‌هایی مقیاس‌پذیر، رقابتی و آماده جذب سرمایه تبدیل کنند."
              )}
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-[28px] py-[14px] bg-[#8F27FF] text-white font-semibold text-[14px] rounded-full transition-all duration-[250ms] hover:bg-[#7A1FE0] hover:-translate-y-px"
              style={{ boxShadow: "0 8px 22px rgba(143,39,255,.28)" }}
            >
              {t("Book a Free Consultation", "رزرو مشاوره‌ی رایگان")}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className={lang === "fa" ? "rotate-180" : ""}>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Right */}
          <div className={`${base} ${right} order-1 md:order-2`} style={{ transitionDelay: "80ms" }}>
            {/* Image */}
            <div
              className="overflow-hidden relative w-full h-[240px] md:h-[380px] rounded-[20px] md:rounded-[140px_20px_20px_20px]"
            >
              <Image
                src="/images/Entrepreneurship/hero.webp"
                alt="Entrepreneurship"
                fill
                sizes="(max-width: 768px) 100vw, 57vw"
                className="object-cover object-top"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(180deg,rgba(143,39,255,.05) 0%,rgba(0,0,0,.08) 100%)" }}
              />
            </div>

          </div>

        </div>
      </Row>
    </section>
  );
}
