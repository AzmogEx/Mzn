"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Database, UserCheck, Mail, AlertTriangle } from "lucide-react";
import { MotionCard } from "@/components/ui/card";

export default function ConfidentialitePage() {
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
            <Shield className="w-8 h-8 text-emotion" />
          </div>
          <h1 className="heading-xl">Politique de Confidentialité</h1>
          <p className="body-md text-text-muted">
            Dernière mise à jour : Janvier 2026
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <MotionCard className="p-8">
            <h2 className="heading-sm mb-6 flex items-center gap-3">
              <Lock className="w-5 h-5 text-emotion" />
              Introduction
            </h2>
            <div className="space-y-4 text-text-secondary">
              <p>
                Mémoire Image & Sons accorde une grande importance à la protection de vos 
                données personnelles et au respect de votre vie privée. La présente politique 
                de confidentialité vous informe sur la manière dont nous collectons, utilisons 
                et protégeons vos données personnelles conformément au Règlement Général sur 
                la Protection des Données (RGPD) et à la loi Informatique et Libertés.
              </p>
              <p>
                En utilisant notre site et nos services, vous acceptez les pratiques décrites 
                dans cette politique de confidentialité.
              </p>
            </div>
          </MotionCard>

          {/* Responsable du traitement */}
          <MotionCard className="p-8">
            <h2 className="heading-sm mb-6">Responsable du Traitement</h2>
            <div className="space-y-4 text-text-secondary">
              <p>
                Le responsable du traitement de vos données personnelles est :
              </p>
              <p className="pl-4 border-l-2 border-emotion/30">
                <strong className="text-white">Mémoire Image & Sons</strong><br />
                Nîmes, Gard (30) - Occitanie, France<br />
                Email : contact@memoire-is.fr<br />
                Téléphone : +33 (0)4 66 00 00 00
              </p>
            </div>
          </MotionCard>

          {/* Données collectées */}
          <MotionCard className="p-8">
            <h2 className="heading-sm mb-6 flex items-center gap-3">
              <Database className="w-5 h-5 text-emotion" />
              Données Collectées
            </h2>
            <div className="space-y-4 text-text-secondary">
              <p>Nous collectons les données suivantes :</p>
              
              <h3 className="text-white font-semibold mt-6">Données d&apos;identification</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Adresse postale (si nécessaire pour la prestation)</li>
              </ul>

              <h3 className="text-white font-semibold mt-6">Données professionnelles (entreprises et institutions)</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Nom de l&apos;entreprise ou de l&apos;établissement</li>
                <li>Numéro SIRET</li>
                <li>Fonction professionnelle</li>
              </ul>

              <h3 className="text-white font-semibold mt-6">Données liées aux projets</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Date et lieu de l&apos;événement</li>
                <li>Description du projet</li>
                <li>Images et vidéos captées lors des prestations</li>
              </ul>

              <h3 className="text-white font-semibold mt-6">Données de navigation</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Adresse IP</li>
                <li>Type de navigateur</li>
                <li>Pages visitées et durée de visite</li>
              </ul>
            </div>
          </MotionCard>

          {/* Finalités */}
          <MotionCard className="p-8">
            <h2 className="heading-sm mb-6 flex items-center gap-3">
              <Eye className="w-5 h-5 text-emotion" />
              Finalités du Traitement
            </h2>
            <div className="space-y-4 text-text-secondary">
              <p>Vos données sont collectées pour les finalités suivantes :</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Répondre à vos demandes de devis et d&apos;informations</li>
                <li>Gérer la relation commerciale et la facturation</li>
                <li>Réaliser les prestations commandées</li>
                <li>Vous informer sur nos services (avec votre consentement)</li>
                <li>Améliorer notre site et nos services</li>
                <li>Respecter nos obligations légales et réglementaires</li>
              </ul>
            </div>
          </MotionCard>

          {/* Base légale */}
          <MotionCard className="p-8">
            <h2 className="heading-sm mb-6">Base Légale du Traitement</h2>
            <div className="space-y-4 text-text-secondary">
              <p>Le traitement de vos données repose sur :</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong className="text-white">Votre consentement</strong> : pour l&apos;envoi de communications commerciales</li>
                <li><strong className="text-white">L&apos;exécution d&apos;un contrat</strong> : pour la réalisation de nos prestations</li>
                <li><strong className="text-white">L&apos;intérêt légitime</strong> : pour améliorer nos services et assurer la sécurité du site</li>
                <li><strong className="text-white">Les obligations légales</strong> : pour la conservation des factures et documents comptables</li>
              </ul>
            </div>
          </MotionCard>

          {/* Destinataires */}
          <MotionCard className="p-8">
            <h2 className="heading-sm mb-6">Destinataires des Données</h2>
            <div className="space-y-4 text-text-secondary">
              <p>Vos données peuvent être transmises à :</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Notre équipe interne (direction, équipe technique, administration)</li>
                <li>Nos prestataires techniques (hébergement, outils de gestion)</li>
                <li>Notre expert-comptable pour les obligations fiscales</li>
                <li>Les autorités compétentes en cas d&apos;obligation légale</li>
              </ul>
              <p className="mt-4">
                <strong className="text-white">Nous ne vendons jamais vos données à des tiers.</strong>
              </p>
            </div>
          </MotionCard>

          {/* Durée de conservation */}
          <MotionCard className="p-8">
            <h2 className="heading-sm mb-6">Durée de Conservation</h2>
            <div className="space-y-4 text-text-secondary">
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong className="text-white">Données prospects</strong> : 3 ans à compter du dernier contact</li>
                <li><strong className="text-white">Données clients</strong> : 5 ans après la fin de la relation commerciale</li>
                <li><strong className="text-white">Documents comptables</strong> : 10 ans (obligation légale)</li>
                <li><strong className="text-white">Rushes et fichiers vidéo</strong> : selon les termes du contrat, généralement 1 an après livraison</li>
              </ul>
            </div>
          </MotionCard>

          {/* Vos droits */}
          <MotionCard className="p-8">
            <h2 className="heading-sm mb-6 flex items-center gap-3">
              <UserCheck className="w-5 h-5 text-emotion" />
              Vos Droits
            </h2>
            <div className="space-y-4 text-text-secondary">
              <p>Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong className="text-white">Droit d&apos;accès</strong> : obtenir une copie de vos données personnelles</li>
                <li><strong className="text-white">Droit de rectification</strong> : corriger des données inexactes ou incomplètes</li>
                <li><strong className="text-white">Droit à l&apos;effacement</strong> : demander la suppression de vos données</li>
                <li><strong className="text-white">Droit à la limitation</strong> : limiter le traitement de vos données</li>
                <li><strong className="text-white">Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
                <li><strong className="text-white">Droit d&apos;opposition</strong> : vous opposer au traitement de vos données</li>
                <li><strong className="text-white">Droit de retirer votre consentement</strong> : à tout moment pour les traitements basés sur le consentement</li>
              </ul>
              <p className="mt-4">
                Pour exercer vos droits, contactez-nous à : <a href="mailto:contact@memoire-is.fr" className="text-emotion hover:underline">contact@memoire-is.fr</a>
              </p>
              <p>
                Vous pouvez également introduire une réclamation auprès de la CNIL : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-emotion hover:underline">www.cnil.fr</a>
              </p>
            </div>
          </MotionCard>

          {/* Sécurité */}
          <MotionCard className="p-8">
            <h2 className="heading-sm mb-6">Sécurité des Données</h2>
            <div className="space-y-4 text-text-secondary">
              <p>
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées 
                pour protéger vos données contre tout accès non autorisé, modification, divulgation 
                ou destruction :
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Chiffrement SSL/TLS pour les transmissions de données</li>
                <li>Accès restreint aux données personnelles</li>
                <li>Sauvegardes régulières et sécurisées</li>
                <li>Mise à jour régulière de nos systèmes</li>
              </ul>
            </div>
          </MotionCard>

          {/* Cookies */}
          <MotionCard className="p-8">
            <h2 className="heading-sm mb-6">Cookies</h2>
            <div className="space-y-4 text-text-secondary">
              <p>
                Notre site utilise des cookies pour améliorer votre expérience de navigation. 
                Les cookies sont de petits fichiers texte stockés sur votre appareil.
              </p>
              <h3 className="text-white font-semibold mt-4">Types de cookies utilisés :</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong className="text-white">Cookies essentiels</strong> : nécessaires au fonctionnement du site</li>
                <li><strong className="text-white">Cookies analytiques</strong> : pour comprendre l&apos;utilisation du site (avec consentement)</li>
              </ul>
              <p className="mt-4">
                Vous pouvez configurer votre navigateur pour refuser les cookies. Cependant, 
                certaines fonctionnalités du site pourraient ne pas fonctionner correctement.
              </p>
            </div>
          </MotionCard>

          {/* Modifications */}
          <MotionCard className="p-8">
            <h2 className="heading-sm mb-6 flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-emotion" />
              Modifications de la Politique
            </h2>
            <div className="space-y-4 text-text-secondary">
              <p>
                Nous nous réservons le droit de modifier cette politique de confidentialité 
                à tout moment. Toute modification sera publiée sur cette page avec une date 
                de mise à jour. Nous vous encourageons à consulter régulièrement cette page.
              </p>
            </div>
          </MotionCard>

          {/* Contact */}
          <MotionCard className="p-8">
            <h2 className="heading-sm mb-6 flex items-center gap-3">
              <Mail className="w-5 h-5 text-emotion" />
              Contact
            </h2>
            <div className="space-y-4 text-text-secondary">
              <p>
                Pour toute question concernant cette politique de confidentialité ou 
                le traitement de vos données personnelles, contactez-nous :
              </p>
              <p className="pl-4 border-l-2 border-emotion/30">
                <strong className="text-white">Mémoire Image & Sons</strong><br />
                Email : contact@memoire-is.fr<br />
                Téléphone : +33 (0)4 66 00 00 00
              </p>
            </div>
          </MotionCard>
        </div>
      </div>
    </div>
  );
}
