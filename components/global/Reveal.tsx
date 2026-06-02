"use client";

import { useEffect, useRef, useState, ReactNode, CSSProperties } from "react";

interface RevealProps {
  children: ReactNode;
  /** Tailwind / custom className forwarded to the wrapper div */
  className?: string;
  /** Extra inline styles forwarded to the wrapper div */
  style?: CSSProperties;
  /**
   * Animation variant:
   * - "up"    → fade + slide from bottom (default)
   * - "left"  → fade + slide from left
   * - "right" → fade + slide from right
   * - "scale" → fade + slight scale-up
   * - "fade"  → pure opacity fade
   */
  variant?: "up" | "left" | "right" | "scale" | "fade";
  /** Delay in milliseconds before the transition starts (for stagger effects) */
  delay?: number;
  /** Transition duration in milliseconds (default: 600) */
  duration?: number;
  /** IntersectionObserver threshold (default: 0.1) */
  threshold?: number;
}

const HIDDEN: Record<NonNullable<RevealProps["variant"]>, CSSProperties> = {
  up:    { opacity: 0, transform: "translateY(28px)" },
  left:  { opacity: 0, transform: "translateX(-28px)" },
  right: { opacity: 0, transform: "translateX(28px)" },
  scale: { opacity: 0, transform: "scale(0.94)" },
  fade:  { opacity: 0, transform: "none" },
};

const VISIBLE: CSSProperties = { opacity: 1, transform: "none" };

export default function Reveal({
  children,
  className,
  style,
  variant = "up",
  delay = 0,
  duration = 600,
  threshold = 0.1,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        ...(visible ? VISIBLE : HIDDEN[variant]),
        transition: `opacity ${duration}ms ease, transform ${duration}ms ease`,
        transitionDelay: visible ? `${delay}ms` : "0ms",
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
