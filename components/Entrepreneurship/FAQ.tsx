"use client";

import { useState } from "react";
import Image from "next/image";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/LazyReveal";
import { useLang } from "@/components/global/LanguageProvider";

const MOBILE_INITIAL_COUNT = 6;

const faqs = [
  {
    q: "What is the difference between an entrepreneur visa and a startup visa?",
    qFa: "تفاوت ویزای کارآفرینی با ویزای استارتاپ چیست؟",
    a: "An entrepreneur visa is generally designed for individuals who want to establish, acquire, or expand a business in a foreign market, while a startup visa typically targets innovative, scalable ventures with high-growth potential. The right route depends on your business model, stage of activity, investment capacity, and long-term objectives.",
    aFa: "ویزای کارآفرینی معمولاً برای افرادی طراحی شده که قصد دارند در یک کشور خارجی کسب‌وکاری راه‌اندازی، خریداری یا توسعه دهند؛ درحالی‌که ویزای استارتاپ بیشتر بر کسب‌وکارهای نوآورانه و مقیاس‌پذیر با ظرفیت رشد بالا تمرکز دارد. انتخاب مسیر مناسب به عواملی مانند مدل کسب‌وکار، مرحله فعالیت، میزان سرمایه و اهداف بلندمدت شما بستگی دارد.",
  },
  {
    q: "Can I apply as an entrepreneur if I already own an established business?",
    qFa: "اگر از قبل صاحب یک کسب‌وکار باشم، می‌توانم از مسیر کارآفرینی اقدام کنم؟",
    a: "Yes. In fact, an established business can strengthen your entrepreneur application, especially when you can demonstrate real commercial activity, revenue, management experience, and financial capacity. Depending on the destination country, you may be able to establish a new company, expand your existing business, or transfer part of your operations to the new market.",
    aFa: "بله. داشتن یک کسب‌وکار فعال حتی می‌تواند نقطه قوت پرونده شما باشد؛ به‌خصوص اگر بتوانید سابقه فعالیت واقعی، درآمد، تجربه مدیریتی و توانایی مالی خود را نشان دهید. بسته به قوانین کشور مقصد، ممکن است بتوانید یک شرکت جدید راه‌اندازی کنید، کسب‌وکار فعلی خود را توسعه دهید یا بخشی از فعالیت‌های شرکت را به بازار جدید منتقل کنید.",
  },
  {
    q: "Can I use my existing business to qualify for an international entrepreneur program?",
    qFa: "آیا می‌توانم از کسب‌وکار فعلی‌ام برای دریافت اقامت از طریق برنامه‌های کارآفرینی استفاده کنم؟",
    a: "In many programs, yes. An established business can provide valuable evidence of management experience, commercial activity, revenue, and your ability to operate a business successfully. However, you must demonstrate that your presence in the destination country will create genuine and sustainable economic activity rather than simply involve registering a company without meaningful operations.",
    aFa: "در بسیاری از برنامه‌ها این امکان وجود دارد. سابقه یک کسب‌وکار واقعی می‌تواند شواهد ارزشمندی از تجربه مدیریتی، فعالیت تجاری، درآمد و توانایی شما برای اداره یک کسب‌وکار در اختیار قرار دهد. البته باید مشخص باشد که حضور شما در کشور مقصد به ایجاد فعالیت اقتصادی واقعی و پایدار منجر خواهد شد، نه صرفاً ثبت یک شرکت بدون فعالیت عملی.",
  },
  {
    q: "Which countries offer suitable pathways for established business owners?",
    qFa: "کدام کشورها مسیر مناسب‌تری برای صاحبان کسب‌وکارهای فعال و باسابقه دارند؟",
    a: "There is no single best country for every entrepreneur. The right choice depends on factors such as your industry, investment capacity, taxation, market access, residency requirements, business expansion opportunities, and family objectives. At Nexa, we assess these factors together to identify a country that aligns with both your business strategy and immigration goals.",
    aFa: "یک کشور را نمی‌توان برای همه کارآفرینان به‌عنوان بهترین گزینه معرفی کرد. انتخاب مناسب به عواملی مانند حوزه فعالیت، میزان سرمایه، شرایط مالیاتی، دسترسی به بازار، الزامات اقامتی، امکان توسعه کسب‌وکار و اهداف خانوادگی شما بستگی دارد. در Nexa این عوامل را در کنار یکدیگر بررسی می‌کنیم تا کشوری انتخاب شود که با استراتژی تجاری و اهداف مهاجرتی شما هم‌خوانی داشته باشد.",
  },
  {
    q: "Do I need to invest a minimum amount to qualify for an entrepreneur program?",
    qFa: "برای اقدام از طریق برنامه‌های کارآفرینی، آیا حداقل میزان سرمایه‌گذاری مشخصی لازم است؟",
    a: "Investment requirements vary depending on the country and the specific program. Some pathways have defined minimum investment thresholds, while others place greater emphasis on the viability and sustainability of the business, economic contribution, job creation, and the applicant's ability to operate the venture successfully.",
    aFa: "لزوم سرمایه‌گذاری و میزان آن به کشور و برنامه انتخابی بستگی دارد. برخی مسیرها حداقل سرمایه مشخصی تعیین کرده‌اند، درحالی‌که در برخی دیگر، پایداری و قابلیت اجرای کسب‌وکار، میزان مشارکت اقتصادی، ایجاد اشتغال و توانایی متقاضی در اداره کسب‌وکار اهمیت بیشتری دارد.",
  },
  {
    q: "Can I expand my existing business instead of starting a new company abroad?",
    qFa: "آیا می‌توانم به‌جای راه‌اندازی یک کسب‌وکار جدید، فعالیت فعلی خود را در کشور دیگری گسترش دهم؟",
    a: "Yes. International expansion can take several forms, including establishing a new company or branch, creating a subsidiary, entering into a strategic partnership, or transferring part of your business operations to the destination country. The most suitable structure depends on your commercial objectives, industry, and the legal framework of the destination market.",
    aFa: "بله. توسعه بین‌المللی می‌تواند به شکل‌های مختلفی انجام شود؛ از تأسیس شرکت یا شعبه جدید گرفته تا ایجاد یک شرکت تابعه، ورود به شراکت استراتژیک یا انتقال بخشی از عملیات کسب‌وکار به کشور مقصد. ساختار مناسب به اهداف تجاری، صنعت و قوانین کشور مقصد بستگی دارد.",
  },
  {
    q: "How do I choose the right country for my international business expansion?",
    qFa: "چطور می‌توانم بهترین کشور را برای توسعه بین‌المللی کسب‌وکارم انتخاب کنم؟",
    a: "Choosing the right country should go beyond immigration eligibility. Factors such as market size and potential, industry conditions, taxation, operating costs, access to skilled talent, investment opportunities, regulatory requirements, and long-term residency objectives should all be assessed together. The goal is to select a market where your business can genuinely grow, not simply a country where entry is easier.",
    aFa: "انتخاب کشور مناسب نباید صرفاً بر اساس شرایط ویزا انجام شود. عواملی مانند اندازه و ظرفیت بازار، شرایط صنعت، مالیات، هزینه‌های عملیاتی، دسترسی به نیروی متخصص، فرصت‌های سرمایه‌گذاری، الزامات قانونی و اهداف اقامتی بلندمدت باید هم‌زمان بررسی شوند. هدف این است که بازاری را انتخاب کنید که کسب‌وکارتان واقعاً در آن امکان رشد داشته باشد، نه صرفاً کشوری که ورود به آن آسان‌تر است.",
  },
  {
    q: "Can I operate my business remotely after relocating?",
    qFa: "آیا پس از مهاجرت می‌توانم کسب‌وکارم را از راه دور مدیریت کنم؟",
    a: "This depends on the specific immigration pathway and the nature of your business. Some programs require active management and a meaningful local presence in the destination country, while others offer greater flexibility. Before choosing an immigration structure, it is important to carefully review both the business requirements and the conditions attached to your residence status.",
    aFa: "این موضوع به مسیر اقامتی انتخاب‌شده و ماهیت کسب‌وکار شما بستگی دارد. برخی برنامه‌ها حضور و مدیریت فعال کسب‌وکار در کشور مقصد را الزامی می‌کنند، درحالی‌که برخی مسیرها انعطاف بیشتری دارند. به همین دلیل، پیش از انتخاب ساختار مهاجرتی باید هم الزامات کسب‌وکار و هم شرایط اقامت را به‌دقت بررسی کرد.",
  },
  {
    q: "Can I bring employees or business partners to the destination country?",
    qFa: "آیا امکان انتقال کارکنان یا شرکای تجاری به کشور مقصد وجود دارد؟",
    a: "Potentially, yes. Depending on the country and corporate structure, you may be able to transfer key employees, hire international talent, or establish partnerships with local businesses. These options usually have separate legal requirements from the entrepreneur's own residence pathway and depend on the immigration and commercial regulations of the destination country.",
    aFa: "در برخی کشورها و با توجه به ساختار شرکت، امکان انتقال نیروهای کلیدی، استخدام نیروی بین‌المللی یا همکاری با شرکای تجاری محلی وجود دارد. البته این موضوع معمولاً مسیر قانونی و شرایط جداگانه‌ای از اقامت خود کارآفرین دارد و به قوانین مهاجرتی و تجاری کشور مقصد بستگی خواهد داشت.",
  },
  {
    q: "What factors do authorities consider when assessing an entrepreneur application?",
    qFa: "در بررسی درخواست‌های کارآفرینی، چه عواملی برای مقامات اهمیت بیشتری دارند؟",
    a: "Authorities typically assess the credibility and viability of the business plan, the applicant's professional background, financial capacity, source of funds, and potential economic contribution. Depending on the program, factors such as job creation, innovation, market potential, growth prospects, and the applicant's active role in the business may also carry significant weight.",
    aFa: "مقامات معمولاً اعتبار و قابلیت اجرای طرح کسب‌وکار، سابقه حرفه‌ای متقاضی، توانایی مالی، منبع سرمایه و میزان مشارکت اقتصادی را بررسی می‌کنند. بسته به برنامه، عواملی مانند ایجاد اشتغال، نوآوری، ظرفیت بازار، پتانسیل رشد و نقش فعال متقاضی در کسب‌وکار نیز می‌توانند اهمیت زیادی داشته باشند.",
  },
];


