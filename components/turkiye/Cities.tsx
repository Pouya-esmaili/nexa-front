import Row from "@/components/global/Row";

const cities = [
  {
    name: "Istanbul",
    meta: "Financial capital · Bosphorus",
    img: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=1400&q=85&auto=format&fit=crop",
    large: true,
  },
  {
    name: "Ankara",
    meta: "Government & diplomacy",
    img: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1200&q=85&auto=format&fit=crop",
  },
  {
    name: "Antalya",
    meta: "Mediterranean tourism",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1000&q=85&auto=format&fit=crop",
  },
  {
    name: "Izmir",
    meta: "Aegean trade hub",
    img: "https://images.unsplash.com/photo-1605537964570-d8ce4ec88c80?w=1000&q=85&auto=format&fit=crop",
  },
  {
    name: "Bodrum",
    meta: "Luxury & hospitality",
    img: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f97?w=1000&q=85&auto=format&fit=crop",
  },
];

export default function Cities() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <Row>
        <h2 className="text-[28px] md:text-[38px] font-bold tracking-tight mb-10 md:mb-14">
          Key Turkish Investment Cities
        </h2>

        {/* Mobile: vertical stack */}
        <div className="flex flex-col gap-4 md:hidden">
          {cities.map((c) => (
            <div
              key={c.name}
              className="relative h-48 rounded-2xl overflow-hidden"
            >
              <img
                src={c.img}
                alt={c.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <figcaption className="absolute bottom-4 left-4 text-white">
                <div className="font-bold text-xl">{c.name}</div>
                <div className="text-xs text-white/80 mt-0.5">{c.meta}</div>
              </figcaption>
            </div>
          ))}
        </div>

        {/* Desktop: magazine grid */}
        <div className="hidden md:grid grid-cols-3 grid-rows-2 gap-4 h-[520px]">
          {/* Istanbul — spans 2 rows */}
          <div className="relative rounded-2xl overflow-hidden row-span-2">
            <img
              src={cities[0].img}
              alt={cities[0].name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <figcaption className="absolute bottom-5 left-5 text-white">
              <div className="font-bold text-2xl">{cities[0].name}</div>
              <div className="text-sm text-white/80 mt-1">{cities[0].meta}</div>
            </figcaption>
          </div>

          {/* Remaining 4 cities in 2x2 */}
          {cities.slice(1).map((c) => (
            <div key={c.name} className="relative rounded-2xl overflow-hidden">
              <img
                src={c.img}
                alt={c.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <figcaption className="absolute bottom-4 left-4 text-white">
                <div className="font-bold text-xl">{c.name}</div>
                <div className="text-xs text-white/80 mt-0.5">{c.meta}</div>
              </figcaption>
            </div>
          ))}
        </div>

      </Row>
    </section>
  );
}
