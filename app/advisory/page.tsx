import "./nexa-advisory.css";
import Showreel from "@/components/advisory/showreel";
import ServicesSection from "@/components/advisory/servicesSection";
import Process from "@/components/advisory/process";
import Work from "@/components/advisory/projects";
import Team from "@/components/advisory/team";
import Faq from "@/components/advisory/faq";
import Contact from "@/components/advisory/contact";

export default function Advisory() {
  return (
    <div className="adv w-full bg-white">
      <Showreel />
      <ServicesSection />
      <Process />
      <Work />
      <Team />
      <Faq />
      <Contact />
    </div>
  );
}
