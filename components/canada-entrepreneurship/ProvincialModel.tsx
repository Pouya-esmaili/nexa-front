"use client";

import Row from "@/components/global/Row";
import { useLang } from "@/components/global/LanguageProvider";

const steps = [
  {
    title: "Submit Business Concept",
    titleFa: "ارائه طرح کسب‌وکار",
    desc: "Submit an Expression of Interest (EOI) to your target province. You're scored on investment capacity, experience, and sector fit.",
    descFa: "ابراز علاقه‌مندی (EOI) خود را به استان موردنظر ارسال کنید. عواملی مانند توانایی سرمایه‌گذاری، سابقه و تجربه مدیریتی و تناسب کسب‌وکار با اولویت‌های استان در ارزیابی شما لحاظ می‌شود.",
  },
  {
    title: "Performance Agreement",
    titleFa: "توافق‌نامه عملکرد",
    desc: "If invited, sign a performance agreement outlining your investment, job creation, and operational commitments.",
    descFa: "در صورت دریافت دعوت‌نامه، توافق‌نامه‌ای را امضا می‌کنید که تعهدات شما در زمینه سرمایه‌گذاری، ایجاد اشتغال و راه‌اندازی و اداره کسب‌وکار را مشخص می‌کند.",
  },
  {
    title: "Work Permit & Entry",
    titleFa: "دریافت مجوز کار و ورود به کانادا",
    desc: "Enter Canada on a province-backed work permit and begin establishing your business.",
    descFa: "با دریافت مجوز کار مورد حمایت استان وارد کانادا می‌شوید و فرآیند راه‌اندازی کسب‌وکار خود را آغاز می‌کنید.",
  },
  {
    title: "Operate & Deliver",
    titleFa: "راه‌اندازی و اجرای کسب‌وکار",
    desc: "Run the business actively for 12–20 months, meeting capital, hiring, and milestone requirements.",
    descFa: "برای یک دوره مشخص، کسب‌وکار را به‌صورت فعال اداره می‌کنید و تعهدات مربوط به سرمایه‌گذاری، استخدام نیرو و تحقق اهداف تعیین‌شده را به انجام می‌رسانید.",
  },
  {
    title: "Provincial Nomination → PR",
    titleFa: "نامزدی استانی ← اقامت دائم",
    desc: "Upon meeting all milestones, the province nominates you. Federal PR processing follows.",
    descFa: "پس از تحقق الزامات و اهداف تعیین‌شده، استان شما را برای اقامت دائم نامزد می‌کند و پس از آن، بررسی درخواست اقامت دائم در سطح فدرال انجام خواهد شد.",
  },
];

export default function ProvincialModel() {
  const { t } = useLang();
  return (
    <section className="py-16 md:py-24" style={{ background: "#F7F6F9" }}>

      {/* ========== MOBILE ========== */}
      <div className="md:hidden px-5">
        <h2 className="text-3xl font-bold tracking-tight mb-3">{t("The Provincial Model", "مدل استانی")}</h2>
        <p className="text-sm text-gray-500 leading-relaxed mb-8">
          {t("Canada's entrepreneur pathways are performance-based. Each province sets its own investment thresholds, sector priorities, and operating requirements.", "مسیرهای کارآفرینی کانادا عملکردمحور هستند. هر استان الزامات، حداقل سرمایه‌گذاری، اولویت‌های بخش‌های اقتصادی و شرایط عملیاتی خاص خود را تعیین می‌کند؛ بنابراین تمرکز این برنامه‌ها بر کارآفرینانی است که یک کسب‌وکار واقعی ایجاد و اداره می‌کنند.")}
        </p>
        <div className="relative pl-10">
          <div className="absolute top-2 bottom-2 left-4 w-0.5 bg-[#8F27FF]/30" />
          {steps.map((s, i) => (
            <div key={i} className="relative pb-7 last:pb-0">
              <div
                className="absolute -left-10 w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs font-bold text-[#8F27FF]"
                style={{ border: "2px solid #8F27FF", boxShadow: "0 0 0 4px #FAF6FF" }}
              >
                {i + 1}
              </div>
              <h4 className="font-semibold text-black mb-1">{t(s.title, s.titleFa)}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{t(s.desc, s.descFa)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ========== DESKTOP ========== */}
      <div className="hidden md:block">
        <Row>
          <div className="grid grid-cols-2 gap-20 items-start">

            {/* Left - sticky lead */}
            <div className="sticky top-24">
              <h2 className="text-[40px] font-bold tracking-tight mb-6">{t("The Provincial Model", "مدل استانی")}</h2>
              <blockquote
                className="text-[21px] italic font-medium leading-[1.5] py-5 pl-6 mb-5 text-black"
                style={{ borderLeft: "3px solid #8F27FF" }}
              >
                &ldquo;{t("This model rewards", "در این مدل، آنچه اهمیت دارد")}{" "}
                <span className="text-[#8F27FF] font-semibold not-italic">{t("execution", "اجرای واقعی کسب‌وکار")}</span>
                {" "}{t("— not just investment.", "است، نه صرفاً سرمایه‌گذاری.")}&rdquo;
              </blockquote>
              <p className="text-[15px] text-gray-500 leading-[1.7]">
                {t("Canada's entrepreneur pathways are performance-based. Each province sets its own investment thresholds, sector priorities, and operating requirements — rewarding entrepreneurs who build real businesses, not just deploy capital.", "مسیرهای کارآفرینی کانادا عملکردمحور هستند. هر استان الزامات، حداقل سرمایه‌گذاری، اولویت‌های بخش‌های اقتصادی و شرایط عملیاتی خاص خود را تعیین می‌کند؛ بنابراین تمرکز این برنامه‌ها بر کارآفرینانی است که یک کسب‌وکار واقعی ایجاد و اداره می‌کنند.")}
              </p>
            </div>

            {/* Right - steps with vertical line */}
            <div className="relative pl-[52px]">
              <div
                className="absolute top-5 bottom-5 left-5 w-0.5 rounded"
                style={{ background: "linear-gradient(180deg, #8F27FF 0%, rgba(143,39,255,0.15) 100%)" }}
              />
              {steps.map((s, i) => (
                <div key={i} className="relative pb-8 last:pb-0 group hover:translate-x-1 transition-transform">
                  <div
                    className="absolute -left-[52px] w-[42px] h-[42px] rounded-full bg-white flex items-center justify-center text-sm font-bold text-[#8F27FF] transition-all group-hover:bg-[#8F27FF] group-hover:text-white"
                    style={{
                      border: "2px solid #8F27FF",
                      boxShadow: "0 0 0 5px #FAF6FF, 0 4px 12px rgba(143,39,255,0.12)",
                    }}
                  >
                    {i + 1}
                  </div>
                  <h4 className="font-semibold text-black mb-1.5 pt-2">{t(s.title, s.titleFa)}</h4>
                  <p className="text-[14px] text-gray-500 leading-relaxed">{t(s.desc, s.descFa)}</p>
                </div>
              ))}
            </div>

          </div>
        </Row>
      </div>

    </section>
  );
}
