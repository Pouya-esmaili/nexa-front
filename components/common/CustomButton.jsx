import Link from 'next/link';

const CustomButton = ({ href, text, textColor = "#8F27FF", hoverBg = "#8F27FF", hoverText = "#FFFFFF" }) => {
  return (
    <Link
      href={href}
      className={`mt-7 h-12 w-full border rounded-3xl px-6 py-3 text-base md:w-max md:text-sm lg:w-60 flex items-center justify-center transition-colors duration-300`}
      style={{
        color: textColor,
        borderColor: textColor,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = hoverBg;
        e.currentTarget.style.color = hoverText;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "transparent";
        e.currentTarget.style.color = textColor;
      }}
    >
      {text}
    </Link>
  );
};

export default CustomButton;
