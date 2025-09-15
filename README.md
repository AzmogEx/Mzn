# MIS - Mémoire Image Sons

Site vitrine professionnel pour l'entreprise de production audiovisuelle **MIS (Mémoire Image Sons)**.

## 🎯 Aperçu du Projet

Site web moderne et élégant développé avec Next.js, présentant les services de production audiovisuelle de MIS avec un design cinématographique et des animations fluides.

## ✨ Fonctionnalités

- **Design moderne** avec animations Framer Motion
- **Responsive** adapté à tous les appareils
- **Hero section** impactante avec effets visuels
- **Formulaire de contact avancé** avec validation
- **Navigation fluide** avec scroll smooth
- **Optimisé SEO** et performances
- **Thème sombre élégant** avec accents dorés

## 🚀 Démarrage Rapide

```bash
# Installation des dépendances
npm install

# Lancement en développement
npm run dev

# Build de production
npm run build

# Lancement en production
npm run start
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 🛠 Technologies Utilisées

- **Next.js 15** avec App Router et Turbopack
- **TypeScript** pour la robustesse du code
- **Tailwind CSS** pour le styling
- **Framer Motion** pour les animations
- **React Hook Form + Zod** pour la gestion des formulaires
- **Lucide React** pour les icônes

## 📁 Structure du Projet

```
src/
├── app/                    # Pages Next.js (App Router)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   └── globals.css        # Styles globaux
├── components/            # Composants React
│   ├── layout/           # Header, Footer
│   ├── sections/         # Hero, ContactForm
│   └── ui/               # Composants réutilisables
├── lib/                  # Utilitaires et données
│   ├── data.ts          # Données de l'entreprise
│   └── utils.ts         # Fonctions utilitaires
└── types/               # Types TypeScript
    └── index.ts
```

## 🎨 Personalisation

### Couleurs et Thème
Les couleurs sont définies dans `src/app/globals.css` :
- **Primaire** : Noir (#000000)
- **Accent** : Or (#FFD700)
- **Texte** : Blanc (#FFFFFF)

### Contenu de l'Entreprise
Modifiez le fichier `src/lib/data.ts` pour :
- Informations de contact
- Services proposés
- Témoignages clients
- Projets portfolio

### Logo et Images
- Placez le logo MIS dans `/public/logo-mis.png`
- Ajoutez les images de portfolio dans `/public/portfolio/`
- Remplacez le favicon dans `/public/favicon.ico`

## 📧 Configuration du Formulaire

Le formulaire de contact est prêt à être connecté à votre service d'envoi d'emails préféré :

1. **Services recommandés** : EmailJS, Resend, SendGrid
2. **Fichier à modifier** : `src/components/sections/ContactForm.tsx`
3. **Variables d'environnement** : Créez `.env.local` pour vos clés API

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload du dossier .next vers Netlify
```

### Autres Plateformes
Le site est compatible avec toutes les plateformes supportant Next.js.

## 📱 Responsive Design

Le site s'adapte automatiquement à toutes les tailles d'écran :
- **Mobile** : 320px+
- **Tablet** : 768px+
- **Desktop** : 1024px+
- **Large** : 1920px+

## ⚡ Performance

Optimisations incluses :
- Images WebP/AVIF automatiques
- Lazy loading des composants
- Compression Gzip
- Score Lighthouse 90+
- SEO optimisé

## 🔧 Scripts Disponibles

```bash
npm run dev          # Développement avec Turbopack
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # Vérification du code
```

## 📞 Support

Pour toute question ou personnalisation, consultez la documentation dans `claude.md` ou contactez le développeur.

## 🎉 Prochaines Étapes

1. **Ajout du logo MIS** quand disponible
2. **Contenu réel** (textes, images, vidéos)
3. **Sections additionnelles** (services détaillés, portfolio complet)
4. **Configuration email** pour le formulaire de contact
5. **Analytics** (Google Analytics, etc.)

---

**Développé avec ❤️ pour MIS - Mémoire Image Sons**
