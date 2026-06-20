import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/global/LazyReveal";

// const tags = [
//   "Global Marketing Strategy",
//   "Product Development",
//   "Advanced R&D",
//   "Branding & Design",
//   "UI/UX Design",
//   "Go-to-Market",
//   "Content Strategy",
// ];

export default function Team() {
  return (
    <section className="py-20 md:py-24 bg-[#F7F6F9]">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[70px] items-center">

          {/* Left — content */}
          <Reveal variant="left" className="order-2 md:order-1">
            <div className="flex flex-col gap-5">
              <h2 className="text-[32px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1]">
                Behind the{" "}
                <span className="inline bg-[#FFE600] rounded-[3px] px-[5px] pb-[3px]">Nexa</span>
              </h2>
              <p className="text-[16px] text-[#929292] leading-[1.72]">
                NEXA is an international team with 10+ years of hands-on experience in launching
                and scaling businesses globally. Our expertise spans multiple disciplines, with a
                strong focus on execution.
              </p>
              <p className="text-[16px] text-[#929292] leading-[1.72]">
                We deliver investment-ready strategies through close collaboration with
                international consultants and legal experts, helping founders turn early-stage
                ideas into scalable, market-ready companies.
              </p>

              {/* Tags */}
              {/* <div className="flex flex-wrap gap-2 mt-2">
                {tags.map((t) => (
                  <span key={t}
                    className="px-3.5 py-1.5 bg-[#F7F6F9] border border-[#E2E2E2] rounded-full text-[14px] text-[#474747] font-medium hover:bg-[#FAF6FF] hover:border-[#8F27FF] hover:text-[#8F27FF] transition-all cursor-default">
                    {t}
                  </span>
                ))}
              </div> */}

              <Link
                href="/our-team"
                className="self-start mt-2 inline-flex items-center gap-2 px-7 py-3.5 border-[1.5px] border-[#8F27FF] text-[#8F27FF] font-semibold rounded-full text-[14px] hover:bg-[#8F27FF] hover:text-white hover:-translate-y-px transition-all">
                Meet Our Team →
              </Link>
            </div>
          </Reveal>

          {/* Right — image */}
          <Reveal variant="right" className="order-1 md:order-2">
            <div className="rounded-[24px] overflow-hidden">
              <Image
                src="/images/landing/behind.svg"
                alt="Behind Nexa"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
