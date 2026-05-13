import Row from "../global/Row";

export default function InvestSection() {
  const items = [
    {
      title: "Healthcare & Medical",
      image: "/images/investment/medical.svg",
    },
    {
      title: "Technology & Innovation (TECH)",
      image: "/images/investment/technology.svg",
    },
    {
      title: "Real Estate",
      image: "/images/investment/estate.svg",
    },
    {
      title: "Energy & Renewables",
      image: "/images/investment/energy.svg",
    },
    {
      title: "Information Technology (IT)",
      image: "/images/investment/Information.svg",
    },
    {
      title: "Tourism",
      image: "/images/investment/tourism.svg",
    },
  ];

  return (
    <section className="w-full py-10 md:py-16">

      {/* Mobile بدون Row */}
      <div className="md:hidden px-6">
        {/* Title */}
        <h2 className="text-center text-2xl font-bold text-black mb-8">
          Where We Invest
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                border
                border-[#929292]
                rounded-2xl
                shadow-[0px_4px_15px_0px_#00000040]
                p-4
                min-h-[130px]
                flex
                items-center
                gap-4
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="
                  w-[65px]
                  h-[65px]
                  object-contain
                  flex-shrink-0
                "
              />

              {/* Text */}
              <h3
                className="
                  text-base
                  leading-[1.5]
                  font-medium
                  text-black
                "
              >
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop داخل Row */}
      <div className="hidden md:block">
        <Row>
          {/* Title */}
          <h2 className="text-center text-4xl md:text-5xl font-bold text-black mb-10">
            Where We Invest
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="
                  bg-white
                  border
                  border-[#929292]
                  rounded-2xl
                  shadow-[0px_4px_15px_0px_#00000040]
                  p-6
                  min-h-[170px]
                  flex
                  items-center
                  gap-5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-[110px]
                    h-[90px]
                    object-contain
                    flex-shrink-0
                  "
                />

                {/* Text */}
                <h3
                  className="
                    text-xl
                    leading-[1.6]
                    font-medium
                    text-black
                  "
                >
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </Row>
      </div>
    </section>
  );
}