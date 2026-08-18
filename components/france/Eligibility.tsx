"use client";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const requirements = [
  {
    num: "A",
    title: "Professional Profile & Background",
    titleFa: "سابقه حرفه‌ای و توانایی اجرایی",
    desc: "No rigid master's degree and no fixed capital floor. Authorities evaluate your <strong>capability to execute the project</strong>. Higher education credentials or <strong>5+ years of verifiable professional experience</strong> significantly reinforce your profile during the innovation review.",
    descFa: "داشتن مدرک کارشناسی ارشد الزامی نیست و حداقل سرمایه ثابتی نیز تعیین نشده است. تمرکز اصلی بر <strong>توانایی شما برای اجرای موفق پروژه</strong> است. مدارک تحصیلی مرتبط یا <strong>حداقل ۵ سال سابقه حرفه‌ای قابل اثبات</strong> می‌تواند در ارزیابی توانمندی شما امتیاز مهمی محسوب شود.",
  },
  {
    num: "B",
    title: "Verification of Project Innovation",
    titleFa: "اثبات نوآورانه بودن پروژه",
    desc: "Secure formal endorsement via one of two tracks: <strong>official selection by an approved incubator</strong> (Station F, Paris-Saclay — typically ~€800/month) or <strong>letters of support from two recognized stakeholders</strong> (Bpifrance, research institutes, deep-tech labs). DRIEETS then issues your 12-month Innovation Certificate.",
    descFa: "برای پروژه باید از یکی از دو مسیر، پشتوانه رسمی دریافت کنید: <strong>پذیرش از یک انکوباتور مورد تأیید</strong> مانند Station F یا Paris-Saclay یا <strong>دریافت نامه حمایت از دو نهاد معتبر</strong> مانند Bpifrance، مؤسسات تحقیقاتی یا آزمایشگاه‌های Deep Tech. پس از تأیید، DRIEETS گواهی نوآوری ۱۲ماهه پروژه را صادر می‌کند.",
  },
  {
    num: "C",
    title: "Personal Financial Self-Sufficiency",
    titleFa: "توانایی مالی شخصی",
    desc: "Liquid funds must equal or exceed the gross annual SMIC: <strong>€21,876.36</strong>. For families, add approximately <strong>€12,000 per dependent</strong>. Acceptable proofs: certified bank statements, founder salary certificates, or VC term sheets earmarked for subsistence.",
    descFa: "باید منابع مالی نقدشونده‌ای معادل حداقل <strong>€۲۱,۸۷۶.۳۶</strong>، برابر با حداقل دستمزد سالانه ناخالص فرانسه (SMIC)، در اختیار داشته باشید. برای اعضای خانواده نیز حدود <strong>€۱۲,۰۰۰ به ازای هر فرد وابسته</strong> به این میزان اضافه می‌شود. مدارک قابل قبول می‌تواند شامل صورت‌حساب بانکی معتبر، گواهی حقوق بنیان‌گذار یا Term Sheet سرمایه‌گذاری باشد که بخشی از آن برای هزینه‌های زندگی در نظر گرفته شده است.",
  },
  {
    num: "+",
    title: "Co-Founders: Up to 3 Per Project",
    titleFa: "امکان اقدام برای هم‌بنیان‌گذاران",
    desc: "Multiple co-founders can apply under the same startup, but <strong>each must independently</strong> secure their own incubator endorsement and demonstrate the full €21,876.36 threshold. Ecosystems generally limit backing to <strong>3 co-founders per project</strong>.",
    descFa: "چند بنیان‌گذار می‌توانند تحت یک استارتاپ اقدام کنند؛ اما <strong>هر نفر باید به‌صورت مستقل</strong> تأییدیه انکوباتور خود را دریافت کرده و حداقل تمکن مالی €۲۱,۸۷۶.۳۶ را نشان دهد. اکوسیستم‌های مورد تأیید معمولاً حداکثر از <strong>۳ هم‌بنیان‌گذار</strong> برای هر پروژه پشتیبانی می‌کنند.",
  },
];

const benefits: { en: string; fa: string }[] = [
  { en: "Up to 4-year continuous residence permit", fa: "اقامت مستمر تا ۴ سال" },
  { en: "Autonomous work authorization — no licensing barriers", fa: "اجازه کار مستقل برای راه‌اندازی و مدیریت کسب‌وکار" },
  { en: 'Spouse receives matching "Talent – Family" permit', fa: "مجوز اقامت مشابه Talent – Family برای همسر" },
  { en: "Spouse has unrestricted French work rights", fa: "حق کار نامحدود برای همسر در فرانسه" },
  { en: "Children study in France without separate documentation", fa: "امکان تحصیل فرزندان بدون تشکیل پرونده جداگانه" },
  { en: "Schengen travel — 90 days per 180-day period", fa: "امکان سفر در منطقه شنگن تا ۹۰ روز در هر دوره ۱۸۰ روزه" },
];

export default function Eligibility() {
  const { t } = useLang();
  return (
    <section className="py-16 md:py-20 bg-[#F7F6F9]">
      <Row>
        <Reveal variant="up" className="text-center mb-10 md:mb-14">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em]">
            {t("Eligibility & Regulatory Criteria", "شرایط و معیارهای اصلی")}
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
                {t("To qualify under the", "برای استفاده از مسیر")}{" "}
                <strong className="text-black font-semibold">
                  {t("“Talent – Innovative Economic Project”", "Talent – Innovative Economic Project")}
                </strong>{" "}
                {t("classification, your application must satisfy three core conditions. Standard trading firms or localized service businesses", "، پروژه شما باید سه شرط اصلی را برآورده کند. کسب‌وکارهای تجاری معمولی یا خدمات محلی در این مسیر")}{" "}
                <strong className="text-black font-semibold">{t("do not qualify", "واجد شرایط نیستند")}</strong>{t("— your venture must introduce genuine innovation to the French market.", "؛ پروژه باید نوآوری واقعی و قابل اثباتی برای بازار فرانسه داشته باشد.")}
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
                  {t("Key Benefits", "مزایای اصلی مجوز")}
                </div>
                <h3 className="text-[17px] font-semibold mb-4">{t("What the permit grants you", "این مجوز چه امکاناتی در اختیار شما قرار می‌دهد؟")}</h3>
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
                  <strong className="text-[#78350F] font-semibold">{t("Innovation is mandatory.", "نوآوری شرط اصلی این مسیر است.")}</strong>{" "}
                  {t("Your project must introduce a novel product, service, process, or organizational method to the French market — verified by DRIEETS via a formal 12-month Innovation Certificate.", "پروژه باید محصول، خدمت، فرآیند یا روش سازمانی جدید و متمایزی را به بازار فرانسه معرفی کند و این نوآوری باید از طریق ارزیابی رسمی DRIEETS و صدور گواهی ۱۲ماهه تأیید شود.")}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Row>
    </section>
  );
}
