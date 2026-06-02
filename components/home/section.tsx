// components/Section.tsx
import Image from "next/image";
import Row from "../global/Row";

export default function Section() {
  const images = [
    "/images/landing/taavon.svg",
    "/images/landing/british.svg",
    "/images/landing/anjoman.svg",
    "/images/landing/pardis.svg",
  ];

  return (
    <section className="w-full px-4 md:mb-4">

      <div className="hidden sm:block">
        <Row className="flex gap-20 justify-between items-center">
          {images.map((src, idx) => (
            <Image
              key={idx}
              src={src}
              alt={`image-${idx}`}
              width={200}
              height={200}
              className="rounded-md"
            />
          ))}
        </Row>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:hidden">
        {images.map((src, idx) => (
          <Image
            key={idx}
            src={src}
            alt={`image-${idx}`}
            width={200}
            height={200}
            className="rounded-md w-full object-contain"
          />
        ))}
      </div>
    </section>
  );
}
