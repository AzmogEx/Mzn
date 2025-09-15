import { Service, Project, Testimonial, CompanyInfo } from '@/types';

export const companyInfo: CompanyInfo = {
  name: "MIS - Mémoire Image Sons",
  tagline: "Capturer vos moments, créer vos souvenirs",
  description: "Spécialisés dans la production audiovisuelle, nous immortalisons vos événements les plus précieux avec un savoir-faire professionnel et une approche créative unique.",
  address: "Paris, France",
  phone: "+33 1 23 45 67 89",
  email: "contact@mis-production.fr",
  socialLinks: [
    { platform: "Instagram", url: "https://instagram.com/mis-production", icon: "instagram" },
    { platform: "Facebook", url: "https://facebook.com/mis-production", icon: "facebook" },
    { platform: "YouTube", url: "https://youtube.com/mis-production", icon: "youtube" },
    { platform: "Vimeo", url: "https://vimeo.com/mis-production", icon: "play-circle" }
  ]
};

export const services: Service[] = [
  {
    id: "mariage",
    title: "Mariages & Événements Privés",
    description: "Immortalisez votre jour J avec une équipe professionnelle dédiée à capturer chaque émotion.",
    icon: "heart",
    features: [
      "Couverture photo & vidéo complète",
      "Drone pour prises aériennes",
      "Live streaming pour invités distants",
      "Montage cinématographique",
      "Livraison sous 4 semaines"
    ],
    pricing: {
      base: 1500,
      description: "À partir de 1500€ pour une journée complète"
    }
  },
  {
    id: "corporate",
    title: "Événements Corporatifs",
    description: "Solutions audiovisuelles professionnelles pour conférences, séminaires et événements d'entreprise.",
    icon: "briefcase",
    features: [
      "Captation multi-caméras",
      "Streaming en direct HD",
      "Interviews et témoignages",
      "Post-production rapide",
      "Support technique complet"
    ],
    pricing: {
      base: 800,
      description: "À partir de 800€ par jour"
    }
  },
  {
    id: "artistique",
    title: "Productions Artistiques",
    description: "Concerts, spectacles et créations artistiques captés avec expertise technique et sensibilité créative.",
    icon: "music",
    features: [
      "Éclairage professionnel",
      "Captation sonore multipiste",
      "Angles de vue dynamiques",
      "Colorimétrie sur mesure",
      "Formats de diffusion multiples"
    ],
    pricing: {
      base: 1200,
      description: "Devis personnalisé selon projet"
    }
  },
  {
    id: "immobilier",
    title: "Immobilier & Architecture",
    description: "Visites virtuelles et photographie d'architecture pour valoriser vos biens immobiliers.",
    icon: "home",
    features: [
      "Visites virtuelles 360°",
      "Photographie HDR",
      "Vidéos de présentation",
      "Prises de vue aériennes",
      "Plans interactifs"
    ],
    pricing: {
      base: 400,
      description: "À partir de 400€ par bien"
    }
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    content: "Une équipe exceptionnelle qui a su capturer parfaitement l'essence de notre mariage. Le résultat dépasse toutes nos attentes !",
    author: "Marie & Thomas",
    role: "Mariés",
    rating: 5,
    project: "Mariage Château de Versailles"
  },
  {
    id: "2",
    content: "Professionnalisme irréprochable pour notre événement corporate. La qualité technique et l'approche créative font la différence.",
    author: "Sophie Laurent",
    role: "Directrice Marketing",
    company: "TechCorp",
    rating: 5,
    project: "Conférence annuelle TechCorp"
  },
  {
    id: "3",
    content: "MIS a transformé notre concert en véritable œuvre cinématographique. Une collaboration artistique enrichissante.",
    author: "Alexandre Dubois",
    role: "Musicien",
    rating: 5,
    project: "Concert Salle Pleyel"
  }
];

export const projects: Project[] = [
  {
    id: "mariage-versailles",
    title: "Mariage Royal au Château de Versailles",
    description: "Une célébration somptueuse dans les jardins du château, captée avec élégance et raffinement.",
    category: "mariage",
    coverImage: "/placeholder-wedding.jpg",
    gallery: ["/placeholder-wedding-1.jpg", "/placeholder-wedding-2.jpg"],
    services: ["Photo", "Vidéo", "Drone", "Live Streaming"],
    date: "2024-06-15",
    client: "Marie & Thomas",
    testimonial: {
      content: "Une prestation exceptionnelle qui a immortalisé notre jour parfait.",
      author: "Marie & Thomas",
      rating: 5
    }
  },
  {
    id: "conference-techcorp",
    title: "Conférence Annuelle TechCorp",
    description: "Événement corporate de 500 participants avec diffusion en direct international.",
    category: "corporate",
    coverImage: "/placeholder-corporate.jpg",
    gallery: ["/placeholder-corporate-1.jpg", "/placeholder-corporate-2.jpg"],
    services: ["Multi-caméras", "Live Streaming", "Post-production"],
    date: "2024-03-20",
    client: "TechCorp International"
  },
  {
    id: "concert-pleyel",
    title: "Concert Symphonique Salle Pleyel",
    description: "Captation d'un concert exceptionnel avec l'Orchestre de Paris.",
    category: "artistique",
    coverImage: "/placeholder-concert.jpg",
    gallery: ["/placeholder-concert-1.jpg", "/placeholder-concert-2.jpg"],
    services: ["Captation 4K", "Son multipiste", "Étalonnage"],
    date: "2024-01-10",
    client: "Orchestre de Paris"
  }
];

export const navigationItems = [
  { name: "Accueil", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "À Propos", href: "#about" },
  { name: "Contact", href: "#contact" }
];