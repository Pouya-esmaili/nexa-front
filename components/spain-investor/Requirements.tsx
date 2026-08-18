"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const statutory = [
  {
    title: "Non-EU/EEA/Swiss Citizenship",
    titleFa: "تابعیت خارج از اتحادیه اروپا",
    desc: "The program applies exclusively to non-European citizens.",
    descFa: "این برنامه برای اتباع کشورهای غیراروپایی طراحی شده است.",
  },
  {
    title: "Clean Criminal Record",
    titleFa: "سابقه کیفری پاک",
    desc: "Certified check from country of origin and any nation of residence over the past 5 years. US applicants: FBI check. Canadian applicants: RCMP fingerprint check.",
    descFa: "ارائه گواهی عدم سوءپیشینه از کشور تابعیت و کشورهایی که طی ۵ سال گذشته در آن‌ها اقامت داشته‌اید.",
  },
  {
    title: "Private Health Insurance",
    titleFa: "بیمه درمانی خصوصی",
    desc: "Full-coverage policy authorized in Spain — zero copayments (sin copagos) and no waiting periods.",
    descFa: "بیمه کامل و مورد تأیید اسپانیا، بدون فرانشیز و دوره انتظار.",
  },
  {
    title: "Valid Passport",
    titleFa: "پاسپورت معتبر",
    desc: "Minimum 1 year remaining validity and at least 2 blank pages.",
    descFa: "حداقل یک سال اعتبار باقی‌مانده و دست‌کم دو صفحه خالی.",
  },
];

const family = [
  {
    title: "Spouse / Civil Partner",
    titleFa: "همسر یا شریک قانونی",
    desc: "Included in the main application — full work and residence rights.",
    descFa: "امکان دریافت اقامت و برخورداری از حق کار.",
  },
  {
    title: "Dependent Children (Any Age)",
    titleFa: "فرزندان وابسته در هر سنی",
    desc: "Adult children must be unmarried and financially reliant on the primary applicant.",
    descFa: "فرزندان بزرگسال در صورت مجرد بودن و وابستگی مالی به متقاضی اصلی می‌توانند مشمول شوند.",
  },
  {
    title: "Dependent Elderly Parents",
    titleFa: "والدین وابسته",
    desc: "Eligible for family reunification under the investor framework.",
    descFa: "والدین وابسته نیز می‌توانند در چارچوب مقررات مربوط به خانواده سرمایه‌گذار همراه شوند.",
  },
  {
    title: "Per Dependent Requirement",
    titleFa: "شرایط مالی اعضای خانواده",
    desc: "Each additional family member requires +100% IPREM (€7,200/year) in liquid savings or passive income.",
    descFa: "برای هر عضو خانواده، علاوه بر سرمایه اصلی، باید منابع مالی معادل ۱۰۰٪ IPREM اثبات شود.",
  },
];

function ReqBlock({ title, titleFa, items }: { title: string; titleFa: string; items: { title: string; titleFa: string; desc: string; descFa: string }[] }) {
  const { t } = useLang();
  return (
    <div
      className="bg-white rounded-[20px] p-9 flex flex-col w-full"
      style={{ border: "1px solid rgba(143,39,255,0.18)" }}
    >
      <div className="flex items-center gap-2 text-[13px] font-bold text-[#8F27FF] uppercase tracking-[0.08em] mb-5">
        <span className="w-1 h-4 rounded-sm bg-[#8F27FF] flex-shrink-0" />
        {t(title, titleFa)}
      </div>
      <ul className="flex flex-col">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-3 text-[13.5px] text-[#474747] leading-[1.55] py-3"
            style={{ borderBottom: i < items.length - 1 ? "1px solid #E2E2E2" : "none" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#8F27FF] flex-shrink-0 mt-[6px]" />
            <div>
              <strong className="text-black font-semibold block mb-0.5">{t(item.title, item.titleFa)}</strong>
              {t(item.desc, item.descFa)}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Requirements() {
  const { t } = useLang();
  return (
    <section className="py-20 md:py-24" style={{ background: "#FAF6FF" }}>
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1] text-center mb-14">
            {t("Core Legal & Personal Requirements", "شرایط قانونی و الزامات متقاضی")}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
          <Reveal variant="left" delay={60} className="flex">
            <ReqBlock title="Statutory Checklist" titleFa="الزامات اصلی" items={statutory} />
          </Reveal>
          <Reveal variant="right" delay={60} className="flex">
            <ReqBlock title="Family Inclusion" titleFa="امکان همراهی خانواده" items={family} />
          </Reveal>
        </div>
      </Row>
    </section>
  );
}
