import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const projects = [
  {
    name: "Arshia Gallery",
    tag: "Fine Jewelry · Luxury Retail",
    img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=700&q=80",
  },
  {
    name: "Afra Cafe",
    tag: "F&B · International",
    img: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=700&q=80",
  },
  {
    name: "Green farm",
    tag: "Sustainability · Global",
    img: "https://images.unsplash.com/photo-1542601906897-ecd40029e09e?w=700&q=80",
  },
  {
    name: "Aurora Clinic",
    tag: "Healthcare · Canada",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=80",
  },
];

export default function StartupPreviousProjects() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center mb-12">
            Our Previous <span className="text-[#8F27FF]">Projects</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((p, i) => (
            <Reveal key={i} variant="up" delay={i * 80}>
              <div
                className="group relative rounded-[20px] overflow-hidden h-[300px] md:h-[380px]"
                style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}
              >
                {/* BG image */}
                <div
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${p.img}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Text */}
                <div className="absolute inset-x-0 bottom-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-white font-bold text-[17px] leading-tight">{p.name}</div>
                  <div className="text-white/65 text-[12px] mt-1">{p.tag}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Row>
    </section>
  );
}
