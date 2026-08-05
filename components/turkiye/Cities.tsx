"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import Image from "next/image";
import { useLang } from "@/components/global/LanguageProvider";

const cities = [
  {
    cls: "city-istanbul",
    name: "Istanbul",
    nameFa: "استانبول",
    meta: "Financial capital · Bosphorus",
    metaFa: "پایتخت مالی · بسفر",
    img: "/images/investment/Istanbul.jpg",
    large: true,
  },
  {
    cls: "city-ankara",
    name: "Ankara",
    nameFa: "آنکارا",
    meta: "Government & diplomacy",
    metaFa: "دولت و دیپلماسی",
    img: "/images/investment/Ankara.jpg",
  },
  {
    cls: "city-antalya",
    name: "Antalya",
    nameFa: "آنتالیا",
    meta: "Mediterranean tourism",
    metaFa: "گردشگری مدیترانه‌ای",
    img: "/images/investment/Antalya.jpg",
  },
  {
    cls: "city-izmir",
    name: "Izmir",
    nameFa: "ازمیر",
    meta: "Aegean trade hub",
    metaFa: "قطب تجاری اژه",
    img: "/images/investment/Izmir.jpg",
  },
  {
    cls: "city-bodrum",
    name: "Bodrum",
    nameFa: "بدروم",
    meta: "Luxury & hospitality",
    metaFa: "لوکس و مهمان‌نوازی",
    img: "/images/investment/Bodrum.jpg",
  },
];

export default function Cities() {
  const { t } = useLang();
  return (
    <section className="py-16 md:py-20 bg-white">
      <Row>
        <Reveal variant="up" className="mb-10 md:mb-14">
          <h2 className="text-[28px] md:text-[38px] font-bold tracking-tight">
            {t("Key Turkish Investment Cities", "شهرهای کلیدی سرمایه‌گذاری ترکیه")}
          </h2>
        </Reveal>

        {/* Mobile: vertical stack */}
        <div className="flex flex-col gap-4 md:hidden">
          {cities.map((c, i) => (
            <Reveal key={c.name} variant="up" delay={i * 80}>
              <div className="relative h-48 rounded-2xl overflow-hidden group">
                <Image
                  src={c.img}
                  alt={c.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <figcaption className="absolute bottom-4 left-4 text-white">
                  <div className="font-bold text-xl">{t(c.name, c.nameFa)}</div>
                  <div className="text-xs text-white/80 mt-0.5">{t(c.meta, c.metaFa)}</div>
                </figcaption>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Desktop: magazine grid */}
        <div className="hidden md:grid grid-cols-3 grid-rows-2 gap-4 h-[520px]">
          {/* Istanbul — spans 2 rows */}
          <Reveal variant="left" className="row-span-2">
            <div className="relative rounded-2xl overflow-hidden h-full group">
              <Image
                src={cities[0].img}
                alt={cities[0].name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <figcaption className="absolute bottom-5 left-5 text-white">
                <div className="font-bold text-2xl">{t(cities[0].name, cities[0].nameFa)}</div>
                <div className="text-sm text-white/80 mt-1">{t(cities[0].meta, cities[0].metaFa)}</div>
              </figcaption>
            </div>
          </Reveal>

          {/* Remaining 4 cities in 2x2 */}
          {cities.slice(1).map((c, i) => (
            <Reveal key={c.name} variant="up" delay={i * 80 + 100}>
              <div className="relative rounded-2xl overflow-hidden h-full group">
                <Image
                  src={c.img}
                  alt={c.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <figcaption className="absolute bottom-4 left-4 text-white">
                  <div className="font-bold text-xl">{t(c.name, c.nameFa)}</div>
                  <div className="text-xs text-white/80 mt-0.5">{t(c.meta, c.metaFa)}</div>
                </figcaption>
              </div>
            </Reveal>
          ))}
        </div>

      </Row>
    </section>
  );
}
