import Row from "@/components/global/Row";
import Reveal from "@/components/global/LazyReveal";
import Image from "next/image";

const projects = [
  { name: "Landa Trip", tag: "Tourism · Travel", img: "/images/photos/1469854523086-cc02fe5d8800-w700.jpg" },
  { name: "Landa Craft", tag: "Handcraft · Artisan Market", img: "/images/photos/1565193566173-7a0ee3dbe261-w700.jpg" },
  { name: "AutiLab", tag: "Autism Support · Child EdTech", img: "/images/photos/1588072432836-e10032774350-w700.jpg" },
  { name: "Vision Raft", tag: "Virtual Reality · Immersive Tech", img: "/images/photos/1617802690992-15d93263d3a9-w700.jpg" },
  { name: "Diaco", tag: "Business Solutions · Corporate", img: "/images/photos/1600880292203-757bb62b4baf-w700.jpg" },
  { name: "Arshia Gallery", tag: "Fine Jewelry · Luxury Retail", img: "/images/photos/1607082348824-0a96f2a4b9da-w700.jpg" },
  { name: "Preventie Gene", tag: "Genetics · Health Prevention", img: "/images/photos/1532187643603-ba119ca4109e-w700.jpg" },
  { name: "SteadySkull", tag: "Surgical Device · MedTech", img: "/images/photos/1551190822-a9333d879b1f-w700.jpg" },
];

export default function Projects() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center mb-14">
            Our Successful Projects
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-[22px]">
          {projects.map((p, i) => (
            <Reveal key={p.name} variant="up" delay={i * 50}>
              <div className="rounded-[20px] overflow-hidden relative h-[260px] cursor-pointer group">
                <div className="absolute inset-0">
                  <Image src={p.img} alt={p.name} fill sizes="(max-width: 640px) 100vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="absolute inset-0 transition-all duration-300 [background:linear-gradient(180deg,transparent_40%,rgba(0,0,0,0.75)_100%)] group-hover:[background:linear-gradient(180deg,rgba(143,39,255,0.08)_0%,rgba(0,0,0,0.85)_100%)]" />
                <div className="absolute bottom-0 left-0 right-0 p-[22px]">
                  <div className="text-white font-bold text-[16px] tracking-[-0.01em]">{p.name}</div>
                  <div className="text-[12px] text-[rgba(255,255,255,0.65)] mt-1 font-medium">{p.tag}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Row>
    </section>
  );
}
