"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

/**
 * Wrap entire app — Lenis takes over native scrolling for buttery
 * smooth motion. Calibré pour un feeling cinématographique :
 * légère inertie, easing exponentiel, pas trop lent.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.4,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.4,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      }}
    >
      {children}
    </ReactLenis>
  );
}
