"use client";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const requirements = [
  {
    num: "01",
    title: "A Team of At Least 2 Founders",
    titleFa: "تیمی متشکل از حداقل ۲ بنیان‌گذار",
    desc: "You cannot apply as a solo entrepreneur. Your founding team must have at least two people moving to Finland who together hold <strong>at least 60% ownership</strong> of the company.",
    descFa: "نمی‌توانید به‌عنوان کارآفرین منفرد درخواست دهید. تیم مؤسس شما باید حداقل دو نفر داشته باشد که به فنلاند مهاجرت می‌کنند و روی‌هم <strong>حداقل ۶۰٪ مالکیت</strong> شرکت را در اختیار دارند.",
  },
  {
    num: "02",
    title: "An Innovative Global Idea",
    titleFa: "ایده‌ای جهانی و نوآورانه",
    desc: "Your product or service must have a clear competitive advantage in <strong>international markets</strong> — capable of rapid scaling to global reach and high revenue. Not a local replica.",
    descFa: "محصول یا خدمت شما باید مزیت رقابتی روشنی در <strong>بازارهای بین‌المللی</strong> داشته باشد — قادر به مقیاس‌پذیری سریع تا گستره‌ی جهانی و درآمد بالا. نه یک نسخه‌ی محلی.",
  },
  {
    num: "03",
    title: "Business Finland \"Green Light\"",
    titleFa: "«چراغ سبز» Business Finland",
    desc: "Before any visa application, the official government agency <strong>Business Finland</strong> must evaluate and approve your business plan, issuing an Eligibility Statement valid for 4 months.",
    descFa: "پیش از هر درخواست ویزا، آژانس رسمی دولتی <strong>Business Finland</strong> باید طرح کسب‌وکار شما را ارزیابی و تأیید کند و بیانیه‌ی واجد بودن معتبر برای ۴ ماه صادر کند.",
  },
  {
    num: "04",
    title: "Proven Financial Self-Sufficiency",
    titleFa: "خودکفایی مالی اثبات‌شده",
    desc: "You must demonstrate liquid personal savings sufficient to cover your cost of living for at least your <strong>first year in Finland</strong>. No public financial aid is provided to founders.",
    descFa: "باید پس‌انداز نقدی شخصی کافی برای پوشش هزینه‌ی زندگی خود دست‌کم در <strong>سال نخست در فنلاند</strong> نشان دهید. هیچ کمک مالی دولتی به بنیان‌گذاران ارائه نمی‌شود.",
  },
];

const benefits: { en: string; fa: string }[] = [
  { en: "2-year continuous residence permit", fa: "مجوز اقامت پیوسته‌ی ۲ ساله" },
  { en: "Legal right to incorporate a company in Finland", fa: "حق قانونی ثبت شرکت در فنلاند" },
  { en: "Freedom to travel across all 27 Schengen countries", fa: "آزادی سفر در تمام ۲۷ کشور شنگن" },
  { en: "Spouse gets unrestricted Finnish work rights", fa: "همسر حق کار نامحدود فنلاند را دریافت می‌کند" },
  { en: "Optional side employment to supplement income", fa: "اشتغال جانبی اختیاری برای تکمیل درآمد" },
  { en: "Direct pathway to EU Permanent Residency & Passport", fa: "مسیر مستقیم به اقامت دائم و پاسپورت اتحادیه اروپا" },
];

