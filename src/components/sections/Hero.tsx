'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Play, Camera, Video, Zap } from 'lucide-react';
import { companyInfo } from '@/lib/data';

export default function Hero() {
  const [currentVideo, setCurrentVideo] = useState(0);

  // Placeholder pour les vidéos de démonstration
  const demoVideos = [
    "Mariage élégant au Château",
    "Conférence corporate moderne",
    "Concert artistique captivant"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % demoVideos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [demoVideos.length]);

  const handleScrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-black/40" />
        {/* Animated background elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-yellow-400 font-medium text-lg mb-4 tracking-wide"
          >
            {companyInfo.tagline}
          </motion.p>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-bold text-white mb-6 leading-tight"
          >
            <span className="text-gradient">Mémoire</span>
            <br />
            <span className="text-white">Image</span> & <span className="text-white">Sons</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Production audiovisuelle professionnelle pour immortaliser vos moments précieux avec excellence et créativité.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-8 mb-10"
          >
            <div className="flex items-center space-x-2">
              <Camera className="h-6 w-6 text-yellow-400" />
              <span className="text-white font-semibold">500+ Événements</span>
            </div>
            <div className="flex items-center space-x-2">
              <Video className="h-6 w-6 text-yellow-400" />
              <span className="text-white font-semibold">10 ans d&apos;expérience</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="h-6 w-6 text-yellow-400" />
              <span className="text-white font-semibold">Livraison 48h</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContactClick}
              className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg"
            >
              Demander un Devis
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleScrollToServices}
              className="glass-effect text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center space-x-2"
            >
              <Play className="h-5 w-5" />
              <span>Voir nos Réalisations</span>
            </motion.button>
          </motion.div>

          {/* Video Carousel Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-center mb-8"
          >
            <p className="text-gray-400 text-sm mb-2">Actuellement en vedette</p>
            <p className="text-white font-semibold">{demoVideos[currentVideo]}</p>
            <div className="flex justify-center space-x-2 mt-3">
              {demoVideos.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 w-8 rounded-full transition-all duration-300 ${
                    index === currentVideo ? 'bg-yellow-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={handleScrollToServices}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-white/70 hover:text-yellow-400 transition-colors duration-200"
          >
            <ChevronDown className="h-8 w-8" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}