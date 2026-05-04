"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, type ComponentType } from "react";
import { RevealText } from "@/components/motion/reveal-text";
import {
  AtemMixer,
  CanonR5,
  LiveU,
  OpticsL,
  SennheiserMic,
} from "@/components/site/equipment-illustrations";
import { cn } from "@/lib/utils";

type Spec = { label: string; value: string };

type Equipment = {
  number: string;
  category: string;
  name: string;
  punchline: string;
  description: string;
  specs: Spec[];
  Illustration: ComponentType<{ className?: string }>;
};

const EQUIPMENTS: Equipment[] = [
  {
    number: "01",
    category: "Caméra principale",
    name: "Canon EOS R5",
    punchline: "Le standard broadcast en 8K.",
    description:
      "Capteur full-frame 45 Mpx, vidéo 8K RAW interne, double slot, stabilisation IBIS 8 stops. Le rendu cinéma sans compromis.",
    specs: [
      { label: "Capteur", value: "Full-frame 45MP" },
      { label: "Vidéo", value: "8K RAW · 4K 120p" },
      { label: "Stabilisation", value: "IBIS · 8 stops" },
      { label: "AF", value: "Dual Pixel CMOS II" },
    ],
    Illustration: CanonR5,
  },
  {
    number: "02",
    category: "Optiques",
    name: "Série L Canon",
    punchline: "Le verre qui change tout.",
    description:
      "Du 16-35mm f/2.8 au 70-200mm f/2.8, en passant par les fixes 35/50/85mm f/1.2. La gamme L pour tous les terrains, du portrait au reportage.",
    specs: [
      { label: "Zooms pro", value: "16-35 · 24-70 · 70-200" },
      { label: "Fixes f/1.2", value: "35 · 50 · 85" },
      { label: "Cinéma", value: "CN-E 24/50/85" },
      { label: "Tropicalisation", value: "IP54" },
    ],
    Illustration: OpticsL,
  },
  {
    number: "03",
    category: "Régie & Mixage vidéo",
    name: "ATEM Mini Extreme ISO",
    punchline: "Le plateau TV dans une mallette.",
    description:
      "Mixer broadcast 8 entrées HDMI, transitions cinéma, enregistrement ISO de chaque source, streaming RTMP direct. La régie complète, mobile.",
    specs: [
      { label: "Entrées", value: "8 × HDMI 4K" },
      { label: "ISO recording", value: "8 sources simultanées" },
      { label: "Transitions", value: "DVE + macros" },
      { label: "Streaming", value: "RTMP / SRT direct" },
    ],
    Illustration: AtemMixer,
  },
  {
    number: "04",
    category: "Captation audio",
    name: "Sennheiser MKH",
    punchline: "Chaque mot, sans compromis.",
    description:
      "Shotguns MKH 416 et 8060 pour le terrain, lavaliers MKE 2 + émetteurs G4, parc complet pour interviews, plateaux et conférences multi-intervenants.",
    specs: [
      { label: "Shotguns", value: "MKH 416 · MKH 8060" },
      { label: "Lavaliers", value: "MKE 2 · MKE 1 omni" },
      { label: "HF", value: "Evolution G4 (jusqu'à 8 voies)" },
      { label: "Recorder", value: "Sound Devices MixPre" },
    ],
    Illustration: SennheiserMic,
  },
  {
    number: "05",
    category: "Live streaming",
    name: "LiveU LU800",
    punchline: "La diffusion 4K sans fibre.",
    description:
      "Bonding cellulaire 4G/5G multi-modems pour streamer en 4K HDR depuis n'importe où. Latence sub-seconde, redondance totale, qualité broadcast.",
    specs: [
      { label: "Vidéo", value: "4K HDR · 60fps" },
      { label: "Bonding", value: "Jusqu'à 14 modems" },
      { label: "Latence", value: "Sub-seconde" },
      { label: "Encodage", value: "HEVC 10-bit" },
    ],
    Illustration: LiveU,
  },
];

