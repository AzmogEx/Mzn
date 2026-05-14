"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

/* ==================================================================
   Section "Tarifs mariage 2025-2026" — page /particuliers
   Trois prestations (DUO / Photographe / Vidéaste) × trois formules
   (Essentiel / Traditionnel / Tendance) + options À la carte.
   Données sourcées des plaquettes MIS.
   ================================================================== */

type FormulaKey = "essentiel" | "traditionnel" | "tendance";
type ServiceKey = "duo" | "photographe" | "videaste";

type Formula = {
  key: FormulaKey;
  name: string;
  price: number;
  bullets: string[];
};

type Service = {
  key: ServiceKey;
  label: string;
  caption: string;
  formulas: Formula[];
};

const SERVICES: Service[] = [
  {
    key: "duo",
    label: "Duo Photo + Vidéo",
    caption: "Le couple photographe & vidéaste — l'expérience complète.",
    formulas: [
      {
        key: "essentiel",
        name: "Essentiel",
        price: 1490,
        bullets: [
          "Dès préparatifs au vin d'honneur",
          "Cérémonies · couple · invités",
          "Galerie privée en ligne",
          "Photos retouchées en nombre illimité",
          "Clip 5–10 minutes",
          "Images brutes vidéo livrées",
        ],
      },
      {
        key: "traditionnel",
        name: "Traditionnel",
        price: 1990,
        bullets: [
          "Dès préparatifs à la pièce montée",
          "Cérémonies · couple · invités · réception",
          "Galerie privée en ligne",
          "Photos retouchées en nombre illimité",
          "Clip 10–15 minutes",
          "Images brutes vidéo livrées",
        ],
      },
      {
        key: "tendance",
        name: "Tendance",
        price: 2490,
        bullets: [
          "Dès préparatifs à la pièce montée",
          "Cérémonies · couple · invités · réception",
          "Galerie privée en ligne",
          "Livre photo qualité 50 pages",
          "Photos retouchées en nombre illimité",
          "Clip 5–10 minutes",
          "Film 1h · cérémonies, discours, soirée",
          "Images brutes vidéo livrées",
        ],
      },
    ],
  },
  {
    key: "photographe",
    label: "Photographe seul",
    caption: "Pour celles et ceux qui privilégient l'image fixe.",
    formulas: [
      {
        key: "essentiel",
        name: "Essentiel",
        price: 790,
        bullets: [
          "Dès préparatifs au vin d'honneur",
          "Cérémonies · couple · invités",
          "Galerie privée en ligne",
          "Photos retouchées en nombre illimité",
        ],
      },
      {
        key: "traditionnel",
        name: "Traditionnel",
        price: 1090,
        bullets: [
          "Dès préparatifs à la pièce montée",
          "Cérémonies · couple · invités · réception",
          "Galerie privée en ligne",
          "Photos retouchées en nombre illimité",
        ],
      },
      {
        key: "tendance",
        name: "Tendance",
        price: 1290,
        bullets: [
          "Dès préparatifs à la pièce montée",
          "Cérémonies · couple · invités · réception",
          "Galerie privée en ligne",
          "Livre photo qualité 100 pages XXL",
          "Photos retouchées en nombre illimité",
        ],
      },
    ],
  },
  {
    key: "videaste",
    label: "Vidéaste seul",
    caption: "Le récit filmé, pour revivre la journée en mouvement.",
    formulas: [
      {
        key: "essentiel",
        name: "Essentiel",
        price: 790,
        bullets: [
          "Dès préparatifs au vin d'honneur",
          "Cérémonies · couple · invités",
          "Clip 5–10 minutes",
          "Images brutes vidéo livrées",
        ],
      },
      {
        key: "traditionnel",
        name: "Traditionnel",
        price: 1090,
        bullets: [
          "Dès préparatifs à la pièce montée",
          "Cérémonies · couple · invités · réception",
          "Clip 10–15 minutes",
          "Images brutes vidéo livrées",
        ],
      },
      {
        key: "tendance",
        name: "Tendance",
        price: 1290,
        bullets: [
          "Dès préparatifs à la pièce montée",
          "Cérémonies · couple · invités · réception",
          "Clip 5–10 minutes",
          "Film 1h · cérémonies, discours, soirée",
          "Images brutes vidéo livrées",
        ],
      },
    ],
  },
];

