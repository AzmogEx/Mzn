"use client";

import { motion, useReducedMotion } from "motion/react";
import { AnimatedNumber } from "@/components/motion/animated-number";

type Stat = {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  /** Petit mot d'introduction (ex: "Plus de") */
  kicker?: string;
};

const STATS: Stat[] = [
  {
    kicker: "Plus de",
    value: 500,
    suffix: "",
    label: "Projets réalisés",
  },
  {
    value: 8,
    suffix: " ans",
    label: "D'expertise broadcast",
  },
  {
    value: 4.9,
    decimals: 1,
    suffix: "★",
    label: "Note moyenne client",
  },
];

/**
 * Bandeau Stats — 3 chiffres clés, separés par hairlines verticales.
 * Animation à l'entrée dans le viewport :
 *   1. Hairline horizontale haut/bas (scaleX 0 → 1)
 *   2. Ligne or au-dessus de chaque chiffre (deploy 0 → 100%)
 *   3. Count-up des chiffres
 *   4. Labels fade-in
 */
export function StatsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="stats-heading"
      className="relative border-y border-border bg-background py-24 md:py-32"
    >
      <h2 id="stats-heading" className="sr-only">
        Chiffres clés du studio
      </h2>

      {/* Lignes décoratives top/bottom qui se déploient */}
      <motion.span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px origin-left bg-gold/40"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.span
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px origin-right bg-gold/40"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      />

      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 font-mono text-[10px] uppercase tracking-[0.4em] text-foreground-subtle md:mb-20"
        >
          (03) — Le studio en chiffres
        </motion.p>

        {/* Grille des stats */}
        <ul className="grid grid-cols-1 gap-px md:grid-cols-3 md:gap-0">
          {STATS.map((stat, i) => (
            <li
              key={stat.label}
              className={[
                "relative px-2 py-10 md:px-10 md:py-0",
                i > 0 && "md:border-l md:border-border",
                i > 0 && i < STATS.length && "border-t border-border md:border-t-0",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {/* Ligne or qui se déploie au-dessus du chiffre */}
              <motion.span
                aria-hidden
                className="absolute left-0 top-0 hidden h-px w-12 origin-left bg-gold md:left-10 md:block"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 1.1,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.4 + i * 0.15,
                }}
              />

              {/* Kicker optionnel */}
              {stat.kicker && (
                <motion.span
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.5 + i * 0.15,
                  }}
                  className="mb-3 block font-mono text-[10px] uppercase tracking-[0.32em] text-foreground-subtle md:mt-8"
                >
                  {stat.kicker}
                </motion.span>
              )}

              {/* Le chiffre */}
              <div
                className={[
                  "block font-serif text-[clamp(3.5rem,9vw,7rem)] font-normal leading-[0.95] tracking-[-0.03em] text-foreground",
                  !stat.kicker && "md:mt-8",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <AnimatedNumber
                  value={stat.value}
                  decimals={stat.decimals}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  delay={prefersReducedMotion ? 0 : 0.6 + i * 0.15}
                  duration={2.4}
                />
              </div>

              {/* Label */}
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.9 + i * 0.15,
                }}
                className="mt-6 block max-w-[18rem] font-sans text-sm leading-relaxed text-foreground-muted"
              >
                {stat.label}
              </motion.span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
