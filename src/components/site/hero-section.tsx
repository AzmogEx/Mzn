"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { HeroBackground } from "@/components/site/hero-background";
import { RevealText } from "@/components/motion/reveal-text";
import { SITE } from "@/data/site";

/* ---------------------------------------------------------------
   Hero — 100vh, slogan sur 3 lignes en serif, animation séquencée :
   1. Eyebrow (ligne or + label) à 0.3s
   2. Slogan ligne 1 à 0.8s
   3. Slogan ligne 2 à 1.4s
   4. Slogan ligne 3 à 2.0s
   5. CTA + scroll indicator à 2.8s

   La vidéo de fond est pilotée depuis SITE.hero.videoUrl (fallback
   gradient si absente).
   --------------------------------------------------------------- */

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
      <HeroBackground videoSrc={SITE.hero.videoUrl} />

      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-center px-6 md:px-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="mb-10 flex items-center gap-4 md:mb-14"
        >
          <span className="h-px w-12 bg-gold md:w-20" />
          <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-gold">
            Studio · {SITE.city} · {SITE.foundedYear}
          </span>
        </motion.div>

        {/* Slogan — 3 lignes serif, italique sur les verbes */}
        <h1 className="font-serif text-balance text-[clamp(2.75rem,8vw,7.5rem)] font-normal leading-[1.02] tracking-[-0.02em] text-foreground">
          <RevealText as="span" delay={0.8} stagger={0.07} className="block">
            <em className="italic">Capturer</em> l&apos;instant,
          </RevealText>
          <RevealText as="span" delay={1.4} stagger={0.07} className="block">
            <em className="italic">diffuser</em> l&apos;expertise,
          </RevealText>
          <RevealText
            as="span"
            delay={2.0}
            stagger={0.07}
            className="block text-foreground-muted"
          >
            <em className="italic text-foreground">réveiller</em> la mémoire.
          </RevealText>
        </h1>

        {/* CTA + meta bas */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 2.8 }}
          className="mt-14 flex flex-col items-start gap-8 md:mt-20 md:flex-row md:items-center md:justify-between"
        >
          <div className="flex items-center gap-6">
            <Link
              href="#univers"
              className="group relative inline-flex h-14 items-center gap-3 overflow-hidden rounded-full border border-border-strong bg-foreground/[0.02] px-7 font-mono text-[11px] uppercase tracking-[0.28em] text-foreground backdrop-blur-md transition-all duration-700 hover:border-gold hover:bg-gold/[0.08] hover:text-gold"
            >
              <span className="relative z-10">Découvrir nos univers</span>
              <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
              {/* glow gold au hover */}
              <span className="absolute inset-0 -z-0 opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100 bg-gold/30" />
            </Link>
          </div>

          <ScrollIndicator />
        </motion.div>

        {/* Coin droit haut — petite signature mono */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.5 }}
          className="absolute right-6 top-32 hidden flex-col items-end gap-2 md:right-10 md:flex"
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-foreground-subtle">
            (01) — Studio
          </span>
          <span className="h-8 w-px bg-foreground-subtle/30" />
        </motion.div>
      </div>
    </section>
  );
}

function ScrollIndicator() {
  return (
    <div className="flex items-center gap-3 self-end md:self-auto">
      <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-foreground-subtle">
        Scroll
      </span>
      <motion.span
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        className="text-foreground-subtle"
      >
        <ArrowDown className="h-3 w-3" strokeWidth={1.25} />
      </motion.span>
    </div>
  );
}
