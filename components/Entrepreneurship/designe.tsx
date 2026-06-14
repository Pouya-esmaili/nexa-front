"use client";

import dynamic from "next/dynamic";

const DesigneClient = dynamic(() => import('./DesigneClient'), { ssr: false });

export default function EntrepreneurshipDesignedSection() {
  return <DesigneClient />;
}