"use client";

import Row from "@/components/global/Row";
import { useLang } from "@/components/global/LanguageProvider";

interface Province {
  name: string;
  bg: string;
  stats: { label: string; value: string }[];
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
  "Operation": "مدت فعالیت",
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
  "CAD 250–500K": "۲۵۰ تا ۵۰۰ هزار دلار کانادا",
  "Flexible": "متغیر",
  "Verified": "بر اساس الزامات برنامه",
  "18–20 mo": "۱۸–۲۰ ماه",
  "12–20 mo": "۱۲–۲۰ ماه",
  "12–18 mo": "۱۲–۱۸ ماه",
  "6–12 mo": "۶–۱۲ ماه",
  "24 mo": "۲۴ ماه",
  "12 mo": "۱۲ ماه",
  "6 mo": "۶ ماه",
};

const keyProvinces: Province[] = [
  {
    name: "Ontario",

    bg: "/images/Entrepreneurship/Ontario.jpg",
    stats: [
      { label: "Min Net Worth", value: "CAD 800K" },
      { label: "Min Investment", value: "CAD 200K" },
      { label: "Operation", value: "18–20 mo" },
    ],
  },
  {
    name: "British Columbia",

    bg: "/images/Entrepreneurship/British Columbia.jpg",
    stats: [
      { label: "Min Net Worth", value: "CAD 600K" },
      { label: "Min Investment", value: "CAD 200K" },
      { label: "Operation", value: "12–20 mo" },
    ],
  },
  {
    name: "Alberta",

    bg: "/images/Entrepreneurship/Alberta.jpg",
    stats: [
      { label: "Min Net Worth", value: "Flexible" },
      { label: "Min Investment", value: "CAD 100K+" },
      { label: "Operation", value: "12–18 mo" },
    ],
  },
  {
    name: "Quebec",

    bg: "/images/Entrepreneurship/Quebec.jpg",
    stats: [
      { label: "Min Net Worth", value: "CAD 900K" },
      { label: "Min Investment", value: "CAD 200K" },
      { label: "Operation", value: "Verified" },
    ],
  },
  {
    name: "Manitoba",

    bg: "/images/Entrepreneurship/Manitoba.jpg",
    stats: [
      { label: "Min Net Worth", value: "CAD 500K" },
      { label: "Min Investment", value: "CAD 150K" },
      { label: "Operation", value: "12 mo" },
    ],
  },
  {
    name: "Saskatchewan",
    
    bg: "/images/photos/1500382017468-9049fed747ef-w600.jpg",
    stats: [
      { label: "Min Net Worth", value: "CAD 500K" },
      { label: "Min Investment", value: "CAD 300K" },
      { label: "Operation", value: "6–12 mo" },
    ],
  },
  {
    name: "Yukon",
   
    bg: "/images/photos/1531366936337-7c912a4589a7-w600.jpg",
    stats: [
      { label: "Min Net Worth", value: "CAD 500K" },
      { label: "Min Investment", value: "CAD 300K" },
      { label: "Operation", value: "12 mo" },
    ],
  },
  {
    name: "NW Territories",

    bg: "/images/Entrepreneurship/NW Territories.jpg",
    stats: [
      { label: "Min Net Worth", value: "CAD 250–500K" },
      { label: "Min Investment", value: "CAD 150K" },
      { label: "Operation", value: "24 mo" },
    ],
  },
];

const atlanticProvinces: Province[] = [
  {
    name: "New Brunswick",

    bg: "/images/Entrepreneurship/New Brunswick.jpg",
    stats: [
      { label: "Min Net Worth", value: "CAD 500K" },
      { label: "Min Investment", value: "CAD 150K" },
      { label: "Operation", value: "12 mo" },
    ],
  },
  {
    name: "Nova Scotia",

    bg: "/images/Entrepreneurship/Nova Scotia.webp",
    stats: [
      { label: "Min Net Worth", value: "CAD 600K" },
      { label: "Min Investment", value: "CAD 150K" },
      { label: "Operation", value: "6 mo" },
    ],
  },
  {
    name: "Prince Edward Island",

    bg: "/images/Entrepreneurship/Prince Edward Island.jpg",
    stats: [
      { label: "Min Net Worth", value: "CAD 600K" },
      { label: "Min Investment", value: "CAD 150K" },
      { label: "Operation", value: "12 mo" },
    ],
  },
  {
    name: "Newfoundland & Labrador",

    bg: "/images/Entrepreneurship/Newfoundland & Labrador.jpg",
    stats: [
      { label: "Min Net Worth", value: "CAD 500K" },
      { label: "Min Investment", value: "CAD 200K" },
      { label: "Operation", value: "12 mo" },
    ],
  },
];