const ADDONS: { label: string; price: number; note?: string }[] = [
  { label: "Images aériennes par drone", price: 200 },
  { label: "Deuxième photographe / vidéaste", price: 500 },
  { label: "Journée supplémentaire", price: 500 },
  { label: "Espace Photo Call éclairage pro", price: 300 },
  { label: "Livre photo 28×28 · 50 pages", price: 250 },
  { label: "Livre photo parents 21×28 · 30 pages", price: 100 },
  { label: "Création d'un diaporama photo", price: 150 },
  { label: "Tournage faire-part / save-the-date / teaser", price: 300 },
];

export function PricingSection() {
  const [active, setActive] = useState<ServiceKey>("duo");
  const activeService = SERVICES.find((s) => s.key === active)!;

  return (
    <section
      id="tarifs"
      aria-labelledby="pricing-heading"
      className="border-t border-border bg-background-elevated py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        {/* En-tête éditorial */}
        <div className="mb-14 grid gap-8 md:mb-20 md:grid-cols-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-[10px] uppercase tracking-[0.4em] text-foreground-subtle md:col-span-3"
          >
            (Tarifs 2025—2026)
          </motion.p>

          <motion.h2
            id="pricing-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-serif text-balance text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-foreground md:col-span-9"
          >
            Trois <em className="italic">prestations</em>,{" "}
            <span className="text-foreground-muted">
              chacune pensée comme un récit complet.
            </span>
          </motion.h2>
        </div>

        {/* Sélecteur prestations */}
        <div className="mb-12 flex justify-center md:mb-16">
          <div
            role="tablist"
            aria-label="Choix de la prestation"
            className="scrollbar-hide flex max-w-full gap-1.5 overflow-x-auto rounded-full border border-border-strong bg-foreground/[0.02] p-1.5 backdrop-blur-md"
          >
            {SERVICES.map((s) => {
              const isActive = s.key === active;
              return (
                <button
                  key={s.key}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(s.key)}
                  className={cn(
                    "relative whitespace-nowrap rounded-full px-5 py-3 font-mono text-[10px] uppercase tracking-[0.28em] transition-colors duration-500 md:px-7 md:text-[11px]",
                    isActive
                      ? "text-background"
                      : "text-foreground-muted hover:text-foreground",
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="service-pill"
                      className="absolute inset-0 rounded-full bg-gold"
                      transition={{
                        type: "spring",
                        stiffness: 340,
                        damping: 32,
                      }}
                    />
                  )}
                  <span className="relative">{s.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Caption sous le sélecteur */}
        <AnimatePresence mode="wait">
          <motion.p
            key={activeService.caption}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mb-12 max-w-xl text-center font-serif text-base italic text-foreground-muted md:mb-16 md:text-lg"
          >
            {activeService.caption}
          </motion.p>
        </AnimatePresence>

        {/* Grille formules */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="grid gap-5 md:grid-cols-3 md:gap-6"
          >
            {activeService.formulas.map((f, i) => (
              <FormulaCard
                key={`${active}-${f.key}`}
                formula={f}
                featured={f.key === "tendance"}
                delay={i * 0.08}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Option drone — note discrète sous les cards */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-10 text-center font-mono text-[10px] uppercase tracking-[0.32em] text-foreground-subtle"
        >
          Option drone · +200 €
        </motion.p>

        {/* À la carte */}
        <div className="mt-28 border-t border-border pt-20 md:mt-36 md:pt-24">
          <div className="mb-14 grid gap-8 md:mb-20 md:grid-cols-12">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-mono text-[10px] uppercase tracking-[0.4em] text-foreground-subtle md:col-span-3"
            >
              (À la carte)
            </motion.p>
            <motion.h3
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 1.1,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1,
              }}
              className="font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] tracking-[-0.02em] text-foreground md:col-span-9"
            >
              <em className="italic">Sur-mesure.</em>{" "}
              <span className="text-foreground-muted">
                Composez votre prestation selon vos envies.
              </span>
            </motion.h3>
          </div>

          <ul className="grid gap-x-10 gap-y-0 md:grid-cols-2">
            {ADDONS.map((a, i) => (
              <motion.li
                key={a.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: (i % 2) * 0.08,
                }}
                className="group flex items-baseline justify-between gap-6 border-b border-border py-5 transition-colors hover:border-gold/40"
              >
                <span className="font-sans text-[14px] text-foreground md:text-[15px]">
                  {a.label}
                </span>
                <span className="font-mono text-[12px] tracking-[0.08em] text-gold transition-colors group-hover:text-gold-bright md:text-[13px]">
                  {a.price} €
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Note + CTA devis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 flex flex-col items-center gap-8 text-center md:mt-24"
        >
          <p className="max-w-xl font-serif text-base italic text-foreground-muted md:text-lg">
            Chaque mariage est unique — chaque souvenir doit l&apos;être aussi.
            Parlons de votre journée.
          </p>
          <Link
            href="/contact"
            className="group inline-flex h-14 items-center gap-3 rounded-full border border-foreground bg-foreground px-7 font-mono text-[11px] uppercase tracking-[0.28em] text-background transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-gold hover:bg-gold"
          >
            Demander un devis personnalisé
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              strokeWidth={1.5}
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------------- Carte formule --------------------- */

function FormulaCard({
  formula,
  featured,
  delay,
}: {
  formula: Formula;
  featured?: boolean;
  delay: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border bg-background p-7 transition-all duration-700 md:p-9",
        featured
          ? "border-gold/40 shadow-[0_0_60px_-20px_rgba(201,169,97,0.35)] md:scale-[1.02]"
          : "border-border hover:border-border-strong",
      )}
    >
      {/* Badge best-seller pour Tendance */}
      {featured && (
        <span className="absolute right-6 top-6 inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/[0.08] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.28em] text-gold backdrop-blur-md">
          <Sparkles className="h-2.5 w-2.5" strokeWidth={1.5} />
          Best-seller
        </span>
      )}

      {/* Liseré or animé en haut */}
      <span
        aria-hidden
        className={cn(
          "absolute left-0 right-0 top-0 h-px origin-left bg-gradient-to-r from-transparent via-gold to-transparent transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
          featured ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
        )}
      />

      {/* Nom */}
      <h3 className="font-serif text-2xl leading-tight tracking-[-0.01em] text-foreground md:text-3xl">
        {formula.name}
      </h3>

      {/* Prix */}
      <div className="mt-5 flex items-baseline gap-2">
        <span
          className={cn(
            "font-serif text-[clamp(2.5rem,5vw,3.25rem)] leading-none tracking-[-0.02em]",
            featured ? "text-gold" : "text-foreground",
          )}
        >
          {formula.price.toLocaleString("fr-FR")}
        </span>
        <span
          className={cn(
            "font-serif text-2xl",
            featured ? "text-gold" : "text-foreground-muted",
          )}
        >
          €
        </span>
      </div>

      {/* Divider hairline */}
      <span aria-hidden className="my-7 block h-px w-12 bg-gold/40" />

      {/* Bullets */}
      <ul className="mb-8 flex-1 space-y-3">
        {formula.bullets.map((b) => (
          <li
            key={b}
            className="flex items-start gap-3 font-sans text-[13.5px] leading-relaxed text-foreground-muted md:text-[14.5px]"
          >
            <Check
              className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-gold"
              strokeWidth={2}
            />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      {/* CTA carte */}
      <Link
        href="/contact"
        className={cn(
          "mt-auto inline-flex h-12 items-center justify-center gap-2 rounded-full border font-mono text-[10px] uppercase tracking-[0.28em] transition-all duration-700",
          featured
            ? "border-gold bg-gold text-background hover:bg-gold-bright hover:border-gold-bright"
            : "border-border-strong text-foreground hover:border-gold hover:text-gold",
        )}
      >
        Choisir cette formule
        <ArrowUpRight
          className="h-3.5 w-3.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          strokeWidth={1.5}
        />
      </Link>
    </motion.article>
  );
}