export default function FAQ() {
  const { t } = useLang();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const visibleMobileFaqs = showAll ? faqs : faqs.slice(0, MOBILE_INITIAL_COUNT);

  return (
    <div className="py-12 md:py-20">
      {/* Mobile */}
      <div className="md:hidden px-5">
        <h2 className="text-2xl font-bold text-center mb-8">{t("FAQ", "سؤالات متداول")}</h2>
        <div className="flex flex-col gap-3 rounded-2xl p-5" style={{ background: "#F6F6F6" }}>
          {visibleMobileFaqs.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                onClick={() => toggle(index)}
                className="cursor-pointer bg-white rounded-xl p-4 transition-all duration-300"
                style={{
                  boxShadow: isActive ? "0px 4px 8px 0px #8F27FF40" : "0px 4px 4px 0px #0000001A",
                  borderStyle: "solid",
                  borderWidth: "1px 1px 1px 5px",
                  borderColor: isActive ? "#8F27FF" : "#D2D2D2",
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xs font-medium text-black leading-snug">{t(item.q, item.qFa)}</h3>
                  <Image
                    src={isActive ? "/images/Entrepreneurship/close.svg" : "/images/Entrepreneurship/open.svg"}
                    alt={isActive ? t("Close", "بستن") : t("Open", "باز کردن")}
                    width={20}
                    height={20}
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                  />
                </div>
                {isActive && <p className="mt-3 text-xs text-gray-600 leading-relaxed">{t(item.a, item.aFa)}</p>}
              </div>
            );
          })}

          {!showAll && faqs.length > MOBILE_INITIAL_COUNT && (
            <button
              onClick={() => setShowAll(true)}
              className="mt-2 flex items-center justify-center gap-2 text-sm font-semibold text-[#8F27FF]"
            >
              {t("Show More", "نمایش بیشتر")}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8F27FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          )}

          {showAll && (
            <button
              onClick={() => setShowAll(false)}
              className="mt-2 flex items-center justify-center gap-2 text-sm font-semibold text-[#8F27FF]"
            >
              {t("Show Less", "نمایش کمتر")}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8F27FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <Row>
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">{t("FAQ", "سؤالات متداول")}</h2>
          <div
            className="mx-auto mt-10 grid grid-cols-2 gap-6 items-start"
            style={{ background: "#F6F6F6", borderRadius: "20px", padding: "48px", width: "100%" }}
          >
            {faqs.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={index}
                  onClick={() => toggle(index)}
                  className="cursor-pointer bg-white rounded-xl p-6 transition-all duration-300"
                  style={{
                    boxShadow: isActive ? "0px 4px 8px 0px #8F27FF40" : "0px 4px 4px 0px #0000001A",
                    borderStyle: "solid",
                    borderWidth: "1px 1px 1px 6px",
                    borderColor: isActive ? "#8F27FF" : "#D2D2D2",
                  }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-sm font-medium text-black leading-snug">{t(item.q, item.qFa)}</h3>
                    <Image
                      src={isActive ? "/images/Entrepreneurship/close.svg" : "/images/Entrepreneurship/open.svg"}
                      alt={isActive ? t("Close", "بستن") : t("Open", "باز کردن")}
                      width={24}
                      height={24}
                      className="w-6 h-6 flex-shrink-0"
                    />
                  </div>
                  {isActive && (
                    <p className="mt-3 text-sm text-gray-600 leading-relaxed">{t(item.a, item.aFa)}</p>
                  )}
                </div>
              );
            })}
          </div>
        </Row>
      </div>
    </div>
  );
}
