import "./visual-identity.css";
import Hero from "@/components/visual-identity/Hero";
import Work from "@/components/visual-identity/Work";
import DeepDive from "@/components/visual-identity/DeepDive";
import MarkBuilder from "@/components/visual-identity/MarkBuilder";
import Palette from "@/components/visual-identity/Palette";
import Typography from "@/components/visual-identity/Typography";
import Apps from "@/components/visual-identity/Apps";
import Process from "@/components/visual-identity/Process";
import Faq from "@/components/visual-identity/Faq";
import Cta from "@/components/visual-identity/Cta";

export default function VisualIdentity() {
  return (
    <div className="vi-page w-full bg-white">
      <Hero />
      <Work />
      <DeepDive />
      <MarkBuilder />
      <Palette />
      <Typography />
      <Apps />
      <Process />
      <Faq />
      <Cta />
    </div>
  );
}
