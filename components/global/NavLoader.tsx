"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function NavLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // when pathname changes, show loader briefly for fast navigations
    if (!pathname) return;
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      <div className="absolute top-0 left-0 w-full">
        <div className="h-1 bg-gradient-to-r from-[#8F27FF] via-[#C36CFF] to-[#00D4FF] animate-loading" />
      </div>

      <div className="flex items-center justify-center h-full">
        <div className="w-12 h-12 rounded-full border-4 border-white/20 border-t-white animate-spin shadow-lg" />
      </div>

      <style>{`
        @keyframes loading { 0% { transform: translateX(-25%); } 100% { transform: translateX(25%); } }
        .animate-loading { animation: loading 1s linear infinite; }
      `}</style>
    </div>
  );
}
