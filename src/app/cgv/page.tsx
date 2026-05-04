import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/site/legal-page-layout";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Conditions générales de vente",
  description:
    "CGV applicables aux prestations audiovisuelles de {SITE.name}.",
};

export default function CgvPage() {
  return (
    <LegalPageLayout
      number="L.03"
      eyebrow="Légal"
      title="Conditions générales de vente."
      lastUpdate="Mai 2026"
    >
      <p>
        Les présentes Conditions Générales de Vente (« CGV ») s&apos;appliquent
        à toutes les prestations audiovisuelles fournies par{" "}
        <strong>{SITE.name}</strong> (« le Prestataire ») à ses clients
        (« le Client »). Toute commande implique l&apos;acceptation pleine et
        entière des présentes CGV.
      </p>

      <h2>1. Devis et commandes</h2>
      <p>
        Toute prestation fait l&apos;objet d&apos;un devis détaillé. Le devis
        précise la nature de la mission, le matériel mobilisé, les délais, le
        nombre de livrables et le prix. Le devis est valable 30 jours à compter
        de son émission. La signature du devis (ou son acceptation par email)
        vaut commande ferme.
      </p>

      <h2>2. Tarifs</h2>
      <p>
        Les tarifs sont exprimés en euros, hors taxes (HT). La TVA en vigueur
        au jour de l&apos;émission de la facture est applicable. Les frais de
        déplacement, hébergement et restauration en dehors de la zone
        d&apos;intervention de référence (50 km autour de {SITE.city}) sont facturés
        en sus.
      </p>

      <h2>3. Conditions de paiement</h2>
      <ul>
        <li>
          Acompte de <strong>40 %</strong> à la signature du devis (réservation
          du matériel et de l&apos;équipe)
        </li>
        <li>
          Solde de <strong>60 %</strong> à la livraison des fichiers, sous
          30 jours fin de mois
        </li>
        <li>
          Pour les missions d&apos;une durée inférieure à un jour, le paiement
          intégral est exigé à la commande
        </li>
      </ul>
      <p>
        En cas de retard de paiement, des pénalités calculées au taux de la
        BCE majoré de 10 points seront appliquées de plein droit, ainsi
        qu&apos;une indemnité forfaitaire de 40 € pour frais de recouvrement
        (article D. 441-5 du Code de commerce).
      </p>

      <h2>4. Livraison et délais</h2>
      <p>
        Les délais de livraison indiqués sur le devis sont donnés à titre
        indicatif. Sauf cas de force majeure, {SITE.name} s&apos;engage à
        respecter ces délais à compter de la réception de l&apos;acompte et
        des éléments nécessaires à la mission.
      </p>
      <p>
        Les fichiers sont livrés via un lien de téléchargement sécurisé valable
        90 jours. Au-delà, des frais de remise à disposition pourront être
        appliqués.
      </p>

      <h2>5. Validation et modifications</h2>
      <p>
        Le Client dispose de <strong>deux séries de retours</strong> incluses
        dans le devis pour chaque livrable. Toute modification au-delà fera
        l&apos;objet d&apos;un avenant tarifé.
      </p>

      <h2>6. Annulation</h2>
      <ul>
        <li>
          Annulation par le Client à plus de 14 jours de la prestation&nbsp;:
          remboursement de 50 % de l&apos;acompte
        </li>
        <li>
          Annulation entre 14 et 7 jours&nbsp;: l&apos;acompte est conservé
        </li>
        <li>
          Annulation à moins de 7 jours&nbsp;: la totalité du devis est due
        </li>
      </ul>

      <h2>7. Propriété intellectuelle et droits d&apos;auteur</h2>
      <p>
        {SITE.name} reste titulaire des droits d&apos;auteur sur les œuvres
        produites jusqu&apos;à paiement intégral du prix. Le devis précise
        l&apos;étendue de la cession (durée, territoires, supports).
      </p>
      <p>
        Le Client garantit qu&apos;il dispose des droits nécessaires sur les
        éléments qu&apos;il fournit (logos, musiques, images, témoins) et
        garantit {SITE.name} contre tout recours de tiers.
      </p>

      <h2>8. Droit à l&apos;image</h2>
      <p>
        Le Client fait son affaire de l&apos;obtention des autorisations de
        droit à l&apos;image auprès des personnes filmées, sauf mention
        contraire au devis. {SITE.name} met à disposition des modèles de
        cession de droit à l&apos;image.
      </p>

      <h2>9. Référencement</h2>
      <p>
        Sauf opposition expresse du Client, {SITE.name} se réserve le droit de
        citer le Client comme référence et de présenter les œuvres produites
        dans son portfolio (site, réseaux, démonstrations commerciales).
      </p>

      <h2>10. Responsabilité</h2>
      <p>
        La responsabilité de {SITE.name}{" "}est limitée au montant total facturé
        pour la mission concernée. {SITE.name} ne saurait être tenu responsable
        des dommages indirects, perte d&apos;exploitation ou perte de chance.
      </p>

      <h2>11. Force majeure</h2>
      <p>
        Aucune des parties ne pourra être tenue responsable d&apos;une
        inexécution due à un cas de force majeure (panne grave, intempéries
        rendant la captation impossible, maladie, événement extérieur
        imprévisible).
      </p>

      <h2>12. Litiges</h2>
      <p>
        Les présentes CGV sont régies par le droit français. En cas de litige
        et à défaut de résolution amiable, les tribunaux du ressort de {SITE.city}
        seront seuls compétents.
      </p>

      <hr />
      <p>
        Pour toute question relative aux CGV, contactez{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
      </p>
    </LegalPageLayout>
  );
}
