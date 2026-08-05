"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const reqs = [
  {
    num: "01",
    title: "Individual Voting Rights Minimum",
    titleFa: "حداقل حق رأی فردی",
    desc: <>Every individual applicant on the team must personally hold a minimum of <strong>10% of the total voting rights</strong> in the corporation at the time of application.</>,
    descFa: <>هر متقاضی فردی در تیم باید شخصاً حداقل <strong>۱۰٪ از کل حق رأی</strong> در شرکت را هنگام درخواست در اختیار داشته باشد.</>,
  },
  {
    num: "02",
    title: "Unified Control Threshold",
    titleFa: "آستانه‌ی کنترل یکپارچه",
    desc: <>The applicants and their designated supporting organization must <strong>jointly hold more than 50%</strong> of the total corporate voting rights. Control must be demonstrable at filing.</>,
    descFa: <>متقاضیان و سازمان پشتیبان تعیین‌شده‌شان باید مشترکاً <strong>بیش از ۵۰٪</strong> از کل حق رأی شرکتی را در اختیار داشته باشند. کنترل باید هنگام ثبت قابل‌اثبات باشد.</>,
  },
  {
    num: "03",
    title: "Simultaneous Group Submission",
    titleFa: "ثبت گروهی هم‌زمان",
    desc: <>If the business is launched by a team, <strong>every co-founder must upload and submit their PR file simultaneously</strong>. IRCC will not begin processing any individual file until all members of the group have submitted. A delay by a single co-founder risks the entire corporate submission.</>,
    descFa: <>اگر کسب‌وکار توسط یک تیم راه‌اندازی شود، <strong>هر هم‌بنیان‌گذار باید پرونده‌ی اقامت دائم خود را به‌طور هم‌زمان بارگذاری و ثبت کند</strong>. IRCC پردازش هیچ پرونده‌ی فردی را تا زمانی که همه‌ی اعضای گروه ثبت نکرده‌اند آغاز نمی‌کند. تأخیر یک هم‌بنیان‌گذار، کل ثبت شرکتی را به خطر می‌اندازد.</>,
  },
  {
    num: "04",
    title: "Onshore Active Management Required",
    titleFa: "مدیریت فعال در محل الزامی",
    desc: <>The essential parts of business operations must take place <strong>within Canada</strong>, and founders must provide active, ongoing management from inside Canadian territory to secure final PR approval.</>,
    descFa: <>بخش‌های اساسی عملیات کسب‌وکار باید <strong>در داخل کانادا</strong> انجام شود، و بنیان‌گذاران باید برای تضمین تأیید نهایی اقامت دائم، مدیریت فعال و مستمر را از داخل قلمرو کانادا ارائه دهند.</>,
  },
  {
    num: "05",
    title: "Geographic Restriction — Quebec Excluded",
    titleFa: "محدودیت جغرافیایی — به‌جز کبک",
    desc: <>The federal Start-Up Visa allows corporate setup <strong>anywhere in Canada except Quebec</strong>, which administers its own distinct business immigration programs.</>,
    descFa: <>ویزای استارتاپ فدرال، راه‌اندازی شرکت را <strong>در هر نقطه‌ی کانادا به‌جز کبک</strong> مجاز می‌داند، که برنامه‌های مهاجرت تجاری متمایز خود را اجرا می‌کند.</>,
  },
];

const benefits: { en: string; fa: string }[] = [
  { en: "Direct permanent residency — not a temporary visa", fa: "اقامت دائم مستقیم — نه یک ویزای موقت" },
  { en: "PR status survives startup failure — no clawback", fa: "وضعیت اقامت دائم پس از شکست استارتاپ باقی می‌ماند — بدون بازپس‌گیری" },
  { en: "Up to 5 co-founders under one venture", fa: "تا ۵ هم‌بنیان‌گذار تحت یک کسب‌وکار" },
  { en: "Full family included with PR status", fa: "کل خانواده با وضعیت اقامت دائم گنجانده می‌شوند" },
  { en: "Citizenship eligible after 3 years physical presence", fa: "واجد شرایط تابعیت پس از ۳ سال حضور فیزیکی" },
  { en: "Dual citizenship fully recognized by Canada", fa: "تابعیت دوگانه به‌طور کامل توسط کانادا به رسمیت شناخته می‌شود" },
];

export default function Eligibility() {
  const { t, lang } = useLang();
  return (
    <section className="py-20 md:py-24 bg-white">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center mb-14">
            {t("Corporate Ownership & Filing Rules", "قواعد مالکیت شرکتی و ثبت")}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

          {/* Left — main requirements */}
          <Reveal variant="up">
            <div className="bg-[#F7F6F9] border border-[#E2E2E2] rounded-[20px] p-11 flex flex-col">
              <p className="text-[16px] text-[#474747] leading-[1.65] mb-8 pb-8 border-b border-[#E2E2E2] [&_strong]:text-black [&_strong]:font-semibold">
                {t("Beyond the Letter of Support, your corporate structure and group filing must satisfy strict statutory thresholds enforced by IRCC at the time of PR application submission.", "فراتر از نامه‌ی پشتیبانی، ساختار شرکتی و ثبت گروهی شما باید آستانه‌های قانونی سختگیرانه‌ای را که توسط IRCC هنگام ثبت درخواست اقامت دائم اعمال می‌شود، برآورده کند.")}
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
                <h3 className="text-[17px] font-semibold text-black mb-4">{t("What PR status grants you", "وضعیت اقامت دائم چه چیزی به شما می‌دهد")}</h3>
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
                  <strong className="text-[#78350F] font-semibold">{t("Program currently paused.", "برنامه در حال حاضر متوقف است.")}</strong> {t("New applications are closed as of January 1, 2026. Only founders with a valid 2025 Commitment Certificate can file — with a hard deadline of", "درخواست‌های جدید از ۱ ژانویه ۲۰۲۶ بسته شده‌اند. تنها بنیان‌گذاران دارای گواهی تعهد معتبر ۲۰۲۵ می‌توانند ثبت کنند — با یک مهلت قطعی")} <strong className="text-[#78350F] font-semibold">{t("June 30, 2026", "۳۰ ژوئن ۲۰۲۶")}</strong>{t(".", ".")}
                </p>
              </div>
            </Reveal>

          </div>

        </div>
      </Row>
    </section>
  );
}