/**
 * Section Matériel — façon présentation iPhone.
 * Blocs alternés gauche/droite, chaque illustration en parallax léger,
 * specs grid 2 colonnes, texte révélé au scroll.
 */
export function EquipmentSection() {
  return (
    <section
      id="expertise"
      aria-labelledby="equipment-heading"
      className="relative scroll-mt-24 bg-background py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        {/* En-tête éditoriale */}
        <div className="mb-24 grid gap-8 md:mb-40 md:grid-cols-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-[10px] uppercase tracking-[0.4em] text-foreground-subtle md:col-span-3"
          >
            (05) — Expertise broadcast
          </motion.p>

          <h2
            id="equipment-heading"
            className="font-serif text-balance text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] tracking-[-0.02em] text-foreground md:col-span-9"
          >
            <RevealText immediate={false} stagger={0.05} className="block">
              <em className="italic">L&apos;outil</em> au service du regard.
            </RevealText>
            <RevealText
              immediate={false}
              stagger={0.05}
              delay={0.2}
              className="block text-foreground-muted"
            >
              Du capteur au flux 4K live.
            </RevealText>
          </h2>
        </div>

        {/* Liste matériel */}
        <ul className="space-y-32 md:space-y-48">
          {EQUIPMENTS.map((eq, i) => (
            <EquipmentItem key={eq.number} item={eq} reverse={i % 2 === 1} />
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function EquipmentItem({
  item,
  reverse,
}: {
  item: Equipment;
  reverse: boolean;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax léger sur l'illustration
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1.02, 0.96]);

  const Illustration = item.Illustration;

  return (
    <li
      ref={ref}
      className={cn(
        "grid items-center gap-10 md:gap-16 lg:grid-cols-12",
        reverse && "lg:[direction:rtl]",
      )}
    >
      {/* Illustration */}
      <motion.div
        style={{ y, scale }}
        className={cn(
          "relative aspect-[4/3] overflow-visible lg:col-span-7",
          reverse && "lg:[direction:ltr]",
        )}
      >
        {/* Halo gold derrière l'illustration */}
        <div
          aria-hidden
          className="absolute inset-x-12 inset-y-8 -z-10 rounded-[120px] opacity-60 blur-[80px]"
          style={{
            background:
              "radial-gradient(ellipse, rgba(201,169,97,0.18) 0%, transparent 65%)",
          }}
        />
        {/* Subtle reflection floor */}
        <div
          aria-hidden
          className="absolute inset-x-20 bottom-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(245,243,238,0.18), transparent)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <Illustration className="h-full w-full" />
        </motion.div>
      </motion.div>

      {/* Bloc texte */}
      <div
        className={cn(
          "lg:col-span-5",
          reverse && "lg:[direction:ltr]",
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Numéro + ligne or */}
          <div className="mb-6 flex items-center gap-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-foreground-subtle">
              {item.number}
            </span>
            <span className="h-px w-12 bg-gold/60" />
            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-gold">
              {item.category}
            </span>
          </div>

          {/* Nom */}
          <h3 className="mb-5 font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] tracking-[-0.02em] text-foreground">
            {item.name}
          </h3>

          {/* Punchline */}
          <p className="mb-6 font-serif text-xl italic text-foreground-muted md:text-2xl">
            {item.punchline}
          </p>

          {/* Description */}
          <p className="mb-10 max-w-md font-sans text-sm leading-relaxed text-foreground-muted md:text-[15px]">
            {item.description}
          </p>

          {/* Specs grid */}
          <dl className="grid grid-cols-1 gap-x-8 gap-y-5 border-t border-border pt-8 sm:grid-cols-2">
            {item.specs.map((spec, idx) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.2 + idx * 0.08,
                }}
              >
                <dt className="mb-1 font-mono text-[9px] uppercase tracking-[0.28em] text-foreground-subtle">
                  {spec.label}
                </dt>
                <dd className="font-sans text-sm text-foreground">
                  {spec.value}
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </li>
  );
}
