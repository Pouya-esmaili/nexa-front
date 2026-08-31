import "./web-design.css";
import Hero from "@/components/web-design/Hero";
import WhatIs from "@/components/web-design/WhatIs";
import Work from "@/components/web-design/Work";
import Process from "@/components/web-design/Process";
import Output from "@/components/web-design/Output";
import Faq from "@/components/web-design/Faq";
import Cta from "@/components/web-design/Cta";

export default function WebDesign() {
  return (
    <div className="wd w-full bg-white">
      <Hero />
      <WhatIs />
      <Work />
      <Process />
      <Output />
      <Faq />
      <Cta />
    </div>
  );
}
