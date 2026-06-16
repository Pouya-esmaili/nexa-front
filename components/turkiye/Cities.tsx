import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import Image from "next/image";

const cities = [
  {
    name: "Istanbul",
    meta: "Financial capital · Bosphorus",
    img: "/images/photos/1541432901042-2d8bd64b4a9b-w1400.jpg",
    large: true,
  },
  {
    name: "Ankara",
    meta: "Government & diplomacy",
    img: "/images/photos/1527838832700-5059252407fa-w1200.jpg",
  },
  {
    name: "Antalya",
    meta: "Mediterranean tourism",
    img: "/images/photos/1558618666-fcd25c85cd64-w1000.jpg",
  },
  {
    name: "Izmir",
    meta: "Aegean trade hub",
    img: "/images/investment/izmir.jpg",
  },
  {
    name: "Bodrum",
    meta: "Luxury & hospitality",
    img: "/images/investment/bodrum.jpg",
  },
];

export default function Cities() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <Row>
        <Reveal variant="up" className="mb-10 md:mb-14">
          <h2 className="text-[28px] md:text-[38px] font-bold tracking-tight">
            Key Turkish Investment Cities
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
                  <div className="font-bold text-xl">{c.name}</div>
                  <div className="text-xs text-white/80 mt-0.5">{c.meta}</div>
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
                <div className="font-bold text-2xl">{cities[0].name}</div>
                <div className="text-sm text-white/80 mt-1">{cities[0].meta}</div>
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
                  <div className="font-bold text-xl">{c.name}</div>
                  <div className="text-xs text-white/80 mt-0.5">{c.meta}</div>
                </figcaption>
              </div>
            </Reveal>
          ))}
        </div>

      </Row>
    </section>
  );
}
