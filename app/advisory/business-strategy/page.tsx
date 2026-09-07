import "./business-strategy.css";
import Hero from "@/components/business-strategy/Hero";
import Services from "@/components/business-strategy/Services";
import Work from "@/components/business-strategy/Work";
import Process from "@/components/business-strategy/Process";
import Faq from "@/components/business-strategy/Faq";
import Cta from "@/components/business-strategy/Cta";

export default function BusinessStrategy() {
  return (
    <div className="bs w-full bg-white">
      <Hero />
      <Services />
      <Work />
      <Process />
      <Faq />
      <Cta />
    </div>
  );
}
