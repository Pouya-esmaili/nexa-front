"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useLang } from "@/components/global/LanguageProvider";

export default function FounderSection() {
  const { t } = useLang();
  const [headVis, setHeadVis] = useState(false);
  const [cardVis, setCardVis] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const headRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const makeObs = (el: HTMLElement | null, set: (v: boolean) => void) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) { set(true); obs.disconnect(); } },
        { threshold: 0.1, rootMargin: "0px 0px -36px 0px" }
      );
      obs.observe(el);
      return () => obs.disconnect();
    };
    const c1 = makeObs(headRef.current, setHeadVis);
    const c2 = makeObs(cardRef.current, setCardVis);
    return () => { c1?.(); c2?.(); };
  }, []);

  return (
    <section className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-16 pt-[88px] pb-0">
      {/* Section header */}
      <div
        ref={headRef}
        className={`text-center mb-[52px] transition-all duration-700 delay-75 ease-[cubic-bezier(0.22,1,0.36,1)] ${headVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
      >
        <h2 className="text-[26px] sm:text-[32px] lg:text-[40px] font-extrabold tracking-[-1.2px] leading-[1.1]">
          {t("Before", "پیش از")}{" "}
          <mark className="bg-[#FFE600] text-[#0D0D0D] px-[6px] rounded-[4px] not-italic">
            {t("the Academy", "آکادمی")}
          </mark>
        </h2>
      </div>

      {/* Founder card */}
      <div
        ref={cardRef}
        className={`grid grid-cols-1 md:grid-cols-[280px_1fr] rounded-[20px] overflow-hidden mt-11 shadow-[0_2px_40px_rgba(0,0,0,0.10)] transition-all duration-700 delay-[130ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${cardVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
      >
        {/* Left: dark panel */}
        <div className="relative bg-[#0D0D0D] px-8 py-12 flex flex-col items-center text-center gap-4 overflow-hidden rounded-t-[20px] md:rounded-tr-none md:rounded-l-[20px]">
          {/* Purple glow top-right */}
          <div
            className="absolute top-[-60px] right-[-60px] w-[180px] h-[180px] pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(143,39,255,0.35) 0%, transparent 70%)" }}
          />
          {/* Yellow bottom line */}
          <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-[#FFE600] rounded-t-sm" />

          {/* Photo */}
          <div className="relative w-[140px] h-[140px] rounded-full overflow-hidden border-[3px] border-white/[0.12] z-10 flex-shrink-0">
            <Image
              src="/images/ourteam/dr.jpg"
              alt="Hadi Hasanpour"
              fill
              sizes="140px"
              className="object-cover"
            />
          </div>

          <div className="text-[20px] font-extrabold tracking-[-0.4px] text-white z-10">
            {t("Hadi Hasanpour", "هادی حسن‌پور")}
          </div>
          <div className="text-[12px] font-semibold text-[#FFE600] tracking-[1.5px] uppercase z-10">
            {t("Founder & CEO", "بنیان‌گذار و مدیرعامل")}
          </div>
          <a
            href="#"
            className="mt-1 w-8 h-8 border border-white/[0.15] rounded-lg flex items-center justify-center text-white/45 text-[11px] font-bold no-underline transition-colors duration-200 hover:border-[#FFE600] hover:text-[#FFE600] z-10"
          >
            in
          </a>
        </div>

        {/* Right: content */}
        <div className="bg-white border border-[#E8E8E8] border-l-0 rounded-b-[20px] md:rounded-bl-none md:rounded-r-[20px] px-7 py-12 md:px-[52px] flex flex-col justify-center gap-5">
          <p className="text-[18px] font-bold leading-[1.5] tracking-[-0.3px] border-l-[3px] border-[#FFE600] pl-[18px]">
            &ldquo;{t("Engineering taught me how systems work. Entrepreneurship taught me how people do.", "مهندسی به من آموخت سیستم‌ها چگونه کار می‌کنند؛ کارآفرینی به من آموخت انسان‌ها چگونه.")}&rdquo;
          </p>
          <div className="text-[14px] text-[#5A5A5A] leading-[1.8] flex flex-col gap-4">
            <p className={expanded ? "" : "line-clamp-4"}>
              {t(
                "For Hadi Hasanpour, entrepreneurship has never been just about building companies—it has always been about building people.",
                "برای هادی حسن‌پور، کارآفرینی هرگز فقط درباره‌ی ساختن شرکت‌ها نبوده است — همواره درباره‌ی ساختن انسان‌ها بوده است."
              )}
            </p>
            {expanded && (
              <>
                <p>
                  {t(
                    "With a foundation in electrical engineering and more than 15 years of experience delivering technical and engineering solutions across multiple industries, Hadi developed a deep understanding of how systems, organizations, and businesses grow. His continuous pursuit of knowledge, including studies in both electrical and mechanical disciplines, shaped a multidisciplinary mindset that would later define his entrepreneurial journey.",
                    "با پیشینه‌ای در مهندسی برق و بیش از ۱۵ سال تجربه در ارائه‌ی راهکارهای فنی و مهندسی در صنایع گوناگون، هادی درکی عمیق از چگونگی رشد سیستم‌ها، سازمان‌ها و کسب‌وکارها به دست آورد. جست‌وجوی پیوسته‌ی او برای دانش، از جمله تحصیل در هر دو رشته‌ی برق و مکانیک، ذهنیتی چندرشته‌ای شکل داد که بعدها مسیر کارآفرینی‌اش را تعریف کرد."
                  )}
                </p>
                <p>
                  {t(
                    "Driven by a passion for helping young people unlock their potential, Hadi founded Landa Academy, an entrepreneurship-focused learning environment that provided practical education, mentorship, and growth opportunities for future professionals. More than 300 participants joined the academy, many of whom successfully entered the job market, launched businesses, or accelerated their careers.",
                    "با اشتیاق به کمک به جوانان برای شکوفایی توانمندی‌هایشان، هادی آکادمی لاندا را بنیان گذاشت؛ محیطی آموزشی با تمرکز بر کارآفرینی که آموزش عملی، منتورشیپ و فرصت‌های رشد را برای متخصصان آینده فراهم می‌کرد. بیش از ۳۰۰ نفر در این آکادمی شرکت کردند که بسیاری از آنان با موفقیت وارد بازار کار شدند، کسب‌وکار راه انداختند یا مسیر شغلی خود را شتاب بخشیدند."
                  )}
                </p>
                <p>
                  {t(
                    "Building on this impact, Hadi established Landa International Holding with a vision to help entrepreneurs transform ambitious ideas into global ventures. Today, through international partnerships and projects spanning Canada, the UAE, India, China, and beyond, he continues to support founders, startups, and growing businesses in their journey from concept to market. His mission remains simple: to create opportunities, empower innovators, and help great ideas reach their full potential.",
                    "با تکیه بر این اثرگذاری، هادی هلدینگ بین‌المللی لاندا را با چشم‌اندازی برای کمک به کارآفرینان در تبدیل ایده‌های بلندپروازانه به کسب‌وکارهای جهانی تأسیس کرد. امروز، از طریق مشارکت‌ها و پروژه‌های بین‌المللی در کانادا، امارات، هند، چین و فراتر از آن، او همچنان از بنیان‌گذاران، استارتاپ‌ها و کسب‌وکارهای در حال رشد در مسیرشان از ایده تا بازار پشتیبانی می‌کند. مأموریت او ساده باقی مانده است: خلق فرصت، توانمندسازی نوآوران و کمک به شکوفایی کامل ایده‌های بزرگ."
                  )}
                </p>
              </>
            )}
          </div>
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="self-start inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#8F27FF] transition-colors hover:text-[#6f17cc]"
          >
            {expanded ? t("Read less", "بستن") : t("Read more", "بیشتر بخوانید")}
            <svg
              className={`w-3.5 h-3.5 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
