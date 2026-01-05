# Mémoire Image & Sons - Site Web

Site web professionnel pour **Mémoire Image & Sons**, société de production vidéo opérant sur trois verticales : Institutions (EHPAD), Entreprises (TV/Streaming), et Particuliers (Mariages).

## 🎬 Aperçu

Un site web immersif et cinématographique construit avec Next.js 14, offrant une expérience utilisateur fluide pour trois types d'audiences distinctes.

## 🚀 Stack Technique

- **Framework**: Next.js 14 (App Router, TypeScript)
- **Styling**: Tailwind CSS (Mobile-first)
- **UI**: Shadcn/UI (Radix Primitives)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Formulaires**: React Hook Form + Zod
- **Polices**: Syne (Titres) + Inter (Corps)

## 📁 Structure du Projet

```
app/
├── page.tsx                 # Accueil - Hub central avec Bento Grid
├── layout.tsx               # Layout global avec Navbar/Footer
├── globals.css              # Design system et utilitaires
├── institutions/            # EHPAD & Ateliers Mémoire
├── entreprises/             # Plateaux TV & Streaming
├── particuliers/            # Mariages & Biographies
├── contact/                 # Formulaire intelligent
└── espace-client/           # Interface de connexion

components/
├── ui/                      # Composants Shadcn/UI personnalisés
│   ├── button.tsx
│   ├── card.tsx
│   ├── input.tsx
│   └── ...
├── layout/
│   ├── navbar.tsx           # Navigation avec thème dynamique
│   └── footer.tsx           # Pied de page avec partenaires
├── service-layout.tsx       # Template réutilisable pour les services
└── contact-form.tsx         # Formulaire conditionnel multi-étapes
```

## 🎨 Design System

### Palette de Couleurs

- **Background**: `#0F1115` (Deep Anthracite)
- **Corporate (Bleu)**: `#3B82F6` - TV, Streaming, Business
- **Emotion (Violet)**: `#8B5CF6` - Mariages, EHPAD
- **Rose**: `#EC4899` - Accent émotionnel

### Effets Visuels

- **Glassmorphism**: Cartes avec fond noir 60% opacité + backdrop blur
- **Glow Effects**: Lueurs colorées au survol
- **Technical Decorations**: Crosshairs (+), indicateurs REC, grilles techniques

## 🛠️ Installation

```bash
# Cloner le repository
git clone <repo-url>
cd memoire-image-sons

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📝 Scripts Disponibles

```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run start    # Démarrer en production
npm run lint     # Vérification ESLint
```

## 🌐 Pages

| Route | Description |
|-------|-------------|
| `/` | Page d'accueil avec Bento Grid |
| `/institutions` | Services EHPAD & Ateliers Mémoire |
| `/entreprises` | Services Corporate & Broadcast |
| `/particuliers` | Services Mariage & Famille |
| `/contact` | Formulaire de devis intelligent |
| `/espace-client` | Interface de connexion client |

## 🔧 Fonctionnalités Clés

### Formulaire de Contact Intelligent
- Multi-étapes avec validation Zod
- Champs conditionnels selon le type de client :
  - **Entreprise** → SIRET, type d'événement, besoin de live
  - **Particulier** → Date, lieu, nombre d'invités
  - **Institution** → Type de structure, financement

### Navigation Dynamique
- Thème qui change selon la section (bleu pour entreprises, violet pour autres)
- Navbar glassmorphism sticky avec indicateur actif animé
- Menu mobile avec animations Framer Motion

### Accessibilité (RGAA)
- Skip links pour lecteurs d'écran
- Contraste élevé pour les seniors
- Focus states visibles
- Labels explicites

## 📱 Responsive Design

Le site est conçu mobile-first avec des breakpoints Tailwind standards :
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## 🔐 Mentions Légales

Le footer inclut les liens obligatoires :
- Mentions Légales
- Politique de Confidentialité
- Droit à l'Image (crucial pour EHPAD)

## 📄 License

Propriétaire - Mémoire Image & Sons © 2024
