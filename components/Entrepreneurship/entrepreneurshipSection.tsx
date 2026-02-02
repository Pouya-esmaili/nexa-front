import Image from "next/image";
import Row from "../global/Row";

const EntrepreneurshipSection = () => {
  const features = [
    { id: 1, title: "Attracts Foreign Investment", icon: "/images/Entrepreneurship/investment.svg" },
    { id: 2, title: "Stimulates Economic Growth", icon: "/images/Entrepreneurship/economic.svg" },
    { id: 3, title: "Creates New Jobs", icon: "/images/Entrepreneurship/job.svg" },
    { id: 4, title: "Diversifies The Economy", icon: "/images/Entrepreneurship/Diversifies.svg" },
    { id: 5, title: "Builds A Dynamic Ecosystem", icon: "/images/Entrepreneurship/dynamic.svg" },
    { id: 6, title: "Builds A Dynamic Ecosystem", icon: "/images/Entrepreneurship/dynamic.svg" },
  ];

  return (
    <section className="py-16 mb-10 px-4 bg-gray-50">
      <div className="container mx-auto">

        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
          How Entrepreneurship Programs Strengthen Countries?
        </h2>

        <Row className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item) => (
            <div
              key={item.id}
              className="flex items-center p-8 gap-6 bg-white rounded-2xl shadow-2xl hover:shadow-lg transition-shadow duration-300"
            >

              <div className="flex-shrink-0 w-12 h-12 mr-6">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={48}
                  height={48}
                  className="object-contain"
                  priority
                />
              </div>

              <h3 className="text-sm md:text-base font-medium text-gray-800">
                {item.title}
              </h3>
            </div>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default EntrepreneurshipSection;
