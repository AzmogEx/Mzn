'use client';

import { motion } from 'framer-motion';
import { Heart, Camera } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Photographie de mariage", href: "#services" },
        { name: "Corporate & Événements", href: "#services" },
        { name: "Portraits professionnels", href: "#services" },
        { name: "Production audiovisuelle", href: "#services" }
      ]
    },
    {
      title: "Entreprise",
      links: [
        { name: "À propos", href: "#apropos" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Témoignages", href: "#" },
        { name: "Blog", href: "#" }
      ]
    },
    {
      title: "Contact",
      links: [
        { name: "Demander un devis", href: "#contact" },
        { name: "01 23 45 67 89", href: "tel:+33123456789" },
        { name: "contact@mis-photo.fr", href: "mailto:contact@mis-photo.fr" },
        { name: "Paris & Région Parisienne", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              <h3 className="text-3xl font-display font-bold mb-2">MIS</h3>
              <p className="text-[#C9A66B] font-medium">Mémoire Image & Sons</p>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Transformons vos moments précieux en souvenirs éternels. 
              Photographie et audiovisuel haut de gamme depuis 2016.
            </p>
            <div className="flex items-center gap-2 text-[#C9A66B]">
              <Camera size={16} />
              <span className="text-sm font-medium">Madani Marzuk, Fondateur</span>
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-display font-semibold text-lg mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-[#C9A66B] transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-400">
            <span>© {currentYear} MIS - Mémoire Image & Sons</span>
            <span className="hidden md:block">•</span>
            <span>Tous droits réservés</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-[#C9A66B] transition-colors">
              Mentions légales
            </a>
            <span>•</span>
            <a href="#" className="hover:text-[#C9A66B] transition-colors">
              Politique de confidentialité
            </a>
            <span>•</span>
            <div className="flex items-center gap-1">
              <span>Fait avec</span>
              <Heart size={12} className="text-[#C9A66B]" fill="currentColor" />
              <span>à Paris</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;