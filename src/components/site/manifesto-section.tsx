"use client";

import { motion, useReducedMotion } from "motion/react";
import { RevealText } from "@/components/motion/reveal-text";

/* ==================================================================
   Section Manifeste — bloc éditorial entre le Hero et les Chiffres.
   Donne corps à la promesse "Capturer / Diffuser / Réveiller" :
     · drop cap massif sur le manifeste
     · 3 piliers en grille avec hairline gold animée
     · respect prefers-reduced-motion
   ================================================================== */

type Pillar = {
  number: string;
  verb: string;
  title: string;
  body: string;
};

const PILLARS: Pillar[] = [
  {
    number: "I.",
    verb: "Capturer",
    title: "L'instant juste, pas l'instant facile.",
    body: "Repérage, écriture, lumière. Chaque captation est préparée pour qu'au tournage, on ne fasse plus que regarder ce qui doit être vu.",
  },
  {
    number: "II.",
    verb: "Diffuser",
    title: "L'expertise, sans dilution.",
    body: "Plateaux TV mobiles, streaming 4K HDR, multi-caméras. La régie broadcast professionnelle déplacée là où votre public se trouve, en latence sub-seconde.",
  },
  {
    number: "III.",
    verb: "Réveiller",
    title: "La mémoire qu'on transmet.",
    body: "Documentaires de vie, biographies vidéo, ateliers en EHPAD. Filmer l'humain avec la pudeur et la précision qu'exige ce qui ne se rejouera pas.",
  },
];

export function ManifestoSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="manifeste"
      aria-labelledby="manifesto-heading"
      className="relative scroll-mt-24 border-t border-border bg-background py-24 md:py-40"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        {/* En-tête éditoriale */}
        <div className="mb-20 grid gap-8 md:mb-32 md:grid-cols-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-[10px] uppercase tracking-[0.4em] text-foreground-subtle md:col-span-3"
          >
            (02) — Manifeste
          </motion.p>

          <h2
            id="manifesto-heading"
            className="font-serif text-balance text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] tracking-[-0.02em] text-foreground md:col-span-9"
          >
            <RevealText immediate={false} stagger={0.05} className="block">
              Trois <em className="italic">verbes</em>.
            </RevealText>
            <RevealText
              immediate={false}
              stagger={0.05}
              delay={0.2}
              className="block text-foreground-muted"
            >
              Une seule exigence.
            </RevealText>
          </h2>
        </div>

        {/* Chapeau éditorial avec drop cap */}
        <div className="mb-24 grid gap-8 md:mb-32 md:grid-cols-12">
          <div className="md:col-span-3" />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl font-serif text-[clamp(1.25rem,2vw,1.75rem)] leading-[1.45] text-foreground md:col-span-9"
          >
            <span
              aria-hidden
              className="float-left mr-4 mt-2 font-serif text-[clamp(4.5rem,9vw,7.5rem)] leading-[0.78] tracking-[-0.04em] text-gold"
            >
              D
            </span>
            epuis 2017, MIS refuse l&apos;image jetable. Chaque film, chaque
            captation, chaque atelier est conçu comme une pièce qui doit tenir
            dans dix ans, vingt ans. Parce qu&apos;une mémoire qu&apos;on filme
            n&apos;a pas le droit d&apos;être approximative.
          </motion.p>
        </div>

        {/* Trois piliers */}
        <ul className="grid gap-px border-t border-border md:grid-cols-3 md:gap-0">
          {PILLARS.map((pillar, i) => (
            <motion.li
              key={pillar.verb}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
                delay: prefersReducedMotion ? 0 : i * 0.12,
              }}
              className={[
                "group relative flex flex-col gap-6 px-2 py-12 md:px-10 md:py-16",
                i > 0 && "md:border-l md:border-border",
                i > 0 && "border-t border-border md:border-t-0",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {/* Hairline gold qui se déploie au hover */}
              <span
                aria-hidden
                className="absolute left-0 top-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
              />

              <div className="flex items-baseline gap-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-gold">
                  {pillar.number}
                </span>
                <span className="h-px w-8 bg-gold/40" />
              </div>

              <h3 className="font-serif text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.05] tracking-[-0.02em] text-foreground">
                <em className="italic">{pillar.verb}.</em>
              </h3>

              <p className="font-serif text-lg italic leading-snug text-foreground-muted">
                {pillar.title}
              </p>

              <p className="max-w-sm font-sans text-sm leading-relaxed text-foreground-muted">
                {pillar.body}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
