"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { RevealText } from "@/components/motion/reveal-text";
import { SITE } from "@/data/site";

/**
 * CTA finale avant le footer.
 * Énorme titre éditorial, sous-titre, bouton vers /contact.
 * Fond background-elevated avec halo or radial subtil.
 */
export function CtaSection() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative overflow-hidden border-t border-border bg-background-elevated py-32 md:py-44"
    >
      {/* Halo or radial */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-32 h-[600px] opacity-50"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,169,97,0.18) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 flex items-center gap-4 md:mb-16"
        >
          <span className="h-px w-12 bg-gold md:w-20" />
          <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-gold">
            (06) — Brief projet
          </span>
        </motion.div>

        {/* Titre */}
        <h2
          id="cta-heading"
          className="font-serif text-balance text-[clamp(2.5rem,7vw,6.5rem)] leading-[1.02] tracking-[-0.02em] text-foreground"
        >
          <RevealText immediate={false} stagger={0.06} className="block">
            <em className="italic">Parlons</em>
          </RevealText>
          <RevealText
            immediate={false}
            stagger={0.06}
            delay={0.3}
            className="block text-foreground-muted"
          >
            de votre projet.
          </RevealText>
        </h2>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          className="mt-10 max-w-xl font-sans text-[15px] leading-relaxed text-foreground-muted md:mt-14 md:text-base"
        >
          Captation, plateau TV mobile, atelier mémoire, mariage,
          documentaire&nbsp;: chaque univers a sa réponse. Décrivez-nous votre
          besoin, on revient vers vous sous 24&nbsp;h.
        </motion.p>

        {/* CTA + signature */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.85 }}
          className="mt-12 flex flex-col items-start gap-10 md:mt-16 md:flex-row md:items-center md:justify-between"
        >
          <Link
            href="/contact"
            className="group relative inline-flex h-16 items-center gap-4 overflow-hidden rounded-full border border-foreground bg-foreground px-9 font-mono text-[11px] uppercase tracking-[0.28em] text-background transition-all duration-700 hover:border-gold hover:bg-gold hover:text-background"
          >
            <span className="relative z-10">Démarrer un brief</span>
            <ArrowUpRight
              className="relative z-10 h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              strokeWidth={1.5}
            />
          </Link>

          <div className="flex flex-col gap-1 text-left md:text-right">
            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-foreground-subtle">
              Studio {SITE.name} — {SITE.city}
            </span>
            <a
              href={`mailto:${SITE.email}`}
              className="font-serif text-lg italic text-foreground transition-colors hover:text-gold"
            >
              {SITE.email}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
