"use client";

import {
  animate,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useEffect, useRef } from "react";

type AnimatedNumberProps = {
  value: number;
  /** Nombre de décimales (par défaut 0) */
  decimals?: number;
  /** Durée d'animation en secondes */
  duration?: number;
  /** Délai avant démarrage */
  delay?: number;
  /** Préfixe (ex : "+") */
  prefix?: string;
  /** Suffixe (ex : "★", "+") */
  suffix?: string;
  className?: string;
};

/**
 * Compte de 0 à `value` au moment où le composant entre dans le viewport.
 * Utilise un MotionValue dérivé (texte formaté complet préfixe + valeur + suffixe)
 * écrit dans le DOM via une seule subscription stable — pas de re-render React
 * par frame, pas de race entre rendu React initial et subscribe.
 */
export function AnimatedNumber({
  value,
  decimals = 0,
  duration = 2.2,
  delay = 0,
  prefix = "",
  suffix = "",
  className,
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const prefersReducedMotion = useReducedMotion();

  const motionValue = useMotionValue(0);
  const formatted: MotionValue<string> = useTransform(motionValue, (latest) =>
    `${prefix}${latest.toFixed(decimals)}${suffix}`,
  );

  // Écrit la valeur initiale dans le DOM dès le mount, puis subscribe.
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    node.textContent = formatted.get();
    return formatted.on("change", (latest) => {
      node.textContent = latest;
    });
  }, [formatted]);

  // Déclenche l'animation quand le composant entre dans le viewport.
  useEffect(() => {
    if (!inView) return;

    if (prefersReducedMotion) {
      motionValue.set(value);
      return;
    }

    const controls = animate(motionValue, value, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
    });

    return () => controls.stop();
  }, [inView, value, duration, delay, motionValue, prefersReducedMotion]);

  return (
    <span
      ref={ref}
      className={className}
      aria-label={`${prefix}${value.toFixed(decimals)}${suffix}`}
    >
      {`${prefix}${(0).toFixed(decimals)}${suffix}`}
    </span>
  );
}
