"use client";

"use client";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const achievements = [
  { num: "1", text: 'At least <strong>£50,000</strong> has been actively invested into the business and spent on developing its operations.', textFa: 'حداقل <strong>۵۰٬۰۰۰ پوند</strong> فعالانه در کسب‌وکار سرمایه‌گذاری و صرف توسعه‌ی عملیات آن شده است.' },
  { num: "2", text: 'The number of customers has <strong>at least doubled</strong> within 3 years and is higher than the average for similar UK businesses.', textFa: 'تعداد مشتریان ظرف ۳ سال <strong>حداقل دو برابر</strong> شده و بالاتر از میانگین کسب‌وکارهای مشابه بریتانیایی است.' },
  { num: "3", text: 'Significant R&D activity and has <strong>applied for intellectual property protection</strong> in the UK.', textFa: 'فعالیت پژوهش‌وتوسعه‌ی چشمگیر داشته و <strong>برای حمایت از مالکیت فکری</strong> در انگلستان درخواست داده است.' },
  { num: "4", text: 'Generated a <strong>minimum annual gross revenue of £1 million</strong> in the last full year.', textFa: 'در آخرین سال کامل، <strong>حداقل درآمد ناخالص سالانه‌ی ۱ میلیون پوند</strong> ایجاد کرده است.' },
  { num: "5", text: 'Generated a minimum of <strong>£500,000 in revenue</strong>, with at least <strong>£100,000 from international export sales</strong>.', textFa: 'حداقل <strong>۵۰۰٬۰۰۰ پوند درآمد</strong> ایجاد کرده که دست‌کم <strong>۱۰۰٬۰۰۰ پوند آن از فروش صادراتی بین‌المللی</strong> است.' },
  { num: "6", text: 'Created the equivalent of <strong>at least 10 full-time jobs</strong> for settled workers in the UK.', textFa: 'معادل <strong>حداقل ۱۰ شغل تمام‌وقت</strong> برای کارگران مقیم انگلستان ایجاد کرده است.' },
  { num: "7", text: 'Created at least <strong>5 full-time jobs</strong> for settled workers with an average salary of at least <strong>£25,000 per year</strong>.', textFa: 'حداقل <strong>۵ شغل تمام‌وقت</strong> برای کارگران مقیم با میانگین حقوق دست‌کم <strong>۲۵٬۰۰۰ پوند در سال</strong> ایجاد کرده است.' },
];

export default function ILRAchievements() {
  const { t } = useLang();
  return (
    <section className="py-16 md:py-20 bg-white">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center mb-6">
            {t("ILR at Year 3: Required Achievements", "اقامت دائم در سال سوم: دستاوردهای لازم")}
          </h2>
        </Reveal>

        <Reveal variant="up" delay={100}>
          <p className="text-[16px] text-[#474747] leading-[1.65] max-w-[72ch] mx-auto text-center mb-12">
            {t("To qualify for Indefinite Leave to Remain after 3 years, your Endorsing Body must re-evaluate your business. Your venture must satisfy", "برای واجد شرایط شدن اقامت دائم پس از ۳ سال، نهاد تأییدکننده‌ی شما باید کسب‌وکارتان را دوباره ارزیابی کند. کسب‌وکار شما باید")}{" "}
            <strong className="text-black font-semibold">{t("at least two (2) of the following seven achievements", "حداقل دو (۲) مورد از هفت دستاورد زیر")}</strong>{t(".", " را برآورده کند.")}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {achievements.map((a, i) => (
            <Reveal key={a.num} variant="up" delay={i * 70 + 150}>
              <div
                className="rounded-[14px] p-7 flex gap-4 items-start transition-all duration-250 hover:-translate-y-[3px]"
                style={{
                  background: "#F7F6F9",
                  border: "1px solid #E2E2E2",
                  transition: "border-color 0.25s, background 0.25s, transform 0.25s, box-shadow 0.25s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "rgba(143,39,255,0.18)";
                  el.style.background = "#FAF6FF";
                  el.style.boxShadow = "0 12px 32px rgba(143,39,255,0.08)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "#E2E2E2";
                  el.style.background = "#F7F6F9";
                  el.style.boxShadow = "none";
                }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-bold text-[#8F27FF] flex-shrink-0"
                  style={{ background: "#FAF6FF", border: "1px solid rgba(143,39,255,0.18)" }}
                >
                  {a.num}
                </div>
                <p
                  className="text-[13.5px] text-[#474747] leading-[1.6] m-0 [&_strong]:text-black [&_strong]:font-semibold"
                  dangerouslySetInnerHTML={{ __html: t(a.text, a.textFa) }}
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal variant="up" delay={600}>
          <div
            className="rounded-[12px] px-5 py-4 text-[14px] font-semibold text-center"
            style={{ background: "#FAF6FF", border: "1px solid rgba(143,39,255,0.18)", color: "#8F27FF" }}
          >
            {t("Your venture must satisfy any 2 of the 7 criteria above — assessed and verified by your Endorsing Body at the 3-year mark.", "کسب‌وکار شما باید هر ۲ مورد از ۷ معیار بالا را برآورده کند — که در نقطه‌ی ۳ سالگی توسط نهاد تأییدکننده‌ی شما ارزیابی و تأیید می‌شود.")}
          </div>
        </Reveal>
      </Row>
    </section>
  );
}
