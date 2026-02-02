import Image from "next/image";
import Row from "../global/Row";

const countriesTop = [
  { title: "Spain", image: "/images/Entrepreneurship/espain.svg" },
  { title: "Finland", image: "/images/Entrepreneurship/Fanland.svg" },
];

const countriesBottom = [
  { title: "Canada", image: "/images/Entrepreneurship/canada.svg" },
  { title: "Netherlands", image: "/images/Entrepreneurship/netherlands.svg" },
  { title: "Portugal", image: "/images/Entrepreneurship/portugal.svg" },
];

const CountryCard = ({ title, image }: { title: string; image: string }) => {
  return (
    <div className="relative flex flex-col justify-between bg-white rounded-2xl border border-[#4A4A4A] shadow-lg p-6 w-full ">

      {/* Flag */}
      <div className="px-2 shadow-sm">
        <Image src={image} alt={title} width={68} height={32} />
      </div>

      {/* Content */}
      <div className="mt-6">
        <h3 className="text-[16px] font-semibold text-gray-900">{title}</h3>
        <p className="text-[14px] text-gray-700 leading-snug mt-1">
          Business Model & Financial <br /> Feasibility Analysis
        </p>
      </div>

      {/* Arrow */}
      <div className="absolute bottom-4 right-4">
        <div className="w-9 h-9 rounded-full flex items-center justify-center bg-[#8F27FF] cursor-pointer">
          <Image src="/images/landing/ArrowRight.svg" alt="Arrow" width={38} height={18} />
        </div>
      </div>
    </div>
  );
};

const Country = () => {
  return (
    <section className="w-full py-12">
      <Row>
        <div className="space-y-8 w-full">

          {/* Row 1 */}
          <div className="flex justify-between w-full gap-6">
            {/* Title */}
            <div className="w-[300px]">
              <h2 className="text-[32px] font-bold leading-snug">
                Which Countries <br />
                Offer Entrepreneurship <br />
                Programs?
              </h2>
            </div>

            {/* Spain + Finland */}
            <div className="flex gap-6 flex-1 justify-end">
              {countriesTop.map((c, i) => (
                <CountryCard key={i} title={c.title} image={c.image} />
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex justify-between w-full gap-6">
            {countriesBottom.map((c, i) => (
              <CountryCard key={i} title={c.title} image={c.image} />
            ))}
          </div>

        </div>
      </Row>
    </section>
  );
};

export default Country;
