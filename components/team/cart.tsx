import Image from "next/image";

const cart = [
  {
    name: "Lida Parvizi",
    role: "FRONT-END DEVELOPER",
    image: "/images/ourteam/milad.svg",
    linkedin: "#",
  },
  {
    name: "NAME",
    role: "FRONT-END DEVELOPER",
    image: "/images/ourteam/lida.svg",
    linkedin: "#",
  },
  {
    name: "NAME",
    role: "FRONT-END DEVELOPER",
    image: "/images/ourteam/lida.svg",
    linkedin: "#",
  },
  {
    name: "NAME",
    role: "FRONT-END DEVELOPER",
    image: "/images/ourteam/parastoo.svg",
    linkedin: "#",
  },
  {
    name: "NAME",
    role: "FRONT-END DEVELOPER",
    image: "/images/ourteam/milad.svg",
    linkedin: "#",
  },
  {
    name: "NAME",
    role: "FRONT-END DEVELOPER",
    image: "/images/ourteam/lida.svg",
    linkedin: "#",
  },
  {
    name: "NAME",
    role: "FRONT-END DEVELOPER",
    image: "/images/ourteam/parastoo.svg",
    linkedin: "#",
  },
  {
    name: "NAME",
    role: "FRONT-END DEVELOPER",
    image: "/images/ourteam/parastoo.svg",
    linkedin: "#",
  },
];

export default function TeamSection() {
  return (
    <section className="w-full py-16 mt-10">
      <div className="mx-auto">
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-y-6 gap-x-8 justify-between">
          {cart.map((member, index) => (
            <div
              key={index}
              className="w-full sm:w-[45%] md:w-[22%]"
            >
              {/* Card */}
              <div className="flex items-center sm:flex-col sm:text-center px-[18px] sm:px-0">

                {/* Image */}
                <div className="relative w-[120px] h-[150px] sm:w-[160px] sm:h-[200px] overflow-hidden rounded-xl shrink-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col items-start sm:items-center ml-6 sm:ml-0 sm:mt-4">
                  <h3 className="font-semibold text-lg">
                    {member.name}
                  </h3>

                  <p className="text-md text-black mt-1">
                    {member.role}
                  </p>

                  <a
                    href={member.linkedin}
                    className="inline-flex mt-3 self-center sm:self-auto"
                    target="_blank"
                    rel="noopener noreferrer"
                  >

                    <Image
                      src="/images/linkedin.svg"
                      alt="LinkedIn"
                      width={20}
                      height={20}
                    />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
