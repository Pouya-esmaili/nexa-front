import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const items = [
  { title: "Experienced Business Owners Looking to Expand Internationally",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg> },
  { title: "Highly Skilled Professionals Ready to Compete Internationally",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]"><path d="M22 2L11 13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> },
  { title: "Investors Actively Looking to Access High-Potential Opportunities",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> },
  { title: "Educated and Ambitious Young Entrepreneurs Seeking Growth",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
];

export default function StartupDesignedFor() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center mb-12">
            Who Is This Program Designed For?
          </h2>
        </Reveal>
        <Reveal variant="up" delay={80}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#E2E2E2] rounded-[20px] overflow-hidden">
            {items.map((item, i) => (
              <div key={i}
                className="flex flex-col gap-4 p-[34px_30px] hover:bg-[#FAF6FF] transition-colors group"
                style={{ borderRight: i < 3 ? "1px solid #E2E2E2" : "none" }}>
                <div className="w-11 h-11 bg-[#F7F6F9] border border-[#E2E2E2] rounded-[12px] grid place-items-center flex-shrink-0 transition-all group-hover:bg-[#8F27FF] group-hover:border-[#8F27FF]">
                  <span className="text-[#8F27FF] group-hover:text-white transition-colors">{item.icon}</span>
                </div>
                <h4 className="text-[15px] font-semibold text-black leading-[1.45] tracking-[-0.01em]">{item.title}</h4>
              </div>
            ))}
          </div>
        </Reveal>
      </Row>
    </section>
  );
}
