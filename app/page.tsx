import Hero from "@/components/home";
import Ticker from "@/components/home/section";
import Feature from "@/components/home/feature";
import Bio from "@/components/home/bio";
import Results from "@/components/home/results";
import ProjectsSection from "@/components/home/projects";
import Comments from "@/components/home/comments";
import Choose from "@/components/home/choose";
import Team from "@/components/home/team";
import Form from "@/components/home/form";

export default function HomePage() {
  return (
    <main className="w-full bg-white">
      <Hero />
      <Ticker />
      <Feature />
      <Bio />
      <Results />
      <ProjectsSection />
      <Comments />
      <Choose />
      <Team />
      <Form />
    </main>
  );
}
