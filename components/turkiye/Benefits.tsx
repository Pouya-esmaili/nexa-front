import Row from "@/components/global/Row";

const benefits = [
  {
    num: "01",
    title: "Global mobility",
    desc: "Visa-free or visa-on-arrival access to 110+ international destinations — strengthened by Türkiye's growing diplomatic relationships.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3 12l18-8-4 18-5-7-9-3z" />
      </svg>
    ),
    purple: true,
  },
  {
    num: "02",
    title: "Family inclusion",
    desc: "Include your spouse and dependent children — securing mobility for the whole family.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.4" />
        <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M14 20c0-2.6 1.8-4.5 4-4.5s4 1.9 4 4.5" />
      </svg>
    ),
    purple: false,
  },
  {
    num: "03",
    title: "Business expansion",
    desc: "Operate at the crossroads of Europe, Central Asia, the Gulf and Africa.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3 17l6-6 4 4 8-9" /><path d="M14 6h7v7" />
      </svg>
    ),
    purple: false,
  },
  {
    num: "04",
    title: "Property appreciation",
    desc: "Major cities undergoing urban transformation — capital growth and rental income potential.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
      </svg>
    ),
    purple: true,
  },
  {
    num: "05",
    title: "Lifestyle advantages",
    desc: "Modern cities, coastal destinations and globally connected international healthcare.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="4" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.5 4.5l2 2M17.5 17.5l2 2M4.5 19.5l2-2M17.5 6.5l2-2" />
      </svg>
    ),
    purple: false,
  },
  {
    num: "06",
    title: "Fast processing",
    desc: "Typical timeline of 6–12 months — one of the fastest CBI pathways available.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
      </svg>
    ),
    purple: false,
  },
];

export default function Benefits() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <Row>
        <h2 className="text-[28px] md:text-[38px] font-bold tracking-tight mb-10 md:mb-14">
          Key Benefits of Turkish Citizenship
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b) => (
            <article
              key={b.num}
              className="relative p-6 rounded-2xl flex flex-col gap-4 overflow-hidden"
              style={
                b.purple
                  ? { background: "#1a1a22", color: "#fff" }
                  : { background: "#faf9f5", color: "#1a1a22", border: "1px solid #f0f0f0" }
              }
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={b.purple ? { background: "rgba(143,39,255,0.25)", color: "#c084fc" } : { background: "#FAF6FF", color: "#8F27FF" }}
              >
                {b.icon}
              </div>
              <span
                className="text-[11px] font-bold uppercase tracking-widest"
                style={b.purple ? { color: "rgba(255,255,255,0.3)" } : { color: "#ccc" }}
              >
                {b.num}
              </span>
              <h3 className="font-bold text-[17px]">{b.title}</h3>
              <p className="text-[13px] leading-relaxed" style={b.purple ? { color: "rgba(255,255,255,0.55)" } : { color: "#666" }}>
                {b.desc}
              </p>
            </article>
          ))}
        </div>
      </Row>
    </section>
  );
}
