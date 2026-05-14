import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/site/legal-page-layout";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du studio MIS — éditeur, hébergeur, propriété intellectuelle.",
};

export default function MentionsLegalesPage() {
  return (
    <LegalPageLayout
      number="L.01"
      eyebrow="Légal"
      title="Mentions légales."
      lastUpdate="Mai 2026"
    >
      <p>
        Conformément aux dispositions des articles 6-III et 19 de la loi
        n° 2004-575 du 21 juin 2004 pour la confiance dans l&apos;économie
        numérique (LCEN), nous portons à la connaissance des utilisateurs et
        visiteurs du site les informations suivantes.
      </p>

      <h2>Éditeur du site</h2>
      <p>
        <strong>{SITE.name}</strong>
        <br />
        {SITE.legal.legalForm}
        <br />
        {SITE.address.street}, {SITE.address.postalCode} {SITE.address.city},{" "}
        {SITE.address.country}
        <br />
        SIRET&nbsp;: {SITE.legal.siret}
        <br />
        {SITE.legal.vatNumber}
        <br />
        Téléphone&nbsp;:{" "}
        <a href={`tel:${SITE.phoneE164}`}>{SITE.phone}</a>
        <br />
        Email&nbsp;: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
      </p>

      <h3>Directeur de la publication</h3>
      <p>
        {SITE.legal.director}, en sa qualité de {SITE.legal.directorTitle}.
      </p>

      <h2>Hébergeur du site</h2>
      <p>
        {SITE.host.name}
        <br />
        {SITE.host.address}
        <br />
        Site web&nbsp;:{" "}
        <a href={SITE.host.website} target="_blank" rel="noreferrer">
          {SITE.host.website.replace(/^https?:\/\//, "")}
        </a>
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble des contenus présents sur ce site (textes, images,
        vidéos, photographies, illustrations, marques, logos, identité
        graphique, code source) sont la propriété exclusive de {SITE.name} ou
        de leurs ayants-droit respectifs. Toute reproduction, représentation,
        modification, publication, adaptation totale ou partielle de ces
        éléments, quel que soit le moyen ou le procédé utilisé, est interdite
        sans autorisation écrite préalable.
      </p>
      <p>
        Les œuvres audiovisuelles produites pour le compte de clients
        demeurent la propriété intellectuelle de {SITE.name} jusqu&apos;à la
        cession expresse définie par contrat.
      </p>

      <h2>Données personnelles</h2>
      <p>
        Les informations recueillies via le formulaire de contact font
        l&apos;objet d&apos;un traitement informatique destiné à répondre à
        votre demande. Pour plus d&apos;informations, consultez notre{" "}
        <a href="/confidentialite">politique de confidentialité</a>.
      </p>

      <h2>Cookies</h2>
      <p>
        Ce site n&apos;utilise pas de cookies de suivi tiers ni de cookies
        publicitaires. Seuls des cookies strictement nécessaires au
        fonctionnement du site peuvent être déposés.
      </p>

      <h2>Droit applicable</h2>
      <p>
        Le présent site et ses mentions légales sont régis par le droit
        français. En cas de litige, les tribunaux français seront seuls
        compétents.
      </p>

      <hr />
      <p>
        Pour toute question relative à ces mentions, contactez-nous à{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
      </p>
    </LegalPageLayout>
  );
}
