import Row from "@/components/global/Row";

const profiles = [
  {
    label: "High-net-worth individuals",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 3l4 5-4 13-4-13 4-5z" /><path d="M8 8h8" />
      </svg>
    ),
  },
  {
    label: "International entrepreneurs",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M5 19l4-4M14 5c5 0 5 5 5 5s0 5-5 5c-3 0-4-3-4-3l-3-3s0-4 7-4z" /><circle cx="14" cy="10" r="1.5" />
      </svg>
    ),
  },
  {
    label: "Startup founders",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" />
      </svg>
    ),
  },
  {
    label: "Business owners expanding",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18" />
      </svg>
    ),
  },
  {
    label: "Asset diversification",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="9" /><path d="M12 3v9l7 4" />
      </svg>
    ),
  },
  {
    label: "Families seeking mobility",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.4" />
        <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M14 20c0-2.6 1.8-4.5 4-4.5s4 1.9 4 4.5" />
      </svg>
    ),
  },
  {
    label: "Alternative citizenship seekers",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z" /><path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

export default function Eligibility() {
  return (
    <section className="py-16 md:py-20 bg-[#faf9f5]">
      <Row>
        <h2 className="text-[28px] md:text-[38px] font-bold tracking-tight mb-10 md:mb-14 text-center">
          Who Is This Program Designed For?
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {profiles.map((p) => (
            <div
              key={p.label}
              className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-white"
              style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.04)", border: "1px solid #f0f0f0" }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-[#8F27FF]"
                style={{ background: "#FAF6FF" }}
              >
                {p.icon}
              </div>
              <span className="text-[14px] font-medium text-[#333] leading-snug">{p.label}</span>
            </div>
          ))}
        </div>
      </Row>
    </section>
  );
}
