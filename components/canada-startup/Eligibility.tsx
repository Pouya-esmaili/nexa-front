"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const reqs = [
  {
    num: "01",
    title: "Individual Voting Rights Minimum",
    titleFa: "حداقل حق رأی هر متقاضی",
    desc: <>Every individual applicant on the team must personally hold a minimum of <strong>10% of the total voting rights</strong> in the corporation at the time of application.</>,
    descFa: <>هر یک از اعضای تیم که به‌عنوان متقاضی اقدام می‌کند، باید شخصاً حداقل <strong>۱۰٪ از کل حق رأی</strong> شرکت را در زمان ارائه درخواست در اختیار داشته باشد.</>,
  },
  {
    num: "02",
    title: "Unified Control Threshold",
    titleFa: "شرط کنترل اکثریت",
    desc: <>The applicants and their designated supporting organization must <strong>jointly hold more than 50%</strong> of the total corporate voting rights. Control must be demonstrable at filing.</>,
    descFa: <>متقاضیان و سازمان تعیین‌شده حامی آنها باید در مجموع <strong>بیش از ۵۰٪</strong> حق رأی شرکت را در اختیار داشته باشند. این میزان کنترل باید در زمان ثبت پرونده قابل اثبات باشد.</>,
  },
  {
    num: "03",
    title: "Simultaneous Group Submission",
    titleFa: "ثبت هم‌زمان درخواست اعضای گروه",
    desc: <>If the business is launched by a team, <strong>every co-founder must upload and submit their PR file simultaneously</strong>. IRCC will not begin processing any individual file until all members of the group have submitted. A delay by a single co-founder risks the entire corporate submission.</>,
    descFa: <>اگر کسب‌وکار توسط یک تیم راه‌اندازی شده باشد، <strong>تمام هم‌بنیان‌گذاران باید پرونده اقامت دائم خود را به‌صورت هم‌زمان ارائه کنند</strong>. IRCC تا زمانی که همه اعضای گروه پرونده خود را ثبت نکرده باشند، بررسی پرونده‌های فردی را آغاز نمی‌کند.</>,
  },
  {
    num: "04",
    title: "Onshore Active Management Required",
    titleFa: "الزام به مدیریت فعال از داخل کانادا",
    desc: <>The essential parts of business operations must take place <strong>within Canada</strong>, and founders must provide active, ongoing management from inside Canadian territory to secure final PR approval.</>,
    descFa: <>بخش اصلی فعالیت‌های کسب‌وکار باید <strong>در داخل کانادا</strong> انجام شود و بنیان‌گذاران باید مدیریت فعال و مستمر کسب‌وکار را از داخل کانادا بر عهده داشته باشند.</>,
  },
  {
    num: "05",
    title: "Geographic Restriction — Quebec Excluded",
    titleFa: "محدودیت جغرافیایی؛ کبک",
    desc: <>The federal Start-Up Visa allows corporate setup <strong>anywhere in Canada except Quebec</strong>, which administers its own distinct business immigration programs.</>,
    descFa: <>برنامه فدرال ویزای استارتاپ امکان راه‌اندازی کسب‌وکار را <strong>در سراسر کانادا</strong> فراهم می‌کند، به‌جز کبک که سیستم مستقل خود را برای مهاجرت تجاری دارد.</>,
  },
];

const benefits: { en: string; fa: string }[] = [
  { en: "Direct permanent residency — not a temporary visa", fa: "دریافت مستقیم اقامت دائم، نه ویزای موقت" },
  { en: "PR status survives startup failure — no clawback", fa: "مستقل بودن وضعیت PR از موفقیت یا شکست استارتاپ" },
  { en: "Up to 5 co-founders under one venture", fa: "امکان حضور حداکثر ۵ هم‌بنیان‌گذار در یک کسب‌وکار" },
  { en: "Full family included with PR status", fa: "برخورداری اعضای خانواده از وضعیت اقامت دائم" },
  { en: "Citizenship eligible after 3 years physical presence", fa: "امکان اقدام برای تابعیت پس از ۳ سال حضور فیزیکی واجد شرایط" },
  { en: "Dual citizenship fully recognized by Canada", fa: "امکان حفظ تابعیت دوگانه مطابق قوانین کانادا" },
];

