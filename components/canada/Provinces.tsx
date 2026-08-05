"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import Image from "next/image";
import { useLang } from "@/components/global/LanguageProvider";

interface Province {
  name: string;
  bg: string;
  flag: string;
  netWorth: string;
  investment: string;
  operation: string;
}

const NAME_FA: Record<string, string> = {
  "Ontario": "انتاریو",
  "British Columbia": "بریتیش کلمبیا",
  "Alberta": "آلبرتا",
  "Quebec": "کبک",
  "Manitoba": "مانیتوبا",
  "Saskatchewan": "ساسکاچوان",
  "Yukon": "یوکان",
  "NW Territories": "قلمروهای شمال‌غربی",
  "New Brunswick": "نیوبرانزویک",
  "Nova Scotia": "نوا اسکوشیا",
  "Prince Edward Island": "جزیره‌ی پرنس ادوارد",
  "Newfoundland & Labrador": "نیوفاندلند و لابرادور",
};

const LABEL_FA: Record<string, string> = {
  "Min Net Worth": "حداقل دارایی خالص",
  "Min Investment": "حداقل سرمایه‌گذاری",
  "Operation": "بهره‌برداری",
};

const VALUE_FA: Record<string, string> = {
  "CAD 800K": "۸۰۰ هزار دلار کانادا",
  "CAD 900K": "۹۰۰ هزار دلار کانادا",
  "CAD 600K": "۶۰۰ هزار دلار کانادا",
  "CAD 500K": "۵۰۰ هزار دلار کانادا",
  "CAD 300K": "۳۰۰ هزار دلار کانادا",
  "CAD 200K": "۲۰۰ هزار دلار کانادا",
  "CAD 150K": "۱۵۰ هزار دلار کانادا",
  "CAD 100K+": "۱۰۰ هزار دلار کانادا به بالا",
  "CAD 250-500K": "۲۵۰ تا ۵۰۰ هزار دلار کانادا",
  "Flexible": "منعطف",
  "Verified": "تأییدشده",
  "18-20 mo": "۱۸ تا ۲۰ ماه",
  "12-20 mo": "۱۲ تا ۲۰ ماه",
  "12-18 mo": "۱۲ تا ۱۸ ماه",
  "6-12 mo": "۶ تا ۱۲ ماه",
  "12 mo": "۱۲ ماه",
};

const mainProvinces: Province[] = [
  { name: "Ontario", bg: "/images/photos/1503614472-8c93d56e92ce-w600.jpg", flag: "/images/flags/Flag_of_Ontario.svg.png", netWorth: "CAD 800K", investment: "CAD 200K", operation: "18-20 mo" },
  { name: "British Columbia", bg: "/images/photos/1559511260-66a654ae982a-w600.jpg", flag: "/images/flags/Flag_of_British_Columbia.svg.png", netWorth: "CAD 600K", investment: "CAD 200K", operation: "12-20 mo" },
  { name: "Alberta", bg: "/images/photos/1609825488888-3a766db05542-w600.jpg", flag: "/images/flags/Flag_of_Alberta.svg.png", netWorth: "Flexible", investment: "CAD 100K+", operation: "12-18 mo" },
  { name: "Quebec", bg: "/images/photos/1519178614-68673b201f36-w600.jpg", flag: "/images/flags/Flag_of_Quebec.svg.png", netWorth: "CAD 900K", investment: "CAD 200K", operation: "Verified" },
  { name: "Manitoba", bg: "/images/photos/1572206912757-5a78ff4d79be-w600.jpg", flag: "/images/flags/Flag_of_Manitoba.svg.png", netWorth: "CAD 500K", investment: "CAD 150K", operation: "12 mo" },
  { name: "Saskatchewan", bg: "/images/photos/1500382017468-9049fed747ef-w600.jpg", flag: "/images/flags/Flag_of_Saskatchewan.svg.png", netWorth: "CAD 500K", investment: "CAD 300K", operation: "6-12 mo" },
  { name: "Yukon", bg: "/images/photos/1531366936337-7c912a4589a7-w600.jpg", flag: "/images/flags/Flag_of_Yukon.svg.png", netWorth: "CAD 500K", investment: "CAD 300K", operation: "12 mo" },
  { name: "NW Territories", bg: "/images/photos/1483347756197-71ef80e95f73-w600.jpg", flag: "/images/flags/Flag_of_the_Northwest_Territories.svg.png", netWorth: "CAD 250-500K", investment: "CAD 150K", operation: "12 mo" },
];

