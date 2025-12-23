
type HeroProps = {
    children: React.ReactNode;
    className?: string;
};

const Row = ({ children, className = 'ّ' }: HeroProps) => {
    return (
        <div className={`px-18 mx-auto ${className}`}>
            {children}
        </div>
    );
};

export default Row;