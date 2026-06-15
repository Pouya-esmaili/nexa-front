import HeroTeam from "@/components/team/our";
import FounderSection from "@/components/team/academy";
import TeamGrid from "@/components/team/cart";
import ValuesSection from "@/components/team/values";
import OfficesSection from "@/components/team/offices";
import CtaDark from "@/components/team/cta-dark";

export default function OurTeam() {
  return (
    <main className="w-full bg-white overflow-x-hidden">
      <HeroTeam />
      <FounderSection />
      <TeamGrid />
      <ValuesSection />
      <OfficesSection />
      <CtaDark />
    </main>
  );
}
