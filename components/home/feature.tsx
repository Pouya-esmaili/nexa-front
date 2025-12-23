import Image from 'next/image';
import Link from 'next/link';
import Row from '../global/Row';

const services = [
  {
    title: "Entrepreneurship",
    description: "From business development to investor engagement, we guide ambitious founders to scale globally — turning bold ideas into borderless, investment-ready ventures.",
    icon: "/images/landing/Entrepeneurship.svg",
    link: "#",
  },
  {
    title: "Startup",
    description: "We deliver precise startup advisory, crafting professional business plans, financial models, and investor pitch decks tailored for global success.",
    icon: "/images/landing/Startup.svg",
    link: "#",
  },
  {
    title: "Advisory",
    description: "Our expertise spans business development, financial planning and modeling, compelling pitch deck creation, IP guidance, go-to-market strategy, and strategic investor engagement.",
    icon: "/images/landing/Advisory.svg",
    link: "#",
  },
  {
    title: "Investment",
    description: "With exclusive access to international investors and emerging opportunities, we focus on early-stage startups at the intersection of innovation and scalable growth.",
    icon: "/images/landing/Investment.svg",
    link: "#",
  },
];

const Feature = () => {
  return (
    <section className="py-16 bg-white mt-20">

      <div className="hidden md:block">
        <Row>
          <div className="grid grid-cols-4 gap-8 w-full">
            {services.map((service, idx) => (
              <ServiceCard key={idx} service={service} />
            ))}
          </div>
        </Row>
      </div>

      <div className="md:hidden flex flex-col gap-8 px-6">
        {services.map((service, idx) => (
          <ServiceCard key={idx} service={service} />
        ))}
      </div>
    </section>
  );
};

const ServiceCard = ({ service }: { service: typeof services[0] }) => (
  <div className="relative flex justify-center items-start">

    <div className="absolute -top-7 z-10 bg-white px-2 border-[#8F27FF] rounded-b-full">
      <Image
        src={service.icon}
        alt={service.title}
        width={96}
        height={56}
        className="pointer-events-none"
      />
    </div>

    <div className="group border border-[#8F27FF] rounded-3xl bg-white transition-all duration-500 hover:bg-[#8F27FF] hover:shadow-xl hover:scale-y-[0.90] w-full pt-16 relative ">
      <div className="px-6 md:px-10 pb-12 text-center overflow-hidden mt-2">
        <h3 className="text-2xl font-semibold text-black transition-colors duration-500 group-hover:text-white">
          {service.title}
        </h3>
        <p className="mt-4 text-sm text-gray-600 transition-all duration-500 opacity-100 max-h-40 group-hover:opacity-0 group-hover:max-h-0 group-hover:mt-0">
          {service.description}
        </p>
      </div>

      <Link
        href={service.link}
        className="absolute bottom-2 right-4 w-10 h-10 rounded-full flex items-center justify-center bg-[#8F27FF] text-white transition-all duration-500 group-hover:bg-white group-hover:text-[#8F27FF]"
      >
        <svg width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          className="stroke-current"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round" >
          <path d="M7 17L17 7" />
          <path d="M7 7h10v10" />
        </svg>
      </Link>
    </div>
  </div>
);

export default Feature;
