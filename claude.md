# Site Vitrine MIS - Mémoire Image Sons

## Description du Projet
Site vitrine Next.js pour l'entreprise de production audiovisuelle **MIS (Mémoire Image Sons)**.

## Objectifs
- Créer un site vitrine moderne et visuellement attractif
- Présenter les services de production audiovisuelle
- Générer des leads via un formulaire de contact optimisé
- Showcaser le portfolio et les capacités de l'entreprise

## Technologies Utilisées
- **Framework** : Next.js 14+ avec App Router et TypeScript
- **Styling** : Tailwind CSS + CSS Modules
- **Animations** : Framer Motion + AOS (Animate On Scroll)
- **Formulaires** : React Hook Form + Zod pour validation
- **Images** : Next.js Image avec optimisation automatique
- **Deployment** : Vercel (recommandé pour Next.js)

## Structure du Site

### Pages Principales
1. **Accueil** (`/`)
   - Hero section avec vidéo background
   - Présentation de l'entreprise
   - Services en aperçu
   - Portfolio highlights
   - Témoignages clients
   - CTA contact

2. **Services** (`/services`)
   - Mariages et événements privés
   - Événements corporatifs
   - Productions artistiques
   - Immobilier et architecture
   - Formations et webinaires
   - Post-production

3. **Portfolio** (`/portfolio`)
   - Galerie interactive avec filtres
   - Projets détaillés (case studies)
   - Showreel vidéo
   - Téléchargements (brochures, tarifs)

4. **Contact** (`/contact`)
   - Formulaire de devis personnalisé
   - Informations pratiques
   - Carte interactive
   - Réseaux sociaux

### Composants Clés
- **Header** : Navigation responsive avec logo MIS
- **Footer** : Liens utiles, contact, réseaux sociaux
- **Hero** : Section d'accueil avec animation
- **ServiceCard** : Cartes services avec hover effects
- **PortfolioGrid** : Grille de projets avec lightbox
- **ContactForm** : Formulaire avancé avec validation
- **Testimonials** : Slider de témoignages
- **LoadingSpinner** : Animation de chargement

## Fonctionnalités Techniques

### Animations
- Parallax scrolling
- Hover effects sur les éléments interactifs
- Transitions fluides entre pages
- Loading animations
- Scroll-triggered animations

### Optimisations
- Lazy loading des images et vidéos
- Compression automatique des assets
- SEO optimisé avec meta tags
- Performance Lighthouse 90+
- Mobile-first responsive design

### Formulaire de Contact
- Validation en temps réel
- Champs dynamiques selon le type de prestation
- Upload de fichiers (brief, références)
- Envoi d'email automatique
- Page de confirmation

## Design Guidelines

### Palette de Couleurs
- **Primaire** : Noir profond (#000000) - Élégance cinématographique
- **Secondaire** : Blanc pur (#FFFFFF) - Contraste et lisibilité
- **Accent** : Or/Jaune (#FFD700) - Luxe et professionnalisme
- **Nuances** : Gris foncé (#1A1A1A, #333333) - Profondeur

### Typographie
- **Headers** : Police moderne et impactante (ex: Montserrat Bold)
- **Body** : Lisible et professionnelle (ex: Inter Regular)
- **Accents** : Italique pour les citations et témoignages

### Style Visuel
- Design minimaliste avec beaucoup d'espace blanc
- Grilles asymétriques pour dynamisme
- Ombres subtiles et effets de profondeur
- Iconographie cohérente et moderne

## Contenu à Préparer

### Textes
- Description de l'entreprise MIS
- Historique et équipe
- Détails des services proposés
- Témoignages clients
- Processus de travail
- Tarification et formules

### Médias
- Logo MIS (à fournir)
- Photos de l'équipe
- Exemples de réalisations (photos/vidéos)
- Showreel de présentation
- Photos d'équipements
- Certificats et récompenses

### Informations Pratiques
- Coordonnées complètes
- Zone de couverture géographique
- Horaires d'ouverture
- Liens réseaux sociaux
- Informations légales

## Commandes de Développement

```bash
# Installation des dépendances
npm install

# Développement local
npm run dev

# Build de production
npm run build

# Lancement en production
npm run start

# Linting
npm run lint

# Tests (si configurés)
npm run test
```

## Déploiement
Le site sera optimisé pour un déploiement sur Vercel avec :
- Auto-deployment depuis Git
- Optimisations automatiques
- CDN global
- Analytics intégrés

## Notes d'Implémentation
- Logo MIS à intégrer dès réception
- Contenu placeholder en attendant le contenu définitif
- Formulaire de contact à connecter à un service d'email
- Analytics à configurer selon les préférences client
- Tests de performance réguliers recommandés

---

**Développé avec ❤️ pour MIS - Mémoire Image Sons**