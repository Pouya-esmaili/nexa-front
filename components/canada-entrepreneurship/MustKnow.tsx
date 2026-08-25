"use client";

import Row from "@/components/global/Row";
import { useLang } from "@/components/global/LanguageProvider";

const cards = [
  {
    num: "01",
    title: "Federal SUV Closure Reshapes the Landscape",
    titleFa: "تغییرات برنامه فدرال، مسیرها را دگرگون کرده است",
    desc: "With federal Start-Up Visa intake controls in effect, serious entrepreneurs are now relying on Provincial Nominee Programs or Quebec's independent streams. The center of gravity has fully shifted.",
    descFa: "با اعمال محدودیت‌های جدید بر پذیرش پرونده‌های Start-Up Visa در سطح فدرال، کارآفرینان جدی بیش از گذشته به برنامه‌های نامزدی استانی (PNP) یا مسیرهای مستقل استان کبک روی آورده‌اند. در نتیجه، تمرکز مسیرهای کارآفرینی عملاً به سمت برنامه‌های استانی تغییر کرده است.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Performance Milestones Are Non-Negotiable",
    titleFa: "تعهدات عملکردی قابل مذاکره نیستند",
    desc: "Every provincial program enforces specific investment and operational milestones. Falling short of any threshold can void your nomination — regardless of intent or capital deployed.",
    descFa: "هر برنامه استانی مجموعه‌ای مشخص از الزامات سرمایه‌گذاری و عملکردی دارد که باید به‌طور کامل محقق شوند. عدم تحقق هر یک از این الزامات می‌تواند نامزدی استانی را به خطر بیندازد؛ حتی اگر سرمایه موردنظر وارد کسب‌وکار شده باشد.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Local Alignment Outweighs Capital",
    titleFa: "تناسب با اقتصاد محلی، از میزان سرمایه مهم‌تر است",
    desc: "A generic business plan rarely succeeds. Your venture must align tightly with the province's economic objectives — sector priorities, regional impact, and long-term sustainability.",
    descFa: "یک طرح کسب‌وکار عمومی و بدون ارتباط با اولویت‌های استان، معمولاً شانس بالایی ندارد. کسب‌وکار شما باید با اهداف اقتصادی استان هم‌راستا باشد؛ از اولویت‌های بخش‌های اقتصادی و تأثیرگذاری منطقه‌ای گرفته تا ظرفیت ایجاد ارزش و تداوم فعالیت در بلندمدت.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Documentation Determines Outcomes",
    titleFa: "کیفیت مدارک، نتیجه پرونده را رقم می‌زند",
    desc: "Immigration law evolves continuously. Even minor documentation errors can trigger refusals — the regulatory environment leaves little room for ambiguity or improvisation.",
    descFa: "قوانین و الزامات مهاجرتی دائماً در حال تغییر هستند. حتی اشتباهات جزئی در مستندات می‌توانند به رد پرونده منجر شوند؛ در چنین محیطی، دقت در مدارک و انطباق کامل با الزامات قانونی اهمیت بسیار بالایی دارد و جایی برای ابهام یا تصمیم‌گیری‌های بدون پشتوانه باقی نمی‌گذارد.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="15" x2="15" y2="15" />
      </svg>
    ),
  },
];

export default function MustKnow() {
  const { t, lang } = useLang();
  const textDir = lang === "fa" ? "rtl" : "ltr";
  return (
    <section className="py-16 md:py-[110px] bg-black relative overflow-hidden">
      <div
        className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(143,39,255,0.18), transparent 60%)" }}
      />

      {/* ========== MOBILE ========== */}
      <div className="md:hidden relative z-10 px-5">
        <h2 className="text-3xl font-bold text-white tracking-tight text-center mb-8">
          {t("What Every Entrepreneur Must Know", "آنچه باید بدانید")}
        </h2>
        <div className="flex flex-col gap-4">
          {cards.map((c) => (
            <div
              key={c.num}
              dir="ltr"
              className="rounded-2xl p-6 relative overflow-hidden"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div
                className="absolute top-4 right-5 text-[52px] font-extrabold pointer-events-none leading-none"
                style={{ color: "rgba(255,255,255,0.12)" }}
              >
                {c.num}
              </div>
              <div
                className="inline-flex w-11 h-11 rounded-xl items-center justify-center text-[#8F27FF] mb-4"
                style={{ background: "rgba(143,39,255,0.15)", border: "1px solid rgba(143,39,255,0.3)" }}
              >
                {c.icon}
              </div>
              <h3 dir={textDir} className="text-lg font-semibold text-white mb-3 relative z-10">{t(c.title, c.titleFa)}</h3>
              <p dir={textDir} className="text-sm leading-relaxed relative z-10" style={{ color: "rgba(255,255,255,0.7)" }}>{t(c.desc, c.descFa)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ========== DESKTOP ========== */}
      <div className="hidden md:block relative z-10">
        <Row>
          <h2 className="text-4xl font-bold text-white tracking-tight text-center mb-14">
            {t("What Every Entrepreneur Must Know", "آنچه باید بدانید")}
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {cards.map((c) => (
              <div
                key={c.num}
                dir="ltr"
                className="rounded-[20px] p-9 relative overflow-hidden transition-all hover:-translate-y-1 hover:border-[#8F27FF] group"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="absolute top-5 right-7 text-[76px] font-extrabold pointer-events-none leading-none"
                  style={{ color: "rgba(255,255,255,0.1)" }}
                >
                  {c.num}
                </div>
                <div
                  className="inline-flex w-[50px] h-[50px] rounded-xl items-center justify-center text-[#8F27FF] mb-5"
                  style={{ background: "rgba(143,39,255,0.15)", border: "1px solid rgba(143,39,255,0.3)" }}
                >
                  {c.icon}
                </div>
                <h3 dir={textDir} className="text-[22px] font-semibold text-white mb-3 tracking-tight relative z-10">{t(c.title, c.titleFa)}</h3>
                <p dir={textDir} className="text-[14.5px] leading-[1.65] relative z-10" style={{ color: "rgba(255,255,255,0.7)" }}>{t(c.desc, c.descFa)}</p>
              </div>
            ))}
          </div>
        </Row>
      </div>

    </section>
  );
}
