"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Camera,
  Film,
  Music,
  Users,
  Gift,
  Calendar,
  Sparkles,
  Clock,
  Star,
  MapPin,
  CheckCircle,
  Quote,
} from "lucide-react";
import { ServiceLayout } from "@/components/service-layout";
import { MotionCard } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Features pour les particuliers
const particuliersFeatures = [
  {
    icon: Heart,
    title: "Films de Mariage",
    description:
      "Captation cinématographique de votre plus beau jour. Du getting ready au premier slow, chaque émotion est préservée avec élégance.",
  },
  {
    icon: Users,
    title: "Biographies Vidéo",
    description:
      "Interviews intimistes de vos proches. Préservez la voix, les histoires et la sagesse de vos grands-parents pour les générations futures.",
  },
  {
    icon: Film,
    title: "Récits de Vie",
    description:
      "Documentaires familiaux retraçant une vie, un parcours, une aventure. Un héritage précieux à transmettre.",
  },
  {
    icon: Gift,
    title: "Événements Familiaux",
    description:
      "Baptêmes, anniversaires marquants, réunions de famille. Des souvenirs filmés avec la même attention qu'un mariage.",
  },
  {
    icon: Music,
    title: "Clips & Projets Créatifs",
    description:
      "Demande en mariage surprise, déclaration d'amour filmée, projet artistique personnel. Donnons vie à vos idées.",
  },
  {
    icon: Camera,
    title: "Séances Photo + Vidéo",
    description:
      "Combinaison photo/vidéo pour vos portraits de famille, grossesse, ou moments de vie à immortaliser.",
  },
];

// Offres pour les particuliers
const particuliersOffers = [
  {
    title: "Essentiel",
    description: "L'indispensable pour votre mariage.",
    features: [
      "Captation cérémonie + cocktail",
      "1 vidéaste",
      "Film de 8-10 minutes",
      "Teaser 1 minute pour réseaux",
      "Livraison clé USB premium",
    ],
    price: "À partir de 1 800 €",
  },
  {
    title: "Émotions",
    description: "Notre formule la plus demandée.",
    features: [
      "Journée complète (préparatifs → soirée)",
      "2 vidéastes",
      "Film de 15-20 minutes",
      "Teaser + version longue rushes",
      "Drone (si conditions favorables)",
      "Livraison en ligne + clé USB",
      "Révisions illimitées",
    ],
    price: "À partir de 2 800 €",
    popular: true,
  },
  {
    title: "Héritage",
    description: "L'expérience cinéma complète.",
    features: [
      "Week-end complet",
      "2-3 vidéastes",
      "Film court-métrage (25-30 min)",
      "Interview des proches",
      "Musique originale ou sur mesure",
      "Étalonnage cinéma",
      "Version famille étendue",
      "Album photo offert",
    ],
    price: "Sur devis",
  },
];

