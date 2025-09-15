export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  pricing?: {
    base: number;
    description: string;
  };
  gallery?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'mariage' | 'corporate' | 'artistique' | 'immobilier' | 'formation';
  coverImage: string;
  gallery: string[];
  services: string[];
  date: string;
  client?: string;
  testimonial?: {
    content: string;
    author: string;
    rating: number;
  };
}

export interface Testimonial {
  id: string;
  content: string;
  author: string;
  role?: string;
  company?: string;
  rating: number;
  avatar?: string;
  project?: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  serviceType: string;
  eventDate?: string;
  budget?: string;
  location?: string;
  message: string;
  files?: FileList;
}

export interface NavigationItem {
  name: string;
  href: string;
  icon?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  socialLinks: SocialLink[];
}