export default function Eligibility() {
  const { t, lang } = useLang();
  return (
    <section className="py-20 md:py-24 bg-white">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center mb-14">
            {t("Corporate Ownership & Filing Rules", "ساختار مالکیت و الزامات ثبت پرونده")}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

          {/* Left — main requirements */}
          <Reveal variant="up">
            <div className="bg-[#F7F6F9] border border-[#E2E2E2] rounded-[20px] p-11 flex flex-col">
              <p className="text-[16px] text-[#474747] leading-[1.65] mb-8 pb-8 border-b border-[#E2E2E2] [&_strong]:text-black [&_strong]:font-semibold">
                {t("Beyond the Letter of Support, your corporate structure and group filing must satisfy strict statutory thresholds enforced by IRCC at the time of PR application submission.", "علاوه بر Letter of Support، ساختار مالکیت شرکت و نحوه ارائه گروهی پرونده نیز باید در زمان درخواست اقامت دائم با الزامات قانونی IRCC مطابقت داشته باشد.")}
              </p>
              {reqs.map((r, i) => (
                <div key={r.num}
                  className={`grid grid-cols-[48px_1fr] gap-5 items-start py-5 transition-all duration-200 hover:pl-1.5 ${i < reqs.length - 1 ? "border-b border-[#E2E2E2]" : ""}`}>
                  <div className="w-12 h-8 bg-[#FAF6FF] rounded-[8px] flex items-center justify-center text-[13px] font-bold text-[#8F27FF] flex-shrink-0">
                    {r.num}
                  </div>
                  <div>
                    <h4 className="text-[16px] font-semibold text-black mb-1.5">{t(r.title, r.titleFa)}</h4>
                    <p className="text-[13.5px] text-[#929292] leading-[1.6] m-0 [&_strong]:text-black [&_strong]:font-semibold">{lang === "fa" ? r.descFa : r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right — aside sticky */}
          <div className="flex flex-col gap-4 md:sticky md:top-[100px]">

            <Reveal variant="up" delay={80}>
              {/* Benefits card */}
              <div className="rounded-[20px] p-8" style={{ background: "#FAF6FF", border: "1px solid rgba(143,39,255,0.18)" }}>
                <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#8F27FF] uppercase tracking-[0.1em] px-3 py-1.5 bg-white rounded-full mb-5"
                  style={{ border: "1px solid rgba(143,39,255,0.18)" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M5 12l4 4 10-10"/></svg>
                  {t("Program Benefits", "مزایای برنامه")}
                </div>
                <h3 className="text-[17px] font-semibold text-black mb-4">{t("What PR status grants you", "اقامت دائم چه امکاناتی در اختیار شما قرار می‌دهد؟")}</h3>
                <ul className="flex flex-col gap-3">
                  {benefits.map((b) => (
                    <li key={b.en} className="flex items-center gap-3 text-[14px] font-medium text-black leading-[1.45]">
                      <span className="w-[22px] h-[22px] rounded-full bg-[#8F27FF] text-white flex items-center justify-center flex-shrink-0">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" className="w-3 h-3"><path d="M5 12l4 4 10-10"/></svg>
                      </span>
                      {t(b.en, b.fa)}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal variant="up" delay={160}>
              {/* Warning */}
              <div className="rounded-[14px] p-5 flex gap-3.5 items-start" style={{ background: "#FFFBEB", border: "1px solid #FDE68A" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#D97706] flex-shrink-0 mt-0.5">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                  <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
                <p className="text-[13.5px] text-[#92400E] leading-[1.55] m-0">
                  <strong className="text-[#78350F] font-semibold">{t("Program currently paused.", "وضعیت فعلی برنامه:")}</strong>{" "}
                  {lang === "fa"
                    ? "پذیرش درخواست‌های جدید از ۱ ژانویه ۲۰۲۶ متوقف شده است. در حال حاضر تنها بنیان‌گذارانی که Commitment Certificate معتبر مربوط به سال ۲۰۲۵ دارند، می‌توانند در چارچوب مهلت تعیین‌شده اقدام کنند."
                    : <>New applications are closed as of January 1, 2026. Only founders with a valid 2025 Commitment Certificate can file — with a hard deadline of <strong className="text-[#78350F] font-semibold">June 30, 2026</strong>.</>}
                </p>
              </div>
            </Reveal>

          </div>

        </div>
      </Row>
    </section>
  );
}
