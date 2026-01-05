"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Euro, Calendar, AlertCircle, CheckCircle, XCircle } from "lucide-react";
import { MotionCard } from "@/components/ui/card";

export default function CGVPage() {
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
            <FileText className="w-8 h-8 text-emotion" />
          </div>
          <h1 className="heading-xl">Conditions Générales de Vente</h1>
          <p className="body-md text-text-muted">
            Dernière mise à jour : Janvier 2026
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Préambule */}
          <MotionCard className="p-8">
            <h2 className="heading-sm mb-6">Article 1 - Préambule</h2>
            <div className="space-y-4 text-text-secondary">
              <p>
                Les présentes Conditions Générales de Vente (CGV) régissent les relations 
                contractuelles entre Mémoire Image & Sons (ci-après « le Prestataire ») et 
                tout client professionnel ou particulier (ci-après « le Client ») dans le 
                cadre de prestations de production audiovisuelle.
              </p>
              <p>
                Toute commande implique l&apos;acceptation sans réserve des présentes CGV, 
                qui prévalent sur tout autre document du Client.
              </p>
            </div>
          </MotionCard>

          {/* Services */}
          <MotionCard className="p-8">
            <h2 className="heading-sm mb-6">Article 2 - Services Proposés</h2>
            <div className="space-y-4 text-text-secondary">
              <p>Mémoire Image & Sons propose les services suivants :</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Captation vidéo d&apos;événements (mariages, séminaires, conférences, etc.)</li>
                <li>Réalisation de films institutionnels et corporate</li>
                <li>Streaming et diffusion en direct</li>
                <li>Ateliers mémoire et captation en établissements de santé</li>
                <li>Montage et post-production</li>
                <li>Biographies vidéo et documentaires de vie</li>
              </ul>
            </div>
          </MotionCard>

          {/* Devis et commande */}
          <MotionCard className="p-8">
            <h2 className="heading-sm mb-6 flex items-center gap-3">
              <Euro className="w-5 h-5 text-emotion" />
              Article 3 - Devis et Commande
            </h2>
            <div className="space-y-4 text-text-secondary">
              <h3 className="text-white font-semibold">3.1 Devis</h3>
              <p>
                Tout devis est établi gratuitement et reste valable 30 jours à compter 
                de sa date d&apos;émission. Les prix indiqués sont en euros et hors taxes, 
                sauf mention contraire.
              </p>

              <h3 className="text-white font-semibold mt-4">3.2 Validation de la commande</h3>
              <p>
                La commande est considérée comme ferme et définitive après :
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Retour du devis signé avec la mention « Bon pour accord »</li>
                <li>Versement de l&apos;acompte prévu</li>
              </ul>

              <h3 className="text-white font-semibold mt-4">3.3 Modifications</h3>
              <p>
                Toute demande de modification après validation du devis pourra entraîner 
                une révision du prix et des délais. Un nouveau devis sera alors établi.
              </p>
            </div>
          </MotionCard>

          {/* Tarifs et paiement */}
          <MotionCard className="p-8">
            <h2 className="heading-sm mb-6">Article 4 - Tarifs et Modalités de Paiement</h2>
            <div className="space-y-4 text-text-secondary">
              <h3 className="text-white font-semibold">4.1 Acompte</h3>
              <p>
                Un acompte de 30% du montant total TTC est demandé à la commande pour 
                réserver la date et confirmer la prestation. Cet acompte n&apos;est pas 
                remboursable sauf dans les cas prévus à l&apos;article 6.
              </p>

              <h3 className="text-white font-semibold mt-4">4.2 Solde</h3>
              <p>
                Le solde est payable selon les modalités suivantes :
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong className="text-white">Particuliers</strong> : solde à la livraison des fichiers définitifs</li>
                <li><strong className="text-white">Entreprises/Institutions</strong> : 30 jours fin de mois à réception de facture</li>
              </ul>

              <h3 className="text-white font-semibold mt-4">4.3 Moyens de paiement</h3>
              <p>
                Paiement accepté par : virement bancaire, chèque, carte bancaire.
              </p>

              <h3 className="text-white font-semibold mt-4">4.4 Retard de paiement</h3>
              <p>
                Tout retard de paiement entraînera l&apos;application de pénalités de retard 
                au taux légal en vigueur, ainsi qu&apos;une indemnité forfaitaire de 40€ pour 
                frais de recouvrement (article L.441-10 du Code de commerce).
              </p>
            </div>
          </MotionCard>

          {/* Déroulement */}
          <MotionCard className="p-8">
            <h2 className="heading-sm mb-6 flex items-center gap-3">
              <Calendar className="w-5 h-5 text-emotion" />
              Article 5 - Déroulement de la Prestation
            </h2>
            <div className="space-y-4 text-text-secondary">
              <h3 className="text-white font-semibold">5.1 Préparation</h3>
              <p>
                Un briefing préalable sera organisé pour définir les attentes du Client. 
                Le Client s&apos;engage à fournir toutes les informations nécessaires à la 
                bonne réalisation de la prestation.
              </p>

              <h3 className="text-white font-semibold mt-4">5.2 Jour J</h3>
              <p>
                Le Client s&apos;engage à permettre au Prestataire l&apos;accès aux lieux et 
                à assurer les conditions nécessaires à la captation (espace, électricité, etc.).
              </p>

              <h3 className="text-white font-semibold mt-4">5.3 Livraison</h3>
              <p>
                Les délais de livraison sont indicatifs et communiqués dans le devis. 
                Sauf accord contraire :
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Teaser/bande-annonce : 2 à 3 semaines</li>
                <li>Film final : 8 à 12 semaines selon la saison</li>
                <li>Captation corporate : 2 à 4 semaines</li>
              </ul>
            </div>
          </MotionCard>

          {/* Annulation */}
          <MotionCard className="p-8">
            <h2 className="heading-sm mb-6 flex items-center gap-3">
              <XCircle className="w-5 h-5 text-rec" />
              Article 6 - Annulation et Report
            </h2>
            <div className="space-y-4 text-text-secondary">
              <h3 className="text-white font-semibold">6.1 Annulation par le Client</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Plus de 60 jours avant : remboursement de l&apos;acompte moins 10% de frais de dossier</li>
                <li>Entre 30 et 60 jours : 50% de l&apos;acompte conservé</li>
                <li>Moins de 30 jours : acompte non remboursable</li>
                <li>Moins de 7 jours : 100% du montant total dû</li>
              </ul>

              <h3 className="text-white font-semibold mt-4">6.2 Report</h3>
              <p>
                Un report est possible sous réserve de disponibilité. Un seul report 
                gratuit est accepté si demandé plus de 30 jours avant la date initiale. 
                Au-delà, des frais de report de 15% pourront être appliqués.
              </p>

              <h3 className="text-white font-semibold mt-4">6.3 Force majeure</h3>
              <p>
                En cas de force majeure (intempéries exceptionnelles, pandémie, etc.), 
                les parties conviendront ensemble d&apos;un report sans pénalité.
              </p>
            </div>
          </MotionCard>

          {/* Propriété intellectuelle */}
          <MotionCard className="p-8">
            <h2 className="heading-sm mb-6">Article 7 - Propriété Intellectuelle</h2>
            <div className="space-y-4 text-text-secondary">
              <h3 className="text-white font-semibold">7.1 Droits cédés au Client</h3>
              <p>
                Le Client acquiert les droits d&apos;utilisation des créations dans le 
                cadre défini au devis (usage privé, diffusion interne, communication 
                externe, etc.). Ces droits sont cédés après paiement intégral.
              </p>

              <h3 className="text-white font-semibold mt-4">7.2 Droits conservés par le Prestataire</h3>
              <p>
                Sauf accord contraire, Mémoire Image & Sons conserve le droit d&apos;utiliser 
                des extraits des créations à des fins de promotion (portfolio, réseaux 
                sociaux, showreel) dans le respect du droit à l&apos;image des personnes filmées.
              </p>

              <h3 className="text-white font-semibold mt-4">7.3 Conservation des rushes</h3>
              <p>
                Les rushes sont conservés 12 mois après livraison. Passé ce délai, ils 
                seront supprimés. Une conservation prolongée peut être négociée moyennant 
                des frais d&apos;archivage.
              </p>
            </div>
          </MotionCard>

          {/* Responsabilité */}
          <MotionCard className="p-8">
            <h2 className="heading-sm mb-6 flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-emotion" />
              Article 8 - Responsabilité
            </h2>
            <div className="space-y-4 text-text-secondary">
              <h3 className="text-white font-semibold">8.1 Obligations du Prestataire</h3>
              <p>
                Le Prestataire s&apos;engage à apporter tout le soin et le professionnalisme 
                nécessaires à la réalisation de la prestation. Il dispose d&apos;une assurance 
                responsabilité civile professionnelle.
              </p>

              <h3 className="text-white font-semibold mt-4">8.2 Limitations</h3>
              <p>
                La responsabilité du Prestataire ne saurait être engagée en cas de :
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Conditions de captation défavorables indépendantes de sa volonté</li>
                <li>Non-respect par le Client de ses obligations</li>
                <li>Défaillance technique imprévisible malgré les précautions prises</li>
              </ul>
              <p className="mt-4">
                En tout état de cause, la responsabilité du Prestataire est limitée 
                au montant de la prestation.
              </p>
            </div>
          </MotionCard>

          {/* Réclamations */}
          <MotionCard className="p-8">
            <h2 className="heading-sm mb-6 flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-success" />
              Article 9 - Validation et Réclamations
            </h2>
            <div className="space-y-4 text-text-secondary">
              <p>
                Le Client dispose de 15 jours après livraison pour émettre des demandes 
                de modifications dans la limite du raisonnable (2 séries de révisions incluses).
              </p>
              <p>
                Passé ce délai, les livrables sont réputés acceptés. Toute modification 
                supplémentaire fera l&apos;objet d&apos;un devis complémentaire.
              </p>
            </div>
          </MotionCard>

          {/* Droit applicable */}
          <MotionCard className="p-8">
            <h2 className="heading-sm mb-6">Article 10 - Droit Applicable et Litiges</h2>
            <div className="space-y-4 text-text-secondary">
              <p>
                Les présentes CGV sont soumises au droit français. En cas de litige, 
                les parties s&apos;engagent à rechercher une solution amiable avant toute 
                action judiciaire.
              </p>
              <p>
                À défaut d&apos;accord amiable, les tribunaux compétents seront ceux du 
                ressort du siège social de Mémoire Image & Sons.
              </p>
              <p>
                Conformément aux articles L.616-1 et R.616-1 du Code de la consommation, 
                le Client consommateur peut recourir gratuitement au service de médiation 
                MEDICYS : <a href="https://www.medicys.fr" target="_blank" rel="noopener noreferrer" className="text-emotion hover:underline">www.medicys.fr</a>
              </p>
            </div>
          </MotionCard>
        </div>
      </div>
    </div>
  );
}
