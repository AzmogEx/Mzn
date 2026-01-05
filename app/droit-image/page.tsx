"use client";

import React from "react";
import { motion } from "framer-motion";
import { Camera, Users, FileCheck, AlertTriangle, Shield, Download } from "lucide-react";
import { MotionCard } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DroitImagePage() {
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
            <Camera className="w-8 h-8 text-emotion" />
          </div>
          <h1 className="heading-xl">Droit à l&apos;Image</h1>
          <p className="body-md text-text-muted max-w-2xl mx-auto">
            Informations sur le droit à l&apos;image et les autorisations nécessaires 
            dans le cadre de nos prestations audiovisuelles.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <MotionCard className="p-8">
            <h2 className="heading-sm mb-6 flex items-center gap-3">
              <Shield className="w-5 h-5 text-emotion" />
              Principe Fondamental
            </h2>
            <div className="space-y-4 text-text-secondary">
              <p>
                Le droit à l&apos;image est un droit fondamental protégé par l&apos;article 9 
                du Code civil : « Chacun a droit au respect de sa vie privée ». 
                Toute personne dispose d&apos;un droit exclusif sur son image et sur 
                l&apos;utilisation qui en est faite.
              </p>
              <p>
                <strong className="text-white">Mémoire Image & Sons s&apos;engage à respecter 
                scrupuleusement ce droit</strong> et à obtenir les autorisations nécessaires 
                avant toute captation et diffusion d&apos;images.
              </p>
            </div>
          </MotionCard>

          {/* Autorisations particuliers */}
          <MotionCard className="p-8">
            <h2 className="heading-sm mb-6 flex items-center gap-3">
              <Users className="w-5 h-5 text-emotion" />
              Mariages et Événements Privés
            </h2>
            <div className="space-y-4 text-text-secondary">
              <h3 className="text-white font-semibold">Les mariés / organisateurs</h3>
              <p>
                Le contrat signé avec les mariés ou l&apos;organisateur de l&apos;événement 
                inclut une autorisation de captation. Les mariés s&apos;engagent à informer 
                leurs invités de la présence d&apos;un vidéaste.
              </p>

              <h3 className="text-white font-semibold mt-4">Les invités</h3>
              <p>
                La présence à un événement privé filmé vaut généralement consentement 
                implicite pour un usage strictement privé (diffusion famille/amis). 
                Toutefois :
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Tout invité peut demander à ne pas être filmé en le signalant à l&apos;équipe</li>
                <li>Toute demande de retrait post-événement sera respectée</li>
                <li>Pour une diffusion publique (réseaux sociaux publics), une autorisation explicite est requise</li>
              </ul>

              <h3 className="text-white font-semibold mt-4">Les mineurs</h3>
              <p>
                La captation et diffusion d&apos;images de mineurs nécessite l&apos;autorisation 
                des deux parents ou du représentant légal. Des formulaires spécifiques 
                sont disponibles sur demande.
              </p>
            </div>
          </MotionCard>

          {/* Autorisations institutions */}
          <MotionCard className="p-8 border-emotion/30">
            <h2 className="heading-sm mb-6 flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-emotion" />
              Établissements de Santé (EHPAD)
            </h2>
            <div className="space-y-4 text-text-secondary">
              <div className="p-4 rounded-lg bg-emotion/10 border border-emotion/20 mb-6">
                <p className="text-white font-medium">
                  ⚠️ Public vulnérable : vigilance renforcée
                </p>
                <p className="text-sm mt-2">
                  Les résidents d&apos;EHPAD constituent un public vulnérable nécessitant 
                  une attention particulière au consentement.
                </p>
              </div>

              <h3 className="text-white font-semibold">Protocole obligatoire</h3>
              <ol className="list-decimal list-inside space-y-3 pl-4">
                <li>
                  <strong className="text-white">Convention avec l&apos;établissement</strong> : 
                  définit le cadre juridique et les responsabilités
                </li>
                <li>
                  <strong className="text-white">Autorisation individuelle</strong> : 
                  signée par le résident (si capacité) ET/OU son représentant légal / 
                  personne de confiance / famille
                </li>
                <li>
                  <strong className="text-white">Validation médicale</strong> : 
                  avis du médecin coordonnateur pour les résidents sous protection juridique
                </li>
                <li>
                  <strong className="text-white">Droit de retrait</strong> : 
                  possibilité de retirer son consentement à tout moment
                </li>
              </ol>

              <h3 className="text-white font-semibold mt-6">Usage des images</h3>
              <p>Les images captées en EHPAD sont destinées à :</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Un usage thérapeutique (ateliers mémoire)</li>
                <li>La transmission aux familles (accès privé et sécurisé)</li>
                <li>La conservation patrimoniale (biographies vidéo)</li>
              </ul>
              <p className="mt-4 text-white font-medium">
                Toute autre utilisation (communication institutionnelle, presse, etc.) 
                nécessite une autorisation distincte et explicite.
              </p>
            </div>
          </MotionCard>

          {/* Autorisations entreprises */}
          <MotionCard className="p-8">
            <h2 className="heading-sm mb-6">Événements d&apos;Entreprise</h2>
            <div className="space-y-4 text-text-secondary">
              <h3 className="text-white font-semibold">Responsabilité de l&apos;entreprise</h3>
              <p>
                L&apos;entreprise cliente est responsable de l&apos;obtention des autorisations 
                de droit à l&apos;image de ses collaborateurs, intervenants et participants. 
                Mémoire Image & Sons peut fournir des modèles d&apos;autorisation.
              </p>

              <h3 className="text-white font-semibold mt-4">Bonnes pratiques recommandées</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Informer les participants en amont de la captation vidéo</li>
                <li>Prévoir une signalétique sur le lieu de l&apos;événement</li>
                <li>Collecter les autorisations écrites pour toute diffusion externe</li>
                <li>Proposer des zones « off camera » pour ceux qui le souhaitent</li>
              </ul>

              <h3 className="text-white font-semibold mt-4">Intervenants externes</h3>
              <p>
                Pour les conférenciers, artistes ou prestataires filmés, une clause 
                spécifique doit figurer dans leur contrat ou une autorisation distincte 
                doit être obtenue.
              </p>
            </div>
          </MotionCard>

          {/* Formulaires */}
          <MotionCard className="p-8">
            <h2 className="heading-sm mb-6 flex items-center gap-3">
              <FileCheck className="w-5 h-5 text-emotion" />
              Documents et Formulaires
            </h2>
            <div className="space-y-4 text-text-secondary">
              <p>
                Nous mettons à disposition de nos clients les formulaires suivants :
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <h4 className="text-white font-medium mb-2">Autorisation standard</h4>
                  <p className="text-sm mb-3">Pour les événements privés et mariages</p>
                  <Button variant="outline" size="sm" disabled>
                    <Download className="w-4 h-4 mr-2" />
                    PDF (bientôt)
                  </Button>
                </div>

                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <h4 className="text-white font-medium mb-2">Autorisation mineur</h4>
                  <p className="text-sm mb-3">Nécessite signature des 2 parents</p>
                  <Button variant="outline" size="sm" disabled>
                    <Download className="w-4 h-4 mr-2" />
                    PDF (bientôt)
                  </Button>
                </div>

                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <h4 className="text-white font-medium mb-2">Autorisation EHPAD</h4>
                  <p className="text-sm mb-3">Formulaire adapté personnes vulnérables</p>
                  <Button variant="outline" size="sm" disabled>
                    <Download className="w-4 h-4 mr-2" />
                    PDF (bientôt)
                  </Button>
                </div>

                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <h4 className="text-white font-medium mb-2">Autorisation entreprise</h4>
                  <p className="text-sm mb-3">Pour collaborateurs et intervenants</p>
                  <Button variant="outline" size="sm" disabled>
                    <Download className="w-4 h-4 mr-2" />
                    PDF (bientôt)
                  </Button>
                </div>
              </div>

              <p className="text-sm text-text-muted mt-4">
                Ces documents sont fournis à titre indicatif et peuvent être adaptés 
                à vos besoins spécifiques. N&apos;hésitez pas à nous contacter.
              </p>
            </div>
          </MotionCard>

          {/* Vos droits */}
          <MotionCard className="p-8">
            <h2 className="heading-sm mb-6">Exercer vos Droits</h2>
            <div className="space-y-4 text-text-secondary">
              <p>Si vous apparaissez dans une de nos productions, vous pouvez :</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <strong className="text-white">Demander l&apos;accès</strong> : 
                  obtenir une copie des images vous concernant
                </li>
                <li>
                  <strong className="text-white">Demander le retrait</strong> : 
                  faire supprimer votre image d&apos;une production (dans les limites techniques)
                </li>
                <li>
                  <strong className="text-white">Limiter l&apos;usage</strong> : 
                  restreindre la diffusion de votre image à certains supports
                </li>
                <li>
                  <strong className="text-white">Retirer votre consentement</strong> : 
                  à tout moment pour les usages futurs
                </li>
              </ul>

              <p className="mt-6">
                Pour exercer ces droits, contactez-nous à : 
                <a href="mailto:contact@memoire-is.fr" className="text-emotion hover:underline ml-1">
                  contact@memoire-is.fr
                </a>
              </p>
              <p className="text-sm text-text-muted">
                Merci de préciser l&apos;événement concerné, la date et si possible 
                de joindre une photo permettant de vous identifier.
              </p>
            </div>
          </MotionCard>

          {/* Engagement */}
          <MotionCard className="p-8 border-success/30">
            <h2 className="heading-sm mb-6 text-success flex items-center gap-3">
              <Shield className="w-5 h-5" />
              Notre Engagement
            </h2>
            <div className="space-y-4 text-text-secondary">
              <p>
                Mémoire Image & Sons s&apos;engage à :
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Respecter la dignité et la vie privée de chaque personne filmée</li>
                <li>Obtenir les consentements nécessaires avant toute captation</li>
                <li>Sécuriser le stockage et la transmission des images</li>
                <li>Répondre rapidement à toute demande relative au droit à l&apos;image</li>
                <li>Former notre équipe aux bonnes pratiques en matière de droit à l&apos;image</li>
              </ul>
            </div>
          </MotionCard>
        </div>
      </div>
    </div>
  );
}
