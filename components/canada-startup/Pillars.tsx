"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const pillars = [
  {
    num: "1",
    title: "Qualifying Business Structure",
    titleFa: "ساختار واجد شرایط کسب‌وکار",
    desc: <>Up to <strong>5 co-founders</strong> can apply under one venture. Each must hold at least <strong>10% voting rights</strong>. Together with their designated organization, they must jointly control <strong>more than 50%</strong> of total corporate voting rights. Business operations and active management must take place <strong>inside Canada</strong>.</>,
    descFa: <>تا <strong>۵ هم‌بنیان‌گذار</strong> می‌توانند تحت یک کسب‌وکار مشترک اقدام کنند. هر متقاضی باید حداقل <strong>۱۰٪ از حق رأی</strong> شرکت را در اختیار داشته باشد. همچنین متقاضیان به همراه سازمان تعیین‌شده باید در مجموع <strong>بیش از ۵۰٪</strong> از کل حق رأی شرکت را کنترل کنند. فعالیت و مدیریت اصلی کسب‌وکار نیز باید <strong>در داخل کانادا</strong> انجام شود.</>,
  },
  {
    num: "2",
    title: "Letter of Support from a Designated Organization",
    titleFa: "دریافت Letter of Support از سازمان تعیین‌شده",
    desc: <>A formal endorsement letter from an <strong>IRCC-approved Venture Capital fund, Angel Investor Group, or Business Incubator</strong> is mandatory. The capital floor and structure vary fundamentally by organization type. No Letter of Support means no application.</>,
    descFa: <>دریافت نامه حمایت رسمی از یکی از <strong>سازمان‌های مورد تأیید IRCC</strong>؛ از جمله صندوق‌های سرمایه‌گذاری خطرپذیر، گروه‌های سرمایه‌گذار فرشته یا انکوباتورهای کسب‌وکار، الزامی است. حداقل سرمایه و ساختار تعهد مالی، بسته به نوع سازمان متفاوت است. بدون Letter of Support، امکان ارائه درخواست وجود ندارد.</>,
  },
  {
    num: "3",
    title: "Language Proficiency — CLB 5",
    titleFa: "مهارت زبان در سطح CLB 5",
    desc: <>A minimum score of <strong>CLB 5</strong> across all four competencies (Listening, Reading, Writing, Speaking) is mandatory. Accepted tests: IELTS General Training, CELPIP General, TEF, or TCF. Results must be <strong>less than 2 years old</strong> at submission. <strong>Zero waivers exist for this rule.</strong></>,
    descFa: <>حداقل <strong>CLB 5</strong> در هر چهار مهارت شنیداری، خواندن، نوشتن و گفتاری الزامی است. آزمون‌های مورد قبول شامل: IELTS General Training، CELPIP General، TEF و TCF. نتیجه آزمون باید هنگام ارائه درخواست <strong>کمتر از ۲ سال</strong> قدمت داشته باشد و <strong>برای این شرط، معافیت در نظر گرفته نشده است.</strong></>,
  },
];

export default function Pillars() {
  const { t, lang } = useLang();
  return (
    <section className="py-20 md:py-24 bg-white">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center mb-14">
            {t("Core Program Requirements", "شرایط اصلی برنامه")}
          </h2>
        </Reveal>

        <Reveal variant="up" delay={60}>
          <div className="rounded-[20px] overflow-hidden border border-[#E2E2E2]">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {pillars.map((p, i) => (
                <div
                  key={p.num}
                  className={`p-9 flex flex-col gap-4 transition-colors duration-200 hover:bg-[#F7F6F9] ${i < pillars.length - 1 ? "border-b md:border-b-0" : ""}`}
                  style={{
                    borderColor: i < pillars.length - 1 ? "#E2E2E2" : undefined,
                    borderInlineEnd: i < 2 ? "1px solid #E2E2E2" : undefined,
                  }}
                >
                  <div className="w-10 h-10 rounded-full bg-[#FAF6FF] border-[1.5px] border-[rgba(143,39,255,0.18)] flex items-center justify-center text-[14px] font-bold text-[#8F27FF] flex-shrink-0">
                    {p.num}
                  </div>
                  <h3 className="text-[17px] font-semibold text-black tracking-[-0.015em]">{t(p.title, p.titleFa)}</h3>
                  <p className="text-[13.5px] text-[#929292] leading-[1.65] m-0 [&_strong]:text-black [&_strong]:font-semibold">{lang === "fa" ? p.descFa : p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Row>
    </section>
  );
}
