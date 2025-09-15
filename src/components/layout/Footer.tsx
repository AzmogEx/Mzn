'use client';

import { motion } from 'framer-motion';
import { Camera, Mail, Phone, MapPin, Instagram, Facebook, Youtube, PlayCircle } from 'lucide-react';
import { companyInfo, navigationItems } from '@/lib/data';

const iconMap = {
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube,
  'play-circle': PlayCircle,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Camera className="h-8 w-8 text-yellow-400" />
              <span className="font-montserrat font-bold text-xl text-white">
                MIS
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {companyInfo.description}
            </p>
            <div className="flex space-x-4">
              {companyInfo.socialLinks.map((link) => {
                const IconComponent = iconMap[link.icon as keyof typeof iconMap];
                return (
                  <motion.a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2, scale: 1.1 }}
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                  >
                    <IconComponent size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-montserrat font-semibold text-white">Navigation</h3>
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.name}>
                  <motion.button
                    onClick={() => handleNavClick(item.href)}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-montserrat font-semibold text-white">Nos Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Mariages & Événements</li>
              <li>Corporate & Conférences</li>
              <li>Productions Artistiques</li>
              <li>Immobilier & Architecture</li>
              <li>Formation & Webinaires</li>
              <li>Post-production</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-montserrat font-semibold text-white">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">{companyInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {companyInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {companyInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} {companyInfo.name}. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <button className="hover:text-white transition-colors duration-200">
                Mentions légales
              </button>
              <button className="hover:text-white transition-colors duration-200">
                Politique de confidentialité
              </button>
              <button className="hover:text-white transition-colors duration-200">
                CGV
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}