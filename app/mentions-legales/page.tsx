"use client";

import React from "react";
import { motion } from "framer-motion";
import { Scale, Building, Mail, Phone, MapPin } from "lucide-react";
import { MotionCard } from "@/components/ui/card";

export default function MentionsLegalesPage() {
  return (
    <div className="relative min-h-screen pt-24">
      <div className="absolute inset-0 tech-grid opacity-20" />

      <div className="relative container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 rounded-2xl bg-emotion/10 border border-emotion/20 flex items-center justify-center mx-auto mb-6">
            <Scale className="w-8 h-8 text-emotion" />
          </div>
          <h1 className="heading-xl">Mentions Légales</h1>
          <p className="body-md text-text-muted">
            Dernière mise à jour : Janvier 2026
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Éditeur du site */}
          <MotionCard className="p-8">
            <h2 className="heading-sm mb-6 flex items-center gap-3">
              <Building className="w-5 h-5 text-emotion" />
              Éditeur du Site
            </h2>
            <div className="space-y-4 text-text-secondary">
              <p>
                <strong className="text-white">Raison sociale :</strong> Mémoire Image & Sons
              </p>
              <p>
                <strong className="text-white">Forme juridique :</strong> [À compléter - SARL/SAS/Auto-entrepreneur]
              </p>
              <p>
                <strong className="text-white">Capital social :</strong> [À compléter]
              </p>
              <p>
                <strong className="text-white">SIRET :</strong> [À compléter]
              </p>
              <p>
                <strong className="text-white">Numéro TVA intracommunautaire :</strong> [À compléter]
              </p>
              <p>
                <strong className="text-white">Siège social :</strong> Nîmes, Gard (30) - Occitanie, France
              </p>
              <div className="pt-4 space-y-2">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emotion" />
                  <strong className="text-white">Téléphone :</strong> +33 (0)4 66 00 00 00
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emotion" />
                  <strong className="text-white">Email :</strong> contact@memoire-is.fr
                </p>
              </div>
              <p>
                <strong className="text-white">Directeur de la publication :</strong> [Nom du dirigeant]
              </p>
            </div>
          </MotionCard>

          {/* Hébergement */}
          <MotionCard className="p-8">
            <h2 className="heading-sm mb-6">Hébergement</h2>
            <div className="space-y-4 text-text-secondary">
              <p>
                Ce site est hébergé par :
              </p>
              <p>
                <strong className="text-white">Vercel Inc.</strong><br />
                440 N Barranca Ave #4133<br />
                Covina, CA 91723<br />
                États-Unis
              </p>
              <p>
                Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-emotion hover:underline">https://vercel.com</a>
              </p>
            </div>
          </MotionCard>

          {/* Propriété intellectuelle */}
          <MotionCard className="p-8">
            <h2 className="heading-sm mb-6">Propriété Intellectuelle</h2>
            <div className="space-y-4 text-text-secondary">
              <p>
                L&apos;ensemble du contenu de ce site (textes, images, vidéos, logos, graphismes, 
                icônes, sons, logiciels, etc.) est la propriété exclusive de Mémoire Image & Sons 
                ou de ses partenaires et est protégé par les lois françaises et internationales 
                relatives à la propriété intellectuelle.
              </p>
              <p>
                Toute reproduction, représentation, modification, publication, adaptation, 
                totale ou partielle, des éléments du site, quel que soit le moyen ou le procédé 
                utilisé, est interdite sans l&apos;autorisation écrite préalable de Mémoire Image & Sons.
              </p>
              <p>
                Toute exploitation non autorisée du site ou de son contenu sera considérée comme 
                constitutive d&apos;une contrefaçon et poursuivie conformément aux dispositions des 
                articles L.335-2 et suivants du Code de la Propriété Intellectuelle.
              </p>
            </div>
          </MotionCard>

          {/* Crédits */}
          <MotionCard className="p-8">
            <h2 className="heading-sm mb-6">Crédits</h2>
            <div className="space-y-4 text-text-secondary">
              <p>
                <strong className="text-white">Conception et développement :</strong> Mémoire Image & Sons
              </p>
              <p>
                <strong className="text-white">Photographies :</strong> Mémoire Image & Sons et Unsplash (photos d&apos;illustration)
              </p>
              <p>
                <strong className="text-white">Icônes :</strong> Lucide Icons (licence MIT)
              </p>
              <p>
                <strong className="text-white">Polices :</strong> Syne et Inter (Google Fonts, licence OFL)
              </p>
            </div>
          </MotionCard>

          {/* Limitation de responsabilité */}
          <MotionCard className="p-8">
            <h2 className="heading-sm mb-6">Limitation de Responsabilité</h2>
            <div className="space-y-4 text-text-secondary">
              <p>
                Mémoire Image & Sons s&apos;efforce d&apos;assurer au mieux l&apos;exactitude et la mise 
                à jour des informations diffusées sur ce site. Toutefois, Mémoire Image & Sons 
                ne peut garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des informations 
                mises à disposition sur ce site.
              </p>
              <p>
                En conséquence, Mémoire Image & Sons décline toute responsabilité pour toute 
                imprécision, inexactitude ou omission portant sur des informations disponibles 
                sur ce site.
              </p>
              <p>
                Mémoire Image & Sons ne pourra être tenue responsable des dommages directs ou 
                indirects résultant de l&apos;accès ou de l&apos;utilisation du site, y compris 
                l&apos;inaccessibilité, les pertes de données, détériorations, destructions ou 
                virus qui pourraient affecter l&apos;équipement informatique de l&apos;utilisateur.
              </p>
            </div>
          </MotionCard>

          {/* Liens hypertextes */}
          <MotionCard className="p-8">
            <h2 className="heading-sm mb-6">Liens Hypertextes</h2>
            <div className="space-y-4 text-text-secondary">
              <p>
                Le site peut contenir des liens hypertextes vers d&apos;autres sites. 
                Mémoire Image & Sons n&apos;exerce aucun contrôle sur ces sites et décline 
                toute responsabilité quant à leur contenu ou aux éventuels collectes 
                et transmissions de données personnelles effectuées par ces sites.
              </p>
              <p>
                La création de liens hypertextes vers le site memoire-is.fr est soumise 
                à l&apos;accord préalable de Mémoire Image & Sons.
              </p>
            </div>
          </MotionCard>

          {/* Droit applicable */}
          <MotionCard className="p-8">
            <h2 className="heading-sm mb-6">Droit Applicable</h2>
            <div className="space-y-4 text-text-secondary">
              <p>
                Les présentes mentions légales sont régies par le droit français. 
                En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </div>
          </MotionCard>
        </div>
      </div>
    </div>
  );
}
