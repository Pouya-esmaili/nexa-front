"use client";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import Image from "next/image";
import { useLang } from "@/components/global/LanguageProvider";

const tags: { en: string; fa: string }[] = [
  { en: "Team-Driven Vision & Collaborative Execution", fa: "چشم اندازی مشترک و اجرای مبتنی بر کار تیمی" },
  { en: "Innovative Solutions for Real Market Needs", fa: "راهکارهای نوآورانه برای پاسخ به نیازهای واقعی بازار" },
  { en: "Sustainable Revenue & Wealth Creation Models", fa: "مدل‌های درآمدی پایدار و ارزش‌آفرین" },
  { en: "Scalable Structure with Global Growth Potential", fa: "ساختاری مقیاس‌پذیر با ظرفیت رشد در بازارهای جهانی" },
];

export default function WhatIsStartup() {
  const { t } = useLang();
  return (
    <section className="py-16 md:py-24 bg-[#F7F6F9]">
      <Row>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-12 md:gap-16 items-center">
          <Reveal variant="left">
            <div className="relative">
              <div className="relative rounded-[24px] overflow-hidden" style={{ height: 460 }}>
                <Image
                  src="/images/photos/1559136555-9303baea8ebd-w800.webp"
                  alt="Entrepreneur planning global expansion"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute bottom-6 left-6 bg-white rounded-[14px] px-5 py-4 flex items-center gap-4"
                style={{ boxShadow: "0 16px 48px rgba(0,0,0,0.09)" }}>
                <div className="w-[42px] h-[42px] rounded-[12px] bg-[#8F27FF] grid place-items-center text-white flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                </div>
                <div>
                  <strong className="block text-[14px] font-bold text-black">{t("400+ Entrepreneurs Placed", "بیش از ۴۰۰ کارآفرین مستقر")}</strong>
                  <span className="text-[12px] text-[#929292]">{t("Across 5 countries", "در ۵ کشور")}</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal variant="right">
            <h2 className="text-[32px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1] mb-5">
              {t("Built To", "از نوآوری تا")} <span className="text-[#8F27FF]">{t("Innovate.", "توسعه.")}</span> {t("Designed To Scale."," بین المللی")}
            </h2>
            <p className="text-[16px] text-[#929292] leading-[1.72] mb-4">
              {t(
                "A Startup is a team-driven venture focused on solving real market needs through innovation and technology, while building sustainable revenue models designed for scalable, long-term growth.",
                "استارتاپ، کسب‌وکاری نوآور و مبتنی بر همکاری تیمی است که با ارائه راهکارهایی خلاقانه برای نیازهای واقعی بازار، مسیر رشد پایدار و توسعه‌پذیر را دنبال می‌کند."
              )}
            </p>
            <p className="text-[16px] text-[#929292] leading-[1.72] mb-6">
              {t(
                "Nexa supports founders at every stage — from idea validation and visa application to fundraising and post-launch scaling across global markets.",
                "در نکسا، از اعتبارسنجی ایده و تدوین استراتژی کسب‌وکار گرفته تا جذب سرمایه، دریافت ویزا و توسعه فعالیت در بازارهای بین‌المللی، در تمام مراحل رشد استارتاپ در کنار کارآفرینان هستیم."
              )}
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map(tag => (
                <span key={tag.en} className="px-3.5 py-1.5 rounded-full text-[13px] font-medium border border-[#E2E2E2] bg-white text-[#474747] hover:bg-[#FAF6FF] hover:border-[rgba(143,39,255,0.18)] hover:text-[#8F27FF] transition-colors cursor-default">
                  {t(tag.en, tag.fa)}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </Row>
    </section>
  );
}
