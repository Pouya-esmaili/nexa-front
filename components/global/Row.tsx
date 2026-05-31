
type HeroProps = {
    children: React.ReactNode;
    className?: string;
};

const Row = ({ children, className = '' }: HeroProps) => {
    return (
        <div className={`px-4 md:px-10 lg:px-16 mx-auto max-w-[1440px] w-full ${className}`}>
            {children}
        </div>
    );
};

export default Row;