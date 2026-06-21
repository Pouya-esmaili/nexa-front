import Image from "next/image";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const projects = [
  {
    name: "Arshia Gallery",
    tag: "Fine Jewelry · Luxury Retail",
    img: "/images/Entrepreneurship/Arshia Gallery.jpg",
  },
  {
    name: "Afra Cafe",
    tag: "F&B · International",
    img: "/images/Entrepreneurship/Afra Cafe.jpg",
  },
  {
    name: "Green Farm",
    tag: "Sustainability · Global",
    img: "/images/Entrepreneurship/Green Farm.jpg",
  },
  {
    name: "Aurora Clinic",
    tag: "Healthcare · Canada",
    img: "/images/Entrepreneurship/Aurora Clinic.jpg",
  },
];

export default function Projects() {
  return (
    <section className="py-[90px] bg-white">
      <Row>
        <Reveal variant="up">
          <div className="text-center max-w-[700px] mx-auto mb-14">
            <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1]">
              Our Previous <span className="highlight">Projects</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[22px]">
          {projects.map((p, i) => (
            <Reveal key={i} variant="up" delay={i * 80}>
              <div
                className="group relative overflow-hidden cursor-pointer"
                style={{ borderRadius: 20, height: 260 }}
              >
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0 transition-all duration-300"
                  style={{ background: "linear-gradient(180deg,transparent 40%,rgba(0,0,0,.75) 100%)" }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(180deg,rgba(143,39,255,.08) 0%,rgba(0,0,0,.85) 100%)" }}
                />
                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-[22px] flex items-end justify-between">
                  <div>
                    <div className="text-white font-bold text-[16px] tracking-[-0.01em]">{p.name}</div>
                    <div className="text-white/65 text-[12px] mt-1 font-medium">{p.tag}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Row>
    </section>
  );
}
