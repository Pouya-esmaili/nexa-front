"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/global/LazyReveal";
import { useLang } from "@/components/global/LanguageProvider";

export default function Team() {
  const { t } = useLang();
  return (
    <section className="py-20 md:py-24 bg-[#F7F6F9]">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[70px] items-center">

          {/* Left — content */}
          <Reveal variant="left" className="order-2 md:order-1">
            <div className="flex flex-col gap-5">
              <h2 className="text-[32px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1]">
                {t("Behind the", "پشت صحنه‌ی")}{" "}
                <span className="inline bg-[#FFE600] rounded-[3px] px-[5px] pb-[3px]">{t("Nexa", "نکسا")}</span>
              </h2>
              <p className="text-[16px] text-[#929292] leading-[1.72]">
                {t(
                  "NEXA is an international team with 10+ years of hands-on experience in launching and scaling businesses globally. Our expertise spans multiple disciplines, with a strong focus on execution.",
                  "نکسا متشکل از تیمی بین‌المللی با بیش از یک دهه تجربه عملی در راه‌اندازی، توسعه و گسترش کسب‌وکارها در بازارهای جهانی است. تخصص ما حوزه‌های مختلفی را در بر می‌گیرد، اما آنچه ما را متمایز می‌کند، تمرکز بر اجرای مؤثر و دستیابی به نتایج واقعی است."
                )}
              </p>
              <p className="text-[16px] text-[#929292] leading-[1.72]">
                {t(
                  "We deliver investment-ready strategies through close collaboration with international consultants and legal experts, helping founders turn early-stage ideas into scalable, market-ready companies.",
                  " ما با همکاری نزدیک مشاوران بین‌المللی، متخصصان صنعت و کارشناسان حقوقی، راهکارهایی جامع و سرمایه‌گذارپسند ارائه می‌دهیم تا بنیان‌گذاران بتوانند ایده‌های اولیه خود را به کسب‌وکارهایی مقیاس‌پذیر، رقابتی و آماده ورود به بازارهای جهانی تبدیل کنند."
                )}
              </p>

              <Link
                href="/our-team"
                className="self-start mt-2 inline-flex items-center gap-2 px-7 py-3.5 border-[1.5px] border-[#8F27FF] text-[#8F27FF] font-semibold rounded-full text-[14px] hover:bg-[#8F27FF] hover:text-white hover:-translate-y-px transition-all">
                {t("Meet Our Team →", "با تیم ما آشنا شوید →")}
              </Link>
            </div>
          </Reveal>

          {/* Right — image */}
          <Reveal variant="right" className="order-1 md:order-2">
            <div className="rounded-[24px] overflow-hidden">
              <Image
                src="/images/landing/behind.webp"
                alt="Behind Nexa"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
