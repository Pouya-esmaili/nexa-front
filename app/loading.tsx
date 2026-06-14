"use client";

import { useEffect, useState } from "react";

export default function Loading() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // ensure the loader shows at least briefly for fast navigations
    const t = setTimeout(() => setVisible(false), 800);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      {/* thin top progress bar */}
      <div className="absolute top-0 left-0 w-full">
        <div className="h-1 bg-gradient-to-r from-[#8F27FF] via-[#C36CFF] to-[#00D4FF] animate-loading" />
      </div>

      {/* center spinner overlay (subtle) */}
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
