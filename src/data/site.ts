/**
 * Source de vérité unique pour toutes les coordonnées et infos studio.
 * À éditer ICI uniquement — propagé partout (footer, pages légales, hero,
 * SEO, formulaire, route API).
 *
 * Les zones [À COMPLÉTER] sont à remplir par le client avant mise en ligne.
 */

export const SITE = {
  /* ------------ Identité ------------ */
  name: "MIS",
  fullName: "Mémoire Image Son",
  tagline:
    "Capter l'instant, diffuser l'expertise, réveiller la mémoire.",
  city: "Nîmes",
  foundedYear: 2017,
  /* URL canonique — surchargée par NEXT_PUBLIC_SITE_URL en prod */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mis-studio.fr",

  /* ------------ Contact ------------ */
  email: "contact@mis-prod.fr",
  phone: "+33 (6) 66 46 79 31", // [À COMPLÉTER]
  phoneE164: "+33666467931", // [À COMPLÉTER] format href tel:
  address: {
    street: "[À COMPLÉTER]",
    postalCode: "30000",
    city: "Nîmes",
    country: "France",
  },

  /* ------------ Légal ------------ */
  legal: {
    /** Forme juridique — ex : "SARL au capital de 10 000 €" */
    legalForm: "Auto-entreprise",
    siret: "[À COMPLÉTER]",
    vatNumber: "TVA non applicable, art. 293 B du CGI",
    director: "[À COMPLÉTER — Nom Prénom]",
    directorTitle: "Auto-entrepreneur",
  },

  /* ------------ Réseaux sociaux ------------ */
  social: {
    instagram: "https://instagram.com/", // [À COMPLÉTER]
    linkedin: "https://linkedin.com/company/", // [À COMPLÉTER]
    youtube: "https://youtube.com/@", // [À COMPLÉTER]
  },

  /* ------------ Hero ------------ */
  hero: {
    /**
     * URL de la vidéo de fond du Hero.
     * - Fichier local par défaut : `/hero.mp4` (vidéo cinématique
     *   placeholder, à remplacer par une vraie capture du studio)
     * - Si `undefined`, le fallback gradient animé s'affiche
     */
    videoUrl: "/hero.mp4" as string | undefined,
  },

  /* ------------ Hébergeur (mentions légales) ------------ */
  host: {
    name: "OVH SAS",
    address: "2 rue Kellermann, 59100 Roubaix, France",
    website: "https://www.ovh.com",
  },
} as const;

export type Site = typeof SITE;
