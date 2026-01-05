"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Tv,
  Radio,
  Video,
  Shield,
  Wifi,
  Users,
  Camera,
  Monitor,
  Headphones,
  Clapperboard,
  Zap,
  Server,
  CheckCircle,
} from "lucide-react";
import { ServiceLayout } from "@/components/service-layout";
import { MotionCard } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// Features pour les entreprises
const entreprisesFeatures = [
  {
    icon: Tv,
    title: "Plateau TV Mobile",
    description:
      "Transformez votre salle de réunion en studio TV professionnel. Multi-caméras 4K, éclairage broadcast et régie complète.",
  },
  {
    icon: Radio,
    title: "Live Streaming",
    description:
      "Diffusion en direct sur tous vos canaux : YouTube, LinkedIn, site web. Qualité broadcast et faible latence garanties.",
  },
  {
    icon: Video,
    title: "Captation Multi-Caméras",
    description:
      "Conférences, séminaires, assemblées générales. De 2 à 8 caméras avec réalisation en temps réel.",
  },
  {
    icon: Headphones,
    title: "Sonorisation Pro",
    description:
      "Ingénieur du son dédié, micros HF professionnels et mixage broadcast pour une qualité audio irréprochable.",
  },
  {
    icon: Clapperboard,
    title: "Films Corporate",
    description:
      "Vidéos institutionnelles, témoignages clients, présentation produits. Du brief créatif à la livraison finale.",
  },
  {
    icon: Monitor,
    title: "Webinaires & Hybride",
    description:
      "Événements hybrides combinant présentiel et distanciel. Intégration Zoom, Teams, Webex avec qualité professionnelle.",
  },
];

// Offres pour les entreprises
const entreprisesOffers = [
  {
    title: "Captation Simple",
    description: "Pour vos événements ponctuels.",
    features: [
      "2 caméras 4K",
      "1 technicien régie",
      "Sonorisation de base",
      "Enregistrement rushes",
      "Livraison fichiers HD/4K",
    ],
    price: "À partir de 1 500 €",
  },
  {
    title: "Plateau TV Pro",
    description: "L'expérience broadcast complète.",
    features: [
      "4+ caméras 4K",
      "Régie multicam temps réel",
      "Éclairage professionnel",
      "Ingénieur du son",
      "Streaming multi-plateformes",
      "Habillage graphique live",
      "Replay et best-of",
    ],
    price: "Sur devis",
    popular: true,
  },
  {
    title: "Abonnement Annuel",
    description: "Pour les entreprises aux besoins récurrents.",
    features: [
      "Tarifs préférentiels (-20%)",
      "Équipe dédiée",
      "Matériel en stand-by",
      "Réactivité 48h",
      "Formation de vos équipes",
      "Stockage cloud illimité",
    ],
    price: "Sur devis",
  },
];

// Contenu additionnel : Specs Techniques
function TechnicalSpecsSection() {
  const specs = [
    {
      category: "Vidéo",
      icon: Camera,
      items: [
        "Caméras Sony FX6 / FX3 (4K 120fps)",
        "Optiques cinéma Sony G Master",
        "Steadicam / Gimbal DJI RS3 Pro",
        "Drone DJI Inspire 3 (selon autorisation)",
      ],
    },
    {
      category: "Audio",
      icon: Headphones,
      items: [
        "Console Yamaha TF1",
        "Micros Sennheiser AVX / EW-DX",
        "Micros podcast Shure SM7B",
        "Enregistreur Sound Devices MixPre",
      ],
    },
    {
      category: "Streaming",
      icon: Wifi,
      items: [
        "Encodeur Blackmagic ATEM",
        "Bonding 4G/5G LiveU",
        "CDN privé ou YouTube/Vimeo",
        "Latence < 5 secondes",
      ],
    },
    {
      category: "Régie",
      icon: Server,
      items: [
        "ATEM Television Studio 4K8",
        "Moniteur de retour pour intervenants",
        "Téléprompteur professionnel",
        "Intercom broadcast Hollyland",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4">
      {/* Section Header */}
      <motion.div
        className="text-center space-y-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-corporate/10 border border-corporate/20 text-corporate text-sm">
          <Shield className="w-4 h-4" />
          Qualité Broadcast
        </span>
        <h2 className="heading-lg">
          Du matériel <span className="text-corporate">professionnel</span>
        </h2>
        <p className="body-md max-w-2xl mx-auto">
          Nous investissons dans le meilleur équipement pour garantir une qualité
          broadcast à tous vos événements.
        </p>
      </motion.div>

      {/* Specs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {specs.map((spec, index) => {
          const Icon = spec.icon;
          return (
            <motion.div
              key={spec.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <MotionCard glowColor="corporate" className="p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-corporate/10 border border-corporate/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-corporate" />
                  </div>
                  <h3 className="font-heading font-semibold text-white">
                    {spec.category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {spec.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-corporate flex-shrink-0 mt-0.5" />
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </MotionCard>
            </motion.div>
          );
        })}
      </div>

      {/* Trust Badges */}
      <motion.div
        className="flex flex-wrap justify-center gap-6 mt-12 pt-12 border-t border-white/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
          <Zap className="w-4 h-4 text-corporate" />
          <span className="text-sm text-text-muted">Réactivité 48h</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
          <Shield className="w-4 h-4 text-corporate" />
          <span className="text-sm text-text-muted">Assurance RC Pro</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
          <Server className="w-4 h-4 text-corporate" />
          <span className="text-sm text-text-muted">Backup équipement</span>
        </div>
      </motion.div>
    </div>
  );
}

export default function EntreprisesPage() {
  return (
    <ServiceLayout
      // Hero
      heroTitle="Diffuser l'Expertise, Amplifier votre Message"
      heroSubtitle="Entreprises & Corporate"
      heroDescription="Plateaux TV mobiles, streaming professionnel et captation broadcast. Nous transformons vos événements d'entreprise en expériences médiatiques de qualité télévisuelle."
      heroImage="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1920&auto=format&fit=crop&q=80"
      heroBadge="Qualité Broadcast Garantie"
      // Theme
      themeColor="corporate"
      // Features
      featuresTitle="Nos Solutions Broadcast"
      featuresSubtitle="L'excellence technique au service de votre communication"
      features={entreprisesFeatures}
      // Offers
      offersTitle="Nos Formules"
      offersSubtitle="Des solutions pour chaque envergure de projet"
      offers={entreprisesOffers}
      // Additional Content
      additionalContent={<TechnicalSpecsSection />}
      // Testimonial
      testimonial={{
        quote:
          "Mémoire Image & Sons a transformé notre conférence annuelle en un véritable show TV. La qualité du streaming, la réactivité de l'équipe et le rendu final ont dépassé toutes nos attentes. Nos collaborateurs à distance se sont sentis vraiment inclus.",
        author: "Philippe Martin",
        role: "Directeur Communication",
        company: "Groupe Occitanie Tech",
      }}
      // CTA
      ctaTitle="Prêt à passer au niveau broadcast ?"
      ctaDescription="Contactez-nous pour un devis personnalisé et découvrez comment nous pouvons sublimer vos événements d'entreprise."
      ctaButtonText="Demander un devis"
    />
  );
}