function ProvinceCard({ province }: { province: Province }) {
  const { t } = useLang();
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden border border-gray-200 transition-all hover:-translate-y-1.5 group"
      style={{ boxShadow: "0 1px 2px rgba(0,0,0,0.03)" }}
    >
      {/* Image */}
      <div
        className="h-[150px] relative"
        style={{
          backgroundImage: `url('${province.bg}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.72))" }}
        />
        {/* Name */}
        <span className="absolute bottom-3 left-3.5 text-white font-semibold text-[15px] z-10">
          {t(province.name, NAME_FA[province.name] ?? province.name)}
        </span>
      </div>

      {/* Body */}
      <div className="p-[18px]">
        {province.stats.map((s, i) => (
          <div
            key={s.label}
            className="flex justify-between items-center text-xs py-2"
            style={{ borderBottom: i < province.stats.length - 1 ? "1px dashed #E2E2E2" : "none" }}
          >
            <span className="text-gray-500 font-medium">{t(s.label, LABEL_FA[s.label] ?? s.label)}</span>
            <span className="font-bold text-black">{t(s.value, VALUE_FA[s.value] ?? s.value)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionLabel({ text, textFa }: { text: string; textFa: string }) {
  const { t } = useLang();
  return (
    <div className="flex items-center gap-4 mb-6">
      <span className="text-[13px] font-bold tracking-[0.1em] uppercase text-gray-500 whitespace-nowrap">
        {t(text, textFa)}
      </span>
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  );
}

export default function Provinces() {
  const { t } = useLang();
  return (
    <section className="py-16 md:py-24 bg-white">

      {/* ========== MOBILE ========== */}
      <div className="md:hidden px-5">
        <h2 className="text-3xl font-bold text-center tracking-tight mb-8">
          {t("Key Provinces & Entrepreneur Streams", "استان‌های کلیدی و مسیرهای کارآفرینی")}
        </h2>
        <SectionLabel text="Key Provinces" textFa="استان‌های منتخب" />
        <div className="grid grid-cols-2 gap-3 mb-10">
          {keyProvinces.map((p) => <ProvinceCard key={p.name} province={p} />)}
        </div>
        <div className="border-t-2 border-gray-200 pt-8" style={{ position: "relative" }}>
          <div className="absolute top-[-2px] left-0 w-14 h-0.5 bg-[#8F27FF]" />
          <SectionLabel text="Atlantic Provinces" textFa="استان‌های آتلانتیک" />
          <div className="grid grid-cols-2 gap-3">
            {atlanticProvinces.map((p) => <ProvinceCard key={p.name} province={p} />)}
          </div>
        </div>
      </div>

      {/* ========== DESKTOP ========== */}
      <div className="hidden md:block">
        <Row>
          <h2 className="text-4xl font-bold text-center tracking-tight mb-12">
            {t("Key Canadian Provinces & Entrepreneur Streams", "استان‌های کلیدی کانادا و مسیرهای کارآفرینی")}
          </h2>

          <SectionLabel text="Key Provinces" textFa="استان‌های منتخب" />
          <div className="grid grid-cols-4 gap-[18px] mb-14">
            {keyProvinces.map((p) => <ProvinceCard key={p.name} province={p} />)}
          </div>

          <div className="relative border-t-2 border-gray-200 pt-14">
            <div className="absolute top-[-2px] left-0 w-14 h-0.5 bg-[#8F27FF]" />
            <SectionLabel text="Atlantic Provinces" textFa="استان‌های آتلانتیک" />
            <div className="grid grid-cols-4 gap-[18px]">
              {atlanticProvinces.map((p) => <ProvinceCard key={p.name} province={p} />)}
            </div>
          </div>
        </Row>
      </div>

    </section>
  );
}
