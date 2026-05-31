import Image from "next/image";
import Row from "../global/Row";

const TargetAudienceSection = () => {
  const audience = [
    {
      id: 1,
      title: "Experienced business owners looking to expand internationally",
      icon: "/images/Entrepreneurship/investment.svg",
    },
    {
      id: 2,
      title: "Investors seeking high-potential opportunities",
      icon: "/images/Entrepreneurship/economic.svg",
    },
    {
      id: 3,
      title: "Professionals Aiming To Relocate Their Business Or Career",
      icon: "/images/Entrepreneurship/job.svg",
    },
    {
      id: 4,
      title: "Business Owners Expanding From Their Home Country",
      icon: "/images/Entrepreneurship/Diversifies.svg",
    },
  ];

  return (
    <section className="w-full p-4 mt-16">
      <Row>
        <div className="flex flex-col md:flex-row items-start gap-6">

          {/* عنوان */}
          <div className="w-full md:w-1/2 flex flex-col">
            <h2 className="my-4 md:my-8 text-2xl md:text-[32px] font-bold text-black leading-snug">
              Who <br />
              Entrepreneurship <br />
              Program is Designed <br />
              For?
            </h2>
          </div>

          {/* کارت‌ها */}
          <div className="w-full md:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {audience.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-2xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 flex-shrink-0">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>

                  <p className="text-[16px] font-medium text-gray-800 leading-snug">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Row>
    </section>
  );
};

export default TargetAudienceSection;
