"use client";

import dynamic from "next/dynamic";

const OurProcessClient = dynamic(() => import("./ProcessClient"), { ssr: false });

export default function OurProcess() {
  return <OurProcessClient />;
}