import "./content-creation.css";
import Hero from "@/components/content-creation/Hero";
import Problem from "@/components/content-creation/Problem";
import System from "@/components/content-creation/System";
import Social from "@/components/content-creation/Social";
import Video from "@/components/content-creation/Video";
import Brand from "@/components/content-creation/Brand";
import Process from "@/components/content-creation/Process";
import Deliver from "@/components/content-creation/Deliver";
import Faq from "@/components/content-creation/Faq";
import Cta from "@/components/content-creation/Cta";

export default function ContentCreation() {
  return (
    <div className="cc-page w-full bg-white">
      <Hero />
      <Problem />
      <System />
      <Social />
      <Video />
      <Brand />
      <Process />
      <Deliver />
      <Faq />
      <Cta />
    </div>
  );
}
