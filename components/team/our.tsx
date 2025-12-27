import Image from "next/image";

export default function Results() {
  return (
    <section className="relative w-full mt-8 h-[145px] md:h-[500px]">
      <Image
        src="/images/ourteam/IMG_0891 2.svg"
        alt="map"
        fill
        className="object-cover"
      />
    </section>
  );
}
