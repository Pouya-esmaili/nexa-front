"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const pillars = [
  {
    num: "1",
    title: "Qualifying Business Structure",
    titleFa: "ساختار کسب‌وکار واجد شرایط",
    desc: <>Up to <strong>5 co-founders</strong> can apply under one venture. Each must hold at least <strong>10% voting rights</strong>. Together with their designated organization, they must jointly control <strong>more than 50%</strong> of total corporate voting rights. Business operations and active management must take place <strong>inside Canada</strong>.</>,
    descFa: <>تا <strong>۵ هم‌بنیان‌گذار</strong> می‌توانند تحت یک کسب‌وکار درخواست دهند. هرکدام باید حداقل <strong>۱۰٪ حق رأی</strong> داشته باشند. آن‌ها به‌همراه سازمان تعیین‌شده‌شان باید مشترکاً <strong>بیش از ۵۰٪</strong> کل حق رأی شرکتی را کنترل کنند. عملیات کسب‌وکار و مدیریت فعال باید <strong>در داخل کانادا</strong> انجام شود.</>,
  },
  {
    num: "2",
    title: "Letter of Support from a Designated Organization",
    titleFa: "نامه‌ی پشتیبانی از یک سازمان تعیین‌شده",
    desc: <>A formal endorsement letter from an <strong>IRCC-approved Venture Capital fund, Angel Investor Group, or Business Incubator</strong> is mandatory. The capital floor and structure vary fundamentally by organization type. No Letter of Support means no application.</>,
    descFa: <>یک نامه‌ی تأییدیه‌ی رسمی از یک <strong>صندوق سرمایه‌ی خطرپذیر، گروه سرمایه‌گذار فرشته، یا مرکز رشد کسب‌وکار مورد تأیید IRCC</strong> الزامی است. کف سرمایه و ساختار به‌طور بنیادی بسته به نوع سازمان متفاوت است. بدون نامه‌ی پشتیبانی، درخواستی وجود ندارد.</>,
  },
  {
    num: "3",
    title: "Language Proficiency — CLB 5",
    titleFa: "تسلط زبانی — CLB 5",
    desc: <>A minimum score of <strong>CLB 5</strong> across all four competencies (Listening, Reading, Writing, Speaking) is mandatory. Accepted tests: IELTS General Training, CELPIP General, TEF, or TCF. Results must be <strong>less than 2 years old</strong> at submission. <strong>Zero waivers exist for this rule.</strong></>,
    descFa: <>حداقل نمره‌ی <strong>CLB 5</strong> در هر چهار مهارت (شنیداری، خواندن، نوشتن، صحبت کردن) الزامی است. آزمون‌های پذیرفته‌شده: IELTS General Training، CELPIP General، TEF یا TCF. نتایج باید هنگام ثبت <strong>کمتر از ۲ سال</strong> عمر داشته باشند. <strong>هیچ استثنایی برای این قاعده وجود ندارد.</strong></>,
  },
];

export default function Pillars() {
  const { t, lang } = useLang();
  return (
    <section className="py-20 md:py-24 bg-white">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center mb-14">
            {t("Core Program Requirements", "الزامات اصلی برنامه")}
          </h2>
        </Reveal>

        <Reveal variant="up" delay={60}>
          <div className="rounded-[20px] overflow-hidden border border-[#E2E2E2]">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {pillars.map((p, i) => (
                <div
                  key={p.num}
                  className="p-9 flex flex-col gap-4 transition-colors duration-200 hover:bg-[#F7F6F9]"
                  style={{
                    borderRight: i < 2 ? "1px solid #E2E2E2" : undefined,
                    borderBottom: i < pillars.length ? undefined : "1px solid #E2E2E2",
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
