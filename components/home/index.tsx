import Image from "next/image";
import Row from "../global/Row";
import Highlight from "../ui/Highlight";

const Hero = () => {
  return (
    <section className="w-full mt-10">
      {/* Mobile */}
      <div className="flex flex-col gap-6 px-6 md:hidden">
        <h1 className="text-3xl font-bold leading-tight text-black">
          Your <Highlight>Global Launchpad</Highlight> for Investment, Startups,
          Entrepreneurship, and Career Opportunities
        </h1>

        <p className="text-lg font-normal text-justify">
          We fuel the global expansion of startups into new markets — for
          entrepreneurs ready to scale and investors seeking high-growth
          opportunities.
        </p>

        <Image
          width={1200}
          height={1200}
          src="/images/landing/TEAM 1 (1).svg"
          alt="Hero team"
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <Row>
          <div className="flex items-center gap-16">
            {/* Text */}
            <div className="w-1/2 flex flex-col gap-6">
              <h1 className="text-3xl lg:text-4xl xl:text-[42px] font-bold leading-snug text-black">
                Your <Highlight>Global Launchpad</Highlight> for
                <br />
                Investment, Startups,
                <br />
                Entrepreneurship, and Career Opportunities
              </h1>

              <p className="text-base lg:text-lg xl:text-[22px] text-black font-normal text-justify">
                We fuel the global expansion of startups into new markets — for
                entrepreneurs ready to scale and investors seeking high-growth
                opportunities.
              </p>
            </div>

            {/* Image */}
            <div className="w-1/2">
              <Image
                width={1500}
                height={1500}
                src="/images/landing/TEAM 2 (1).svg"
                alt="Hero team"
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </Row>
      </div>
    </section>
  );
};

export default Hero;
