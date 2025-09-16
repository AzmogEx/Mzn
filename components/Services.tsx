'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, Star, ArrowRight } from 'lucide-react';

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const services = [
    {
      name: "Essentiel",
      price: "À partir de 800€",
      category: "Mariage & Événements",
      description: "Package complet pour immortaliser vos moments précieux",
      features: [
        "4h de couverture photo",
        "200 photos retouchées",
        "Galerie en ligne privée",
        "Livraison sous 15 jours",
        "Sauvegarde cloud sécurisée"
      ],
      popular: false,
      gradient: "from-gray-100 to-gray-200"
    },
    {
      name: "Premium",
      price: "À partir de 1500€",
      category: "Mariage & Corporate",
      description: "L'excellence pour vos événements les plus importants",
      features: [
        "8h de couverture photo + vidéo",
        "400 photos retouchées",
        "Clip résumé de 3 minutes",
        "Drone (si autorisé)",
        "Album photo premium 30x30cm",
        "Livraison sous 10 jours",
        "Suivi personnalisé"
      ],
      popular: true,
      gradient: "from-[#C9A66B] to-[#B8956B]"
    },
    {
      name: "Corporate",
      price: "Sur mesure",
      category: "Entreprise",
      description: "Solutions sur-mesure pour valoriser votre image de marque",
      features: [
        "Portraits corporate",
        "Reportage événementiel",
        "Contenu réseaux sociaux",
        "Vidéos institutionnelles",
        "Retouche professionnelle",
        "Délais express disponibles",
        "Accompagnement stratégique"
      ],
      popular: false,
      gradient: "from-blue-100 to-blue-200"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Nos <span className="text-[#C9A66B] italic">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-[#666] max-w-3xl mx-auto leading-relaxed"
          >
            Des formules adaptées à tous vos besoins, de l'événement intime 
            à la production corporate la plus ambitieuse.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className={`relative overflow-hidden rounded-3xl ${
                service.popular 
                  ? 'ring-4 ring-[#C9A66B] ring-opacity-20 transform scale-105' 
                  : 'hover-glow'
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-6 right-6 z-10">
                  <div className="bg-white text-[#C9A66B] px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold shadow-lg">
                    <Star size={16} fill="currentColor" />
                    Populaire
                  </div>
                </div>
              )}

              {/* Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10`} />
              
              {/* Content */}
              <div className="relative bg-white p-8 h-full flex flex-col">
                <div className="mb-6">
                  <span className="text-[#C9A66B] text-sm font-semibold uppercase tracking-wide">
                    {service.category}
                  </span>
                  <h3 className="text-2xl font-display font-bold mt-2 mb-3">
                    {service.name}
                  </h3>
                  <p className="text-[#666] leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="text-3xl font-display font-bold text-[#C9A66B]">
                    {service.price}
                  </div>
                </div>

                {/* Features */}
                <div className="flex-1">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 + featureIndex * 0.05 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-5 h-5 bg-[#C9A66B] rounded-full flex items-center justify-center flex-shrink-0">
                          <Check size={12} className="text-white" />
                        </div>
                        <span className="text-[#666]">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`w-full mt-8 py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    service.popular
                      ? 'bg-[#C9A66B] text-white hover:bg-[#B8956B] shadow-lg'
                      : 'bg-[#FAFAFA] text-[#C9A66B] hover:bg-[#C9A66B] hover:text-white border border-[#E5E5E5]'
                  }`}
                >
                  Demander un devis
                  <ArrowRight size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-[#FAFAFA] rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-display font-bold mb-4">
              Besoin d'un devis personnalisé ?
            </h3>
            <p className="text-[#666] mb-6 leading-relaxed">
              Chaque projet est unique. Contactez-nous pour discuter de vos besoins spécifiques 
              et obtenir une proposition sur-mesure adaptée à votre budget et vos attentes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#C9A66B] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#B8956B] transition-all duration-300"
              >
                Obtenir un devis gratuit
              </motion.button>
              <a 
                href="tel:+33123456789"
                className="text-[#C9A66B] font-semibold hover:text-[#B8956B] transition-colors"
              >
                ou appelez-nous : 01 23 45 67 89
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;