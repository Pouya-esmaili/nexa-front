"use client";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const requirements = [
  {
    num: "A",
    title: "Professional Profile & Background",
    titleFa: "پروفایل و پیشینه‌ی حرفه‌ای",
    desc: "No rigid master's degree and no fixed capital floor. Authorities evaluate your <strong>capability to execute the project</strong>. Higher education credentials or <strong>5+ years of verifiable professional experience</strong> significantly reinforce your profile during the innovation review.",
    descFa: "بدون الزام سختگیرانه‌ی مدرک کارشناسی ارشد و بدون کف ثابت سرمایه. مقامات <strong>توانایی شما در اجرای پروژه</strong> را ارزیابی می‌کنند. مدارک تحصیلات عالی یا <strong>بیش از ۵ سال تجربه‌ی حرفه‌ای قابل‌تأیید</strong> پروفایل شما را در بازبینی نوآوری به‌طور چشمگیری تقویت می‌کند.",
  },
  {
    num: "B",
    title: "Verification of Project Innovation",
    titleFa: "تأیید نوآوری پروژه",
    desc: "Secure formal endorsement via one of two tracks: <strong>official selection by an approved incubator</strong> (Station F, Paris-Saclay — typically ~€800/month) or <strong>letters of support from two recognized stakeholders</strong> (Bpifrance, research institutes, deep-tech labs). DRIEETS then issues your 12-month Innovation Certificate.",
    descFa: "تأییدیه‌ی رسمی را از یکی از دو مسیر بگیرید: <strong>انتخاب رسمی توسط یک شتاب‌دهنده‌ی تأییدشده</strong> (استیشن F، پاریس‌ساکله — معمولاً حدود ۸۰۰ یورو در ماه) یا <strong>نامه‌های حمایت از دو ذی‌نفع شناخته‌شده</strong> (Bpifrance، مؤسسات پژوهشی، آزمایشگاه‌های دیپ‌تک). سپس DRIEETS گواهی نوآوری ۱۲ ماهه‌ی شما را صادر می‌کند.",
  },
  {
    num: "C",
    title: "Personal Financial Self-Sufficiency",
    titleFa: "خودکفایی مالی شخصی",
    desc: "Liquid funds must equal or exceed the gross annual SMIC: <strong>€21,876.36</strong>. For families, add approximately <strong>€12,000 per dependent</strong>. Acceptable proofs: certified bank statements, founder salary certificates, or VC term sheets earmarked for subsistence.",
    descFa: "دارایی نقدی باید برابر یا بیشتر از حداقل دستمزد ناخالص سالانه‌ی فرانسه (SMIC) باشد: <strong>۲۱٬۸۷۶٫۳۶ یورو</strong>. برای خانواده‌ها، حدود <strong>۱۲٬۰۰۰ یورو به‌ازای هر فرد تحت تکفل</strong> اضافه کنید. مدارک قابل‌قبول: صورت‌حساب‌های بانکی تأییدشده، گواهی حقوق بنیان‌گذار، یا برگه‌های شرایط سرمایه‌گذاری خطرپذیر تخصیص‌یافته برای معیشت.",
  },
  {
    num: "+",
    title: "Co-Founders: Up to 3 Per Project",
    titleFa: "هم‌بنیان‌گذاران: حداکثر ۳ نفر در هر پروژه",
    desc: "Multiple co-founders can apply under the same startup, but <strong>each must independently</strong> secure their own incubator endorsement and demonstrate the full €21,876.36 threshold. Ecosystems generally limit backing to <strong>3 co-founders per project</strong>.",
    descFa: "چند هم‌بنیان‌گذار می‌توانند تحت یک استارتاپ درخواست دهند، اما <strong>هر کدام باید مستقلاً</strong> تأییدیه‌ی شتاب‌دهنده‌ی خود را بگیرند و کل آستانه‌ی ۲۱٬۸۷۶٫۳۶ یورویی را نشان دهند. اکوسیستم‌ها معمولاً حمایت را به <strong>۳ هم‌بنیان‌گذار در هر پروژه</strong> محدود می‌کنند.",
  },
];

const benefits: { en: string; fa: string }[] = [
  { en: "Up to 4-year continuous residence permit", fa: "مجوز اقامت پیوسته تا ۴ سال" },
  { en: "Autonomous work authorization — no licensing barriers", fa: "مجوز کار مستقل — بدون موانع صدور پروانه" },
  { en: 'Spouse receives matching "Talent – Family" permit', fa: "همسر مجوز متناظر «استعداد – خانواده» دریافت می‌کند" },
  { en: "Spouse has unrestricted French work rights", fa: "همسر حق کار نامحدود در فرانسه دارد" },
  { en: "Children study in France without separate documentation", fa: "فرزندان بدون مدارک جداگانه در فرانسه تحصیل می‌کنند" },
  { en: "Schengen travel — 90 days per 180-day period", fa: "سفر شنگن — ۹۰ روز در هر بازه‌ی ۱۸۰ روزه" },
];