export default function Eligibility() {
  const { t } = useLang();
  return (
    <section className="py-16 md:py-20 bg-[#F7F6F9]">
      <Row>
        <Reveal variant="up" className="mb-10 md:mb-14">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em]">
            {t("The 4 Strict Eligibility Requirements", "۴ شرط سختگیرانه‌ی واجد بودن")}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

          {/* Main requirements */}
          <Reveal variant="left" delay={100}>
            <div className="bg-white border border-gray-200 rounded-[20px] p-10 flex flex-col">
              <p className="text-[16px] text-[#474747] leading-[1.65] mb-8 pb-8 border-b border-gray-200">
                {t("Finland has a highly specific definition of what constitutes a “startup.” Traditional lifestyle businesses — a local restaurant, consulting firm, retail shop, or import/export agency —", "فنلاند تعریفی بسیار مشخص از آنچه یک «استارتاپ» را می‌سازد دارد. کسب‌وکارهای سبک زندگی سنتی — یک رستوران محلی، شرکت مشاوره، فروشگاه خرده‌فروشی یا آژانس واردات/صادرات —")}{" "}
                <strong className="text-black font-semibold">{t("do not qualify.", "واجد شرایط نیستند.")}</strong>
              </p>
              <div className="flex flex-col">
                {requirements.map((r, i) => (
                  <div
                    key={r.num}
                    className="grid grid-cols-[48px_1fr] gap-5 items-start py-5 border-b border-gray-200 last:border-b-0 transition-all duration-300 hover:pl-1.5"
                    style={{ transitionDelay: `${i * 40}ms` }}
                  >
                    <div
                      className="w-12 h-8 rounded-lg flex items-center justify-center text-[13px] font-bold text-[#8F27FF] flex-shrink-0"
                      style={{ background: "#FAF6FF" }}
                    >
                      {r.num}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[16px] mb-1.5 tracking-[-0.015em]">{t(r.title, r.titleFa)}</h4>
                      <p
                        className="text-[13.5px] text-gray-500 leading-relaxed m-0"
                        dangerouslySetInnerHTML={{ __html: t(r.desc, r.descFa).replace(/<strong>/g, '<strong class="text-black font-semibold">') }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Aside */}
          <div className="flex flex-col gap-4 lg:sticky lg:top-24">
            <Reveal variant="right" delay={150}>
              {/* Benefits card */}
              <div
                className="rounded-[20px] p-8"
                style={{ background: "#FAF6FF", border: "1px solid rgba(143,39,255,0.18)" }}
              >
                <div
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#8F27FF] uppercase tracking-widest px-3 py-1.5 bg-white rounded-full mb-5"
                  style={{ border: "1px solid rgba(143,39,255,0.18)" }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M5 12l4 4 10-10"/></svg>
                  {t("Key Benefits", "مزایای کلیدی")}
                </div>
                <h3 className="font-semibold text-[17px] mb-4 tracking-[-0.02em]">{t("What you get with the permit", "با این مجوز چه چیزی به دست می‌آورید")}</h3>
                <ul className="flex flex-col gap-3">
                  {benefits.map((b, i) => (
                    <li
                      key={b.en}
                      className="flex items-center gap-3 text-[14px] font-medium text-black leading-snug transition-transform duration-200 hover:translate-x-1"
                      style={{ transitionDelay: `${i * 30}ms` }}
                    >
                      <span
                        className="w-[22px] h-[22px] rounded-full flex items-center justify-center flex-shrink-0 text-white"
                        style={{ background: "#8F27FF" }}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" className="w-3 h-3">
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
              {/* Warning */}
              <div
                className="rounded-[14px] p-5 flex gap-3.5 items-start"
                style={{ background: "#FFFBEB", border: "1px solid #FDE68A" }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                  <line x1="12" y1="9" x2="12" y2="13"/>
                  <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
                <p className="text-[13.5px] leading-[1.55] m-0" style={{ color: "#92400E" }}>
                  <strong style={{ color: "#78350F", fontWeight: 600 }}>{t("Important:", "مهم:")}</strong> {t("Traditional lifestyle businesses do not qualify. Your venture must demonstrate clear international scalability — not just local viability.", "کسب‌وکارهای سبک زندگی سنتی واجد شرایط نیستند. کسب‌وکار شما باید مقیاس‌پذیری بین‌المللی روشنی نشان دهد — نه فقط دوام محلی.")}
                </p>
              </div>
            </Reveal>
          </div>

        </div>
      </Row>
    </section>
  );
}