const atlanticProvinces: Province[] = [
  { name: "New Brunswick", bg: "/images/photos/1551038247-3d9af20df552-w600.jpg", flag: "/images/flags/Flag_of_New_Brunswick.svg.png", netWorth: "CAD 500K", investment: "CAD 150K", operation: "12 mo" },
  { name: "Nova Scotia", bg: "https://images.unsplash.com/photo-1565024144815-79bc8094a0d3?w=600&q=80", flag: "/images/flags/Flag_of_Nova_Scotia.svg.png", netWorth: "CAD 600K", investment: "CAD 150K", operation: "12 mo" },
  { name: "Prince Edward Island", bg: "/images/photos/1469854523086-cc02fe5d8800-w600.jpg", flag: "/images/flags/Flag_of_Prince_Edward_Island.svg.png", netWorth: "CAD 600K", investment: "CAD 150K", operation: "12 mo" },
  { name: "Newfoundland & Labrador", bg: "https://images.unsplash.com/photo-1504608524841-42584120d693?w=600&q=80", flag: "/images/flags/Flag_of_Newfoundland_and_Labrador.svg.png", netWorth: "CAD 500K", investment: "CAD 200K", operation: "12 mo" },
];

function ProvinceCard({ p, delay }: { p: Province; delay: number }) {
  const { t } = useLang();
  return (
    <Reveal variant="up" delay={delay}>
      <div className="bg-white rounded-[20px] overflow-hidden border border-[#E2E2E2] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
        style={{ boxShadow: "0 1px 2px rgba(0,0,0,0.03)" }}>
        {/* Image */}
        <div className="h-[150px] relative overflow-hidden">
          <Image src={p.bg} alt={`${p.name} background`} fill className="object-cover" sizes="(max-width: 640px) 100vw, 50vw" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.72))" }} />
          {/* Flag */}
          <div className="absolute top-3 left-3 w-[38px] h-[26px] rounded-[3px] overflow-hidden z-10 bg-white"
            style={{ boxShadow: "0 3px 8px rgba(0,0,0,0.4)", border: "1.5px solid white" }}>
            <Image src={p.flag} alt={`${p.name} flag`} fill className="object-cover" sizes="38px" />
          </div>
          <span className="absolute bottom-3 left-3.5 text-white font-semibold text-[15px] z-10 tracking-[-0.01em]">{t(p.name, NAME_FA[p.name] ?? p.name)}</span>
        </div>
        {/* Body */}
        <div className="p-4.5 p-[18px]">
          {[
            { label: "Min Net Worth", val: p.netWorth },
            { label: "Min Investment", val: p.investment },
            { label: "Operation", val: p.operation },
          ].map((stat, j, arr) => (
            <div key={stat.label} className="flex justify-between items-center text-[12px] py-2"
              style={{ borderBottom: j < arr.length - 1 ? "1px dashed #E2E2E2" : undefined }}>
              <span className="text-[#929292] font-medium">{t(stat.label, LABEL_FA[stat.label] ?? stat.label)}</span>
              <span className="font-bold">{t(stat.val, VALUE_FA[stat.val] ?? stat.val)}</span>
            </div>
          ))}
          <a href="#" className="mt-3 text-[13px] font-semibold text-[#8F27FF] inline-flex items-center gap-1.5 transition-all hover:gap-2.5">
            {t("Read More →", "بیشتر بخوانید →")}
          </a>
        </div>
      </div>
    </Reveal>
  );
}

export default function Provinces() {
  const { t } = useLang();
  return (
    <section className="py-20 md:py-24 bg-white">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center mb-12">
            {t("Key Canadian Provinces & Entrepreneur Streams", "استان‌های کلیدی کانادا و جریان‌های کارآفرینی")}
          </h2>
        </Reveal>

        {/* Group label */}
        <Reveal variant="up" delay={80}>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[13px] font-bold tracking-[0.1em] uppercase text-[#929292] whitespace-nowrap">{t("Key Provinces", "استان‌های کلیدی")}</span>
            <div className="flex-1 h-px bg-[#E2E2E2]" />
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {mainProvinces.map((p, i) => (
            <ProvinceCard key={p.name} p={p} delay={i * 60 + 100} />
          ))}
        </div>

        {/* Atlantic block */}
        <div className="pt-14 relative" style={{ borderTop: "2px solid #E2E2E2" }}>
          {/* purple accent on border */}
          <div className="absolute top-[-2px] left-0 w-[60px] h-[2px] bg-[#8F27FF]" />

          <Reveal variant="up">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[13px] font-bold tracking-[0.1em] uppercase text-[#929292] whitespace-nowrap">{t("Atlantic Provinces", "استان‌های آتلانتیک")}</span>
              <div className="flex-1 h-px bg-[#E2E2E2]" />
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {atlanticProvinces.map((p, i) => (
              <ProvinceCard key={p.name} p={p} delay={i * 60 + 100} />
            ))}
          </div>
        </div>
      </Row>
    </section>
  );
}