export default function Eligibility() {
  const { t } = useLang();
  return (
    <section className="py-16 md:py-20 bg-[#F7F6F9]">
      <Row>
        <Reveal variant="up" className="text-center mb-10 md:mb-14">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em]">
            {t("Eligibility & Regulatory Criteria", "شرایط واجد بودن و معیارهای قانونی")}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Main */}
          <Reveal variant="left" delay={100}>
            <div
              className="bg-white rounded-[20px] p-8 md:p-11 flex flex-col gap-0"
              style={{ border: "1px solid #E2E2E2" }}
            >
              <p className="text-[15px] text-[#474747] leading-[1.65] mb-8 pb-8 border-b border-gray-200">
                {t("To qualify under the", "برای واجد شرایط شدن تحت طبقه‌بندی")}{" "}
                <strong className="text-black font-semibold">
                  {t("“Talent – Innovative Economic Project”", "«استعداد – پروژه‌ی اقتصادی نوآورانه»")}
                </strong>{" "}
                {t("classification, your application must satisfy three core conditions. Standard trading firms or localized service businesses", "، درخواست شما باید سه شرط اصلی را برآورده کند. شرکت‌های تجاری معمولی یا کسب‌وکارهای خدماتی محلی")}{" "}
                <strong className="text-black font-semibold">{t("do not qualify", "واجد شرایط نیستند")}</strong> {t("— your venture must introduce genuine innovation to the French market.", "— کسب‌وکار شما باید نوآوری واقعی به بازار فرانسه بیاورد.")}
              </p>
              {requirements.map((r, i) => (
                <div
                  key={r.num}
                  className="grid gap-5 py-5 border-b border-gray-200 last:border-b-0 transition-all duration-300 hover:pl-1.5"
                  style={{ gridTemplateColumns: "48px 1fr", transitionDelay: `${i * 40}ms` }}
                >
                  <div className="w-12 h-8 rounded-[8px] bg-[#FAF6FF] flex items-center justify-center text-[13px] font-bold text-[#8F27FF] flex-shrink-0">
                    {r.num}
                  </div>
                  <div>
                    <h4 className="text-[16px] font-semibold tracking-[-0.015em] mb-1.5">{t(r.title, r.titleFa)}</h4>
                    <p
                      className="text-[13.5px] text-[#929292] leading-[1.6] m-0 [&_strong]:text-black [&_strong]:font-semibold"
                      dangerouslySetInnerHTML={{ __html: t(r.desc, r.descFa) }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Aside */}
          <div className="flex flex-col gap-4 md:sticky md:top-24">
            <Reveal variant="right" delay={150}>
              <div
                className="rounded-[20px] p-8"
                style={{ background: "#FAF6FF", border: "1px solid rgba(143,39,255,0.18)" }}
              >
                <div
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#8F27FF] uppercase tracking-widest px-3 py-1.5 rounded-full mb-5"
                  style={{ background: "white", border: "1px solid rgba(143,39,255,0.18)" }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                  {t("Key Benefits", "مزایای کلیدی")}
                </div>
                <h3 className="text-[17px] font-semibold mb-4">{t("What the permit grants you", "این مجوز چه چیزی به شما می‌دهد")}</h3>
                <ul className="flex flex-col gap-3">
                  {benefits.map((b, i) => (
                    <li
                      key={b.en}
                      className="flex items-center gap-3 text-[14px] font-medium leading-snug transition-transform duration-200 hover:translate-x-1"
                      style={{ transitionDelay: `${i * 30}ms` }}
                    >
                      <span className="w-[22px] h-[22px] rounded-full bg-[#8F27FF] text-white flex items-center justify-center flex-shrink-0">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-3 h-3">
                          <path d="M5 12l4 4 10-10" />
                        </svg>
                      </span>
                      {t(b.en, b.fa)}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal variant="up" delay={250}>
              <div
                className="rounded-[14px] p-5 flex gap-3.5 items-start"
                style={{ background: "#FFFBEB", border: "1px solid #FDE68A" }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#D97706] flex-shrink-0 mt-0.5">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                <p className="text-[13.5px] text-[#92400E] leading-[1.55] m-0">
                  <strong className="text-[#78350F] font-semibold">{t("Innovation is mandatory.", "نوآوری الزامی است.")}</strong>{" "}
                  {t("Your project must introduce a novel product, service, process, or organizational method to the French market — verified by DRIEETS via a formal 12-month Innovation Certificate.", "پروژه‌ی شما باید محصول، خدمت، فرایند یا روش سازمانی نوینی به بازار فرانسه معرفی کند — که توسط DRIEETS از طریق گواهی نوآوری رسمی ۱۲ ماهه تأیید می‌شود.")}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Row>
    </section>
  );
}
