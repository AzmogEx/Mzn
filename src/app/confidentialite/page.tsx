import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/site/legal-page-layout";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Comment MZN Studio collecte, traite et protège vos données personnelles.",
};

export default function ConfidentialitePage() {
  return (
    <LegalPageLayout
      number="L.02"
      eyebrow="Légal"
      title="Politique de confidentialité."
      lastUpdate="Mai 2026"
    >
      <p>
        MZN Studio attache une importance particulière au respect de la vie
        privée de ses interlocuteurs. La présente politique décrit la manière
        dont nous collectons, traitons, conservons et protégeons vos données
        personnelles, conformément au Règlement Général sur la Protection des
        Données (RGPD) et à la loi Informatique et Libertés.
      </p>

      <h2>Responsable du traitement</h2>
      <p>
        Le responsable du traitement des données est{" "}
        <strong>{SITE.name}</strong>, dont les coordonnées figurent dans les{" "}
        <a href="/mentions-legales">mentions légales</a>.
      </p>

      <h2>Données collectées</h2>
      <p>Nous collectons uniquement les données que vous nous transmettez :</p>
      <ul>
        <li>
          via le <a href="/contact">formulaire de brief projet</a>&nbsp;: nom,
          prénom, email, téléphone, organisation, description de votre projet
        </li>
        <li>
          par email ou téléphone&nbsp;: les informations échangées dans le
          cadre de nos relations commerciales
        </li>
      </ul>

      <h2>Finalités du traitement</h2>
      <p>Vos données sont traitées exclusivement pour&nbsp;:</p>
      <ul>
        <li>répondre à vos demandes et établir des devis</li>
        <li>exécuter les prestations qui nous sont confiées</li>
        <li>respecter nos obligations légales et comptables</li>
        <li>vous tenir informé(e) de nos actualités si vous y consentez</li>
      </ul>

      <h2>Base légale</h2>
      <p>
        Le traitement repose sur votre consentement (formulaire de contact),
        l&apos;exécution d&apos;un contrat (mission confiée) ou une obligation
        légale (facturation).
      </p>

      <h2>Durée de conservation</h2>
      <ul>
        <li>
          Demandes sans suite&nbsp;: les données sont supprimées au bout de
          3 ans à compter du dernier contact.
        </li>
        <li>
          Clients&nbsp;: données conservées pendant la durée de la relation
          contractuelle, puis archivées 10 ans pour des raisons comptables et
          fiscales.
        </li>
      </ul>

      <h2>Destinataires</h2>
      <p>
        Vos données ne sont jamais cédées, louées ou vendues à des tiers.
        Elles sont accessibles uniquement aux personnes habilitées au sein de{" "}
        {SITE.name} et, le cas échéant, à nos sous-traitants techniques
        (hébergeur, outil de messagerie) qui sont tenus à une obligation de
        confidentialité.
      </p>

      <h2>Vos droits</h2>
      <p>
        Conformément au RGPD, vous disposez des droits suivants sur vos
        données&nbsp;:
      </p>
      <ul>
        <li>droit d&apos;accès, de rectification et d&apos;effacement</li>
        <li>droit à la limitation et à l&apos;opposition au traitement</li>
        <li>droit à la portabilité</li>
        <li>droit de retirer votre consentement à tout moment</li>
        <li>
          droit d&apos;introduire une réclamation auprès de la{" "}
          <a href="https://www.cnil.fr" target="_blank" rel="noreferrer">
            CNIL
          </a>
        </li>
      </ul>
      <p>
        Pour exercer ces droits, contactez-nous à{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. Nous
        nous engageons à répondre dans un délai d&apos;un mois.
      </p>

      <h2>Sécurité</h2>
      <p>
        Nous mettons en œuvre les mesures techniques et organisationnelles
        appropriées pour protéger vos données contre tout accès non autorisé,
        altération, divulgation ou destruction. Le site est servi en HTTPS et
        nos communications par email sont chiffrées en transit.
      </p>

      <h2>Cookies</h2>
      <p>
        Ce site ne dépose aucun cookie publicitaire ni de suivi tiers. Seuls
        des cookies strictement nécessaires au fonctionnement (préférences
        d&apos;affichage) peuvent être utilisés.
      </p>

      <hr />
      <p>
        Pour toute question, écrivez-nous à{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
      </p>
    </LegalPageLayout>
  );
}
