import Row from "@/components/global/Row";

interface Province {
  name: string;
  bg: string;
  stats: { label: string; value: string }[];
}

const keyProvinces: Province[] = [
  {
    name: "Ontario",

    bg: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=600&q=80",
    stats: [
      { label: "Min Net Worth", value: "CAD 800K" },
      { label: "Min Investment", value: "CAD 200K" },
      { label: "Operation", value: "18–20 mo" },
    ],
  },
  {
    name: "British Columbia",
   
    bg: "https://images.unsplash.com/photo-1559511260-66a654ae982a?w=600&q=80",
    stats: [
      { label: "Min Net Worth", value: "CAD 600K" },
      { label: "Min Investment", value: "CAD 200K" },
      { label: "Operation", value: "12–20 mo" },
    ],
  },
  {
    name: "Alberta",

    bg: "https://images.unsplash.com/photo-1609825488888-3a766db05542?w=600&q=80",
    stats: [
      { label: "Min Net Worth", value: "Flexible" },
      { label: "Min Investment", value: "CAD 100K+" },
      { label: "Operation", value: "12–18 mo" },
    ],
  },
  {
    name: "Quebec",
 
    bg: "https://images.unsplash.com/photo-1519178614-68673b201f36?w=600&q=80",
    stats: [
      { label: "Min Net Worth", value: "CAD 900K" },
      { label: "Min Investment", value: "CAD 200K" },
      { label: "Operation", value: "Verified" },
    ],
  },
  {
    name: "Manitoba",
  
    bg: "https://images.unsplash.com/photo-1572206912757-5a78ff4d79be?w=600&q=80",
    stats: [
      { label: "Min Net Worth", value: "CAD 500K" },
      { label: "Min Investment", value: "CAD 150K" },
      { label: "Operation", value: "12 mo" },
    ],
  },
  {
    name: "Saskatchewan",
    
    bg: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80",
    stats: [
      { label: "Min Net Worth", value: "CAD 500K" },
      { label: "Min Investment", value: "CAD 300K" },
      { label: "Operation", value: "6–12 mo" },
    ],
  },
  {
    name: "Yukon",
   
    bg: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&q=80",
    stats: [
      { label: "Min Net Worth", value: "CAD 500K" },
      { label: "Min Investment", value: "CAD 300K" },
      { label: "Operation", value: "12 mo" },
    ],
  },
  {
    name: "NW Territories",
  
    bg: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=600&q=80",
    stats: [
      { label: "Min Net Worth", value: "CAD 250–500K" },
      { label: "Min Investment", value: "CAD 150K" },
      { label: "Operation", value: "12 mo" },
    ],
  },
];

const atlanticProvinces: Province[] = [
  {
    name: "New Brunswick",
    
    bg: "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=600&q=80",
    stats: [
      { label: "Min Net Worth", value: "CAD 500K" },
      { label: "Min Investment", value: "CAD 150K" },
      { label: "Operation", value: "12 mo" },
    ],
  },
  {
    name: "Nova Scotia",
  
    bg: "https://images.unsplash.com/photo-1565024144815-79bc8094a0d3?w=600&q=80",
    stats: [
      { label: "Min Net Worth", value: "CAD 600K" },
      { label: "Min Investment", value: "CAD 150K" },
      { label: "Operation", value: "12 mo" },
    ],
  },
  {
    name: "Prince Edward Island",
   
    bg: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80",
    stats: [
      { label: "Min Net Worth", value: "CAD 600K" },
      { label: "Min Investment", value: "CAD 150K" },
      { label: "Operation", value: "12 mo" },
    ],
  },
  {
    name: "Newfoundland & Labrador",
   
    bg: "https://images.unsplash.com/photo-1504608524841-42584120d693?w=600&q=80",
    stats: [
      { label: "Min Net Worth", value: "CAD 500K" },
      { label: "Min Investment", value: "CAD 200K" },
      { label: "Operation", value: "12 mo" },
    ],
  },
];

function ProvinceCard({ province }: { province: Province }) {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden border border-gray-200 transition-all hover:-translate-y-1.5 group"
      style={{ boxShadow: "0 1px 2px rgba(0,0,0,0.03)" }}
    >
      {/* Image */}
      <div
        className="h-[150px] relative"
        style={{
          backgroundImage: `url('${province.bg}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.72))" }}
        />
        {/* Name */}
        <span className="absolute bottom-3 left-3.5 text-white font-semibold text-[15px] z-10">
          {province.name}
        </span>
      </div>

      {/* Body */}
      <div className="p-[18px]">
        {province.stats.map((s, i) => (
          <div
            key={s.label}
            className="flex justify-between items-center text-xs py-2"
            style={{ borderBottom: i < province.stats.length - 1 ? "1px dashed #E2E2E2" : "none" }}
          >
            <span className="text-gray-500 font-medium">{s.label}</span>
            <span className="font-bold text-black">{s.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <span className="text-[13px] font-bold tracking-[0.1em] uppercase text-gray-500 whitespace-nowrap">
        {text}
      </span>
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  );
}

export default function Provinces() {
  return (
    <section className="py-16 md:py-24 bg-white">

      {/* ========== MOBILE ========== */}
      <div className="md:hidden px-5">
        <h2 className="text-3xl font-bold text-center tracking-tight mb-8">
          Key Provinces & Entrepreneur Streams
        </h2>
        <SectionLabel text="Key Provinces" />
        <div className="grid grid-cols-2 gap-3 mb-10">
          {keyProvinces.map((p) => <ProvinceCard key={p.name} province={p} />)}
        </div>
        <div className="border-t-2 border-gray-200 pt-8" style={{ position: "relative" }}>
          <div className="absolute top-[-2px] left-0 w-14 h-0.5 bg-[#8F27FF]" />
          <SectionLabel text="Atlantic Provinces" />
          <div className="grid grid-cols-2 gap-3">
            {atlanticProvinces.map((p) => <ProvinceCard key={p.name} province={p} />)}
          </div>
        </div>
      </div>

      {/* ========== DESKTOP ========== */}
      <div className="hidden md:block">
        <Row>
          <h2 className="text-4xl font-bold text-center tracking-tight mb-12">
            Key Canadian Provinces & Entrepreneur Streams
          </h2>

          <SectionLabel text="Key Provinces" />
          <div className="grid grid-cols-4 gap-[18px] mb-14">
            {keyProvinces.map((p) => <ProvinceCard key={p.name} province={p} />)}
          </div>

          <div className="relative border-t-2 border-gray-200 pt-14">
            <div className="absolute top-[-2px] left-0 w-14 h-0.5 bg-[#8F27FF]" />
            <SectionLabel text="Atlantic Provinces" />
            <div className="grid grid-cols-4 gap-[18px]">
              {atlanticProvinces.map((p) => <ProvinceCard key={p.name} province={p} />)}
            </div>
          </div>
        </Row>
      </div>

    </section>
  );
}
