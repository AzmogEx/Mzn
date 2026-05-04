/**
 * Source de vérité unique pour toutes les coordonnées et infos studio.
 * À éditer ICI uniquement — propagé partout (footer, pages légales, hero,
 * SEO, formulaire, route API).
 *
 * Les zones [À COMPLÉTER] sont à remplir par le client avant mise en ligne.
 */

export const SITE = {
  /* ------------ Identité ------------ */
  name: "MZN Studio",
  tagline:
    "Capter l'instant, diffuser l'expertise, réveiller la mémoire.",
  city: "Nîmes",
  foundedYear: 2017,
  /* URL canonique — surchargée par NEXT_PUBLIC_SITE_URL en prod */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mzn-studio.fr",

  /* ------------ Contact ------------ */
  email: "contact@mzn-studio.fr",
  phone: "+33 (0)0 00 00 00 00", // [À COMPLÉTER]
  phoneE164: "+33000000000", // [À COMPLÉTER] format href tel:
  address: {
    street: "[À COMPLÉTER]",
    postalCode: "30000",
    city: "Nîmes",
    country: "France",
  },

  /* ------------ Légal ------------ */
  legal: {
    /** Forme juridique — ex : "SARL au capital de 10 000 €" */
    legalForm: "[À COMPLÉTER — forme juridique + capital]",
    siret: "[À COMPLÉTER]",
    vatNumber: "[À COMPLÉTER]",
    director: "[À COMPLÉTER — Nom Prénom]",
    directorTitle: "Gérant",
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
    name: "Vercel Inc.",
    address: "440 N Barranca Ave #4133, Covina, CA 91723, USA",
    website: "https://vercel.com",
  },
} as const;

export type Site = typeof SITE;
