import Story from "@/components/About/story";
import TimelineSection from "@/components/About/TimelineSection";


export default function AboutUs() {
  return (
    <>
      <div className="w-full bg-white sm:items-start">
        <Story />
        <TimelineSection />
      </div>
    </>
  );
}
