import Image from "next/image";

export default function TimelineImage() {
  return (
    <div className="row-span-11 flex justify-center">
      <Image
        src="/images/about/timeline.svg"
        alt="Timeline"
        width={360}
        height={1400}
        priority
      />
    </div>
  );
}
