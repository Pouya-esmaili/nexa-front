"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";

const Reveal = dynamic(() => import("./Reveal"), {
  ssr: false,
  loading: () => null,
}) as unknown as ComponentType<any>;

export default Reveal;
