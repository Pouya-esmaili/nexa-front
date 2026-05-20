import Image from "next/image";
import Row from "../global/Row";

const bulletPoints = [
  "Supporting Startups On Their Path To Global Growth",
  "Support And Scale Your Startup From Idea To Growth",
  "Capital Access And Fundraising Through Global Networks",
  "Simplify The Immigration Pathway For Your Family",
];

const Hero = () => {
  return (
    <div className="w-full">

      {/* Mobile */}
      <div className="flex flex-col gap-5 px-5 mt-8 md:hidden">
        <h2 className="text-2xl font-bold text-black">Acceleration</h2>
        <p className="text-base text-gray-700">
          Independent Global Investor And Startup Partner
        </p>

        <div className="flex flex-col gap-3">
          {bulletPoints.map((text, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="mt-1.5 w-4 h-4 rounded-full bg-[#F5C518] flex-shrink-0" />
              <p className="text-sm text-gray-800">{text}</p>
            </div>
          ))}
        </div>

        <Image
          width={800}
          height={500}
          src="/images/landing/Startup.svg"
          alt="Startup hero"
          className="w-full h-auto object-contain rounded-2xl mt-2"
        />
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <Row>
          <div className="flex items-center gap-18 mt-10">
            <div className="w-1/2 text-left flex flex-col justify-between">
              <h2 className="my-4 text-[32px] font-bold text-black">
                Acceleration
              </h2>
              <p className="text-[24px]">
                Independent Global Investor And Startup Partner
              </p>
              <div className="w-70 h-[3px] bg-[#929292] mb-4 mt-4" />
              <div className="flex flex-col gap-5">
                {bulletPoints.map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 w-5 h-5 rounded-full bg-[#F5C518] flex-shrink-0" />
                    <p className="text-[20px]">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-1/2">
              <Image
                width={1500}
                height={1500}
                src="/images/landing/Startup.svg"
                alt="Startup hero"
                className="w-full h-98 object-cover rounded-2xl"
              />
            </div>
          </div>
        </Row>
      </div>
    </div>
  );
};

export default Hero;
