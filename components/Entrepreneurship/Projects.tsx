import Image from "next/image";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const projects = [
  {
    name: "Arshia Gallery",
    tag: "Fine Jewelry · Luxury Retail",
    img: "/images/photos/1611591437281-460bfbe1220a-w700.jpg",
  },
  {
    name: "Afra Cafe",
    tag: "F&B · International",
    img: "/images/photos/1501339847302-ac426a4a7cbb-w700.jpg",
  },
  {
    name: "Green Farm",
    tag: "Sustainability · Global",
    img: "https://images.unsplash.com/photo-1542601906897-ecd40029e09e?w=700&q=80",
  },
  {
    name: "Aurora Clinic",
    tag: "Healthcare · Canada",
    img: "/images/photos/1576091160399-112ba8d25d1d-w700.jpg",
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
                  <div
                    className="w-9 h-9 rounded-full flex-shrink-0 grid place-items-center transition-all duration-[250ms] group-hover:bg-[#8F27FF] group-hover:border-[#8F27FF]"
                    style={{ background: "rgba(255,255,255,.15)", border: "1px solid rgba(255,255,255,.3)" }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.5} className="w-[14px] h-[14px]">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
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
