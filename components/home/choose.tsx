import type { ReactNode } from "react";
import Reveal from "@/components/global/Reveal";

const items: {  icon: ReactNode; title: string }[] = [
  {
    
    icon: (
      <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
    ),
    title: "Partnered With Government-Certified Canadian Lawyers",
  },
  {

    icon: (
      <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
    ),
    title: "Full Service From Contract To Settlement In Canada",
  },
  {
    
    icon: (
      <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
    ),
    title: "Global Team Of Young Professionals And Experts",
  },
  {
   
    icon: (
      <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
    ),
    title: "Registered Legal Entity In Canada, Compliant & Active",
  },
  {
   
    icon: (
      <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
    ),
    title: "Connected To A Strong Nationwide Network",
  },
  {
   
    icon: (
      <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
    ),
    title: "Supported By Senior Business Consultants",
  },
];

export default function Choose() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-[1240px] mx-auto px-6">

        <Reveal variant="up">
          <div className="text-center max-w-[700px] mx-auto mb-14">
            <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1]">
              Why Choose Us?
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 border border-[#E2E2E2] rounded-[28px] overflow-hidden bg-white">
          {items.map((item, i) => (
            <Reveal key={i} variant="up" delay={i * 60}>
              <div
                className={[
                  "group p-6 md:p-[30px] hover:bg-[#FAF6FF] transition-colors h-full",
                  i < 5 ? "border-b border-[#E2E2E2]" : "",
                  i % 3 !== 2 ? "md:border-r md:border-[#E2E2E2]" : "md:border-r-0",
                  i < 3 ? "md:border-b md:border-[#E2E2E2]" : "md:border-b-0",
                ].join(" ")}
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-11 h-11 bg-[rgba(143,39,255,0.08)] rounded-[12px] grid place-items-center text-[#8F27FF] group-hover:bg-[#8F27FF] group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <h4 className="text-[15px] md:text-[16px] font-medium text-black leading-[1.4] tracking-[-0.01em]">
                    {item.title}
                  </h4>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
