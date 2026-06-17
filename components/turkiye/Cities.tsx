const cities = [
  {
    cls: "city-istanbul",
    name: "Istanbul",
    meta: "Financial capital · Bosphorus",
    img: "/images/investment/Istanbul.jpg",
  },
  {
    cls: "city-ankara",
    name: "Ankara",
    meta: "Government & diplomacy",
    img: "/images/investment/Ankara.jpg",
  },
  {
    cls: "city-antalya",
    name: "Antalya",
    meta: "Mediterranean tourism",
    img: "/images/investment/Antalya.jpg",
  },
  {
    cls: "city-izmir",
    name: "Izmir",
    meta: "Aegean trade hub",
    img: "/images/investment/Izmir.jpg",
  },
  {
    cls: "city-bodrum",
    name: "Bodrum",
    meta: "Luxury & hospitality",
    img: "/images/investment/Bodrum.jpg",
  },
];

export default function Cities() {
  return (
    <section className="cities">
      <h2 className="section-title">Key Turkish Investment Cities</h2>
      <div className="cities-grid">
        {cities.map((c) => (
          <figure key={c.name} className={`city ${c.cls}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={c.img} alt={c.name} loading="lazy" />
            <figcaption>
              <span className="city-name">{c.name}</span>
              <span className="city-meta">{c.meta}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