// Contenu additionnel : Processus créatif
function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Rencontre",
      description:
        "On se retrouve autour d'un café pour parler de vous, de votre histoire, de vos envies et de votre vision.",
      icon: Users,
    },
    {
      number: "02",
      title: "Préparation",
      description:
        "Repérage des lieux, coordination avec vos prestataires, préparation du matériel et validation du planning.",
      icon: Calendar,
    },
    {
      number: "03",
      title: "Le Jour J",
      description:
        "Discrets mais attentifs, nous capturons chaque regard, chaque rire, chaque larme de joie avec sensibilité.",
      icon: Camera,
    },
    {
      number: "04",
      title: "Post-Production",
      description:
        "Montage soigné, étalonnage cinématographique, sound design et musique pour créer votre film unique.",
      icon: Film,
    },
    {
      number: "05",
      title: "Livraison",
      description:
        "Avant-première privée, révisions si besoin, puis livraison de vos fichiers en haute qualité.",
      icon: Gift,
    },
  ];

  return (
    <div className="container mx-auto px-4">
      {/* Section Header */}
      <motion.div
        className="text-center space-y-4 mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emotion-rose/10 border border-emotion-rose/20 text-emotion-rose text-sm">
          <Sparkles className="w-4 h-4" />
          Notre Approche
        </span>
        <h2 className="heading-lg">
          Comment naît <span className="text-emotion-rose">votre film</span>
        </h2>
        <p className="body-md max-w-2xl mx-auto">
          De la première rencontre à la livraison, découvrez les étapes qui
          transforment votre journée en souvenir éternel.
        </p>
      </motion.div>

      {/* Process Steps */}
      <div className="relative">
        {/* Connection Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emotion-rose/50 via-emotion/50 to-emotion-rose/50 hidden lg:block" />

        <div className="space-y-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={step.number}
                className={cn(
                  "relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center",
                  isEven ? "lg:text-right" : "lg:flex-row-reverse"
                )}
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Content */}
                <div
                  className={cn(
                    "space-y-4",
                    isEven ? "lg:pr-16" : "lg:pl-16 lg:col-start-2"
                  )}
                >
                  <span className="text-4xl font-heading font-bold text-emotion-rose/30">
                    {step.number}
                  </span>
                  <h3 className="heading-sm">{step.title}</h3>
                  <p className="body-md text-text-secondary">{step.description}</p>
                </div>

                {/* Icon Circle */}
                <div
                  className={cn(
                    "hidden lg:flex items-center justify-center",
                    isEven ? "lg:col-start-2" : "lg:col-start-1 lg:row-start-1"
                  )}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-emotion-rose/20 rounded-full blur-xl animate-pulse" />
                    <div className="relative w-20 h-20 rounded-full bg-background-secondary border-2 border-emotion-rose/50 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-emotion-rose" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Delay Info */}
      <motion.div
        className="mt-16 p-6 rounded-2xl bg-white/5 border border-white/10 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <Clock className="w-5 h-5 text-emotion-rose" />
          <span className="font-heading font-semibold text-white">
            Délais de livraison
          </span>
        </div>
        <p className="text-sm text-text-muted">
          Teaser : 2-3 semaines | Film complet : 8-12 semaines selon la saison
        </p>
      </motion.div>
    </div>
  );
}

export default function ParticuliersPage() {
  return (
    <ServiceLayout
      // Hero
      heroTitle="Capturer l'Instant, Transmettre l'Émotion"
      heroSubtitle="Mariages & Particuliers"
      heroDescription="Films de mariage cinématographiques, biographies vidéo et récits de vie. Nous préservons vos moments les plus précieux avec sensibilité et créativité, pour un héritage qui traverse le temps."
      heroImage="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&auto=format&fit=crop&q=80"
      heroBadge="Vidéaste de Mariage en Occitanie"
      // Theme
      themeColor="rose"
      // Features
      featuresTitle="Nos Prestations"
      featuresSubtitle="Des souvenirs sur mesure pour chaque moment de vie"
      features={particuliersFeatures}
      // Offers
      offersTitle="Nos Formules Mariage"
      offersSubtitle="Choisissez l'accompagnement qui vous ressemble"
      offers={particuliersOffers}
      // Additional Content
      additionalContent={<ProcessSection />}
      // Testimonial
      testimonial={{
        quote:
          "Nous avons regardé notre film de mariage des dizaines de fois, et chaque visionnage nous replonge dans cette journée magique. L'équipe a su se faire discrète tout en capturant des moments qu'on n'avait même pas remarqués. C'est notre plus beau cadeau de mariage.",
        author: "Julie & Thomas",
        role: "Mariés en septembre 2024",
        company: "Domaine de la Baume, Uzès",
      }}
      // CTA
      ctaTitle="Racontez-nous votre histoire"
      ctaDescription="Chaque couple est unique. Parlons de votre journée et créons ensemble le film qui vous ressemble."
      ctaButtonText="Prendre rendez-vous"
    />
  );
}
