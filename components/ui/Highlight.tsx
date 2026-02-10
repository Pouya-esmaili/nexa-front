type HighlightProps = {
  children: React.ReactNode;
};

const Highlight = ({ children }: HighlightProps) => {
  return (
    <span className="relative inline-block px-1 overflow-visible">
      <span className="relative z-10 font-bold">
        {children}
      </span>

      <span
        aria-hidden
        className="absolute inset-x-0 bottom-1 h-[55%] bg-[#FFE600] z-0 rotate-[-1deg]"
      />
    </span>
  );
};

export default Highlight;
