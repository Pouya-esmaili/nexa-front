"use client";

import { useState } from "react";
import Image from "next/image";
import Row from "@/components/global/Row";
import { useLang } from "@/components/global/LanguageProvider";

const MOBILE_INITIAL_COUNT = 6;

const faqs = [
  {
    q: "Can I apply while visiting Spain as a tourist?",
    qFa: "آیا می‌توانم در حین بازدید از اسپانیا به‌عنوان توریست درخواست دهم؟",
    a: "Yes. You can enter Spain on a standard Schengen tourist visa or visa-free passport and file your application directly with the UGE while onshore. Applying from inside Spain bypasses the consulate entirely and grants the full 3-year residence card directly, instead of a 1-year entry visa.",
    aFa: "بله. می‌توانید با ویزای توریستی استاندارد شنگن یا پاسپورت بدون ویزا وارد اسپانیا شوید و درخواست خود را در حین حضور در کشور مستقیماً نزد UGE ثبت کنید. درخواست از داخل اسپانیا به‌طور کامل کنسولگری را دور می‌زند و به‌جای ویزای ورود ۱ ساله، مستقیماً کارت اقامت کامل ۳ ساله را اعطا می‌کند.",
  },
  {
    q: "What happens if my application faces \"administrative silence\"?",
    qFa: "اگر درخواست من با «سکوت اداری» مواجه شود چه می‌شود؟",
    a: "The Spain Entrepreneur Visa is governed by a strict positive administrative silence rule (silencio administrativo positivo). If the UGE does not issue an explicit approval or rejection within 20 working days from your submission date, your application is legally deemed approved.",
    aFa: "ویزای کارآفرینی اسپانیا تحت یک قاعده‌ی سختگیرانه‌ی سکوت اداری مثبت (silencio administrativo positivo) اداره می‌شود. اگر UGE ظرف ۲۰ روز کاری از تاریخ ثبت شما تأیید یا رد صریحی صادر نکند، درخواست شما از نظر قانونی تأییدشده تلقی می‌شود.",
  },
  {
    q: "Do I need to speak Spanish to get the Entrepreneur Visa?",
    qFa: "آیا برای گرفتن ویزای کارآفرینی باید به زبان اسپانیایی صحبت کنم؟",
    a: "No. Your business plan and technical pitch can be presented to ENISA and the UGE in English or Spanish. There is no initial language requirement. You only need certified language proficiency (DELE A2) later if you choose to pursue Spanish citizenship.",
    aFa: "خیر. طرح کسب‌وکار و ارائه‌ی فنی شما می‌تواند به انگلیسی یا اسپانیایی به ENISA و UGE ارائه شود. هیچ الزام زبانی اولیه‌ای وجود ندارد. تنها در صورتی که بخواهید تابعیت اسپانیا را دنبال کنید، بعداً به تسلط زبانی تأییدشده (DELE A2) نیاز دارید.",
  },
  {
    q: "Can multiple co-founders apply under the same business plan?",
    qFa: "آیا چند هم‌بنیان‌گذار می‌توانند تحت یک طرح کسب‌وکار واحد درخواست دهند؟",
    a: "Yes. Multiple co-founders can be part of the same corporate project. The business plan must clearly define the executive role of each founder. Each individual must independently prove the required €9,000+ personal financial runway.",
    aFa: "بله. چند هم‌بنیان‌گذار می‌توانند بخشی از یک پروژه‌ی شرکتی واحد باشند. طرح کسب‌وکار باید نقش اجرایی هر بنیان‌گذار را به‌روشنی تعریف کند. هر فرد باید به‌طور مستقل پشتوانه‌ی مالی شخصی موردنیاز ۹٬۰۰۰ یورو به بالا را اثبات کند.",
  },
  {
    q: "What happens to my visa status if my startup fails?",
    qFa: "اگر استارتاپ من شکست بخورد چه بر سر وضعیت ویزای من می‌آید؟",
    a: "Your residence permit will not be instantly revoked. Your legal stay remains valid until the expiration date on your physical TIE card. However, to qualify for renewal, you must demonstrate active economic operation or transition to an alternate residency status.",
    aFa: "مجوز اقامت شما بلافاصله لغو نمی‌شود. اقامت قانونی شما تا تاریخ انقضای روی کارت فیزیکی TIE معتبر می‌ماند. با این حال، برای واجد شرایط شدن برای تمدید، باید فعالیت اقتصادی فعال را نشان دهید یا به یک وضعیت اقامتی جایگزین گذار کنید.",
  },
  {
    q: "Can I take a side job or work for another Spanish company?",
    qFa: "آیا می‌توانم یک شغل جانبی داشته باشم یا برای یک شرکت اسپانیایی دیگر کار کنم؟",
    a: "Your primary legal status is linked to managing your approved startup. However, the Entrepreneur Visa permits secondary employment or consulting work, provided it does not interfere with the growth of your core venture.",
    aFa: "وضعیت قانونی اصلی شما به مدیریت استارتاپ تأییدشده‌تان گره خورده است. با این حال، ویزای کارآفرینی اشتغال ثانویه یا کار مشاوره را مجاز می‌داند، مشروط بر اینکه با رشد کسب‌وکار اصلی شما تداخل نداشته باشد.",
  },
  {
    q: "What are the exact requirements for the private health insurance?",
    qFa: "الزامات دقیق برای بیمه‌ی درمانی خصوصی چیست؟",
    a: "The policy must be contracted with a company authorized to operate in Spain, covering hospitalization, emergencies, and general medicine with no copayments and no deductibles. Travel insurance or standard international policies with deductibles will trigger an immediate application rejection.",
    aFa: "بیمه‌نامه باید با شرکتی که مجاز به فعالیت در اسپانیا است منعقد شود و بستری، اورژانس و پزشکی عمومی را بدون پرداخت مشترک و بدون فرانشیز پوشش دهد. بیمه‌ی مسافرتی یا بیمه‌نامه‌های استاندارد بین‌المللی با فرانشیز موجب رد فوری درخواست می‌شوند.",
  },
  {
    q: "Does Spain allow dual citizenship when I naturalize?",
    qFa: "آیا اسپانیا هنگام تابعیت‌پذیری، تابعیت دوگانه را مجاز می‌داند؟",
    a: "Spain generally requires renouncing your original nationality upon naturalization. However, citizens of Ibero-American countries, Portugal, Andorra, the Philippines, and Equatorial Guinea are legally permitted to retain their original nationality — allowing full dual citizenship.",
    aFa: "اسپانیا عموماً هنگام تابعیت‌پذیری انصراف از تابعیت اصلی را الزامی می‌داند. با این حال، شهروندان کشورهای ایبرو-آمریکایی، پرتغال، آندورا، فیلیپین و گینه‌ی استوایی از نظر قانونی مجازند تابعیت اصلی خود را حفظ کنند — که تابعیت دوگانه‌ی کامل را ممکن می‌سازد.",
  },
  {
    q: "What is a Spanish NIE and how do I get it?",
    qFa: "NIE اسپانیایی چیست و چگونه آن را دریافت کنم؟",
    a: "The NIE (Número de Identidad de Extranjero) is your mandatory tax and legal identification number in Spain. You can secure it through your local Spanish Embassy abroad or via a designated legal representative using a power of attorney directly inside Spain.",
    aFa: "NIE (Número de Identidad de Extranjero) شماره‌ی شناسایی مالیاتی و قانونی الزامی شما در اسپانیا است. می‌توانید آن را از طریق سفارت محلی اسپانیا در خارج از کشور یا از طریق یک نماینده‌ی قانونی تعیین‌شده با استفاده از وکالت‌نامه مستقیماً در داخل اسپانیا دریافت کنید.",
  },
  {
    q: "How long does ENISA take to issue its business evaluation report?",
    qFa: "ENISA چقدر طول می‌کشد تا گزارش ارزیابی کسب‌وکار خود را صادر کند؟",
    a: "The ENISA review takes an average of 30 to 60 days depending on application volume — separate from the UGE's 20-working-day decision window. Nexa structures your full timeline to account for this evaluation window from the start.",
    aFa: "بررسی ENISA بسته به حجم درخواست‌ها به‌طور میانگین ۳۰ تا ۶۰ روز طول می‌کشد — جدا از بازه‌ی تصمیم‌گیری ۲۰ روز کاری UGE. نکسا کل زمان‌بندی شما را از ابتدا برای در نظر گرفتن این بازه‌ی ارزیابی ساختاردهی می‌کند.",
  },
];

export default function FAQs() {
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
        <h2 className="text-2xl font-bold text-center mb-8">{t("Frequently Asked Questions", "پرسش‌های پرتکرار")}</h2>
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
                    alt={isActive ? "Close" : "Open"}
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
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">{t("Frequently Asked Questions", "پرسش‌های پرتکرار")}</h2>
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
                      alt={isActive ? "Close" : "Open"}
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
