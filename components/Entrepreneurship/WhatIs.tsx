"use client";
import Image from "next/image";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/LazyReveal";
import { useLang } from "@/components/global/LanguageProvider";

const tags: { en: string; fa: string }[] = [
  { en: "Access to global markets", fa: "دسترسی به بازارهای بین‌المللی" },
  { en: "Designed for innovative founders", fa: "مناسب برای کارآفرینان و بنیان‌گذاران نوآور" },
  { en: "Growth & expansion opportunities", fa: "فرصت توسعه و گسترش کسب‌وکار" },
  { en: "Business-friendly legal frameworks", fa: "بهره‌مندی از چارچوب‌های حقوقی و تجاری مناسب" },
  { en: "Family inclusion pathways", fa: "امکان همراهی اعضای خانواده در فرآیند مهاجرت" },
];

export default function WhatIs() {
  const { t } = useLang();
  return (
    <section className="py-[90px] bg-[#F7F6F9]">
      <Row>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[70px] items-center">

          {/* Image */}
          <Reveal variant="left">
            <div className="relative">
              <div className="relative rounded-[24px] overflow-hidden" style={{ maxHeight: 520, height: 460 }}>
                <Image
                  src="/images/photos/1559136555-9303baea8ebd-w800.jpg"
                  alt="Entrepreneur planning global expansion"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Badge */}
              <div
                className="absolute bottom-6 left-6 bg-white rounded-[14px] px-5 py-4 flex items-center gap-[14px]"
                style={{ boxShadow: "0 16px 48px rgba(0,0,0,0.09)" }}
              >
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

          {/* Content */}
          <Reveal variant="right">
            <h2 className="text-[32px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1] mb-5">
              {t("What is an", "برنامه‌ی")} <span className="highlight">{t("Entrepreneurship", "کارآفرینی")}</span> {t("Program?", "چیست؟")}
            </h2>
            <p className="text-[16px] text-[#929292] leading-[1.72] mb-4">
              {t(
                "Entrepreneurship programs help founders and business owners access global markets, scale their ideas, and build sustainable businesses through clear, government-backed pathways.",
                "برنامه‌های کارآفرینی به بنیان‌گذاران استارتاپ‌ها و صاحبان کسب‌وکار کمک می‌کنند تا وارد بازارهای بین‌المللی شوند، فعالیت خود را گسترش دهند و با استفاده از مسیرهای قانونی و مورد تأیید دولت‌ها، کسب‌وکاری پایدار و آینده‌دار ایجاد کنند."
              )}
            </p>
            <p className="text-[16px] text-[#929292] leading-[1.72] mb-[22px]">
              {t(
                "Each program offers a structured route to legal residency, company registration, and long-term growth — supported by Nexa's end-to-end advisory at every step.",
                "هر برنامه، مسیری شفاف برای ثبت شرکت، دریافت اقامت قانونی و توسعه بلندمدت کسب‌وکار ارائه می‌دهد. در نکسا نیز در تمام مراحل، از ارزیابی اولیه تا راه‌اندازی و توسعه کسب‌وکار، با خدمات مشاوره‌ای جامع در کنار شما خواهیم بود."
              )}
            </p>
            <div className="flex flex-wrap gap-2 mt-[22px]">
              {tags.map(tag => (
                <span
                  key={tag.en}
                  className="px-[14px] py-[6px] rounded-full text-[14px] font-medium border border-[#E2E2E2] bg-[#F7F6F9] text-[#474747] hover:bg-[#FAF6FF] hover:border-[#8F27FF] hover:text-[#8F27FF] transition-all duration-[200ms] cursor-default"
                >
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
