import Image from "next/image";
import Home from "@/components/home";
import Feature from "@/components/home/feature";
import Section from "@/components/home/section";
import Bio from "@/components/home/bio";
import Results from "@/components/home/results";
import ProjectsSection from "@/components/home/projects";
import Comments from "@/components/home/comments";
import Choose from "@/components/home/choose";
import Team from "@/components/home/team";
import Touch from "@/components/home/touch";

export default function HomePage() {
  return (

    <main className=" w-full bg-white sm:items-start">
      <h2 className="text-black"></h2>
      <Home />
      <Feature />
      <Section />
      <Bio />
      <Results />
      <ProjectsSection />
      <Comments />
      <Choose />
      <Team />
      <Touch />
    </main>

  );
}
