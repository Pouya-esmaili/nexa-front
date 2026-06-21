export default function FormLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-4 py-8 md:px-10 lg:px-16 max-w-[1440px] mx-auto">
      {children}
    </div>
  );
}
