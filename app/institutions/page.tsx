"use client";

import React from "react";
import {
  Brain,
  Camera,
  Film,
  Music,
  Users,
  FileText,
} from "lucide-react";
import { ServiceLayout } from "@/components/service-layout";

// Features pour les institutions
const institutionsFeatures = [
  {
    icon: Brain,
    title: "Ateliers Mémoire",
    description:
      "Stimulation cognitive par l'image et le son. Séances de réminiscence guidées pour raviver les souvenirs et stimuler les échanges.",
  },
  {
    icon: Film,
    title: "Documentaires de Vie",
    description:
      "Films biographiques des résidents, témoignages familiaux et archives personnelles numérisées pour préserver l'histoire de chacun.",
  },
  {
    icon: Music,
    title: "Thérapie par le Son",
    description:
      "Musicothérapie filmée, karaoké adapté et ambiances sonores personnalisées pour le bien-être des résidents.",
  },
  {
    icon: Camera,
    title: "Captation d'Événements",
    description:
      "Anniversaires, fêtes de fin d'année, spectacles des résidents. Des moments précieux à partager avec les familles.",
  },
  {
    icon: Users,
    title: "Formation du Personnel",
    description:
      "Modules de formation vidéo pour les équipes soignantes. Bonnes pratiques, gestes techniques et communication bienveillante.",
  },
  {
    icon: FileText,
    title: "Communication Institutionnelle",
    description:
      "Films de présentation de votre établissement, témoignages familles et supports pour vos campagnes de recrutement.",
  },
];

// Offres pour les institutions
const institutionsOffers = [
  {
    title: "Atelier Découverte",
    description: "Idéal pour tester notre approche avec vos résidents.",
    features: [
      "1 séance de 2h avec 8-10 résidents",
      "Animateur professionnel",
      "Matériel audiovisuel fourni",
      "Compte-rendu et recommandations",
      "Vidéo souvenir de la séance",
    ],
    price: "Sur devis",
  },
  {
    title: "Programme Annuel",
    description: "Accompagnement complet sur l'année.",
    features: [
      "12 ateliers mémoire (1/mois)",
      "2 documentaires de vie",
      "Captation de 3 événements",
      "Espace famille en ligne",
      "Rapport d'impact annuel",
      "Interlocuteur dédié",
    ],
    price: "Sur devis",
    popular: true,
  },
  {
    title: "Sur Mesure",
    description: "Programme adapté à vos besoins spécifiques.",
    features: [
      "Audit de vos besoins",
      "Programme personnalisé",
      "Tarification adaptée",
      "Flexibilité totale",
      "Suivi dédié",
    ],
    price: "Sur devis",
  },
];

export default function InstitutionsPage() {
  return (
    <ServiceLayout
      // Hero
      heroTitle="Éveiller la Mémoire"
      heroSubtitle="Institutions & EHPAD"
      heroDescription="Ateliers de stimulation cognitive, documentaires de vie et captation d'événements. Nous créons des expériences audiovisuelles qui reconnectent les résidents à leur histoire et stimulent les échanges."
      heroImage="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&auto=format&fit=crop&q=80"
      heroBadge="Spécialiste EHPAD & Établissements de Santé"
      // Theme
      themeColor="emotion"
      // Features
      featuresTitle="Nos Prestations Spécialisées"
      featuresSubtitle="Un accompagnement adapté aux besoins de vos résidents"
      features={institutionsFeatures}
      // Offers
      offersTitle="Nos Formules"
      offersSubtitle="Des solutions adaptées à chaque établissement"
      offers={institutionsOffers}
      // Testimonial
      testimonial={{
        quote:
          "Les ateliers mémoire ont transformé notre approche de l'animation. Les résidents sont plus engagés, les familles ravies de recevoir les vidéos, et notre équipe a trouvé un nouvel outil thérapeutique précieux.",
        author: "Marie-Claire Durand",
        role: "Directrice",
        company: "EHPAD Les Oliviers, Nîmes",
      }}
      // CTA
      ctaTitle="Créons ensemble un projet pour vos résidents"
      ctaDescription="Contactez-nous pour une présentation gratuite de nos services et découvrez comment l'image peut enrichir la vie de votre établissement."
      ctaButtonText="Planifier une démonstration"
    />
  );
}
