interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  side: "left" | "right";
  reverse?: boolean;
}

export default function TimelineItem({
  date,
  title,
  description,
  side,
  reverse = false,
}: TimelineItemProps) {
  const isLeft = side === "left";

  const dateBlock = (
    <div
      className={`flex items-center ${
        isLeft ? "justify-end text-right" : "justify-start text-left"
      }`}
    >
      <span className="text-[#8F27FF] text-3xl font-semibold">
        {date}
      </span>
    </div>
  );

  const contentBlock = (
    <div
      className={`flex flex-col justify-center ${
        isLeft ? "text-left" : "text-right"
      }`}
    >
      <h3 className="text-lg font-semibold text-left">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed mt-2 text-left">
        {description}
      </p>
    </div>
  );

  return (
    <>
      {reverse ? contentBlock : dateBlock}
      {reverse ? dateBlock : contentBlock}
      <div />
    </>
  );
}
