import Story from "@/components/About/story";
import VisionMission from "@/components/About/visionmission";
import AcademyTimeline from "@/components/About/academyTimeline";
import DiacoTimeline from "@/components/About/diacoTimeline";
import VisionTimeline from "@/components/About/visionTimeline";
import TripTimeline from "@/components/About/tripTimeline";
import InnovationTimeline from "@/components/About/innovationTimeline";
import PreventigeneTimeline from "@/components/About/diacoTimeline";
import AutilabTimeline from "@/components/About/autilabTimeline";
import LandacraftTimeline from "@/components/About/landacraftTimeline";
import Certificat from "@/components/About/certificate";
// import TimelineSection from "@/components/About/TimelineSection";


export default function AboutUs() {
  return (
    <>
      <div className="w-full bg-white sm:items-start">
        <Story />
        <VisionMission />
        <AcademyTimeline />
        <DiacoTimeline />
        <VisionTimeline />
        <TripTimeline />
        <InnovationTimeline />
        <PreventigeneTimeline />
        <AutilabTimeline />
        <LandacraftTimeline />
        <Certificat />
        {/* <TimelineSection /> */}
      </div>
    </>
  );
}
