"use client";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const coreReqs = [
  {
    num: "01",
    title: "Innovation",
    titleFa: "نوآوری",
    desc: 'A genuine, original business plan that meets new or existing market needs with a <strong>distinct competitive advantage</strong>. The concept cannot be easily replicable by a UK competitor.',
    descFa: 'باید یک ایده کسب‌وکار واقعی و متمایز داشته باشید که بتواند نیاز جدید یا موجودی را در بازار هدف برطرف کند و از <strong>مزیت رقابتی مشخصی</strong> برخوردار باشد. ایده نباید به‌سادگی توسط یک رقیب در بریتانیا قابل کپی‌برداری باشد.',
  },
  {
    num: "02",
    title: "Viability",
    titleFa: "قابلیت اجرا",
    desc: 'Realistic and achievable based on your current resources. You must actively demonstrate the <strong>specific skills, technical knowledge, and market awareness</strong> required to run the operations.',
    descFa: 'مدل کسب‌وکار باید با منابع و شرایط فعلی شما واقع‌بینانه و قابل اجرا باشد. همچنین باید نشان دهید از <strong>مهارت، دانش تخصصی و شناخت بازار</strong> لازم برای مدیریت و توسعه کسب‌وکار برخوردارید.',
  },
  {
    num: "03",
    title: "Scalability",
    titleFa: "مقیاس‌پذیری",
    desc: 'Concrete evidence of structured growth planning, <strong>potential for job creation</strong>, and a realistic pathway to national or international market penetration.',
    descFa: 'باید یک مسیر روشن برای <strong>رشد کسب‌وکار، ایجاد اشتغال</strong> و ورود به بازارهای ملی یا بین‌المللی ارائه دهید؛ نه صرفاً مدلی که در مقیاس محدود محلی فعالیت کند.',
  },
];

const legalReqs = [
  {
    num: "04",
    title: "Age & Active Ownership",
    titleFa: "سن و نقش فعال در کسب‌وکار",
    desc: 'Must be at least <strong>18 years old</strong> and a primary founder or instrumental member of the founding team, maintaining a <strong>key, day-to-day role</strong> in managing the business.',
    descFa: 'حداقل <strong>۱۸ سال</strong> سن داشته باشید و به‌عنوان بنیان‌گذار اصلی یا یکی از اعضای کلیدی تیم مؤسس، <strong>نقش مستقیم و روزمره‌ای</strong> در مدیریت کسب‌وکار ایفا کنید.',
  },
  {
    num: "05",
    title: "English Proficiency",
    titleFa: "تسلط به زبان انگلیسی",
    desc: 'Must demonstrate a confident, independent command of English at minimum <strong>Level B2 (CEFR)</strong> across reading, writing, listening, and speaking.',
    descFa: 'باید حداقل <strong>سطح B2</strong> بر اساس CEFR را در هر چهار مهارت خواندن، نوشتن، شنیدن و مکالمه اثبات کنید.',
  },
];

const benefits: { en: string; fa: string }[] = [
  { en: "3-year initial visa with ILR eligibility", fa: "ویزای اولیه ۳ ساله با امکان اقدام برای ILR" },
  { en: "No mandatory £50,000 capital investment", fa: "بدون الزام به سرمایه‌گذاری ثابت ۵۰,۰۰۰ پوند" },
  { en: "Secondary skilled employment permitted", fa: "امکان اشتغال جانبی در مشاغل واجد شرایط" },
  { en: "Spouse receives full UK work rights", fa: "حق کار کامل برای همسر" },
  { en: "Children enroll in British schools unconditionally", fa: "امکان تحصیل فرزندان در مدارس بریتانیا" },
  { en: "Can switch from inside UK on valid visa", fa: "امکان تغییر مسیر از داخل بریتانیا در صورت داشتن ویزای معتبر" },
];

export default function Eligibility() {
  const { t } = useLang();
  return (
    <section className="py-16 md:py-20 bg-[#F7F6F9]">
      <Row>
        <Reveal variant="up" className="text-center mb-10 md:mb-14">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em]">
            {t("Core Eligibility & Scrutiny Criteria", "شرایط اصلی و معیارهای ارزیابی")}
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
                {t("Your venture cannot be a standard trading firm or local service agency. The Home Office subjects every applicant to evaluation by a Home Office-authorized", "کسب‌وکار شما نمی‌تواند صرفاً یک شرکت تجاری معمولی یا ارائه‌دهنده خدمات محلی باشد. پرونده توسط یک")}{" "}
                <strong className="text-black font-semibold">{t("Endorsing Body", "Endorsing Body")}</strong>{" "}
                {t("against three strict pillars — and additional legal baselines.", "مورد تأیید Home Office بر اساس سه معیار اصلی و چند شرط قانونی بررسی می‌شود.")}
              </p>

              <p className="text-[12px] font-bold text-[#929292] uppercase tracking-[.1em] mt-2 mb-4">
                {t("The “Innovative, Viable & Scalable” Assessment", "ارزیابی بر اساس سه اصل «نوآور، قابل اجرا و مقیاس‌پذیر»")}
              </p>
              {coreReqs.map((r, i) => (
                <div
                  key={r.num}
                  className="grid gap-5 py-5 border-b border-gray-200 transition-all duration-300 hover:pl-1.5"
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

              <p className="text-[12px] font-bold text-[#929292] uppercase tracking-[.1em] mt-6 mb-4">
                {t("Additional Legal Baselines", "سایر الزامات قانونی")}
              </p>
              {legalReqs.map((r, i) => (
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
                  {t("What You Get", "مزایای ویزا")}
                </div>
                <h3 className="text-[17px] font-semibold mb-4">{t("Key permit rights", "این ویزا چه امکاناتی در اختیار شما قرار می‌دهد؟")}</h3>
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
                  <strong className="text-[#78350F] font-semibold">{t("Old Start-up Visa is closed.", "Start-up Visa قدیمی بسته شده است.")}</strong>{" "}
                  {t("The standalone UK Start-up Visa has been officially closed to new applicants. All founders must now apply under the Innovator Founder Visa framework.", "این مسیر دیگر برای متقاضیان جدید قابل استفاده نیست و بنیان‌گذاران باید از مسیر Innovator Founder Visa اقدام کنند.")}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Row>
    </section>
  );
}
